import{_ as s,o as i,c as a,R as n}from"./chunks/framework.S1SDgkSw.js";const E=JSON.parse('{"title":"控件属性","description":"","frontmatter":{"title":"控件属性","date":"2020-05-19T19:13:00.000Z"},"headers":[],"relativePath":"doc/wpdoc/控件属性.md","filePath":"doc/wpdoc/控件属性.md"}'),e={name:"doc/wpdoc/控件属性.md"},l=n(`<h1 id="控件属性" tabindex="-1">控件属性 <a class="header-anchor" href="#控件属性" aria-label="Permalink to &quot;控件属性&quot;">​</a></h1><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;code&quot;">​</a></h2><p>控件编码 <strong><code>String</code> <code>只读</code></strong>。</p><p>用于获取控件的编码。</p><p><strong>控件支持</strong> ：所有控件</p><h2 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h2><p>控件值，<strong><code>String / Dictionary / Array</code></strong></p><p>用于设置或者获取控件的值。</p><p><strong>控件支持</strong> ：所有控件</p><blockquote><p>不同种类的控件获取到的值的类型不同。</p><p>对于 <strong>单值控件</strong>，如 <code>textinput</code> ，该属性通过 <code>String</code> 类型存取。</p><p>对于 <strong>复合值控件</strong> ，如 <code>location</code> ，该属性的值类型为 <code>Dictionary</code> 。</p><p>对于 <strong>选项类控件</strong> ，如 <code>selectbox</code> ，该属性的值，在单选时为 <code>Dictionary</code> ，多选时为 <code>Array</code> 。对于这类控件的取值是获取已勾选的值，赋值是更新勾选值。</p><p>对于 <strong>数组型控件</strong> ，如 <code>table</code> ，该属性的值类型为 <code>Array</code> 。对于这类控件，取值是获取全部行列的值，赋值是更新控件的全部值。</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文本控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textCtrl.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;一段文字&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="floatvalue" tabindex="-1">floatValue <a class="header-anchor" href="#floatvalue" aria-label="Permalink to &quot;floatValue&quot;">​</a></h2><p>浮点值 <strong><code>Float</code></strong></p><p>用于获取数值型控件的数字值，便于直接用于计算或比较。</p><p><strong>控件支持</strong> ： <strong><code>currency</code> , <code>number</code></strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numberCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;数字控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textCtrl.flatValue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="hidden" tabindex="-1">hidden <a class="header-anchor" href="#hidden" aria-label="Permalink to &quot;hidden&quot;">​</a></h2><p>隐藏 <strong><code>Bool</code></strong></p><p>用于控制控件的显示或者隐藏，设置后，UI不会自动刷新，需要调用 <code>Page.applyLayout()</code> 方法刷新界面</p><p><strong>控件支持</strong> ：所有控件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文本控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textCtrl.hidden </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="readonly" tabindex="-1">readonly <a class="header-anchor" href="#readonly" aria-label="Permalink to &quot;readonly&quot;">​</a></h2><p>只读 <strong><code>Bool</code></strong></p><p>用于控制控件的只读状态，设置后，控件会自动更新显示状态。</p><p><strong>控件支持</strong> ：所有控件</p><blockquote><p>在设置只读状态时，如果是 容器控件，那么该状态会自动递归的设置到所有没有设置只读属性值的子控件上</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文本控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textCtrl.readonly </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="required" tabindex="-1">required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;required&quot;">​</a></h2><p>必填 <strong><code>Bool</code></strong></p><p>用于控制控件的必填状态，设置后，控件会自动更新显示状态。</p><p><strong>控件支持</strong> ：所有控件</p><blockquote><p>对于容器控件</p></blockquote><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;文本控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">textCtrl.required </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h2><p>前景色 <strong><code>Color</code></strong></p><p>用于设置或获取控件的前景色，设置后，控件会自动更新显示状态。</p><p><strong>控件支持</strong> ：<code>text</code>，<code>button</code>，<code>icon</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> icon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;图标控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">icon.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Color.red;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> red </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> icon.color; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// red == &#39;#E53C51&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>颜色赋值参看下方说明</p><p>取值默认返回 <code>#</code> 为前缀的16进制颜色编码</p></blockquote><h2 id="bgcolor" tabindex="-1">bgcolor <a class="header-anchor" href="#bgcolor" aria-label="Permalink to &quot;bgcolor&quot;">​</a></h2><p>背景色 <strong><code>Color</code></strong></p><p>用于设置或获取控件的前景色，设置后，控件会自动更新显示状态。</p><p><strong>控件支持</strong> ：<code>text</code>，<code>button</code>，<code>icon</code>，<code>layout</code>，<code>panel</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> icon </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;图标控件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">icon.bgcolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Color.red;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> red </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> icon.bgcolor; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// red == &#39;#E53C51&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>颜色赋值参看下方说明</p><p>取值默认返回 <code>#</code> 为前缀的16进制颜色编码</p></blockquote><h1 id="color-1" tabindex="-1">Color <a class="header-anchor" href="#color-1" aria-label="Permalink to &quot;Color&quot;">​</a></h1><p>颜色类型，支持三种赋值方式：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1: 内置颜色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> red </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Color.red;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2：16进制数字，支持两种前缀 &lt;code&gt;#&lt;/code&gt; 或 &lt;code&gt;0x&lt;/code&gt;，不区分大小写</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> black </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#FFFFFF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> red </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0xFF0000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3：RGB 或 RGBA</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> black </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;0,0,0&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> red </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;255,0,0,50&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>关于内置颜色，参看颜色枚举值说明</p></blockquote>`,49),t=[l];function p(h,r,k,d,o,c){return i(),a("div",null,t)}const u=s(e,[["render",p]]);export{E as __pageData,u as default};
