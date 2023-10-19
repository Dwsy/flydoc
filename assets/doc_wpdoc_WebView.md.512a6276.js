import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.d084db19.js";const q=JSON.parse('{"title":"WebView","description":"","frontmatter":{"title":"WebView","date":"2020-05-20T17:08:44.000Z"},"headers":[],"relativePath":"doc/wpdoc/WebView.md","filePath":"doc/wpdoc/WebView.md"}'),l={name:"doc/wpdoc/WebView.md"},o=t(`<h1 id="web-view" tabindex="-1">Web View <a class="header-anchor" href="#web-view" aria-label="Permalink to &quot;Web View&quot;">​</a></h1><p>web内容显示控件，支持直接显示html内容，或者显示一个URL对应的内容</p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;webview&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;登录请求&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://.....&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;displaymode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;content|link&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;methodtype&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;get&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;contenttype&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;webview&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;登录请求&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://.....&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;displaymode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;content|link&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;methodtype&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;get&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;contenttype&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p>该控件为基础显示控件，具备基础显示控件的所有属性</p></blockquote><ul><li><p>value</p><p>显示内容，支持两种格式的内容，目前可通过查看是否以 <code>http</code> 开头来判断类型</p></li></ul><table><thead><tr><th>内容分类</th><th>内容示例</th></tr></thead><tbody><tr><td>链接</td><td><a href="http://xx.xx.xx" target="_blank" rel="noreferrer">http://xx.xx.xx</a></td></tr><tr><td>json文本</td><td>一段存储了json内容的字符串，详细查看下方说明</td></tr></tbody></table><ul><li><p>displaymode（web未支持）</p><p>显示模式</p></li></ul><table><thead><tr><th>模式值</th><th>说明</th></tr></thead><tbody><tr><td>content</td><td>直接在控件内部显示出其内容，如果其值为链接，则直接显示链接对应的页面</td></tr><tr><td>link</td><td>以链接按钮的形式显示，使用title作为链接按钮的标题。点击该控件后通过链接到新的一个页面去显示其内容</td></tr></tbody></table><ul><li><p>methodtype（web未支持）</p><p>方法类型，默认为get</p></li></ul><table><thead><tr><th>名称</th><th>取值</th></tr></thead><tbody><tr><td>get</td><td>get方法，参数对应queryparams</td></tr><tr><td>post</td><td>post方法，参数对应queryparams或bodyparams</td></tr></tbody></table><ul><li><p>contenttype（web未支持）</p><p>即post请求的Content-Type，如&quot;application/json&quot;、&quot;application/x-www-form-urlencoded&quot;，默认为&quot;application/json&quot;</p></li></ul><h2 id="json-data-structure" tabindex="-1">Json Data Structure <a class="header-anchor" href="#json-data-structure" aria-label="Permalink to &quot;Json Data Structure&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;!--IMG#0--&gt;&lt;p&gt;正文内容&lt;/p&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;ref&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;!--IMG#0--&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;pixel&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;250*200&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;alt&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://xxx.xx.xx.xx/img/xxx.jpg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;!--IMG#0--&gt;&lt;p&gt;正文内容&lt;/p&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;ref&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;!--IMG#0--&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;pixel&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;250*200&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;alt&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;src&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://xxx.xx.xx.xx/img/xxx.jpg&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Web控件的值为一个json结构的数据</p><ul><li><p>body</p><p>显示的正文，为html文本内容，其中的图片全部使用图片占位符。</p></li><li><p>images</p><p>文本内容中所引用的所有图片的信息</p></li></ul><table><thead><tr><th>字段名</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>ref</td><td>图片占位符，， <code>index</code> 为自增的正整数</td><td></td></tr><tr><td>pixel</td><td>图片的像素</td><td>250*200</td></tr><tr><td>alt</td><td>图片替换文字</td><td>产品图</td></tr><tr><td>src</td><td>图片完整url地址</td><td><a href="http://xxx/xxx.jpg" target="_blank" rel="noreferrer">http://xxx/xxx.jpg</a></td></tr></tbody></table><blockquote><p>前端在具体解析的时候，需要先将图片占位符替换为本地的占位图片，然后再去一次下载图片，图片下载完成后，再替换占位图片。</p></blockquote>`,18),p=[o];function e(r,c,u,E,i,y){return a(),n("div",null,p)}const b=s(l,[["render",e]]);export{q as __pageData,b as default};