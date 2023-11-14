import{_ as s,o as t,c as a,Q as n}from"./chunks/framework.aac09c5f.js";const E=JSON.parse('{"title":"系统对象","description":"","frontmatter":{"title":"系统对象","date":"2020-05-19T19:24:23.000Z"},"headers":[],"relativePath":"doc/wpdoc/系统对象.md","filePath":"doc/wpdoc/系统对象.md"}'),e={name:"doc/wpdoc/系统对象.md"},l=n(`<h1 id="系统对象" tabindex="-1">系统对象 <a class="header-anchor" href="#系统对象" aria-label="Permalink to &quot;系统对象&quot;">​</a></h1><h2 id="user" tabindex="-1"><strong>user()</strong> <a class="header-anchor" href="#user" aria-label="Permalink to &quot;**user()**&quot;">​</a></h2><p>获取用户信息</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Dictionary</td><td>否</td><td>返回当前用户信息</td></tr></tbody></table><p>用户信息包括</p><table><thead><tr><th>key</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>accountCode</td><td></td><td></td></tr><tr><td>userinfoName</td><td>用户名称</td><td></td></tr><tr><td>userinfoID</td><td></td><td></td></tr><tr><td>tenantName</td><td>企业名称</td><td></td></tr><tr><td>tenantCode</td><td>企业\b编号</td><td></td></tr><tr><td>orgName</td><td>组织名称</td><td></td></tr><tr><td>orgCode</td><td>组织编号</td><td></td></tr><tr><td>positionID</td><td></td><td></td></tr><tr><td>positionName</td><td></td><td></td></tr><tr><td>mbCode</td><td></td><td></td></tr><tr><td>refposition\bID</td><td>职位编码</td><td></td></tr><tr><td>appCode</td><td>当前登录的应用编码</td><td>&quot;sfa &quot;</td></tr><tr><td>appCodes</td><td>当前租户的应用列表</td><td>[&quot;sfa&quot;]</td></tr><tr><td>categoryCode</td><td>当前的职位类别</td><td>&quot;&quot;</td></tr><tr><td>subpdCodes</td><td>当前租户子产品列表</td><td>[&quot;sfa&quot;]</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> userInfo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> appCode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().appCode</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> userInfo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> appCode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().appCode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="实现情况" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td>✅</td><td>未检测</td></tr></tbody></table><h2 id="context" tabindex="-1">context() <a class="header-anchor" href="#context" aria-label="Permalink to &quot;context()&quot;">​</a></h2><p>获取当前用户登录信息</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Dictionary</td><td>否</td><td>返回当前用户登录信息</td></tr></tbody></table><p>信息包括</p><table><thead><tr><th>key</th><th>类型</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>isOffline</td><td>Bool</td><td>当前是否离线</td><td>false</td></tr><tr><td>token</td><td>String</td><td>当前用户登录的token</td><td>eyJhbGciOiJIUzI....</td></tr><tr><td>httpAddress</td><td>String</td><td>http请求url头</td><td><a href="https://kx100.xtion.net:7000" target="_blank" rel="noreferrer">https://kx100.xtion.net:7000</a></td></tr><tr><td>versionName</td><td>String</td><td>版本名称</td><td>8.1</td></tr><tr><td>versionCode</td><td>String</td><td>版本号</td><td>100</td></tr></tbody></table><p>示例</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> token </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">().token</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> token </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">().token</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实现情况-1" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-1" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td></td><td>未检测</td></tr></tbody></table><h2 id="uniqueid" tabindex="-1">uniqueid() <a class="header-anchor" href="#uniqueid" aria-label="Permalink to &quot;uniqueid()&quot;">​</a></h2><p>获取一个的uniqueid</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>number</td><td>int</td><td>可</td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>String/[String]</td><td>否</td><td>返回一个单个 uniqueid</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> uniqueid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">uniqueid</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> uniqueid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">uniqueid</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="batchuniqueid-count" tabindex="-1">batchUniqueid(count, ) <a class="header-anchor" href="#batchuniqueid-count" aria-label="Permalink to &quot;batchUniqueid(count, )&quot;">​</a></h2><p>获取一个的uniqueid</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>number</td><td>int</td><td>可</td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>String/[String]</td><td>否</td><td>返回一个单个 uniqueid</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> uniqueid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">uniqueid</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> uniqueid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">uniqueid</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="date" tabindex="-1">date() <a class="header-anchor" href="#date" aria-label="Permalink to &quot;date()&quot;">​</a></h2><p>获取服务端当前时间</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Date</td><td>否</td><td>返回服务端当前时间</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> now </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">date</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">date</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实现情况-2" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-2" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td>✅</td><td>未检测</td></tr></tbody></table><h2 id="functioncodes" tabindex="-1">functionCodes() <a class="header-anchor" href="#functioncodes" aria-label="Permalink to &quot;functionCodes()&quot;">​</a></h2><p>获取功能权限</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Array</td><td>否</td><td>返回当前用户的完整功能权限code的数组，Array形如[String]</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> fc </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">functionCodes</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> fc </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">functionCodes</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实现情况-3" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-3" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td>✅</td><td>未检测</td></tr></tbody></table><h2 id="functioncheck-functioncodes" tabindex="-1">functionCheck(functionCodes) <a class="header-anchor" href="#functioncheck-functioncodes" aria-label="Permalink to &quot;functionCheck(functionCodes)&quot;">​</a></h2><p>功能权限检测</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Bool</td><td>否</td><td>支持输入多个功能点的code，只有所有权限都有时才返回true，其他情况都返回false</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> r </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">functionCheck</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;80998877734324&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(r </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//包含被检查的功能点</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> r </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">functionCheck</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;80998877734324&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(r </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//包含被检查的功能点</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="实现情况-4" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-4" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td>✅</td><td>未检测</td></tr></tbody></table><h2 id="console-msg" tabindex="-1">console(msg) <a class="header-anchor" href="#console-msg" aria-label="Permalink to &quot;console(msg)&quot;">​</a></h2><p>控制日志输出</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">consloe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request is OK&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">consloe</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request is OK&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实现情况-5" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-5" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td>✅</td><td>未检测</td></tr></tbody></table><h2 id="idelog-p-title" tabindex="-1">ideLog(p, title) <a class="header-anchor" href="#idelog-p-title" aria-label="Permalink to &quot;ideLog(p, title)&quot;">​</a></h2><p>把日志发送到IDE，注意\b此方法只有在开发模式下生效</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>p</td><td>String、Dictionary、Array、Number、function</td><td>否</td><td>\b日志\b输出内容，可以为多种类型数据，但当类型为function时，函数通过回调方式获取日志内容，当日志内容仅仅用于查看时，应当\b优先使用回调函数</td></tr></tbody></table><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>可</td><td>日志在IDE显示的标题，可以为空，为空时默认显示“UIFlyCode打印”</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//没有title入参</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">ideLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request is OK&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//有title入参</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">ideLog</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request is OK&#39;</span><span style="color:#E1E4E8;">，</span><span style="color:#9ECBFF;">&#39;列表请求结果&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//通过回调函数返回日志内容</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">ideLog</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;request is OK&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">ideLog</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;request is OK&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}，</span><span style="color:#9ECBFF;">&#39;列表请求结果&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//没有title入参</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">ideLog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request is OK&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//有title入参</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">ideLog</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request is OK&#39;</span><span style="color:#24292E;">，</span><span style="color:#032F62;">&#39;列表请求结果&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//通过回调函数返回日志内容</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">ideLog</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;request is OK&#39;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">ideLog</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;request is OK&#39;</span></span>
<span class="line"><span style="color:#24292E;">}，</span><span style="color:#032F62;">&#39;列表请求结果&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="实现情况-6" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-6" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td>✅</td><td>未检测</td></tr></tbody></table><h2 id="navinfo-key" tabindex="-1">navinfo(key) <a class="header-anchor" href="#navinfo-key" aria-label="Permalink to &quot;navinfo(key)&quot;">​</a></h2><p>根据key获取对应的导航目录信息</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 调用示例</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pagecode </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">navinfo</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;applist&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].pagecode</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 调用示例</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pagecode </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">navinfo</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;applist&#39;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].pagecode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>否</td><td>指定的导航目录的key</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Array</td><td>是</td><td>返回对应key的目录下所有节点的信息</td></tr></tbody></table><p>返回数据结构示例</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;pagecode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;12123546464&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;店铺到达&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;拜访步骤1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;icon&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;arrive&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;pagecode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;12123546464&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;店铺到达&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;拜访步骤1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;icon&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;arrive&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="实现情况-7" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-7" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th><th>Web</th></tr></thead><tbody><tr><td>✅</td><td></td><td>未检测</td></tr></tbody></table>`,75),o=[l];function p(r,d,c,i,h,y){return t(),a("div",null,o)}const u=s(e,[["render",p]]);export{E as __pageData,u as default};
