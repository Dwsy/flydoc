import{_ as a,o as s,c as t,Q as n}from"./chunks/framework.aac09c5f.js";const y=JSON.parse('{"title":"全控件样式优化+表单控件样式控制","description":"","frontmatter":{"title":"全控件样式优化+表单控件样式控制","date":"2020-12-25T11:23:13.000Z"},"headers":[],"relativePath":"doc/wpdoc/全控件样式优化+表单控件样式控制.md","filePath":"doc/wpdoc/全控件样式优化+表单控件样式控制.md"}'),e={name:"doc/wpdoc/全控件样式优化+表单控件样式控制.md"},l=n(`<h1 id="全控件样式优化-表单控件样式控制" tabindex="-1">全控件样式优化+表单控件样式控制 <a class="header-anchor" href="#全控件样式优化-表单控件样式控制" aria-label="Permalink to &quot;全控件样式优化+表单控件样式控制&quot;">​</a></h1><ul><li>针对全控件做了样式优化，控件默认高度由原来的36px改为32px，更加小巧精致。</li><li>控件支持垂直，简化，查看模式。</li><li>表单默认由白色背景改为灰色背景。</li><li>增加对表单控件样式的控件。</li></ul><h2 id="控件标题样式-ctrllayout-和-ctrltitlewidth" tabindex="-1">控件标题样式 ctrllayout 和 ctrltitlewidth <a class="header-anchor" href="#控件标题样式-ctrllayout-和-ctrltitlewidth" aria-label="Permalink to &quot;控件标题样式 ctrllayout 和 ctrltitlewidth&quot;">​</a></h2><p>ctrllayout 和 ctrltitlewidth 用于设置输入型控件的标题与内容的分布位置。不支持动态设置。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 表单级的设置将会影响整个表单中所有的输入控件，包括弹窗中的。</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 如果某个控件自身设置了指定的标题样式（非auto），那么该控件及其子控件将不受表单级设置的影响</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;pageinfo&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;ctrllayout&quot;: &quot;horizontal_fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;ctrltitlewidth&quot;: &quot;110&quot; //只在 ctrllayout == horizontal_fix 时有效，web端的默认值为110，手机端为88。支持设置百分比</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;type&quot;: &quot;panel&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;ctrllayout&quot;: &quot;auto&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;ctrltitlewidth&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    // 表单级的设置将会影响整个表单中所有的输入控件，包括弹窗中的。</span></span>
<span class="line"><span style="color:#24292e;">    // 如果某个控件自身设置了指定的标题样式（非auto），那么该控件及其子控件将不受表单级设置的影响</span></span>
<span class="line"><span style="color:#24292e;">    &quot;pageinfo&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;ctrllayout&quot;: &quot;horizontal_fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;ctrltitlewidth&quot;: &quot;110&quot; //只在 ctrllayout == horizontal_fix 时有效，web端的默认值为110，手机端为88。支持设置百分比</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;type&quot;: &quot;panel&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;ctrllayout&quot;: &quot;auto&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;ctrltitlewidth&quot;: &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="ctrllayout" tabindex="-1">ctrllayout <a class="header-anchor" href="#ctrllayout" aria-label="Permalink to &quot;ctrllayout&quot;">​</a></h4><table><thead><tr><th>名称</th><th>英文名</th><th>说明</th><th>配置方式</th></tr></thead><tbody><tr><td>水平弹性</td><td>horizontal_flex</td><td>（手机端特有）灵活处理显示样式，适合屏幕较小，且标题长度变化较大的场景</td><td>布局控件属性</td></tr><tr><td>水平固宽</td><td>horizontal_fix</td><td>适合标题长度可控，需要整体布局更整齐的场景，手机端和web端的显示样式有所不同</td><td>布局控件属性</td></tr><tr><td>垂直</td><td>vertical</td><td>适合题长度变化较大，且需要整体布局更整齐的场景，手机端和web端的显示样式有所不同</td><td>布局控件属性</td></tr><tr><td>简化</td><td>basic</td><td>适合需要密集输入的场景，如table，另外list，layout等也能设置为简化样式</td><td>布局控件属性+table+filter</td></tr><tr><td>自动</td><td>auto</td><td>默认值，即自动使用上级样式</td><td>布局控件属性</td></tr></tbody></table><p>自动样式时，如果上级是数组型控件，将使用该数组型控件的默认样式，如table和list都是basic，不再继续向上级获取样式，如果要调整数组型控件内部的控件样式，可以通过修改row控件的样式，或者再内嵌layout。</p><h2 id="使用场景-usage" tabindex="-1">使用场景 usage <a class="header-anchor" href="#使用场景-usage" aria-label="Permalink to &quot;使用场景 usage&quot;">​</a></h2><p><code>usage</code> 在不同的场景下，录入型控件和部分数组型控件（如table）的会使用不同场景样式进行显示。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;panel&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#79B8FF;">&quot;usage&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;panel&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#005CC5;">&quot;usage&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>控件的场景样式有：</p><table><thead><tr><th>场景</th><th>usage值</th><th>pagestatus值</th><th>说明</th></tr></thead><tbody><tr><td>录入</td><td>input</td><td>1，2</td><td>录入状态下，用于数据采集，默认值</td></tr><tr><td>只读</td><td>readonly</td><td>3</td><td>禁止录入的状态，控件样式依然是录入的样式（此处暂时兼容现有样式实现即可）</td></tr><tr><td>查看</td><td>view</td><td>4</td><td>用于信息查看，只显示信息，显示更紧凑清晰</td></tr><tr><td>打印</td><td>print</td><td>5</td><td>用于表单打印预览和打印的内容输出，将会使用高对比度的颜色，去掉图标等</td></tr><tr><td>自动</td><td>auto</td><td>无</td><td>控件默认都是自动场景，即继承上层场景，而整个表单的默认场景是录入 场景</td></tr></tbody></table><p>pagestatus 值为影响整个表单中未设置 usage 值的容器控件。只有容器控件（如layout，panel，table）才支持手动设置 usage 值，并且设置后，将不受 pagestatus 状态影响。</p><h4 id="usage-属性支持通过-flycode-设置-pagestatus-值来整体刷新表单" tabindex="-1"><code>usage</code> 属性支持通过 flycode 设置 pagestatus 值来整体刷新表单 <a class="header-anchor" href="#usage-属性支持通过-flycode-设置-pagestatus-值来整体刷新表单" aria-label="Permalink to &quot;\`usage\` 属性支持通过 flycode 设置 pagestatus 值来整体刷新表单&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 设置整个表单为只读场景</span></span>
<span class="line"><span style="color:#e1e4e8;">Page.setValue(&#39;__pagestatus&#39;, &#39;3&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 设置整个表单为只读场景</span></span>
<span class="line"><span style="color:#24292e;">Page.setValue(&#39;__pagestatus&#39;, &#39;3&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="输入场景" tabindex="-1">输入场景 <a class="header-anchor" href="#输入场景" aria-label="Permalink to &quot;输入场景&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/input.png" alt=""></p><h5 id="输入场景垂直模式" tabindex="-1">输入场景垂直模式 <a class="header-anchor" href="#输入场景垂直模式" aria-label="Permalink to &quot;输入场景垂直模式&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/vertical.png" alt=""></p><h5 id="只读场景" tabindex="-1">只读场景 <a class="header-anchor" href="#只读场景" aria-label="Permalink to &quot;只读场景&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/readonly-1.png" alt=""></p><h5 id="查看场景" tabindex="-1">查看场景 <a class="header-anchor" href="#查看场景" aria-label="Permalink to &quot;查看场景&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/view.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/view-none.png" alt=""></p><h5 id="在table里输入型控件自动应用简化模式" tabindex="-1">在table里输入型控件自动应用简化模式 <a class="header-anchor" href="#在table里输入型控件自动应用简化模式" aria-label="Permalink to &quot;在table里输入型控件自动应用简化模式&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/basis.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/basis-error.png" alt=""></p>`,26),p=[l];function o(r,c,i,d,u,h){return s(),t("div",null,p)}const q=a(e,[["render",o]]);export{y as __pageData,q as default};
