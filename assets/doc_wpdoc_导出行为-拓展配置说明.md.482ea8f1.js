import{_ as l,C as o,o as p,c as e,k as s,H as t,w as c,a as n,Q as r}from"./chunks/framework.aac09c5f.js";const g=JSON.parse('{"title":"导出行为-拓展配置说明","description":"","frontmatter":{"title":"导出行为-拓展配置说明","date":"2023-02-22T17:41:42.000Z"},"headers":[],"relativePath":"doc/wpdoc/导出行为-拓展配置说明.md","filePath":"doc/wpdoc/导出行为-拓展配置说明.md"}'),E={name:"doc/wpdoc/导出行为-拓展配置说明.md"},i=s("h1",{id:"【导出行为】事件-拓展配置说明",tabindex:"-1"},[n("【导出行为】事件-拓展配置说明 "),s("a",{class:"header-anchor",href:"#【导出行为】事件-拓展配置说明","aria-label":'Permalink to "【导出行为】事件-拓展配置说明"'},"​")],-1),u=s("br",null,null,-1),y=s("br",null,null,-1),q=r(`<p>导出行为新增【扩展配置】项。<br> 入口：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%BC%E5%87%BA%E8%A1%8C%E4%B8%BA%E6%89%A9%E5%B1%95%E9%85%8D%E7%BD%AE%E5%85%A5%E5%8F%A3.png" alt=""><br> 配置页面：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%BC%E5%87%BA%E8%A1%8C%E4%B8%BA%E6%89%A9%E5%B1%95%E9%85%8D%E7%BD%AE%E9%A1%B5%E9%9D%A2.png" alt=""></p><h2 id="新增内容协议如下" tabindex="-1">新增内容协议如下 <a class="header-anchor" href="#新增内容协议如下" aria-label="Permalink to &quot;新增内容协议如下&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;extconfig&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;filetype&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;exportcontent&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;excel&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;link&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;photo&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;iscompress&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;displaytype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;horizontal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;imagetype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;imagename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;filewatermark&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;extconfig&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;filetype&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;exportcontent&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;excel&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;link&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;photo&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;iscompress&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;displaytype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;horizontal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;imagetype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;origin&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;imagename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;filewatermark&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="extconfig具体说明如下" tabindex="-1">extconfig具体说明如下 <a class="header-anchor" href="#extconfig具体说明如下" aria-label="Permalink to &quot;extconfig具体说明如下&quot;">​</a></h2><ul><li><p>filetype： 导出文件类型，多选且至少一项，其中xlsx为必选项，默认值：[&quot;1&quot;, &quot;2&quot;]，可选值：1：xlsx, 2：csv</p></li><li><p>exportcontent：导出方式，多选且至少一项，默认值：[&quot;excel&quot;, &quot;link&quot;, &quot;photo&quot;]</p></li><li><p>iscompress：导出图片是否压缩，默认值：&quot;0&quot;，可选值：1：压缩, 0：原图</p></li><li><p>displaytype：导出图片排列方式，默认值：&quot;horizontal&quot;，可选值：horizontal：横向排列, vertical：纵向排列</p></li><li><p>imagetype：导出图片格式，默认值：&quot;origin&quot;，可选值：png | jpg | origin</p></li><li><p>imagename：导出图片命名规则，暂未开发</p></li><li><p>filewatermark：添加文件水印选项是否可选择，默认值：&quot;0&quot;，可选值：0：不可选择，1：可选择</p></li></ul>`,5);function d(m,b,F,_,h,C){const a=o("font");return p(),e("div",null,[i,s("p",null,[s("strong",null,[t(a,null,{default:c(()=>[n("注意："),u,n(" 1、此功能需要配合产品的容器层及图片导出服务使用；"),y,n(" 2、此功能需要更新队列服务至v2.9.2、导入导出服务至v2.11.6以上。")]),_:1})])]),q])}const f=l(E,[["render",d]]);export{g as __pageData,f as default};
