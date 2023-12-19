import{_ as a,o as e,c as t,R as r}from"./chunks/framework.E9w9IFh5.js";const b=JSON.parse('{"title":"外系统对接日志记录","description":"","frontmatter":{"title":"外系统对接日志记录","date":"2021-11-16T09:11:58.000Z"},"headers":[],"relativePath":"doc/wpdoc/外系统对接日志记录.md","filePath":"doc/wpdoc/外系统对接日志记录.md"}'),o={name:"doc/wpdoc/外系统对接日志记录.md"},i=r('<h1 id="外系统对接日志记录" tabindex="-1">外系统对接日志记录 <a class="header-anchor" href="#外系统对接日志记录" aria-label="Permalink to &quot;外系统对接日志记录&quot;">​</a></h1><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h3><p>大部分项目中，都会涉及到和第三方系统的对接，如我们调用第三方系统的接口推送数据或获取数据，或者是第三方系统调用我们的接口推送数据或获取数据。在接口调用过程中，难免会出现一些错误信息，在项目正式上线后，我们是无法直接在界面上操作去复现问题或者获取IDE日志的，而且要造测试数据也可能会很麻烦，那么我们就要找到接口调用报错的原因就会变得很麻烦，我们可能光是造数据去操作来复现问题就要花很多时间。所以有一个对接日志的记录是非常有必要的，有时候我们可以直接通过日志记录的调用异常信息就可以知道是什么问题，或者是通过日志记录中的出入参去进行排查问题。日志记录中的调用结果、异常信息，可以快速的帮助我们查看接口调用结果，而日志记录中的出参入参可以快速帮我们复现问题。</p><h3 id="现有的问题痛点" tabindex="-1">现有的问题痛点 <a class="header-anchor" href="#现有的问题痛点" aria-label="Permalink to &quot;现有的问题痛点&quot;">​</a></h3><p>目前实施开发人员只能通过在界面上去重新操作一次，获取IDE的日志来查看接口调用信息，或者是通过连接服务器去获取服务器上的日志去查看。但是，连接正式环境的服务器去查看日志并不是所有实施同事都可以操作。而且重新在界面上操作去复现问题，如果数据比较复杂，光是造数据都需要花一些时间，而且就算是一样的数据提交上去，与外系统对接得到的结果也不一定是一样的，这也给我们排查问题复现问题加大了难度。因为如果是第三方系统的一些超时、服务器刚好重启等问题导致对接失败，这些都是比较难重现的。</p><h2 id="一、解决方案" tabindex="-1">一、解决方案 <a class="header-anchor" href="#一、解决方案" aria-label="Permalink to &quot;一、解决方案&quot;">​</a></h2><p>在每次调用第三方系统的接口，或者是第三方系统调用我们的接口时，创建一个日志记录的对象，将调用信息都记录起来。<br> ​</p><h2 id="二、数据库及ide配置" tabindex="-1">二、数据库及ide配置 <a class="header-anchor" href="#二、数据库及ide配置" aria-label="Permalink to &quot;二、数据库及ide配置&quot;">​</a></h2><h4 id="_1、数据库" tabindex="-1">1、数据库 <a class="header-anchor" href="#_1、数据库" aria-label="Permalink to &quot;1、数据库&quot;">​</a></h4><p><strong>创建业务实体</strong><br> 1、在ide业务实体里，导入“业务对象-2021-09-01.json”。</p><h4 id="_2、创建数据库函数" tabindex="-1">2、创建数据库函数 <a class="header-anchor" href="#_2、创建数据库函数" aria-label="Permalink to &quot;2、创建数据库函数&quot;">​</a></h4><p>1、在ide数据库函数中导入“自定义函数-2021-09-01.json”</p><h4 id="_3、创建业务领域" tabindex="-1">3、创建业务领域 <a class="header-anchor" href="#_3、创建业务领域" aria-label="Permalink to &quot;3、创建业务领域&quot;">​</a></h4><p>1、在ide业务领域里，导入“业务行为-2021-09-01.json”。<br> 完成业务领域的创建。</p><h4 id="_4、创建业务ui" tabindex="-1">4、创建业务UI <a class="header-anchor" href="#_4、创建业务ui" aria-label="Permalink to &quot;4、创建业务UI&quot;">​</a></h4><p>1、在业务UI里，导入“业务UI-2021-09-01.json”.<br> 完成业务UI的创建。</p><h4 id="_5、配置导航、挂功能点" tabindex="-1">5、配置导航、挂功能点 <a class="header-anchor" href="#_5、配置导航、挂功能点" aria-label="Permalink to &quot;5、配置导航、挂功能点&quot;">​</a></h4><p>在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。</p><h4 id="_6、页面菜单权限配置" tabindex="-1">6、页面菜单权限配置 <a class="header-anchor" href="#_6、页面菜单权限配置" aria-label="Permalink to &quot;6、页面菜单权限配置&quot;">​</a></h4><p>用SFA管理员登录即可</p><h3 id="界面效果" tabindex="-1">界面效果 <a class="header-anchor" href="#界面效果" aria-label="Permalink to &quot;界面效果&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%95%8C%E9%9D%A2%E6%95%88%E6%9E%9C.png" alt=""></p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC029-FC001-%E5%A4%96%E7%B3%BB%E7%BB%9F%E5%AF%B9%E6%8E%A5%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95.zip" title="COM-BC029-FC001-外系统对接日志记录" target="_blank" rel="noreferrer">COM-BC029-FC001-外系统对接日志记录</a></p><p>视频讲解：</p><p><video><source><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%8F%A4%E5%87%AF%E7%82%9C.mp4" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/wp-content/uploads/古凯炜.mp4</a></video></p>',25),n=[i];function h(d,l,c,s,p,_){return e(),t("div",null,n)}const m=a(o,[["render",h]]);export{b as __pageData,m as default};
