import{_ as a,o as e,c as t,R as i}from"./chunks/framework.S1SDgkSw.js";const m=JSON.parse('{"title":"登录首页增加密码过期提醒功能","description":"","frontmatter":{"title":"登录首页增加密码过期提醒功能","date":"2020-10-09T11:05:29.000Z"},"headers":[],"relativePath":"doc/wpdoc/登录首页增加密码过期提醒功能.md","filePath":"doc/wpdoc/登录首页增加密码过期提醒功能.md"}'),l={name:"doc/wpdoc/登录首页增加密码过期提醒功能.md"},o=i('<h1 id="登录首页增加密码过期提醒功能" tabindex="-1">登录首页增加密码过期提醒功能 <a class="header-anchor" href="#登录首页增加密码过期提醒功能" aria-label="Permalink to &quot;登录首页增加密码过期提醒功能&quot;">​</a></h1><ul><li>1、定期修改密码时间设置：多久需要修改一次密码</li><li>2、提示修改密码设置：提前多少天提示用户修改密码</li><li>3、提示方式：在用户正确登录后提示</li><li>4、密码未过期，可以忽略提示进入系统操作业务；密码已过期，需要修改了之后才能进入系统操作业务，否则一直停留在登录页面</li><li>5、记住每个用户的修改时间，以修改时间为定期修改密码的计时起点</li></ul><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/pwdtip.png" alt=""></p><h3 id="版本要求" tabindex="-1">版本要求 <a class="header-anchor" href="#版本要求" aria-label="Permalink to &quot;版本要求&quot;">​</a></h3><ul><li>web端引擎包(V9.2.0+)</li><li>aPaaS后台服务(3.0+)</li><li>产品版本(V8.5.1-base)</li></ul><h3 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h3><p>该功能为个性化功能，默认不开启，如需要，配置方式如下：</p><p>1、确认要配置的项目符合版本要求。<br> 2、配置Nacos<br> auth.pwd-expires=31 (表示密码有效期31天)<br> auth.pwd-expiresReminder=7 (表示密码过期前7天开始弹出提醒)</p>',8),r=[o];function _(c,d,s,n,p,h){return e(),t("div",null,r)}const b=a(l,[["render",_]]);export{m as __pageData,b as default};
