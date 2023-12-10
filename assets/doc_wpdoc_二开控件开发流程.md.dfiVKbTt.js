import{_ as p,D as i,o as l,c as r,I as e,w as s,k as t,a as n,R as o}from"./chunks/framework.S1SDgkSw.js";const B=JSON.parse('{"title":"二开控件开发流程","description":"","frontmatter":{"title":"二开控件开发流程","date":"2020-05-11T14:11:06.000Z"},"headers":[],"relativePath":"doc/wpdoc/二开控件开发流程.md","filePath":"doc/wpdoc/二开控件开发流程.md"}'),d={name:"doc/wpdoc/二开控件开发流程.md"},c=t("a",{href:"http://apaas.wxchina.com:8881/business/29/",title:"点击查看",target:"_blank",rel:"noreferrer"},"点击查看",-1),u=o(`<h1 id="关于二开控件开发流程" tabindex="-1">关于二开控件开发流程 <a class="header-anchor" href="#关于二开控件开发流程" aria-label="Permalink to &quot;关于二开控件开发流程&quot;">​</a></h1><p><em>我们提供脚手架的方式以供二开控件开发，便于可以即时预览调试。<br> 该功能基于后台V2.8服务，使用时请确认后台服务至少是V2.8版本。</em></p><p>UI控件支持启用停用功能，停用后引擎不会下载二开控件代码，但如果缓存中有该二开控件，仍然会使用缓存中的二开控件并在控制台给与已停用提示。该功能需要更新IDE服务至2.11.4或以上</p><h3 id="ui控件启用停用配套脚本" tabindex="-1">UI控件启用停用配套脚本 <a class="header-anchor" href="#ui控件启用停用配套脚本" aria-label="Permalink to &quot;UI控件启用停用配套脚本&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>--在xw_metadata库执行</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ALTER TABLE &quot;public&quot;.&quot;pl_pagewidget&quot; </span></span>
<span class="line"><span>  ADD COLUMN &quot;enabled&quot; int4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMENT ON COLUMN &quot;public&quot;.&quot;pl_pagewidget&quot;.&quot;enabled&quot; IS &#39;1表示启用，0表示停用（与status不同，此处的值不影响查询结果筛选）&#39;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="脚手架代码仓库" tabindex="-1">脚手架代码仓库 <a class="header-anchor" href="#脚手架代码仓库" aria-label="Permalink to &quot;脚手架代码仓库&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://github.com/gorphensu/k100-web-native.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="脚手架使用方法以及二开控件编写流程" tabindex="-1">脚手架使用方法以及二开控件编写流程 <a class="header-anchor" href="#脚手架使用方法以及二开控件编写流程" aria-label="Permalink to &quot;脚手架使用方法以及二开控件编写流程&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>请查看上面仓库中的readme.md文件 [readme.md](https://github.com/gorphensu/k100-web-native/blob/master/README.md)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="二开控件验证demo为脚手架项目中的periodicpicker控件" tabindex="-1">二开控件验证Demo为脚手架项目中的periodicpicker控件 <a class="header-anchor" href="#二开控件验证demo为脚手架项目中的periodicpicker控件" aria-label="Permalink to &quot;二开控件验证Demo为脚手架项目中的periodicpicker控件&quot;">​</a></h3><h3 id="二开控件代码包上架" tabindex="-1">二开控件代码包上架 <a class="header-anchor" href="#二开控件代码包上架" aria-label="Permalink to &quot;二开控件代码包上架&quot;">​</a></h3><p>1、在脚手架根目录打开命令行，输入打包命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    npm run build or yarn build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、在bundle文件夹下会产生dist文件夹 以及 dist.zip压缩文件。<a href="http://apaas.wxchina.com:8881/wp-content/uploads/dist20200601.zip" title="dist20200601" target="_blank" rel="noreferrer">点击下载：dist.zip压缩包</a></p><p>3、打开ide =&gt; 自定义扩展 =&gt; 自定义UI控件 如下图：新建注册一个新的控件，注意控件名称需要与脚手架中的二开控件名称一致</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%8C%E5%BC%80%E6%8E%A7%E4%BB%B6%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8Bregister.jpg" alt=""></p><p>4、添加自定义属性，以供ide布局可以识别</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%8C%E5%BC%80%E6%8E%A7%E4%BB%B6%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8Bproperty.jpg" alt=""></p><p>5、二开控件代码包上传</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%8C%E5%BC%80%E6%8E%A7%E4%BB%B6%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8Bupload.jpg" alt=""></p><p>6、点击保存，完成！</p>`,21);function h(b,m,g,_,E,v){const a=i("sapn");return l(),r("div",null,[e(a,null,{default:s(()=>[n("注：使用此功能需升级web引擎包至V9.0.0及以上，及升级服务【离线服务offline-engine】到2.8及以上")]),_:1}),t("p",null,[n("指导视频："),e(a,null,{default:s(()=>[c]),_:1})]),u])}const q=p(d,[["render",h]]);export{B as __pageData,q as default};
