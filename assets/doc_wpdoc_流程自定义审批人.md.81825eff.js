import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.b1e56e49.js";const b=JSON.parse('{"title":"流程自定义审批人","description":"","frontmatter":{"title":"流程自定义审批人","date":"2021-10-08T10:39:20.000Z"},"headers":[],"relativePath":"doc/wpdoc/流程自定义审批人.md","filePath":"doc/wpdoc/流程自定义审批人.md"}'),o={name:"doc/wpdoc/流程自定义审批人.md"},n=r('<h1 id="流程自定义审批人" tabindex="-1">流程自定义审批人 <a class="header-anchor" href="#流程自定义审批人" aria-label="Permalink to &quot;流程自定义审批人&quot;">​</a></h1><h2 id="一、现有的问题痛点" tabindex="-1">一、现有的问题痛点 <a class="header-anchor" href="#一、现有的问题痛点" aria-label="Permalink to &quot;一、现有的问题痛点&quot;">​</a></h2><p>​ 对于SFA系统而言，审批流程是基础。针对小公司而言，公司的管理没那么规范，没有相对成熟的职位体系，导致配置流程审批人的时候不能做成固定化，流程审批人需要申请人自己选择，每个提交的流程的审批节点都可以不一样，从而满足客户的个性化业务需求</p><h2 id="二、解决方案" tabindex="-1">二、解决方案 <a class="header-anchor" href="#二、解决方案" aria-label="Permalink to &quot;二、解决方案&quot;">​</a></h2><p>​ 开发一个自定义审批人的流程，满足客户的个性化需求。</p><h3 id="二、数据库及ide配置" tabindex="-1">二、数据库及ide配置 <a class="header-anchor" href="#二、数据库及ide配置" aria-label="Permalink to &quot;二、数据库及ide配置&quot;">​</a></h3><h4 id="_1、数据库" tabindex="-1">1、数据库 <a class="header-anchor" href="#_1、数据库" aria-label="Permalink to &quot;1、数据库&quot;">​</a></h4><p><strong>创建业务实体</strong><br> 1、在ide业务实体里，导入“自选审批人存储业务对象-2021-08-18.json”和“自选事务签呈业务对象-2021-08-18.json”。<br> 2、在数据库执行差异化脚本“自选流程差异化脚本.txt”。</p><h4 id="_2、创建业务领域" tabindex="-1">2、创建业务领域 <a class="header-anchor" href="#_2、创建业务领域" aria-label="Permalink to &quot;2、创建业务领域&quot;">​</a></h4><p>1、自选事务流程业务行为-2021-08-18.json。<br> 完成业务领域的创建。</p><h4 id="_3、创建业务ui" tabindex="-1">3、创建业务UI <a class="header-anchor" href="#_3、创建业务ui" aria-label="Permalink to &quot;3、创建业务UI&quot;">​</a></h4><p>1、在业务UI里，导入“自选流程目录-2021-08-18.json”.<br> 2、在业务UI里，导入“自选流程业务UI-2021-08-18.json”.<br> 完成业务UI的创建。</p><h4 id="_4、配置导航、挂功能点" tabindex="-1">4、配置导航、挂功能点 <a class="header-anchor" href="#_4、配置导航、挂功能点" aria-label="Permalink to &quot;4、配置导航、挂功能点&quot;">​</a></h4><p>在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。</p><h4 id="_5、页面菜单权限配置" tabindex="-1">5、页面菜单权限配置 <a class="header-anchor" href="#_5、页面菜单权限配置" aria-label="Permalink to &quot;5、页面菜单权限配置&quot;">​</a></h4><p>用SFA管理员登录，在职位管理里，设置职位权限，勾选配置的页面。完成给该职位的人员页面访问权限的配置。</p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC018-FC001%E6%B5%81%E7%A8%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%A1%E6%89%B9%E4%BA%BA2021-08-16.zip" title="COM-BC018-FC001流程自定义审批人2021-08-16" target="_blank" rel="noreferrer">COM-BC018-FC001流程自定义审批人2021-08-16</a></p><p>视频讲解：</p><p><video><source><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%99%88%E5%A3%AC%E8%AF%A2.mp4" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/wp-content/uploads/陈壬询.mp4</a></video></p>',19),i=[n];function h(d,l,c,s,p,_){return e(),t("div",null,i)}const m=a(o,[["render",h]]);export{b as __pageData,m as default};
