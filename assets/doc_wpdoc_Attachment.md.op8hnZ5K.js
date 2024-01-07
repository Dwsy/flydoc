import{_ as s,c as a,o as i,U as t}from"./chunks/framework.FhXPyWfz.js";const u=JSON.parse('{"title":"Attachment","description":"","frontmatter":{"title":"Attachment","date":"2020-05-20T17:06:04.000Z"},"headers":[],"relativePath":"doc/wpdoc/Attachment.md","filePath":"doc/wpdoc/Attachment.md"}'),e={name:"doc/wpdoc/Attachment.md"},n=t(`<h1 id="attachment" tabindex="-1">Attachment <a class="header-anchor" href="#attachment" aria-label="Permalink to &quot;Attachment&quot;">​</a></h1><p>附件上传和浏览</p><blockquote><p>目前移动端的附件控件只支持下载查看，不支持上传功能。</p></blockquote><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AttachmentSample1.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AttachmentSample2.png" alt=""></p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;attachment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ctrl_attachment_contractattachment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;附件上传&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;readonly&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maxnumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;accept&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image/png,image/jpg,text/txt,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maxsize&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><p>maxnumber</p><p>最大允许上传的附件的数量</p></li><li><p>accept</p><p>允许上传的附件的格式</p></li></ul><table><thead><tr><th>Type</th><th>Description</th><th>Example of typical subtypes</th></tr></thead><tbody><tr><td><code>text</code></td><td>Represents any document that contains text and is theoretically human readable</td><td><code>text/plain</code>, <code>text/html</code>, <code>text/css</code>, <code>text/javascript</code></td></tr><tr><td><code>image</code></td><td>Represents any kind of images. Videos are not included, though animated images (like animated gif) are described with an image type.</td><td><code>image/gif</code>, <code>image/png</code>, <code>image/jpeg</code>, <code>image/bmp</code>, <code>image/webp</code></td></tr><tr><td><code>audio</code></td><td>Represents any kind of audio files</td><td><code>audio/midi</code>, <code>audio/mpeg</code>, <code>audio/webm</code>, <code>audio/ogg</code>, <code>audio/wav</code></td></tr><tr><td><code>video</code></td><td>Represents any kind of video files</td><td><code>video/webm</code>, <code>video/ogg</code></td></tr><tr><td>document</td><td></td><td>document/excel , document/word</td></tr><tr><td><code>application</code></td><td>Represents any kind of binary data.</td><td><code>application/octet-stream</code>, <code>application/pkcs12</code>, <code>application/vnd.mspowerpoint</code>, <code>application/xhtml+xml</code>, <code>application/xml</code>, <code>application/pdf</code></td></tr></tbody></table><ul><li><p>maxsize</p><p>允许上传的附件文件大小的最大值，以 <code>mb</code> 为单位描述</p></li></ul><h2 id="value-format" tabindex="-1">Value Format <a class="header-anchor" href="#value-format" aria-label="Permalink to &quot;Value Format&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://xxx/xxx/123.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;filename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;合同附件照片&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image/png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;13896564452214&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;filesize&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;58962&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>该格式为附件取值和赋值时的数据格式需求</p><ul><li><p>url</p><p>文件的url地址。</p><p>如果是提交数据，此处为带后缀的文件名。</p><p>如果是加载数据，以 <code>http</code> 开头则代表为完整下载路径，直接使用该路径下载；否则，此处代表存储在oss的文件名，需要根据约定的规则，使用date 以及 storage 等字段的值组装下载路径。</p></li><li><p>filename</p><p>文件名，用于控件显示的文件名称。通常此处的文件名与url中的是一致的。不过当用于加载外网文件时，可以用该字段提供一个适合于显示的名称。</p></li><li><p>type</p><p>文件的类型</p></li><li><p>date</p><p>文件上传的日期，时间戳</p></li><li><p>size</p><p>文件的大小，单位为byte</p></li><li><p>storage</p><p>存储周期，由于附件通常都是长期存储的，因此该字段始终为空值，即表示默认的长期存储即可</p></li></ul>`,14),p=[n];function l(d,o,h,c,r,k){return i(),a("div",null,p)}const m=s(e,[["render",l]]);export{u as __pageData,m as default};
