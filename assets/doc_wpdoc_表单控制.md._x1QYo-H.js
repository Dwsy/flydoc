import{_ as a,o as t,c as s,R as i}from"./chunks/framework.E9w9IFh5.js";const u=JSON.parse('{"title":"表单控制","description":"","frontmatter":{"title":"表单控制","date":"2020-05-19T18:33:14.000Z"},"headers":[],"relativePath":"doc/wpdoc/表单控制.md","filePath":"doc/wpdoc/表单控制.md"}'),e={name:"doc/wpdoc/表单控制.md"},h=i(`<h1 id="表单控制" tabindex="-1">表单控制 <a class="header-anchor" href="#表单控制" aria-label="Permalink to &quot;表单控制&quot;">​</a></h1><blockquote><p>旧方法，逐步使用表单属性来替代</p></blockquote><h2 id="statusis-status" tabindex="-1">statusIs(status) <a class="header-anchor" href="#statusis-status" aria-label="Permalink to &quot;statusIs(status)&quot;">​</a></h2><p>用于检测当前的表单的状态</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>否</td><td>取值如下：<code>new</code> <code>edit</code> <code>view</code></td></tr></tbody></table><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>bool</td><td>否</td><td>表单状态与入参一致时返回true，否则false</td></tr></tbody></table><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前表单为新增状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">statusIs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;edit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// return false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">statusIs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;new&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// return true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="settitle-newtitle" tabindex="-1">setTitle(newTitle) <a class="header-anchor" href="#settitle-newtitle" aria-label="Permalink to &quot;setTitle(newTitle)&quot;">​</a></h2><p>设置页面的标题</p><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>newTitle</td><td>String</td><td>否</td><td>设置页面的标题</td></tr></tbody></table><h3 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><h2 id="getlinkparams" tabindex="-1">getLinkParams() <a class="header-anchor" href="#getlinkparams" aria-label="Permalink to &quot;getLinkParams()&quot;">​</a></h2><p>获取上一个页面在链接到本页面时附带的参数</p><h3 id="参数-2" tabindex="-1">参数 <a class="header-anchor" href="#参数-2" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><h3 id="返回值-2" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-2" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Dictionary</td><td>可</td><td>返回上一个页面链接时的参数，可以为null</td></tr></tbody></table><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLinkParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> params[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,25),n=[h];function l(d,r,p,o,k,c){return t(),s("div",null,n)}const E=a(e,[["render",l]]);export{u as __pageData,E as default};
