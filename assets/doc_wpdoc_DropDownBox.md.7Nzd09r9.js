import{_ as n,o as i,c as l,R as a,k as s}from"./chunks/framework.S1SDgkSw.js";const y=JSON.parse('{"title":"DropDownBox","description":"","frontmatter":{"title":"DropDownBox","date":"2020-05-20T16:55:57.000Z"},"headers":[],"relativePath":"doc/wpdoc/DropDownBox.md","filePath":"doc/wpdoc/DropDownBox.md"}'),e={name:"doc/wpdoc/DropDownBox.md"},t=a(`<h1 id="dropdownbox" tabindex="-1">DropDownBox <a class="header-anchor" href="#dropdownbox" aria-label="Permalink to &quot;DropDownBox&quot;">​</a></h1><p>选择框</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/DropDownBoxSample.png" alt=""></p><h2 id="protocal" tabindex="-1">Protocal <a class="header-anchor" href="#protocal" aria-label="Permalink to &quot;Protocal&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 静态选项</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dropdownbox&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ctrlcode_storelevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;终端级别&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;searchable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;hiddenclearbtn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;multiselectable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;islazyload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onload&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onvaluechange&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onloadoptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;options&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;isselected&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;level2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;isselected&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="searchable" tabindex="-1">searchable <a class="header-anchor" href="#searchable" aria-label="Permalink to &quot;searchable&quot;">​</a></h3><p>是否允许搜索，bool类型，默认值为 <code>1</code> ，支持搜索</p><p>目前只支持对 <code>text</code> 值进行搜索。</p><h3 id="hiddenclearbtn" tabindex="-1">hiddenclearbtn <a class="header-anchor" href="#hiddenclearbtn" aria-label="Permalink to &quot;hiddenclearbtn&quot;">​</a></h3><p>参看 <a href="./../Inputer/Date.html">日期控件</a> 的对应属性</p><h3 id="multiselectable" tabindex="-1">multiselectable <a class="header-anchor" href="#multiselectable" aria-label="Permalink to &quot;multiselectable&quot;">​</a></h3><p>多选，目前只在web端实现</p><h3 id="islazyload" tabindex="-1">islazyload <a class="header-anchor" href="#islazyload" aria-label="Permalink to &quot;islazyload&quot;">​</a></h3><p>是否使用懒加载，默认值为0，表示不使用</p><p>使用懒加载时，前端将不会在表单加载时就加载选项，而是在点击了控件后才调用onload事件</p><h2 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h2><h3 id="value-component" tabindex="-1">Value Component <a class="header-anchor" href="#value-component" aria-label="Permalink to &quot;Value Component&quot;">​</a></h3><table><thead><tr><th>name</th><th>value</th><th>meaning</th></tr></thead><tbody><tr><td>text</td><td>leve1</td><td>显示名称</td></tr><tr><td>key</td><td>1</td><td>实际值</td></tr><tr><td>value</td><td>同key</td><td>同key</td></tr><tr><td>fullvalue</td><td>复合值</td><td>同时包含key和value的值, 如 &quot;{&quot;text&quot;: &quot;调休假&quot;, &quot;key&quot;: &quot;1&quot;}&quot;</td></tr></tbody></table><blockquote><p>当没有设置Component时，默认值为key</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var ctrl = Page.getCtrl(&quot;dropdownCtrl&quot;);</span></span>
<span class="line"><span>ctrl.value = &quot;1&quot;;</span></span>
<span class="line"><span>ctrl.setValue(&quot;level1&quot;, CtrlSetter(&quot;text&quot;));</span></span>
<span class="line"><span>ctrl.getValue(CtrlValueGetter(“fullvalue”))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="option-component" tabindex="-1">Option Component <a class="header-anchor" href="#option-component" aria-label="Permalink to &quot;Option Component&quot;">​</a></h3><table><thead><tr><th>name</th><th>value</th><th>meaning</th></tr></thead><tbody><tr><td>text</td><td>leve1</td><td>显示名称</td></tr><tr><td>key</td><td>1</td><td>实际值</td></tr><tr><td>value</td><td>同key</td><td>同key</td></tr><tr><td>isselected</td><td>0/1</td><td>是否默认选中，Bool类型 （web端实现）</td></tr><tr><td><s>status</s></td><td>1</td><td>1：启用；2：停用，停用的选项不能再次被选中 （暂不实现）</td></tr><tr><td>required</td><td>0/1</td><td>是否必须选中，1代表必须选中，0或者空表示正常处理（web端实现，单选不支持）</td></tr></tbody></table><blockquote><p>备注：</p><ol><li>如果给控件通过component设置为“key”(“value”,“”都等同与key)给控件赋值，控件不显示对应的值，但是取值时可以通过component设置为“key”(“value”,“”都等同与key)来取得原来赋的值。</li></ol></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Page.getPickerCtrl(&quot;&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><p>所有的选项值类型的控件，如果直接获取其 <code>value</code> 就相当于获取 <code>key</code></p><p>如果想要获取完整值，需要使用专用的 <code>fullvalue</code> 作为 <code>component</code></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 单选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;leve1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 多选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;leve1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;leve2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>备注：Web端9.4版本后，fullvalue支持额外字段</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 单选</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;text&quot;: &quot;leve1&quot;,</span></span>
<span class="line"><span>    &quot;key&quot;: &quot;1&quot;,</span></span>
<span class="line"><span>    &quot;其他额外字段&quot;: &#39;any&#39;</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多选</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;text&quot;: &quot;leve1&quot;,</span></span>
<span class="line"><span>        &quot;key&quot;: &quot;1&quot;,</span></span>
<span class="line"><span>        &quot;其他额外字段&quot;: &#39;any&#39;</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        &quot;text&quot;: &quot;leve2&quot;,</span></span>
<span class="line"><span>        &quot;key&quot;: &quot;2&quot;</span></span>
<span class="line"><span>        &quot;其他额外字段&quot;: &#39;any&#39;</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="component-1" tabindex="-1">Component <a class="header-anchor" href="#component-1" aria-label="Permalink to &quot;Component&quot;">​</a></h3>`,31),p=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"name"),s("th",null,"single value"),s("th",null,"multi value")])]),s("tbody",null,[s("tr",null,[s("td",null,"value"),s("td",null,'"1001"'),s("td",null,'["1001", "1002"]')]),s("tr",null,[s("td",null,"text"),s("td",null,'"天河区经销商"'),s("td",null,'["天河区经销商", "荔湾区经销商"]')]),s("tr",null,[s("td",null,"key"),s("td",null,'"1001"'),s("td",null,'["1001", "1002"]')]),s("tr",null,[s("td",null,"fullvalue"),s("td",{"text:":"","天河区经销商,":"","key:":"",1001:""}),s("td",null,'[{"text": "荔湾区经销商","key": "1001"},{"text":"leve2","key": "1002"}]')])])],-1),h=a('<h3 id="重要提示" tabindex="-1">重要提示 <a class="header-anchor" href="#重要提示" aria-label="Permalink to &quot;重要提示&quot;">​</a></h3><p>控件数据源（options）支持缓存其他字段信息并提供uiflycode通过fullValue取值，<br> 但该方式不属于标准支持，因该使用方式引发的相关问题，需要项目组人员自行处理</p><p>非标准使用冗余字段可能带来的问题：<br> 1、所有业务关键信息放一个很大的{key, text}存储在一个字段，然后数据库表字段长度溢出（避免该问题，需要配置人员有一定的开发设计基础）</p><h1 id="选项类控件赋值处理规则" tabindex="-1">选项类控件赋值处理规则 <a class="header-anchor" href="#选项类控件赋值处理规则" aria-label="Permalink to &quot;选项类控件赋值处理规则&quot;">​</a></h1><p>选项类控件有以下几种途径进行赋值，以下优先级逐步提升</p><p>1：直接在控件协议的value上赋值</p><p>2：在控件的选项中添加isselected字段赋值</p><p>3：通过外部设置value进行赋值</p><p>同级别的，后赋值的覆盖前一个赋值，例如控件先使用flycode设了值，又通过setter绑定了值，这两个都属于外部赋值，就用setter的覆盖前一个flycode的值；</p><p>不同级别的，按级别高低赋值，例如，在表单onload事件中用setter给控件赋值后，才加载控件的选项options，而选项中又有isselected字段，此时将忽略isselected字段，以外部赋值优先。</p><h1 id="web端选项类控件自动搜索规则" tabindex="-1">web端选项类控件自动搜索规则 <a class="header-anchor" href="#web端选项类控件自动搜索规则" aria-label="Permalink to &quot;web端选项类控件自动搜索规则&quot;">​</a></h1><p>web端的选项类控件（dropdownbox）都支持自动搜索，即支持在输入框中输入内容进行搜索。</p><p>目前只支持全量获取了选项的控件进行前端快捷搜索，该搜索自动对text值进行模糊匹配。支持单选和多选的搜索。</p><h1 id="web端备注" tabindex="-1">web端备注 <a class="header-anchor" href="#web端备注" aria-label="Permalink to &quot;web端备注&quot;">​</a></h1><ol><li>如果数据源数据重复，前端不做过滤，实施去修改数据源</li><li>9.4下拉框控件底层重构，交互样式以9.4后的版本问主</li></ol>',15),r=[t,p,h];function o(k,d,u,c,E,b){return i(),l("div",null,r)}const g=n(e,[["render",o]]);export{y as __pageData,g as default};
