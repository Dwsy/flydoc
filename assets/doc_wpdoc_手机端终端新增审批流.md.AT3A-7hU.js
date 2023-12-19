import{_ as a,o as e,c as r,R as t}from"./chunks/framework.E9w9IFh5.js";const b=JSON.parse('{"title":"手机端终端新增审批流","description":"","frontmatter":{"title":"手机端终端新增审批流","date":"2023-06-15T14:54:24.000Z"},"headers":[],"relativePath":"doc/wpdoc/手机端终端新增审批流.md","filePath":"doc/wpdoc/手机端终端新增审批流.md"}'),o={name:"doc/wpdoc/手机端终端新增审批流.md"},p=t('<h1 id="终端新增审批流" tabindex="-1">终端新增审批流 <a class="header-anchor" href="#终端新增审批流" aria-label="Permalink to &quot;终端新增审批流&quot;">​</a></h1><p>终端相关的审批流，可以用于在新增客户终端与渠道终端客户时审批相关业务。</p><p>主要有以下几个部分组成。</p><ul><li><p>审批列表</p><p>专门用于显示待办和已办的审批数据的列表，该功能目前为内建的功能，只能引用，不支持配置</p></li><li><p>审批种类列表</p><p>在审批列表发起的新审批时，需要先选择审批种类，再新建审批。该功能目前只内置于<code>审批列表</code> 的页面中，不支持单独引用</p></li><li><p>审批发起协议</p><p>区别于在固定的 <code>审批列表</code> 中发起审批，系统支持在任意的业务表单中发起新审批。目前该功能以特殊表单行为的形式配置</p></li><li><p>审批表单</p><p>审批表单是以业务表单为基础，添加了审批相关操作（审批内容填写，查看，提交等）的业务化表单</p></li></ul><h2 id="审批表单的流程" tabindex="-1">审批表单的流程 <a class="header-anchor" href="#审批表单的流程" aria-label="Permalink to &quot;审批表单的流程&quot;">​</a></h2><h3 id="界面流转" tabindex="-1">界面流转 <a class="header-anchor" href="#界面流转" aria-label="Permalink to &quot;界面流转&quot;">​</a></h3><ul><li><p>新增，或者处理暂存</p><p>当用户通过发起流程按钮，或者在待办中点击尚未发起的暂存状态的流程进行处理的时候，都算作是新增审批操作</p></li><li><p>处理</p><p>当用户在待办列表中通过点击处理按钮进入时，均为处理审批操作</p></li></ul><h3 id="按钮操作的时序" tabindex="-1">按钮操作的时序 <a class="header-anchor" href="#按钮操作的时序" aria-label="Permalink to &quot;按钮操作的时序&quot;">​</a></h3><ul><li><p><strong>下一步</strong> 按钮(新增页面)</p><p>新增界面的下一步按钮的操作较为复杂，一般都会先上传数据，再获取下一步处理信息。而且会根据是发起按钮进入，还是草稿处理按钮进入，有不同的处理。</p></li><li><p><strong>下一步</strong> 按钮(处理界面，或者处理暂存界面)</p><p>在处理界面，下一步处理相对简单，只是简单的获取下一步处理信息。</p></li><li><p><strong>提交</strong> 按钮(新增，处理暂存，处理)</p><p>不管是新增，还是处理，提交按钮的处理都是一致的，区别仅在于新增的时候，部分处理界面特有的流程字段为空。</p></li></ul><h2 id="自定义审批流-详情请参见apaas平台流程自定义审批人" tabindex="-1">自定义审批流（详情请参见apaas平台<a href="http://apaas.wxchina.com:8881/2021/10/08/%E6%B5%81%E7%A8%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%A1%E6%89%B9%E4%BA%BA/" target="_blank" rel="noreferrer">流程自定义审批人</a>） <a class="header-anchor" href="#自定义审批流-详情请参见apaas平台流程自定义审批人" aria-label="Permalink to &quot;自定义审批流（详情请参见apaas平台[流程自定义审批人](http://apaas.wxchina.com:8881/2021/10/08/流程自定义审批人/)）&quot;">​</a></h2><h4 id="_1、数据库" tabindex="-1">1、数据库 <a class="header-anchor" href="#_1、数据库" aria-label="Permalink to &quot;1、数据库&quot;">​</a></h4><p><strong>创建业务实体</strong><br> 1、在ide业务实体里，导入“自选审批人存储业务对象-2021-08-18.json”和“自选事务签呈业务对象-2021-08-18.json”。<br> 2、在数据库执行差异化脚本“自选流程差异化脚本.txt”。</p><h4 id="_2、创建业务领域" tabindex="-1">2、创建业务领域 <a class="header-anchor" href="#_2、创建业务领域" aria-label="Permalink to &quot;2、创建业务领域&quot;">​</a></h4><p>1、自选事务流程业务行为-2021-08-18.json。<br> 完成业务领域的创建。</p><h4 id="_3、创建业务ui" tabindex="-1">3、创建业务UI <a class="header-anchor" href="#_3、创建业务ui" aria-label="Permalink to &quot;3、创建业务UI&quot;">​</a></h4><p>1、在业务UI里，导入“自选流程目录-2021-08-18.json”.<br> 2、在业务UI里，导入“自选流程业务UI-2021-08-18.json”.<br> 完成业务UI的创建。</p><h4 id="_4、配置导航、挂功能点" tabindex="-1">4、配置导航、挂功能点 <a class="header-anchor" href="#_4、配置导航、挂功能点" aria-label="Permalink to &quot;4、配置导航、挂功能点&quot;">​</a></h4><p>在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。</p><h4 id="_5、页面菜单权限配置" tabindex="-1">5、页面菜单权限配置 <a class="header-anchor" href="#_5、页面菜单权限配置" aria-label="Permalink to &quot;5、页面菜单权限配置&quot;">​</a></h4><p>用SFA管理员登录，在职位管理里，设置职位权限，勾选配置的页面。完成给该职位的人员页面访问权限的配置。</p><p>相关文件下载：</p><p><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC018-FC001%E6%B5%81%E7%A8%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%A1%E6%89%B9%E4%BA%BA2021-08-16.zip" target="_blank" rel="noreferrer">COM-BC018-FC001流程自定义审批人2021-08-16</a></p><h2 id="业务领域" tabindex="-1">业务领域 <a class="header-anchor" href="#业务领域" aria-label="Permalink to &quot;业务领域&quot;">​</a></h2><p>在IDE的领域内，配置新增终端审批流程开启开关参数/新增渠道审批流程开启开关参数作为对应审批流的领域接口。具体配置信息请参照IDE智慧100V5.3演示环境对应的领域接口。</p><h2 id="表单配置" tabindex="-1">表单配置 <a class="header-anchor" href="#表单配置" aria-label="Permalink to &quot;表单配置&quot;">​</a></h2><p>1.在IDE的UI表单中，配置《终端客户新增》/《渠道客户新增》表单作为对应的表单页面。</p><p>2.在加载数据里面配置“是否走审批动态调整审批状态入参”事件用来作为表单是否需要进行审批的来源。</p><p>3.配置提交保存事件，可共用非审批流提交保存事件，但需注意部分事件需要增加条件执行，具体请参考智慧100V5.3演示环境《终端客户新增》/《渠道客户新增》表单配置。</p><h2 id="流程配置" tabindex="-1">流程配置 <a class="header-anchor" href="#流程配置" aria-label="Permalink to &quot;流程配置&quot;">​</a></h2><p>1.在IDE流程配置中选择新增终端审批/新增渠道客户审批</p><p>2.在对应的流程中，新增申请节点与各级审批节点</p><p>3.在各级审批节点中，关联表单和审批人，增加审批结果选项</p><p>4.保存节点信息并进行测试验证。</p>',33),i=[p];function l(h,n,s,d,c,_){return e(),r("div",null,i)}const q=a(o,[["render",l]]);export{b as __pageData,q as default};
