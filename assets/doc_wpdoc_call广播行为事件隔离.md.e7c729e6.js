import{_ as a,o as e,c as l,Q as t}from"./chunks/framework.aac09c5f.js";const m=JSON.parse('{"title":"call广播行为事件隔离","description":"","frontmatter":{"title":"call广播行为事件隔离","date":"2022-04-26T06:18:47.000Z"},"headers":[],"relativePath":"doc/wpdoc/call广播行为事件隔离.md","filePath":"doc/wpdoc/call广播行为事件隔离.md"}'),c={name:"doc/wpdoc/call广播行为事件隔离.md"},o=t('<h2 id="需求背景" tabindex="-1">需求背景 <a class="header-anchor" href="#需求背景" aria-label="Permalink to &quot;需求背景&quot;">​</a></h2><ul><li>原有功能：事件触发call广播行为时，将对所有有相同key的页面事件进行广播</li><li>存在弊端：在多页签模式下，当存在多个有相同key事件的页签时将同时触发多个对应key的事件</li><li>解决方案：通过配置事件广播属性，决定触发当前页签对应key事件或全部页签对应key事件</li></ul><h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h2><ul><li>IDE中的call行为属性配置中增加事件广播属性配置，默认关闭，关闭时仅广播当前页签对应key事件<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/call%E5%B9%BF%E6%92%AD%E8%A1%8C%E4%B8%BA%E4%BA%8B%E4%BB%B6%E9%9A%94%E7%A6%BB.png" alt=""></li></ul>',4),_=[o];function i(r,n,s,d,p,h){return e(),l("div",null,_)}const B=a(c,[["render",i]]);export{m as __pageData,B as default};
