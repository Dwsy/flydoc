import{_ as a,c as o,o as t,U as r}from"./chunks/framework.K-r7inPk.js";const m=JSON.parse('{"title":"Cron表达式","description":"","frontmatter":{"title":"Cron表达式","date":"2022-09-07T09:22:21.000Z"},"headers":[],"relativePath":"doc/wpdoc/Cron表达式.md","filePath":"doc/wpdoc/Cron表达式.md"}'),e={name:"doc/wpdoc/Cron表达式.md"},n=r('<h1 id="cron表达式介绍" tabindex="-1">Cron表达式介绍 <a class="header-anchor" href="#cron表达式介绍" aria-label="Permalink to &quot;Cron表达式介绍&quot;">​</a></h1><p>Cron表达式是一个具有时间含义的字符串，字符串以5至6个空格隔开，分为6至7个域，格式为X X X X X X X。其中X是一个域的占位符。最后一个代表年份的域非必须，可省略。单个域有多个取值时，使用半角逗号,隔开取值。每个域可以是确定的取值，也可以是具有逻辑意义的特殊字符。每个域最多支持一个前导零。<br><code>说明 如指定2022年每天上午8:15执行任务，Cron表达式可指定为0 15 8 ? * * 2022或0 15 08 ? * * 2022，而不能指定为0 15 008 ? * * 2022。</code></p><h2 id="域取值" tabindex="-1"><strong>域取值</strong> <a class="header-anchor" href="#域取值" aria-label="Permalink to &quot;**域取值**&quot;">​</a></h2><p>下表为Cron表达式中六个域能够取的值以及支持的特殊字符。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221012135856-1.png" alt=""></p><h2 id="特殊字符" tabindex="-1"><strong>特殊字符</strong> <a class="header-anchor" href="#特殊字符" aria-label="Permalink to &quot;**特殊字符**&quot;">​</a></h2><p>Cron表达式中的每个域都支持一定数量的特殊字符，每个特殊字符有其特殊含义。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220907171726.jpg" alt=""></p><h2 id="取值示例" tabindex="-1">取值示例 <a class="header-anchor" href="#取值示例" aria-label="Permalink to &quot;取值示例&quot;">​</a></h2><p>以下为Cron表达式的取值示例。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220907171908.jpg" alt=""></p>',8),c=[n];function s(d,p,i,_,h,l){return t(),o("div",null,c)}const u=a(e,[["render",s]]);export{m as __pageData,u as default};
