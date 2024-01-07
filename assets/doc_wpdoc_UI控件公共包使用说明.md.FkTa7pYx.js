import{_ as s,c as n,o as a,U as p}from"./chunks/framework.FhXPyWfz.js";const q=JSON.parse('{"title":"UI控件公共包使用说明","description":"","frontmatter":{"title":"UI控件公共包使用说明","date":"2022-09-08T08:52:38.000Z"},"headers":[],"relativePath":"doc/wpdoc/UI控件公共包使用说明.md","filePath":"doc/wpdoc/UI控件公共包使用说明.md"}'),e={name:"doc/wpdoc/UI控件公共包使用说明.md"},l=p(`<h2 id="ui控件公共包使用说明" tabindex="-1">UI控件公共包使用说明 <a class="header-anchor" href="#ui控件公共包使用说明" aria-label="Permalink to &quot;UI控件公共包使用说明&quot;">​</a></h2><h3 id="需求背景" tabindex="-1">需求背景 <a class="header-anchor" href="#需求背景" aria-label="Permalink to &quot;需求背景&quot;">​</a></h3><p>由于UI控件中可能会依赖于各种各样的第三方依赖，比如echarts、element-ui、ant-design-vue等。<br> 每个UI控件都需要单独引入然后进行打包，会存在两个问题，一是每个UI控件的包体积因为第三方依赖变得很大，<br> 导致UI控件加载时间边长，二是如果UI控件的常用依赖包无法被重复引用，造成浪费。</p><h3 id="改造方案" tabindex="-1">改造方案 <a class="header-anchor" href="#改造方案" aria-label="Permalink to &quot;改造方案&quot;">​</a></h3><p>单独开出另外一栏存放第三方的公共包，命名为包管理，将经常使用的公共包上传到此处。</p><p>UI控件中增加一个公共包依赖的tab，只需要对当前UI控件使用到的公共包进行勾选，就能将此公共包引入到UI控<br> 件中，当前UI控件就无需再自行打包第三方的公共依赖，从而减少UI控件的体积和对公共依赖的重复利用。</p><h3 id="数据表sql" tabindex="-1">数据表sql <a class="header-anchor" href="#数据表sql" aria-label="Permalink to &quot;数据表sql&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>CREATE TABLE &quot;public&quot;.&quot;pl_pack&quot; (</span></span>
<span class="line"><span>  &quot;packcode&quot; int8 NOT NULL,</span></span>
<span class="line"><span>  &quot;chinesename&quot; varchar(500) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span>  &quot;name&quot; varchar(500) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span>  &quot;status&quot; int4,</span></span>
<span class="line"><span>  &quot;publiclevel&quot; int4,</span></span>
<span class="line"><span>  &quot;createaccountcode&quot; int8,</span></span>
<span class="line"><span>  &quot;updateaccountcode&quot; int8,</span></span>
<span class="line"><span>  &quot;createaccountname&quot; varchar(200) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span>  &quot;updateaccountname&quot; varchar(200) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span>  &quot;createtime&quot; timestamp(0),</span></span>
<span class="line"><span>  &quot;updatetime&quot; timestamp(0),</span></span>
<span class="line"><span>  &quot;tenantcode&quot; int8 NOT NULL DEFAULT 0,</span></span>
<span class="line"><span>  &quot;sourcefilename&quot; varchar(255) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span>  &quot;packfilename&quot; varchar(255) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span>  CONSTRAINT &quot;pl_pagewidget_copy1_pkey&quot; PRIMARY KEY (&quot;packcode&quot;, &quot;tenantcode&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ALTER TABLE &quot;public&quot;.&quot;pl_pack&quot; </span></span>
<span class="line"><span>  OWNER TO &quot;postgres&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;packcode&quot; IS &#39;编码&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;chinesename&quot; IS &#39;中文名称&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;name&quot; IS &#39;名称&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;status&quot; IS &#39;状态，1表示启用，2表示停用&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;publiclevel&quot; IS &#39;公开等级，1.公开，0.私有&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;tenantcode&quot; IS &#39;租户编码&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;sourcefilename&quot; IS &#39;源码文件名&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pack&quot;.&quot;packfilename&quot; IS &#39;打包文件名&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON TABLE &quot;public&quot;.&quot;pl_pack&quot; IS &#39;页面控件&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 增加依赖字段</span></span>
<span class="line"><span>ALTER TABLE &quot;public&quot;.&quot;pl_pagewidget&quot; </span></span>
<span class="line"><span>  ADD COLUMN &quot;dependencies&quot; varchar(300);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pagewidget&quot;.&quot;dependencies&quot; IS &#39;依赖的第三方包code，如有多个则用半角逗号隔开&#39;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="使用教程" tabindex="-1">使用教程 <a class="header-anchor" href="#使用教程" aria-label="Permalink to &quot;使用教程&quot;">​</a></h3><ol><li><p>将常用的公共依赖按照UI控件的打包方式打成资源包</p><ul><li><p>1-1 在<a href="https://gitee.com/gorphensu/k100-web-native" target="_blank" rel="noreferrer">k100-web-native</a>项目中，<br> src/lib/index.js引入第三方依赖包（记得npm install，依赖包可以是一个，也可以是多个）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 示例一，第三方依赖包全量引入</span></span>
<span class="line"><span>import qs from &#39;qs&#39;</span></span>
<span class="line"><span>import lodash from &#39;lodash&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    qs,</span></span>
<span class="line"><span>    lodash</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 示例二，第三方包按需引入</span></span>
<span class="line"><span>// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。</span></span>
<span class="line"><span>import * as echarts from &#39;echarts/core&#39;</span></span>
<span class="line"><span>// 引入柱状图图表，图表后缀都为 Chart</span></span>
<span class="line"><span>import { BarChart } from &#39;echarts/charts&#39;</span></span>
<span class="line"><span>// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>    TitleComponent,</span></span>
<span class="line"><span>    TooltipComponent,</span></span>
<span class="line"><span>    GridComponent,</span></span>
<span class="line"><span>    DatasetComponent,</span></span>
<span class="line"><span>    TransformComponent</span></span>
<span class="line"><span>} from &#39;echarts/components&#39;</span></span>
<span class="line"><span>// 标签自动布局，全局过渡动画等特性</span></span>
<span class="line"><span>import { LabelLayout, UniversalTransition } from &#39;echarts/features&#39;</span></span>
<span class="line"><span>// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步</span></span>
<span class="line"><span>import { CanvasRenderer } from &#39;echarts/renderers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注册必须的组件</span></span>
<span class="line"><span>echarts.use([</span></span>
<span class="line"><span>    TitleComponent,</span></span>
<span class="line"><span>    TooltipComponent,</span></span>
<span class="line"><span>    GridComponent,</span></span>
<span class="line"><span>    DatasetComponent,</span></span>
<span class="line"><span>    TransformComponent,</span></span>
<span class="line"><span>    BarChart,</span></span>
<span class="line"><span>    LabelLayout,</span></span>
<span class="line"><span>    UniversalTransition,</span></span>
<span class="line"><span>    CanvasRenderer</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>    echarts</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></li><li><p>1-2 打包出依赖文件，执行打包命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run build:lib</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>高级用法：</strong><br> src/lib/index.js的index.js可命名为其他名称，但需要在build/webpack.lib.conf.js中修改entry的文件名称</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>entry: path.resolve(__dirname, &#39;../src/lib/xxx.js&#39;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过此方法可以在lib文件夹中创建多个文件，通过修改entry可以实现打出不同的第三方公共依赖包</p></li></ul></li><li><p>在IDE-工具-包管理中新建，填写完包的中文名称，包名称以及选择公开级别</p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%AC%E5%85%B1%E5%8C%85%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF.png" alt=""></p><ol><li>将lib-bundle/dist/index.js以及lib-bundle/dist.zip文件传到包管理的代码管理中，然后进行保存</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%AC%E5%85%B1%E5%8C%85%E4%B8%8A%E4%BC%A0.png" alt=""></p><ol><li><p>在需要用到公共依赖的UI控件中写入引用代码</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// echarts引用实例</span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;erkai-dep-erkai-demo&quot;&gt;</span></span>
<span class="line"><span>    &lt;header class=&quot;stop-row-check&quot;&gt;</span></span>
<span class="line"><span>    &lt;span style=&quot;color: blue&quot;&gt;{{ $t(&#39;二开例子使用配置第三方库例子&#39;) }}：&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;(e) =&gt; handleClicked(e)&quot;&gt;渲染一个图表&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/header&gt;</span></span>
<span class="line"><span>    &lt;section ref=&quot;ref-chart&quot; style=&quot;width: 400px;height: 400px;&quot;&gt;</span></span>
<span class="line"><span>    &lt;/section&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import XtWeb from &#39;xtion-web&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上传包后，引入第三方包规则，getLib中的名称为包管理中的包名称</span></span>
<span class="line"><span>const { qs } = XtWeb.Dynamic.getLib(&#39;package-common&#39;)</span></span>
<span class="line"><span>const { echarts } = XtWeb.Dynamic.getLib(&#39;package-echarts&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>name: &#39;view&#39;,</span></span>
<span class="line"><span>props: {</span></span>
<span class="line"><span>    ctrl: Object</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>created () {</span></span>
<span class="line"><span>    // eslint-disable-next-line no-eval</span></span>
<span class="line"><span>    console.log(&#39;qs&#39;, qs.parse(&#39;http://localhost:9800/#/page?pagecode=1550417445091676252&#39;))</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>methods: {</span></span>
<span class="line"><span>    handleClicked () {</span></span>
<span class="line"><span>    console.log(&#39;echarts&#39;, echarts)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 基于准备好的dom，初始化echarts实例</span></span>
<span class="line"><span>    let myChart = echarts.init(this.$refs[&#39;ref-chart&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 指定图表的配置项和数据</span></span>
<span class="line"><span>    let option = {</span></span>
<span class="line"><span>        title: {</span></span>
<span class="line"><span>        text: &#39;ECharts 入门示例&#39;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        tooltip: {},</span></span>
<span class="line"><span>        legend: {</span></span>
<span class="line"><span>        data: [&#39;销量&#39;]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        xAxis: {</span></span>
<span class="line"><span>        data: [&#39;衬衫&#39;, &#39;羊毛衫&#39;, &#39;雪纺衫&#39;, &#39;裤子&#39;, &#39;高跟鞋&#39;, &#39;袜子&#39;]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        yAxis: {},</span></span>
<span class="line"><span>        series: [{</span></span>
<span class="line"><span>        name: &#39;销量&#39;,</span></span>
<span class="line"><span>        type: &#39;bar&#39;,</span></span>
<span class="line"><span>        data: [5, 20, 36, 10, 10, 20]</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用刚指定的配置项和数据显示图表。</span></span>
<span class="line"><span>    myChart.setOption(option)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div></li><li><p>UI控件的打包以及代码上传（此过程省略，详情请看<a href="http://apaas.wxchina.com:8881/2020/05/11/%E4%BA%8C%E5%BC%80%E6%8E%A7%E4%BB%B6%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/2020/05/11/二开控件开发流程</a>）</p></li><li><p>UI控件在公共包依赖的tab栏中勾选用到的依赖</p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%AC%E5%85%B1%E5%8C%85%E4%BE%9D%E8%B5%96.png" alt=""></p><ol><li>点击保存，完成！</li></ol>`,16),i=[l];function r(c,t,u,b,o,m){return a(),n("div",null,i)}const h=s(e,[["render",r]]);export{q as __pageData,h as default};
