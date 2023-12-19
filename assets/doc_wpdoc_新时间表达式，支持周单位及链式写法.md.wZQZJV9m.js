import{_ as s,o as n,c as a,R as p}from"./chunks/framework.E9w9IFh5.js";const d=JSON.parse('{"title":"新时间表达式，支持周单位及链式写法","description":"","frontmatter":{"title":"新时间表达式，支持周单位及链式写法","date":"2021-04-12T19:09:37.000Z"},"headers":[],"relativePath":"doc/wpdoc/新时间表达式，支持周单位及链式写法.md","filePath":"doc/wpdoc/新时间表达式，支持周单位及链式写法.md"}'),e={name:"doc/wpdoc/新时间表达式，支持周单位及链式写法.md"},l=p(`<h1 id="新时间表达式" tabindex="-1">新时间表达式 <a class="header-anchor" href="#新时间表达式" aria-label="Permalink to &quot;新时间表达式&quot;">​</a></h1><ul><li>支持周单位</li><li>支持链式写法</li><li>在uiflycode上使用，加上System命名空间，如<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>System.year(0)</span></span>
<span class="line"><span>System.year(-1).thismonth(0, 5)</span></span>
<span class="line"><span>// 赋值到日期控件</span></span>
<span class="line"><span>let ctrl = Page.getCtrl(&#39;日期控件&#39;)</span></span>
<span class="line"><span>ctrl.value = new Date(System.year(1)).getTime()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 一些表达式使用例子</span></span>
<span class="line"><span>year(0) 现在: 2021-04-02 14:25:22</span></span>
<span class="line"><span>year(1) 明年: 2022-04-02 14:25:22</span></span>
<span class="line"><span>month(1) 下个月: 2021-05-02 14:25:22</span></span>
<span class="line"><span>day(1) 明天: 2021-04-03 14:25:22</span></span>
<span class="line"><span>hour(1) 过一小时: 2021-04-02 15:25:22</span></span>
<span class="line"><span>minute(1) 过一分钟: 2021-04-02 14:26:22</span></span>
<span class="line"><span>week(1) 下周: 2021-04-09 14:25:22</span></span>
<span class="line"><span>quarter(1) 下个季度: 2021-07-02 14:25:22</span></span>
<span class="line"><span>thisyear(2019) 2019年: 2019-04-02 14:25:22</span></span>
<span class="line"><span>thismonth(1) 2月: 2021-02-02 14:25:22</span></span>
<span class="line"><span>thisday(1) 2号: 2021-04-02 14:25:22</span></span>
<span class="line"><span>thishour(1) 1时: 2021-04-02 01:25:22</span></span>
<span class="line"><span>thisminute(1) 当前小时的第一分钟: 2021-04-02 14:01:22</span></span>
<span class="line"><span>thisweek(0) 今年第1周: 2021-01-08 14:25:22</span></span>
<span class="line"><span>thisquarter(1) 第二季度: 2021-04-02 14:25:22</span></span>
<span class="line"><span>year(0, 0) 区间今年: 2021-01-01 00:00:00-2021-12-31 23:59:59</span></span>
<span class="line"><span>month(-1, 1) 区间上个月到下个月: 2021-03-01 00:00:00-2021-05-31 23:59:59</span></span>
<span class="line"><span>day(-1, 1) 区间昨天到明天: 2021-04-01 00:00:00-2021-04-03 23:59:59</span></span>
<span class="line"><span>hour(0, 1) 当前小时到下一个小时: 2021-04-02 14:00:00-2021-04-02 15:59:59</span></span>
<span class="line"><span>minute(-120, 0) 过去两小时: 2021-04-02 12:25:00-2021-04-02 14:25:59</span></span>
<span class="line"><span>week(0, 0) 区间这周: 2021-03-29 00:00:00-2021-04-04 23:59:59</span></span>
<span class="line"><span>quarter(0, 0) 区间这个季度: 2021-04-01 00:00:00-2021-06-30 23:59:59</span></span>
<span class="line"><span>thisyear(2019, 2020) 2019-2020: 2019-01-01 00:00:00-2020-12-31 23:59:59</span></span>
<span class="line"><span>thismonth(1, 2) 2月-3月: 2021-02-01 00:00:00-2021-03-31 23:59:59</span></span>
<span class="line"><span>thisday(4, 9) 5号-10号: 2021-04-05 00:00:00-2021-04-10 23:59:59</span></span>
<span class="line"><span>thishour(9, 18) 9时-18时: 2021-04-02 09:00:00-2021-04-02 18:59:59</span></span>
<span class="line"><span>thisminute(20, 40) 20分-40分: 2021-04-02 14:20:00-2021-04-02 14:40:59</span></span>
<span class="line"><span>thisweek(0, 1) 今年第一周到第二周: 2021-01-04 00:00:00-2021-01-17 23:59:59</span></span>
<span class="line"><span>thisquarter(0, 1) 第一季度-第二季度: 2021-01-01 00:00:00-2021-06-30 23:59:59</span></span>
<span class="line"><span>weekday(0) 这周周一: 2021-03-29 14:25:22</span></span>
<span class="line"><span>weekday(0, 2) 区间这周一至这周二: 2021-03-29 00:00:00-2021-03-31 23:59:59</span></span>
<span class="line"><span>year(-1).thismonth(2) 去年三月: 2020-03-02 14:25:22</span></span>
<span class="line"><span>year(1).thismonth(1) 明年二月: 2022-02-02 14:25:22</span></span>
<span class="line"><span>year(1).thismonth(0, 5) 明年上半年: 2022-01-01 00:00:00-2022-06-30 23:59:59</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,3),i=[l];function r(c,t,b,u,m,o){return n(),a("div",null,i)}const _=s(e,[["render",r]]);export{d as __pageData,_ as default};
