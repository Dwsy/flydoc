import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aac09c5f.js";const d=JSON.parse('{"title":"db数据库操作","description":"","frontmatter":{"title":"db数据库操作","date":"2020-07-03T17:55:23.000Z"},"headers":[],"relativePath":"doc/wpdoc/db数据库操作.md","filePath":"doc/wpdoc/db数据库操作.md"}'),p={name:"doc/wpdoc/db数据库操作.md"},o=l(`<h1 id="_3-1-3-数据库操作" tabindex="-1">3.1.3. 数据库操作 <a class="header-anchor" href="#_3-1-3-数据库操作" aria-label="Permalink to &quot;3.1.3. 数据库操作&quot;">​</a></h1><h1 id="_3-1-3-1-增删改" tabindex="-1">3.1.3.1. 增删改 <a class="header-anchor" href="#_3-1-3-1-增删改" aria-label="Permalink to &quot;3.1.3.1. 增删改&quot;">​</a></h1><ul><li>DB api提供对业务对象的增删改，并支持批量处理功能，允许操作对象数组。</li><li>提供单对象的save，自动根据对象是否存在，做插入/更新逻辑。</li></ul><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 添加业务对象到业务数据库，如果业务对象类型为数组，则会批量操作</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(业务对象</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">数组);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更新业务对象到业务数据库，如果业务对象类型为数组，则会批量操作</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(业务对象</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">数组);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据传入的字段作为条件更新业务对象，如果业务对象类型为数组，则会批量操作，使用“:”分割加入时间格式表达式来格式化时间条件字段</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(业务对象</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">数组,</span><span style="color:#9ECBFF;">&quot;业务对象.字段A&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;业务对象.字段B:yyyy-MM-dd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据业务对象的ID，从业务数据库中移除数据(逻辑删除)，如果业务对象类型为数组，则会批量操作</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(业务对象</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">数组);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据ID唯一性规则自动识别业务对象的新增和更新到业务数据库，不做批量处理(由于save的内部机制是需要查询后判断插入还是更新，若做批量可能影响性能，将批量交由外部处理)</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">save</span><span style="color:#E1E4E8;">(业务对象);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据传入的业务对象字段识别对业务对象进行插入还是更新操作，使用“:”分割加入时间格式表达式来格式化时间条件字段</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">save</span><span style="color:#E1E4E8;">(业务对象,</span><span style="color:#9ECBFF;">&quot;业务对象.字段A&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;业务对象.字段B:yyyy-MM-dd&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据删除条件对象去进行物理删除，然后插入业务对象/数组（该操作是物理删除，建议只使用在关联表上）</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(业务对象</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">数组,删除条件对象);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据传入的业务对象去寻找依赖它的对象，返回值 {&quot;result&quot;:布尔值,&quot;refBy&quot;:&quot;对象英文名&quot;,&quot;refName&quot;:&quot;对象中文名&quot;}</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findObjectRef</span><span style="color:#E1E4E8;">(业务对象);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 添加业务对象到业务数据库，如果业务对象类型为数组，则会批量操作</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(业务对象</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">数组);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 更新业务对象到业务数据库，如果业务对象类型为数组，则会批量操作</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(业务对象</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">数组);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据传入的字段作为条件更新业务对象，如果业务对象类型为数组，则会批量操作，使用“:”分割加入时间格式表达式来格式化时间条件字段</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(业务对象</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">数组,</span><span style="color:#032F62;">&quot;业务对象.字段A&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;业务对象.字段B:yyyy-MM-dd&quot;</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据业务对象的ID，从业务数据库中移除数据(逻辑删除)，如果业务对象类型为数组，则会批量操作</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(业务对象</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">数组);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据ID唯一性规则自动识别业务对象的新增和更新到业务数据库，不做批量处理(由于save的内部机制是需要查询后判断插入还是更新，若做批量可能影响性能，将批量交由外部处理)</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">save</span><span style="color:#24292E;">(业务对象);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据传入的业务对象字段识别对业务对象进行插入还是更新操作，使用“:”分割加入时间格式表达式来格式化时间条件字段</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">save</span><span style="color:#24292E;">(业务对象,</span><span style="color:#032F62;">&quot;业务对象.字段A&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;业务对象.字段B:yyyy-MM-dd&quot;</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据删除条件对象去进行物理删除，然后插入业务对象/数组（该操作是物理删除，建议只使用在关联表上）</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(业务对象</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">数组,删除条件对象);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 根据传入的业务对象去寻找依赖它的对象，返回值 {&quot;result&quot;:布尔值,&quot;refBy&quot;:&quot;对象英文名&quot;,&quot;refName&quot;:&quot;对象中文名&quot;}</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">findObjectRef</span><span style="color:#24292E;">(业务对象);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><hr><p><strong>例1</strong>: 新建名为&quot;测试门店1&quot;的门店，并插入数据</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 实例化一个门店业务对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> store </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;kx_store&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">store.storeid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">genId</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">store.storename </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;测试门店1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入门店</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(store);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 实例化一个门店业务对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> store </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;kx_store&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">store.storeid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">genId</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">store.storename </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;测试门店1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 插入门店</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(store);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>例2</strong>: 查出门店对象数组，遍历修改状态，后更新。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 查出门店对象数组</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> storeList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> storeid, storename, status FROM kx_store;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 遍历修改状态</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> storeList.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    storeList[i].status </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 批量更新数组</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(storeList);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 查出门店对象数组</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> storeList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> storeid, storename, status FROM kx_store;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 遍历修改状态</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> storeList.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    storeList[i].status </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 批量更新数组</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(storeList);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>例3</strong>: 寻找关联产品的对象。（订单明细依赖产品）</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建产品对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> product </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;kx_kq_product&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">product.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 寻找被依赖信息（返回找到的第一个）</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">findObjectRef</span><span style="color:#E1E4E8;">(product);</span><span style="color:#6A737D;">//{result=true, refBy=kx_order_detail,refName=订单详情表}</span></span>
<span class="line"><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result.result);</span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result.refBy);</span><span style="color:#6A737D;">//kx_order_detail</span></span>
<span class="line"><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result.refName);</span><span style="color:#6A737D;">//订单详情表</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建产品对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> product </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;kx_kq_product&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">product.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 寻找被依赖信息（返回找到的第一个）</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">findObjectRef</span><span style="color:#24292E;">(product);</span><span style="color:#6A737D;">//{result=true, refBy=kx_order_detail,refName=订单详情表}</span></span>
<span class="line"><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result.result);</span><span style="color:#6A737D;">//true</span></span>
<span class="line"><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result.refBy);</span><span style="color:#6A737D;">//kx_order_detail</span></span>
<span class="line"><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result.refName);</span><span style="color:#6A737D;">//订单详情表</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr><h1 id="_3-1-3-2-事务控制" tabindex="-1">3.1.3.2. 事务控制 <a class="header-anchor" href="#_3-1-3-2-事务控制" aria-label="Permalink to &quot;3.1.3.2. 事务控制&quot;">​</a></h1><p>flycode操作默认没有事务事务，需要开发人员手动控制事务；</p><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">TX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">begin</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 开启事务</span></span>
<span class="line"><span style="color:#79B8FF;">TX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 提交事务</span></span>
<span class="line"><span style="color:#79B8FF;">TX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 回滚事务（可以不写，出现异常平台会自动回滚事务）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">TX</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 开启事务</span></span>
<span class="line"><span style="color:#005CC5;">TX</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 提交事务</span></span>
<span class="line"><span style="color:#005CC5;">TX</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">rollback</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 回滚事务（可以不写，出现异常平台会自动回滚事务）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> temp </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> select id,name,status </span></span>
<span class="line"><span style="color:#E1E4E8;">from kx_store </span></span>
<span class="line"><span style="color:#E1E4E8;">where id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">temp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;华润万家&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">TX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">begin</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 开启事务</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//新增一条记录</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">insert</span><span style="color:#E1E4E8;">(temp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#6A737D;">// 改名</span></span>
<span class="line"><span style="color:#E1E4E8;">temp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;沃永润&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">update</span><span style="color:#E1E4E8;">(temp[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">TX</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">commit</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 提交事务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> temp </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> select id,name,status </span></span>
<span class="line"><span style="color:#24292E;">from kx_store </span></span>
<span class="line"><span style="color:#24292E;">where id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">temp[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;华润万家&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">TX</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 开启事务</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//新增一条记录</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">insert</span><span style="color:#24292E;">(temp[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#6A737D;">// 改名</span></span>
<span class="line"><span style="color:#24292E;">temp[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;沃永润&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">update</span><span style="color:#24292E;">(temp[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">TX</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">commit</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 提交事务</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr>`,21),e=[o];function r(c,t,y,E,i,u){return n(),a("div",null,e)}const F=s(p,[["render",r]]);export{d as __pageData,F as default};
