import{_ as s,c as a,o as i,U as e}from"./chunks/framework.K-r7inPk.js";const l="/assets/flycode如何运⾏.hu5r8WfD.png",f=JSON.parse('{"title":"quickstart","description":"","frontmatter":{"title":"quickstart"},"headers":[],"relativePath":"doc/quickstart.md","filePath":"doc/quickstart.md"}'),n={name:"doc/quickstart.md"},t=e('<h1 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h1><h2 id="_1-1-什么是flycode" tabindex="-1">1.1. 什么是flycode <a class="header-anchor" href="#_1-1-什么是flycode" aria-label="Permalink to &quot;1.1. 什么是flycode&quot;">​</a></h2><p>flycode 是⼀种采⽤javascript语法，并可以结合sql语法进⾏数据查询的语⾔。 产品开发⼈员或者项⽬实施⼈员，使⽤flycode仅需要编写业务相关逻辑。业务引擎会发布相应的服务 接⼝，并⾃动处理多租户隔离、数据离线、数据追踪、数据权限、分⻚、排序等平台逻辑。 flycode 除了可以使⽤ es5标准 的javascript内置函数， 还提供了⼀些常⽤操作API，如:⽇期，会话， 输⼊输出上下⽂，数据库操作等；平台服务API，如:excel导⼊导出，发送消息等。 建议在编写flycode时，不要使⽤复杂的js技巧。flycode代码尽量表达当前业务领域内的逻辑，以便 于维护。</p><h2 id="_1-2-何时需要flycode" tabindex="-1">1.2. 何时需要flycode <a class="header-anchor" href="#_1-2-何时需要flycode" aria-label="Permalink to &quot;1.2. 何时需要flycode&quot;">​</a></h2><p>需要实现业务逻辑，并发布rest接⼝时，flycode。 需要实现业务逻辑，并发布重⽤函数时，flycode。 需要实现各种数据迁移（如导⼊导出excel）时，flycode。 需要在逻辑中调⽤平台服务(如发送消息，流程处理)时，flycode。</p><h2 id="_1-3-flycode如何运行" tabindex="-1">1.3. flycode如何运⾏ <a class="header-anchor" href="#_1-3-flycode如何运行" aria-label="Permalink to &quot;1.3. flycode如何运⾏&quot;">​</a></h2><p><img src="'+l+`" alt="flycode如何运⾏"></p><h2 id="如上图所示" tabindex="-1">如上图所示: <a class="header-anchor" href="#如上图所示" aria-label="Permalink to &quot;如上图所示:&quot;">​</a></h2><p><code>业务操作</code></p><ol><li>产品开发或项⽬实施⼈员 使⽤ 配置IDE 编写flycode，将被存⼊ 元数据引擎。</li><li>⽤户 登录 app或web浏览器，app或浏览器会调⽤ 业务引擎 接⼝，业务引擎则会从元数据引 擎获取flycode解析并运⾏，并返回结果。</li></ol><hr><p><code>任务调度</code></p><ol><li>产品开发或项⽬实施⼈员 使⽤ 配置IDE 编写flycode，并配置任务调度，将被存⼊ 元数据引 擎。</li><li>任务调度服务 达到触发条件时，触发请求接⼝，异步执⾏flycode。</li></ol><hr><h1 id="_2-第一行代码" tabindex="-1">2. 第⼀⾏代码 <a class="header-anchor" href="#_2-第一行代码" aria-label="Permalink to &quot;2. 第⼀⾏代码&quot;">​</a></h1><p>以下示例中，将演示flycode的重要特点 —— js语法与sql语法相结合的数据查询操作，我们把这种语句称为FlyQL(flycode查询语⾔)。</p><p>示例场景说明： 假设已经建⽴了业务对象 ⻔店(kx_store)，并且有 ID(storeid)和 ⻔店名称(storename)的属性。 编写业务逻辑: <code>获取ID为1的⻔店，将⻔店名称修改为“示例⻔店1”，后保存。</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查询⻔店表，获得ID为1的⻔店</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SELECT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storeid, storename FROM kx_store WHERE storeid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(temp)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改⻔店名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">temp[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].storename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;示例⻔店1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 保存</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DB</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(temp[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,18),p=[t];function h(r,d,o,c,k,y){return i(),a("div",null,p)}const _=s(n,[["render",h]]);export{f as __pageData,_ as default};
