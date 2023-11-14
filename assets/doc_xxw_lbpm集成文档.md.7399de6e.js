import{_ as t,o as e,c as a,Q as o}from"./chunks/framework.aac09c5f.js";const s="/assets/image.2c7e9f05.png",i="/assets/image-6.af9960da.png",d="/assets/image-7.5dfdb5c4.png",c="/assets/image-8.7e2687e6.png",r="/assets/image-1.f23b1991.png",l="/assets/image-2.e62f3ac4.png",p="/assets/image-3.695e590e.png",n="/assets/image-4.f21ef172.png",m="/assets/image-5.3db9e5ec.png",_="/assets/image-11.530f5056.png",h="/assets/image-12.e114d088.png",g="/assets/image-13.a7746ee9.png",f="/assets/image-10.0ee6d7bd.png",b="/assets/image-9.ed326bf0.png",y=JSON.parse('{"title":"lbpm集成文档","description":"","frontmatter":{"title":"lbpm集成文档","date":"2023年11月14日12:03:22","outline":[2,3]},"headers":[],"relativePath":"doc/xxw/lbpm集成文档.md","filePath":"doc/xxw/lbpm集成文档.md"}'),u={name:"doc/xxw/lbpm集成文档.md"},x=o('<h1 id="lbpm集成文档" tabindex="-1">lbpm集成文档 <a class="header-anchor" href="#lbpm集成文档" aria-label="Permalink to &quot;lbpm集成文档&quot;">​</a></h1><p>API地址：<a href="https://apifox.com/apidoc/shared-ee0a1010-67dc-401a-96d4-c8a325a19675" target="_blank" rel="noreferrer">https://apifox.com/apidoc/shared-ee0a1010-67dc-401a-96d4-c8a325a19675</a></p><blockquote><p>本文档介绍如何在CRM上集成新希望蓝凌审批流</p></blockquote><h2 id="_1-流程配置" tabindex="-1">1.流程配置 <a class="header-anchor" href="#_1-流程配置" aria-label="Permalink to &quot;1.流程配置&quot;">​</a></h2><h3 id="_1-表单配置" tabindex="-1">1.表单配置 <a class="header-anchor" href="#_1-表单配置" aria-label="Permalink to &quot;1.表单配置&quot;">​</a></h3><p>CRM与LBPM集成需要先在CRM 我的工作-&gt;表单集成同步列表中新增同步表单如下如：</p><p><img src="'+s+'" alt="Alt text"></p><p>新增后在LBPM新增表单的时候就选择这个表单 <a href="https://mhuat.newhopedairy.cn/workState" target="_blank" rel="noreferrer">https://mhuat.newhopedairy.cn/workState</a> 账号：88001044 密码：123qweAS <img src="'+i+'" alt="Alt text"><img src="'+d+'" alt="Alt text"><img src="'+c+'" alt="Alt text"><img src="'+r+'" alt="Alt text"></p><p><img src="'+l+'" alt="选择表单"></p><p><img src="'+p+'" alt="选择表单值"></p><p>保存表单成功后点击CRM的同步按钮</p><p><img src="'+n+'" alt="Alt text"></p><p>再次编辑同步表单,选择刚才创建的表单就此关联完毕</p><p><img src="'+m+'" alt="Alt text"></p><h3 id="_2-流程回调设置" tabindex="-1">2.流程回调设置 <a class="header-anchor" href="#_2-流程回调设置" aria-label="Permalink to &quot;2.流程回调设置&quot;">​</a></h3><p>业务LBPM是异构系统在审批通过后需要回调CRM业务接口进行相应的审批流程处理 在上一步创建同步表单的时候需要填写回调邻域接口的调用名称也就是<code>FLY.call(funcNmae,param)</code>中的第一个参数; 如请假回调接口 <img src="'+_+'" alt="Alt text"> 名称由所属邻域英文名+行为方法名组成 <img src="'+h+'" alt="Alt text"></p><p>目前审批流程回调函数有</p><table><thead><tr><th>Function Name</th><th>中文名</th><th>flowStatus</th></tr></thead><tbody><tr><td>function_pass</td><td>通过</td><td>10</td></tr><tr><td>function_reject</td><td>驳回</td><td>20</td></tr><tr><td>function_transfer</td><td>转办</td><td>30</td></tr><tr><td>function_join</td><td>沟通</td><td>40</td></tr><tr><td>function_invalidate</td><td>废弃</td><td>50</td></tr><tr><td>function_create_ticket</td><td>加签</td><td>60</td></tr></tbody></table><p><code>回调函数</code>接受以下参数：<img src="'+g+'" alt="Alt text"> 通过<code>数据id</code>与<code>审批状态</code>进行响应的业务操作</p><h2 id="_2-发起流程" tabindex="-1">2.发起流程 <a class="header-anchor" href="#_2-发起流程" aria-label="Permalink to &quot;2.发起流程&quot;">​</a></h2><p>可参考请假审批页面PageCode:1648929246602727508</p><p><code>发起流程并起草逻辑</code></p><p><code>modellogiccode:1648991867368509529</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>简单的的来说只需要填写当前流程实例ID即可也就是<code>forminstanceid</code></p></div><ol><li>流程实例初始化</li><li>发起流程(起草)与处理流程同一个接口</li><li>本领域主要是发起流程 参数:</li></ol><ul><li>loginName: 不用传入,本领域会自动根据CRM的Token信息获取EPK登录名称(jobnumber)</li><li>forminstanceid: 单据(数据)的主键ID,必填</li><li>#flowtemplateid: (MK)流程模板ID,可以在mk_flowtemplate中获取,可以不填,但是如果这个不填,就必须填写pagecode字段</li><li>#pagecode: CRM系统的UI的PageCode,可以不填写,但是如果不填写,就必须填写flowtemplateid字段</li><li>entitycode: CRM实体定义的code,暂时可以不填写</li><li>subject: 建议填写,如果不填写,本领域会自动生成:xxx发起了yyy流程</li></ul><hr><p>发起后 <code>新希望页面</code><img src="'+f+'" alt="Alt text"><code>CRM流程中心</code><img src="'+b+'" alt="Alt text"></p><h2 id="_3-审批" tabindex="-1">3.审批 <a class="header-anchor" href="#_3-审批" aria-label="Permalink to &quot;3.审批&quot;">​</a></h2><p>相应人员审批</p>',30),k=[x];function P(A,q,C,M,w,R){return e(),a("div",null,k)}const I=t(u,[["render",P]]);export{y as __pageData,I as default};
