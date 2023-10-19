import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d084db19.js";const d=JSON.parse('{"title":"Export导出","description":"","frontmatter":{"title":"Export导出","date":"2020-09-10T13:41:05.000Z"},"headers":[],"relativePath":"doc/wpdoc/Export导出.md","filePath":"doc/wpdoc/Export导出.md"}'),o={name:"doc/wpdoc/Export导出.md"},p=l(`<h1 id="export-导出" tabindex="-1">Export 导出 <a class="header-anchor" href="#export-导出" aria-label="Permalink to &quot;Export 导出&quot;">​</a></h1><p>将后台数据批量导出到excel文件中进行下载。</p><blockquote><p>不支持图片文件直接导出</p></blockquote><h2 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dataexport&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;导出行为&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;condition&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;servicetype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;background/micro&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;logiccode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;934961275815989347&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;microclass&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;myImportMicroService&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;filename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;组织人员-人员管理&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;sheetname&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;组织人员-人员管理&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;colselectable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;getter&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dataexport&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;导出行为&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;condition&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;servicetype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;background/micro&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;logiccode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;934961275815989347&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;microclass&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;myImportMicroService&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;filename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;组织人员-人员管理&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;sheetname&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;组织人员-人员管理&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;colselectable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;getter&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="servicetype" tabindex="-1">servicetype <a class="header-anchor" href="#servicetype" aria-label="Permalink to &quot;servicetype&quot;">​</a></h3><p>用于指定当前导出行为的种类，不同种类的导出方式，需要配置的属性有所不同。</p><p>目前导入分为以下两类：</p><ul><li><p>background 后端导出</p><p>默认值，使用flycode将后台数据导出到excel文件中。</p><p>该种方式需要配置 <code>logiccode</code> 属性指定调用的flycode接口</p></li><li><p>micro 微服务导出</p><p>使用微服务接口将后台数据导出到excel文件中。</p><p>这种方式需要配置 <code>microclass</code> 属性，指定调用的微服务的类名。</p></li></ul><h3 id="logiccode" tabindex="-1">logiccode <a class="header-anchor" href="#logiccode" aria-label="Permalink to &quot;logiccode&quot;">​</a></h3><p>导入使用到的flycode接口的code</p><h3 id="microclass" tabindex="-1">microclass <a class="header-anchor" href="#microclass" aria-label="Permalink to &quot;microclass&quot;">​</a></h3><p>导入使用到的微服务接口的类名</p><h3 id="filename" tabindex="-1">filename <a class="header-anchor" href="#filename" aria-label="Permalink to &quot;filename&quot;">​</a></h3><p>导出文件名</p><p>IDE在输入完文件名后，如果sheetname为空，则自动使用文件名填充sheetname</p><h3 id="sheetname" tabindex="-1">sheetname <a class="header-anchor" href="#sheetname" aria-label="Permalink to &quot;sheetname&quot;">​</a></h3><p>导出表名</p><h3 id="colselectable" tabindex="-1">colselectable <a class="header-anchor" href="#colselectable" aria-label="Permalink to &quot;colselectable&quot;">​</a></h3><p>支持自定义导出列。默认值为0，表示不可以自定义。</p><p>如果值为1，表示支持自定义，此时导出时会先让用户选择需要导出的列，默认选中全部列。</p><blockquote><p>如果是微服务导出，且要支持自定义导出列的话，需要提供一个空的flycode接口，并且配置到<code>logiccode</code> 属性中 ，用于IDE获取出参配置信息</p></blockquote><h3 id="getter" tabindex="-1">getter <a class="header-anchor" href="#getter" aria-label="Permalink to &quot;getter&quot;">​</a></h3><p>当导出接口需要额外提供业务数据（如搜索条件）作为入参时，需要配置该属性。</p><p>此处的getter和datarequest的getter用处一致，用于获取表单中的数据，用于组装接口入参。IDE根据<code>logiccode</code> 的入参列表提供配置选项。</p><blockquote><p>如果使用的是微服务导入方式，又需要提供额外业务参数时，需要提供一个空的flycode接口，并且配置到<code>logiccode</code> 属性中 ，用于IDE获取入参配置信息</p></blockquote><h2 id="导出接口说明" tabindex="-1">导出接口说明 <a class="header-anchor" href="#导出接口说明" aria-label="Permalink to &quot;导出接口说明&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 使用flycode</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/biz/imexport/expExcel?mocode=893405830819483679&amp;lgcode=936136208466186330&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用微服务</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> api </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;/biz/imexport/expExcel?microclass=myExportMicroService&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 使用flycode</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/biz/imexport/expExcel?mocode=893405830819483679&amp;lgcode=936136208466186330&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用微服务</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> api </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;/biz/imexport/expExcel?microclass=myExportMicroService&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="入参" tabindex="-1">入参 <a class="header-anchor" href="#入参" aria-label="Permalink to &quot;入参&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;expfile&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;filename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;客户管理-终端管理.csv&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;filetype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;sheetname&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;客户管理-终端管理&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;__fields&quot;</span><span style="color:#E1E4E8;">: [ </span><span style="color:#9ECBFF;">&quot;code&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;address&quot;</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;kx_kq_store&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;productstatus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;expfile&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;filename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;客户管理-终端管理.csv&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;filetype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;sheetname&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;客户管理-终端管理&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;__fields&quot;</span><span style="color:#24292E;">: [ </span><span style="color:#032F62;">&quot;code&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;address&quot;</span><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;kx_kq_store&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;productstatus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="出参" tabindex="-1">出参 <a class="header-anchor" href="#出参" aria-label="Permalink to &quot;出参&quot;">​</a></h3><p>将会返回导出任务ID</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;resp_data&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;24e35ec5485e46e5bea33a6b6f050fd4&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;resp_data&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;24e35ec5485e46e5bea33a6b6f050fd4&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="进度查询" tabindex="-1">进度查询 <a class="header-anchor" href="#进度查询" aria-label="Permalink to &quot;进度查询&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/queue/impexp/expStatus?id=24e35ec5485e46e5bea33a6b6f050fd4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/queue/impexp/expStatus?id=24e35ec5485e46e5bea33a6b6f050fd4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-label="Permalink to &quot;返回示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;resp_data&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;exportstate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;running&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;finishdateformat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;expsuctotalitem&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;finishdate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;filesize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;initdateformat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2020-07-24 11:25:10&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;fatalerrormsg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;finishRate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;filename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;产品管理-产品.xlsx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;dynamicid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;b5414734c8104be883fa7d38b89da470&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;expFinishItem&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;680&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;exportfileurl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;exptotalitem&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;679&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;initdate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1595561110397&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;exportstate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;complete&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;finishdateformat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2020-07-24 11:11:09&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;fatalerrormsg&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;filename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;产品管理-产品.csv&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;dynamicid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;43c13807a7c447e2962b2b92c243b401&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;exportfileurl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79d/att/20200724/8009999/79dcce70-dcc1-4f8b-9808-e57e3273c557.csv&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;exptotalitem&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;679&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;expsuctotalitem&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;679&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;finishdate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1595560269540&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;initdate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1595560257288&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;initdateformat&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2020-07-24 11:10:57&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;filesize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;98KB&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;resp_data&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;exportstate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;running&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;finishdateformat&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;expsuctotalitem&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;finishdate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;filesize&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;initdateformat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2020-07-24 11:25:10&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;fatalerrormsg&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;finishRate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;filename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;产品管理-产品.xlsx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;dynamicid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;b5414734c8104be883fa7d38b89da470&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;expFinishItem&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;680&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;exportfileurl&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;exptotalitem&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;679&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;initdate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1595561110397&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;exportstate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;complete&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;finishdateformat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2020-07-24 11:11:09&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;fatalerrormsg&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;filename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;产品管理-产品.csv&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;dynamicid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;43c13807a7c447e2962b2b92c243b401&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;exportfileurl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79d/att/20200724/8009999/79dcce70-dcc1-4f8b-9808-e57e3273c557.csv&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;exptotalitem&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;679&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;expsuctotalitem&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;679&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;finishdate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1595560269540&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;initdate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1595560257288&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;initdateformat&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2020-07-24 11:10:57&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;filesize&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;98KB&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="ui示例" tabindex="-1">UI示例 <a class="header-anchor" href="#ui示例" aria-label="Permalink to &quot;UI示例&quot;">​</a></h2><h3 id="文件导出流程" tabindex="-1">文件导出流程 <a class="header-anchor" href="#文件导出流程" aria-label="Permalink to &quot;文件导出流程&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/export-1.png" alt=""></p><h3 id="导出列表" tabindex="-1">导出列表 <a class="header-anchor" href="#导出列表" aria-label="Permalink to &quot;导出列表&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/exportlist.png" alt=""></p>`,42),e=[p];function t(c,r,E,i,u,y){return a(),n("div",null,e)}const b=s(o,[["render",t]]);export{d as __pageData,b as default};
