import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.aac09c5f.js";const y=JSON.parse('{"title":"人员详情管理-配置错误优化（v9.4","description":"","frontmatter":{"title":"人员详情管理-配置错误优化（v9.4","date":"2021-04-21T13:36:12.000Z"},"headers":[],"relativePath":"doc/wpdoc/人员详情管理-配置错误优化（v9.4.md","filePath":"doc/wpdoc/人员详情管理-配置错误优化（v9.4.md"}'),l={name:"doc/wpdoc/人员详情管理-配置错误优化（v9.4.md"},e=p(`<h3 id="人员详情管理-配置错误优化-v9-4" tabindex="-1">人员详情管理-配置错误优化（v9.4） <a class="header-anchor" href="#人员详情管理-配置错误优化-v9-4" aria-label="Permalink to &quot;人员详情管理-配置错误优化（v9.4）&quot;">​</a></h3><p>手机号查询，邮箱回显数据显示错误解决办法</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.pl_userinfo.email  </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 邮箱</span></span>
<span class="line"><span style="color:#E1E4E8;">    Page.</span><span style="color:#B392F0;">getCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;form_email&#39;</span><span style="color:#E1E4E8;">).value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res.pl_userinfo.email</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.pl_userinfo.email  </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 邮箱</span></span>
<span class="line"><span style="color:#24292E;">    Page.</span><span style="color:#6F42C1;">getCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;form_email&#39;</span><span style="color:#24292E;">).value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res.pl_userinfo.email</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%BA%E5%91%98%E8%AF%A6%E6%83%85%E7%AE%A1%E7%90%86-%E9%85%8D%E7%BD%AE%E9%94%99%E8%AF%AF%E4%BC%98%E5%8C%961.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%BA%E5%91%98%E8%AF%A6%E6%83%85%E7%AE%A1%E7%90%86-%E9%85%8D%E7%BD%AE%E9%94%99%E8%AF%AF%E4%BC%98%E5%8C%962.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%BA%E5%91%98%E8%AF%A6%E6%83%85%E7%AE%A1%E7%90%86-%E9%85%8D%E7%BD%AE%E9%94%99%E8%AF%AF%E4%BC%98%E5%8C%963.png" alt=""></p>`,6),o=[e];function t(c,r,E,i,_,d){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{y as __pageData,m as default};
