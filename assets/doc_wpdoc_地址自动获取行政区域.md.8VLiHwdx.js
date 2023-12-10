import{_ as a,o as t,c as e,R as o}from"./chunks/framework.S1SDgkSw.js";const _=JSON.parse('{"title":"地址自动获取行政区域","description":"","frontmatter":{"title":"地址自动获取行政区域","date":"2021-07-07T20:11:03.000Z"},"headers":[],"relativePath":"doc/wpdoc/地址自动获取行政区域.md","filePath":"doc/wpdoc/地址自动获取行政区域.md"}'),r={name:"doc/wpdoc/地址自动获取行政区域.md"},h=o('<h1 id="地址自动获取行政区域实现方案" tabindex="-1">地址自动获取行政区域实现方案 <a class="header-anchor" href="#地址自动获取行政区域实现方案" aria-label="Permalink to &quot;地址自动获取行政区域实现方案&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h2 id="业务背景" tabindex="-1">业务背景 <a class="header-anchor" href="#业务背景" aria-label="Permalink to &quot;业务背景&quot;">​</a></h2><p>​ 在WEB端/APP端能通过定位地址自动解析获取对应的行政区域。</p><h3 id="一、问题存在痛点" tabindex="-1">一、问题存在痛点 <a class="header-anchor" href="#一、问题存在痛点" aria-label="Permalink to &quot;一、问题存在痛点&quot;">​</a></h3><p>1、在两端操作中，往往门店信息维护时，修改了定位，还要手动去调整行政区域，并且行政区域过多，用户操作起来会感觉很慢，感觉二次维护了定位，拜访过程中比较浪费时间。</p><h3 id="二、自动获取的价值" tabindex="-1">二、自动获取的价值 <a class="header-anchor" href="#二、自动获取的价值" aria-label="Permalink to &quot;二、自动获取的价值&quot;">​</a></h3><p>1、随时能根据获取的定位地址自动获取到对应的行政区域。</p><p>2、减少人为操作的时间。</p><h3 id="三、自动获取业务场景" tabindex="-1">三、自动获取业务场景 <a class="header-anchor" href="#三、自动获取业务场景" aria-label="Permalink to &quot;三、自动获取业务场景&quot;">​</a></h3><p>1、张三新增门店，填写门店信息，给门店增加完定位信息后，往往还需维护对应行政区域。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>​ 根据定位地址的中文地址，经纬度，通过平台的高德API调取函数，解析出对应的。</p><p>​</p><h3 id="一、自动获取功能-使用具体操作步骤" tabindex="-1">一、自动获取功能，使用具体操作步骤 <a class="header-anchor" href="#一、自动获取功能-使用具体操作步骤" aria-label="Permalink to &quot;一、自动获取功能，使用具体操作步骤&quot;">​</a></h3><p>在app端有功能权限的人员进行维护门店数据，点击定位获取地址后，行政区域会自动选择并显示。</p><p>如下图操作</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F-%E5%9B%BE%E7%89%871.png" alt="图片1"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F-%E5%9B%BE%E7%89%872.png" alt="图片2"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F-%E5%9B%BE%E7%89%876.png" alt="图片6"></p><h3 id="二、开发人员具体操作步骤" tabindex="-1">二、开发人员具体操作步骤 <a class="header-anchor" href="#二、开发人员具体操作步骤" aria-label="Permalink to &quot;二、开发人员具体操作步骤&quot;">​</a></h3><p>​ 由实施人员操作以下步骤：</p><h3 id="_1-准备内容" tabindex="-1">（1）准备内容： <a class="header-anchor" href="#_1-准备内容" aria-label="Permalink to &quot;（1）准备内容：&quot;">​</a></h3><h4 id="_1、实体" tabindex="-1">1、实体 <a class="header-anchor" href="#_1、实体" aria-label="Permalink to &quot;1、实体&quot;">​</a></h4><p>&#39;&#39;终端客户&quot;-&quot;kx_kq_store&quot;</p><h4 id="_2、接口" tabindex="-1">2、接口 <a class="header-anchor" href="#_2、接口" aria-label="Permalink to &quot;2、接口&quot;">​</a></h4><p>&quot;终端客户-行政区域自动选择&quot;</p><h4 id="_3、ui" tabindex="-1">3、UI <a class="header-anchor" href="#_3、ui" aria-label="Permalink to &quot;3、UI&quot;">​</a></h4><p>&quot;终端客户编辑&quot;</p><h3 id="_2-操作步骤" tabindex="-1">（2）操作步骤： <a class="header-anchor" href="#_2-操作步骤" aria-label="Permalink to &quot;（2）操作步骤：&quot;">​</a></h3><h4 id="_1、导入实体" tabindex="-1">1、导入实体 <a class="header-anchor" href="#_1、导入实体" aria-label="Permalink to &quot;1、导入实体&quot;">​</a></h4><p>&#39;&#39;终端客户&quot;-&quot;kx_kq_store&quot;</p><p>该实体对象为标准产品实体，不用改动，除非字段有所调整，需要根据实际作判断。</p><hr><h4 id="_2、导入业务领域" tabindex="-1">2、导入业务领域 <a class="header-anchor" href="#_2、导入业务领域" aria-label="Permalink to &quot;2、导入业务领域&quot;">​</a></h4><p>在ide业务领域里，导入&quot;业务行为-终端客户-行政区域自动选择&quot;,完成业务领域的创建。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F-%E5%9B%BE%E7%89%873.png" alt="图片3"></p><hr><h4 id="_3、导入ui" tabindex="-1">3、导入UI <a class="header-anchor" href="#_3、导入ui" aria-label="Permalink to &quot;3、导入UI&quot;">​</a></h4><p>在业务UI里，要考虑清楚是否为标准产品的&quot;终端客户编辑&quot;，如果有改动过的，请修改了需导入的UI的code后再进行导入，然后在导入的页面上参考控件“详细地址”上的值改变事件进行配置</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F-%E5%9B%BE%E7%89%874.png" alt="图片4"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F-%E5%9B%BE%E7%89%875.png" alt="图片5"></p><h3 id="组件包下载-百度网盘-也可到svn获取" tabindex="-1">组件包下载（百度网盘，也可到SVN获取） <a class="header-anchor" href="#组件包下载-百度网盘-也可到svn获取" aria-label="Permalink to &quot;组件包下载（百度网盘，也可到SVN获取）&quot;">​</a></h3><p>地址自动获取行政区域-链接：链接：<a href="https://pan.baidu.com/s/1U-eSViGMvh1cbXtkbIDeKA" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1U-eSViGMvh1cbXtkbIDeKA</a><br> 提取码：twov<br> 直接下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC005-FC001-%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9F%9F.zip" title="COM-BC005-FC001 地址自动获取行政区域" target="_blank" rel="noreferrer">COM-BC005-FC001 地址自动获取行政区域</a></p>',42),i=[h];function n(p,E,l,c,s,d){return t(),e("div",null,i)}const q=a(r,[["render",n]]);export{_ as __pageData,q as default};
