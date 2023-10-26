import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.d084db19.js";const m=JSON.parse('{"title":"link链接按钮控件","description":"","frontmatter":{"title":"link链接按钮控件","date":"2020-11-04T09:59:38.000Z"},"headers":[],"relativePath":"doc/wpdoc/link链接按钮控件.md","filePath":"doc/wpdoc/link链接按钮控件.md"}'),l={name:"doc/wpdoc/link链接按钮控件.md"},o=e(`<h1 id="link链接按钮控件" tabindex="-1">link链接按钮控件 <a class="header-anchor" href="#link链接按钮控件" aria-label="Permalink to &quot;link链接按钮控件&quot;">​</a></h1><p>使用单纯的文字来作为一个按钮功能的控件，一般用于取代放在旧表格的按钮控件，支持配置对齐方式，支持配置下划线，以及一般的控件样式配置。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;type&quot;: &quot;link&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;code&quot;: &quot;link-123456&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;name&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;eventlist&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;trigger&quot;: &quot;onclicked&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;handler&quot;: &quot;xxxx&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;value&quot;: &quot;按钮文字&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;linenumber&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;color&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;fontsize&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;fontweight&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;textalign&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;underline&quot;: &quot;0&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;type&quot;: &quot;link&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;code&quot;: &quot;link-123456&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;name&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;eventlist&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;trigger&quot;: &quot;onclicked&quot;,</span></span>
<span class="line"><span style="color:#24292e;">            &quot;handler&quot;: &quot;xxxx&quot;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &quot;value&quot;: &quot;按钮文字&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;linenumber&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;color&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;fontsize&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;fontweight&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;textalign&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;underline&quot;: &quot;0&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="版本要求" tabindex="-1">版本要求 <a class="header-anchor" href="#版本要求" aria-label="Permalink to &quot;版本要求&quot;">​</a></h3><ul><li>web端引擎包 &gt;= V9.2.3</li></ul><h3 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h3><p><strong>value</strong><br> 控件值，用于设置该按钮显示的文字，可用于取值和赋值。</p><p><strong>linenumber</strong><br> 最大显示行数，指定内容的最大显示行数。<br> 0，默认值，表示不限制行数。<br> 其他正整数，表示最多能显示几行，超出用省略号...表示。</p><p><strong>underline</strong><br> 下划线，bool值，控制是否显示下划线，默认值为 0，表示不显示。</p><p><strong>textalign</strong><br> 指定文字对齐方式，支持left，center，right三种取值，默认值为left。</p><p><strong>fontsize</strong><br> 控制字体大小，默认值为14。</p><p><strong>fontweight</strong><br> 字重，目前只支持三种字体设置。<br> normal：常规，默认值<br> bold：粗体</p><p><strong>color</strong><br> 字体颜色。</p><h3 id="配置效果" tabindex="-1">配置效果 <a class="header-anchor" href="#配置效果" aria-label="Permalink to &quot;配置效果&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/link.png" alt=""></p>`,15),t=[o];function p(r,u,c,i,q,b){return n(),a("div",null,t)}const h=s(l,[["render",p]]);export{m as __pageData,h as default};
