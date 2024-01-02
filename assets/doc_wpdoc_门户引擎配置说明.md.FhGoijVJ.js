import{_ as a,c as t,o as p,U as e}from"./chunks/framework.K-r7inPk.js";const u=JSON.parse('{"title":"门户引擎配置说明","description":"","frontmatter":{"title":"门户引擎配置说明","date":"2022-11-14T09:58:27.000Z"},"headers":[],"relativePath":"doc/wpdoc/门户引擎配置说明.md","filePath":"doc/wpdoc/门户引擎配置说明.md"}'),o={name:"doc/wpdoc/门户引擎配置说明.md"},d=e('<h1 id="门户引擎配置说明" tabindex="-1">门户引擎配置说明 <a class="header-anchor" href="#门户引擎配置说明" aria-label="Permalink to &quot;门户引擎配置说明&quot;">​</a></h1><ul><li>编辑:林志权</li><li>时间：2022-11-14</li><li>状态:已完成</li><li>适用范围：智慧100V6.1</li></ul><h2 id="一、功能介绍" tabindex="-1">一、功能介绍 <a class="header-anchor" href="#一、功能介绍" aria-label="Permalink to &quot;一、功能介绍&quot;">​</a></h2><p>门户引擎可以提供用户级配置工作台首页的能力，并且根据职位的不同，可以配置出不同的工作台主页和App端首页。</p><p>该功能能解决什么问题？</p><p>实际企业中，各级人员打开工作台（APP端首页）页面之后，希望看到的数据是不一样的，业务员可能更加关注自己的业务执行情况本身，而管理者可能更加注重的是汇总之后的数据。每个企业对于数据来源的需求也不一致，因此这部分页面需要单独定制，有了这个门户引擎的功能之后，我们就可以快速的响应需求，通过简单的拖拽模块实例，快速组装出一个符合需求的页面，大大提高了业务响应能力并且减少了页面形成的时间。</p><h2 id="二、概念梳理" tabindex="-1">二、概念梳理 <a class="header-anchor" href="#二、概念梳理" aria-label="Permalink to &quot;二、概念梳理&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114172606925.png" alt=""></p><p>​ 示例工作台（Web端）</p><p>门户引擎中有两个概念：</p><p>1.模块实例：即组装页面的小模块。上图中待办消息、通知公告、本月新增客户数等等小的模块就是一个模块实例，此实例允许实施人员按照规则，接入不同的数据来源。</p><p>2.工作台：即用户能够看到的页面展现。</p><h2 id="三、如何配置" tabindex="-1">三、如何配置 <a class="header-anchor" href="#三、如何配置" aria-label="Permalink to &quot;三、如何配置&quot;">​</a></h2><p>配置一个页面需要三步，在产品配置中心按照下图进行即可。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114162104073.png" alt=""></p><h3 id="_3-1-创建新的模块实例" tabindex="-1">3.1 创建新的模块实例 <a class="header-anchor" href="#_3-1-创建新的模块实例" aria-label="Permalink to &quot;3.1 创建新的模块实例&quot;">​</a></h3><p>首先先进入配置中心。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114162311086.png" alt=""></p><p>红框部分即可以配置模块实例的地方。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114162358237.png" alt=""></p><h4 id="_3-1-1-配置样例" tabindex="-1">3.1.1 配置样例 <a class="header-anchor" href="#_3-1-1-配置样例" aria-label="Permalink to &quot;3.1.1 配置样例&quot;">​</a></h4><p>举例新增一个web端的条线进度模块实例</p><p>点击新增，然后在弹出的地方选中条形进度。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114162710824.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114162626198.png" alt=""></p><p>可以看到，点击新增之后选择条形进度之后能看到左边有配置实例的相关说明。实例模板列代表了用户能看到的样式、数据格式代表了配置人员提供的接口返回数据要遵循的格式、配置说明列则是文字版的简要配置说明。</p><h4 id="_3-1-2-模块实例配置说明" tabindex="-1">3.1.2 模块实例配置说明： <a class="header-anchor" href="#_3-1-2-模块实例配置说明" aria-label="Permalink to &quot;3.1.2 模块实例配置说明：&quot;">​</a></h4><table><thead><tr><th><strong>参数</strong></th><th>说明</th><th>配置建议</th></tr></thead><tbody><tr><td>模块实例名称：</td><td>相当于消息列表实例的名字，在配置工作台时，实例列表可以根据这个实例名称快速搜索找到对应的模块实例。</td><td>端名+控件标题，如：SFA-轮播图、DMS-轮播图</td></tr><tr><td>备注：</td><td>对实例进行备注说明。</td><td></td></tr><tr><td>控件标题：</td><td>配置实例的标题。即用户能实际看到的标题。</td><td>不要加上端名，因为这是用户实际能看到的标题。</td></tr><tr><td>数据接口：</td><td>（如果有这个配置项）数据接口是必填项，用于获取接口返回的信息。</td><td>领域接口的：modelcode/modellogiccode，如904911040171610190/1555784740987080784</td></tr><tr><td>跳转链接：</td><td>点击标题右边箭头跳转页面的链接</td><td>如果模块具备跳转页面需求，需要按照规则编写跳转链接，具体可以看下面说明</td></tr></tbody></table><p>跳转链接说明：</p><p>1、跳转内部页面<br> （1）链接格式为用&amp;拼接的jumptype、pagecode、mode和其他参数；<br> （2）jumptype=1代表跳转IDE配置页面，此时pagcode是页面code，例如跳转终端管理：jumptype=1&amp;pagecode=902059867970342966；<br> （3）jumptype=2代表跳转原生页面，此时的pegcode是native:原生页面的路由或链接，例如跳转流程中心：jumptype=2&amp;pagecode=native:flow；具体可以看下面图片<br> （4）mode代表页面链接的打开模式，非必须，当mode=popup时，以弹窗形式打开，不指定mode时，默认全屏打开下一页，例如弹窗打开终端管理：jumptype=1&amp;pagecode=902059867970342966&amp;mode=popup；</p><p>2、跳转外部页面<br> （1）完整粘贴页面链接，例如跳转百度：<a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a>。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114165948234.png" alt=""></p><p>​ 跳转原生页面的路由或者链接如何确定链接示例，如上图即为jumptype=2&amp;pagecode=native:flow跳转结果</p><h3 id="_3-2-创建工作台" tabindex="-1">3.2 创建工作台 <a class="header-anchor" href="#_3-2-创建工作台" aria-label="Permalink to &quot;3.2 创建工作台&quot;">​</a></h3><h4 id="_3-2-1-配置示例" tabindex="-1">3.2.1 配置示例 <a class="header-anchor" href="#_3-2-1-配置示例" aria-label="Permalink to &quot;3.2.1 配置示例&quot;">​</a></h4><p>示例配置一个web工作台，如图所示，在web首页工作台处点击新增可以看到如下界面，根据需要可以选择内置的布局（进入后仍可修改布局）。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114170443731.png" alt=""></p><p>如图，我们希望配置一个有三层的页面，可以往里面添加三层栅格,并且第一层上有两列数据，占比为1:2，于是可以按照红框中进行设置，左侧业务模块中，可以输入关键词模糊搜索需要的模块，如此处输入了SFA，就能见模块实例中实例名称含有SFA的筛选出来。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114171305877.png" alt=""></p><p>此外，在此处添加模块实例，还可以修改模块实例的一些配置（不会影响到模块实例的实际配置，仅对这个页面生效），如此处我开启了显影功能</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114171949630.png" alt=""></p><p>配置好后，点击发布，会弹出，此处我们直接勾选发布并配置权限,会跳转到配置权限页面。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114172050449.png" alt=""></p><p>如图，在想要的职位上选中刚刚配置的SFA-示例工作台-总经理，这里选中引用到全权限职位上，保存即可。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114172225961.png" alt=""></p><p>最后，登录相关账号即可看到效果。<strong>注意：web端刷新页面即可获取到最新发布的工作台页面，APP端需要清除缓存。</strong></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-20221114172606925.png" alt=""></p>',47),c=[d];function n(r,i,l,h,s,m){return p(),t("div",null,c)}const _=a(o,[["render",n]]);export{u as __pageData,_ as default};
