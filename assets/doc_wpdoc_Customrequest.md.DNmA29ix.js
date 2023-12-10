import{_ as s,o as i,c as a,R as t}from"./chunks/framework.S1SDgkSw.js";const E=JSON.parse('{"title":"Customrequest","description":"","frontmatter":{"title":"Customrequest","date":"2020-05-22T15:45:58.000Z"},"headers":[],"relativePath":"doc/wpdoc/Customrequest.md","filePath":"doc/wpdoc/Customrequest.md"}'),e={name:"doc/wpdoc/Customrequest.md"},n=t(`<h1 id="customrequest" tabindex="-1">Customrequest <a class="header-anchor" href="#customrequest" aria-label="Permalink to &quot;Customrequest&quot;">​</a></h1><p>自定义请求，用于执行一个自定义的http接口</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;customrequest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;uri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;XXfunction/XXapi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;getter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;setter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><p>uri</p><p>用于指定该自定义接口的uri。该行为会自动在其前面添加当前的使用的服务器地址的前缀。</p></li><li><p>getter</p><p>与 <code>link</code> 行为的 <code>param</code> 参数功能一致</p></li><li><p>setter</p><p>与 <code>recivelink</code> 行为的 <code>param</code> 参数功能一致</p></li></ul><blockquote><p>默认使用post方式，多个请求是同步执行的，一个请求执行结束后才执行下一个</p></blockquote>`,5),l=[n];function p(r,o,h,k,c,d){return i(),a("div",null,l)}const m=s(e,[["render",p]]);export{E as __pageData,m as default};
