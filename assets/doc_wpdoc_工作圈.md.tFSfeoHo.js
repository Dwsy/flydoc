import{_ as t,o,c as e,R as d}from"./chunks/framework.E9w9IFh5.js";const u=JSON.parse('{"title":"工作圈","description":"","frontmatter":{"title":"工作圈","date":"2020-07-03T18:13:47.000Z"},"headers":[],"relativePath":"doc/wpdoc/工作圈.md","filePath":"doc/wpdoc/工作圈.md"}'),a={name:"doc/wpdoc/工作圈.md"},r=d('<h1 id="工作圈" tabindex="-1">工作圈 <a class="header-anchor" href="#工作圈" aria-label="Permalink to &quot;工作圈&quot;">​</a></h1><ol><li><p>外层依然是表单</p></li><li><p>工作圈以二开控件的形式配置在表单中</p></li><li><p>主要由两个二开控件：</p><p>workmoments：工作圈</p><p>workmomentssetting：工作圈分类设置</p></li><li><p><strong>其中的搜索直接用平台的filter控件，filter控件的basic为空，advanced非空，布局为悬浮状态。</strong></p></li></ol><p>​ <img src="http://apaas.wxchina.com:8881/wp-content/uploads/workmoments_mobile.png" alt=""> <img src="http://apaas.wxchina.com:8881/wp-content/uploads/workmomentssetting_mobile.png" alt=""></p><h2 id="workmoments" tabindex="-1">workmoments <a class="header-anchor" href="#workmoments" aria-label="Permalink to &quot;workmoments&quot;">​</a></h2><p>二开控件：&quot;工作圈&quot;</p><table><thead><tr><th>事件名称</th><th>事件trigger</th><th>事件含义</th></tr></thead><tbody><tr><td>加载事件</td><td>onload</td><td>加载工作圈显示的tab信息</td></tr><tr><td>tab加载事件</td><td>subonload</td><td>加载工作圈各tab页下的列表数据</td></tr><tr><td>收藏</td><td>collect</td><td>调用收藏提交接口，提交对象是focusrow数据</td></tr><tr><td>点赞</td><td>like</td><td>调用点赞提交接口，提交对象是focusrow数据</td></tr><tr><td>删除</td><td>delete</td><td>调用删除提交接口，提交对象是focusrow数据</td></tr><tr><td>链接分类设置</td><td>linksetting</td><td>链接到分类设置表单（配置workmomentssetting控件），实质是链接事件</td></tr></tbody></table><h2 id="workmomentssetting" tabindex="-1">workmomentssetting <a class="header-anchor" href="#workmomentssetting" aria-label="Permalink to &quot;workmomentssetting&quot;">​</a></h2><p>二开控件：&quot;工作圈分类设置&quot;</p><table><thead><tr><th>事件名称</th><th>事件trigger</th><th>事件含义</th></tr></thead><tbody><tr><td>加载事件</td><td>onload</td><td>加载分类设置信息</td></tr></tbody></table><p>分类设置提交后，可以通过callevent更新&quot;工作圈&quot;表单的tab信息，即重新调用加载事件</p>',10),n=[r];function s(i,l,c,m,p,h){return o(),e("div",null,n)}const w=t(a,[["render",s]]);export{u as __pageData,w as default};
