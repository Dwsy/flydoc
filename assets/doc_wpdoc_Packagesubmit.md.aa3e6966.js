import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.b1e56e49.js";const q=JSON.parse('{"title":"Packagesubmit","description":"","frontmatter":{"title":"Packagesubmit","date":"2020-05-22T15:38:04.000Z"},"headers":[],"relativePath":"doc/wpdoc/Packagesubmit.md","filePath":"doc/wpdoc/Packagesubmit.md"}'),p={name:"doc/wpdoc/Packagesubmit.md"},e=o(`<h1 id="packagesubmit" tabindex="-1">Packagesubmit <a class="header-anchor" href="#packagesubmit" aria-label="Permalink to &quot;Packagesubmit&quot;">​</a></h1><p>打包提交，在pageareacode所指向的表单区域的所有表单中，找到提交数据的行为，通过该行为来获取提交数据，然后打包，进行一次性提交。</p><p>提交数据行为的查找，是通过表单的 submitaction 属性，找事件中找到对应的 datasubmit</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;packagesubmit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;condition&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;pageareacode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;queue&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;mode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;packagesubmit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;condition&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;pageareacode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;queue&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;mode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>pageareacode</p><p>表单容器的code，通常是 tabpagearea 的code</p></li><li><p>mode</p><p>与 <code>datasubmit</code> 的 <code>mode</code> 属性有相同的取值和含义，不同之处在于当mode==2时，本地语句将会一条条的执行，且如果某个子上传行为不支持本地操作，也就是sql属性为空的话，就直接忽略该子表单的本地存储行为</p></li></ul>`,5),l=[e];function t(c,r,u,i,E,d){return a(),n("div",null,l)}const m=s(p,[["render",t]]);export{q as __pageData,m as default};
