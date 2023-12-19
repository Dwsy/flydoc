import{_ as t,o as e,c as l,R as a}from"./chunks/framework.E9w9IFh5.js";const E=JSON.parse('{"title":"预算配置说明文档（v6.2）","description":"","frontmatter":{"title":"预算配置说明文档（v6.2）","date":"2023-05-31T19:45:16.000Z"},"headers":[],"relativePath":"doc/wpdoc/预算配置说明文档（v6.2）.md","filePath":"doc/wpdoc/预算配置说明文档（v6.2）.md"}'),d={name:"doc/wpdoc/预算配置说明文档（v6.2）.md"},i=a('<h1 id="预算配置说明文档-v6-2" tabindex="-1">预算配置说明文档（v6.2） <a class="header-anchor" href="#预算配置说明文档-v6-2" aria-label="Permalink to &quot;预算配置说明文档（v6.2）&quot;">​</a></h1><ul><li><p>编辑：钟晓仕、俞允</p></li><li><p>时间：2022-05-31</p></li><li><p>状态：已完成</p></li><li><p>适用范围：智慧100V6.2</p></li><li><p><a href="#预算配置说明文档v62">预算配置说明文档（v6.2）</a></p><ul><li><p><a href="#一功能介绍">一、功能介绍</a></p></li><li><p><a href="#二如何配置">二、如何配置</a></p></li><li><p><a href="#21-预算全局设置">2.1 预算全局设置</a></p></li><li><p><a href="#22-预算维度配置">2.2 预算维度配置</a></p><ul><li><a href="#221-新增预算维度">2.2.1 新增预算维度</a></li><li><a href="#222-发布预算维度">2.2.2 发布预算维度</a></li></ul></li><li><p><a href="#23-预算表配置">2.3 预算表配置</a></p><ul><li><a href="#231-新增预算表">2.3.1 新增预算表</a></li><li><a href="#232-发布预算表">2.3.2 发布预算表</a></li></ul></li></ul></li></ul><h2 id="一、功能介绍" tabindex="-1">一、功能介绍 <a class="header-anchor" href="#一、功能介绍" aria-label="Permalink to &quot;一、功能介绍&quot;">​</a></h2><p>营销费用管控系统（TPM）主要是管控预算和费用的系统，其中预算是不可或缺的一部分，然而不同客户对预算有各自的理解与需求。实施要根据客户需求定制化开发，无法复用。现在通过收集大部分客户需求，智慧100现在提供预算配置功能。该功能通过新增不同预算表，支持配置预算类型，预算对象，预算周期，预算维度，可见范围来满足差异化的需求。</p><p>该功能可以解决什么问题？</p><p>当客户需要预算增加一个新维度时，我们需要做什么，预算管理页面需要调整，预算分摊需要调整，核销预算分摊需要调整。改动量大。然而有了预算配置功能之后，只需要在产品配置中心配置<strong>预算表</strong>，即可实现预算页面，预算流水，预算分摊，核销预算分摊页面的动态展示。**** ****预算页面</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%A2%84%E7%AE%97%E9%A1%B5%E9%9D%A2-1.png" alt="预算页面"></p><p>新建活动-预算分摊页面</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%A2%84%E7%AE%97%E5%88%86%E6%91%8A-1.png" alt="预算分摊"></p><p>发起核销-预算分摊</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%A0%B8%E9%94%80%E9%A2%84%E7%AE%97%E5%88%86%E6%91%8A-1.png" alt="核销预算分摊"></p><p>那么就有人会问预算表是什么？预算维度是什么？</p><p><em><strong>预算表</strong></em>：可以理解为创建预算的模板。可以通过配置预算表，从而动态创建预算和显示预算。目前预算表可支持的配置内容包含预算类型（固定/随量），预算周期（年/季/月），预算对象（组织/客户），可见范围，预算维度。<br><em><strong>预算维度</strong></em>：预算的维度信息。通过不同的维度来区分和使用预算。支持实施自定义维度数据来源，预算页面会动态查询预算维度数据。（智慧100V6.0出厂自带3个维度：费用科目，品牌，品类）。</p><h2 id="二、如何配置" tabindex="-1">二、如何配置 <a class="header-anchor" href="#二、如何配置" aria-label="Permalink to &quot;二、如何配置&quot;">​</a></h2><p>配置一个预算表只需要4步。<br> 在产品配置中心-预算维度中配置先配置预算维度信息，然后在预算表配置中按需配置预算表</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E6%B5%81%E7%A8%8B-1.png" alt="预算配置流程"></p><p>产品配置中心菜单</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16855333874810.png" alt="预算配置产品配置中心导航"></p><h3 id="_2-1-预算全局设置" tabindex="-1">2.1 预算全局设置 <a class="header-anchor" href="#_2-1-预算全局设置" aria-label="Permalink to &quot;2.1 预算全局设置&quot;">​</a></h3><p>TPM预算模块有2个全局控制开关，开关值在<em><strong>产品运营平台</strong></em>进行设置，配置中心仅显示当前值，不支持设置。</p><p>2个开关的说明如页面所示：</p><p>预算全局设置页面</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_1685533295762.png" alt="预算全局设置图示"></p><h3 id="_2-2-预算维度配置" tabindex="-1">2.2 预算维度配置 <a class="header-anchor" href="#_2-2-预算维度配置" aria-label="Permalink to &quot;2.2 预算维度配置&quot;">​</a></h3><h4 id="_2-2-1-新增预算维度" tabindex="-1">2.2.1 新增预算维度 <a class="header-anchor" href="#_2-2-1-新增预算维度" aria-label="Permalink to &quot;2.2.1 新增预算维度&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_1685533341538.png" alt="新增预算维度"></p><table><thead><tr><th style="text-align:left;">字段名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">维度名称</td><td style="text-align:left;">是</td><td style="text-align:left;">维度名称，不可重复</td></tr><tr><td style="text-align:left;">关联实体表</td><td style="text-align:left;">是</td><td style="text-align:left;">数据库中维度数据存储的表名</td></tr><tr><td style="text-align:left;">实体表ID字段</td><td style="text-align:left;">是</td><td style="text-align:left;">表中存储维度数据主键id的字段</td></tr><tr><td style="text-align:left;">实体表名称字段</td><td style="text-align:left;">是</td><td style="text-align:left;">表中存储维度数据名称的字段</td></tr><tr><td style="text-align:left;">维度值查询接口</td><td style="text-align:left;">是</td><td style="text-align:left;">需要填写aPaaS-IDE中领域接口中接口全路径编码，格式要求 modelcode/modellogiccode。数据示例 领域接口名称：维度数据查询-品类 通过查看协议，modelcode为1496776033242845259，modellogiccode为1498226517426180186。维度值查询接口则为1496776033242845259/1498226517426180186。</td></tr><tr><td style="text-align:left;">维度值存储字段</td><td style="text-align:left;">是</td><td style="text-align:left;">存储在kx_budget_ext表中的字段，不可重复</td></tr><tr><td style="text-align:left;">是否必选</td><td style="text-align:left;">是</td><td style="text-align:left;">是否必选</td></tr></tbody></table><p>tips：维度值查询接口会默认传templateid（预算表id），可支持项目自定义查询业务逻辑。</p><h4 id="_2-2-2-发布预算维度" tabindex="-1">2.2.2 发布预算维度 <a class="header-anchor" href="#_2-2-2-发布预算维度" aria-label="Permalink to &quot;2.2.2 发布预算维度&quot;">​</a></h4><p>点击发布按钮即可</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16855332289076.png" alt="发布预算维度按钮"></p><h3 id="_2-3-预算表配置" tabindex="-1">2.3 预算表配置 <a class="header-anchor" href="#_2-3-预算表配置" aria-label="Permalink to &quot;2.3 预算表配置&quot;">​</a></h3><h4 id="_2-3-1-新增预算表" tabindex="-1">2.3.1 新增预算表 <a class="header-anchor" href="#_2-3-1-新增预算表" aria-label="Permalink to &quot;2.3.1 新增预算表&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16855330883409.png" alt="新增预算表"></p><table><thead><tr><th style="text-align:left;">字段名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">预算类型</td><td style="text-align:left;">是</td><td style="text-align:left;">固定预算：固定预算金额；随量预算：预算金额=销售目标*费比</td></tr><tr><td style="text-align:left;">预算表名</td><td style="text-align:left;">是</td><td style="text-align:left;">预算表名，不可重复</td></tr><tr><td style="text-align:left;">预算周期</td><td style="text-align:left;">是</td><td style="text-align:left;">年度/季度/月度</td></tr><tr><td style="text-align:left;">预算对象</td><td style="text-align:left;">是</td><td style="text-align:left;">客户/组织</td></tr><tr><td style="text-align:left;">预算承担主体</td><td style="text-align:left;">是</td><td style="text-align:left;">承担该预算表预算的营销组织</td></tr><tr><td style="text-align:left;">费用使用主体</td><td style="text-align:left;">是</td><td style="text-align:left;">可以使用该预算表预算的营销组织</td></tr><tr><td style="text-align:left;">预算维度</td><td style="text-align:left;">是</td><td style="text-align:left;">查询预算维度配置中已发布的预算维度</td></tr><tr><td style="text-align:left;">展示顺序</td><td style="text-align:left;">否</td><td style="text-align:left;">可以对预算维度显示顺序进行调整</td></tr></tbody></table><h4 id="_2-3-2-发布预算表" tabindex="-1">2.3.2 发布预算表 <a class="header-anchor" href="#_2-3-2-发布预算表" aria-label="Permalink to &quot;2.3.2 发布预算表&quot;">​</a></h4><p>点击发布按钮即可。不用时点击停用即可。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16855331791712.png" alt="发布预算表按钮">****</p>',38),n=[i];function p(r,s,o,h,c,g){return e(),l("div",null,n)}const x=t(d,[["render",p]]);export{E as __pageData,x as default};
