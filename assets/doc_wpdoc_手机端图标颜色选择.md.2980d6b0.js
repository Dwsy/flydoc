import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.d084db19.js";const b=JSON.parse('{"title":"手机端图标颜色选择","description":"","frontmatter":{"title":"手机端图标颜色选择","date":"2020-05-07T16:19:19.000Z"},"headers":[],"relativePath":"doc/wpdoc/手机端图标颜色选择.md","filePath":"doc/wpdoc/手机端图标颜色选择.md"}'),o={name:"doc/wpdoc/手机端图标颜色选择.md"},l=e(`<h2 id="手机端已支持配置自定义图标" tabindex="-1">手机端已支持配置自定义图标 <a class="header-anchor" href="#手机端已支持配置自定义图标" aria-label="Permalink to &quot;手机端已支持配置自定义图标&quot;">​</a></h2><p>具体方法如下：<br> 通过iconfont资源包下发的方法</p><ul><li><p>1、可以去阿里icon库<a href="https://www.iconfont.xn--cn-uv2co19w" target="_blank" rel="noreferrer">https://www.iconfont.cn下载</a>，将.ttf和.json打包到同一个文件夹下，放到IDE-配置管理-文件管理-APP资源包，注意&quot;glyphs&quot;里面的格式要固定，因为手机端要识别这些关键字</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;id&quot;: &quot;1524344&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;name&quot;: &quot;快销手机端&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;font_family&quot;: &quot;font_family&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;css_prefix_text&quot;: &quot;icon-&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;glyphs&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;icon_id&quot;: &quot;12551778&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;name&quot;: &quot;pl_visitCollect&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;font_class&quot;: &quot;pl_visitCollect&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;unicode&quot;: &quot;e618&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;unicode_decimal&quot;: 58904</span></span>
<span class="line"><span style="color:#e1e4e8;">}]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">&quot;id&quot;: &quot;1524344&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;name&quot;: &quot;快销手机端&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;font_family&quot;: &quot;font_family&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;css_prefix_text&quot;: &quot;icon-&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;glyphs&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;icon_id&quot;: &quot;12551778&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;name&quot;: &quot;pl_visitCollect&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;font_class&quot;: &quot;pl_visitCollect&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;unicode&quot;: &quot;e618&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;unicode_decimal&quot;: 58904</span></span>
<span class="line"><span style="color:#24292e;">}]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>2、资源包与表单类似，也受权限控制</p></li><li><p>3、测试是否生效：icon控件的value配置json文件里的name，看是否有图片显示出来</p></li></ul>`,3),p=[l];function t(c,i,u,r,q,_){return n(),a("div",null,p)}const m=s(o,[["render",t]]);export{b as __pageData,m as default};
