import{_ as a,o as s,c as o,Q as e}from"./chunks/framework.b1e56e49.js";const y=JSON.parse('{"title":"graphiccode","description":"","frontmatter":{"title":"graphiccode","date":"2020-05-20T17:25:02.000Z"},"headers":[],"relativePath":"doc/wpdoc/graphiccode.md","filePath":"doc/wpdoc/graphiccode.md"}'),t={name:"doc/wpdoc/graphiccode.md"},n=e(`<h1 id="graphiccode-图形码" tabindex="-1">graphiccode 图形码 <a class="header-anchor" href="#graphiccode-图形码" aria-label="Permalink to &quot;graphiccode 图形码&quot;">​</a></h1><p>用于将一个字符串转换为条码或二维码的形式显示的控件</p><h2 id="ui-示例" tabindex="-1">UI 示例 <a class="header-anchor" href="#ui-示例" aria-label="Permalink to &quot;UI 示例&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/graphiccode.png" alt=""></p><h1 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h1><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;graphiccode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;objecttype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;qrcode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;www.wxchina.com&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;graphiccode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;objecttype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;qrcode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;www.wxchina.com&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h2><h3 id="objecttype-显示对象类型" tabindex="-1">objecttype 显示对象类型 <a class="header-anchor" href="#objecttype-显示对象类型" aria-label="Permalink to &quot;objecttype 显示对象类型&quot;">​</a></h3><p>用于设置将控件值转换为何种图形码，支持以下取值</p><table><thead><tr><th>值</th><th>说明</th><th>-</th></tr></thead><tbody><tr><td>qr_code</td><td>二维码 QR Code</td><td></td></tr><tr><td>code_128</td><td>条码 Code 128</td><td></td></tr><tr><td>upc_e_codes</td><td>条码 UPC-E codes</td><td></td></tr></tbody></table>`,10),p=[n];function l(c,r,d,i,h,u){return s(),o("div",null,p)}const q=a(t,[["render",l]]);export{y as __pageData,q as default};
