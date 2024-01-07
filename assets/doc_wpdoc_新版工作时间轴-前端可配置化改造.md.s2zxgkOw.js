import{_ as s,c as a,o as i,U as n}from"./chunks/framework.FhXPyWfz.js";const y=JSON.parse('{"title":"新版工作时间轴-前端可配置化改造","description":"","frontmatter":{"title":"新版工作时间轴-前端可配置化改造","date":"2022-06-30T08:03:41.000Z"},"headers":[],"relativePath":"doc/wpdoc/新版工作时间轴-前端可配置化改造.md","filePath":"doc/wpdoc/新版工作时间轴-前端可配置化改造.md"}'),l={name:"doc/wpdoc/新版工作时间轴-前端可配置化改造.md"},p=n(`<h1 id="新版工作时间轴-前端可配置化改造" tabindex="-1">新版工作时间轴-前端可配置化改造 <a class="header-anchor" href="#新版工作时间轴-前端可配置化改造" aria-label="Permalink to &quot;新版工作时间轴-前端可配置化改造&quot;">​</a></h1><p>智慧100产品新版的工作时间轴提供了一种全新的形式，用来展示每个人每天的工作情况，工作详情包含三大部分：<br> 1、工作基础信息统计（拜访数，新增客户数，新增订单金额，出勤工时，在店时长等等）<br> 2、基于eachrts图表的工作时间轴展示<br> 3、具体每项工作的工作详情，该模块是把某个人一天的工作详情按顺序展示出来</p><p>以下分别是web端和app端的实际效果：</p><p>如果实施有扩展新版工作时间轴的需求，可按以下流程进行改造：</p><h2 id="web端扩展" tabindex="-1">web端扩展 <a class="header-anchor" href="#web端扩展" aria-label="Permalink to &quot;web端扩展&quot;">​</a></h2><h3 id="列表页" tabindex="-1">列表页 <a class="header-anchor" href="#列表页" aria-label="Permalink to &quot;列表页&quot;">​</a></h3><p>pagecode = 1430370724106866784，列表页为UI表单配置，实施可自由修改。</p><h3 id="详情页" tabindex="-1">详情页 <a class="header-anchor" href="#详情页" aria-label="Permalink to &quot;详情页&quot;">​</a></h3><p>pagecode = 1430370724106866768，分为三个部分：</p><p>1、工作基础信息统计（拜访数，新增客户数，新增订单金额，出勤工时，在店时长等等），这部分也是UI自由配置，可自行添加删除修改工作基础信息控件，然后请求接口，用flycode对其进行赋值。</p><p>2、基于eachrts图表的工作时间轴展示，这是一个二开控件，可自由定义显示选项，其协议如下：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;timelinechart&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;native-timelinechart-1430436663842181219&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;工作时间轴报表&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;工作时间轴报表&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;xAxisName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;小时&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;yAxisName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;订单金额(元)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;series&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scatter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;新增门店&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;symbol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAAXNSR0IArs4c6QAAAJlQTFRFAAAAAP8AQP9AOeM5RN0zOtE6O9QzQtY6QNI5PtM4PdE4QNM2QdI5QNM4QNA5PtE4QNI4P9A3QNI4QNE5QNA3QNE4QNA4QNE5QNA5QNE4P9E5QNA4QNE5P9E4P9A4QNA4P9A5QNE4P9A4P9E4QNA4QNA5QNE4QNA5P9A4P9A4P9E4QNE5ZNlecNxqz/TN0PTO2/fZ3Pfa////tM/1GQAAACt0Uk5TAAEECQ8WHh8oKTI0P0BMTltdYHB4gIiQmKCho7Cyvr/KzNXW3+Do7/X6/cIVl1EAAAE0SURBVEjHzZbpTsJAFIWhgFJBBVGLgoKIXTitQt//4WzRSJdZ7pyExPNrkvZLe+aunc4Z5D9xXO8dMwpcAMmI4GYotO07c1dJCWLZdeQGH/jRgxvXXf1y2F07gY/4Uzhw4G5Q0avc5jCqgnKbReRrEttcoKHwUh75utaegBsnbRCBIPIhVLq1cd5KySGy2QygkcXmBFoZbQ7jyptZnueZzGa/FvkmGPla8AUmEJuehruHGYSmeY13NhB3Ku6iGXkFGCtsem+n5+lnqX0B7o+n1GRz3vhWVZnJZiADn41Jmn6VOhTI4Xgy/mq7LISX0y5EaThapS9OAD7lLEke+8KySmv3CUzPUch86+CbFd0e+YbMjwB+6PBjjh6s/Cjnlwd+XaEXJH4l45dAfu3kF116tf5v+gb/WLEituGvSAAAAABJRU5ErkJggg==&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;line&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;线内拜访&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;symbol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rect&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;#40D139&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;#4587FF&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>name：控件名称，一般用于flycode。</p><p>xAxisName：x坐标轴名称。</p><p>yAxisName：y坐标轴名称。</p><p>series：为x轴显示选项，数组类型，可自定义多个显示选项。</p><p>series.type：为选项显示类型，目前有 scatter 和 line 两种类型：</p><table><thead><tr><th>type</th><th>symbol</th><th>描述</th></tr></thead><tbody><tr><td>scatter</td><td>显示选项的图标，详见echart的symbol的api: <a href="https://echarts.apache.org/zh/option.html#series-scatter.symbol" target="_blank" rel="noreferrer">https://echarts.apache.org/zh/option.html#series-scatter.symbol</a> 建议设置为正方形的 dataURI 图标。</td><td>表示某个时间做了什么事，比如9点半做了“新增门店”的操作，在控件上显示为x轴某个点，y轴为0</td></tr><tr><td>line</td><td>当 type 为 line 时 symbol 必须为 rect</td><td>表示某段时间做了什么事，且与Y轴配合显示，比如9点到11点做了“线内拜访”，且成交了一笔1000元的订单，在控件上显示为x轴某两个时间段，y轴为订单金额的面积。</td></tr></tbody></table><p>series.name：为选项显示名称。</p><p>color：依据 series 的数组顺序定义显示选项的颜色值。</p><p>定位偏差：当 type 为 line 时（一般是线内拜访和线外拜访），门店拜访会有定位信息，一般实际拜访定位的地址（经纬度）与门店的地址会有偏差，在一定范围内时表示正常，如果超过一定方位，则会显示定位偏差图标。</p><p>flycode支持</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置定位偏差为300米</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果实际拜访地址与门店地址偏差不超过300，则正常</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果超过300或者无定位，则显示定位偏差图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;工作时间轴报表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).ctrlInstance.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;300&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;distance&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 赋值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;新增门店&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        starttime: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1629682200000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 选项时间戳</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tooltipValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;新增门店&lt;br /&gt;门店名称：xxxx&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 鼠标移动提示文字</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;线内拜访&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        starttime: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1629685800000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开始时间戳</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        endtime: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1629687600000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 结束时间戳</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;80&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// y轴值（订单金额）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        distance: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 偏差距离（米）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tooltipValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;线内拜访门店名称&lt;br /&gt;签到时间：xxxx&lt;br /&gt;签退时间：xxxx&lt;br /&gt;订单金额：80&lt;br /&gt;订单金额：xxxx&lt;br /&gt;订单金额：xxxx&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 鼠标移动提示文字</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        starttime: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1629714600000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        endtime: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 没有结束时间一直延续到24点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        yValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;20&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        distance: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 无定位</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tooltipValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;线内拜访门店名称&lt;br /&gt;签到时间：xxxx&lt;br /&gt;签退时间：xxxx&lt;br /&gt;订单金额：xxxx&lt;br /&gt;订单金额：xxxx&lt;br /&gt;订单金额：xxxx&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;工作时间轴报表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>3、具体每项工作的工作详情<br> 该模块依赖表单循环控件，通过传参传入要渲染的页面，循环渲染工作详情，循环页面 pagecode = 1433033306064162915，该页面也是通过UI表单配置，实施可自由配置修改。</p><h2 id="app端扩展" tabindex="-1">app端扩展 <a class="header-anchor" href="#app端扩展" aria-label="Permalink to &quot;app端扩展&quot;">​</a></h2><h3 id="列表页-1" tabindex="-1">列表页 <a class="header-anchor" href="#列表页-1" aria-label="Permalink to &quot;列表页&quot;">​</a></h3><p>pagecode = 1429709440763957347，列表页为UI表单配置，实施可自由修改。</p><h3 id="详情页-1" tabindex="-1">详情页 <a class="header-anchor" href="#详情页-1" aria-label="Permalink to &quot;详情页&quot;">​</a></h3><p>pagecode = 1507002727606128729，实施可自由修改。</p>`,30),t=[p];function e(h,k,r,E,d,c){return i(),a("div",null,t)}const b=s(l,[["render",e]]);export{y as __pageData,b as default};
