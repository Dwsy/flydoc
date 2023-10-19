import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"电子协议引擎","description":"","frontmatter":{"title":"电子协议引擎","date":"2023-05-15T14:52:52.000Z"},"headers":[],"relativePath":"doc/wpdoc/电子协议引擎.md","filePath":"doc/wpdoc/电子协议引擎.md"}'),p={name:"doc/wpdoc/电子协议引擎.md"},o=l(`<p>智慧100 V6.2提供了电子协议引擎功能，可用于制作电子合同模板，并能在 app端，web端，h5端，小程序端进行应用，它包含了以下部分：</p><ul><li>协议模板库</li><li>web端电子协议控件</li><li>H5端电子协议控件</li></ul><h2 id="协议模板库" tabindex="-1">协议模板库 <a class="header-anchor" href="#协议模板库" aria-label="Permalink to &quot;协议模板库&quot;">​</a></h2><p>协议模板库可自定义变量集和变量，是制作电子合同模板所必须引用的前置条件。</p><p>协议模板库用于指导 editor 状态下，变量选项的生成，以及 viewer 状态下，变量替换的指引。</p><p>入口为：web右上角进去配置中心-协议模板库。</p><p>变量集为多个变量的集合，可分为对象和数组类型，一个协议模板库可包含多个变量集。</p><p>变量指被应用到协议模板中进行占位，可被替换的最小单位值，支持的类型有：</p><ul><li>文本</li><li>图片</li><li>选项</li></ul><p>一个不太恰当的类比：协议模板库 = 数据库，变量集 = 表，变量 = 表字段。</p><p>生成协议模板库之后，可通过web端电子协议控件制作电子协议模板。</p><h2 id="web端电子协议控件" tabindex="-1">web端电子协议控件 <a class="header-anchor" href="#web端电子协议控件" aria-label="Permalink to &quot;web端电子协议控件&quot;">​</a></h2><p>web端电子协议控件，是以HTML为基础，用来生成电子协议模板，以及支持动态内容插入（普通文本，表格），基于电子协议模板生成电子协议合同。</p><h3 id="ui示例" tabindex="-1">UI示例 <a class="header-anchor" href="#ui示例" aria-label="Permalink to &quot;UI示例&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/eleprotocol.png" alt="图片"></p><h3 id="protocol-协议" tabindex="-1">Protocol 协议 <a class="header-anchor" href="#protocol-协议" aria-label="Permalink to &quot;Protocol 协议&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eleprotocol&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;useage&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;editor/viewer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;libraryid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eleprotocol&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;useage&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;editor/viewer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;libraryid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table><thead><tr><th>属性名称</th><th>说明</th><th>取值类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>协议模板值</td><td>string</td><td>--</td></tr><tr><td>useage</td><td>控件形态</td><td>enum</td><td>--</td></tr><tr><td>libraryid</td><td>协议模板库id</td><td>string</td><td>--</td></tr></tbody></table><h3 id="useage" tabindex="-1">useage <a class="header-anchor" href="#useage" aria-label="Permalink to &quot;useage&quot;">​</a></h3><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>editor</td><td>编辑器，用于生成电子协议模板，控件左边区域为变量列表和辅助功能，右边为协议模板录入区域。</td></tr><tr><td>viewer</td><td>查看器，传入电子协议模板值与变量值，生成电子协议合同</td></tr></tbody></table><h3 id="libraryid" tabindex="-1">libraryid <a class="header-anchor" href="#libraryid" aria-label="Permalink to &quot;libraryid&quot;">​</a></h3><p>libraryid 为协议模板库id，当 useage = editor 时，需要先在 <code>产品配置中心 - 协议模板库</code> 中定义好协议模板库，获得协议模板库id，设置到控件中。</p><p>libraryid 共有2种设置方式：</p><p>1、通过协议直接配置。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eleprotocol&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;useage&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;editor&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;libraryid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;123456&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eleprotocol&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;useage&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;editor&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;libraryid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;123456&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2、通过 flycode 进行赋值或更改</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;电子协议控件&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123456&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">CtrlValueSetter</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;libraryid&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;电子协议控件&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123456&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">CtrlValueSetter</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;libraryid&#39;</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="value-协议模板值" tabindex="-1">value 协议模板值 <a class="header-anchor" href="#value-协议模板值" aria-label="Permalink to &quot;value 协议模板值&quot;">​</a></h3><p>当 useage = editor ，且已经设置了 libraryid，并且已经录入了协议模板。</p><p>value 协议模板值为录入的协议模板的富文本文件（格式为json对象字符串）。该文件名的后缀固定为 .rtxe ，新增保存时，由前端使用UUID生成文件名。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;source&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cda5bc49-6075-4148-a013-8a9c82f7f5ed.rtxe&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;datetime&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;845623154531&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;source&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cda5bc49-6075-4148-a013-8a9c82f7f5ed.rtxe&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;datetime&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;845623154531&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>富文本文件将保存一个json结构，用于存储编辑器的编辑的实际内容。其结构如下：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;p&gt;{活动名称}{活动档期}&lt;/p&gt;</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">&lt;p&gt; &lt;/p&gt;</span><span style="color:#79B8FF;">\\n\\n</span><span style="color:#9ECBFF;">&lt;table sourceobj=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">{陈列规则-非AI}</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;"> style=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">word-break: break-all;</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&gt;</span><span style="color:#79B8FF;">\\n\\t</span><span style="color:#9ECBFF;">&lt;tbody&gt;</span><span style="color:#79B8FF;">\\n\\t\\t</span><span style="color:#9ECBFF;">&lt;tr class=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">firstRow</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&gt;</span><span style="color:#79B8FF;">\\n\\t\\t\\t</span><span style="color:#9ECBFF;">&lt;th&gt;陈列方式&lt;/th&gt;</span><span style="color:#79B8FF;">\\n\\t\\t\\t</span><span style="color:#9ECBFF;">&lt;th&gt;陈列产品&lt;/th&gt;</span><span style="color:#79B8FF;">\\n\\t\\t\\t</span><span style="color:#9ECBFF;">&lt;th&gt;总数量&lt;/th&gt;</span><span style="color:#79B8FF;">\\n\\t\\t</span><span style="color:#9ECBFF;">&lt;/tr&gt;</span><span style="color:#79B8FF;">\\n\\t\\t</span><span style="color:#9ECBFF;">&lt;tr&gt;</span><span style="color:#79B8FF;">\\n\\t\\t\\t</span><span style="color:#9ECBFF;">&lt;td&gt;{陈列规则-非AI.陈列方式}&lt;/td&gt;</span><span style="color:#79B8FF;">\\n\\t\\t\\t</span><span style="color:#9ECBFF;">&lt;td&gt;{陈列规则-非AI.陈列产品}&lt;/td&gt;</span><span style="color:#79B8FF;">\\n\\t\\t\\t</span><span style="color:#9ECBFF;">&lt;td&gt;{陈列规则-非AI.总数量}&lt;/td&gt;</span><span style="color:#79B8FF;">\\n\\t\\t</span><span style="color:#9ECBFF;">&lt;/tr&gt;</span><span style="color:#79B8FF;">\\n\\t</span><span style="color:#9ECBFF;">&lt;/tbody&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&lt;/table&gt;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;images&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;ref&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;!--IMG#0--&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;src&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;{纸质协议}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;pixel&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;auto*auto&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;alt&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;纸质协议&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;libraryid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1646779702515470336&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;p&gt;{活动名称}{活动档期}&lt;/p&gt;</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">&lt;p&gt; &lt;/p&gt;</span><span style="color:#005CC5;">\\n\\n</span><span style="color:#032F62;">&lt;table sourceobj=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">{陈列规则-非AI}</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;"> style=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">word-break: break-all;</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">&gt;</span><span style="color:#005CC5;">\\n\\t</span><span style="color:#032F62;">&lt;tbody&gt;</span><span style="color:#005CC5;">\\n\\t\\t</span><span style="color:#032F62;">&lt;tr class=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">firstRow</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">&gt;</span><span style="color:#005CC5;">\\n\\t\\t\\t</span><span style="color:#032F62;">&lt;th&gt;陈列方式&lt;/th&gt;</span><span style="color:#005CC5;">\\n\\t\\t\\t</span><span style="color:#032F62;">&lt;th&gt;陈列产品&lt;/th&gt;</span><span style="color:#005CC5;">\\n\\t\\t\\t</span><span style="color:#032F62;">&lt;th&gt;总数量&lt;/th&gt;</span><span style="color:#005CC5;">\\n\\t\\t</span><span style="color:#032F62;">&lt;/tr&gt;</span><span style="color:#005CC5;">\\n\\t\\t</span><span style="color:#032F62;">&lt;tr&gt;</span><span style="color:#005CC5;">\\n\\t\\t\\t</span><span style="color:#032F62;">&lt;td&gt;{陈列规则-非AI.陈列方式}&lt;/td&gt;</span><span style="color:#005CC5;">\\n\\t\\t\\t</span><span style="color:#032F62;">&lt;td&gt;{陈列规则-非AI.陈列产品}&lt;/td&gt;</span><span style="color:#005CC5;">\\n\\t\\t\\t</span><span style="color:#032F62;">&lt;td&gt;{陈列规则-非AI.总数量}&lt;/td&gt;</span><span style="color:#005CC5;">\\n\\t\\t</span><span style="color:#032F62;">&lt;/tr&gt;</span><span style="color:#005CC5;">\\n\\t</span><span style="color:#032F62;">&lt;/tbody&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&lt;/table&gt;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;images&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;ref&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;!--IMG#0--&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;src&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;{纸质协议}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;pixel&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;auto*auto&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;alt&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;纸质协议&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;libraryid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1646779702515470336&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="newvalue" tabindex="-1">newvalue <a class="header-anchor" href="#newvalue" aria-label="Permalink to &quot;newvalue&quot;">​</a></h3><p>某些情况下，对控件赋值 value 之后，需求想随机新生成一个value值，且新值想同步旧值的富文本内容，则可以使用该功能。</p><p>比如<code>复制</code>某个协议模板时，先对控件赋值，使之有了变量列表和协议模板内容，然后再新生成value值。</p><p>如果不生成新value的话，两个模板协议都关联同一个富文本文件，修改其中某一个则另一个也相应被修改，不符合需求。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;电子协议控件&#39;</span><span style="color:#E1E4E8;">).value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  source: </span><span style="color:#9ECBFF;">&#39;cda5bc49-6075-4148-a013-8a9c82f7f5ed.rtxe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  datetime: </span><span style="color:#9ECBFF;">&#39;1681728293165&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;电子协议控件&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;newvalue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">CtrlValueSetter</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;newvalue&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;电子协议控件&#39;</span><span style="color:#24292E;">).value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  source: </span><span style="color:#032F62;">&#39;cda5bc49-6075-4148-a013-8a9c82f7f5ed.rtxe&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  datetime: </span><span style="color:#032F62;">&#39;1681728293165&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;电子协议控件&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;newvalue&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">CtrlValueSetter</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;newvalue&#39;</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="varsource-变量值" tabindex="-1">varsource 变量值 <a class="header-anchor" href="#varsource-变量值" aria-label="Permalink to &quot;varsource 变量值&quot;">​</a></h3><p>变量值是指针对协议模板所引用的协议模板库的具体变量值的json字符串集合，使用方式是以 component 或者 flycode 进行取值或者赋值。</p><p>当 useage = viewer 时，同时对控件赋予 value(协议模板值) 和 varsource(变量值)，即可展示一个具体的电子协议合同。</p><p>不需要对单独对控件的 libraryid 进行赋值 ，因为 value(协议模板值) 里已包含该值。</p><p>demo：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  source: </span><span style="color:#9ECBFF;">&#39;cda5bc49-6075-4148-a013-8a9c82f7f5ed.rtxe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  datetime: </span><span style="color:#9ECBFF;">&#39;1681728293165&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">varsource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  basic: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;活动名称&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    time: </span><span style="color:#9ECBFF;">&#39;活动时间&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  normal_rule: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mode: </span><span style="color:#9ECBFF;">&#39;货架&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      product: </span><span style="color:#9ECBFF;">&#39;娃哈哈&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      num: </span><span style="color:#9ECBFF;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;电子协议控件&#39;</span><span style="color:#E1E4E8;">).value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;电子协议控件&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setValue</span><span style="color:#E1E4E8;">(varsource, </span><span style="color:#B392F0;">CtrlValueSetter</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;varsource&#39;</span><span style="color:#E1E4E8;">))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  source: </span><span style="color:#032F62;">&#39;cda5bc49-6075-4148-a013-8a9c82f7f5ed.rtxe&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  datetime: </span><span style="color:#032F62;">&#39;1681728293165&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">varsource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  basic: {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;活动名称&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    time: </span><span style="color:#032F62;">&#39;活动时间&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  normal_rule: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      mode: </span><span style="color:#032F62;">&#39;货架&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      product: </span><span style="color:#032F62;">&#39;娃哈哈&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      num: </span><span style="color:#032F62;">&#39;2&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;电子协议控件&#39;</span><span style="color:#24292E;">).value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;电子协议控件&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setValue</span><span style="color:#24292E;">(varsource, </span><span style="color:#6F42C1;">CtrlValueSetter</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;varsource&#39;</span><span style="color:#24292E;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="h5端电子协议控件" tabindex="-1">H5端电子协议控件 <a class="header-anchor" href="#h5端电子协议控件" aria-label="Permalink to &quot;H5端电子协议控件&quot;">​</a></h2><p>H5端电子协议控件主要是对以上生成的协议模板的应用，通过传入 value(协议模板值) 和 varsource(变量值)，动态渲染出电子协议合同。</p><p>H5 表单可应用于 APP，小程序，H5网页中。</p><p>控件详细使用说明：<a href="http://122.9.125.247:7000/h5-docs/#/components/eleprotocol" target="_blank" rel="noreferrer">http://122.9.125.247:7000/h5-docs/#/components/eleprotocol</a></p>`,48),e=[o];function t(r,c,E,y,i,u){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{d as __pageData,b as default};
