import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d084db19.js";const b=JSON.parse('{"title":"Interface","description":"","frontmatter":{"title":"Interface","date":"2020-05-19T19:21:33.000Z"},"headers":[],"relativePath":"doc/wpdoc/Interface.md","filePath":"doc/wpdoc/Interface.md"}'),p={name:"doc/wpdoc/Interface.md"},e=l(`<h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><h1 id="interface-1" tabindex="-1">Interface <a class="header-anchor" href="#interface-1" aria-label="Permalink to &quot;Interface&quot;">​</a></h1><p>该区域为放置接口的区域，即该区域放置的事件都不是由当前表单触发的，而是通过接收其他表单发出的广播信息进行触发。</p><p>放置在该区域的事件都有一个额外的 <code>key</code> 属性：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;presenter&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;interface&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;外部数据变动导致本页面刷新&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;refreshlist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;actions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#FDAEB7;font-style:italic;">......</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;presenter&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;interface&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">......</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;外部数据变动导致本页面刷新&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;refreshlist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">......</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;actions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#B31D28;font-style:italic;">......</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><p>key</p><p>其内容是一个字符串，用于记录其所接收的广播事件的关键字。一个表单内不能出现重复的关键字，多个表单可以使用同一关键字。</p></li></ul><p>接口事件的其余配置与普通的事件一致。</p>`,7),o=[e];function t(c,r,i,E,y,u){return n(),a("div",null,o)}const f=s(p,[["render",t]]);export{b as __pageData,f as default};
