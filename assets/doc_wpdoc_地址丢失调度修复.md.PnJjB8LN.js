import{_ as s,o as n,c as a,R as e}from"./chunks/framework.E9w9IFh5.js";const g=JSON.parse('{"title":"地址丢失调度修复","description":"","frontmatter":{"title":"地址丢失调度修复","date":"2020-05-20T09:34:47.000Z"},"headers":[],"relativePath":"doc/wpdoc/地址丢失调度修复.md","filePath":"doc/wpdoc/地址丢失调度修复.md"}'),t={name:"doc/wpdoc/地址丢失调度修复.md"},p=e(`<h1 id="地址丢失调度修复1" tabindex="-1">地址丢失调度修复1 <a class="header-anchor" href="#地址丢失调度修复1" aria-label="Permalink to &quot;地址丢失调度修复1&quot;">​</a></h1><p>定位控件获取地址方案：定位频率低的，走单次定位；定位频率高的用新逻辑：已知缓存+持续定位。<br> 定位频率高时能保证能定位成功（成功获取经纬度），但是获取到中文地址的概率是会比单次定位要低。因此需要配合“水印分离”的功能，且需要定时调度接口，获取经纬度对应的中文地址。</p><p>通过经纬度获取中文地址方法如下（赖沛欣供文）：</p><h4 id="_1-根据地址为空去进行数据库模糊查询" tabindex="-1">1. 根据地址为空去进行数据库模糊查询 <a class="header-anchor" href="#_1-根据地址为空去进行数据库模糊查询" aria-label="Permalink to &quot;1\\. 根据地址为空去进行数据库模糊查询&quot;">​</a></h4><p>例子：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var temp=select id,signoutaddress from kx_kq_channelinandout where signoutaddress like &#39;%&#39;||&#39;{&quot;address&quot;:&quot;&quot;&#39;||&#39;%&#39;</span></span>
<span class="line"><span>and createtime&gt;=&#39;2020-03-01 00:00:00&#39;</span></span>
<span class="line"><span>limit 800 norule;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-查出来的地址数据进行解析获取经纬度" tabindex="-1">2. 查出来的地址数据进行解析获取经纬度 <a class="header-anchor" href="#_2-查出来的地址数据进行解析获取经纬度" aria-label="Permalink to &quot;2\\. 查出来的地址数据进行解析获取经纬度&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>JSON.parse(temp[i].signoutaddress).longitude</span></span>
<span class="line"><span>JSON.parse(temp[i].signoutaddress).latitude</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_3-根据我们查出来地址为空的数据的经纬度-放到地址转换函数maputil-transferlocation中去获取定位地址" tabindex="-1">3. 根据我们查出来地址为空的数据的经纬度，放到地址转换函数MAPUTIL.transferLocation中去获取定位地址 <a class="header-anchor" href="#_3-根据我们查出来地址为空的数据的经纬度-放到地址转换函数maputil-transferlocation中去获取定位地址" aria-label="Permalink to &quot;3\\. 根据我们查出来地址为空的数据的经纬度，放到地址转换函数MAPUTIL.transferLocation中去获取定位地址&quot;">​</a></h4><p>例如</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>load(&#39;amap&#39;);</span></span>
<span class="line"><span>MAPUTIL.transferLocation(JSON.parse(temp[i].signoutaddress).longitude, JSON.parse(temp[i].signoutaddress).latitude)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>返回的结果：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{&quot;address&quot;:&quot;广东省肇庆市高要区金利镇深达金属制品厂&quot;,&quot;latitude&quot;:&quot;23.086135&quot;,&quot;longitude&quot;:&quot;112.767987&quot;}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_4-最后把结果的重新更新到数据库" tabindex="-1">4. 最后把结果的重新更新到数据库 <a class="header-anchor" href="#_4-最后把结果的重新更新到数据库" aria-label="Permalink to &quot;4\\. 最后把结果的重新更新到数据库&quot;">​</a></h4><p>注意：</p><ul><li><p>1、建议一次性修复不要超过1k条，会造成并发，导致某些修复异常，</p><p>如果发现自己的修复后数据有出现‘定位经纬度获取成功，但获取中文地址失败’，这种就是出现并发导致修复异常，也需要进行select createtime,signinaddress,signoutaddress from kx_kq_storeinandout where signinaddress like &#39;%定位经纬度%&#39;模糊查询再修复</p></li><li><p>2、最好在整个for循环修复中加try catch，即便某些地址可能经纬度都丢失导致报错，不至于下面的运行停止</p></li><li><p>3、如果发现转换后地址还是为空，可以使用经纬度信息到<a href="https://lbs.amap.com/api/webservice/guide/api/convert" target="_blank" rel="noreferrer">高德</a>的官网进行转换试一下地址是否正确，地址正确可能今天的高德地图转换次数被用光，建议明天再转，或者自己项目单独申请一个独立的300w次每天的转换量</p></li></ul><p>本例子：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//每三分钟跑一次调度</span></span>
<span class="line"><span>load(&#39;amap&#39;);</span></span>
<span class="line"><span>var temp=select id,signoutaddress from kx_kq_channelinandout where signoutaddress like &#39;%&#39;||&#39;{&quot;address&quot;:&quot;&quot;&#39;||&#39;%&#39;</span></span>
<span class="line"><span>and createtime&gt;=&#39;2020-03-01 00:00:00&#39;</span></span>
<span class="line"><span>limit 800 norule;</span></span>
<span class="line"><span>//and storecode=&#39;S000975520&#39;</span></span>
<span class="line"><span>for(var i in temp){</span></span>
<span class="line"><span>         if(temp[i].signoutaddress!=&#39;&#39; &amp;&amp; temp[i].signoutaddress!=null){</span></span>
<span class="line"><span>     if(JSON.parse(temp[i].signoutaddress).address+&#39;&#39;==&#39;&#39; ||</span></span>
<span class="line"><span>      JSON.parse(temp[i].signoutaddress).address==null){</span></span>
<span class="line"><span>       try{</span></span>
<span class="line"><span>           //FLY.log(999);</span></span>
<span class="line"><span>            var add={</span></span>
<span class="line"><span>                &quot;exception&quot; : &quot;&quot;,</span></span>
<span class="line"><span>                &quot;latitude&quot; : JSON.parse(temp[i].signoutaddress).latitude,</span></span>
<span class="line"><span>                &quot;longitude&quot; :JSON.parse(temp[i].signoutaddress).longitude,</span></span>
<span class="line"><span>                &quot;address&quot; : </span></span>
<span class="line"><span>   MAPUTIL.transferLocation(JSON.parse(temp[i].signoutaddress).longitude, JSON.parse(temp[i].signoutaddress).latitude).address.toString()</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            temp[i].signoutaddress=JSON.stringify(add);</span></span>
<span class="line"><span>     }catch(err){</span></span>
<span class="line"><span>        temp[i].signoutaddress = temp[i].signoutaddress;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>if(temp.length&gt;0){</span></span>
<span class="line"><span>   DB.update(temp);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>FLY.log(temp.length);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><hr><h1 id="地址丢失调度修复2" tabindex="-1">地址丢失调度修复2 <a class="header-anchor" href="#地址丢失调度修复2" aria-label="Permalink to &quot;地址丢失调度修复2&quot;">​</a></h1><p>在APP定位控件获取中文地址的频率低，可以在定位控件中设置频率为最高，但也情况是有经纬度没有中文地址的情况下，就需要走接口进行调度，看具体项目数据量情况定义时间。根据经纬度获取对应的中文地址，目前有考勤，终端和经销商签到签退，其他的看项目情况。</p><p>通过经纬度获取中文地址调度接口案例如下（曾小兵著作）：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   {</span></span>
<span class="line"><span>    &quot;models&quot;:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;modeldescr&quot;:&quot;&quot;,</span></span>
<span class="line"><span>            &quot;createtime&quot;:&quot;2020-04-29 16:36:11.0&quot;,</span></span>
<span class="line"><span>            &quot;createaccountcode&quot;:0,</span></span>
<span class="line"><span>            &quot;dddlayer&quot;:1,</span></span>
<span class="line"><span>            &quot;modelname&quot;:&quot;根据经纬度获取中文地址&quot;,</span></span>
<span class="line"><span>            &quot;directorytypecode&quot;:1128901213371371619,</span></span>
<span class="line"><span>            &quot;metamodelcode&quot;:1207996022157086720,</span></span>
<span class="line"><span>            &quot;classname&quot;:&quot;&quot;,</span></span>
<span class="line"><span>            &quot;modelcode&quot;:1255414723080491107,</span></span>
<span class="line"><span>            &quot;marktype&quot;:2,</span></span>
<span class="line"><span>            &quot;updatetime&quot;:&quot;2020-04-29 18:47:37.0&quot;,</span></span>
<span class="line"><span>            &quot;updateaccountname&quot;:&quot;曾小兵&quot;,</span></span>
<span class="line"><span>            &quot;createaccountname&quot;:&quot;曾小兵&quot;,</span></span>
<span class="line"><span>            &quot;seq&quot;:389,</span></span>
<span class="line"><span>            &quot;status&quot;:1,</span></span>
<span class="line"><span>            &quot;updateaccountcode&quot;:0</span></span>
<span class="line"><span>        }],</span></span>
<span class="line"><span>    &quot;logics&quot;:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;modellogicname&quot;:&quot;根据经纬度获取中文地址&quot;,</span></span>
<span class="line"><span>            &quot;execmode&quot;:&quot;1&quot;,</span></span>
<span class="line"><span>            &quot;status&quot;:1,</span></span>
<span class="line"><span>            &quot;actiontype&quot;:&quot;1&quot;,</span></span>
<span class="line"><span>            &quot;modelcode&quot;:&quot;1255414723080491107&quot;,</span></span>
<span class="line"><span>            &quot;actioncategory&quot;:&quot;1&quot;,</span></span>
<span class="line"><span>            &quot;usedatarule&quot;:&quot;1&quot;,</span></span>
<span class="line"><span>            &quot;functionname&quot;:&quot;&quot;,</span></span>
<span class="line"><span>            &quot;operations&quot;:[</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;templateref&quot;:&quot;106&quot;,</span></span>
<span class="line"><span>                    &quot;modellogicstepname&quot;:&quot;&quot;,</span></span>
<span class="line"><span>                    &quot;marktype&quot;:&quot;2&quot;,</span></span>
<span class="line"><span>                    &quot;modellogiccode&quot;:&quot;1255414723080491106&quot;,</span></span>
<span class="line"><span>                    &quot;modellogicstepcode&quot;:&quot;1255414723080491105&quot;,</span></span>
<span class="line"><span>                    &quot;seq&quot;:1,</span></span>
<span class="line"><span>                    &quot;status&quot;:&quot;1&quot;,</span></span>
<span class="line"><span>                    &quot;templateparams&quot;:{</span></span>
<span class="line"><span>                        &quot;flycode&quot;:&quot;load(&#39;amap&#39;);\\n// 修改：latlng; --考勤\\nFLY.log(&#39;--考勤&#39;);\\nvar signrecordnew = select signid,adress,latlng from kx_kq_signrecordnew where adress = &#39;&#39; and latlng &lt;&gt; &#39;&#39; limit 100 norule;\\n   // FLY.log(signrecordnew.length);\\n\\nif(signrecordnew.length&gt;0){\\n    for(var i=0;i&lt;signrecordnew.length;i++){\\n     // FLY.log(JSON.parse(signrecordnew[i].latlng).longitude);\\n      if(JSON.parse(signrecordnew[i].latlng).longitude !=null &amp;&amp; JSON.parse(signrecordnew[i].latlng).longitude !=\\&quot;\\&quot; &amp;&amp; JSON.parse(signrecordnew[i].latlng).latitude &amp;&amp; JSON.parse(signrecordnew[i].latlng).latitude !=\\&quot;\\&quot;) {\\n       try{ \\n  formatAddress = MAPUTIL.transferLocation(JSON.parse(signrecordnew[i].latlng).longitude,JSON.parse(signrecordnew[i].latlng).latitude);\\t\\n        }catch(err){\\n    formatAddress={};\\n     formatAddress.formatted_address =\\&quot;\\&quot;;\\n  }\\n  signrecordnew[i].adress = formatAddress.formatted_address; \\n  //{\\&quot;latitude\\&quot;:\\&quot;22.565368\\&quot;,\\&quot;longitude\\&quot;:\\&quot;113.922646\\&quot;,\\&quot;address\\&quot;:\\&quot;南山建工村\\&quot;}\\n  signrecordnew[i].latlng = &#39;{\\&quot;latitude\\&quot;:\\&quot;&#39;+JSON.parse(signrecordnew[i].latlng).latitude+&#39;\\&quot;,\\&quot;longitude\\&quot;:\\&quot;&#39;+JSON.parse(signrecordnew[i].latlng).longitude+&#39;\\&quot;,\\&quot;address\\&quot;:\\&quot;&#39;+signrecordnew[i].adress+&#39;\\&quot;}&#39;;\\n      //FLY.log(signrecordnew[i].adress);\\n  \\n}     \\n\\n    }\\n DB.update(signrecordnew);\\n}\\nFLY.log(&#39;--终端签到&#39;);\\n//--signinaddress.address = &#39;&#39;  --signinaddress --终端签到\\nvar storein = select id,signinaddress from kx_kq_storeinandout where (signinaddress like &#39;%address\\&quot;:\\&quot;\\&quot;%&#39; or signinaddress like &#39;%\\&quot;address\\&quot; : \\&quot;定位经纬度获取成功，但获取中文地址失败\\&quot;%&#39;)  and signintime is not null limit 100 norule;\\n    //FLY.log(storein.length);\\n\\nif(storein.length&gt;0){\\n    for(var i=0;i&lt;storein.length;i++){\\n if(JSON.parse(storein[i].signinaddress).longitude !=null &amp;&amp; JSON.parse(storein[i].signinaddress).longitude !=\\&quot;\\&quot; &amp;&amp; JSON.parse(storein[i].signinaddress).latitude &amp;&amp; JSON.parse(storein[i].signinaddress).latitude !=\\&quot;\\&quot;){\\n   try{\\n formatAddress = MAPUTIL.transferLocation(JSON.parse(storein[i].signinaddress).longitude,JSON.parse(storein[i].signinaddress).latitude);\\t\\n   }catch(err){\\n    formatAddress={};\\n     formatAddress.formatted_address =\\&quot;\\&quot;;\\n  }\\n  //formatAddress.formatted_address; \\n  //{\\&quot;latitude\\&quot;:\\&quot;22.565368\\&quot;,\\&quot;longitude\\&quot;:\\&quot;113.922646\\&quot;,\\&quot;address\\&quot;:\\&quot;南山建工村\\&quot;}\\n  storein[i].signinaddress = &#39;{\\&quot;latitude\\&quot;:\\&quot;&#39;+JSON.parse(storein[i].signinaddress).latitude+&#39;\\&quot;,\\&quot;longitude\\&quot;:\\&quot;&#39;+JSON.parse(storein[i].signinaddress).longitude+&#39;\\&quot;,\\&quot;address\\&quot;:\\&quot;&#39;+formatAddress.formatted_address+&#39;\\&quot;}&#39;;\\n     // FLY.log(storein[i].signinaddress);\\n }\\n      \\n    }\\n DB.update(storein);\\n}\\nFLY.log(&#39;--终端签退&#39;);\\n//--signinaddress.address = &#39;&#39;  --signinaddress --终端签退\\nvar storeout = select id,signoutaddress from kx_kq_storeinandout where (signoutaddress like &#39;%address\\&quot;:\\&quot;\\&quot;%&#39; or signoutaddress like &#39;%\\&quot;address\\&quot; : \\&quot;定位经纬度获取成功，但获取中文地址失败\\&quot;%&#39;) and signouttime is not null limit 100 norule;\\n    FLY.log(storeout.length);\\n\\nif(storeout.length&gt;0){\\n    for(var i=0;i&lt;storeout.length;i++){\\n if(JSON.parse(storeout[i].signoutaddress).longitude !=null &amp;&amp; JSON.parse(storeout[i].signoutaddress).longitude !=\\&quot;\\&quot; &amp;&amp; JSON.parse(storeout[i].signoutaddress).latitude &amp;&amp; JSON.parse(storeout[i].signoutaddress).latitude !=\\&quot;\\&quot;){\\n   try{\\n formatAddress = MAPUTIL.transferLocation(JSON.parse(storeout[i].signoutaddress).longitude,JSON.parse(storeout[i].signoutaddress).latitude);\\t\\n   }catch(err){\\n    formatAddress={};\\n     formatAddress.formatted_address =\\&quot;\\&quot;;\\n  }\\n  //formatAddress.formatted_address; \\n  //{\\&quot;latitude\\&quot;:\\&quot;22.565368\\&quot;,\\&quot;longitude\\&quot;:\\&quot;113.922646\\&quot;,\\&quot;address\\&quot;:\\&quot;南山建工村\\&quot;}\\n  storeout[i].signoutaddress = &#39;{\\&quot;latitude\\&quot;:\\&quot;&#39;+JSON.parse(storeout[i].signoutaddress).latitude+&#39;\\&quot;,\\&quot;longitude\\&quot;:\\&quot;&#39;+JSON.parse(storeout[i].signoutaddress).longitude+&#39;\\&quot;,\\&quot;address\\&quot;:\\&quot;&#39;+formatAddress.formatted_address+&#39;\\&quot;}&#39;;\\n     // FLY.log(storeout[i].signoutaddress);\\n }\\n      \\n    }\\n DB.update(storeout);\\n}\\nFLY.log(&#39;--渠道签到&#39;);\\n//--signinaddress.address = &#39;&#39;  --signinaddress --渠道签到 kx_kq_channelinandout\\nvar channelin = select inoutid,signinaddress from kx_kq_channelinandout where (signinaddress like &#39;%address\\&quot;:\\&quot;\\&quot;%&#39; or signinaddress like &#39;%\\&quot;address\\&quot; : \\&quot;定位经纬度获取成功，但获取中文地址失败\\&quot;%&#39;)  and signintime is not null limit 100 norule;\\n    //FLY.log(channelin.length);\\n\\nif(channelin.length&gt;0){\\n    for(var i=0;i&lt;channelin.length;i++){\\n if(JSON.parse(channelin[i].signinaddress).longitude !=null &amp;&amp; JSON.parse(channelin[i].signinaddress).longitude !=\\&quot;\\&quot; &amp;&amp; JSON.parse(channelin[i].signinaddress).latitude &amp;&amp; JSON.parse(channelin[i].signinaddress).latitude !=\\&quot;\\&quot;){\\n   try{\\n formatAddress = MAPUTIL.transferLocation(JSON.parse(channelin[i].signinaddress).longitude,JSON.parse(channelin[i].signinaddress).latitude);\\n     }catch(err){\\n    formatAddress={};\\n     formatAddress.formatted_address =\\&quot;\\&quot;;\\n  }\\n  //formatAddress.formatted_address; \\n  //{\\&quot;latitude\\&quot;:\\&quot;22.565368\\&quot;,\\&quot;longitude\\&quot;:\\&quot;113.922646\\&quot;,\\&quot;address\\&quot;:\\&quot;南山建工村\\&quot;}\\n  channelin[i].signinaddress = &#39;{\\&quot;latitude\\&quot;:\\&quot;&#39;+JSON.parse(channelin[i].signinaddress).latitude+&#39;\\&quot;,\\&quot;longitude\\&quot;:\\&quot;&#39;+JSON.parse(channelin[i].signinaddress).longitude+&#39;\\&quot;,\\&quot;address\\&quot;:\\&quot;&#39;+formatAddress.formatted_address+&#39;\\&quot;}&#39;;\\n     // FLY.log(channelin[i].signinaddress);\\n }\\n      \\n    }\\n  DB.update(channelin);\\n}\\nFLY.log(&#39;--渠道签退&#39;);\\n//--signinaddress.address = &#39;&#39;  --signinaddress --渠道签退\\nvar channelout = select inoutid,signoutaddress from kx_kq_channelinandout where (signoutaddress like &#39;%address\\&quot;:\\&quot;\\&quot;%&#39; or signoutaddress like &#39;%\\&quot;address\\&quot; : \\&quot;定位经纬度获取成功，但获取中文地址失败\\&quot;%&#39;)  and signouttime is not null limit 100 norule;\\n    //FLY.log(channelout.length);\\n\\nif(channelout.length&gt;0){\\n    for(var i=0;i&lt;channelout.length;i++){\\n if(JSON.parse(channelout[i].signoutaddress).longitude !=null &amp;&amp; JSON.parse(channelout[i].signoutaddress).longitude !=\\&quot;\\&quot; &amp;&amp; JSON.parse(channelout[i].signoutaddress).latitude &amp;&amp; JSON.parse(channelout[i].signoutaddress).latitude !=\\&quot;\\&quot;){\\n   try{\\n formatAddress = MAPUTIL.transferLocation(JSON.parse(channelout[i].signoutaddress).longitude,JSON.parse(channelout[i].signoutaddress).latitude);\\t\\n   }catch(err){\\n    formatAddress={};\\n     formatAddress.formatted_address =\\&quot;\\&quot;;\\n  }\\n  //formatAddress.formatted_address; \\n  //{\\&quot;latitude\\&quot;:\\&quot;22.565368\\&quot;,\\&quot;longitude\\&quot;:\\&quot;113.922646\\&quot;,\\&quot;address\\&quot;:\\&quot;南山建工村\\&quot;}\\n  channelout[i].signoutaddress = &#39;{\\&quot;latitude\\&quot;:\\&quot;&#39;+JSON.parse(channelout[i].signoutaddress).latitude+&#39;\\&quot;,\\&quot;longitude\\&quot;:\\&quot;&#39;+JSON.parse(channelout[i].signoutaddress).longitude+&#39;\\&quot;,\\&quot;address\\&quot;:\\&quot;&#39;+formatAddress.formatted_address+&#39;\\&quot;}&#39;;\\n     // FLY.log(channelout[i].signoutaddress);\\n }\\n      \\n    }\\n DB.update(channelout);\\n}\\n\\n\\nFLY.log(&#39;执行完成&#39;)&quot;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }],</span></span>
<span class="line"><span>            &quot;modellogiccode&quot;:&quot;1255414723080491106&quot;,</span></span>
<span class="line"><span>            &quot;marktype&quot;:&quot;2&quot;,</span></span>
<span class="line"><span>            &quot;input&quot;:[</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &quot;output&quot;:[</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &quot;logicscript&quot;:&quot;&quot;,</span></span>
<span class="line"><span>            &quot;uilogicscript&quot;:&quot;&quot;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div>`,23),o=[p];function i(l,r,u,d,c,q){return n(),a("div",null,o)}const b=s(t,[["render",i]]);export{g as __pageData,b as default};
