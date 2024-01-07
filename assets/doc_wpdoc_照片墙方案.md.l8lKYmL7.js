import{_ as a,c as t,o,U as e}from"./chunks/framework.FhXPyWfz.js";const d=JSON.parse('{"title":"照片墙方案","description":"","frontmatter":{"title":"照片墙方案","date":"2021-10-09T10:12:05.000Z"},"headers":[],"relativePath":"doc/wpdoc/照片墙方案.md","filePath":"doc/wpdoc/照片墙方案.md"}'),E={name:"doc/wpdoc/照片墙方案.md"},n=e('<h2 id="业务背景" tabindex="-1">业务背景 <a class="header-anchor" href="#业务背景" aria-label="Permalink to &quot;业务背景&quot;">​</a></h2><p>在现有项目中，很多项目想通过查看拜访步骤照片分析业务员的日常拜访工作行为是否有按照公司安排的流程步骤去执行，拍的照片是否满足公司的要求，能否为公司提供相应的价值信息，<br> 提高产品的销量前提下，开发了照片墙功能，管理人员可以通过很多条件去下载想要的拜访步骤条件，进行业务行为的分析。</p><h3 id="一、拜访照片问题存在痛点" tabindex="-1">一、拜访照片问题存在痛点 <a class="header-anchor" href="#一、拜访照片问题存在痛点" aria-label="Permalink to &quot;一、拜访照片问题存在痛点&quot;">​</a></h3><ol><li>没有特定功能能批量下载照片进行分析。</li><li>各个拜访步骤相互独立，无法在同个页面查看所有的拜访步骤照片。</li><li>其他的拜访采集列表虽然有照片，但是冗余信息太多，不利于照片的分析。</li></ol><h3 id="二、照片墙的价值" tabindex="-1">二、照片墙的价值 <a class="header-anchor" href="#二、照片墙的价值" aria-label="Permalink to &quot;二、照片墙的价值&quot;">​</a></h3><ol><li>批量下载想要的拜访照片。</li><li>各个步骤的数据都在同个表单，方便下载查看。</li><li>使用与所有企业对拜访照片的下载及分析。</li></ol><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>在数据库中先将需要的表单数据逻辑写好，列表界面挂接好相应的功能权限，通过页面的查询条件及勾选操作，批量下载对应的照片导出，运用平台提供的图片下载工具进行图片下载分析。</p><p>​</p><h3 id="一、照片墙功能-使用具体操作步骤" tabindex="-1">一、照片墙功能，使用具体操作步骤 <a class="header-anchor" href="#一、照片墙功能-使用具体操作步骤" aria-label="Permalink to &quot;一、照片墙功能，使用具体操作步骤&quot;">​</a></h3><p>在web端有功能权限的人员根据条件将需要的照片数据，指定勾选，选择下载功能，进行处理。</p><p>如下图操作</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3518.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3536.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3554.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3571.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3588.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3601.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3612.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3625.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3637.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3649.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3662.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3677.png" alt=""></p><h3 id="二、开发人员具体操作步骤" tabindex="-1">二、开发人员具体操作步骤 <a class="header-anchor" href="#二、开发人员具体操作步骤" aria-label="Permalink to &quot;二、开发人员具体操作步骤&quot;">​</a></h3><p>​ 由实施人员操作以下步骤：</p><h3 id="_1-准备内容" tabindex="-1">（1）准备内容： <a class="header-anchor" href="#_1-准备内容" aria-label="Permalink to &quot;（1）准备内容：&quot;">​</a></h3><h4 id="_1、实体" tabindex="-1">1、实体 <a class="header-anchor" href="#_1、实体" aria-label="Permalink to &quot;1、实体&quot;">​</a></h4><p>&#39;&#39;考勤记录&quot;-&quot;kx_kq_signrecordnew&quot;、&quot;陈列情况上报&quot;-&quot;tn_display_report&quot;、&quot;终端--生动化检查&quot;-&quot;kx_kq_vividinspection&quot;、&quot;终端--产品价签采集&quot;-&quot;kx_store_product_pricetag_inspection&quot;、&quot;促销活动主信息表&quot;-&quot;t_promotion_activity&quot;、&quot;终端--竞品采集表&quot;-&quot;kx_store_competition_record&quot;、&quot;赠品签收明细表&quot;-&quot;tn_gift_sign_detail&quot;、&quot;赠品派发明细表&quot;-&quot;tn_gift_distribution_detail&quot;</p><h4 id="_2、接口" tabindex="-1">2、接口 <a class="header-anchor" href="#_2、接口" aria-label="Permalink to &quot;2、接口&quot;">​</a></h4><p>&quot;获取前端图片ids并返回&quot;、&quot;照片墙_导出&quot;、&quot;照片墙_照片列表查询&quot;</p><h4 id="_3、ui" tabindex="-1">3、UI <a class="header-anchor" href="#_3、ui" aria-label="Permalink to &quot;3、UI&quot;">​</a></h4><p>&quot;业务UI-照片墙&quot;</p><h4 id="_4、pg函数" tabindex="-1">4、PG函数 <a class="header-anchor" href="#_4、pg函数" aria-label="Permalink to &quot;4、PG函数&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>无</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-操作步骤" tabindex="-1">（2）操作步骤： <a class="header-anchor" href="#_2-操作步骤" aria-label="Permalink to &quot;（2）操作步骤：&quot;">​</a></h3><h4 id="_1、导入实体" tabindex="-1">1、导入实体 <a class="header-anchor" href="#_1、导入实体" aria-label="Permalink to &quot;1、导入实体&quot;">​</a></h4><p>在ide业务实体里，导入&quot;陈列情况上报.json&quot;、&quot;促销活动主信息表.json&quot;、&quot;考勤记录.json&quot;、&quot;赠品派发明细表.json&quot;、&quot;赠品签收明细表.json&quot;、&quot;终端--产品价签采集.json&quot;、&quot;终端--竞品采集表.json&quot;、&quot;终端--生动化检查.json&quot;完成业务实体的创建。</p><p>[^[注意]：实体导入后需要保存加发布。]:</p><p>如下图：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31279.png" alt=""></p><hr><h4 id="_2、导入业务领域" tabindex="-1">2、导入业务领域 <a class="header-anchor" href="#_2、导入业务领域" aria-label="Permalink to &quot;2、导入业务领域&quot;">​</a></h4><p>在ide业务领域里，导入&quot;获取前端图片ids并返回.json&quot;、&quot;照片墙_导出.json&quot;、&quot;照片墙_照片列表查询.json&quot;,完成业务领域的创建。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31366.png" alt=""></p><hr><h4 id="_3、导入ui" tabindex="-1">3、导入UI <a class="header-anchor" href="#_3、导入ui" aria-label="Permalink to &quot;3、导入UI&quot;">​</a></h4><p>在业务UI里，导入&quot;业务UI-照片墙.json&quot;，完成业务UI的创建。</p><p>[^[注意]：导入UI后，如需挂接功能点，需要手动创建并关联]:</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31447.png" alt=""></p><hr><h4 id="_4、配置导航菜单、挂接功能点" tabindex="-1">4、配置导航菜单、挂接功能点 <a class="header-anchor" href="#_4、配置导航菜单、挂接功能点" aria-label="Permalink to &quot;4、配置导航菜单、挂接功能点&quot;">​</a></h4><p>在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31503.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31505.png" alt=""></p><h4 id="_5、页面菜单权限配置" tabindex="-1">5、页面菜单权限配置 <a class="header-anchor" href="#_5、页面菜单权限配置" aria-label="Permalink to &quot;5、页面菜单权限配置&quot;">​</a></h4><p>用SFA管理员登录，在职位管理里，设置职位权限，勾选配置的页面。完成给该职位的人员页面访问权限的配置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31572.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31574.png" alt=""></p><h4 id="_6、创建pg函数" tabindex="-1">6、创建PG函数 <a class="header-anchor" href="#_6、创建pg函数" aria-label="Permalink to &quot;6、创建PG函数&quot;">​</a></h4><p>无</p><h3 id="_3-效果" tabindex="-1">（3）效果： <a class="header-anchor" href="#_3-效果" aria-label="Permalink to &quot;（3）效果：&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%85%A7%E7%89%87%E5%A2%99%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A31595.png" alt=""></p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC010-FC001-%E7%85%A7%E7%89%87%E5%A2%99%E5%8A%9F%E8%83%BD.zip" title="COM-BC010-FC001 照片墙功能" target="_blank" rel="noreferrer">COM-BC010-FC001 照片墙功能</a></p>',51),p=[n];function i(r,s,c,l,h,A){return o(),t("div",null,p)}const q=a(E,[["render",i]]);export{d as __pageData,q as default};
