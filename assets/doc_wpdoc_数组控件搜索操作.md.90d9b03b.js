import{_ as e,C as o,o as c,c as r,k as s,H as l,w as p,Q as t,a as n}from"./chunks/framework.aac09c5f.js";const k=JSON.parse('{"title":"数组控件搜索操作","description":"","frontmatter":{"title":"数组控件搜索操作","date":"2022-02-17T17:51:51.000Z"},"headers":[],"relativePath":"doc/wpdoc/数组控件搜索操作.md","filePath":"doc/wpdoc/数组控件搜索操作.md"}'),E={name:"doc/wpdoc/数组控件搜索操作.md"},y=t(`<h1 id="数组控件搜索操作" tabindex="-1">数组控件搜索操作 <a class="header-anchor" href="#数组控件搜索操作" aria-label="Permalink to &quot;数组控件搜索操作&quot;">​</a></h1><h3 id="search-searchparams" tabindex="-1"><strong>search(searchParams)</strong> <a class="header-anchor" href="#search-searchparams" aria-label="Permalink to &quot;**search(searchParams)**&quot;">​</a></h3><p>对数组型控件当前的数据进行搜索过滤</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>searchParams</td><td>SearchParams</td><td>否</td><td>搜索条件</td></tr></tbody></table><h4 id="searchparams" tabindex="-1">SearchParams <a class="header-anchor" href="#searchparams" aria-label="Permalink to &quot;SearchParams&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> searchParams </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 数组型控件子控件 name</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;经销商编码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        * 可选值:</span></span>
<span class="line"><span style="color:#6A737D;">        * eq: 等值匹配 ，匹配值格式：字符串</span></span>
<span class="line"><span style="color:#6A737D;">        * like: 模糊匹配，匹配值格式：字符串</span></span>
<span class="line"><span style="color:#6A737D;">        * between: 范围匹配，匹配值格式: &#39;{start: &quot;0&quot;, end: &quot;1&quot;}&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        *  */</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;like&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 匹配值</span></span>
<span class="line"><span style="color:#E1E4E8;">    }], </span></span>
<span class="line"><span style="color:#E1E4E8;">    rule: </span><span style="color:#9ECBFF;">&#39;and&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// and: 行数据必须匹配所有搜索条件才命中，or：行数据只要匹配其中一个搜索条件就能命中</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> searchParams </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    condition: [{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 数组型控件子控件 name</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;经销商编码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">        * 可选值:</span></span>
<span class="line"><span style="color:#6A737D;">        * eq: 等值匹配 ，匹配值格式：字符串</span></span>
<span class="line"><span style="color:#6A737D;">        * like: 模糊匹配，匹配值格式：字符串</span></span>
<span class="line"><span style="color:#6A737D;">        * between: 范围匹配，匹配值格式: &#39;{start: &quot;0&quot;, end: &quot;1&quot;}&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        *  */</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;like&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: </span><span style="color:#032F62;">&#39;xxx&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 匹配值</span></span>
<span class="line"><span style="color:#24292E;">    }], </span></span>
<span class="line"><span style="color:#24292E;">    rule: </span><span style="color:#032F62;">&#39;and&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// and: 行数据必须匹配所有搜索条件才命中，or：行数据只要匹配其中一个搜索条件就能命中</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="使用例子" tabindex="-1">使用例子 <a class="header-anchor" href="#使用例子" aria-label="Permalink to &quot;使用例子&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 获取各种搜索条件值</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;经销商名称/编号搜索&#39;</span><span style="color:#E1E4E8;">).value</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;营销组织搜索&#39;</span><span style="color:#E1E4E8;">).value</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;活动名称搜索&#39;</span><span style="color:#E1E4E8;">).value</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;支付方式搜索&#39;</span><span style="color:#E1E4E8;">).value</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value5 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;提交时间区间&#39;</span><span style="color:#E1E4E8;">).value</span></span>
<span class="line"><span style="color:#6A737D;">// 描述搜索条件的数组</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> condition </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 搜索条件不为空，则加入到数组</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (value1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;经销商编码&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;like&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: value1</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    condition.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;经销商名称&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;like&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: value1</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (value2) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;营销组织&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;eq&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: value2</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (value3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;活动名称&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;like&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: value3</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (value4) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;支付方式&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;eq&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: value4</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (value5) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;提交时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;between&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        value: value5</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> ctrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Page.</span><span style="color:#B392F0;">getArrayCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;经销商核销编辑表格&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 搜索条件的数组</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 获取编辑表格控件，调用search方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    ctrl.</span><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        condition: condition,</span></span>
<span class="line"><span style="color:#E1E4E8;">        rule: </span><span style="color:#9ECBFF;">&#39;and&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// and: 行数据必须匹配所有搜索条件才命中，or：行数据只要匹配其中一个搜索条件就能命中</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 清空搜索</span></span>
<span class="line"><span style="color:#E1E4E8;">    ctrl.</span><span style="color:#B392F0;">clearSearch</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 获取各种搜索条件值</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;经销商名称/编号搜索&#39;</span><span style="color:#24292E;">).value</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;营销组织搜索&#39;</span><span style="color:#24292E;">).value</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;活动名称搜索&#39;</span><span style="color:#24292E;">).value</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;支付方式搜索&#39;</span><span style="color:#24292E;">).value</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value5 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;提交时间区间&#39;</span><span style="color:#24292E;">).value</span></span>
<span class="line"><span style="color:#6A737D;">// 描述搜索条件的数组</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> condition </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 搜索条件不为空，则加入到数组</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (value1) {</span></span>
<span class="line"><span style="color:#24292E;">    condition.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;经销商编码&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;like&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: value1</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    condition.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;经销商名称&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;like&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: value1</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (value2) {</span></span>
<span class="line"><span style="color:#24292E;">    condition.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;营销组织&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;eq&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: value2</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (value3) {</span></span>
<span class="line"><span style="color:#24292E;">    condition.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;活动名称&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;like&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: value3</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (value4) {</span></span>
<span class="line"><span style="color:#24292E;">    condition.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;支付方式&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;eq&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: value4</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (value5) {</span></span>
<span class="line"><span style="color:#24292E;">    condition.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;提交时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;between&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        value: value5</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ctrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Page.</span><span style="color:#6F42C1;">getArrayCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;经销商核销编辑表格&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 搜索条件的数组</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 获取编辑表格控件，调用search方法</span></span>
<span class="line"><span style="color:#24292E;">    ctrl.</span><span style="color:#6F42C1;">search</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        condition: condition,</span></span>
<span class="line"><span style="color:#24292E;">        rule: </span><span style="color:#032F62;">&#39;and&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// and: 行数据必须匹配所有搜索条件才命中，or：行数据只要匹配其中一个搜索条件就能命中</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 清空搜索</span></span>
<span class="line"><span style="color:#24292E;">    ctrl.</span><span style="color:#6F42C1;">clearSearch</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,8),i=s("thead",null,[s("tr",null,[s("th",null,"支持的控件"),s("th",null,"iOS"),s("th",null,"Android"),s("th",null,"Web")])],-1),u=s("td",null,"编辑表格 editortable",-1),b=s("td",null,"已实现(V9.6.2+)",-1),d=s("h3",{id:"clearsearch",tabindex:"-1"},[s("strong",null,"clearSearch()"),n(),s("a",{class:"header-anchor",href:"#clearsearch","aria-label":'Permalink to "**clearSearch()**"'},"​")],-1),m=s("p",null,"清空数组型控件的搜索条件，恢复到未搜索的状态",-1),F=s("thead",null,[s("tr",null,[s("th",null,"支持的控件"),s("th",null,"iOS"),s("th",null,"Android"),s("th",null,"Web")])],-1),h=s("td",null,"编辑表格 editortable",-1),v=s("td",null,"已实现(V9.6.2+)",-1);function A(C,D,_,g,B,f){const a=o("font");return c(),r("div",null,[y,s("table",null,[i,s("tbody",null,[s("tr",null,[u,s("td",null,[l(a,null,{default:p(()=>[n("未实现")]),_:1})]),s("td",null,[l(a,null,{default:p(()=>[n("未实现")]),_:1})]),b])])]),d,m,s("table",null,[F,s("tbody",null,[s("tr",null,[h,s("td",null,[l(a,null,{default:p(()=>[n("未实现")]),_:1})]),s("td",null,[l(a,null,{default:p(()=>[n("未实现")]),_:1})]),v])])])])}const q=e(E,[["render",A]]);export{k as __pageData,q as default};
