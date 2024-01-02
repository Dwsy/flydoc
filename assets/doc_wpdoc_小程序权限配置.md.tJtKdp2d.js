import{_ as a,c as E,o as t,U as e}from"./chunks/framework.K-r7inPk.js";const A=JSON.parse('{"title":"小程序权限配置","description":"","frontmatter":{"title":"小程序权限配置","date":"2021-07-23T11:39:38.000Z"},"headers":[],"relativePath":"doc/wpdoc/小程序权限配置.md","filePath":"doc/wpdoc/小程序权限配置.md"}'),p={name:"doc/wpdoc/小程序权限配置.md"},r=e('<h1 id="小程序权限配置-实现方案" tabindex="-1">小程序权限配置 实现方案 <a class="header-anchor" href="#小程序权限配置-实现方案" aria-label="Permalink to &quot;小程序权限配置 实现方案&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h3 id="一、适功能描述" tabindex="-1">一、适功能描述 <a class="header-anchor" href="#一、适功能描述" aria-label="Permalink to &quot;一、适功能描述&quot;">​</a></h3><h4 id="_1、客户场景" tabindex="-1">1、客户场景 <a class="header-anchor" href="#_1、客户场景" aria-label="Permalink to &quot;1、客户场景&quot;">​</a></h4><p>允许管理员通过不同岗位不同职位不同角色，通过apaas后台权限配置，动态地随时地实时地去控制功能点的权限。</p><h4 id="_2、解决方案描述" tabindex="-1">2、解决方案描述 <a class="header-anchor" href="#_2、解决方案描述" aria-label="Permalink to &quot;2、解决方案描述&quot;">​</a></h4><p>通过小程序登录系统，获取后台小程序权限配置勾选项，再”生成器”的作用下，生成功能点权限树。达到实时控制功能点作用。</p><h3 id="二、组件使用案例" tabindex="-1">二、组件使用案例 <a class="header-anchor" href="#二、组件使用案例" aria-label="Permalink to &quot;二、组件使用案例&quot;">​</a></h3><h4 id="_1、案例业务流程介绍" tabindex="-1">1、案例业务流程介绍 <a class="header-anchor" href="#_1、案例业务流程介绍" aria-label="Permalink to &quot;1、案例业务流程介绍&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%871.png" alt="图片1"></p><p>1）系统管理员在后台功能点权限勾选对应的功能点权限。<br> 2）获取后台勾选的功能点权限配置数据。<br> 3）小程序根据勾选的功能点权限配置数据以及UI页面自动生成UI功能点权限树。</p><h4 id="_2、案例相关截图" tabindex="-1">2、案例相关截图 <a class="header-anchor" href="#_2、案例相关截图" aria-label="Permalink to &quot;2、案例相关截图&quot;">​</a></h4><p>1）后台勾选功能点权限<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%872.png" alt="图片2"></p><p>2）获取后台小程序勾选的功能点权限配置数据<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%873.png" alt="图片3"></p><p>3）小程序根据勾选功能点权限配置数据以及UI页面自动生成UI功能点权限树<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%874.png" alt="图片4"></p><h3 id="三、小程序功能点权限配置方法" tabindex="-1">三、小程序功能点权限配置方法 <a class="header-anchor" href="#三、小程序功能点权限配置方法" aria-label="Permalink to &quot;三、小程序功能点权限配置方法&quot;">​</a></h3><h4 id="_1、前置条件和思路" tabindex="-1">1、前置条件和思路 <a class="header-anchor" href="#_1、前置条件和思路" aria-label="Permalink to &quot;1、前置条件和思路&quot;">​</a></h4><h5 id="_1-、前置条件" tabindex="-1">（1）、前置条件 <a class="header-anchor" href="#_1-、前置条件" aria-label="Permalink to &quot;（1）、前置条件&quot;">​</a></h5><p>使用小程序功能点权限配置组件的前提条件是必须集成部署apaas介质服务，统一使用8系apaas服务提供的登录系统，获取后台功能点权限配置数据，适用于专属云模式和独立部署模式。</p><h5 id="_1-、整体思路" tabindex="-1">（1）、整体思路 <a class="header-anchor" href="#_1-、整体思路" aria-label="Permalink to &quot;（1）、整体思路&quot;">​</a></h5><p>IDE新增UI界面，以8系apaas服务登录系统为桥梁，通过”生成器”把勾选的功能点权限配置数据以及UI页面数据，生成”UI权限树”，控制小程序视图层甚至逻辑层的功能点权限。</p><h4 id="_2、业务逻辑" tabindex="-1">2、业务逻辑 <a class="header-anchor" href="#_2、业务逻辑" aria-label="Permalink to &quot;2、业务逻辑&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%875.png" alt="图片5"></p><h4 id="_3、配置步骤" tabindex="-1">3、配置步骤 <a class="header-anchor" href="#_3、配置步骤" aria-label="Permalink to &quot;3、配置步骤&quot;">​</a></h4><h5 id="_1-、部署8系apaas服务" tabindex="-1">（1）、部署8系apaas服务 <a class="header-anchor" href="#_1-、部署8系apaas服务" aria-label="Permalink to &quot;（1）、部署8系apaas服务&quot;">​</a></h5><p>此步骤一般由开发（运维）人员完成，部署服务的介质请问李瑞烜，部署服务介质的步骤可以参考<a href="http://note.youdao.com/noteshare?id=c41783f227fa5ccdce882d4d95dccb1a&amp;sub=86FCA9B8CA414E65AB70D4FCD9243BCA%E3%80%82%E5%A6%82%E6%9E%9C%E8%BF%98%E4%B8%8D%E6%98%AF%E5%BE%88%E6%B8%85%E6%A5%9A%EF%BC%8C%E5%8F%AF%E4%BB%A5%E8%AF%B7%E6%95%99%E8%BF%90%E7%BB%B4%E4%BA%BA%E5%91%98%E3%80%82" target="_blank" rel="noreferrer">http://note.youdao.com/noteshare?id=c41783f227fa5ccdce882d4d95dccb1a&amp;sub=86FCA9B8CA414E65AB70D4FCD9243BCA。如果还不是很清楚，可以请教运维人员。</a></p><h5 id="_2-、apaas-配置功能点页面" tabindex="-1">（2）、apaas 配置功能点页面 <a class="header-anchor" href="#_2-、apaas-配置功能点页面" aria-label="Permalink to &quot;（2）、apaas 配置功能点页面&quot;">​</a></h5><p>使用apaas配置平台IDE配置一个空白的小程序UI页面。</p><h5 id="_3-、功能点关联对应页面" tabindex="-1">（3）、功能点关联对应页面 <a class="header-anchor" href="#_3-、功能点关联对应页面" aria-label="Permalink to &quot;（3）、功能点关联对应页面&quot;">​</a></h5><p>使用apaas配置平台的功能管理，在小程序功能点权限关联上对应的UI页面。</p><h5 id="_4-、小程序开发ui页面及编写-生成器" tabindex="-1">（4）、小程序开发UI页面及编写“生成器” <a class="header-anchor" href="#_4-、小程序开发ui页面及编写-生成器" aria-label="Permalink to &quot;（4）、小程序开发UI页面及编写“生成器”&quot;">​</a></h5><p>a、开发对应功能模块页面<br> b、新增“UI页面--功能点实体”<br> 注意：实体key对应UI页面的code<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%876.png" alt="图片6"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%877.png" alt="图片7"></p><p>c、编写权限树“生成器”，放在登录成功获取到功能点权限数据之后运行<br> “生成器”暂时只支持二级功能点<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%878.png" alt="图片8"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%879.png" alt="图片9"></p><h5 id="_5-、小程序用户登录后自动生成权限树" tabindex="-1">（5）、小程序用户登录后自动生成权限树 <a class="header-anchor" href="#_5-、小程序用户登录后自动生成权限树" aria-label="Permalink to &quot;（5）、小程序用户登录后自动生成权限树&quot;">​</a></h5><h5 id="_5-、用户使用" tabindex="-1">（5）、用户使用 <a class="header-anchor" href="#_5-、用户使用" aria-label="Permalink to &quot;（5）、用户使用&quot;">​</a></h5><h4 id="_4、配置示例过程-请假功能为例-纳爱斯开发环境" tabindex="-1">4、配置示例过程-请假功能为例-纳爱斯开发环境 <a class="header-anchor" href="#_4、配置示例过程-请假功能为例-纳爱斯开发环境" aria-label="Permalink to &quot;4、配置示例过程-请假功能为例-纳爱斯开发环境&quot;">​</a></h4><h5 id="_1-、apaas配置" tabindex="-1">（1）、apaas配置 <a class="header-anchor" href="#_1-、apaas配置" aria-label="Permalink to &quot;（1）、apaas配置&quot;">​</a></h5><p>a、新增一个小程序页面<br> 标题：小程序-请假申请<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8710.png" alt="图片10"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8711.png" alt="图片11"></p><p>b、关联功能点页面<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8712.png" alt="图片12"></p><h5 id="_2-、小程序开发配置" tabindex="-1">（2）、小程序开发配置 <a class="header-anchor" href="#_2-、小程序开发配置" aria-label="Permalink to &quot;（2）、小程序开发配置&quot;">​</a></h5><p>a、开发对应功能点菜单页面<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8713.png" alt="图片13"></p><p>b、新增“UI页面--功能点实体”<br> 实体中的key对应apaas配置IDE新增的UI页面code<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8714.png" alt="图片14"></p><p>c、编写“生成器”并在登录获取功能点权限数据之后调用<br> 以UI页面--功能点实体和获取勾选的功能点权限数据为基础，生成功能点权限树<br> “生成器”暂时支持二级功能点<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8715.png" alt="图片15"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8716.png" alt="图片16"></p><p>d、其他配置<br> 把权限树挂载到小程序对应的功能点上<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8717.png" alt="图片17"></p><h5 id="_3-、展示效果" tabindex="-1">（3）、展示效果 <a class="header-anchor" href="#_3-、展示效果" aria-label="Permalink to &quot;（3）、展示效果&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8718.png" alt="图片18"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8719.png" alt="图片19"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE-%E5%9B%BE%E7%89%8720.png" alt="图片20"></p><h3 id="组件包下载-百度网盘-也可到svn获取" tabindex="-1">组件包下载（百度网盘，也可到SVN获取） <a class="header-anchor" href="#组件包下载-百度网盘-也可到svn获取" aria-label="Permalink to &quot;组件包下载（百度网盘，也可到SVN获取）&quot;">​</a></h3><p>小程序权限配置组件-链接：<a href="https://pan.baidu.com/s/162TcFMMy431VJvf-F5CwVA" target="_blank" rel="noreferrer">https://pan.baidu.com/s/162TcFMMy431VJvf-F5CwVA</a><br> 提取码：3ut0<br> 直接下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC016-FC001-%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9D%83%E9%99%90%E9%85%8D%E7%BD%AE%E7%BB%84%E4%BB%B6.zip" title="COM-BC016-FC001 小程序权限配置组件" target="_blank" rel="noreferrer">COM-BC016-FC001 小程序权限配置组件</a></p>',54),o=[r];function n(c,h,s,i,l,B){return t(),E("div",null,o)}const b=a(p,[["render",n]]);export{A as __pageData,b as default};
