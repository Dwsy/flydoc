import{_ as i,c as s,o as t,U as a}from"./chunks/framework.K-r7inPk.js";const g=JSON.parse('{"title":"服务端拜访完整性配置文档","description":"","frontmatter":{"title":"服务端拜访完整性配置文档","date":"2023-06-15T11:25:42.000Z"},"headers":[],"relativePath":"doc/wpdoc/服务端拜访完整性配置文档.md","filePath":"doc/wpdoc/服务端拜访完整性配置文档.md"}'),e={name:"doc/wpdoc/服务端拜访完整性配置文档.md"},p=a('<h1 id="服务端拜访完整性配置文档-需要与手机端搭配使用-仅智慧100支持" tabindex="-1">服务端拜访完整性配置文档（需要与手机端搭配使用，仅智慧100支持） <a class="header-anchor" href="#服务端拜访完整性配置文档-需要与手机端搭配使用-仅智慧100支持" aria-label="Permalink to &quot;服务端拜访完整性配置文档（需要与手机端搭配使用，仅智慧100支持）&quot;">​</a></h1><p>文档V1.0</p><ul><li>action：新增</li><li>author：林晓辉</li><li>date：2021-11-25</li></ul><h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>​ 本文档仅适用于智慧100V6.0及以上版本的APP端（Android &amp; IOS），阅读对象为具备IDE开发、数据库操作能力的开发者，目的是让开发者能根据产品或项目需要，灵活配置项目在终端/渠道拜访过程中“是否需要在一天中，当上一个客户拜访完整流程结束后才能继续下一个流程”的业务开关。</p><h2 id="二、终端-渠道拜访完整配置" tabindex="-1">二、终端/渠道拜访完整配置 <a class="header-anchor" href="#二、终端-渠道拜访完整配置" aria-label="Permalink to &quot;二、终端/渠道拜访完整配置&quot;">​</a></h2><p>​ 1，数据库配置</p><p>​ 在租户业务库的表名： <code> `&lt;code&gt; pl_globalconfig&lt;/code&gt; ```中增加</code><code> CompetelyVisitSwitch</code>` 项配置，SQL 语句为：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INSERT INTO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pl_globalconfig&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;configtype&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;configjson&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;createtime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;updatetime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;902739923201822741&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CompetelyVisitSwitch&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;onoff&quot;:&quot;1&quot;}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2021-09-13 14:08:03&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2021-11-18 15:51:14.823&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>​ 效果示例如下图：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20211123160205574.png" alt="liahtform_ide"></p><p>​ configjson的值说明：<code>&lt;code class=&quot;kb-btn&quot;&gt; {&quot;onoff&quot;:&quot;0&quot;}&lt;/code&gt;</code><code> 代表关闭判断，</code><code>&lt;code class=&quot;kb-btn&quot;&gt; {&quot;onoff&quot;:&quot;1&quot;}&lt;/code&gt;</code> 代表开启判断（开启后将对终端和渠道客户同时生效）。</p><p>​ 2，领域接口说明</p><p>​ 手机端请求该数据的领域接口为【系统参数设置离线下载】，若为智慧100开户的其领域编码正常为 <code>&lt;code&gt; 996662361651810395&lt;/code&gt;</code>；</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20211125140601976.png" alt="liahtform_ide"></p><p>​ 在该领域接口中增加第1点中的<code>&lt;code&gt; CompetelyVisitSwitch&lt;/code&gt;</code> key查询和查询结果处理。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20211125141138278.png" alt="liahtform_ide"></p><p>​ 3，实现效果示例</p><p>​ 开启判断后页面效果如下，点击【取消】按钮停留当前页面，点击【确定】将跳转到提示语中未完成拜访的客户详情页面。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20211123160553213.png" alt="liahtform_ide"></p>',20),l=[p];function o(h,n,d,k,c,r){return t(),s("div",null,l)}const u=i(e,[["render",o]]);export{g as __pageData,u as default};
