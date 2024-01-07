import{_ as s,c as i,o as a,U as n}from"./chunks/framework.FhXPyWfz.js";const E=JSON.parse('{"title":"树型结构数据分级加载方案","description":"","frontmatter":{"title":"树型结构数据分级加载方案","date":"2020-05-22T15:49:35.000Z"},"headers":[],"relativePath":"doc/wpdoc/树型结构数据分级加载方案.md","filePath":"doc/wpdoc/树型结构数据分级加载方案.md"}'),e={name:"doc/wpdoc/树型结构数据分级加载方案.md"},t=n(`<h1 id="树型结构数据分级加载" tabindex="-1">树型结构数据分级加载 <a class="header-anchor" href="#树型结构数据分级加载" aria-label="Permalink to &quot;树型结构数据分级加载&quot;">​</a></h1><p>处理例如组织架构，营销区域，行政区域等结构的数据</p><p>由于树形结构的搜索处理较为复杂，因此当进行搜索时，树形结构会变成为列表树结果，当搜索条件清空后，会重新展示为树形结构。</p><p>为了提升用户体验，会在数据操作中</p><h2 id="相关协议" tabindex="-1">相关协议 <a class="header-anchor" href="#相关协议" aria-label="Permalink to &quot;相关协议&quot;">​</a></h2><h3 id="datastructure-属性" tabindex="-1">datastructure 属性 <a class="header-anchor" href="#datastructure-属性" aria-label="Permalink to &quot;datastructure 属性&quot;">​</a></h3><p>所有需要支持处理显示树形结构的数据的控件，都应该支持该属性，例如treegrid等控件。</p><p>这类控件在触发事件时会将当前触发事件的对应的（单条）数据的 id 值</p><p>该属性有结构如下：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;treegrid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ......</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;datastructure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;pid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;idpath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p>id</p><p>必填，配置数据中标识数据唯一id的字段</p></li><li><p>pid</p><p>必填，配置数据中标识数据父级id的字段</p></li><li><p>idpath</p><p>可选，配置数据中标识数据完整层级路径的字段，可用于快速定位数据；该值为空时就可能需要前端遍历数据查找。</p></li></ul><h3 id="nestedlevel-属性" tabindex="-1">nestedlevel 属性 <a class="header-anchor" href="#nestedlevel-属性" aria-label="Permalink to &quot;nestedlevel 属性&quot;">​</a></h3><p>datarequest 事件新增一个 nestedlevel 属性，用于控制树形结构数据的请求</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;datarequest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ......</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;pagesize&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;nestedlevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>nestedlevel</p><p>数据嵌套层数，用于控制树形结构数据每次请求的数据层数，取值如下：</p></li></ul><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>空</td><td>默认值，表示不是树形结构数据，将不组装__nesting对象结构</td></tr><tr><td>0</td><td>表示不限制层数，由接口逻辑自行控制返回的数据层数</td></tr><tr><td>n</td><td>表示需要返回指定的n层数据</td></tr></tbody></table><blockquote><p>目前在实现上，n和0的含义都是一致的，都是由接口自行决定返回数据</p></blockquote><h3 id="nesting-内置对象" tabindex="-1">__nesting 内置对象 <a class="header-anchor" href="#nesting-内置对象" aria-label="Permalink to &quot;\\_\\_nesting 内置对象&quot;">​</a></h3><p>新增一个专用于树形结构数据处理的出入参特有对象 <code>__nesting</code></p><p><strong>作为入参</strong> ：该结构在前端会由 <code>datarequest</code> 事件自动组装作为入参提交（需要配置了 <code>nestedlevel</code> 属性才会组装）</p><p><strong>作为出参</strong> ：任何处理树形结构的接口，如查询，删除，编辑等等，都需要在返回的出参中增加 <code>__nesting</code> 用于指导前端属性结构数据的具体处理方式。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;__nesting&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;__focusednode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;__nestedlevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;__operation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>__focusednode</p><p>当前请求的数据的焦点节点，该值会由树型数据控件传递到事件的临时上下文中。</p><p>当该值为空表示当前请求数据从根节点开始</p></li><li><p>__nestedlevel</p><p>当前请求的数据层数，通常只在作为入参时有用，该值直接填入 <code>datarequest</code> 事件的 <code>nestedlevel</code> 属性值。</p></li><li><p>__operation</p><p>当前的数据操作类型，只在作为出参时填入，用于指导接收数据的控件做出对应的操作，提升数据变更是的UI更新体验，其取值如下</p></li></ul><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>load</td><td>默认值，加载，空值也代表加载，通常由datarequest事件返回</td></tr><tr><td>refresh</td><td>刷新</td></tr><tr><td>delete</td><td>删除</td></tr><tr><td>insert</td><td>插入</td></tr><tr><td>update</td><td>更新</td></tr><tr><td>order</td><td>排序</td></tr></tbody></table><ul><li><p>refresh</p><p>将刷新 <code>__focusednode</code> 指节点下的数据，如果 <code>__focusednode</code> 为空表示刷新整棵树的数据</p><blockquote><p>实现上，先丢弃指定节点下的所有数据，再将新数据放入树中，保持树的当前展开状态。</p></blockquote></li><li><p>delete</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>将删除返回数据中的对应节点，节点查找规则根据控件配置的树形数据结构</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><h2 id="前端数据获取与设置" tabindex="-1">前端数据获取与设置 <a class="header-anchor" href="#前端数据获取与设置" aria-label="Permalink to &quot;前端数据获取与设置&quot;">​</a></h2><h3 id="数据获取规则" tabindex="-1">数据获取规则 <a class="header-anchor" href="#数据获取规则" aria-label="Permalink to &quot;数据获取规则&quot;">​</a></h3><ul><li><p>支持范围获取</p><p>树形数据依然支持常规的数据获取，包括配置和UIFlycode获取，但是不支持通过index来获取行数据，目前只支持通过 <code>focused</code>，<code>checked</code> 这两个范围值获取值，当获取 <code>focused</code> 数据时，获取到的将是一个对象，<code>checked</code> 获取到的是一个数组</p></li><li><p>树形结构支持焦点行上下文填充</p><p>树形控件同样适用焦点行数据自动填充事件上下文的约定，即点击某一行时，该行数据会完整放入内存变量空间，供随后的事件获取。</p><p><strong>特别的</strong>：树形控件还会额外添加 <code>__focusednode</code> 作为焦点行的标记</p></li><li><p>列表型结构支持焦点行上下文填充</p><p>当处在搜索条件下，树控件展示为列表样式，此时可以支持分页加载，其数据获取规则与普通列表一致，点击分页标签也会填充 __pagging 相关数据。</p></li></ul><h3 id="数据设置规则" tabindex="-1">数据设置规则 <a class="header-anchor" href="#数据设置规则" aria-label="Permalink to &quot;数据设置规则&quot;">​</a></h3><ul><li><p>支持配置的方式设置数据</p><p>包括datasubmit和datarequest两个行为的setter。</p></li></ul><h2 id="接口处理逻辑说明" tabindex="-1">接口处理逻辑说明 <a class="header-anchor" href="#接口处理逻辑说明" aria-label="Permalink to &quot;接口处理逻辑说明&quot;">​</a></h2><p>这里对处理树形结构的行为做出统一的约定。</p><h3 id="查询接口处理逻辑" tabindex="-1">查询接口处理逻辑 <a class="header-anchor" href="#查询接口处理逻辑" aria-label="Permalink to &quot;查询接口处理逻辑&quot;">​</a></h3><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 有选中的节点 {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 查询</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(子节点).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">排序</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(叶子节点在前)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 没有搜索条件 {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 第一层节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 查询</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(搜索条件).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">排序</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(叶子节点在前).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">分页</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(分页信息)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%A0%91%E7%BB%93%E6%9E%84%E6%95%B0%E6%8D%AE%E6%90%9C%E7%B4%A2%E5%A4%84%E7%90%86.png" alt=""></p><h3 id="数据提交接口返回数据约定" tabindex="-1">数据提交接口返回数据约定 <a class="header-anchor" href="#数据提交接口返回数据约定" aria-label="Permalink to &quot;数据提交接口返回数据约定&quot;">​</a></h3><p>当没有搜索条件时，数据以树型结构展示，此时为了提升用户体验，在做如下操作，如删除，编辑，新增等，可以在接口的返回数据提供数据更新的具体信息。</p><ul><li><p>插入</p><p>可以新增多条数据，但必须是相同父节点</p><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;业务数据&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;数组结构&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;__nesting&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__focusednode&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数据插入的节点</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__operation&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;insert&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 表示数据的处理方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>更新</p><p>可以编辑多条数据，但不能改变树结构，例如根据勾选项启用或停用</p><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;业务数据&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;数组结构&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;__nesting&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__focusednode&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 无需指定节点，可以更新多个层级的节点数据</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__operation&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;update&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 表示数据的处理方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>删除</p><p>可以删除多条数据，例如删除勾选项</p><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;业务数据&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;数组结构&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;__nesting&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__focusednode&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 无需指定节点，可以删除多个层级的节点数据</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__operation&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;delete&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 表示数据的处理方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>排序</p><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;业务数据&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;数组结构，可以编辑多条数据&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;__nesting&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__focusednode&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 排序节点的父级节点</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__operation&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sort&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 表示数据的处理方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>其他</p><p>其他情况，如此时搜索条件不为空，或者有节点层级调整，或者处理的数据过多，或者处理的方式有多重等，统一按刷新处理，控件会自动调用刷新事件，重新获取数据</p><div class="language-swift vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;业务数据&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [],                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//此时不用返回业务数据</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;__nesting&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__focusednode&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 处理节点保持为空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;__operation&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;refresh&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 数据刷新，控件将会主动触发刷新事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><h3 id="跨表单数据刷新" tabindex="-1">跨表单数据刷新 <a class="header-anchor" href="#跨表单数据刷新" aria-label="Permalink to &quot;跨表单数据刷新&quot;">​</a></h3><p>如果树控件的数据是在其他表单修改的，此时只支持全部刷新的模式更新列表，即通过call event 事件，调用控件的onrefresh事件</p><h2 id="控件接收数据处理规则" tabindex="-1">控件接收数据处理规则 <a class="header-anchor" href="#控件接收数据处理规则" aria-label="Permalink to &quot;控件接收数据处理规则&quot;">​</a></h2><p>在接受到setter的数据后，根据不同的 <code>__operation</code> 值，控件将会作出不同的UI和数据响应</p><p><em><strong>以下操作，除了load外，其他都是在树型结构时的处理，如果是列表状态，都是直接调用onrefresh事件，同时传递出当前的pageindex信息，刷新当前页数据即可。</strong></em></p><h3 id="load" tabindex="-1">Load <a class="header-anchor" href="#load" aria-label="Permalink to &quot;Load&quot;">​</a></h3><p>该操通常是datarequest事件返回，此时控件需要根据 <code>__focusednode</code> 的值来判断具体加载哪个节点下的数据。</p><p>如果没有 <code>__nesting</code> 数据，则直接根据 <code>__paging</code> 数据按列表处理。</p><p>如果有 <code>__nesting</code> 数据，则做以下处理</p><p>**数据处理：**先丢弃指定节点下的所有数据，再将获取到的数据加入当前的树中。</p><p>**异常数据处理：**理论上返回的数据应该都是指定节点下的数据，但如果出现了其他节点下的数据，就直接丢弃。</p><p>**UI处理：**保持当前树结构的展开状态，自动填充焦点节点的下级节点数据。</p><h3 id="refresh" tabindex="-1">Refresh <a class="header-anchor" href="#refresh" aria-label="Permalink to &quot;Refresh&quot;">​</a></h3><p>遇到该操作就只是简单的触发控件的onrefresh事件，通常onrefresh内会配置加载数据的行为，之后的数据处理参看load</p><h3 id="delete" tabindex="-1">Delete <a class="header-anchor" href="#delete" aria-label="Permalink to &quot;Delete&quot;">​</a></h3><p><strong>数据处理：</strong> 根据返回数据的id，或者idpath，删除对应的节点以及其子节点数据</p><p><strong>异常数据处理：</strong> 遇到在前端缓存中不存在的数据，就直接丢弃。</p><p><strong>UI处理：</strong> 尽量保持当前树结构的展开状态，删除相关的节点。</p><h3 id="insert" tabindex="-1">Insert <a class="header-anchor" href="#insert" aria-label="Permalink to &quot;Insert&quot;">​</a></h3><p><strong>数据处理：</strong> 根据返回数据的pid，或者idpath，插入到对应的节点下</p><p><strong>异常数据处理：</strong> 遇到在前端缓存中不存在的pid数据，就直接丢弃。</p><p><strong>UI处理：</strong> 保持当前树结构的展开状态，在当前节点插入对应数据。</p><h3 id="update" tabindex="-1">Update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;Update&quot;">​</a></h3><p><strong>数据处理：</strong> 根据返回数据的id，或者idpath，更新对应节点数据</p><p><strong>异常数据处理：</strong> 遇到在前端缓存中不存在的数据，就直接丢弃。</p><p><strong>UI处理：</strong> 保持当前树结构的展开状态，更新对应节点数据。</p><h3 id="order" tabindex="-1">Order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;Order&quot;">​</a></h3><p><strong>数据处理：</strong> 直接更新焦点节点的下一级节点数据，可以丢弃这些节点的再下一级缓存的数据</p><p><strong>异常数据处理：</strong> 返回的数据必须是在焦点节点下的数据，如果不是，丢弃。</p><p><strong>UI处理：</strong> 保持当前树结构的展开状态，更新对应节点数据。</p>`,68),l=[t];function p(h,r,k,d,o,c){return a(),i("div",null,l)}const g=s(e,[["render",p]]);export{E as __pageData,g as default};
