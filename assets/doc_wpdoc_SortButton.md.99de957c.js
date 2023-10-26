import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.d084db19.js";const q=JSON.parse('{"title":"SortButton","description":"","frontmatter":{"title":"SortButton","date":"2020-05-20T16:27:48.000Z"},"headers":[],"relativePath":"doc/wpdoc/SortButton.md","filePath":"doc/wpdoc/SortButton.md"}'),l={name:"doc/wpdoc/SortButton.md"},p=o(`<h1 id="sortbutton" tabindex="-1">SortButton <a class="header-anchor" href="#sortbutton" aria-label="Permalink to &quot;SortButton&quot;">​</a></h1><p>专门用于触发排序的按钮控件，通常只能配置在filter控件中。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/SortButtonSample.png" alt=""></p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;sortbutton&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;sortbuttoncode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;销量&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;valuesets&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;color&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0x2E2E2E&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onclicked&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;delhandler&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;sortbutton&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;sortbuttoncode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;销量&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;valuesets&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;color&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0x2E2E2E&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onclicked&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;delhandler&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><p>value</p><p>排序按钮的值有以下3种：</p></li></ul><table><thead><tr><th>value</th><th>meaning</th></tr></thead><tbody><tr><td>desc</td><td>降序</td></tr><tr><td>asc</td><td>升序</td></tr><tr><td>nil</td><td>无排序</td></tr></tbody></table><p>默认值为 <code>nil</code></p><blockquote><p>无论 <code>valuesets</code> 中是否有 <code>nil</code> , 该控件的默认值均为 <code>nil</code></p></blockquote><ul><li><p>valuesets</p><p>用于指定排序按钮的取值范围，使用以上3种值中的一个或多个，使用 <code>|</code> 分割符连接，来确定控件的取值范围。例如：<code>desc|asc</code> 表示控件只有两种取值，当点击该按钮时，该控件的值在这两个值之间来回切换。</p><p>默认情况下，也就是该属性为空的情况下，使用全部值，即 <code>desc|asc|nil</code></p></li><li><p>color</p><p>用于控制 <code>desc</code> 和 <code>asc</code> 两种值的显示颜色，<code>nil</code> 始终显示为灰色 <code>#6B6B6B</code></p></li></ul><h2 id="value" tabindex="-1">Value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;Value&quot;">​</a></h2><p>直接返回value值，如：<code>&quot;desc&quot;</code> ，或者 <code>&quot;nil&quot;</code></p>`,12),t=[p];function e(c,r,u,E,i,d){return n(),a("div",null,t)}const b=s(l,[["render",e]]);export{q as __pageData,b as default};
