import{_ as s,o as a,c as i,R as n}from"./chunks/framework.S1SDgkSw.js";const u=JSON.parse('{"title":"reorderlist排序列表","description":"","frontmatter":{"title":"reorderlist排序列表","date":"2020-05-20T15:58:12.000Z"},"headers":[],"relativePath":"doc/wpdoc/reorderlist排序列表.md","filePath":"doc/wpdoc/reorderlist排序列表.md"}'),t={name:"doc/wpdoc/reorderlist排序列表.md"},l=n(`<h1 id="排序列表" tabindex="-1">排序列表 <a class="header-anchor" href="#排序列表" aria-label="Permalink to &quot;排序列表&quot;">​</a></h1><p>用于对一组数据进行拖动排序的控件，单纯显示内容并排序，不支持数据分页，不支持搜索，不支持刷新，不支持数据编辑。</p><blockquote><p>因此建议排序列表的数据不超过20条为宜</p></blockquote><h2 id="ui示例" tabindex="-1">UI示例 <a class="header-anchor" href="#ui示例" aria-label="Permalink to &quot;UI示例&quot;">​</a></h2><p>目前web端和移动端的样式为固定样式，具体的flex示例参看下方布局说明</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8E%92%E5%BA%8F%E6%9C%89%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6.jpg" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8E%92%E5%BA%8F%E6%97%A0%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6.jpg" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF%E6%8E%92%E5%BA%8F.jpg" alt=""></p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;reorderlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;flex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;indexable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onreordered&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">              &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;rows&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;row&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;flexdirection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;horizontal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handler_linkdetail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onclicked&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul><li><p>indexable</p><p>bool类型，是否支持自动序号显示，默认值为1，如果可以，则会在每一行显示一个自动序号，该序号列为自增的序号，从1开始计算。当进行拖动排序时，自动更新序号。</p><p>在取值时，无论是否显示序号，都可以通过 <code>__autoindex</code> 关键字作为name值，来获取该序号值。</p></li><li><p>rows</p><p>与list控件的rows属性一致</p><blockquote><p>布局实现上，默认为水平布局</p></blockquote></li></ul><h2 id="事件说明" tabindex="-1">事件说明 <a class="header-anchor" href="#事件说明" aria-label="Permalink to &quot;事件说明&quot;">​</a></h2><h3 id="onreordered" tabindex="-1">onreordered <a class="header-anchor" href="#onreordered" aria-label="Permalink to &quot;onreordered&quot;">​</a></h3><p>点击确定按钮时触发</p><h3 id="onclicked" tabindex="-1">onclicked <a class="header-anchor" href="#onclicked" aria-label="Permalink to &quot;onclicked&quot;">​</a></h3><p>查看模式下点击行触发，排序状态下不触发</p><h2 id="支持放置的控件说明" tabindex="-1">支持放置的控件说明 <a class="header-anchor" href="#支持放置的控件说明" aria-label="Permalink to &quot;支持放置的控件说明&quot;">​</a></h2><p>排序控件只用于显示和排序，因此目前只支持以下控件放置，并且会自动设置这些控件为只读模式：</p><table><thead><tr><th>type</th><th>name</th></tr></thead><tbody><tr><td>text</td><td>文本</td></tr><tr><td>textinput</td><td>文本输入</td></tr><tr><td>icon</td><td>图标</td></tr><tr><td>image</td><td>图片</td></tr><tr><td>address</td><td>地址</td></tr><tr><td>datepicker</td><td>时间</td></tr><tr><td>dynamictext</td><td>动态文本</td></tr></tbody></table>`,19),e=[l];function p(r,h,k,o,d,E){return a(),i("div",null,e)}const b=s(t,[["render",p]]);export{u as __pageData,b as default};
