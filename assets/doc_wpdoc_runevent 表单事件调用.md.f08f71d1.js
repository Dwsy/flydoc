import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b1e56e49.js";const _=JSON.parse('{"title":"runevent 表单事件调用","description":"","frontmatter":{"title":"runevent 表单事件调用","date":"2020-12-25T11:40:07.000Z"},"headers":[],"relativePath":"doc/wpdoc/runevent 表单事件调用.md","filePath":"doc/wpdoc/runevent 表单事件调用.md"}'),o={name:"doc/wpdoc/runevent 表单事件调用.md"},l=e(`<h1 id="runevent-表单事件调用" tabindex="-1">runevent 表单事件调用 <a class="header-anchor" href="#runevent-表单事件调用" aria-label="Permalink to &quot;runevent 表单事件调用&quot;">​</a></h1><p>触发当前表单的某个事件, 其功能与flycode Page.runEvent(&#39;eventName&#39;) 相同<br> 间接调用某个事件，事件可以重复使用</p><h2 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;action_code_1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;触发表单某个事件&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;actions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;runevent&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;handle_event_code&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 这个是handler的code</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;action_code_1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;触发表单某个事件&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;actions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;runevent&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;handle_event_code&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 这个是handler的code</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,4),p=[l];function t(c,r,E,u,i,y){return n(),a("div",null,p)}const q=s(o,[["render",t]]);export{_ as __pageData,q as default};
