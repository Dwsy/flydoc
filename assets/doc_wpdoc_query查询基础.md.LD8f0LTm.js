import{_ as s,c as a,o as i,U as n}from"./chunks/framework.FhXPyWfz.js";const u=JSON.parse('{"title":"query查询基础","description":"","frontmatter":{"title":"query查询基础","date":"2020-07-03T17:43:07.000Z"},"headers":[],"relativePath":"doc/wpdoc/query查询基础.md","filePath":"doc/wpdoc/query查询基础.md"}'),e={name:"doc/wpdoc/query查询基础.md"},l=n(`<h1 id="_3-1-2-1-查询基础" tabindex="-1">3.1.2.1. 查询基础 <a class="header-anchor" href="#_3-1-2-1-查询基础" aria-label="Permalink to &quot;3.1.2.1. 查询基础&quot;">​</a></h1><h2 id="_3-1-2-1-1-flyql基础" tabindex="-1">3.1.2.1.1. FlyQL基础 <a class="header-anchor" href="#_3-1-2-1-1-flyql基础" aria-label="Permalink to &quot;3.1.2.1.1. FlyQL基础&quot;">​</a></h2><ul><li>以 <strong>&quot;select&quot;</strong> 开头(全大写或全小写)，<strong>&quot;;&quot;</strong> 结尾的语句，被识别为FlyQL。</li><li>FlyQL的查询结果是一个 <strong>业务对象数组</strong> 或者 <strong>业务视图</strong>(如合并查询语句union等，无法被识别为业务对象的，将会以业务视图返回)，可赋给中间变量供后续处理，或直接赋给输出对象。</li></ul><hr><p><strong>例</strong>: 查询门店信息，赋予temp变量</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storeid, storename FROM kx_store;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.kx_store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>OUT.kx_store的结构如下:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storeid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3242334&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试门店1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h2 id="_3-1-2-1-2-关联查询-join" tabindex="-1">3.1.2.1.2. 关联查询 join <a class="header-anchor" href="#_3-1-2-1-2-关联查询-join" aria-label="Permalink to &quot;3.1.2.1.2. 关联查询 join&quot;">​</a></h2><p>关联查询时，需要配置对应到输出对象属性的别名，输出对象中的关联对象规则详见 <strong>业务对象输入输出</strong> 章节</p><hr><p><strong>例</strong>: 查询门店信息，并关联出门店所属的营销区域名称</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_store.storeid, kx_store.storename, kx_salearea.saleareaname as saleareaid__saleareaname</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_store</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    LEFT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JOIN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_salearea </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_store.saleareaid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_salearea.saleareaid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.kx_store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>OUT.kx_store的结构如下:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storeid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3242334&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试门店1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;saleareaid__saleareaname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试区域1&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // 主对象字段 加两个下划线 加从对象字段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><hr><h2 id="_3-1-2-1-3-合并查询-union" tabindex="-1">3.1.2.1.3. 合并查询 union <a class="header-anchor" href="#_3-1-2-1-3-合并查询-union" aria-label="Permalink to &quot;3.1.2.1.3. 合并查询 union&quot;">​</a></h2><p>flycode支持union等合并查询操作，合并查询的结果<strong>只能是业务视图，业务视图不能进行增删改</strong>。</p><hr><p><strong>例</strong>: 查询门店/渠道商信息，并合并</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查询终端信息的storeid,storename 合并 渠道信息的channelid,channelname，合并后，字段名以第一个查询字段为准(此规则与sql标准相同)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storeid, storename </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_store</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UNION</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> channelid, channelname</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> kx_channel;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.kx_store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出结果:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OUT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;kx_store&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;storeid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;storename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;门店1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;storeid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;storename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;渠道1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr>`,25),p=[l];function t(h,r,k,d,E,o){return i(),a("div",null,p)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};
