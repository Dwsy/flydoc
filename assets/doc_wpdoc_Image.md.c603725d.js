import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.aac09c5f.js";const q=JSON.parse('{"title":"Image","description":"","frontmatter":{"title":"Image","date":"2020-05-20T17:17:58.000Z"},"headers":[],"relativePath":"doc/wpdoc/Image.md","filePath":"doc/wpdoc/Image.md"}'),p={name:"doc/wpdoc/Image.md"},l=o(`<h1 id="image" tabindex="-1">Image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;Image&quot;">​</a></h1><p>用于显示图片的控件，可以用于展示产品示意图，或者显示头像等，只接受一个图片地址，自动下载显示，并能根据名称自动缓存图片。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/imageSample1.png" alt="imageSample1"></p><h3 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;image&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://xxxxxx.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;width&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;height&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;aspectratio&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;thumbenable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;enlargeable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;masktype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;displaymode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onclicked&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;213213254545&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;image&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://xxxxxx.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;width&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;height&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;aspectratio&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;thumbenable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;enlargeable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;masktype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;displaymode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onclicked&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;213213254545&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li><p>value</p><p>支持两种格式：</p><ol><li><p>完整路径</p><p>根据完整的路径直接下载图片，图片根据文件名称进行缓存。</p></li><li><p>相对路径</p><p>根据通用的图片路径组装规则进行组装，然后下载。</p><p>相对路径目前是以json形式提供，通常都是由业务行为获取然后赋值。</p><p>即：<strong>缩略图</strong><code>IP + &quot;/thumbs&quot; + &quot;/img&quot; + 相对路径</code> ，<strong>原图</strong><code>IP + &quot;/file&quot; + &quot;/img&quot; + 相对路径</code></p><p>本地缓存需要避免文件名可能重复的问题。</p></li></ol></li><li><p>thumbenable</p><p>是否显示缩略图，默认为 <code>0</code>。</p><p>如果可以显示，会先加载缩略图。此时 如果 enlargeable == 1 ，那么将不会自动下载大图，需要点击查看时下载原图；否则将在缩略图加载后，自动根据实际情况加载原图</p><p>只有相对路径支持缩略图显示</p></li><li><p>enlargeable</p><p>是否能显示大图，默认为 <code>0</code>，如果可以显示，则点击后可以全屏显示大图，同时会屏蔽 <code>onclicked</code> 事件。</p></li><li><p>masktype</p><p>遮罩层样式，默认值为 <code>round</code></p></li></ul><table><thead><tr><th>值</th><th>显示文本</th><th>含义</th></tr></thead><tbody><tr><td>none</td><td>无，即矩形，默认值</td><td></td></tr><tr><td>round</td><td>圆角矩形</td><td>默认的圆角半径为5</td></tr><tr><td>circle</td><td>圆形</td><td></td></tr></tbody></table><ul><li><p>aspectratio</p><p>主要用于移动端，float类型的值，指明宽高比，即其值为 <code>宽度/高度</code>，用于控制控件尺寸 ，例如 <code>aspectratio == 2</code> 表示宽度为高度的两倍。默认值为空，表示不设置固定的宽高比，根据控件的其他flex属性决定控件尺寸</p></li><li><p>displaymode</p><p>只在aspectratio有值的情况下有效，如果aspectratio没有值，则默认使用 <code>aspectfit</code> 方式</p></li></ul><table><thead><tr><th>值</th><th>含义</th></tr></thead><tbody><tr><td>fill</td><td>拉伸图片，完整显示图片并充满显示区域，默认值</td></tr><tr><td>aspectfill</td><td>保持宽高比拉伸图片，需要充满显示区域，同时居中显示</td></tr><tr><td>aspectfit</td><td>保持宽高比拉伸图片，需要完整显示图片，同时居中显示</td></tr></tbody></table><h3 id="图片加载时序" tabindex="-1">图片加载时序 <a class="header-anchor" href="#图片加载时序" aria-label="Permalink to &quot;图片加载时序&quot;">​</a></h3><ul><li><p>本地已缓存图片</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/imageLoadFlow1.png" alt="imageLoadFlow1"></p></li><li><p>本地已缓存缩略图片</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/imageLoadFlow2.png" alt="imageLoadFlow2"></p></li><li><p>本地未缓存图片</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/imageLoadFlow3.png" alt="imageLoadFlow3"></p></li></ul><h3 id="ui-sample" tabindex="-1">UI Sample <a class="header-anchor" href="#ui-sample" aria-label="Permalink to &quot;UI Sample&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/imageSample2.png" alt="imageSample2"></p><h3 id="ui-annotation" tabindex="-1">UI Annotation <a class="header-anchor" href="#ui-annotation" aria-label="Permalink to &quot;UI Annotation&quot;">​</a></h3><h3 id="sample" tabindex="-1">Sample <a class="header-anchor" href="#sample" aria-label="Permalink to &quot;Sample&quot;">​</a></h3>`,15),t=[l];function e(c,r,i,E,u,y){return a(),n("div",null,t)}const m=s(p,[["render",e]]);export{q as __pageData,m as default};