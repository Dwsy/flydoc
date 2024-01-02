import{_ as a,c as s,o as i,U as t}from"./chunks/framework.K-r7inPk.js";const u=JSON.parse('{"title":"xcbar","description":"","frontmatter":{"title":"xcbar","date":"2020-05-20T13:57:02.000Z"},"headers":[],"relativePath":"doc/wpdoc/xcbar.md","filePath":"doc/wpdoc/xcbar.md"}'),n={name:"doc/wpdoc/xcbar.md"},e=t(`<h1 id="xcbar" tabindex="-1">xcbar <a class="header-anchor" href="#xcbar" aria-label="Permalink to &quot;xcbar&quot;">​</a></h1><p>只显示一个系列的数据，支持放置在数组型控件中，只支持序列化赋值</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/XCBarSample.png" alt=""></p><h1 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h1><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xcbar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;销售金额&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;smooth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vertical&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onclicked&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h2><h3 id="color-柱状颜色" tabindex="-1">color 柱状颜色 <a class="header-anchor" href="#color-柱状颜色" aria-label="Permalink to &quot;color 柱状颜色&quot;">​</a></h3><p>柱图的颜色，默认值为 blue 。</p><h3 id="style-柱状样式" tabindex="-1">style 柱状样式 <a class="header-anchor" href="#style-柱状样式" aria-label="Permalink to &quot;style 柱状样式&quot;">​</a></h3><p>【暂不支持】</p><p>设置柱状的显示样式，支持以下取值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>distinct</td><td>显示矩形，默认值</td></tr><tr><td>smooth</td><td>显示圆角矩形，圆角半径为矩形宽度的一半</td></tr></tbody></table><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/XCBarStyle.png" alt=""></p><h3 id="direction-方向" tabindex="-1">direction 方向 <a class="header-anchor" href="#direction-方向" aria-label="Permalink to &quot;direction 方向&quot;">​</a></h3><p>设置柱状的显示方向，支持以下取值</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>vertical</td><td>垂直，默认值</td></tr><tr><td>horizontal</td><td>水平，适合x轴title教长的情况</td></tr></tbody></table><h1 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h1><h2 id="序列化赋值" tabindex="-1">序列化赋值 <a class="header-anchor" href="#序列化赋值" aria-label="Permalink to &quot;序列化赋值&quot;">​</a></h2><p>参看 [xcpie](<a href="http://apaas.wxchina.com:8881/2020/05/20/xcpie/" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/2020/05/20/xcpie/</a> )</p><h2 id="配置赋值" tabindex="-1">配置赋值 <a class="header-anchor" href="#配置赋值" aria-label="Permalink to &quot;配置赋值&quot;">​</a></h2><p>参看 [xcpie](<a href="http://apaas.wxchina.com:8881/2020/05/20/xcpie/" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/2020/05/20/xcpie/</a> )</p><h2 id="uiflycode赋值" tabindex="-1">UIFlyCode赋值 <a class="header-anchor" href="#uiflycode赋值" aria-label="Permalink to &quot;UIFlyCode赋值&quot;">​</a></h2><p>参看 [xcpie](<a href="http://apaas.wxchina.com:8881/2020/05/20/xcpie/" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/2020/05/20/xcpie/</a> )</p>`,23),l=[e];function r(h,p,o,c,d,k){return i(),s("div",null,l)}const b=a(n,[["render",r]]);export{u as __pageData,b as default};
