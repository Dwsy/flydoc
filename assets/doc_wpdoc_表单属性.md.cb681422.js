import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d084db19.js";const h=JSON.parse('{"title":"表单属性","description":"","frontmatter":{"title":"表单属性","date":"2020-05-18T17:24:20.000Z"},"headers":[],"relativePath":"doc/wpdoc/表单属性.md","filePath":"doc/wpdoc/表单属性.md"}'),e={name:"doc/wpdoc/表单属性.md"},p=l(`<h1 id="表单属性" tabindex="-1">表单属性 <a class="header-anchor" href="#表单属性" aria-label="Permalink to &quot;表单属性&quot;">​</a></h1><h2 id="status-状态" tabindex="-1">status 状态 <a class="header-anchor" href="#status-状态" aria-label="Permalink to &quot;status 状态&quot;">​</a></h2><p>用于设置，或者获取表单当前的状态。</p><p>其值为枚举类型，取值如下：</p><table><thead><tr><th>值</th><th>含义</th></tr></thead><tbody><tr><td>new</td><td>新增状态</td></tr><tr><td>edit</td><td>编辑状态</td></tr><tr><td>view</td><td>查看状态</td></tr></tbody></table><p>当更改表单状态时，表单会自动刷新，使得表单适应指定状态下的默认显示模式。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> curStatus </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.status;</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;edit&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> curStatus </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.status;</span></span>
<span class="line"><span style="color:#24292E;">Page.status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;edit&quot;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="title-标题" tabindex="-1">title 标题 <a class="header-anchor" href="#title-标题" aria-label="Permalink to &quot;title 标题&quot;">​</a></h2><p>用于设置或获取表单当前的标题</p><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> curTitle </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.title;</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.title </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;新的标题&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> curTitle </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.title;</span></span>
<span class="line"><span style="color:#24292E;">Page.title </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;新的标题&quot;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="params-参数" tabindex="-1">params 参数 <a class="header-anchor" href="#params-参数" aria-label="Permalink to &quot;params 参数&quot;">​</a></h2><p>用于获取当前表单创建时获取到的传参。</p><p>获取到的是一个数组。</p><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.params;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(params </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> params[</span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.params;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(params </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> params[</span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,17),t=[p];function o(r,c,i,d,E,y){return a(),n("div",null,t)}const b=s(e,[["render",o]]);export{h as __pageData,b as default};
