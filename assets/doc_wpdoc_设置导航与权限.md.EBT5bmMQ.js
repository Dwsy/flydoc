import{_ as t,c as a,o,U as l}from"./chunks/framework.FhXPyWfz.js";const _=JSON.parse('{"title":"设置导航与权限","description":"","frontmatter":{"title":"设置导航与权限","date":"2021-05-24T16:36:11.000Z"},"headers":[],"relativePath":"doc/wpdoc/设置导航与权限.md","filePath":"doc/wpdoc/设置导航与权限.md"}'),r={name:"doc/wpdoc/设置导航与权限.md"},i=l('<h1 id="设置导航与权限" tabindex="-1">设置导航与权限 <a class="header-anchor" href="#设置导航与权限" aria-label="Permalink to &quot;设置导航与权限&quot;">​</a></h1><p>至此我们已经完成了表单的基本配置，接下来需要进行权限以及导航相关的配置。</p><p>要实现表单权限的分配，首先要将表单关联到一个 <strong>功能</strong> 上，然后将该功能分配至指定的角色。功能的分配在web后台中进行，不在本教程中介绍，请参看相关文档。本文只介绍表单与功能的关联</p><h2 id="进入功能列表" tabindex="-1">进入功能列表 <a class="header-anchor" href="#进入功能列表" aria-label="Permalink to &quot;进入功能列表&quot;">​</a></h2><ol><li>在主导航处，切换到 <strong>功能</strong> 模块</li><li>勾选表单所处的 <strong>功能集</strong> ，此处选择最常用的 <strong>SFA</strong></li><li>点击 <strong>关联功能</strong> 按钮，就可以进入功能点关联设置页面了。</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9B%E5%85%A5%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8.jpg" alt=""></p><h2 id="关联功能点" tabindex="-1">关联功能点 <a class="header-anchor" href="#关联功能点" aria-label="Permalink to &quot;关联功能点&quot;">​</a></h2><ol><li><p>切换到 <strong>app端</strong> ，平台的权限管理在各个端是分开管理的</p></li><li><p>在左边的 <strong>功能列表</strong> 中选择想要将表单关联进去的功能</p><p>需要保证所选的功能已经分配给了用来演示的角色。</p></li><li><p>切换到 <strong>未关联功能</strong> 页签</p></li><li><p>在搜索条件中，输入表单的名称 <strong>网点信息</strong></p></li><li><p>然后勾选上我们新增的表单</p></li><li><p>点击 <strong>关联功能</strong> 按钮，就可以将表单与功能关联上了，之后凡是有该功能的角色，都可以有权限看到该表单了</p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%B3%E8%81%94%E5%8A%9F%E8%83%BD.jpg" alt=""></p><h2 id="进入导航设置" tabindex="-1">进入导航设置 <a class="header-anchor" href="#进入导航设置" aria-label="Permalink to &quot;进入导航设置&quot;">​</a></h2><p>分配好权限后，还需要指定表单的查看入口</p><ol><li>切换回功能列表</li><li>点击 <strong>导航配置</strong> 按钮进入导航配置</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9B%E5%A6%82%E5%AF%BC%E8%88%AA%E8%AE%BE%E7%BD%AE.jpg" alt=""></p><h2 id="设置导航" tabindex="-1">设置导航 <a class="header-anchor" href="#设置导航" aria-label="Permalink to &quot;设置导航&quot;">​</a></h2><ol><li>切换到 <strong>app端</strong></li><li>选择一个导航目录或模块，由于实际显示的限制，此处演示最好使用 <strong>分组应用列表 - 常用</strong> 。</li><li>点击 <strong>新增节点</strong> 在该模块下新增导航节点</li><li>设置 <strong>节点分类</strong> 为 <strong>表单</strong></li><li>搜索并选中我们新增的表单</li><li>设置好导航显示的图标和颜色</li><li>设置该表单的显示位置，此处输入数字 1 即可</li><li>然后点击 <strong>保存</strong> ，就完成了导航的分配</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%AE%BE%E7%BD%AE%E5%AF%BC%E8%88%AA.jpg" alt=""></p><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2><p>最终我们使用账号，选择对应的角色后登录手机端就能查看到该表单的效果了</p><p>具体入口的位置可能会有所不同。</p><p>点击进入表单就可以填写信息并提交保存，下次再进入时，会自动加载上次提交的数据。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%95%88%E6%9E%9C.jpg" alt=""></p>',21),n=[i];function s(p,e,c,h,g,d){return o(),a("div",null,n)}const m=t(r,[["render",s]]);export{_ as __pageData,m as default};
