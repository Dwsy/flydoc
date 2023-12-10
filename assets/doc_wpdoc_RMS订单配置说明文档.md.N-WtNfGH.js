import{_ as a,o as t,c as p,R as E}from"./chunks/framework.S1SDgkSw.js";const h=JSON.parse('{"title":"RMS订单配置说明文档","description":"","frontmatter":{"title":"RMS订单配置说明文档","date":"2023-05-08T17:53:12.000Z"},"headers":[],"relativePath":"doc/wpdoc/RMS订单配置说明文档.md","filePath":"doc/wpdoc/RMS订单配置说明文档.md"}'),o={name:"doc/wpdoc/RMS订单配置说明文档.md"},e=E('<h1 id="rms订单配置说明文档" tabindex="-1">RMS订单配置说明文档 <a class="header-anchor" href="#rms订单配置说明文档" aria-label="Permalink to &quot;RMS订单配置说明文档&quot;">​</a></h1><ul><li><p>编辑：刘露</p></li><li><p>时间：2023-05-08</p></li><li><p>状态：已完成</p></li><li><p>适用范围：智慧100V6.2</p></li></ul><h2 id="一、功能介绍" tabindex="-1">一、功能介绍 <a class="header-anchor" href="#一、功能介绍" aria-label="Permalink to &quot;一、功能介绍&quot;">​</a></h2><p>RMS订单类型目前主要包括采购订单和兑换订单。RMS订单配置目前仅支持采购订单的相关配置，该配置与产品配置中心-分销订单配置中的“终端产品授权”共同控制RMS采购订单。<br> 二者联合控制效果如下图：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835394732949.png" alt="订单配置"></p><h3 id="_1、采购订单" tabindex="-1">1、采购订单 <a class="header-anchor" href="#_1、采购订单" aria-label="Permalink to &quot;1、采购订单&quot;">​</a></h3><h4 id="_1-显示价格" tabindex="-1">1)显示价格 <a class="header-anchor" href="#_1-显示价格" aria-label="Permalink to &quot;1)显示价格&quot;">​</a></h4><p>如图所示，通过对“显示价格”进行勾选或取消勾选，并点击保存，即可应用配置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835374984476.png" alt="显示价格配置"></p><p>当显示价格关闭时，RMS产生的采购订单中的商品将不展示价格，仅展示产品数量。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835381499057.png" alt="关闭显示价格订单-小程序"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835386874641.png" alt="关闭显示价格订单-web"></p><p>同时，RMS小程序中的商城中的商品也不会显示价格。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835381085249.png" alt="关闭显示价格商城-小程序"></p><p>当显示价格开启时，RMS产生的采购订单中的商品将展示价格。价格依据于WEB后台-合作关系授权-区域客户价格设置/具体客户价格设置-具体终端价格设置中终端或其所属组织绑定的价格表数据。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835390048306.png" alt="开启显示价格订单-小程序"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835390501618.png" alt="开启显示价格订单-web"></p><p>同时，RMS小程序中的商城中的商品也将显示价格，未关联价格表商品不会出现在商城中。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16835391123803.png" alt="开启显示价格商城"></p><p>以上设置仅对采购订单生效，兑换订单不受影响。</p>',18),c=[e];function n(s,i,l,r,B,_){return t(),p("div",null,c)}const d=a(o,[["render",n]]);export{h as __pageData,d as default};
