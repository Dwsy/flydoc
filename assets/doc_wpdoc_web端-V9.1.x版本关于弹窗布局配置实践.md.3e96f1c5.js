import{_ as a,o as E,c as p,Q as t}from"./chunks/framework.d084db19.js";const d=JSON.parse('{"title":"web端-V9.1.x版本关于弹窗布局配置实践","description":"","frontmatter":{"title":"web端-V9.1.x版本关于弹窗布局配置实践","date":"2020-07-16T11:37:24.000Z"},"headers":[],"relativePath":"doc/wpdoc/web端-V9.1.x版本关于弹窗布局配置实践.md","filePath":"doc/wpdoc/web端-V9.1.x版本关于弹窗布局配置实践.md"}'),B={name:"doc/wpdoc/web端-V9.1.x版本关于弹窗布局配置实践.md"},o=t('<h2 id="web端-v9-1-x版本关于弹窗布局配置实践" tabindex="-1">web端-V9.1.x版本关于弹窗布局配置实践 <a class="header-anchor" href="#web端-v9-1-x版本关于弹窗布局配置实践" aria-label="Permalink to &quot;web端-V9.1.x版本关于弹窗布局配置实践&quot;">​</a></h2><p>版本要求：web包（V9.1.x）</p><p>简述：web端弹窗内容的样式布局比较灵活，早期配置人员不懂得布局样式，存在一些样式问题，包括早起产品推出的模块弹窗都是存在一些样式隐患，这里提供最佳的布局实践指导。</p><h4 id="项目环境拆分-独立部署环境修改方案" tabindex="-1">项目环境拆分/独立部署环境修改方案： <a class="header-anchor" href="#项目环境拆分-独立部署环境修改方案" aria-label="Permalink to &quot;项目环境拆分/独立部署环境修改方案：&quot;">​</a></h4><p>对于原产品页面，联系平台，平台在基础元数据表单调整后，导出协议json提供项目组导入，平台仅支持原产品级表单调整;<br> 对于项目页面，平台提供配置改进建议，由项目组人员自行调整!</p><h3 id="布局场景指导" tabindex="-1">布局场景指导： <a class="header-anchor" href="#布局场景指导" aria-label="Permalink to &quot;布局场景指导：&quot;">​</a></h3><h4 id="一、-场景一-终端管理-新增-编辑弹窗" tabindex="-1">一、 场景一：终端管理- 新增/编辑弹窗 <a class="header-anchor" href="#一、-场景一-终端管理-新增-编辑弹窗" aria-label="Permalink to &quot;一、 场景一：终端管理- 新增/编辑弹窗&quot;">​</a></h4><p>问题截图：没有内边距</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B51.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B52.png" alt=""></p><p>1、tabboard内容区域先套一层layout再放内容。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B53.png" alt=""></p><p>2、同样设置内边距</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B54.png" alt=""></p><p>效果</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B55.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B56.png" alt=""></p><h4 id="一、-场景二-产品管理-新增-编辑弹窗" tabindex="-1">一、 场景二：产品管理- 新增/编辑弹窗 <a class="header-anchor" href="#一、-场景二-产品管理-新增-编辑弹窗" aria-label="Permalink to &quot;一、 场景二：产品管理- 新增/编辑弹窗&quot;">​</a></h4><p>问题：（使用外边距属性而不是内边距属性的样式差异）</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B57.png" alt=""></p><p>1、删除layout的外边距</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B58.png" alt=""></p><p>1、1、 改为边距样式</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B59.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B510.png" alt=""></p><p>效果</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B511.png" alt=""></p><h4 id="三、实现场景左边树导航固定-右边超长内容内部滚动的布局" tabindex="-1">三、实现场景左边树导航固定，右边超长内容内部滚动的布局 <a class="header-anchor" href="#三、实现场景左边树导航固定-右边超长内容内部滚动的布局" aria-label="Permalink to &quot;三、实现场景左边树导航固定，右边超长内容内部滚动的布局&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B512.png" alt=""></p><h4 id="四、月度出差管理-条码进场-费用项目" tabindex="-1">四、月度出差管理/条码进场-费用项目 <a class="header-anchor" href="#四、月度出差管理-条码进场-费用项目" aria-label="Permalink to &quot;四、月度出差管理/条码进场-费用项目&quot;">​</a></h4><p>问题：弹窗 tabboard布局，内容超出弹窗高度出现双滚动条</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B513.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B514.png" alt=""></p><p>新弹窗不设置height的情况下默认height为100% ， 内容高度 &gt; 弹窗height高度则存在滚动条，</p><p>上述场景的问题：</p><p>由于弹窗内容总高度（表格高度500 + 按钮的高度） &gt; 600所以显示滚动条，</p><p>两种做法： 1、加弹框高度610 ； 2、内容高度表格改成flex:1自适应</p><p>修改后效果：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B515.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B516.png" alt=""></p><h4 id="五、要货计划-变更审核" tabindex="-1">五、要货计划-变更审核 <a class="header-anchor" href="#五、要货计划-变更审核" aria-label="Permalink to &quot;五、要货计划-变更审核&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B517.png" alt=""></p><p>内容加一层layout , flex:1，table控件给个最小高度300</p><p>最终效果：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B518.png" alt=""></p><h4 id="六、组织kpi设置-–-批量新增-批量设置" tabindex="-1">六、组织KPI设置 – 批量新增/批量设置 <a class="header-anchor" href="#六、组织kpi设置-–-批量新增-批量设置" aria-label="Permalink to &quot;六、组织KPI设置 – 批量新增/批量设置&quot;">​</a></h4><p>新版本UI解决部分多重滚动条场景，弹窗不配置高度值，则默认高度为100%</p><p>对于部分详情内容少的弹窗，建议按需提供一个高度值</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B519.png" alt=""></p><p>例如列表界面，链接事件给弹窗高度值380</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B520.png" alt=""></p><p>效果</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B521.png" alt=""></p><h4 id="七、预算管理-预算编制-预算发布按钮" tabindex="-1">七、预算管理-预算编制-预算发布按钮 <a class="header-anchor" href="#七、预算管理-预算编制-预算发布按钮" aria-label="Permalink to &quot;七、预算管理-预算编制-预算发布按钮&quot;">​</a></h4><p>问题：弹窗所有layout分层都是用flex:1,导致平分高度</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B522.png" alt=""></p><p>修改：</p><p>去掉按钮栏layout的弹性比例属性（flex），不配置默认会使用按钮本身高度，</p><p>表格控件配置弹性比例属性（flex）为1，占满剩余高度。</p><p>效果</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B523.png" alt=""></p><h4 id="八、执行-稽核管理-条码进场陈列照片审核" tabindex="-1">八、执行/稽核管理 -条码进场陈列照片审核 <a class="header-anchor" href="#八、执行-稽核管理-条码进场陈列照片审核" aria-label="Permalink to &quot;八、执行/稽核管理 -条码进场陈列照片审核&quot;">​</a></h4><p>问题：表单项每行的layout配置flex：1，平分了弹窗高度</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B524.png" alt=""></p><p>里对每一行layout使用了弹性比例属性为1（flex:1），表示每行平分弹窗高度值</p><p>所以行与行之间的留白多</p><p>调整：去掉flex:1</p><p>效果</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BC%B9%E7%AA%97%E5%B8%83%E5%B1%80%E9%85%8D%E7%BD%AE%E5%AE%9E%E8%B7%B525.png" alt=""></p>',69),n=[o];function e(c,l,s,h,i,A){return E(),p("div",null,n)}const m=a(B,[["render",e]]);export{d as __pageData,m as default};
