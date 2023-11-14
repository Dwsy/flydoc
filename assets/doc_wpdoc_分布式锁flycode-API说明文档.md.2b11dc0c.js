import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aac09c5f.js";const u=JSON.parse('{"title":"分布式锁flycode-API说明文档","description":"","frontmatter":{"title":"分布式锁flycode-API说明文档","date":"2023-07-27T10:40:48.000Z"},"headers":[],"relativePath":"doc/wpdoc/分布式锁flycode-API说明文档.md","filePath":"doc/wpdoc/分布式锁flycode-API说明文档.md"}'),p={name:"doc/wpdoc/分布式锁flycode-API说明文档.md"},e=l(`<h1 id="分布式锁flycode-api文档" tabindex="-1">分布式锁flycode-API文档 <a class="header-anchor" href="#分布式锁flycode-api文档" aria-label="Permalink to &quot;分布式锁flycode-API文档&quot;">​</a></h1><h2 id="api说明" tabindex="-1">API说明 <a class="header-anchor" href="#api说明" aria-label="Permalink to &quot;API说明&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 锁单对象，若锁对象被其他线程持有，则会阻塞等待</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参 </span></span>
<span class="line"><span style="color:#6A737D;">//  objname:string 锁对象名，如:&#39;订单id&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(objname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 锁对象数组，同步操作，遍历objnames竞争锁，若遇到锁对象被其他线程持有，则会阻塞等待</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objnames:string[] 对象数组-字符串数组，如:[&#39;订单id1&#39;, &#39;订单id2&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayLock</span><span style="color:#E1E4E8;">(objnames);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 锁单对象，立即返回</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objname:string 锁对象名，如:&#39;订单id&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 若竞争到锁返回true，否则返回false</span></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">tryLock</span><span style="color:#E1E4E8;">(objname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 锁对象数组，立即返回</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objnames:string[] 对象数组-字符串数组，如:[&#39;订单id1&#39;, &#39;订单id2&#39;, &#39;订单id3&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 返回可竞争到锁的对象数组，如:竞争到订单id1和订单id3，则返回[&#39;订单id1&#39;,&#39;订单id3&#39;]</span></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayTryLock</span><span style="color:#E1E4E8;">(objnames);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解锁单对象</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objname: 锁对象名-字符串，如:&#39;订单id&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">unlock</span><span style="color:#E1E4E8;">(objname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解锁对象数组</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objnames:string[] 对象数组-字符串数组，如:[&#39;订单id1&#39;, &#39;订单id2&#39;, &#39;订单id3&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayUnlock</span><span style="color:#E1E4E8;">(objnames);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 锁单对象，若锁对象被其他线程持有，则会阻塞等待</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参 </span></span>
<span class="line"><span style="color:#6A737D;">//  objname:string 锁对象名，如:&#39;订单id&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(objname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 锁对象数组，同步操作，遍历objnames竞争锁，若遇到锁对象被其他线程持有，则会阻塞等待</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objnames:string[] 对象数组-字符串数组，如:[&#39;订单id1&#39;, &#39;订单id2&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayLock</span><span style="color:#24292E;">(objnames);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 锁单对象，立即返回</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objname:string 锁对象名，如:&#39;订单id&#39;</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 若竞争到锁返回true，否则返回false</span></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">tryLock</span><span style="color:#24292E;">(objname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 锁对象数组，立即返回</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objnames:string[] 对象数组-字符串数组，如:[&#39;订单id1&#39;, &#39;订单id2&#39;, &#39;订单id3&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 返回可竞争到锁的对象数组，如:竞争到订单id1和订单id3，则返回[&#39;订单id1&#39;,&#39;订单id3&#39;]</span></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayTryLock</span><span style="color:#24292E;">(objnames);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解锁单对象</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objname: 锁对象名-字符串，如:&#39;订单id&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">unlock</span><span style="color:#24292E;">(objname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解锁对象数组</span></span>
<span class="line"><span style="color:#6A737D;">// </span></span>
<span class="line"><span style="color:#6A737D;">// 入参</span></span>
<span class="line"><span style="color:#6A737D;">//  objnames:string[] 对象数组-字符串数组，如:[&#39;订单id1&#39;, &#39;订单id2&#39;, &#39;订单id3&#39;]</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// 无返回</span></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayUnlock</span><span style="color:#24292E;">(objnames);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><h3 id="示例1-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-同步等待" tabindex="-1">示例1，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（同步等待）: <a class="header-anchor" href="#示例1-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-同步等待" aria-label="Permalink to &quot;示例1，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（同步等待）:&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 订单审核</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> orderId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.order.orderid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(orderId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理订单审批通过的业务逻辑</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">unlock</span><span style="color:#E1E4E8;">(orderId);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 订单审核</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> orderId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.order.orderid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(orderId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理订单审批通过的业务逻辑</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">unlock</span><span style="color:#24292E;">(orderId);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 订单取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> orderId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.order.orderid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(orderId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">unlock</span><span style="color:#E1E4E8;">(orderId);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 订单取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> orderId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.order.orderid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(orderId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">unlock</span><span style="color:#24292E;">(orderId);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="示例2-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-立即返回" tabindex="-1">示例2，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（立即返回）: <a class="header-anchor" href="#示例2-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-立即返回" aria-label="Permalink to &quot;示例2，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（立即返回）:&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 订单取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> orderId </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.order.orderid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> ret </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">tryLock</span><span style="color:#E1E4E8;">(orderId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(ret) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">unlock</span><span style="color:#E1E4E8;">(orderId);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ERROR</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;该订单正在被其他人操作，请稍等后，刷新再试&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 订单取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> orderId </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.order.orderid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> ret </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">tryLock</span><span style="color:#24292E;">(orderId);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(ret) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">unlock</span><span style="color:#24292E;">(orderId);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ERROR</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;该订单正在被其他人操作，请稍等后，刷新再试&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="示例3-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-批量操作" tabindex="-1">示例3，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（批量操作）: <a class="header-anchor" href="#示例3-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-批量操作" aria-label="Permalink to &quot;示例3，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（批量操作）:&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 订单批量取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> orderIds </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseIds</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.order);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayLock</span><span style="color:#E1E4E8;">(orderIds);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayUnlock</span><span style="color:#E1E4E8;">(orderId);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 订单批量取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> orderIds </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseIds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.order);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayLock</span><span style="color:#24292E;">(orderIds);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayUnlock</span><span style="color:#24292E;">(orderId);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="示例4-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-批量操作-立即返回" tabindex="-1">示例4，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（批量操作，立即返回）: <a class="header-anchor" href="#示例4-订单审批通过的同时-其他人对订单做取消-需要做加锁处理-批量操作-立即返回" aria-label="Permalink to &quot;示例4，订单审批通过的同时，其他人对订单做取消，需要做加锁处理（批量操作，立即返回）:&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 订单批量取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> orderIds </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseIds</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.order);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> rets </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayTryLock</span><span style="color:#E1E4E8;">(orderIds);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(rets.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> orderIds.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 说明没有全部获得锁</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ERROR</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;正在被其他人操作，请稍等后，刷新再试:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">arrayDiff</span><span style="color:#E1E4E8;">(orderIds, rets));</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">LOCK</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">arrayUnlock</span><span style="color:#E1E4E8;">(rets);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 订单批量取消</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入参传入订单id</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> orderIds </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseIds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.order);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> rets </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayTryLock</span><span style="color:#24292E;">(orderIds);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(rets.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> orderIds.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 说明没有全部获得锁</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ERROR</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;正在被其他人操作，请稍等后，刷新再试:&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">arrayDiff</span><span style="color:#24292E;">(orderIds, rets));</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 处理订单取消的业务逻辑</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">LOCK</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">arrayUnlock</span><span style="color:#24292E;">(rets);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,12),o=[e];function r(c,t,i,y,E,b){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
