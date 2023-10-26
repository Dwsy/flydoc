import{_ as t,o as d,c as a,Q as r}from"./chunks/framework.d084db19.js";const x=JSON.parse('{"title":"XChart","description":"","frontmatter":{"title":"XChart","date":"2020-05-20T14:06:42.000Z"},"headers":[],"relativePath":"doc/wpdoc/XChart.md","filePath":"doc/wpdoc/XChart.md"}'),e={name:"doc/wpdoc/XChart.md"},h=r('<h1 id="xchart" tabindex="-1">XChart <a class="header-anchor" href="#xchart" aria-label="Permalink to &quot;XChart&quot;">​</a></h1><p>前端自定义图表控件，这些控件都不支持输入，只支持显示，目前分为以下几类：</p><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>简单指示器</td><td>使用图形化的显示方式，展示一个值，通常用于生动化展示一个值</td></tr><tr><td>简单图表</td><td>使用图形化的显示方式，展示一组值，生动化展示的同时，突出这组值之间的对比</td></tr><tr><td>复合图表</td><td>使用图形化的显示方式，展示多组值，复杂的展现方式，支持一定的内部控件布局</td></tr></tbody></table><h1 id="指示器" tabindex="-1">指示器 <a class="header-anchor" href="#指示器" aria-label="Permalink to &quot;指示器&quot;">​</a></h1><p>这类指示器可以当做单值控件，放置到任何容器控件中，支持配置初始值（静态值）。</p><p>目前包括以下类型：</p><table><thead><tr><th>type</th><th>name</th><th>intro</th></tr></thead><tbody><tr><td>xcprogress</td><td>进度指示器</td><td>用于展现工作的进度，如门店拜访进度等</td></tr><tr><td>xcgauge</td><td>计量指示器</td><td>一种更复杂的进度指示器，可以设置多级目标。</td></tr><tr><td>xcstatus</td><td>状态指示器</td><td>用于展现工作的状态，如门店的拜访状态等</td></tr><tr><td>xcrank</td><td>排序指示器</td><td>用于展现排名的信息，例如下属的拜访排名等</td></tr></tbody></table><h1 id="图表" tabindex="-1">图表 <a class="header-anchor" href="#图表" aria-label="Permalink to &quot;图表&quot;">​</a></h1><p>接收一组关联值的图表控件，这类控件在 <strong>json赋值</strong> 的模式下可以放置于普通容器（非图表），支持配置初始值（静态值）。</p><p>目前包括以下类型：</p><table><thead><tr><th>type</th><th>name</th><th>intro</th></tr></thead><tbody><tr><td>xccompare</td><td>对比图</td><td>用于展现工作的进度，如门店拜访进度等</td></tr><tr><td>xcpie</td><td>饼图</td><td>饼图</td></tr><tr><td>xcline</td><td>线图</td><td>只支持一条曲线的线图</td></tr><tr><td>xcbar</td><td>柱状图</td><td>只支持一组值的柱图</td></tr><tr><td>xcfunnel</td><td>漏斗图</td><td>支持一组值以漏斗形式展示</td></tr><tr><td>xcbubble</td><td>气泡图</td><td>适合展示在x轴和y轴上连续分布的大量数据</td></tr><tr><td>xcradar</td><td>雷达图</td><td>适合展示多维度指标对比</td></tr><tr><td>xclinebar</td><td>柱线图表</td><td>以一个二维平面坐标系为基础来展示数据的图表</td></tr></tbody></table><h1 id="图表容器" tabindex="-1">图表容器 <a class="header-anchor" href="#图表容器" aria-label="Permalink to &quot;图表容器&quot;">​</a></h1><p>这类控件可以展示多组关联值数据，不支持配置初始值（必须由外部设置数据），也不支持放置于任何容器空间中。</p><p>这类控件通常提供一块区域作为容器，可以配置其他控件作为其显示内容的一部分。</p><p>目前包括以下类型：</p><table><thead><tr><th>type</th><th>name</th><th>intro</th></tr></thead><tbody><tr><td>xccascadedlist</td><td>级联图表</td><td>以一个级联树状结构的列表为基础来展示数据的图表，支持钻取</td></tr><tr><td>xctable</td><td>表格图表</td><td>以表格形式展示的图表</td></tr></tbody></table>',16),o=[h];function c(n,l,s,i,p,b){return d(),a("div",null,o)}const m=t(e,[["render",c]]);export{x as __pageData,m as default};