import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d084db19.js";const h=JSON.parse('{"title":"account平台帐号管理","description":"","frontmatter":{"title":"account平台帐号管理","date":"2020-07-03T17:59:51.000Z"},"headers":[],"relativePath":"doc/wpdoc/account平台帐号管理.md","filePath":"doc/wpdoc/account平台帐号管理.md"}'),p={name:"doc/wpdoc/account平台帐号管理.md"},e=l(`<h1 id="_3-5-平台帐号管理" tabindex="-1">3.5. 平台帐号管理 <a class="header-anchor" href="#_3-5-平台帐号管理" aria-label="Permalink to &quot;3.5. 平台帐号管理&quot;">​</a></h1><p>平台账号服务的API仅限于特殊账号才可使用</p><h2 id="_3-5-1-新增账号" tabindex="-1">3.5.1. 新增账号 <a class="header-anchor" href="#_3-5-1-新增账号" aria-label="Permalink to &quot;3.5.1. 新增账号&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 加载模块</span></span>
<span class="line"><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;account&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 加载模块</span></span>
<span class="line"><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;account&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 新增账号，返回 新增的账号ID</span></span>
<span class="line"><span style="color:#79B8FF;">ACCOUNT</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&lt;用户名1&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&lt;用户名2&gt;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&lt;用户名3&gt;&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 新增账号，返回 新增的账号ID</span></span>
<span class="line"><span style="color:#005CC5;">ACCOUNT</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&lt;用户名1&gt;&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&lt;用户名2&gt;&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&lt;用户名3&gt;&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p><strong>例</strong>: 新增一个账号的例子</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> accountcode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ACCOUNT</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;210001&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;1389999999&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;brown@xtion.net&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> accountcode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ACCOUNT</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;210001&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;1389999999&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;brown@xtion.net&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h2 id="_3-5-2-启用账号" tabindex="-1">3.5.2. 启用账号 <a class="header-anchor" href="#_3-5-2-启用账号" aria-label="Permalink to &quot;3.5.2. 启用账号&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">ACCOUNT</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">enable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&lt;账号ID&gt;&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">ACCOUNT</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">enable</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&lt;账号ID&gt;&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-5-3-停用账号" tabindex="-1">3.5.3. 停用账号 <a class="header-anchor" href="#_3-5-3-停用账号" aria-label="Permalink to &quot;3.5.3. 停用账号&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">ACCOUNT</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">disable</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&lt;账号ID&gt;&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">ACCOUNT</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">disable</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&lt;账号ID&gt;&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,16),o=[e];function t(c,r,i,d,E,y){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{h as __pageData,b as default};
