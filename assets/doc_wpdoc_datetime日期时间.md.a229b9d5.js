import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.b1e56e49.js";const u=JSON.parse('{"title":"datetime日期时间","description":"","frontmatter":{"title":"datetime日期时间","date":"2020-07-03T17:55:56.000Z"},"headers":[],"relativePath":"doc/wpdoc/datetime日期时间.md","filePath":"doc/wpdoc/datetime日期时间.md"}'),p={name:"doc/wpdoc/datetime日期时间.md"},l=e(`<h1 id="_3-1-4-日期时间" tabindex="-1">3.1.4. 日期时间 <a class="header-anchor" href="#_3-1-4-日期时间" aria-label="Permalink to &quot;3.1.4. 日期时间&quot;">​</a></h1><h2 id="_3-1-4-1-当前日期" tabindex="-1">3.1.4.1. 当前日期 <a class="header-anchor" href="#_3-1-4-1-当前日期" aria-label="Permalink to &quot;3.1.4.1. 当前日期&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 获取当前时间字符串(返回UTC时区的时间字符串)</span></span>
<span class="line"><span style="color:#79B8FF;">NOW</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 当前时间，精确到毫秒 yyyy-MM-dd HH:mm:ss.fff</span></span>
<span class="line"><span style="color:#79B8FF;">NOW</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">date</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// 当前时间，精确到天 yyyy-MM-dd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 获取当前时间字符串(返回UTC时区的时间字符串)</span></span>
<span class="line"><span style="color:#005CC5;">NOW</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 当前时间，精确到毫秒 yyyy-MM-dd HH:mm:ss.fff</span></span>
<span class="line"><span style="color:#005CC5;">NOW</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">date</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// 当前时间，精确到天 yyyy-MM-dd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-1-4-2-日期格式化" tabindex="-1">3.1.4.2. 日期格式化 <a class="header-anchor" href="#_3-1-4-2-日期格式化" aria-label="Permalink to &quot;3.1.4.2. 日期格式化&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 日期格式化</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> datestr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [Date对象].</span><span style="color:#B392F0;">Format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">);    </span><span style="color:#6A737D;">// 参数：表达式 yyyy-MM-dd HH:mm:ss</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 日期格式化</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> datestr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [Date对象].</span><span style="color:#6F42C1;">Format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">);    </span><span style="color:#6A737D;">// 参数：表达式 yyyy-MM-dd HH:mm:ss</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p><strong>例</strong>: 返回当前的 月 日 时 分</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> date </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> ret </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> date.</span><span style="color:#B392F0;">Format</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;MM dd HH mm&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 若当前时间为 2017-08-24 11:40:28，则ret为&quot;08 24 11 40&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> date </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ret </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> date.</span><span style="color:#6F42C1;">Format</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;MM dd HH mm&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 若当前时间为 2017-08-24 11:40:28，则ret为&quot;08 24 11 40&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h2 id="_3-1-4-3-日期常用api" tabindex="-1">3.1.4.3. 日期常用API <a class="header-anchor" href="#_3-1-4-3-日期常用api" aria-label="Permalink to &quot;3.1.4.3. 日期常用API&quot;">​</a></h2><p><strong>API</strong></p><ul><li><p>时间的转换</p><p>时间戳 --&gt; Date ： Date.parseDate([时间戳]);</p><p>Date --&gt; 时间戳 ：[Date对象].getTime();</p><p>时间字符串 --&gt; Date：new Date([时间字符串]);</p><p>Date --&gt; 时间字符串 ：[Date对象].Format([时间格式,如：yyyy-MM-dd HH:mm:ss]);</p><p>[Date对象].time(); -- 获取时间格式为“yyyy-MM-dd HH:mm:ss”的时间</p><p>[Date对象].date(); -- 获取时间格式为“yyyy-MM-dd”的时间</p></li><li><p>时间段的获取</p><p>今日：[Date对象].getDayBegin(); /[Date对象].getDayEnd();</p><p>昨日：[Date对象].getLastDayBegin(); / [Date对象].getLastDayEnd();</p><p>本周：[Date对象].getWeekBegin(); / [Date对象].getWeekEnd();</p><p>上周：[Date对象].getLastWeekBegin(); / [Date对象].getLastWeekEnd;</p><p>本月：[Date对象].getMonthBegin(); / [Date对象].getMonthEnd();</p><p>上月：[Date对象].getLastMonthBegin(); / [Date对象].getLastMonthEnd();</p><p>今年：[Date对象].getYearBegin(); / [Date对象].getYearEnd();</p><p>上年：[Date对象].getLastYearBegin(); / [Date对象].getLastYearEnd();</p><p>本季度：[Date对象].getQuarterBegin();/[Date对象].getQuarterEnd();</p></li></ul><hr><p><strong>例</strong>:获取某个时间的当天开始时间、结束时间</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> dt </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2018-01-01 12:12:12&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(dt.</span><span style="color:#B392F0;">getDayBegin</span><span style="color:#E1E4E8;">());</span><span style="color:#6A737D;">//2018-01-01 00:00:00</span></span>
<span class="line"><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(dt.</span><span style="color:#B392F0;">getDayEnd</span><span style="color:#E1E4E8;">());</span><span style="color:#6A737D;">//2018-01-01 23:59:59</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> dt </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2018-01-01 12:12:12&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(dt.</span><span style="color:#6F42C1;">getDayBegin</span><span style="color:#24292E;">());</span><span style="color:#6A737D;">//2018-01-01 00:00:00</span></span>
<span class="line"><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(dt.</span><span style="color:#6F42C1;">getDayEnd</span><span style="color:#24292E;">());</span><span style="color:#6A737D;">//2018-01-01 23:59:59</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr>`,18),o=[l];function t(r,c,y,i,d,E){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
