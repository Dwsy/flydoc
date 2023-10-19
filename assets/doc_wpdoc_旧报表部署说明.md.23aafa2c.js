import{_ as n,o as s,c as a,Q as e}from"./chunks/framework.d084db19.js";const m=JSON.parse('{"title":"旧报表部署说明","description":"","frontmatter":{"title":"旧报表部署说明","date":"2023-08-31T17:52:56.000Z"},"headers":[],"relativePath":"doc/wpdoc/旧报表部署说明.md","filePath":"doc/wpdoc/旧报表部署说明.md"}'),l={name:"doc/wpdoc/旧报表部署说明.md"},p=e(`<h2 id="旧报表兼容" tabindex="-1">旧报表兼容 <a class="header-anchor" href="#旧报表兼容" aria-label="Permalink to &quot;旧报表兼容&quot;">​</a></h2><h3 id="依赖说明" tabindex="-1">依赖说明 <a class="header-anchor" href="#依赖说明" aria-label="Permalink to &quot;依赖说明&quot;">​</a></h3><ul><li>IDE服务 （ideserv） v2.12.4</li><li>云化版IDE （ideweb） V5.1.0</li><li>旧报表 (oldreport) V1.3.6</li></ul><h3 id="更新说明" tabindex="-1">更新说明 <a class="header-anchor" href="#更新说明" aria-label="Permalink to &quot;更新说明&quot;">​</a></h3><p>此更新是为了在云化版上使用旧报表功能。</p><h3 id="部署说明" tabindex="-1">部署说明 <a class="header-anchor" href="#部署说明" aria-label="Permalink to &quot;部署说明&quot;">​</a></h3><p>云化旧报表的部署设置到 平台中心的权限 云化路由及旧报表的部署和具体环境的跨域配置</p><h4 id="平台中心的权限" tabindex="-1">平台中心的权限 <a class="header-anchor" href="#平台中心的权限" aria-label="Permalink to &quot;平台中心的权限&quot;">​</a></h4><p>在xw_plat_env补充旧报表的权限</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">--cmdb_platmenu</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#e1e4e8;">status,seq,url,icon) values(666612345678920009,null,1,&#39;统计报表&#39;,1,1,10,null,null);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#e1e4e8;">status,seq,url,icon) values(666612345678920901,666612345678920009,1,&#39;数据维度&#39;,2,1,1,null,null);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#e1e4e8;">status,seq,url,icon) values(666612345678920902,666612345678920009,1,&#39;报表主题&#39;,2,1,2,null,null);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#e1e4e8;">status,seq,url,icon) values(666612345678920903,666612345678920009,1,&#39;数据抽取&#39;,2,1,3,null,null);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#e1e4e8;">status,seq,url,icon) values(666612345678920904,666612345678920009,1,&#39;报表配置&#39;,2,1,4,null,null);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">--cmdb_platfunction</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888814000001,&#39;查看&#39;,1,&#39;统计报表&#39;,1,1,666612345678920009,&#39;bioldreport&#39;,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000001,&#39;新建&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimadd&#39;,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000002,&#39;编辑(保存)&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimsave&#39;,2);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000003,&#39;删除&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimdel&#39;,3);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000004,&#39;发布到数据库&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimpub&#39;,4);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000005,&#39;实体映射&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimmap&#39;,5);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000006,&#39;取消映射&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimmapcancel&#39;,6);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000007,&#39;导入&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimimp&#39;,7);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000008,&#39;导出&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimexp&#39;,8);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000001,&#39;新建&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemeadd&#39;,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000002,&#39;编辑(保存)&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemesave&#39;,2);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000003,&#39;删除&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemedel&#39;,3);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000004,&#39;发布到数据库&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemepub&#39;,4);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000005,&#39;导入&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemeimp&#39;,5);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000006,&#39;导出&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemeexp&#39;,6);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000001,&#39;新建&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietladd&#39;,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000002,&#39;编辑(保存)&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietlsave&#39;,2);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000003,&#39;删除&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietldel&#39;,3);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000004,&#39;任务调度&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietldp&#39;,4);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000005,&#39;导入&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietlimp&#39;,5);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000006,&#39;导出&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietlexp&#39;,6);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000001,&#39;新建&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpadd&#39;,1);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000002,&#39;编辑(保存)&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpsave&#39;,2);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000003,&#39;删除&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpdel&#39;,3);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000004,&#39;导入&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpimp&#39;,4);</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000005,&#39;导出&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpexp&#39;,5);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">--cmdb_platmenu</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#24292e;">status,seq,url,icon) values(666612345678920009,null,1,&#39;统计报表&#39;,1,1,10,null,null);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#24292e;">status,seq,url,icon) values(666612345678920901,666612345678920009,1,&#39;数据维度&#39;,2,1,1,null,null);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#24292e;">status,seq,url,icon) values(666612345678920902,666612345678920009,1,&#39;报表主题&#39;,2,1,2,null,null);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#24292e;">status,seq,url,icon) values(666612345678920903,666612345678920009,1,&#39;数据抽取&#39;,2,1,3,null,null);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platmenu (platmenucode,parentmenucode,platapplicationcode,platmenuname,level,</span></span>
<span class="line"><span style="color:#24292e;">status,seq,url,icon) values(666612345678920904,666612345678920009,1,&#39;报表配置&#39;,2,1,4,null,null);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">--cmdb_platfunction</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888814000001,&#39;查看&#39;,1,&#39;统计报表&#39;,1,1,666612345678920009,&#39;bioldreport&#39;,1);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000001,&#39;新建&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimadd&#39;,1);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000002,&#39;编辑(保存)&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimsave&#39;,2);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000003,&#39;删除&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimdel&#39;,3);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000004,&#39;发布到数据库&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimpub&#39;,4);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000005,&#39;实体映射&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimmap&#39;,5);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000006,&#39;取消映射&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimmapcancel&#39;,6);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000007,&#39;导入&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimimp&#39;,7);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888884000008,&#39;导出&#39;,1,&#39;数据维度&#39;,1,1,666612345678920901,&#39;bidimexp&#39;,8);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000001,&#39;新建&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemeadd&#39;,1);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000002,&#39;编辑(保存)&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemesave&#39;,2);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000003,&#39;删除&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemedel&#39;,3);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000004,&#39;发布到数据库&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemepub&#39;,4);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000005,&#39;导入&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemeimp&#39;,5);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888885000006,&#39;导出&#39;,1,&#39;报表主题&#39;,1,1,666612345678920902,&#39;bithemeexp&#39;,6);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000001,&#39;新建&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietladd&#39;,1);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000002,&#39;编辑(保存)&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietlsave&#39;,2);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000003,&#39;删除&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietldel&#39;,3);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000004,&#39;任务调度&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietldp&#39;,4);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000005,&#39;导入&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietlimp&#39;,5);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888886000006,&#39;导出&#39;,1,&#39;数据抽取&#39;,1,1,666612345678920903,&#39;bietlexp&#39;,6);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000001,&#39;新建&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpadd&#39;,1);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000002,&#39;编辑(保存)&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpsave&#39;,2);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000003,&#39;删除&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpdel&#39;,3);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000004,&#39;导入&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpimp&#39;,4);</span></span>
<span class="line"><span style="color:#24292e;">insert into cmdb_platfunction (platfunctioncode,platfunctionname,category,platfunctiondescr,platapplicationcode,controlobjecttype,controlobjectcode,platfunctionidentify,seq) values(6668888887000005,&#39;导出&#39;,1,&#39;报表配置&#39;,1,1,666612345678920904,&#39;birpexp&#39;,5);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h4 id="云化路由及旧报表的部署" tabindex="-1">云化路由及旧报表的部署 <a class="header-anchor" href="#云化路由及旧报表的部署" aria-label="Permalink to &quot;云化路由及旧报表的部署&quot;">​</a></h4><p>补充旧报表的路由，跟前端商议过，敲定了oldreport前缀，不可更改</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">user  nginx;</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">error_log  /var/log/nginx/error.log notice;</span></span>
<span class="line"><span style="color:#e1e4e8;">pid        /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    expires         -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    sendfile        on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive_timeout  120;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_buffer_size 20m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_buffers 4 20m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_busy_buffers_size 20m;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_temp_file_write_size 20m;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip  on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip_min_length 102480;</span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip_buffers 4 8k;</span></span>
<span class="line"><span style="color:#e1e4e8;">    gzip_types text/plain application/x-JavaScript text/css application/xml application/json application/javascript application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">      listen  9000;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      location ~ ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_pass $1://$2:$3;</span></span>
<span class="line"><span style="color:#e1e4e8;">        sub_filter &#39;&lt;/noscript&gt;&#39; &#39;&lt;/noscript&gt;&lt;script src=&quot;/static/preview-script/preview_script_before.js&quot;&gt;&lt;/script&gt;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        sub_filter &#39;&lt;/body&gt;&#39; &#39;&lt;script src=&quot;/static/preview-script/preview_script_after.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        rewrite ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) $4/$5 break;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">          root   /home/center/ideweb;</span></span>
<span class="line"><span style="color:#e1e4e8;">          try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 旧报表兼容start</span></span>
<span class="line"><span style="color:#e1e4e8;">      location /oldreport/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">          alias /home/center/oldreport/;</span></span>
<span class="line"><span style="color:#e1e4e8;">          try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 旧报表兼容end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">user  nginx;</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  auto;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">error_log  /var/log/nginx/error.log notice;</span></span>
<span class="line"><span style="color:#24292e;">pid        /var/run/nginx.pid;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    include       /etc/nginx/mime.types;</span></span>
<span class="line"><span style="color:#24292e;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    expires         -1;</span></span>
<span class="line"><span style="color:#24292e;">    sendfile        on;</span></span>
<span class="line"><span style="color:#24292e;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout  120;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    proxy_buffer_size 20m;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_buffers 4 20m;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_busy_buffers_size 20m;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_temp_file_write_size 20m;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    gzip  on;</span></span>
<span class="line"><span style="color:#24292e;">    gzip_http_version 1.0;</span></span>
<span class="line"><span style="color:#24292e;">    gzip_min_length 102480;</span></span>
<span class="line"><span style="color:#24292e;">    gzip_buffers 4 8k;</span></span>
<span class="line"><span style="color:#24292e;">    gzip_types text/plain application/x-JavaScript text/css application/xml application/json application/javascript application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">      listen  9000;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      location ~ ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) {</span></span>
<span class="line"><span style="color:#24292e;">        proxy_pass $1://$2:$3;</span></span>
<span class="line"><span style="color:#24292e;">        sub_filter &#39;&lt;/noscript&gt;&#39; &#39;&lt;/noscript&gt;&lt;script src=&quot;/static/preview-script/preview_script_before.js&quot;&gt;&lt;/script&gt;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        sub_filter &#39;&lt;/body&gt;&#39; &#39;&lt;script src=&quot;/static/preview-script/preview_script_after.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        rewrite ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) $4/$5 break;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      location / {</span></span>
<span class="line"><span style="color:#24292e;">          root   /home/center/ideweb;</span></span>
<span class="line"><span style="color:#24292e;">          try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      # 旧报表兼容start</span></span>
<span class="line"><span style="color:#24292e;">      location /oldreport/ {</span></span>
<span class="line"><span style="color:#24292e;">          alias /home/center/oldreport/;</span></span>
<span class="line"><span style="color:#24292e;">          try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">      # 旧报表兼容end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h4 id="跨域配置" tabindex="-1">跨域配置 <a class="header-anchor" href="#跨域配置" aria-label="Permalink to &quot;跨域配置&quot;">​</a></h4><p>在平台V4.0的路由上，在ide_location.conf下增加路由配置<br> 完整的文件可以在SVN(<a href="https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.%E5%8F%91%E5%B8%83%E9%98%B6%E6%AE%B5/%E8%B7%AF%E7%94%B1/one/scripts/config/ide_location.conf" target="_blank" rel="noreferrer">https://xwsvn.wxchina.com/doc1/aPaaS/V5.1/5.发布阶段/路由/one/scripts/config/ide_location.conf)上查看</a>上查看)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">location /platserv/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # IDE云化兼容旧报表 start</span></span>
<span class="line"><span style="color:#e1e4e8;">    if ( $upstream_http_Access-Control-Allow-Origin = &#39;&#39;){</span></span>
<span class="line"><span style="color:#e1e4e8;">        more_set_headers &quot;Access-Control-Allow-Origin *&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    # IDE云化兼容旧报表 end</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_pass http://apaasadmin/;       </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">#报表引擎 start</span></span>
<span class="line"><span style="color:#e1e4e8;">location /biengine/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # IDE云化兼容旧报表 start</span></span>
<span class="line"><span style="color:#e1e4e8;">    if ( $upstream_http_Access-Control-Allow-Origin = &#39;&#39;){</span></span>
<span class="line"><span style="color:#e1e4e8;">        more_set_headers &quot;Access-Control-Allow-Origin *&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    # IDE云化兼容旧报表 end</span></span>
<span class="line"><span style="color:#e1e4e8;">   proxy_pass http://reportserv/;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">#报表引擎 end</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">location /platserv/ {</span></span>
<span class="line"><span style="color:#24292e;">    # IDE云化兼容旧报表 start</span></span>
<span class="line"><span style="color:#24292e;">    if ( $upstream_http_Access-Control-Allow-Origin = &#39;&#39;){</span></span>
<span class="line"><span style="color:#24292e;">        more_set_headers &quot;Access-Control-Allow-Origin *&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    # IDE云化兼容旧报表 end</span></span>
<span class="line"><span style="color:#24292e;">    proxy_pass http://apaasadmin/;       </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">#报表引擎 start</span></span>
<span class="line"><span style="color:#24292e;">location /biengine/ {</span></span>
<span class="line"><span style="color:#24292e;">    # IDE云化兼容旧报表 start</span></span>
<span class="line"><span style="color:#24292e;">    if ( $upstream_http_Access-Control-Allow-Origin = &#39;&#39;){</span></span>
<span class="line"><span style="color:#24292e;">        more_set_headers &quot;Access-Control-Allow-Origin *&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    # IDE云化兼容旧报表 end</span></span>
<span class="line"><span style="color:#24292e;">   proxy_pass http://reportserv/;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">#报表引擎 end</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,16),t=[p];function o(c,i,r,u,d,b){return s(),a("div",null,t)}const f=n(l,[["render",o]]);export{m as __pageData,f as default};
