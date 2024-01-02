import{_ as a,c as i,o as n,U as l,k as s,a as t}from"./chunks/framework.K-r7inPk.js";const g=JSON.parse('{"title":"SelectBox","description":"","frontmatter":{"title":"SelectBox","date":"2020-05-20T16:29:35.000Z"},"headers":[],"relativePath":"doc/wpdoc/SelectBox.md","filePath":"doc/wpdoc/SelectBox.md"}'),e={name:"doc/wpdoc/SelectBox.md"},p=l(`<h1 id="selectbox" tabindex="-1">SelectBox <a class="header-anchor" href="#selectbox" aria-label="Permalink to &quot;SelectBox&quot;">​</a></h1><p>选择框，把常见的 checkbox 和 radiobox，以及筛选选项合为一个控件</p><ul><li><p>Web</p><p>web端通常都是使用左右布局</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/selectboxSampleWeb.png" alt=""></p></li><li><p>mobile</p><p>mobile端通常使用上下布局</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/selectboxSampleMobile.png" alt=""></p></li><li><p>buttonMode</p><p>按钮模式，以按钮形式显示选项</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/selectboxButtonMode.png" alt=""></p></li></ul><h2 id="protocal" tabindex="-1">Protocal <a class="header-anchor" href="#protocal" aria-label="Permalink to &quot;Protocal&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;selectbox&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ctrlcode_storelevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;性别选择&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;性别&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;multiselectable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;colnum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;displaystyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onvaluechange&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onload&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;options&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;男&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;女&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="colnum-列数" tabindex="-1">colnum 列数 <a class="header-anchor" href="#colnum-列数" aria-label="Permalink to &quot;colnum 列数&quot;">​</a></h3><p>选项排列的列数</p><p><code>0</code> 表示自动布局，会根据选项内容的长度，自动使用合适的列数</p><p><code>&gt;0的正整数</code> 表示指定显示列数，默认值为 <code>0</code></p><h3 id="displaystyle-显示模式" tabindex="-1">displaystyle 显示模式 <a class="header-anchor" href="#displaystyle-显示模式" aria-label="Permalink to &quot;displaystyle 显示模式&quot;">​</a></h3><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>check</td><td>勾选框模式，默认值，会根据单选或者多选在UI上有所不同</td></tr><tr><td>button</td><td>显示为按钮组的模式</td></tr><tr><td>dropdown</td><td></td></tr></tbody></table><blockquote><p>无论单选多选，选中的选项再次点击均可取消选中状态</p></blockquote><h2 id="默认值说明" tabindex="-1">默认值说明 <a class="header-anchor" href="#默认值说明" aria-label="Permalink to &quot;默认值说明&quot;">​</a></h2><p>可以通过value属性设置默认值。如果没有设置默认值，将没有默认。默认值配置采用Component为key的规则</p><blockquote><p>注：当设置了单选，但是赋值给控件的数据有是多个选中值的情况下，默认只取第一个选中值进行显示</p></blockquote><h2 id="value-formart" tabindex="-1">Value Formart <a class="header-anchor" href="#value-formart" aria-label="Permalink to &quot;Value Formart&quot;">​</a></h2><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h3>`,17),h=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"name"),s("th",null,"single value"),s("th",null,[t("multi "),s("code",null,"value")])])]),s("tbody",null,[s("tr",null,[s("td",null,"value"),s("td",{"text:":"","天河区经销商,":"","key:":"",1001:""}),s("td",null,'[{"text": "荔湾区经销商","key": "1001"},{"text":"荔湾区经销商","key": "1002"}]')]),s("tr",null,[s("td",null,"text"),s("td",null,'"天河区经销商"'),s("td",null,'"天河区经销商|荔湾区经销商"')]),s("tr",null,[s("td",null,"key"),s("td",null,'"1001"'),s("td",null,'"1001|1002"')]),s("tr",null,[s("td",null,"fullvalue"),s("td",{"text:":"","天河区经销商,":"","key:":"",1001:""}),s("td",null,'[{"text": "荔湾区经销商","key": "1001"},{"text":"荔湾区经销商","key": "1002"}]')])])],-1),k=[p,h];function r(o,d,E,u,c,b){return n(),i("div",null,k)}const q=a(e,[["render",r]]);export{g as __pageData,q as default};
