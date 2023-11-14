import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.aac09c5f.js";const d=JSON.parse('{"title":"DateRange","description":"","frontmatter":{"title":"DateRange","date":"2020-05-20T16:57:26.000Z"},"headers":[],"relativePath":"doc/wpdoc/DateRange.md","filePath":"doc/wpdoc/DateRange.md"}'),p={name:"doc/wpdoc/DateRange.md"},l=o(`<h1 id="daterange" tabindex="-1">DateRange <a class="header-anchor" href="#daterange" aria-label="Permalink to &quot;DateRange&quot;">​</a></h1><p>提供选择一个时间段的能力的控件。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/DateRangeSample.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/DateRangeSample2.png" alt=""></p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;daterange&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;合同有效期&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;displaystyle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;normal|calliper&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;unit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;year(-1, 1)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lowerlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day(0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;upperlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day(0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;mindiff&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;maxdiff&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;format&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;HH:ss&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;defranges&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;上周&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;range&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;week(-1, -1)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;近三个月&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;range&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;month(-3, -1)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;customoptions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;上午&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;thishour(7, 11)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;下午&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;thishour(13，17)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;daterange&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;合同有效期&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;displaystyle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;normal|calliper&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;unit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;year(-1, 1)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lowerlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day(0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;upperlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day(0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;mindiff&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;maxdiff&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;format&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;HH:ss&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;defranges&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;上周&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;range&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;week(-1, -1)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;近三个月&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;range&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;month(-3, -1)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;customoptions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;上午&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;thishour(7, 11)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;下午&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;thishour(13，17)&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul><li><p>lowerlimit，upperlimit，unit，format，displaystyle，customoptions</p><p>这些属性请参考 <a href="./Date.html">datepicker</a> ，其含义和用途都是一致，只不过在 <code>daterange</code> 中这些属性会同时作用于开始时间和结束时间</p><p>（web端: DateRange 暂不支持 unit 配置 month, year 属性）</p></li><li><p>value</p><p>和 <code>datepicker</code> 一样，支持时间表达式，具体参考 <a href="./Date.html">datepicker</a></p></li><li><p>mindiff</p><p>(web端暂不支持)</p><p>所能选择结束时间和开始时间最小差值，单位与 <code>unit</code> 保持一致，正整数，默认</p><p>值为 <code>nil</code></p><p>示例如下：</p><ul><li><code>unit == day &amp;&amp; maxdiff == 2</code> 意味着结束日期必须在开始日期的两天之后</li><li><code>mindiff = nil</code> 表示开始时间和结束时间可以是相同的值</li></ul></li><li><p>maxdiff</p><p>(web端暂不支持)</p><p>所能选择结束时间和开始时间最大差值，单位与 <code>unit</code> 保持一致，正整数，默认值为 <code>nil</code></p><p><code>maxdiff</code> 不为空的时候，其值不能小于 <code>mindiff</code></p><p>示例如下：</p><ul><li><code>unit == month &amp;&amp; maxdiff == 0</code> 意味着结束时间必须与开始日期在同一月</li><li><code>maxdiff = nil</code> 表示不限制</li></ul></li></ul><blockquote><p>无论 mindiff 和 maxdiff 如何配置，都要保证 <strong>结束时间 &gt; 开始时间</strong></p></blockquote><ul><li><p>defranges</p><p>快捷范围集，用于配置快捷选中指定时间段的按钮集合。</p><p>示例</p></li></ul><p>|---|---| |||</p><h2 id="场景举例" tabindex="-1">场景举例 <a class="header-anchor" href="#场景举例" aria-label="Permalink to &quot;场景举例&quot;">​</a></h2><p><strong>选择任意时间段</strong></p><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span><span style="color:#79B8FF;">&quot;lowerlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;upperlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;mindiff&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;maxdiff&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span><span style="color:#005CC5;">&quot;lowerlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;upperlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;mindiff&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;maxdiff&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>只能选择当天开始之后的60天范围内的某一天</strong></p><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span><span style="color:#79B8FF;">&quot;lowerlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day(0)&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;upperlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day(59)&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;mindiff&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;maxdiff&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span><span style="color:#005CC5;">&quot;lowerlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day(0)&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;upperlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day(59)&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;mindiff&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;maxdiff&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>只能选择当天开始之后的30天范围内的某7天</strong></p><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span><span style="color:#79B8FF;">&quot;lowerlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day(0)&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;upperlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;day(29)&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;mindiff&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;6&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;maxdiff&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;6&quot;</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span><span style="color:#005CC5;">&quot;lowerlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day(0)&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;upperlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;day(29)&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;mindiff&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;6&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;maxdiff&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;6&quot;</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>只能选择指定日期之后的1-3天时间</strong></p><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span><span style="color:#79B8FF;">&quot;lowerlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2017-07-02&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;upperlimit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;mindiff&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">&quot;maxdiff&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span><span style="color:#005CC5;">&quot;lowerlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2017-07-02&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;upperlimit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;mindiff&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">&quot;maxdiff&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h2><table><thead><tr><th>name</th><th>value</th><th>meaning</th><th>取值</th><th>赋值</th></tr></thead><tbody><tr><td>start</td><td>1503474204557</td><td>开始时间戳</td><td>✅</td><td>✅</td></tr><tr><td>end</td><td>1503474204558</td><td>结束时间戳</td><td>✅</td><td>✅</td></tr><tr><td>text</td><td>&quot;2018-10-01,2018-10-31&quot;</td><td>格式化值</td><td>✅</td><td>✅</td></tr><tr><td>starttext</td><td>&quot;2018-10-01&quot;</td><td>开始时间格式化值</td><td>✅</td><td>✅</td></tr><tr><td>endtext</td><td>&quot;2018-10-31&quot;</td><td>结束时间格式化值</td><td>✅</td><td>✅</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><blockquote><p>text 的取值受 format 属性影响，也就是说取值时，显示成什么格式就能获取到什么格式的数据；在赋值时就不用参看 format 属性，直接将字符串转换为日期</p><p>以上值选项目前只在手机端支持，web端暂不支持。</p></blockquote><h2 id="value" tabindex="-1">Value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;Value&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1503474204557&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;end&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1503474204558&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;start&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1503474204557&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;end&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1503474204558&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="两端统一性说明" tabindex="-1">两端统一性说明 <a class="header-anchor" href="#两端统一性说明" aria-label="Permalink to &quot;两端统一性说明&quot;">​</a></h2><p>start end:如果获取时间格式为2020-03-15，则获取的时间戳转为日期格式为：start：2020-03-15 00:00:00 end:2020-03-15 23:59:59<br> 即时间戳:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;start&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1584201600000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;end&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;1584287999000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;start&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1584201600000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;end&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;1584287999000&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>添加说明：如果格式是：2020 2020-03 2020-03-16这样的，配置component为starttext，endtext，text取时间日期的，需要取到的值为：以text为例：“2020-01-01,2020-01-31”, 或“2020-03-01, 2020-03-31”, “2020-03-01 00:00:00, 2020-03-31 23:59:59”...</p><blockquote><p>通过外部手段给控件进行赋值时，只要满足控件的限制条件，且用户没有手动更改过值，那么取值时就和赋值时保持一致。</p></blockquote>`,29),t=[l];function e(c,r,E,u,i,y){return a(),n("div",null,t)}const F=s(p,[["render",e]]);export{d as __pageData,F as default};
