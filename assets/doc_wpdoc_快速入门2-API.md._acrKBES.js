import{_ as t,c as a,o as e,U as l}from"./chunks/framework.K-r7inPk.js";const I=JSON.parse('{"title":"快速入门2-API","description":"","frontmatter":{"title":"快速入门2-API","date":"2023-07-17T17:42:40.000Z"},"headers":[],"relativePath":"doc/wpdoc/快速入门2-API.md","filePath":"doc/wpdoc/快速入门2-API.md"}'),i={name:"doc/wpdoc/快速入门2-API.md"},n=l('<h1 id="快速入门2-api" tabindex="-1">快速入门2 - API <a class="header-anchor" href="#快速入门2-api" aria-label="Permalink to &quot;快速入门2 - API&quot;">​</a></h1><p>本文档将通过将上一篇文章中配置的集成流，包装成API对外发布，来展示API的相关概念和操作。<br> 通过此文档，你会学会：<br> 1：如何创建和管理API<br> 2：如何创建应用并分配API给应用</p><p><em><strong>API的创建与管理需要使用3.2以上版本</strong></em></p><h2 id="_1-基本概念" tabindex="-1">1. 基本概念 <a class="header-anchor" href="#_1-基本概念" aria-label="Permalink to &quot;1\\. 基本概念&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">名词概念</th><th style="text-align:center;">释义</th></tr></thead><tbody><tr><td style="text-align:center;">API</td><td style="text-align:center;">API就是封装后的集成流，用于企业对外发布接口，可以对API和API用户进行权限管理和用量管理。</td></tr><tr><td style="text-align:center;">应用</td><td style="text-align:center;">应用指的是使用API的外部系统。一个企业可以建立多个应用（如OA，ERP等），一个应用可以分配多个API。</td></tr><tr><td style="text-align:center;">API Key</td><td style="text-align:center;">API Key是分配给应用的授权码，每个应用都会有一个唯一的API Key，当API使用API Key作为鉴权方式时使用。</td></tr><tr><td style="text-align:center;">OAuth</td><td style="text-align:center;">OAuth是一种开放标准的授权协议，允许应用访问用户的私有资源（如用户信息、操作权限等），而无需知道用户的凭证信息。在iPaaS系统中，可以使用OAuth进行API鉴权。【暂不支持】</td></tr></tbody></table><h2 id="_2-创建api" tabindex="-1">2. 创建API <a class="header-anchor" href="#_2-创建api" aria-label="Permalink to &quot;2\\. 创建API&quot;">​</a></h2><h3 id="_2-1-新增api" tabindex="-1">2.1 新增API <a class="header-anchor" href="#_2-1-新增api" aria-label="Permalink to &quot;2.1 新增API&quot;">​</a></h3><p>首先新增一个API。</p><ol><li>选择【API管理】模块</li><li>点击【新增API】<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/24-1.png" alt=""></li><li>选择关联集成流</li><li>选择调用方法</li><li>设置访问权限和请求频率</li><li>填写描述</li><li>点击【保存】，系统就会新增一个API<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/25.png" alt=""></li></ol><h3 id="_2-2-创建应用" tabindex="-1">2.2 创建应用 <a class="header-anchor" href="#_2-2-创建应用" aria-label="Permalink to &quot;2.2 创建应用&quot;">​</a></h3><p>新增一个应用</p><ol><li>选择【应用管理】模块</li><li>点击【新增应用】<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/26.png" alt=""></li><li>填写应用名称</li><li>点击【确认】按钮，系统就会新增一个应用<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/27.png" alt=""></li></ol><h3 id="_2-3-分配api" tabindex="-1">2.3 分配API <a class="header-anchor" href="#_2-3-分配api" aria-label="Permalink to &quot;2.3 分配API&quot;">​</a></h3><ol><li>点击【应用名称】进入编辑页面<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/28.png" alt=""></li><li>点击【添加API】<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/29.png" alt=""></li><li>选择API</li><li>选择鉴权方式</li><li>选择API添加位置</li><li>点击【保存】，完成API分配<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/30.png" alt=""></li></ol><h3 id="_2-4-调用" tabindex="-1">2.4 调用 <a class="header-anchor" href="#_2-4-调用" aria-label="Permalink to &quot;2.4 调用&quot;">​</a></h3><ol><li>在postman中新建一个POST请求，并输入上方拷贝的API接口</li><li>在请求头中添加API Key参数，该API Key用于调用鉴权，只要是有效的aPaaS系统API Key就行</li><li>在body中填写集成流所需要的入参信息</li><li>点击发送按钮</li><li>成功调用后就能看到集成流返回的信息<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/31.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/32.png" alt=""></li></ol>',16),o=[n];function r(c,p,s,d,h,P){return e(),a("div",null,o)}const _=t(i,[["render",r]]);export{I as __pageData,_ as default};
