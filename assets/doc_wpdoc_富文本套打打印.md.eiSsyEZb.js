import{_ as a,o as n,c as s,R as t}from"./chunks/framework.E9w9IFh5.js";const d=JSON.parse('{"title":"富文本套打打印","description":"","frontmatter":{"title":"富文本套打打印","date":"2021-07-14T18:45:44.000Z"},"headers":[],"relativePath":"doc/wpdoc/富文本套打打印.md","filePath":"doc/wpdoc/富文本套打打印.md"}'),p={name:"doc/wpdoc/富文本套打打印.md"},e=t(`<h1 id="富文本套打打印-实现方案" tabindex="-1">富文本套打打印 实现方案 <a class="header-anchor" href="#富文本套打打印-实现方案" aria-label="Permalink to &quot;富文本套打打印 实现方案&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h2 id="一、组件介绍" tabindex="-1">一、组件介绍 <a class="header-anchor" href="#一、组件介绍" aria-label="Permalink to &quot;一、组件介绍&quot;">​</a></h2><h3 id="_1、溯源-产生的原因" tabindex="-1">1、溯源，产生的原因 <a class="header-anchor" href="#_1、溯源-产生的原因" aria-label="Permalink to &quot;1、溯源，产生的原因&quot;">​</a></h3><p><strong>① 平台局限性</strong><br> 1、Apaas平台没有相关的富文本微服务图片生成程序，仅有手机端的协议合成以及手机端的协议分享功能；<br> 2、冠辉团队的Word套打服务不适用于多分公司，多事业部，每个月会新增不同协议的需求。<br> 即：根据预估会有几千的电子协议模板需要维护。使用Word套打时将需要维护富文本模板+Word模板。<br><strong>② 面临的问题</strong><br> 1、在使用app端富文本图片生成功能，生成图片上传保存至服务端及OSS时，经常出现：<br> a、协议图片不全<br> b、协议图片空白<br> c 、协议图片丢失<br> （概率很高，10张有5张异常的）<br> 图片问题列举如：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%871.png" alt="图片1"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%872.png" alt="图片2"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%873.png" alt="图片3"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%874.png" alt="图片4"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%875.png" alt="图片5"></p><p>2、无自动重新生成功能<br> 3、多个事业部分司审核出现问题，影响系统推广及日常正常使用</p><h3 id="_2、实现原理" tabindex="-1">2、实现原理 <a class="header-anchor" href="#_2、实现原理" aria-label="Permalink to &quot;2、实现原理&quot;">​</a></h3><h4 id="陈列协议" tabindex="-1">陈列协议 <a class="header-anchor" href="#陈列协议" aria-label="Permalink to &quot;陈列协议&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%876.png" alt="图片6"></p><h4 id="进货协议" tabindex="-1">进货协议 <a class="header-anchor" href="#进货协议" aria-label="Permalink to &quot;进货协议&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%877.png" alt="图片7"></p><h4 id="其他内容的富文本模板也使用相同原理" tabindex="-1">其他内容的富文本模板也使用相同原理…… <a class="header-anchor" href="#其他内容的富文本模板也使用相同原理" aria-label="Permalink to &quot;其他内容的富文本模板也使用相同原理……&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%878.png" alt="图片8"></p><h4 id="实现举例" tabindex="-1">实现举例 <a class="header-anchor" href="#实现举例" aria-label="Permalink to &quot;实现举例&quot;">​</a></h4><h5 id="电子协议模板" tabindex="-1">电子协议模板 <a class="header-anchor" href="#电子协议模板" aria-label="Permalink to &quot;电子协议模板&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%879.png" alt="图片9"></p><h5 id="协议签约内容" tabindex="-1">协议签约内容 <a class="header-anchor" href="#协议签约内容" aria-label="Permalink to &quot;协议签约内容&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8710.png" alt="图片10"></p><h5 id="电子协议" tabindex="-1">电子协议 <a class="header-anchor" href="#电子协议" aria-label="Permalink to &quot;电子协议&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8711.png" alt="图片11"></p><h3 id="_3、微服务使用实例" tabindex="-1">3、微服务使用实例 <a class="header-anchor" href="#_3、微服务使用实例" aria-label="Permalink to &quot;3、微服务使用实例&quot;">​</a></h3><p><strong>① 配置平台</strong></p><h5 id="极简版应用构成" tabindex="-1">极简版应用构成： <a class="header-anchor" href="#极简版应用构成" aria-label="Permalink to &quot;极简版应用构成：&quot;">​</a></h5><p>（1）业务实体数量：<br> 电子协议模板管理--- 1个<br> 签约内容，协议签约相关---根据企业功能具体情况而定，预估最低数量1个<br> 套打信息相关--- 2个</p><p>（2）业务领域数量：<br> 电子协议模板管理（新增、编辑、查询查看）---5个<br> 签约内容---（app&amp;web新增、编辑、查询查看等）---根据企业功能具体情况而定，最低数量预计10个<br> 套打相关（微服务、新增、编辑、查询查看、调度用、手动调用）---最低数量8个</p><p>（3）业务UI数量：<br> 电子协议模板--- 3个<br> 签约内容--- 根据企业功能具体情况而定，预估最低数量6个<br> 套打相关---3个</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8712.png" alt="图片12"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8713.png" alt="图片13"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8714.png" alt="图片14"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8715.png" alt="图片15"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8716.png" alt="图片16"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8717.png" alt="图片17"></p><p><strong>② 套打设置</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8718.png" alt="图片18"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8719.png" alt="图片19"></p><p><strong>③ 电子协议模板设置</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8720.png" alt="图片20"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8721.png" alt="图片21"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8722.png" alt="图片22"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8723.png" alt="图片23"></p><p><strong>四 电子协议自助生成</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8724.png" alt="图片24"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8725.png" alt="图片25"></p><h3 id="_4、组件服务、微服务特点及优点" tabindex="-1">4、组件服务、微服务特点及优点 <a class="header-anchor" href="#_4、组件服务、微服务特点及优点" aria-label="Permalink to &quot;4、组件服务、微服务特点及优点&quot;">​</a></h3><p>1、彻底避免电子协议图片缺角、空白、丢失的问题</p><p>2、功能及微服务接入配置简单，与现有富文本相关功能不冲突</p><p>3、可减少配置及开发工作量（原配置开发及调试消耗20人天以上，现只需5人天）</p><p>4、运行稳定，从2月1日上线生产环境至今，微服务运行0崩溃，0预警</p><p>5、协议图片生成速度快，平均耗时3~5秒</p><h2 id="二、配置手册" tabindex="-1">二、配置手册 <a class="header-anchor" href="#二、配置手册" aria-label="Permalink to &quot;二、配置手册&quot;">​</a></h2><h3 id="_1、概述" tabindex="-1">1、概述 <a class="header-anchor" href="#_1、概述" aria-label="Permalink to &quot;1、概述&quot;">​</a></h3><p>富文本套打适用于电子协议签约后需保存相关协议图片的企业，且图片时有不全，白图或者图片丢失的场景。目前富文本套打支持生成png图片以及pdf文件两种格式，暂无其他格式生成选项。</p><h3 id="_2、前置条件" tabindex="-1">2、前置条件 <a class="header-anchor" href="#_2、前置条件" aria-label="Permalink to &quot;2、前置条件&quot;">​</a></h3><p>使用套打组件的前提条件是必须按照《模板输出组件部署手册》中指明的部署步骤部署完毕，并做相关参数配置之后才能使用，适用于Saas模式，专属云模式和独立部署模式。富文本套打可支持同一环境下多租户模式。部署该微服务的企业需已有富文本相关功能，比如手机端的电子协议签约，后台端的富文本电子协议维护，后台的电子协议查询等功能。<br> Linux版CentOS服务器需支持Java，需支持中文字符集（可从windows字库进行上传相应字体支持）。</p><h3 id="_3、业务逻辑" tabindex="-1">3、业务逻辑 <a class="header-anchor" href="#_3、业务逻辑" aria-label="Permalink to &quot;3、业务逻辑&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8726.png" alt="图片26"></p><h5 id="_1-安装组件" tabindex="-1">（1）安装组件 <a class="header-anchor" href="#_1-安装组件" aria-label="Permalink to &quot;（1）安装组件&quot;">​</a></h5><p>此步骤一般由开发人员或者运维人员完成，请根据《模板输出组件部署手册》文档部署组件并验证组件的完整性。</p><h5 id="_2-确认打印-输出-的实体或者数据" tabindex="-1">（2）确认打印（输出）的实体或者数据 <a class="header-anchor" href="#_2-确认打印-输出-的实体或者数据" aria-label="Permalink to &quot;（2）确认打印（输出）的实体或者数据&quot;">​</a></h5><p>项目的实施人员与客户的关键用户讨论需求，确认需要套打输出的实体或者数据，以及用户的操作位置（按钮）等。</p><h5 id="_3-开发套打数据的领域接口" tabindex="-1">（3）开发套打数据的领域接口 <a class="header-anchor" href="#_3-开发套打数据的领域接口" aria-label="Permalink to &quot;（3）开发套打数据的领域接口&quot;">​</a></h5><p>这是配置/开发人员最重要的工作，开发一个领域接口，让套打微服务可以调用此接口获取需要套打的数据。这个接口的输入、输出及逻辑是必须符合套打微服务的需求，否则会发生错误。如果手机端已有相关富文本查看页面，可直接复用手机端页面的接口即可。</p><h5 id="_4-富文本模板" tabindex="-1">（4）富文本模板 <a class="header-anchor" href="#_4-富文本模板" aria-label="Permalink to &quot;（4）富文本模板&quot;">​</a></h5><p>目前富文本模板内容支持文本、数组、签名图片等，请先在相关富文本电子协议功能进行协议模板维护。</p><h5 id="_5-配置按钮或者提交调用逻辑" tabindex="-1">（5）配置按钮或者提交调用逻辑 <a class="header-anchor" href="#_5-配置按钮或者提交调用逻辑" aria-label="Permalink to &quot;（5）配置按钮或者提交调用逻辑&quot;">​</a></h5><p>开发人员或者实施人员需要根据客户的需求，在指定的位置上增加按钮或者其他人机互动的元素，以便相关功能调用富文本套打。</p><h5 id="_6-用户使用套打" tabindex="-1">（6）用户使用套打 <a class="header-anchor" href="#_6-用户使用套打" aria-label="Permalink to &quot;（6）用户使用套打&quot;">​</a></h5><p>最终用户使用手动更新，或者业务员提交签约数据时，调用相关的协议图片生成并保存。</p><h3 id="_4、用户使用套打过程-这一部分非必要" tabindex="-1">4、用户使用套打过程（这一部分非必要） <a class="header-anchor" href="#_4、用户使用套打过程-这一部分非必要" aria-label="Permalink to &quot;4、用户使用套打过程（这一部分非必要）&quot;">​</a></h3><p>我们在套打管理页面上增加了一个“套打测试”的按钮，可以在这里试一下套打用户过程。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8727.png" alt="图片27"><br> （1）进入套打管理列表<br> （2）选择一行需要套打的数据<br> （3）点击工具栏上的“套打测试”按钮，系统会弹出“套打模板选择”界面，系统会自动筛选需要的模板，并显示。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8728.png" alt="图片28"><br> （4）选择“模板名称”、“打开方式”和“输出格式”后，点击“输出”按钮即可。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8729.png" alt="图片29"><br> （5）完成后，在“输出结果”中就会有生成的文件，用户点击此文件即可下载。</p><p>备注：目前“打开方式”只支持“下载”，“输出格式”只支持“Word”，未来会开放更多的功能。</p><h3 id="_5、模板管理" tabindex="-1">5、模板管理 <a class="header-anchor" href="#_5、模板管理" aria-label="Permalink to &quot;5、模板管理&quot;">​</a></h3><p>模板管理一般来说都是客户的关键业务人员、IT人员或者我方的实施人员负责维护。<br> 模板管理的功能在不同项目上可能根据项目的需要，挂接到不同的菜单目录下，在红牛dev环境下，是挂在【系统】菜单目录下的【套打管理】。<br> 由于红牛项目有多类的富文本协议，所以需要维护多个套打管理记录。如果企业中只有1个富文本协议的场景，则该功能中只需要维护1行记录即可正常使用。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8730.png" alt="图片30"><br> 在这个界面上可以新增，修改对应的模板信息（不是编辑模板本身）。模板的信息如下：（目前不支持删除等其他操作）<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8731.png" alt="图片31"><br> 这里需要关注的是“接口领域”和“接口编码”以及“模板参数信息”这3个字段，“接口领域”和“接口编码”分别是领域模型中的modelcode和modellogiccode两个字段，详见下图：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8732.png" alt="图片32"><br> “模板参数信息”中，对应关系如下：</p><p>|{&quot;richtext&quot;:&quot;content&quot;,&quot;images&quot;:&quot;signature&quot;, &quot;inparams&quot;:&quot;{\\&quot;kx_purchase_sign\\&quot;: {\\&quot;id\\&quot;: \\&quot;$recid$\\&quot;}}&quot;}| |---|---| |richtext中content表示：|富文本数据的来源字段为“content”。“content”具体值可以是html方式的富文本模板（富文本编辑器早期的数据）、也可以是oss中保存的富文本信息（新富文本编辑器的数据）| |images中signature表示：|电子签名图片的来源字段为“signature”。| |inparams中的内容表示为：|富文本获取接口的参数（转译后的字符串格式），来源于IDE中的测试用例转译，$recid$为接口调用的动态id入参，在调用生成富文本时使用。|</p><h3 id="_6、业务逻辑" tabindex="-1">6、业务逻辑 <a class="header-anchor" href="#_6、业务逻辑" aria-label="Permalink to &quot;6、业务逻辑&quot;">​</a></h3><p>用户操作需要按钮或者其他人机交互元素，在组件中包含了一个样例，就是模板管理列表中的“测试套打”按钮。</p><h5 id="_1-测试套打-配置-原word版套打测试功能-可兼容" tabindex="-1">（1）测试套打 配置（原word版套打测试功能，可兼容）： <a class="header-anchor" href="#_1-测试套打-配置-原word版套打测试功能-可兼容" aria-label="Permalink to &quot;（1）测试套打 配置（原word版套打测试功能，可兼容）：&quot;">​</a></h5><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8733.png" alt="图片33"><br> A、新建表单事件，事件类型是“链接”<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8734.png" alt="图片34"><br> B、配置链接的参数如下<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8735.png" alt="图片35"><br> C、其中需要处理传入参数<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8736.png" alt="图片36"><br> 其中关键的是groupkey，大部分情况下都是写死（因为每个界面呈现的应该是同一种数据，所以groupkey大部分情况是固定的）；recid也是必须传入的，表示数据的关键字。<br> D、最后按钮绑定该事件即可</p><h5 id="_2-手动调用按钮-配置" tabindex="-1">（2）手动调用按钮 配置： <a class="header-anchor" href="#_2-手动调用按钮-配置" aria-label="Permalink to &quot;（2）手动调用按钮 配置：&quot;">​</a></h5><p>目标效果如下图<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8737.png" alt="图片37"><br> 配置按钮：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8738.png" alt="图片38"><br> 配置事件：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8739.png" alt="图片39"><br> 接口参数设置：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8740.png" alt="图片40"><br> 设置完成事件后，与按钮以及功能点进行绑定。</p><h3 id="_7、开发套打数据接口" tabindex="-1">7、开发套打数据接口 <a class="header-anchor" href="#_7、开发套打数据接口" aria-label="Permalink to &quot;7、开发套打数据接口&quot;">​</a></h3><p>这一步骤对于实施人员来说是最关键的。微服务会通过套打模板配置读取接口信息，并调用接口。接口的输入参数和输出结构都必须符合微服务的要求，否则都会发生错误，可根据错误提示进行修改。<br> 套打组件部署后，会有一个套打接口的事例，详见【业务领域】-【套打管理--实施】-【富文本新协议套打图片-人为单点-demo数据测试】中可以查看具体的样例。</p><h4 id="_1-接口的入参" tabindex="-1">（1）接口的入参 <a class="header-anchor" href="#_1-接口的入参" aria-label="Permalink to &quot;（1）接口的入参&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>参数固定格式：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;printinfo&quot;: {</span></span>
<span class="line"><span>        &quot;templateid&quot;: &quot;&quot;,    //套打模板主键id</span></span>
<span class="line"><span>        &quot;recid&quot;: &quot;&quot;,    //业务数据记录id</span></span>
<span class="line"><span>        &quot;doctype&quot;: &quot;&quot;,   // j表示png图片，p表示PDF</span></span>
<span class="line"><span>        &quot;viewtype&quot;: &quot;&quot;,  //固定值D</span></span>
<span class="line"><span>        &quot;scheduling&quot;: &quot;&quot;   // 操作方式，空和1表示手动，2表示调度</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>其中templateid就是选择对应套打模板的主键Id，recid就是要套打的数据的主键，doctype指定输出的文件格式，j表示png图片，p表示PDF文件。必须是这种结构，否则无法获取数据。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_2-微服务输出的结构" tabindex="-1">（2）微服务输出的结构 <a class="header-anchor" href="#_2-微服务输出的结构" aria-label="Permalink to &quot;（2）微服务输出的结构&quot;">​</a></h4><table><thead><tr><th>字段</th><th>含义</th></tr></thead><tbody><tr><td>date</td><td>生成时间</td></tr><tr><td>filename</td><td>文件名</td></tr><tr><td>filesize</td><td>文件大小</td></tr><tr><td>type</td><td>http文件类型</td></tr><tr><td>url</td><td>图片id</td></tr><tr><td>ossfilesrc</td><td>OSS中存储的图片信息，转格式后用来直接数据库保存。示例：[{\\&quot;date\\&quot;:1621854436340,\\&quot;filename\\&quot;:\\&quot;签约协议（接口测试）\\&quot;,\\&quot;filesize\\&quot;:4220,\\&quot;type\\&quot;:\\&quot;image/x-png,image/apng,image/png\\&quot;,\\&quot;url\\&quot;:\\&quot;1f2eab24-5bd7-4587-855b-0b19a8a637db.png\\&quot;,\\&quot;ossfilesrc\\&quot;:{\\&quot;datetime\\&quot;:\\&quot;1621854436340\\&quot;,\\&quot;watermark\\&quot;:\\&quot;签约协议（接口测试）\\&quot;,\\&quot;source\\&quot;:\\&quot;1f2eab24-5bd7-4587-855b-0b19a8a637db.png\\&quot;,\\&quot;sourcepath\\&quot;:\\&quot;/1f2/img/20210524/1008446/1f2eab24-5bd7-4587-855b-0b19a8a637db.png\\&quot;}}]</td></tr></tbody></table><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PNG调用测试参数：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;printinfo&quot;:{</span></span>
<span class="line"><span>        &quot;templateid&quot;:&quot;1355900011177755584&quot;,</span></span>
<span class="line"><span>        &quot;recid&quot;:&quot;10000&quot;,</span></span>
<span class="line"><span>        &quot;doctype&quot;:&quot;J&quot;,</span></span>
<span class="line"><span>        &quot;viewtype&quot;:&quot;D&quot;,</span></span>
<span class="line"><span>        &quot;scheduling&quot;:&quot;1&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>png格式：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;resp_data&quot;:{</span></span>
<span class="line"><span>        &quot;date&quot;:1621854737206,</span></span>
<span class="line"><span>        &quot;filename&quot;:&quot;签约协议（接口测试）&quot;,</span></span>
<span class="line"><span>        &quot;filesize&quot;:7671,</span></span>
<span class="line"><span>        &quot;type&quot;:&quot;image/x-png,image/apng,image/png&quot;,</span></span>
<span class="line"><span>        &quot;url&quot;:&quot;37a7dc86-b13a-40f9-94ad-1e0687794855.png&quot;,</span></span>
<span class="line"><span>        &quot;ossfilesrc&quot;:{</span></span>
<span class="line"><span>            &quot;datetime&quot;:&quot;1621854737206&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;:&quot;签约协议（接口测试）&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;:&quot;37a7dc86-b13a-40f9-94ad-1e0687794855.png&quot;,</span></span>
<span class="line"><span>            &quot;sourcepath&quot;:&quot;/37a/img/20210524/1008446/37a7dc86-b13a-40f9-94ad-1e0687794855.png&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PDF调用测试参数：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;printinfo&quot;:{</span></span>
<span class="line"><span>        &quot;templateid&quot;:&quot;1355900011177755584&quot;,</span></span>
<span class="line"><span>        &quot;recid&quot;:&quot;10000&quot;,</span></span>
<span class="line"><span>        &quot;doctype&quot;:&quot;P&quot;,</span></span>
<span class="line"><span>        &quot;viewtype&quot;:&quot;D&quot;,</span></span>
<span class="line"><span>        &quot;scheduling&quot;:&quot;1&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>pdf格式：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;resp_data&quot;:{</span></span>
<span class="line"><span>        &quot;date&quot;:1621854993953,</span></span>
<span class="line"><span>        &quot;filename&quot;:&quot;签约协议（接口测试）&quot;,</span></span>
<span class="line"><span>        &quot;filesize&quot;:7660,</span></span>
<span class="line"><span>        &quot;type&quot;:&quot;image/x-png,image/apng,image/png&quot;,</span></span>
<span class="line"><span>        &quot;url&quot;:&quot;d130258a-fdab-400f-83c2-ce56c67c90a6.png&quot;,</span></span>
<span class="line"><span>        &quot;ossfilesrc&quot;:{</span></span>
<span class="line"><span>            &quot;datetime&quot;:&quot;1621854993953&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;:&quot;签约协议（接口测试）&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;:&quot;d130258a-fdab-400f-83c2-ce56c67c90a6.png&quot;,</span></span>
<span class="line"><span>            &quot;sourcepath&quot;:&quot;/d13/img/20210524/1008446/d130258a-fdab-400f-83c2-ce56c67c90a6.png&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>转OSS格式：</span></span>
<span class="line"><span>var imagel3 = [];  imagel3.push(JSON.parse(response.resp_data.ossfilesrc));</span></span>
<span class="line"><span>var  protocol = JSON.stringify(imagel3);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h3 id="_8、模板编写" tabindex="-1">8、模板编写 <a class="header-anchor" href="#_8、模板编写" aria-label="Permalink to &quot;8、模板编写&quot;">​</a></h3><p>如图：在富文本电子协议管理中进行维护相应的模板内容及变量。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8741.png" alt="图片41"></p><h3 id="_9、部署安装" tabindex="-1">9、部署安装 <a class="header-anchor" href="#_9、部署安装" aria-label="Permalink to &quot;9、部署安装&quot;">​</a></h3><h4 id="_1-程序jar包" tabindex="-1">（1）程序Jar包 <a class="header-anchor" href="#_1-程序jar包" aria-label="Permalink to &quot;（1）程序Jar包&quot;">​</a></h4><p>由组件管理员下发最新版本，目前最新版本V1.0.0，包名为：newrichtextservices-1.0.0.jar</p><h4 id="_2-微服务定义" tabindex="-1">（2）微服务定义 <a class="header-anchor" href="#_2-微服务定义" aria-label="Permalink to &quot;（2）微服务定义&quot;">​</a></h4><p>方法名：flycode调用时标记<br> 服务名：<a href="http://localhost:30130" target="_blank" rel="noreferrer">http://localhost:30130</a> IP及监听端口支持自定义，需要和部署的服务配置application.properties端口保持一致。<br> 路径： /pem5kj/pem5/richtextsvr/printdata 固定<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0-%E5%9B%BE%E7%89%8742.png" alt="图片42"></p><h4 id="_3-配置文件" tabindex="-1">（3）配置文件 <a class="header-anchor" href="#_3-配置文件" aria-label="Permalink to &quot;（3）配置文件&quot;">​</a></h4><p>linux命令：找到同目录下application.properties文件修改参数配置<br> windows：使用文件编辑器修改内容application.properties文件修改参数配置</p><p>application.properties配置文件修改内容<br> 1、apaas.baseurl 为7000端口对应的地址，可使用外网或者内网的<br> 2、OSS配置信息需修改为对应环境正确的：<br> oss.Storage.StorageEndpoint=<a href="http://oss-cn-beijing.aliyuncs.com" target="_blank" rel="noreferrer">http://oss-cn-beijing.aliyuncs.com</a><br> oss.Storage.StorageBucket=apaas-storage-test<br> oss.Storage.AccesskeyId=LTAInGHJeX<br> oss.Storage.AccesskeySecret=jWB636gP8Hj1C0<br> oss.Storage.HttpAddress=<a href="http://apaas-storst.oss-cn-beijing.aliyuncs.com" target="_blank" rel="noreferrer">http://apaas-storst.oss-cn-beijing.aliyuncs.com</a><br> 3、其他属性使用默认值即可</p><h4 id="_4-服务程序启动脚本" tabindex="-1">（4）服务程序启动脚本 <a class="header-anchor" href="#_4-服务程序启动脚本" aria-label="Permalink to &quot;（4）服务程序启动脚本&quot;">​</a></h4><p>详见“deploy.sh”<br> 注意：<br> 1.Jar包与服务启动脚本放在同一部署目录下<br> 2.修改服务启动脚本的权限：chmod +x deploy.sh 或使用sh进行脚本运行<br> 3.deploy.sh 启动脚本修改内容：-Xmx2192m -Xms524m 根据服务器实际空余内存，修改Java进程内存大小，最大内存-Xmx可配置 2g ~ 8g的范围已足够；最小值-Xms一般不需要修改。</p><h4 id="_5-运维日志" tabindex="-1">（5）运维日志 <a class="header-anchor" href="#_5-运维日志" aria-label="Permalink to &quot;（5）运维日志&quot;">​</a></h4><p>见当前部署目录/home/apaas/newrichtextservices/下的logs目录文件</p><h4 id="_6-部署路径及运维监控设置" tabindex="-1">（6）部署路径及运维监控设置 <a class="header-anchor" href="#_6-部署路径及运维监控设置" aria-label="Permalink to &quot;（6）部署路径及运维监控设置&quot;">​</a></h4><table><thead><tr><th>分类</th><th>说明</th></tr></thead><tbody><tr><td>服务部署路径</td><td>/home/apaas/newrichtextservices/</td></tr><tr><td>服务端口</td><td><a href="http://xn--ip-fr5c86ls3h1psu41f:30130" target="_blank" rel="noreferrer">http://实际服务器ip:30130</a> （多台机器则本机防火墙需放行端口）</td></tr><tr><td>服务健康检查路径</td><td>/pem5kj/health/info</td></tr><tr><td>每天日志路径</td><td>/home/apaas/newrichtextservices/logs/（可删除历史天）</td></tr><tr><td>每天临时图片路径</td><td>/home/apaas/newrichtextservices/tempfiles/osstempfiles/（可删除历史天）</td></tr></tbody></table><h3 id="组件包下载-百度网盘-也可到svn获取" tabindex="-1">组件包下载（百度网盘，也可到SVN获取） <a class="header-anchor" href="#组件包下载-百度网盘-也可到svn获取" aria-label="Permalink to &quot;组件包下载（百度网盘，也可到SVN获取）&quot;">​</a></h3><p>富文本套打打印组件-链接：<a href="https://pan.baidu.com/s/1u486JCC6OGTGx9dY0g330A" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1u486JCC6OGTGx9dY0g330A</a><br> 提取码：ymq5<br> 直接下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC003-FC001-%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0.zip" title="COM-BC003-FC001 富文本套打打印" target="_blank" rel="noreferrer">COM-BC003-FC001 富文本套打打印</a><br> 视频讲解：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%BB%84%E5%9B%BD%E8%8D%A3%E3%80%8A%E5%AF%8C%E6%96%87%E6%9C%AC%E5%A5%97%E6%89%93%E6%89%93%E5%8D%B0%E3%80%8B.zip" title="黄国荣《富文本套打打印》" target="_blank" rel="noreferrer">黄国荣《富文本套打打印》</a></p>`,92),r=[e];function o(l,i,c,E,u,h){return n(),s("div",null,r)}const m=a(p,[["render",o]]);export{d as __pageData,m as default};
