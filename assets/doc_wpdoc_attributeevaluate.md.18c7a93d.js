import{_ as s,o as t,c as a,Q as n}from"./chunks/framework.aac09c5f.js";const q=JSON.parse('{"title":"attributeevaluate","description":"","frontmatter":{"title":"attributeevaluate","date":"2020-05-22T15:53:21.000Z"},"headers":[],"relativePath":"doc/wpdoc/attributeevaluate.md","filePath":"doc/wpdoc/attributeevaluate.md"}'),o={name:"doc/wpdoc/attributeevaluate.md"},e=n(`<h1 id="attributeevaluate" tabindex="-1">attributeevaluate <a class="header-anchor" href="#attributeevaluate" aria-label="Permalink to &quot;attributeevaluate&quot;">​</a></h1><p>属性设置，用于使用表达式，动态改变指定的一个或多个控件的某个属性值</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;attreval&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;condition&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;expression&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;le:xxxx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ctrlcode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;code1|code2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;property&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;readonly&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;attreval&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;condition&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;expression&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;le:xxxx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ctrlcode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;code1|code2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;property&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;readonly&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>expression</p><p>通常为逻辑表达式，也可以是固定值，或者flycode片段，用于计算值</p></li><li><p>ctrlcode</p><p>需要被赋值的控件的code，支持同时设置多个控件，使用竖线分割开多个控件的code</p></li><li><p>property</p><p>需要被复制的控件的属性名称，接受以下几种属性赋值，默认值为 <code>value</code></p><p>value, hidden, readonly, required,color,bgcolor</p></li></ul><blockquote><p>该事件目前支持对简单控件赋值，选项值控件只能支持传递空值清空的场景</p></blockquote><h2 id="属性更改支持范围" tabindex="-1">属性更改支持范围 <a class="header-anchor" href="#属性更改支持范围" aria-label="Permalink to &quot;属性更改支持范围&quot;">​</a></h2><table><thead><tr><th>属性</th><th>控件范围</th><th>备注</th><th>备注</th></tr></thead><tbody><tr><td>value</td><td>输入型控件</td><td>设置控件值</td><td>选项类控件只能赋空值用于清空数据选择</td></tr><tr><td>hidden</td><td>所有控件</td><td>隐藏控件</td><td></td></tr><tr><td>readonly</td><td>输入型控件</td><td>设置只读</td><td></td></tr><tr><td>required</td><td>输入型控件</td><td>设置必填</td><td></td></tr><tr><td>color</td><td>text</td><td>设置文字颜色</td><td></td></tr><tr><td>bgcolor</td><td>text</td><td>设置文字背景色</td><td></td></tr></tbody></table>`,7),l=[e];function p(r,c,d,u,i,E){return t(),a("div",null,l)}const b=s(o,[["render",p]]);export{q as __pageData,b as default};
