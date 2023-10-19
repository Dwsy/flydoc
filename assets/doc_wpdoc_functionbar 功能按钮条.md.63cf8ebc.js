import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"functionbar 功能按钮条","description":"","frontmatter":{"title":"functionbar 功能按钮条","date":"2020-05-20T14:22:37.000Z"},"headers":[],"relativePath":"doc/wpdoc/functionbar 功能按钮条.md","filePath":"doc/wpdoc/functionbar 功能按钮条.md"}'),l={name:"doc/wpdoc/functionbar 功能按钮条.md"},o=p(`<h1 id="功能条-functionbar" tabindex="-1">功能条 functionbar <a class="header-anchor" href="#功能条-functionbar" aria-label="Permalink to &quot;功能条 functionbar&quot;">​</a></h1><p>用于放置大量按钮的容器控件，目前只用于web端的配置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/functionBar.png" alt=""></p><h1 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h1><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;functionbar&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;groups&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;settleditemcount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FDAEB7;font-style:italic;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;functionbar&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;groups&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;settleditemcount&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;content&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#B31D28;font-style:italic;">...</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h2><h3 id="groups" tabindex="-1"><strong>groups</strong> <a class="header-anchor" href="#groups" aria-label="Permalink to &quot;**groups**&quot;">​</a></h3><p>功能条以组为单位进行管理，每组功能项代表相对独立的一组操作；折叠能力也是以组为单位进行处理。</p><h3 id="settleditemcount-固定项数量" tabindex="-1"><strong>settleditemcount 固定项数量</strong> <a class="header-anchor" href="#settleditemcount-固定项数量" aria-label="Permalink to &quot;**settleditemcount 固定项数量**&quot;">​</a></h3><p>用于指定改组功能项不能被折叠的功能项的数量。<br> 默认值为空，表示该组不支持折叠。0，表示全部可以折叠。</p><h2 id="布局说明" tabindex="-1">布局说明 <a class="header-anchor" href="#布局说明" aria-label="Permalink to &quot;布局说明&quot;">​</a></h2><p>功能条只支持水平一行显示功能项，并且只能放置按钮控件。</p><p>功能条会根据其宽度，自适应的显示前 x 项 (n ≤ x ≤ m)，并将剩余项折叠到<strong>更多</strong>按钮中去。</p><p>当所有功能项都能显示时，隐藏更多按钮；当有折叠的功能项时显示更多按钮。</p><p>固定项的显示总宽度决定了功能条的最小宽度。</p><p>功能条会在调整按钮显示或折叠时，即时的通知按钮更改显示样式。</p><blockquote><p>n 表示 settleditemcount 的值，即需要固定显示出来的功能项的数量</p><p>m 表示功能项的总数</p><p>x为显示在功能条上的功能项数量</p></blockquote>`,17),e=[o];function t(c,r,i,u,E,y){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
