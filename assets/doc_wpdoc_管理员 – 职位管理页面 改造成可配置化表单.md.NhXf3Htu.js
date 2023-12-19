import{_ as l,o as a,c as t,R as i}from"./chunks/framework.E9w9IFh5.js";const q=JSON.parse('{"title":"管理员 – 职位管理页面 改造成可配置化表单","description":"","frontmatter":{"title":"管理员 – 职位管理页面 改造成可配置化表单","date":"2021-11-17T15:25:00.000Z"},"headers":[],"relativePath":"doc/wpdoc/管理员 – 职位管理页面 改造成可配置化表单.md","filePath":"doc/wpdoc/管理员 – 职位管理页面 改造成可配置化表单.md"}'),e={name:"doc/wpdoc/管理员 – 职位管理页面 改造成可配置化表单.md"},o=i('<h1 id="管理员-帐号管理页面-改造成可配置化表单" tabindex="-1">管理员 - 帐号管理页面 改造成可配置化表单 <a class="header-anchor" href="#管理员-帐号管理页面-改造成可配置化表单" aria-label="Permalink to &quot;管理员 - 帐号管理页面 改造成可配置化表单&quot;">​</a></h1><p>帐号管理页面由二开页面转为可配置表单页面，支持实施修改。</p><h2 id="版本要求" tabindex="-1">版本要求 <a class="header-anchor" href="#版本要求" aria-label="Permalink to &quot;版本要求&quot;">​</a></h2><ul><li>web端引擎(V9.6.0+)</li><li>IDE(V3.4.0+)</li><li>账号服务(accountserv)(v2.10.0+)</li></ul><h2 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h2><p>该功能为个性化功能，默认不开启，如需要，配置方式如下：</p><h3 id="领域与表单" tabindex="-1">领域与表单 <a class="header-anchor" href="#领域与表单" aria-label="Permalink to &quot;领域与表单&quot;">​</a></h3><p>1.下载对应的tag标签文件<a href="http://apaas.wxchina.com:8881/wp-content/uploads/metadata_20220727190732.zip" title="metadata_20220727190732" target="_blank" rel="noreferrer">职位管理可配置</a>，标签内容如下：</p><ul><li>【获取职位应用组织数据】(数据请求)</li><li>【组织管理组织查询(公用)】(数据请求)</li><li>【单个职位设置应用组织】(数据提交)</li><li>【职位列表查询】(数据请求)</li><li>【新增职位】(数据提交)</li><li>【职位复制】(数据提交)</li><li>【删除职位】(flycode调用)</li><li>【启用职位】(flycode调用)</li><li>【停用职位】(flycode调用)</li><li>【职位管理plus-可配置】(可配置主页面)</li><li>【职位管理-权限设置】(链接二开页面)</li><li>【职位管理plus-可配置-设置应用组织】(链接可配置页面)</li><li>【职位管理plus-可配置-职位信息】(链接可配置页面)</li><li>【职位管理plus-可配置-职位复制】(链接可配置页面)</li></ul><p>2.在对应租户‘tag标签管理’中导入zip文件即可在该租户获得对应的表单以及接口</p><h3 id="导航与功能" tabindex="-1">导航与功能 <a class="header-anchor" href="#导航与功能" aria-label="Permalink to &quot;导航与功能&quot;">​</a></h3><p>1.在IDE上进入导航配置页(配置管理-功能配置-勾选全产品包(无AI)-SFA-打开导航配置)，找到&quot;职位管理&quot;菜单，改成新导入的【职位管理plus-可配置】页面。<br> 2.在IDE上进入关联功能页(配置管理-功能配置-勾选全产品包(无AI)-SFA-打开关联功能)，找到&quot;管理员默认权限(平台)&quot;菜单，关联以下页面：</p><ul><li>&quot;职位管理plus-可配置&quot;</li><li>&quot;职位管理plus-可配置-职位信息&quot;</li><li>&quot;职位管理plus-可配置-职位复制&quot;</li><li>&quot;职位管理plus-可配置-设置应用组织&quot;</li><li>&quot;职位管理plus-权限设置&quot;<br> 3.刷新页面，即可看到&quot;职位管理&quot;页面变成可配置化。</li></ul>',13),r=[o];function _(u,s,c,d,p,n){return a(),t("div",null,r)}const f=l(e,[["render",_]]);export{q as __pageData,f as default};
