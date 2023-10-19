import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.b1e56e49.js";const q=JSON.parse('{"title":"Offlinemodelrequest","description":"","frontmatter":{"title":"Offlinemodelrequest","date":"2020-05-22T15:29:30.000Z"},"headers":[],"relativePath":"doc/wpdoc/Offlinemodelrequest.md","filePath":"doc/wpdoc/Offlinemodelrequest.md"}'),o={name:"doc/wpdoc/Offlinemodelrequest.md"},l=a(`<h1 id="offlinemodelrequest-离线数据更新请求" tabindex="-1">Offlinemodelrequest 离线数据更新请求 <a class="header-anchor" href="#offlinemodelrequest-离线数据更新请求" aria-label="Permalink to &quot;Offlinemodelrequest 离线数据更新请求&quot;">​</a></h1><p>用于强制更新某些离线的业务对象数据</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;offlinemodelrequest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;modelnames&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;product&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;store&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;offlinemodelrequest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;modelnames&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;product&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;store&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>modelnames</p><p>需要更新的业务对象的modellogicname，可以一次性更新多个</p></li></ul>`,4),p=[l];function t(r,c,i,d,u,E){return e(),n("div",null,p)}const f=s(o,[["render",t]]);export{q as __pageData,f as default};