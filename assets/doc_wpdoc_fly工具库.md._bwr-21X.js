import{_ as s,c as i,o as a,U as n}from"./chunks/framework.FhXPyWfz.js";const y=JSON.parse('{"title":"fly工具库","description":"","frontmatter":{"title":"fly工具库","date":"2020-07-03T17:56:32.000Z"},"headers":[],"relativePath":"doc/wpdoc/fly工具库.md","filePath":"doc/wpdoc/fly工具库.md"}'),l={name:"doc/wpdoc/fly工具库.md"},h=n(`<h1 id="_3-1-5-工具库" tabindex="-1">3.1.5. 工具库 <a class="header-anchor" href="#_3-1-5-工具库" aria-label="Permalink to &quot;3.1.5. 工具库&quot;">​</a></h1><h2 id="_3-1-5-1-打印日志" tabindex="-1">3.1.5.1. 打印日志 <a class="header-anchor" href="#_3-1-5-1-打印日志" aria-label="Permalink to &quot;3.1.5.1. 打印日志&quot;">​</a></h2><p>打印日志仅用于IDE调试flycode使用，可在IDE输出调试日志。</p><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;日志信息&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_3-1-5-2-分布式id生成" tabindex="-1">3.1.5.2. 分布式ID生成 <a class="header-anchor" href="#_3-1-5-2-分布式id生成" aria-label="Permalink to &quot;3.1.5.2. 分布式ID生成&quot;">​</a></h2><p>业务对象的ID为全局唯一ID，所有新建的业务对象的ID，都应该使用该API生成。</p><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">genId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>目前的平台实现，将会返回全局唯一的长整形的数</p><hr><p><strong>例</strong>: 新建一个门店对象，并为其生成唯一ID</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> BO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;kx_store&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">store.storeid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">genId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">store.storename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;测试门店1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>store.storeid的值为 &quot;4327984237498327&quot; 长整形的数</p><hr><h2 id="_3-1-5-3-自增序列" tabindex="-1">3.1.5.3. 自增序列 <a class="header-anchor" href="#_3-1-5-3-自增序列" aria-label="Permalink to &quot;3.1.5.3. 自增序列&quot;">​</a></h2><p>有些业务编码，需要为其创建自增序列，使用该API生成，每个自增序列必须有一个全局唯一KEY。</p><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;自增key&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>nextval将会在&lt;自增key&gt;上下文中取到自增序列最后的值</p><hr><p><strong>例</strong>: \b假设门店编号规则为&quot;MD&quot; 前缀 + 4位自增的数字</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用STORE_MD作为自增序列的key</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> storeid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;MD&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ( </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0000&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;STORE_MD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>storeid将为:<br> MD0001<br> MD0002<br> MD0003<br> ...</p><hr><h2 id="_3-1-5-4-地址转经纬度-高德地图" tabindex="-1">3.1.5.4. 地址转经纬度（高德地图） <a class="header-anchor" href="#_3-1-5-4-地址转经纬度-高德地图" aria-label="Permalink to &quot;3.1.5.4. 地址转经纬度（高德地图）&quot;">​</a></h2><p><em>注意：此接口已被废弃,如需地图相关服务，请参考拓展库：<a href="http://apaas.wxchina.com:8881/technology/336/" target="_blank" rel="noreferrer">高德地图服务</a></em></p><p>可以把地址，比如“广州市天河区维多利亚广场” 转换成经纬度（高德地图）。</p><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geocode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;地址&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><p><strong>例</strong>:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> addressObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geocode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广州市天河区维多利亚广场&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(addressObj.state); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//状态： success：成功， failure：失败</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(addressObj.des);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//结果描述</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(addressObj.location); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//经纬度，比如&quot;116.484546,39.990064&quot;，逗号左边是经度，右边是纬度</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h2 id="_3-1-5-4-js对象去除属性左右两端空格" tabindex="-1">3.1.5.4. js对象去除属性左右两端空格 <a class="header-anchor" href="#_3-1-5-4-js对象去除属性左右两端空格" aria-label="Permalink to &quot;3.1.5.4. js对象去除属性左右两端空格&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimObjAttrValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;待去除属性左右空格的js对象&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><p><strong>例</strong>:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; value &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.key); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//此时打印“ value ”</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimObjAttrValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj.key); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//此时打印“value”</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h2 id="_3-1-5-5-字符串处理" tabindex="-1">3.1.5.5. 字符串处理 <a class="header-anchor" href="#_3-1-5-5-字符串处理" aria-label="Permalink to &quot;3.1.5.5. 字符串处理&quot;">​</a></h2><ul><li>根据某字符截取字符串：String.substringLastAt(&lt;字符串&gt;,&lt;分隔符&gt;,&lt;从后面第几个开始截&gt;);</li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;玄武集团/华南大区/广州分公司/销售一部&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newstr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substringLastAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newstr); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 华南大区/广州分公司/销售一部</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>判断字符串是否为空:String.isBlank(&lt;字符串&gt;); //不会去掉空格</li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;   &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_3-1-5-6-数值转换" tabindex="-1">3.1.5.6. 数值转换 <a class="header-anchor" href="#_3-1-5-6-数值转换" aria-label="Permalink to &quot;3.1.5.6. 数值转换&quot;">​</a></h2><ul><li>保留小数(四舍五入)：Number.toRoundDecimal(&lt;数值&gt;,&lt;保留几位&gt;);</li><li>保留小数(全部舍掉)：Number.toFloorDecimal(&lt;数值&gt;,&lt;保留几位&gt;);</li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toRoundDecimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2.35</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toRoundDecimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.3446</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2.34</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFloorDecimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.3456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2.34</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFloorDecimal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.3446</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//2.34</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_3-1-5-7-字典key查询" tabindex="-1">3.1.5.7. 字典Key查询 <a class="header-anchor" href="#_3-1-5-7-字典key查询" aria-label="Permalink to &quot;3.1.5.7. 字典Key查询&quot;">​</a></h2><ul><li>根据字典编码获取字典Key：DIC.getDicKeyByCode(&lt;对象名称&gt;,&lt;字典编码&gt;);</li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Cost </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Const.ordertype_unhandle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DIC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDicKeyByCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ordertype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 未处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Const.ordertype_handled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DIC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getDicKeyByCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ordertype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;002&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 已处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.kx_order.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Const.ordertype_unhandle){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // TODO</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.kx_order.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Const.ordertype_handled){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // TODO</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-1-5-8-记录操作日志" tabindex="-1">3.1.5.8. 记录操作日志 <a class="header-anchor" href="#_3-1-5-8-记录操作日志" aria-label="Permalink to &quot;3.1.5.8. 记录操作日志&quot;">​</a></h2><ul><li>记录用户操作行为日志：LOG.recordLog(&lt;模块名称&gt;,&lt;操作类型&gt;,&lt;操作日志&gt;);</li></ul><p><strong>例子</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  LOG</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">recordLog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;人员管理&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;新增&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;人员新增: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">IN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.pl_userinfo.userinfoname);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,60),t=[h];function p(e,k,r,d,E,g){return a(),i("div",null,t)}const c=s(l,[["render",p]]);export{y as __pageData,c as default};
