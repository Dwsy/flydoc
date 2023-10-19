import{_ as s,o as a,c as t,Q as n}from"./chunks/framework.d084db19.js";const q=JSON.parse('{"title":"Datasubmit","description":"","frontmatter":{"title":"Datasubmit","date":"2020-05-22T15:37:34.000Z"},"headers":[],"relativePath":"doc/wpdoc/Datasubmit.md","filePath":"doc/wpdoc/Datasubmit.md"}'),o={name:"doc/wpdoc/Datasubmit.md"},e=n(`<h1 id="datasubmit" tabindex="-1">Datasubmit <a class="header-anchor" href="#datasubmit" aria-label="Permalink to &quot;Datasubmit&quot;">​</a></h1><h2 id="data-submit-数据提交" tabindex="-1">Data Submit 数据提交 <a class="header-anchor" href="#data-submit-数据提交" aria-label="Permalink to &quot;Data Submit 数据提交&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;datasubmit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;logiccode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;111111111111&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;queue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;mode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;network&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;storage&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;getter&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;setter&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;datasubmit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;logiccode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;111111111111&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;queue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;mode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;network&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;storage&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;storage&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;getter&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;setter&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>数据提交的属性中，名字和datarequest一致的，其含义也一致，可以直接参考<a href="./Datarequest.html">Datarequest</a>。</p><p>不过以下几个属性是数据提交中没有的：<code>sorter</code> , <code>pagesize</code> 。也就是说数据提交是没有排序或者分页的属性的。</p><h3 id="mode" tabindex="-1">mode <a class="header-anchor" href="#mode" aria-label="Permalink to &quot;mode&quot;">​</a></h3><p>调用请求是否放入队列，主要用于网络数据上传。</p><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>0</td><td>本地</td></tr><tr><td>1</td><td>网络</td></tr><tr><td>2</td><td>本地+网络</td></tr></tbody></table><p>数据提交特有的属性有：</p><h3 id="queue" tabindex="-1">queue <a class="header-anchor" href="#queue" aria-label="Permalink to &quot;queue&quot;">​</a></h3><p>调用请求是否放入队列，主要用于网络数据上传。</p><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>0</td><td>即时执行</td></tr><tr><td>1</td><td>放入队列执行</td></tr></tbody></table><h3 id="mode和queue组合" tabindex="-1">mode和queue组合 <a class="header-anchor" href="#mode和queue组合" aria-label="Permalink to &quot;mode和queue组合&quot;">​</a></h3><table><thead><tr><th>mode和queue的组合</th><th>queue = 0</th><th>queue = 1</th></tr></thead><tbody><tr><td>mode = 0</td><td>执行本地提交</td><td>执行本地提交</td></tr><tr><td>mode = 1</td><td>执行网络提交</td><td>执行队列提交</td></tr><tr><td>mode = 2</td><td>先执行网络提交行为，成功后再执行本地行为</td><td>先执行本地行为，成功后再将网络请求放入队列</td></tr></tbody></table>`,14),l=[e];function p(r,c,u,d,E,i){return a(),t("div",null,l)}const b=s(o,[["render",p]]);export{q as __pageData,b as default};
