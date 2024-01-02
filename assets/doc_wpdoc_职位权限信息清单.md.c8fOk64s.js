import{_ as a,c as t,o as p,U as e}from"./chunks/framework.K-r7inPk.js";const B=JSON.parse('{"title":"职位权限信息清单","description":"","frontmatter":{"title":"职位权限信息清单","date":"2021-11-16T09:16:33.000Z"},"headers":[],"relativePath":"doc/wpdoc/职位权限信息清单.md","filePath":"doc/wpdoc/职位权限信息清单.md"}'),o={name:"doc/wpdoc/职位权限信息清单.md"},E=e('<h1 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h1><p>在某些业务场景下，需要导出系统中的【人员职位---菜单功能权限】的对应关系，用于导出分析系统的权限划分是否合理，以便修正系统的职位功能权限。</p><p>在现有系统的系统中，职位的权限只能在职位管理中进行一个个点开的查看，不能一次性看到全部的功能菜单权限设置，在整理职位功能清单的时候往往只能手工方式进行整理，不能进行导出。</p><p>COM-BC030-FC001职位权限信息清单 组件用于查询职位对应的菜单功能权限，也可以进行直接的导出，减少实施人员或者系统管理员手动整理的时间，提高系统的使用效率。</p><h2 id="一、导入权限实体" tabindex="-1">一、导入权限实体 <a class="header-anchor" href="#一、导入权限实体" aria-label="Permalink to &quot;一、导入权限实体&quot;">​</a></h2><p>IDE导入实体，直接发布</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E859.png" alt=""></p><h2 id="二、导入数据库函数发布创建" tabindex="-1">二、导入数据库函数发布创建 <a class="header-anchor" href="#二、导入数据库函数发布创建" aria-label="Permalink to &quot;二、导入数据库函数发布创建&quot;">​</a></h2><p>导入函数并发布</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E884.png" alt=""></p><h2 id="三、导入系统ui" tabindex="-1">三、导入系统UI <a class="header-anchor" href="#三、导入系统ui" aria-label="Permalink to &quot;三、导入系统UI&quot;">​</a></h2><p>1、导入UI配置</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E907.png" alt=""></p><p>2、挂功能权限及导航</p><p>设置功能点</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E926.png" alt=""><br> 设置导航</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E933.png" alt=""></p><h2 id="四、设置数据抽取-非必须" tabindex="-1">四、设置数据抽取（非必须） <a class="header-anchor" href="#四、设置数据抽取-非必须" aria-label="Permalink to &quot;四、设置数据抽取（非必须）&quot;">​</a></h2><p>不设置调度时，则可以手动执行更新函数</p><p><strong>select f_reflesh_systemjurisdictioninfor();</strong></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E1015.png" alt=""></p><h2 id="五、界面展示效果" tabindex="-1">五、界面展示效果 <a class="header-anchor" href="#五、界面展示效果" aria-label="Permalink to &quot;五、界面展示效果&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%8F%8A%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E1030.png" alt=""></p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC030-FC001%E8%81%8C%E4%BD%8D%E6%9D%83%E9%99%90%E4%BF%A1%E6%81%AF%E6%B8%85%E5%8D%95.zip" title="COM-BC030-FC001职位权限信息清单" target="_blank" rel="noreferrer">COM-BC030-FC001职位权限信息清单</a></p>',24),n=[E];function c(r,s,i,h,l,d){return p(),t("div",null,n)}const A=a(o,[["render",c]]);export{B as __pageData,A as default};
