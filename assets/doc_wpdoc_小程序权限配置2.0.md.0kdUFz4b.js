import{_ as a,c as p,o as t,U as e}from"./chunks/framework.K-r7inPk.js";const u=JSON.parse('{"title":"小程序权限配置2.0","description":"","frontmatter":{"title":"小程序权限配置2.0","date":"2021-08-24T11:12:40.000Z"},"headers":[],"relativePath":"doc/wpdoc/小程序权限配置2.0.md","filePath":"doc/wpdoc/小程序权限配置2.0.md"}'),o={name:"doc/wpdoc/小程序权限配置2.0.md"},c=e('<h1 id="小程序功能点权限配置组件需求规格说明书" tabindex="-1">小程序功能点权限配置组件需求规格说明书 <a class="header-anchor" href="#小程序功能点权限配置组件需求规格说明书" aria-label="Permalink to &quot;小程序功能点权限配置组件需求规格说明书&quot;">​</a></h1><h2 id="_1-功能描述" tabindex="-1">1. 功能描述 <a class="header-anchor" href="#_1-功能描述" aria-label="Permalink to &quot;1\\. 功能描述&quot;">​</a></h2><p>客户场景：允许管理员通过不同岗位不同职位不同角色，通过apaas后台权限配置，动态地随时地实时地去控制小程序功能模块的权限。以及可以通过配置指定小程序功能模块的跳转页面和动态改变功能模块的icon等。</p><p>方案描述：通过小程序登录apaas系统，获取后台小程序权限配置勾选项。并加载小程序的导航栏内容，通过小程序导航栏内容比对小程序权限配置，实现配置小程序功能权限效果。</p><h2 id="_2-组件使用案例" tabindex="-1">2. 组件使用案例 <a class="header-anchor" href="#_2-组件使用案例" aria-label="Permalink to &quot;2\\. 组件使用案例&quot;">​</a></h2><h3 id="_2-1-案例业务流程介绍" tabindex="-1">2.1. 案例业务流程介绍 <a class="header-anchor" href="#_2-1-案例业务流程介绍" aria-label="Permalink to &quot;2.1. 案例业务流程介绍&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/1-1.png" alt=""></p><p>1） 小程序登录apaas平台，通过getaccountinfo接口获取登录账号功能权限数据</p><p>2） 请求获取小程序导航栏接口，获取小程序配置的导航</p><p>3） 通过方法，对比功能权限数据和小程序导航数据，输出需展示的功能模块</p><h3 id="_2-2-案例相关截图" tabindex="-1">2.2. 案例相关截图 <a class="header-anchor" href="#_2-2-案例相关截图" aria-label="Permalink to &quot;2.2. 案例相关截图&quot;">​</a></h3><p>1） 小程序导航配置</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/2-1.png" alt=""></p><p>2） 小程序关联权限配置</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/3-1.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4-1.png" alt=""><br> 3） 管理员配置小程序关联权限</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/5-1.png" alt=""></p><p>4） 登录小程序获取后台小程序勾选的功能点权限配置数据</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/6-1.png" alt=""></p><p>5） 获取小程序导航栏数据</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/7-1.png" alt=""></p><p>6） 导航栏对比功能权限数据</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/8-1.png" alt=""></p><p>7） 展示首页功能模块</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/9-1.png" alt=""></p><h2 id="_3-小程序功能点权限配置方法" tabindex="-1">3. 小程序功能点权限配置方法 <a class="header-anchor" href="#_3-小程序功能点权限配置方法" aria-label="Permalink to &quot;3\\. 小程序功能点权限配置方法&quot;">​</a></h2><h3 id="_3-1-前置条件和思路" tabindex="-1">3.1. 前置条件和思路 <a class="header-anchor" href="#_3-1-前置条件和思路" aria-label="Permalink to &quot;3.1. 前置条件和思路&quot;">​</a></h3><p>前置条件：使用小程序功能点权限配置组件的前提条件是必须集成部署apaas介质服务，统一使用8系apaas服务提供的登录系统，获取后台功能点权限配置数据和小程序导航栏配置数据，适用于专属云模式和独立部署模式。</p><p>整体思路：以8系apaas服务登录系统为桥梁，通过“导航”和“账号功能模块权限”做比对，控制小程序视图层甚至逻辑层的功能点权限。</p><h3 id="_3-2-配置步骤" tabindex="-1">3.2. 配置步骤 <a class="header-anchor" href="#_3-2-配置步骤" aria-label="Permalink to &quot;3.2. 配置步骤&quot;">​</a></h3><p>1、部署8系apaas服务</p><p>此步骤一般由开发（运维）人员完成，部署服务的介质请问李瑞烜，部署服务介质的步骤可以参考</p><p><a href="http://note.youdao.com/noteshare?id=c41783f227fa5ccdce882d4d95dccb1a&amp;sub=86FCA9B8CA414E65AB70D4FCD9243BCA" target="_blank" rel="noreferrer">http://note.youdao.com/noteshare?id=c41783f227fa5ccdce882d4d95dccb1a&amp;sub=86FCA9B8CA414E65AB70D4FCD9243BCA</a>。</p><p>如果还不是很清楚，可以请教运维大佬。</p><p>2、设置小程序功能模块导航栏</p><p>参考2.2.1</p><p>注意：只支持二级导航栏，一级导航栏会默认分区，导航说明内容格式必须为实体，包含url,icon,bg</p><p>3、小程序关联表单创建</p><p>参考2.2.2，创建空白小程序表单即可</p><p>4、设置小程序关联功能</p><p>参考2.2.2</p><p>5、管理员根据角色权限，配置功能模块权限</p><p>参考2.2.3</p><p>6、小程序添加获取导航栏接口</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/10-1.png" alt=""></p><p>7、通过“导航”和“功能权限”做对比</p><p>参考2.2.6</p><p>如需支持多级导航栏，就需改造对比逻辑，对比后的数据可以存到首页实例。全局appData和缓存中。</p><p>8、首页展示</p><p>参考2.2.7</p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC016-FC002-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE2.0.zip" title="COM-BC016-FC002 小程序权限配置2.0" target="_blank" rel="noreferrer">COM-BC016-FC002 小程序权限配置2.0</a><br> 视频讲解：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%BB%84%E6%97%A5%E9%9B%84-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%8A%9F%E8%83%BD%E6%9D%83%E9%99%90%E8%AE%BE%E7%BD%AE.wmv" target="_blank" rel="noreferrer">黄日雄《小程序功能权限设置》</a></p>',50),n=[c];function r(s,h,i,l,d,_){return t(),p("div",null,n)}const b=a(o,[["render",r]]);export{u as __pageData,b as default};
