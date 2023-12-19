import{_ as t,o as a,c as o,R as r}from"./chunks/framework.E9w9IFh5.js";const g=JSON.parse('{"title":"费用账号配置说明文档","description":"","frontmatter":{"title":"费用账号配置说明文档","date":"2022-06-08T02:46:25.000Z"},"headers":[],"relativePath":"doc/wpdoc/费用账号配置说明文档.md","filePath":"doc/wpdoc/费用账号配置说明文档.md"}'),e={name:"doc/wpdoc/费用账号配置说明文档.md"},n=r('<h1 id="费用配置说明文档" tabindex="-1">费用配置说明文档 <a class="header-anchor" href="#费用配置说明文档" aria-label="Permalink to &quot;费用配置说明文档&quot;">​</a></h1><ul><li>编辑：李俊涛</li><li>时间：2022-05-26</li><li>状态：已完成</li><li>适用范围：智慧100V6.0</li></ul><h2 id="一、功能介绍" tabindex="-1">一、功能介绍 <a class="header-anchor" href="#一、功能介绍" aria-label="Permalink to &quot;一、功能介绍&quot;">​</a></h2><p>营销费用管控系统（TPM）主要是管控预算和费用的系统，本文讲解是关于费用概念及相应扩展配置。费用模块主要由<strong>上账方式字典</strong>、<strong>费用账户表设置</strong>、<strong>费用账户</strong>三个模块组成，支持新增上账方式及费用账户来满足不同客户的差异性需求</p><h3 id="_1、上账方式" tabindex="-1">1、上账方式 <a class="header-anchor" href="#_1、上账方式" aria-label="Permalink to &quot;1、上账方式&quot;">​</a></h3><p>如图所示：系统出厂默认设置两种<strong>上账方式</strong>，管理员可在数据字典模块进行新增</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%B8%8A%E8%B4%A6%E6%96%B9%E5%BC%8F%E5%AD%97%E5%85%B8%E9%85%8D%E7%BD%AE.png" alt="&#39;上账方式字典配置&#39;"></p><h3 id="_2、费用账户表设置" tabindex="-1">2、费用账户表设置 <a class="header-anchor" href="#_2、费用账户表设置" aria-label="Permalink to &quot;2、费用账户表设置&quot;">​</a></h3><p>如图所示：系统出厂默认设置两个<strong>费用账户</strong>，管理员可以在产品配置中心进行费用账户表设置。注意，对于“<strong>已启用的上账方式</strong>”，请不要在字典中直接停用</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%B9%E7%94%A8%E8%B4%A6%E6%88%B7%E8%A1%A8%E8%AE%BE%E7%BD%AE.png" alt="&#39;费用账户表设置&#39;"></p><p><strong>如需新增费用账户</strong>，首先在数据字典新增上账方式，然后点击新增按钮，分别设置账户名称、选择新的上账方式、使用活动、账户类型</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>账户名称</td><td>可以自行输入，但是已启用费用账户不允许存在重名</td></tr><tr><td>上账方式</td><td>每种上账方式最多只能存在一个已启用的费用账户，不能重复使用</td></tr><tr><td>使用活动</td><td>目前只支持“进场活动、返利活动、陈列活动”这三种活动，用于活动核销入账</td></tr><tr><td>账户类型</td><td>枚举类型，值为“货补”、“费用”，用于经销商下单使用费用</td></tr><tr><td>状态</td><td>枚举类型，值为“启用”、“禁用”两种，已停用的费用账户，则不能被活动核销及经销商下单使用</td></tr></tbody></table><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%B9%E7%94%A8%E8%B4%A6%E6%88%B7%E8%A1%A8%E8%AE%BE%E7%BD%AE.png" alt="&#39;费用账户表设置&#39;"></p><h3 id="_3、费用账户" tabindex="-1">3、费用账户 <a class="header-anchor" href="#_3、费用账户" aria-label="Permalink to &quot;3、费用账户&quot;">​</a></h3><p>设置好费用账户，通过点击菜单“<strong>经销商台账管理</strong>”/“<strong>费用账户</strong>”查看。对于已启用的费用账户，经销商下单、活动核销都可以直接使用到，使用后即生成费用流水。并可以通过点击<strong>账户余额</strong>即可以<strong>查看流水</strong></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%B9%E7%94%A8%E8%B4%A6%E6%88%B7.png" alt="&#39;费用账户&#39;"></p>',16),s=[n];function d(p,c,i,l,h,_){return a(),o("div",null,s)}const B=t(e,[["render",d]]);export{g as __pageData,B as default};
