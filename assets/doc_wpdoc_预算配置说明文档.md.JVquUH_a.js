import{_ as s,D as i,o,c as r,I as e,w as a,R as n,k as d,a as l}from"./chunks/framework.S1SDgkSw.js";const w=JSON.parse('{"title":"预算配置说明文档","description":"","frontmatter":{"title":"预算配置说明文档","date":"2022-06-08T02:42:40.000Z"},"headers":[],"relativePath":"doc/wpdoc/预算配置说明文档.md","filePath":"doc/wpdoc/预算配置说明文档.md"}'),c={name:"doc/wpdoc/预算配置说明文档.md"},h=n('<h1 id="预算配置说明文档" tabindex="-1">预算配置说明文档 <a class="header-anchor" href="#预算配置说明文档" aria-label="Permalink to &quot;预算配置说明文档&quot;">​</a></h1><ul><li>编辑：俞允</li><li>时间：2022-05-17</li><li>状态：已完成</li><li>适用范围：智慧100V6.0</li></ul><h2 id="一、功能介绍" tabindex="-1">一、功能介绍 <a class="header-anchor" href="#一、功能介绍" aria-label="Permalink to &quot;一、功能介绍&quot;">​</a></h2><p>营销费用管控系统（TPM）主要是管控预算和费用的系统，其中预算是不可或缺的一部分，然而不同客户对预算有各自的理解与需求。实施要根据客户需求定制化开发，无法复用。现在通过收集大部分客户需求，智慧100现在提供预算配置功能。该功能通过新增不同预算表，支持配置预算类型，预算对象，预算周期，预算维度，可见范围来满足差异化的需求。</p><p>该功能可以解决什么问题？<br> 当客户需要预算增加一个新维度时，我们需要做什么，预算管理页面需要调整，预算分摊需要调整，核销预算分摊需要调整。改动量大。然而有了预算配置功能之后，只需要在产品配置中心配置<strong>预算表</strong>，即可实现预算页面，预算流水，预算分摊，核销预算分摊页面的动态展示。</p>',5),p=d("p",null,[d("img",{src:"http://apaas.wxchina.com:8881/wp-content/uploads/%E9%A2%84%E7%AE%97%E9%A1%B5%E9%9D%A2.png",alt:"'预算页面'"})],-1),_=d("p",null,[d("img",{src:"http://apaas.wxchina.com:8881/wp-content/uploads/%E9%A2%84%E7%AE%97%E5%88%86%E6%91%8A.png",alt:"'预算分摊'"})],-1),g=n('<p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%A0%B8%E9%94%80%E9%A2%84%E7%AE%97%E5%88%86%E6%91%8A.png" alt="&#39;核销预算分摊&#39;"></p><p>那么就有人会问预算表是什么？预算维度是什么？</p><p><strong>预算表</strong>：可以理解为创建预算的模板。可以通过配置预算表，从而动态创建预算和显示预算。目前预算表可支持的配置内容包含预算类型（固定/随量），预算周期（年/季/月），预算对象（组织/客户），可见范围，预算维度。<br><strong>预算维度</strong>：预算的维度信息。通过不同的维度来区分和使用预算。支持实施自定义维度数据来源，预算页面会动态查询预算维度数据。（智慧100V6.0出厂自带3个维度：费用科目，品牌，品类）。</p><h2 id="二、如何配置" tabindex="-1">二、如何配置 <a class="header-anchor" href="#二、如何配置" aria-label="Permalink to &quot;二、如何配置&quot;">​</a></h2><p>配置一个预算表只需要4步。<br> 在产品配置中心-预算维度中配置先配置预算维度信息，然后在预算表配置中按需配置预算表<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E6%B5%81%E7%A8%8B.png" alt="&#39;配置流程&#39;"></p>',5),x=n('<p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%A7%E5%93%81%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83%E8%8F%9C%E5%8D%95.png" alt="&#39;产品配置中心菜单&#39;"></p><h3 id="_2-1-预算维度配置" tabindex="-1">2.1 预算维度配置 <a class="header-anchor" href="#_2-1-预算维度配置" aria-label="Permalink to &quot;2.1 预算维度配置&quot;">​</a></h3><h4 id="_2-1-1-新增预算维度" tabindex="-1">2.1.1 新增预算维度 <a class="header-anchor" href="#_2-1-1-新增预算维度" aria-label="Permalink to &quot;2.1.1 新增预算维度&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E5%A2%9E%E9%A2%84%E7%AE%97%E7%BB%B4%E5%BA%A6.png" alt="&#39;新增预算维度&#39;"></p><table><thead><tr><th style="text-align:left;">字段名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">维度名称</td><td style="text-align:left;">是</td><td style="text-align:left;">维度名称，不可重复</td></tr><tr><td style="text-align:left;">关联实体表</td><td style="text-align:left;">是</td><td style="text-align:left;">数据库中维度数据存储的表名</td></tr><tr><td style="text-align:left;">实体表ID字段</td><td style="text-align:left;">是</td><td style="text-align:left;">表中存储维度数据主键id的字段</td></tr><tr><td style="text-align:left;">实体表名称字段</td><td style="text-align:left;">是</td><td style="text-align:left;">表中存储维度数据名称的字段</td></tr><tr><td style="text-align:left;">维度值查询接口</td><td style="text-align:left;">是</td><td style="text-align:left;">需要填写aPaaS-IDE中领域接口中接口全路径编码，格式要求 modelcode/modellogiccode。数据示例 领域接口名称：维度数据查询-品类 通过查看协议，modelcode为1496776033242845259，modellogiccode为1498226517426180186。维度值查询接口则为1496776033242845259/1498226517426180186。</td></tr><tr><td style="text-align:left;">维度值存储字段</td><td style="text-align:left;">是</td><td style="text-align:left;">存储在kx_budget_ext表中的字段，不可重复</td></tr><tr><td style="text-align:left;">是否必选</td><td style="text-align:left;">是</td><td style="text-align:left;">是否必选</td></tr></tbody></table><p>tips：维度值查询接口会默认传templateid（预算表id），可支持项目自定义查询业务逻辑。</p><h4 id="_2-1-2-发布预算维度" tabindex="-1">2.1.2 发布预算维度 <a class="header-anchor" href="#_2-1-2-发布预算维度" aria-label="Permalink to &quot;2.1.2 发布预算维度&quot;">​</a></h4><p>点击发布按钮即可<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%8F%91%E5%B8%83%E9%A2%84%E7%AE%97%E7%BB%B4%E5%BA%A6%E6%8C%89%E9%92%AE.png" alt="&#39;发布预算维度按钮&#39;"></p><h3 id="_2-2-预算表配置" tabindex="-1">2.2 预算表配置 <a class="header-anchor" href="#_2-2-预算表配置" aria-label="Permalink to &quot;2.2 预算表配置&quot;">​</a></h3><h4 id="_2-2-1-新增预算表" tabindex="-1">2.2.1 新增预算表 <a class="header-anchor" href="#_2-2-1-新增预算表" aria-label="Permalink to &quot;2.2.1 新增预算表&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E5%A2%9E%E9%A2%84%E7%AE%97%E8%A1%A8.png" alt="&#39;新增预算表&#39;"></p><table><thead><tr><th style="text-align:left;">字段名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">预算类型</td><td style="text-align:left;">是</td><td style="text-align:left;">固定预算：固定预算金额；随量预算：预算金额=销售目标*费比</td></tr><tr><td style="text-align:left;">预算表名</td><td style="text-align:left;">是</td><td style="text-align:left;">预算表名，不可重复</td></tr><tr><td style="text-align:left;">预算周期</td><td style="text-align:left;">是</td><td style="text-align:left;">年度/季度/月度</td></tr><tr><td style="text-align:left;">预算对象</td><td style="text-align:left;">是</td><td style="text-align:left;">客户/组织</td></tr><tr><td style="text-align:left;">可见范围</td><td style="text-align:left;">是</td><td style="text-align:left;">该预算表的哪些营销组织可见</td></tr><tr><td style="text-align:left;">预算维度</td><td style="text-align:left;">是</td><td style="text-align:left;">查询预算维度配置中已发布的预算维度</td></tr></tbody></table><h4 id="_2-2-2-发布预算表" tabindex="-1">2.2.2 发布预算表 <a class="header-anchor" href="#_2-2-2-发布预算表" aria-label="Permalink to &quot;2.2.2 发布预算表&quot;">​</a></h4><p>点击发布按钮即可。不用时点击停用即可。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%8F%91%E5%B8%83%E9%A2%84%E7%AE%97%E8%A1%A8%E6%8C%89%E9%92%AE.png" alt="&#39;发布预算表按钮&#39;"></p>',14);function E(f,y,A,u,m,b){const t=i("center");return o(),r("div",null,[h,e(t,null,{default:a(()=>[l("预算页面")]),_:1}),p,e(t,null,{default:a(()=>[l("新建活动-预算分摊页面")]),_:1}),_,e(t,null,{default:a(()=>[l("发起核销-预算分摊")]),_:1}),g,e(t,null,{default:a(()=>[l("产品配置中心菜单")]),_:1}),x])}const T=s(c,[["render",E]]);export{w as __pageData,T as default};
