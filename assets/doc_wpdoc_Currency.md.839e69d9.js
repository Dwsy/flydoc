import{_ as t,C as e,o as c,c as r,k as s,H as a,w as o,Q as p,a as l}from"./chunks/framework.b1e56e49.js";const x=JSON.parse('{"title":"Currency","description":"","frontmatter":{"title":"Currency","date":"2020-05-20T16:59:53.000Z"},"headers":[],"relativePath":"doc/wpdoc/Currency.md","filePath":"doc/wpdoc/Currency.md"}'),u={name:"doc/wpdoc/Currency.md"},E=p(`<h1 id="currency-货币输入" tabindex="-1">Currency 货币输入 <a class="header-anchor" href="#currency-货币输入" aria-label="Permalink to &quot;Currency 货币输入&quot;">​</a></h1><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/CurrencyInputSample1.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/CurrencyInputSample2.png" alt=""></p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;currency&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ctrl_currency_contractamount&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;签约金额&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;placeholder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;请填写合同签约金额&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;required&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;textalign&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;upperlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lowerlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;currencycode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;CNY&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;unit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;元&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;thousandsseparators&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;decimaldigits&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;minus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;minusstyle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;debounceinterval&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;currency&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ctrl_currency_contractamount&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;签约金额&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;placeholder&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;请填写合同签约金额&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;required&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;textalign&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;upperlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lowerlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;currencycode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;CNY&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;unit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;元&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;thousandsseparators&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;decimaldigits&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;minus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;minusstyle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;debounceinterval&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li><p>placeholder</p><p>占位文字</p><p>如果为空则显示默认占位文字 <code>0.00</code>（web端暂不实现） 。</p></li><li><p>upperlimit &amp; lowerlimit</p><p>金额的最大限制值和最小限制值，默认为空，表示没有限制</p><p>如果用户输入的值超出了范围，则需要提示用户</p><p>这两个属性可以作为该控件的 <code>component</code> 在 <code>setter</code> 中进行赋值 (web端暂未实现)</p></li><li><p>currencycode</p><p>货币种类代码，会影响金额前面的货币符号显示，默认值为空，使用 <code>ISO 4217</code> 标准</p><p>常用的有</p></li></ul><table><thead><tr><th>货币种类</th><th>值</th><th>符号</th></tr></thead><tbody><tr><td>人民币</td><td><strong>CNY</strong></td><td>¥</td></tr><tr><td>美元</td><td><strong>USD</strong></td><td>$</td></tr><tr><td>欧元</td><td><strong>EUR</strong></td><td>€</td></tr></tbody></table><ul><li><p>unit</p><p>货币单位，值为一个字符串，直接显示在金额后面，例如 <code>元</code>， <code>万元</code> 等</p><p>默认值为空，表示不显示单位</p></li><li><p>thousandsseparators</p><p>千位分隔符是否显示，0表示不显示，1表示显示，默认值为1</p></li><li><p>decimaldigits</p><p>小数点位数，正整数，默认值为2，0表示不能输入小数</p></li><li><p>textalign</p><p>对齐方式，用于控制内容的对齐方式。</p><p>默认值为空，此时将会自动使用右对齐的模式。</p></li><li><p>minus</p><p>是否能输入负数，bool值，默认为1</p></li><li><p>minusstyle</p><p>负数显示风格，暂不实现</p></li></ul>`,8),y=s("thead",null,[s("tr",null,[s("th",null,"取值"),s("th",null,"显示示例")])],-1),i=s("tr",null,[s("td",null,"0"),s("td",null,"- ¥ 100,000 元")],-1),d=s("td",null,"1",-1),q=s("td",null,"2",-1),F=s("tr",null,[s("td",null,"3"),s("td",null,"(¥ 100,000 元)")],-1),C=s("td",null,"4",-1),m=p('<ul><li><p>debounceinterval</p><p>参看 <a href="./TextInput.html">textinput</a></p></li></ul><h2 id="value-component" tabindex="-1">Value Component <a class="header-anchor" href="#value-component" aria-label="Permalink to &quot;Value Component&quot;">​</a></h2><ul><li><p>value</p><p>控件值，格式为 <code>&quot;200000.00&quot;</code></p></li><li><p>lowerlimit</p><p>最小值，格式为 <code>&quot;20.00&quot;</code></p></li><li><p>upperlimit</p><p>最大值，格式为 <code>&quot;99999999.99&quot;</code></p></li></ul>',3);function _(h,b,B,g,f,v){const n=e("font");return c(),r("div",null,[E,s("table",null,[y,s("tbody",null,[i,s("tr",null,[d,s("td",null,[a(n,null,{default:o(()=>[l("- ¥ 100,000 元")]),_:1})])]),s("tr",null,[q,s("td",null,[a(n,null,{default:o(()=>[l("¥ 100,000 元")]),_:1})])]),F,s("tr",null,[C,s("td",null,[a(n,null,{default:o(()=>[l("(¥ 100,000 元)")]),_:1})])])])]),m])}const T=t(u,[["render",_]]);export{x as __pageData,T as default};
