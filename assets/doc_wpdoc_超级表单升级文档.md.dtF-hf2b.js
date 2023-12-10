import{_ as n,D as l,o as r,c as h,k as p,a as s,I as t,w as e,R as a}from"./chunks/framework.S1SDgkSw.js";const B=JSON.parse('{"title":"超级表单升级文档","description":"","frontmatter":{"title":"超级表单升级文档","date":"2023-06-15T10:44:41.000Z"},"headers":[],"relativePath":"doc/wpdoc/超级表单升级文档.md","filePath":"doc/wpdoc/超级表单升级文档.md"}'),d={name:"doc/wpdoc/超级表单升级文档.md"},o=a('<h1 id="超级表单升级文档-仅支持智慧100" tabindex="-1">超级表单升级文档(仅支持智慧100) <a class="header-anchor" href="#超级表单升级文档-仅支持智慧100" aria-label="Permalink to &quot;超级表单升级文档(仅支持智慧100)&quot;">​</a></h1><ul><li>编辑：陈畅</li><li>时间：2023-06-15</li><li>状态：已完成</li><li>适用范围：智慧100V6.2</li></ul><h2 id="一丶-部署服务包" tabindex="-1">一丶 部署服务包 <a class="header-anchor" href="#一丶-部署服务包" aria-label="Permalink to &quot;一丶 部署服务包&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">服务名</th><th style="text-align:center;">服务版本</th><th style="text-align:center;">归档路径</th></tr></thead><tbody><tr><td style="text-align:center;">web</td><td style="text-align:center;">V6.1.3(最低V6.0)</td><td style="text-align:center;"><a href="https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/web/web-V6.1.3.zip" target="_blank" rel="noreferrer">https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/web/web-V6.1.3.zip</a></td></tr><tr><td style="text-align:center;">lightform-web</td><td style="text-align:center;">V1.2.7</td><td style="text-align:center;"><a href="https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/lightform-web/lightform-web-(smart100-V1.2.7).zip" target="_blank" rel="noreferrer">https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/lightform-web/lightform-web-(smart100-V1.2.7).zip</a></td></tr><tr><td style="text-align:center;">lightform-configuration</td><td style="text-align:center;">V1.2.6</td><td style="text-align:center;"><a href="https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/lightform-configuration/lightform-configuration(smart100-V1.2.6).zip" target="_blank" rel="noreferrer">https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/lightform-configuration/lightform-configuration(smart100-V1.2.6).zip</a></td></tr><tr><td style="text-align:center;">litheform-service</td><td style="text-align:center;">V6.1.0</td><td style="text-align:center;"><a href="https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/litheform-service/litheform-service.zip" target="_blank" rel="noreferrer">https://xwsvn.wxchina.com/doc1/zhihui100/V6.1/%E7%A8%8B%E5%BA%8F%E5%8C%85/%E6%99%BA%E6%85%A7100%E7%A8%8B%E5%BA%8F%E5%8C%85/apaas/litheform-service/litheform-service.zip</a></td></tr></tbody></table><h2 id="二丶-脚本资源部署" tabindex="-1">二丶 脚本资源部署 <a class="header-anchor" href="#二丶-脚本资源部署" aria-label="Permalink to &quot;二丶 脚本资源部署&quot;">​</a></h2><h3 id="_2-1-超级表单表结构同步" tabindex="-1">2.1 超级表单表结构同步 <a class="header-anchor" href="#_2-1-超级表单表结构同步" aria-label="Permalink to &quot;2.1 超级表单表结构同步&quot;">​</a></h3><h4 id="_2-1-1-表清单" tabindex="-1">2.1.1 表清单 <a class="header-anchor" href="#_2-1-1-表清单" aria-label="Permalink to &quot;2.1.1 表清单&quot;">​</a></h4><table><thead><tr><th style="text-align:center;">数据表</th><th style="text-align:center;">名称</th></tr></thead><tbody><tr><td style="text-align:center;">pl_form</td><td style="text-align:center;">超级表单配置协议</td></tr><tr><td style="text-align:center;">pl_formprotocol</td><td style="text-align:center;">超级表单运行时协议</td></tr><tr><td style="text-align:center;">pl_formsubmit</td><td style="text-align:center;">超级表单提交记录</td></tr><tr><td style="text-align:center;">pl_formversion</td><td style="text-align:center;">超级表单协议版本</td></tr><tr><td style="text-align:center;">pl_formrelation</td><td style="text-align:center;">超级表单关系</td></tr><tr><td style="text-align:center;">pl_module</td><td style="text-align:center;">超级表单模块定义</td></tr><tr><td style="text-align:center;">pl_roleformauth</td><td style="text-align:center;">超级表单授权</td></tr></tbody></table><h4 id="_2-1-2-表结构同步脚本" tabindex="-1">2.1.2 表结构同步脚本 <a class="header-anchor" href="#_2-1-2-表结构同步脚本" aria-label="Permalink to &quot;2.1.2 表结构同步脚本&quot;">​</a></h4><p><a href="http://apaas.wxchina.com:8881/wp-content/uploads/super_page_sql-pl.pdf" target="_blank" rel="noreferrer">super_page_sql -pl_sql</a></p><h4 id="_2-1-3-基础数据同步脚本" tabindex="-1">2.1.3 基础数据同步脚本 <a class="header-anchor" href="#_2-1-3-基础数据同步脚本" aria-label="Permalink to &quot;2.1.3 基础数据同步脚本&quot;">​</a></h4><p><a href="http://apaas.wxchina.com:8881/wp-content/uploads/litheform_view.pdf" target="_blank" rel="noreferrer">litheform_view_sql</a></p><h3 id="_2-2-超级表单导航接入" tabindex="-1">2.2 超级表单导航接入 <a class="header-anchor" href="#_2-2-超级表单导航接入" aria-label="Permalink to &quot;2.2 超级表单导航接入&quot;">​</a></h3><p>目前超级表单的入口放在职位切换这里，目前入口设计是通过web端在前端定义好了表单资源定义，然后职位有这个表单的功能点即可包含超级表单入口。接入导航有两步：</p><ul><li>在IDE创建一个超级表单资源</li><li>在授权功能那里加一个关联超级表单的功能配置</li></ul><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/lightform_ide_place.png" alt="liahtform_ide"></p><h4 id="_2-2-1-超级表单的表单元数据导入" tabindex="-1">2.2.1 超级表单的表单元数据导入 <a class="header-anchor" href="#_2-2-1-超级表单的表单元数据导入" aria-label="Permalink to &quot;2.2.1 超级表单的表单元数据导入&quot;">​</a></h4><p>卡士uat环境已经导入</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/lightform_ide_place1.png" alt="liahtform_ide1"></p><p><a href="http://apaas.wxchina.com:8881/wp-content/uploads/super_page_pagemeta_json.pdf" target="_blank" rel="noreferrer">super_page_pagemeta_json</a></p><h4 id="_2-2-2-超级表单的入口功能点配置" tabindex="-1">2.2.2 超级表单的入口功能点配置 <a class="header-anchor" href="#_2-2-2-超级表单的入口功能点配置" aria-label="Permalink to &quot;2.2.2 超级表单的入口功能点配置&quot;">​</a></h4>',21),c=a(`<p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/lightform_ide_enterce.png" alt="lightform_ide_enterce"></p><h3 id="_2-3-nacos配置部署" tabindex="-1">2.3 Nacos配置部署 <a class="header-anchor" href="#_2-3-nacos配置部署" aria-label="Permalink to &quot;2.3 Nacos配置部署&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ID:litheform</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Group:DEFAULT_GROUP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">配置内容：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server.queryTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/nacos_setting.png" alt="nacos_setting"></p><h3 id="_2-4-nginx配置部署" tabindex="-1">2.4 Nginx配置部署 <a class="header-anchor" href="#_2-4-nginx配置部署" aria-label="Permalink to &quot;2.4 Nginx配置部署&quot;">​</a></h3>`,5),k=a(`<div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /litheform_web/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           alias</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/apaas/lightform_web/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lightform_web/index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /litheform_config/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           alias</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/apaas/lightform_config/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lightform_config/index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,1),E=a(`<p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/lightform_service_set.png" alt="lightform_service_set"></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~^/api/teapi/litheformserv/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $jwtok </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ss_tenant_code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ss_account_code </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    access_by_lua_file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/usr/local/openresty/nginx/scripts/apaas_jwtdecode_withoutcheck.lua&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://litheformserv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^/api/teapi/litheformserv/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/litheformserv/</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,2);function g(_,m,u,F,b,y){const i=l("font");return r(),h("div",null,[o,p("p",null,[s("在个人信息维护和管理员默认平台插入功能点（"),t(i,null,{default:e(()=>[s("可按照项目需要自定义配置")]),_:1}),s("），关联【2.2.1】步骤导入的超级表单资源")]),c,t(i,null,{default:e(()=>[s("web端路由配置")]),_:1}),s("：在nginx.config文件的/7000端口下新增如下配置"),k,t(i,null,{default:e(()=>[s("超级表单后台服务配置")]),_:1}),s("：在apaas_location.conf文件里面新增如下配置,作为超级表单后端服务的入口"),E])}const x=n(d,[["render",g]]);export{B as __pageData,x as default};
