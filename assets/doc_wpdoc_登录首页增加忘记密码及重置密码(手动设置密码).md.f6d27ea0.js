import{_ as t,o as e,c as a,Q as o}from"./chunks/framework.d084db19.js";const q=JSON.parse('{"title":"登录首页增加忘记密码及重置密码(手动设置密码)","description":"","frontmatter":{"title":"登录首页增加忘记密码及重置密码(手动设置密码)","date":"2020-10-09T11:52:52.000Z"},"headers":[],"relativePath":"doc/wpdoc/登录首页增加忘记密码及重置密码(手动设置密码).md","filePath":"doc/wpdoc/登录首页增加忘记密码及重置密码(手动设置密码).md"}'),_={name:"doc/wpdoc/登录首页增加忘记密码及重置密码(手动设置密码).md"},l=o('<h1 id="登录首页增加忘记密码及重置密码-手动设置密码" tabindex="-1">登录首页增加忘记密码及重置密码(手动设置密码) <a class="header-anchor" href="#登录首页增加忘记密码及重置密码-手动设置密码" aria-label="Permalink to &quot;登录首页增加忘记密码及重置密码(手动设置密码)&quot;">​</a></h1><ul><li>1、此为项目个性化配置功能</li><li>2、点击忘记密码进入手动重置密码流程</li><li>3、重置密码需要通过短信验证码验证手机号后重新设置新密码</li></ul><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/pwdset.png" alt=""></p><h3 id="版本要求" tabindex="-1">版本要求 <a class="header-anchor" href="#版本要求" aria-label="Permalink to &quot;版本要求&quot;">​</a></h3><ul><li>web端引擎包(V9.2.0+)</li><li>aPaaS后台服务(3.0+)</li><li>产品版本(V8.5.1-base)</li></ul><h3 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h3><p>该功能为个性化功能，默认不开启，如需要，需设置环境变量 supportresetpwd: &quot;2&quot;。</p><p>目前提供找回密码的方式有两种：<br> 1、通过手机号验证码，自动发送系统重置密码到用户手机。<br> 2、通过手机号验证码，用户手动重置密码。</p><ul><li>supportresetpwd: &quot;true&quot; 和 supportresetpwd: &quot;1&quot; 为1方案</li><li>supportresetpwd: &quot;2&quot; 为2方案</li><li>supportresetpwd: &quot;false&quot; 为不配置找回密码功能</li></ul>',9),r=[l];function i(s,p,d,c,u,n){return e(),a("div",null,r)}const m=t(_,[["render",i]]);export{q as __pageData,m as default};
