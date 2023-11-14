import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.aac09c5f.js";const b=JSON.parse('{"title":"web端-登录界面企业账户控制","description":"","frontmatter":{"title":"web端-登录界面企业账户控制","date":"2020-07-09T15:55:50.000Z"},"headers":[],"relativePath":"doc/wpdoc/web端-登录界面企业账户控制.md","filePath":"doc/wpdoc/web端-登录界面企业账户控制.md"}'),p={name:"doc/wpdoc/web端-登录界面企业账户控制.md"},E=o('<h2 id="web端-登录界面企业账户控制" tabindex="-1">web端-登录界面企业账户控制 <a class="header-anchor" href="#web端-登录界面企业账户控制" aria-label="Permalink to &quot;web端-登录界面企业账户控制&quot;">​</a></h2><hr><p>版本要求：web包（V9.0+）</p><p>简述：web端登录界面存在企业账户输入框，通过获取管理企业账户得到企业配置信息，用于开放性功能控制，如：短信验证码登录，登录修改初始密码等。</p><p>前提：web包打包需要配置环境变量进行企业账户控制。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-1.png" alt=""></p><h4 id="一、-场景一-显示登录界面企业账户输入框" tabindex="-1">一、 场景一：显示登录界面企业账户输入框 <a class="header-anchor" href="#一、-场景一-显示登录界面企业账户输入框" aria-label="Permalink to &quot;一、 场景一：显示登录界面企业账户输入框&quot;">​</a></h4><ol><li>配置方式：web包（V9.0+） <ol><li>web包（V9.0+）默认显示企业账户输入框（非必填）；</li><li>进行web包打包，环境变量 “VUE_APP_BUSINESS_NAME” : “”，配置为空；则登录界面显示空内容的企业账户输入框。</li></ol></li><li>web端效果展示</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-2.png" alt=""></p><h4 id="二、-场景二-隐藏登录界面企业账户输入框" tabindex="-1">二、 场景二：隐藏登录界面企业账户输入框 <a class="header-anchor" href="#二、-场景二-隐藏登录界面企业账户输入框" aria-label="Permalink to &quot;二、 场景二：隐藏登录界面企业账户输入框&quot;">​</a></h4><ol><li><p>配置方式：web包（V9.0+）</p><ol><li>进行web包打包，环境变量 “VUE_APP_BUSINESS_NAME” : “测试企业”，配置不为空；则登录界面不显示企业账户输入框，但默认以环境变量配置的企业名请求企业信息。</li></ol><p>备注：上线生产环境需要确保打包配置的环境变量-企业信息名正确。</p></li><li><p>web端效果展示</p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-3.png" alt=""></p><p>非标准功能：</p><p>配置方式：web包（V9.1+）</p><p>web打包，环境变量没有配置，但又需要使用企业账户输入，则可以修改url参数值加入参数businessname=xxx企业，临时开启企业账户输入(适用于公有环境)</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/web%E7%AB%AF-%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2%E4%BC%81%E4%B8%9A%E8%B4%A6%E6%88%B7%E6%8E%A7%E5%88%B6-4.png" alt=""></p>',16),l=[E];function i(c,n,_,s,r,B){return a(),t("div",null,l)}const d=e(p,[["render",i]]);export{b as __pageData,d as default};
