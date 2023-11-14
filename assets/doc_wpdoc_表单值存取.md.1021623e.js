import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aac09c5f.js";const m=JSON.parse('{"title":"表单值存取","description":"","frontmatter":{"title":"表单值存取","date":"2020-05-19T18:33:38.000Z"},"headers":[],"relativePath":"doc/wpdoc/表单值存取.md","filePath":"doc/wpdoc/表单值存取.md"}'),p={name:"doc/wpdoc/表单值存取.md"},t=l(`<h1 id="表单值存取" tabindex="-1">表单值存取 <a class="header-anchor" href="#表单值存取" aria-label="Permalink to &quot;表单值存取&quot;">​</a></h1><h2 id="getvalue-key" tabindex="-1">getValue(key) <a class="header-anchor" href="#getvalue-key" aria-label="Permalink to &quot;getValue(key)&quot;">​</a></h2><p>获取页面绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>否</td><td>页面绑定值的key</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>String/Dictionary</td><td>可</td><td>获取页面绑定的值</td></tr></tbody></table><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getValue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;id</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getValue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;id</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="getvalues-keys" tabindex="-1">getValues(keys) <a class="header-anchor" href="#getvalues-keys" aria-label="Permalink to &quot;getValues(keys)&quot;">​</a></h2><p>获取页面绑定的多个值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>keys</td><td>Array</td><td>否</td><td>页面绑定值的key，Array形如[String]</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Dictionary</td><td>否</td><td>获取页面绑定的值</td></tr></tbody></table><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> keys </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;id</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;,</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;name</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;,</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;detail</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;,</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;tel</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;]</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">id:&amp;#039;123456&amp;#039;</span></span>
<span class="line"><span style="color:#6A737D;">name:&amp;#039;张三&amp;#039;</span></span>
<span class="line"><span style="color:#6A737D;">detail: { &amp;#039;tel&amp;#039;:&amp;#039;13445122225555&amp;#039;, &amp;#039;address&amp;#039;: &amp;#039;China&amp;#039; }</span></span>
<span class="line"><span style="color:#6A737D;">tel:null</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> values </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getValues</span><span style="color:#E1E4E8;">(keys)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> keys </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;id</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;,</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;name</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;,</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;detail</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;,</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;tel</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;]</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">id:&amp;#039;123456&amp;#039;</span></span>
<span class="line"><span style="color:#6A737D;">name:&amp;#039;张三&amp;#039;</span></span>
<span class="line"><span style="color:#6A737D;">detail: { &amp;#039;tel&amp;#039;:&amp;#039;13445122225555&amp;#039;, &amp;#039;address&amp;#039;: &amp;#039;China&amp;#039; }</span></span>
<span class="line"><span style="color:#6A737D;">tel:null</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> values </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getValues</span><span style="color:#24292E;">(keys)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="setvalue-key-newvalue" tabindex="-1">setValue(key, newValue) <a class="header-anchor" href="#setvalue-key-newvalue" aria-label="Permalink to &quot;setValue(key, newValue)&quot;">​</a></h2><p>设置页面绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>否</td><td>页面绑定值的key</td></tr><tr><td>newValue</td><td>String/Dictionary</td><td>可</td><td>页面绑定值</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><h3 id="示例-2" tabindex="-1">示例 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;id</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">123456</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;id</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">123456</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="setvalues-keyvalues" tabindex="-1">setValues(keyValues) <a class="header-anchor" href="#setvalues-keyvalues" aria-label="Permalink to &quot;setValues(keyValues)&quot;">​</a></h2><p>设置页面绑定的多个值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>keyValues</td><td>Dictionary</td><td>否</td><td>页面绑定值的key及对应的value，value可为String／Dictionary类型</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><h3 id="示例-3" tabindex="-1">示例 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> values </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {&amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;id&amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;: </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">123456</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;,</span></span>
<span class="line"><span style="color:#E1E4E8;">               &amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;name&amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;: </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;张三</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;,</span></span>
<span class="line"><span style="color:#E1E4E8;">               &amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;detail&amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                   &amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;tel&amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;:</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">13445122225555</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   &amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;address&amp;#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;: </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;China</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">               } }</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">setValues</span><span style="color:#E1E4E8;">(values)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> values </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {&amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;id&amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;: </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">123456</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;,</span></span>
<span class="line"><span style="color:#24292E;">               &amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;name&amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;: </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;张三</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;,</span></span>
<span class="line"><span style="color:#24292E;">               &amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;detail&amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;: {</span></span>
<span class="line"><span style="color:#24292E;">                   &amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;tel&amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;:</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">13445122225555</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;,</span></span>
<span class="line"><span style="color:#24292E;">                   &amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;address&amp;#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;: </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;China</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">               } }</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">setValues</span><span style="color:#24292E;">(values)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="getctrl-ctrlname" tabindex="-1">getCtrl(ctrlName) <a class="header-anchor" href="#getctrl-ctrlname" aria-label="Permalink to &quot;getCtrl(ctrlName)&quot;">​</a></h2><p>获取页面上的Ctrl类型控件</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>ctrlName</td><td>String</td><td>否</td><td>控件的名字</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Ctrl</td><td>可</td><td>返回指定名字的Ctrl类型控件，控件不存在时返回null</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//获取‘输入框’控件，设置其隐藏属性，并调整布局</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> textInput </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;输入框</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">#</span><span style="color:#79B8FF;">039</span><span style="color:#E1E4E8;">;)</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(textInput </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    texInput.hidden </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    Page.</span><span style="color:#B392F0;">applyLayout</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//获取‘输入框’控件，设置其隐藏属性，并调整布局</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> textInput </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;输入框</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">#</span><span style="color:#005CC5;">039</span><span style="color:#24292E;">;)</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(textInput </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    texInput.hidden </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    Page.</span><span style="color:#6F42C1;">applyLayout</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="getarrayctrl-ctrlname" tabindex="-1">getArrayCtrl(ctrlName) <a class="header-anchor" href="#getarrayctrl-ctrlname" aria-label="Permalink to &quot;getArrayCtrl(ctrlName)&quot;">​</a></h2><p>获取页面上的ArrayCtrl类型控件</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>ctrlName</td><td>String</td><td>否</td><td>控件的名字</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>ArrayCtrl</td><td>可</td><td>返回指定名字的ArrayCtrl类型控件，控件不存在时返回null</td></tr></tbody></table><h2 id="getpickerctrl-ctrlname" tabindex="-1">getPickerCtrl(ctrlName) <a class="header-anchor" href="#getpickerctrl-ctrlname" aria-label="Permalink to &quot;getPickerCtrl(ctrlName)&quot;">​</a></h2><p>获取页面上的PickerCtrl类型控件</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>ctrlName</td><td>String</td><td>否</td><td>控件的名字</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>PickerCtrl</td><td>可</td><td>返回指定名字的PickerCtrl类型控件，控件不存在时返回null</td></tr></tbody></table>`,38),e=[t];function o(r,c,y,E,d,i){return a(),n("div",null,e)}const b=s(p,[["render",o]]);export{m as __pageData,b as default};
