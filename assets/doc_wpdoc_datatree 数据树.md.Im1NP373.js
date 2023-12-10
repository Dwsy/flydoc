import{_ as t,o as s,c as a,R as i}from"./chunks/framework.S1SDgkSw.js";const c=JSON.parse('{"title":"datatree 数据树","description":"","frontmatter":{"title":"datatree 数据树","date":"2020-05-20T14:23:37.000Z"},"headers":[],"relativePath":"doc/wpdoc/datatree 数据树.md","filePath":"doc/wpdoc/datatree 数据树.md"}'),n={name:"doc/wpdoc/datatree 数据树.md"},d=i(`<h1 id="数据树-datatree" tabindex="-1">数据树 datatree <a class="header-anchor" href="#数据树-datatree" aria-label="Permalink to &quot;数据树 datatree&quot;">​</a></h1><p>专门用于营销组织，销售区域等树形结构的数据的业务控件，其内部自动绑定了平台提供的这些数据的查询接口，可以大大简化表单的配置。</p><h1 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h1><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;datatree&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;组织架构&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;lazyload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;intermediateselectmode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;disable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;searchable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scene&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;navigation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;datasource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;organization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;autofillvalue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;hiddenclearbtn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onvaluechange&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="lazyload-懒加载" tabindex="-1">lazyload 懒加载 <a class="header-anchor" href="#lazyload-懒加载" aria-label="Permalink to &quot;lazyload 懒加载&quot;">​</a></h2><p>Bool值，用于指定子节点是否为懒加载模式，默认值为0，即不支持懒加载。</p><p>懒加载模式下，如果选中的节点为当前树的叶子节点，并且尚未标记为末级节点时，将会自动请求该节点的的子节点，如果请求数据为空，则将该节点标记为末级节点，不再支持展开；如果有数据，则将数据添加到该节点下面。</p><blockquote><p>目前的实际实现上，组织架构和营销区域接口并没有支持懒加载，数据都是一次性获取，只是出于渲染优化的考量，web端会根据该属性推迟DOM树的渲染，手机端暂时无需解析该属性，因为通常数据不会超过1000条，量并不大。</p><p>不过行政区域的接口支持懒加载，各端在实现时可以在这个场景下实现真正的懒加载。不过由于手机端的行政区域通常是本地数据，因此可以不必实现懒加载。</p></blockquote><h2 id="searchable-可搜索" tabindex="-1">searchable 可搜索 <a class="header-anchor" href="#searchable-可搜索" aria-label="Permalink to &quot;searchable 可搜索&quot;">​</a></h2><p>bool值，用于指定选项是否支持搜索。默认值为1，表示可以搜索。</p><p>该属性会决定选项上方的搜索框是否显示。</p><p>目前搜索会自动根据name字段进行搜索，搜索规则是 <code>case insensitive</code> + <code>contain</code>。</p><h2 id="scene-使用场景" tabindex="-1">scene 使用场景 <a class="header-anchor" href="#scene-使用场景" aria-label="Permalink to &quot;scene 使用场景&quot;">​</a></h2><table><thead><tr><th>取值</th><th>中文名称</th><th>说明</th></tr></thead><tbody><tr><td>navigation</td><td>导航树</td><td>用于导航场景，直接显示节点信息，单选</td></tr><tr><td>filter</td><td>单项筛选</td><td>用于筛选条件，放在搜索条上，弹出选择，单选</td></tr><tr><td>filtermulti</td><td>多项筛选</td><td>同上，多选</td></tr><tr><td>picker</td><td>单项选择</td><td>用于选择值，放置在表单中采集或显示数据，弹出选择，单选</td></tr><tr><td>pickermulti</td><td>多项选择</td><td>同上，多选</td></tr></tbody></table><p>不同场景下的UI交互有所不同，请参看下方的UI交互说明。</p><p>不同的场景，由于交互不同，其值改变事件的触发方式会有所不同，具体参看UI示例。</p><h2 id="intermediateselectmode-节点选则模式" tabindex="-1">intermediateselectmode 节点选则模式 <a class="header-anchor" href="#intermediateselectmode-节点选则模式" aria-label="Permalink to &quot;intermediateselectmode 节点选则模式&quot;">​</a></h2><p>用于指定非叶子节点的选择模式，默认为 <code>individual</code> ，即不能选择非叶子节点</p><table><thead><tr><th>Value</th><th>Meaning</th></tr></thead><tbody><tr><td>disable</td><td>不能选择中间节点</td></tr><tr><td>shortcut</td><td>中间节点不参与取值，但可以作为叶子节点选择的快捷方式影响叶子节点选择</td></tr><tr><td>individual</td><td>中间节点独立取值，此时选择某个中间节点不会影响其子节点的选择状态</td></tr><tr><td>gather</td><td>中间节点的选择会影响子节点选择，同时与子节点一起参与取值</td></tr><tr><td>related</td><td>中间节点的选择会影响子节点选择，取值时只取分支中的最高的节点值</td></tr></tbody></table><p>从实现角度看</p><table><thead><tr><th>功能点</th><th>disable</th><th>shortcut</th><th>individual</th><th>gather</th><th>related</th></tr></thead><tbody><tr><td>中间节点是否能选择</td><td></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>中间节点是否参与取值</td><td></td><td></td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td>父节点选中时子节点是否参与取值</td><td></td><td>✅</td><td>✅</td><td>✅</td><td></td></tr><tr><td>单选时是否有效</td><td>✅</td><td></td><td>✅</td><td></td><td></td></tr></tbody></table><h2 id="datasource-数据来源" tabindex="-1">datasource 数据来源 <a class="header-anchor" href="#datasource-数据来源" aria-label="Permalink to &quot;datasource 数据来源&quot;">​</a></h2><p>内置的数据来源，决定了数据树所显示的数据。数据加载在</p><table><thead><tr><th>值</th><th>中文名</th></tr></thead><tbody><tr><td>organization</td><td>营销组织，默认值</td></tr><tr><td>salesarea</td><td>销售区域</td></tr><tr><td>administrativeregion</td><td>行政区域</td></tr><tr><td>custom</td><td>自定义数据，将会使用一个事件来绑定数据(备注：web端专用)</td></tr></tbody></table><h2 id="autofillvalue-自动填充默认值" tabindex="-1">autofillvalue 自动填充默认值 <a class="header-anchor" href="#autofillvalue-自动填充默认值" aria-label="Permalink to &quot;autofillvalue 自动填充默认值&quot;">​</a></h2><p>用于标记是否需要自动天聪默认值，默认值为0，表示不需要填充，当值为1时，填充规则如下</p><ul><li>自定义数据默认选中第一个数据</li><li>营销组织根据当前登录人的对应信息进行填充 （orgCode）</li><li>销售区域暂时不支持自动填充</li><li>行政区域根据定位信息进行填充</li></ul><p>以上规则如果填充失败，则终止自动填充，由用户自行选择</p><h2 id="hiddenclearbtn" tabindex="-1">hiddenclearbtn <a class="header-anchor" href="#hiddenclearbtn" aria-label="Permalink to &quot;hiddenclearbtn&quot;">​</a></h2><p>禁止清除，控制是否能清除已选择的数据，只在单选时起效</p><h1 id="内置配置信息" tabindex="-1">内置配置信息 <a class="header-anchor" href="#内置配置信息" aria-label="Permalink to &quot;内置配置信息&quot;">​</a></h1><p>使用内置的配置，可以方便快速的实现开箱即用的特性。销售区域列表所使用到的固定配置信息如下：</p><h2 id="营销组织" tabindex="-1">营销组织 <a class="header-anchor" href="#营销组织" aria-label="Permalink to &quot;营销组织&quot;">​</a></h2><p><strong>逻辑名称</strong>：组织查询(共用)</p><p><strong>逻辑code</strong>：110000000000000000</p><p><strong>入参</strong>：</p><p>pl_orgstruct</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>status</td><td>状态，用于筛选是否显示停用的区域。</td></tr><tr><td>orgname</td><td>组织名称，通常用于按名字搜索组织</td></tr><tr><td>parentorgstructid</td><td>上级组织id，用于分级加载，或者限定范围</td></tr></tbody></table><blockquote><p>目前的实际使用中是一次性查询所有数据的，所以不需要入参</p></blockquote><p><strong>出参</strong>：</p><p>pl_orgstruct</p><table><thead><tr><th>参数</th><th>示例</th><th>说明</th><th>是否必须</th></tr></thead><tbody><tr><td>orgname</td><td>广东省分公司</td><td>组织名</td><td>✅</td></tr><tr><td>orgstructid</td><td>1102378149624287232</td><td>组织id</td><td>✅</td></tr><tr><td>parentorgstructid</td><td>1</td><td>父节点id</td><td>✅</td></tr><tr><td>seq</td><td>1</td><td>节点排序</td><td>✅</td></tr><tr><td>orgtypeid</td><td>2</td><td>组织类型</td><td>✅</td></tr><tr><td>fullname</td><td>快销总公司/广东省分公司</td><td>完整路径名</td><td></td></tr><tr><td>orgnamejoin</td><td>广东省分公司(快销总公司)</td><td>完整合并名</td><td></td></tr><tr><td>codepath</td><td>1.1102378149624287232.</td><td>id完整路径</td><td></td></tr><tr><td>level</td><td>2</td><td>当前节点所在层</td><td></td></tr><tr><td>status</td><td>1</td><td>启用状态</td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="销售区域" tabindex="-1">销售区域 <a class="header-anchor" href="#销售区域" aria-label="Permalink to &quot;销售区域&quot;">​</a></h2><p><strong>逻辑名称</strong>：营销区域--区域树</p><p><strong>逻辑code</strong>：1107949922751221847</p><p><strong>入参</strong>：</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>status</td><td>状态，用于筛选是否显示停用的区域。1</td></tr></tbody></table><blockquote><p>目前的实际使用中是一次性查询所有数据的，所以不需要入参</p></blockquote><p><strong>出参</strong>：</p><table><thead><tr><th>参数</th><th>示例</th><th>说明</th><th>是否必须</th></tr></thead><tbody><tr><td>saleareaname</td><td>广东省大区</td><td>区域名</td><td>✅</td></tr><tr><td>saleareaid</td><td>1109999930409357312</td><td>区域id</td><td>✅</td></tr><tr><td>parentsaleareaid</td><td>1</td><td>父级区域id</td><td>✅</td></tr><tr><td>seq</td><td>1</td><td>节点排序</td><td>✅</td></tr><tr><td>saleareacode</td><td>QU00001</td><td>区域代码</td><td>✅</td></tr><tr><td>codepath</td><td>1.1109999930409357312.</td><td>id完整路径</td><td></td></tr><tr><td>fullname</td><td>销售中心/广东省大区</td><td>完整路径名</td><td></td></tr><tr><td>status</td><td>1</td><td>启用状态</td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="行政区域" tabindex="-1">行政区域 <a class="header-anchor" href="#行政区域" aria-label="Permalink to &quot;行政区域&quot;">​</a></h2><blockquote><p><strong>行政区域在手机端的数据获取，应当实现为本地优先</strong></p></blockquote><p><strong>逻辑名称</strong>：营销区域--区域树</p><p><strong>逻辑code</strong>：111000000001100001</p><p><strong>入参</strong>：</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>parentregionid</td><td>指定搜索该id的下级节点</td></tr><tr><td>regionname</td><td>指定搜索包含该名称的节点</td></tr><tr><td>level</td><td>指定搜索该层级的节点</td></tr></tbody></table><blockquote><p>目前的实际使用中是一次性查询所有数据的，所以不需要入参</p></blockquote><p><strong>出参</strong>：</p><table><thead><tr><th>参数</th><th>示例</th><th>说明</th><th>是否必须</th></tr></thead><tbody><tr><td>regionname</td><td>广东省</td><td>区域名</td><td>✅</td></tr><tr><td>regionid</td><td>440000</td><td>区域id</td><td>✅</td></tr><tr><td>parentregionid</td><td>100000</td><td>父级区域id</td><td>✅</td></tr><tr><td>seq</td><td>1</td><td>节点排序</td><td>✅</td></tr><tr><td>regioncode</td><td>1951</td><td>区域代码</td><td>✅</td></tr><tr><td>idpath</td><td>100000.440000</td><td>id完整路径</td><td></td></tr><tr><td>namepath</td><td>中国.广东省</td><td>完整路径名</td><td></td></tr><tr><td>regiontype</td><td>1</td><td>区域类型</td><td></td></tr><tr><td>regiontypename</td><td>省</td><td>区域类型名称</td><td></td></tr><tr><td>level</td><td>1</td><td>层级</td><td></td></tr><tr><td>status</td><td>1</td><td>启用状态</td><td></td></tr></tbody></table><h1 id="取值" tabindex="-1">取值 <a class="header-anchor" href="#取值" aria-label="Permalink to &quot;取值&quot;">​</a></h1><p>数据树控件在取值时会将数据字段转换为统一的命名后的字段，具体对应关系如下：</p><table><thead><tr><th>字段名</th><th>字段中文名</th><th>组织架构字段</th><th>营销区域字段</th><th>行政区域字段</th></tr></thead><tbody><tr><td>text</td><td>名称</td><td>orgname</td><td>saleareaname</td><td>regionname</td></tr><tr><td>key</td><td>key</td><td>orgstructid</td><td>saleareaid</td><td>regionid</td></tr><tr><td>id</td><td>id</td><td>orgstructid</td><td>saleareaid</td><td>regionid</td></tr><tr><td>parentid</td><td>父id</td><td>parentorgstructid</td><td>parentsaleareaid</td><td>parentregionid</td></tr><tr><td>idpath</td><td>id路径</td><td>codepath</td><td>codepath</td><td>idpath</td></tr><tr><td>textpath</td><td>名称路径</td><td>fullname</td><td>fullname</td><td>namepath</td></tr><tr><td>code</td><td>代码</td><td>无</td><td>saleareacode</td><td>regioncode</td></tr><tr><td>type</td><td>类型</td><td>orgtypeid</td><td>无</td><td>regiontype</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="默认取值" tabindex="-1">默认取值 <a class="header-anchor" href="#默认取值" aria-label="Permalink to &quot;默认取值&quot;">​</a></h2><p>即当取值的 component 为空或者为 <code>value</code> 时，会根据当前的 datasource 属性组装成统一字段名的json字符串，具体如下：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 营销区域默认取值，单选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广东省大区&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1109999930409357312&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1109999930409357312&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;parentid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;idpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.1109999930409357312&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;textpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;销售中心/广东省大区&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;QU00001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组织架构默认取值，多选</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;快销总公司&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;parentid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;idpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;textpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;快销总公司&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广东省分公司&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1102378149624287232&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;parentid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;idpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.1102378149624287232&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;textpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;快销总公司/广东省大区&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="component取值" tabindex="-1">Component取值 <a class="header-anchor" href="#component取值" aria-label="Permalink to &quot;Component取值&quot;">​</a></h2><p>和其他的选择类控件一样，数据树可以通过指定component来取指定的单一数据，支持的component参看上方的取值对应表中的<strong>字段名</strong></p><h1 id="ui说明" tabindex="-1">UI说明 <a class="header-anchor" href="#ui说明" aria-label="Permalink to &quot;UI说明&quot;">​</a></h1><h2 id="导航" tabindex="-1">导航 <a class="header-anchor" href="#导航" aria-label="Permalink to &quot;导航&quot;">​</a></h2><h3 id="手机端" tabindex="-1">手机端 <a class="header-anchor" href="#手机端" aria-label="Permalink to &quot;手机端&quot;">​</a></h3><p>手机端的导航树是作为一个类似列表控件的使用方式来使用的，点击圆形进入按钮将触发值改变事件，默认会将点击行的完整值传递出去。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/navigation_mobile.png" alt=""></p><h3 id="web端" tabindex="-1">web端 <a class="header-anchor" href="#web端" aria-label="Permalink to &quot;web端&quot;">​</a></h3><p>web端的导航树是一个常见的场景，基本UI操作和现有的picktree一致，只是增加了默认的搜索框方便搜索。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/navigation_web.png" alt=""></p><p>两个端的点击响应区域不太一样，示意如下：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/navigation_toucharea.png" alt=""></p><h2 id="筛选" tabindex="-1">筛选 <a class="header-anchor" href="#筛选" aria-label="Permalink to &quot;筛选&quot;">​</a></h2><p>筛选框应用在filter中，用做筛选条件。</p><h3 id="手机端-1" tabindex="-1">手机端 <a class="header-anchor" href="#手机端-1" aria-label="Permalink to &quot;手机端&quot;">​</a></h3><p>由两部分组成：选择框和勾选树。选择框用来暂时选中项，以及触发显示勾选树。</p><p>选择框的内容在控件内部居中显示，未选中状态显示标题，不显示placeholder。选中后样式发生变化，参看下方示意图。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Filter_Mobile.png" alt=""></p><p>勾选树在点击选择框时全屏弹出，点击<strong>完成</strong>按钮关闭弹窗并给选择框赋值，同时触发值改变事件。点击<strong>重置</strong>按钮时，清空当前的选中选项，当前没有选项被选中时，重置按钮不可用。</p><p>选则树的点击区域参看导航树的示意图。</p><p>![](images/Filter_Mobile Selector.png)</p><h3 id="web端-1" tabindex="-1">web端 <a class="header-anchor" href="#web端-1" aria-label="Permalink to &quot;web端&quot;">​</a></h3><p>和手机端一样，也是由选择框和勾选树两部分组成，操作功能基本一致，只是UI有所不同，具体参看下方示意图。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Filter_Web.png" alt=""></p><p>![](images/Filter_Web Selector.png)</p><h2 id="选择" tabindex="-1">选择 <a class="header-anchor" href="#选择" aria-label="Permalink to &quot;选择&quot;">​</a></h2><p>选择框用在取值的场景，其操作基本和filter模式下一致，不过由于其使用特点，在多选的选择框时，选项不会被折叠，而是要全部显示出来。同时还会增加只读状态。</p><h3 id="手机端-2" tabindex="-1">手机端 <a class="header-anchor" href="#手机端-2" aria-label="Permalink to &quot;手机端&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Selector_Mobile.png" alt=""></p><h3 id="web端-2" tabindex="-1">web端 <a class="header-anchor" href="#web端-2" aria-label="Permalink to &quot;web端&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Selector_Web.png" alt=""></p>`,96),e=[d];function l(h,p,r,o,k,E){return s(),a("div",null,e)}const b=t(n,[["render",l]]);export{c as __pageData,b as default};
