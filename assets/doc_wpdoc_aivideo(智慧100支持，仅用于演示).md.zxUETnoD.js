import{_ as s,c as a,o as i,U as n}from"./chunks/framework.K-r7inPk.js";const c=JSON.parse('{"title":"aivideo(智慧100支持，仅用于演示)","description":"","frontmatter":{"title":"aivideo(智慧100支持，仅用于演示)","date":"2021-02-19T14:49:12.000Z"},"headers":[],"relativePath":"doc/wpdoc/aivideo(智慧100支持，仅用于演示).md","filePath":"doc/wpdoc/aivideo(智慧100支持，仅用于演示).md"}'),t={name:"doc/wpdoc/aivideo(智慧100支持，仅用于演示).md"},e=n(`<h1 id="aivideo-智慧100支持-仅用于演示" tabindex="-1">aivideo(智慧100支持，仅用于演示) <a class="header-anchor" href="#aivideo-智慧100支持-仅用于演示" aria-label="Permalink to &quot;aivideo(智慧100支持，仅用于演示)&quot;">​</a></h1><p>本文档将介绍如何在IDE上面配置aivideo控件实现手机端录制视频并且进行视频sku识别功能。</p><h3 id="在ide上找到-ai摄像-二开控件并且熟悉他的自定义属性。" tabindex="-1">在IDE上找到 AI摄像 二开控件并且熟悉他的自定义属性。 <a class="header-anchor" href="#在ide上找到-ai摄像-二开控件并且熟悉他的自定义属性。" aria-label="Permalink to &quot;在IDE上找到 AI摄像 二开控件并且熟悉他的自定义属性。&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/aivideo%E5%9B%BE%E7%89%871.png" alt="aivideo图片1"></p><h3 id="在ide的表单内如何配置使用-ai摄像-控件" tabindex="-1">在IDE的表单内如何配置使用 AI摄像 控件 <a class="header-anchor" href="#在ide的表单内如何配置使用-ai摄像-控件" aria-label="Permalink to &quot;在IDE的表单内如何配置使用 AI摄像 控件&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/aivideo%E5%9B%BE%E7%89%872.png" alt="aivideo图片2"></p><h3 id="ai摄像-控件的属性解析-从实施项目进行验证过的表单页面中copy出来的" tabindex="-1">AI摄像 控件的属性解析(从实施项目进行验证过的表单页面中copy出来的) <a class="header-anchor" href="#ai摄像-控件的属性解析-从实施项目进行验证过的表单页面中copy出来的" aria-label="Permalink to &quot;AI摄像 控件的属性解析(从实施项目进行验证过的表单页面中copy出来的)&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;aivideo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;native-aivideo-6264416420437535&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;getAIVideoDetail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1300727625551056983&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;jumpVideoDetail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1301199376567373908&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;submitVideo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1300715342661816418&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;aivideo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;视频采集&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;_ide_componenttype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;photo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;compression&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;htmlopentype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;playvideo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;opentype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;select&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;maxduration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;30&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>事件解析：<br> 1.获取视频详情(getAIVideoDetail)：<br> 通过调用 getAIVideoDetail 方法可以获取到手机端视频详情。<br> 对应flycode事件：1300727625551056983<br> 实际调用场景：在查看页面配置 AI摄像控件时，getAIVideoDetail事件相当于load事件，进入页面时会调用getAIVideoDetail通知客户端调用flycode接口进行数据查询。并赋值给 手机端 AI摄像控件。具体示例如下：</p><p>var fail = function (errorCode, msg) {<br> Page.alert(AlertType.error, msg != null ? msg : &#39;数据获取失败，请重试或联系管理员&#39;);<br> };</p><p>var success = function (output) {<br> var tempArray = output[&#39;ai_visit_video_info&#39;];<br> var temp =JSON.stringify(tempArray[0])<br> console.log(temp)<br> Page.getCtrl(&quot;aivideo&quot;).setValue(temp, CtrlValueSetter(&quot;videodetail&quot;));</p><p>};</p><p>//发起网络请求<br> Model.requestServer(&#39;拜访采集-查询视频采集&#39;, {<br> &quot;ai_visit_video_info&quot;: {<br> &quot;storeid&quot;: Page.getCtrl(&#39;storeid&#39;).getValue(),<br> &quot;submittime&quot;:Page.getCtrl(&#39;submittime&#39;).getValue(),<br> }<br> }, success, fail);</p><p>2.跳转识别详情（jumpVideoDetail）<br> 通过调用 jumpVideoDetail 执行flycode进行跳转页面。<br> 对应flycode事件：1301199376567373908<br> 实际调用场景：点击查看视频详情时会调用这个方法，具体flycode示例如下：<br> var params = {<br> appData:Page.getCtrl(&quot;datatemp&quot;).value,<br> }<br> Page.linkToPage(&quot;视频采集-识别详情&quot;,params);<br> 3.提交视频数据（submitVideo）<br> 通过调用 submitVideo执行flycode进行数据上传。<br> 对应flycode事件：1300715342661816418<br> 实际调用场景：录制视频结果并且获取到识别结果时，手机端上传数据到IDE上。此时需要对数据进行接收，示例如下：<br> var appData =IN.params[0];<br> //把数据存放在 datatemp 控件中，不管是在提交数据时或者跳转页面时都能直接获取，不需要再调用事件获取结果<br> Page.getCtrl(&quot;datatemp&quot;).value=JSON.stringify(appData);</p><p>参数解析<br> 1.&quot;source&quot;: &quot;1&quot;<br> 当source=1时代表从 通过相机进行拍摄视频，<br> 当source=0时代表从 本地文件选择上传（此功能暂未开放）<br> 1.&quot;htmlopentype&quot;: &quot;1&quot;,<br> 当htmlopentype=1时代表跳转到 IDE上配置的识别详情页面<br> 当htmlopentype=0时代表跳转到 AI-SDK内识别详情页面（此功能暂未开放）<br> 1.&quot;playvideo&quot;: &quot;1&quot;,<br> 当playvideo=1时代表点击此控件时属于 拍摄 状态<br> 当playvideo=0时代表点击此控件时属于 播放 状态（此功能暂未开放）<br> 1.&quot;maxduration&quot;: &quot;30&quot;<br> maxduration代表视频可录制最大时间，默认是30s,最大限制为120s</p><h3 id="ide端相关配置" tabindex="-1">IDE端相关配置 <a class="header-anchor" href="#ide端相关配置" aria-label="Permalink to &quot;IDE端相关配置&quot;">​</a></h3><p>AIVideoView数据上传时触发对应的事件，可获取上传数据：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902022843329.png" alt="image-20200902022843329"></p><p>提交拜访流事件时，同时把数据插入数据库中：对应数据库表名为：<strong>ai_visit_video_info</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902023011752.png" alt="image-20200902023011752"></p><p>查看页面同理：手机端只要根据playvideo来控制即可。</p><h3 id="ide上页面配置效果展示" tabindex="-1">IDE上页面配置效果展示 <a class="header-anchor" href="#ide上页面配置效果展示" aria-label="Permalink to &quot;IDE上页面配置效果展示&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/B8AEAABC01653A26BA996778225608D6.jpg" alt="B8AEAABC01653A26BA996778225608D6"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/A5A23D9AF3EEDBF516230149A9424DB8.jpg" alt="A5A23D9AF3EEDBF516230149A9424DB8.jpg"><br> 至此，二开控件已完成。</p><h1 id="sdk识别详情页展示跳转配置流程" tabindex="-1">SDK识别详情页展示跳转配置流程 <a class="header-anchor" href="#sdk识别详情页展示跳转配置流程" aria-label="Permalink to &quot;SDK识别详情页展示跳转配置流程&quot;">​</a></h1><h4 id="修改背景" tabindex="-1">修改背景： <a class="header-anchor" href="#修改背景" aria-label="Permalink to &quot;修改背景：&quot;">​</a></h4><p>​ 1)响应组织打造标准化产品号召，在智慧100-v5.1产品中实现可配置化的识别详情</p><p>​ 2)解决不同租户之间需要区分更新AI-SDK本地包导致无法升级的问题，减轻SDK负担</p><p>​ 3)解决和h5交互传递数据的复杂性</p><h4 id="修改方案" tabindex="-1">修改方案： <a class="header-anchor" href="#修改方案" aria-label="Permalink to &quot;修改方案：&quot;">​</a></h4><p>​ 详细见下图<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_159844146116982.png" alt="企业微信截图_159844146116982"></p><h4 id="ide配置相关" tabindex="-1">IDE配置相关： <a class="header-anchor" href="#ide配置相关" aria-label="Permalink to &quot;IDE配置相关：&quot;">​</a></h4><p>以端架控件为例：当手机端处理完数据执行“onvaluechange”事件时，控件对应的属性 <strong>值改变时</strong> 触发关联事件，在此事件中我们可以通过端架控件接收来自手机端上传的数据，同时我们需要在此事件中下发计算后的数据给手机端，手机端此时触发 获取值方法 setViewData。</p><p><strong>端架控件属性 值改变时 关联事件：</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902014733395.png" alt="image-20200902014733395"></p><p><strong>IDE通过UIFlyCode获取控件对应值方法、给控件设置值方法：</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902014958093.png" alt="image-20200902014958093"></p><p><strong>处理完数据以后跳转到IDE配置的识别详情页面：</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20200902015200047.png" alt="image-20200902015200047"></p><p>至此整个流程结束，目前以应用在智慧100-5.1产品 <strong>铺货执行</strong> 拜访流步骤。</p>`,34),p=[e];function l(r,h,o,k,d,E){return i(),a("div",null,p)}const g=s(t,[["render",l]]);export{c as __pageData,g as default};
