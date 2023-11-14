import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.aac09c5f.js";const b=JSON.parse('{"title":"标准化上线流程","description":"","frontmatter":{"title":"标准化上线流程","date":"2021-07-07T20:29:52.000Z"},"headers":[],"relativePath":"doc/wpdoc/标准化上线流程.md","filePath":"doc/wpdoc/标准化上线流程.md"}'),o={name:"doc/wpdoc/标准化上线流程.md"},l=r('<h1 id="标准化上线流程" tabindex="-1">标准化上线流程 <a class="header-anchor" href="#标准化上线流程" aria-label="Permalink to &quot;标准化上线流程&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>​ 每一个项目在项目建设完成之后，都会经历一个上线到生产环境的过程。由于项目的差异性，在项目建设过程中可能会涉及BI报表、二开功能开发、AI开发、nacos配置的调整等，在上线之后可能会涉及独立APP打包，独立的高德key，定制化的密码策略，定制化的企业logo，独立的代码分支等。涉及面非常广，门槛很高，极易出错。</p><h3 id="一、现有的问题痛点" tabindex="-1">一、现有的问题痛点 <a class="header-anchor" href="#一、现有的问题痛点" aria-label="Permalink to &quot;一、现有的问题痛点&quot;">​</a></h3><p>由于没有一份标准的、全面的操作指引，项目组不能高效、高质量的完成整个上线的过程。</p><h2 id="一、解决方案" tabindex="-1">一、解决方案 <a class="header-anchor" href="#一、解决方案" aria-label="Permalink to &quot;一、解决方案&quot;">​</a></h2><p>​ 以好来化工项目的整个上线到生产的过程为蓝本，详细的分析记录了准备阶段、实施阶段、验证阶段各个相关的团队需要完成的工作任务及过程资料，制定了标准化的上线流程指引。</p><h2 id="二、过程资料说明" tabindex="-1">二、过程资料说明 <a class="header-anchor" href="#二、过程资料说明" aria-label="Permalink to &quot;二、过程资料说明&quot;">​</a></h2><h3 id="_1、metamodel" tabindex="-1">1、MetaModel <a class="header-anchor" href="#_1、metamodel" aria-label="Permalink to &quot;1、MetaModel&quot;">​</a></h3><p>IDE的所有元数据定义</p><h3 id="_2、自定义ui控件" tabindex="-1">2、自定义UI控件 <a class="header-anchor" href="#_2、自定义ui控件" aria-label="Permalink to &quot;2、自定义UI控件&quot;">​</a></h3><p>IDE中用到的二开功能、AI等相关的自定义UI定义</p><h3 id="_3、excel模板" tabindex="-1">3、excel模板 <a class="header-anchor" href="#_3、excel模板" aria-label="Permalink to &quot;3、excel模板&quot;">​</a></h3><p>IDE中有修改过的excel导入模板需要导出</p><h3 id="_4、数据结构差异脚本" tabindex="-1">4、数据结构差异脚本 <a class="header-anchor" href="#_4、数据结构差异脚本" aria-label="Permalink to &quot;4、数据结构差异脚本&quot;">​</a></h3><p>通过navicat工具中的数据结构工具，获取实施环境数据库对象与生产环境的数据库对象的差异化结构sql</p><h3 id="_5、数据表insert脚本" tabindex="-1">5、数据表insert脚本 <a class="header-anchor" href="#_5、数据表insert脚本" aria-label="Permalink to &quot;5、数据表insert脚本&quot;">​</a></h3><p>实施环境中部分的系统表，字典表，业务表的数据需要迁移到生产环境，可以通过navicat工具中的数据同步工具，获取数据表的insert脚本</p><h3 id="_6、服务版本清单" tabindex="-1">6、服务版本清单 <a class="header-anchor" href="#_6、服务版本清单" aria-label="Permalink to &quot;6、服务版本清单&quot;">​</a></h3><p>服务版本清单中记录了实施环境的各个平台服务、数据库服务的版本，该数据用来指引运维部门正确选用服务版本</p><h3 id="_7、基础excel" tabindex="-1">7、基础excel <a class="header-anchor" href="#_7、基础excel" aria-label="Permalink to &quot;7、基础excel&quot;">​</a></h3><p>基础数据导入模板</p><h3 id="_8、用户协议及隐私政策" tabindex="-1">8、用户协议及隐私政策 <a class="header-anchor" href="#_8、用户协议及隐私政策" aria-label="Permalink to &quot;8、用户协议及隐私政策&quot;">​</a></h3><p>部分企业根据需要会定制APP端的用户协议和隐私政策，需要根据定制化的条款，制作html文件</p><h3 id="_9、nacos" tabindex="-1">9、nacos <a class="header-anchor" href="#_9、nacos" aria-label="Permalink to &quot;9、nacos&quot;">​</a></h3><p>需要记录在整个实施过程中涉及到的nacos配置项的调整，输出nacos变动表</p><h3 id="_10、技术组" tabindex="-1">10、技术组 <a class="header-anchor" href="#_10、技术组" aria-label="Permalink to &quot;10、技术组&quot;">​</a></h3><p>技术组负责二开功能的开发，需要提供用来部署的程序架包，部署指引文档</p><h3 id="_11、ai" tabindex="-1">11、AI <a class="header-anchor" href="#_11、ai" aria-label="Permalink to &quot;11、AI&quot;">​</a></h3><p>AI需要提供AI生产环境的相关调用参数，数据同步服务程序架包及部署文档</p><h3 id="_12、数据平台" tabindex="-1">12、数据平台 <a class="header-anchor" href="#_12、数据平台" aria-label="Permalink to &quot;12、数据平台&quot;">​</a></h3><p>项目涉及BI大屏报表开发，需要数据平台提供对应的架包、部署文档</p><h3 id="组件包下载-百度网盘-也可到svn获取" tabindex="-1">组件包下载（百度网盘，也可到SVN获取） <a class="header-anchor" href="#组件包下载-百度网盘-也可到svn获取" aria-label="Permalink to &quot;组件包下载（百度网盘，也可到SVN获取）&quot;">​</a></h3><p>标准化上线流程-链接：链接：<a href="https://pan.baidu.com/s/1QpObe50ypF1SJ9O3e9Qz8w" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1QpObe50ypF1SJ9O3e9Qz8w</a><br> 提取码：o0ea<br> 直接下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC007-FC001-%E6%A0%87%E5%87%86%E5%8C%96%E4%B8%8A%E7%BA%BF%E6%B5%81%E7%A8%8B.zip" title="COM-BC007-FC001 标准化上线流程" target="_blank" rel="noreferrer">COM-BC007-FC001 标准化上线流程</a></p>',35),h=[l];function i(n,c,d,s,p,_){return e(),t("div",null,h)}const q=a(o,[["render",i]]);export{b as __pageData,q as default};
