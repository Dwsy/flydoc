import{_ as s,c as a,o as e,U as i}from"./chunks/framework.K-r7inPk.js";const E=JSON.parse('{"title":"组织管理详情-上级组织配置优化","description":"","frontmatter":{"title":"组织管理详情-上级组织配置优化","date":"2021-04-20T11:23:14.000Z"},"headers":[],"relativePath":"doc/wpdoc/组织管理详情-上级组织配置优化.md","filePath":"doc/wpdoc/组织管理详情-上级组织配置优化.md"}'),t={name:"doc/wpdoc/组织管理详情-上级组织配置优化.md"},p=i('<h1 id="组织管理详情-上级组织配置优化" tabindex="-1">组织管理详情-上级组织配置优化 <a class="header-anchor" href="#组织管理详情-上级组织配置优化" aria-label="Permalink to &quot;组织管理详情-上级组织配置优化&quot;">​</a></h1><p>因用户权限限制用户不能查询到上级的组织，上级组织（树控件）增加配置可让其显示</p><p>配置方案：</p><p>ide表单-组织管理-事件：p-详情--初始化-flycode</p><p>在代码行为 <code>Page.getCtrl(&#39;p-上级组织&#39;).value = res.pl_orgstruct.parentorgid</code> 增加以下代码</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p-上级组织&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res.pl_orgstruct.parentorgname, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CtrlValueSetter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',6),n=[p];function l(r,d,h,o,_,c){return e(),a("div",null,n)}const g=s(t,[["render",l]]);export{E as __pageData,g as default};
