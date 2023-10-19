import{_ as d,C as o,o as u,c as r,k as l,H as n,w as a,Q as s,a as e}from"./chunks/framework.b1e56e49.js";const S=JSON.parse('{"title":"ArrayRowCtrl 行控件-属性说明","description":"","frontmatter":{"title":"ArrayRowCtrl 行控件-属性说明","date":"2020-05-09T17:50:59.000Z"},"headers":[],"relativePath":"doc/wpdoc/ArrayRowCtrl 行控件-属性说明.md","filePath":"doc/wpdoc/ArrayRowCtrl 行控件-属性说明.md"}'),c={name:"doc/wpdoc/ArrayRowCtrl 行控件-属性说明.md"},p=s('<h1 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h1><h2 id="get-checked" tabindex="-1">get checked <a class="header-anchor" href="#get-checked" aria-label="Permalink to &quot;get checked&quot;">​</a></h2><p>获取行控件的勾选状态</p><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Bool</td><td>否</td><td>返回行控件是否勾选，注意，若行控件不支持勾选能力，该属性永远返回false</td></tr></tbody></table><h3 id="实现情况" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',5),_=l("thead",null,[l("tr",null,[l("th",null,"支持的控件"),l("th",null,"iOS"),l("th",null,"Android"),l("th",null,"Web")])],-1),h=l("td",null,"列表 list",-1),i=l("td",null,"表格 table",-1),f=l("td",null,"折叠列表 accordion",-1),y=l("td",null,"动态面板 dynamicpanel",-1),b=l("td",null,"分组列表 sectionlist",-1),E=s(`<h2 id="set-checked" tabindex="-1">set checked <a class="header-anchor" href="#set-checked" aria-label="Permalink to &quot;set checked&quot;">​</a></h2><p>设置该行是否选中</p><table><thead><tr><th>输入类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Bool</td><td>否</td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//设置文本控件的值</span></span>
<span class="line"><span style="color:#E1E4E8;">listCtrl.</span><span style="color:#B392F0;">getRowAtIndexPath</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">IndexPath</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)).checked </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//设置文本控件的值</span></span>
<span class="line"><span style="color:#24292E;">listCtrl.</span><span style="color:#6F42C1;">getRowAtIndexPath</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">IndexPath</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)).checked </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="实现情况-1" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-1" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>`,5),C=l("thead",null,[l("tr",null,[l("th",null,"支持的控件"),l("th",null,"iOS"),l("th",null,"Android"),l("th",null,"Web")])],-1),m=l("td",null,"列表 list",-1),k=l("td",null,"表格 table",-1),A=l("td",null,"折叠列表 accordion",-1),P=l("td",null,"动态面板 dynamicpanel",-1),g=l("td",null,"分组列表 sectionlist",-1);function w(x,T,v,F,q,B){const t=o("font");return u(),r("div",null,[p,l("table",null,[_,l("tbody",null,[l("tr",null,[h,l("td",null,[n(t,null,{default:a(()=>[e("已实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("已实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("已实现")]),_:1})])]),l("tr",null,[i,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未检测")]),_:1})])]),l("tr",null,[f,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})])]),l("tr",null,[y,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})])]),l("tr",null,[b,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未检测")]),_:1})])])])]),E,l("table",null,[C,l("tbody",null,[l("tr",null,[m,l("td",null,[n(t,null,{default:a(()=>[e("已实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("已实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("已实现")]),_:1})])]),l("tr",null,[k,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未检测")]),_:1})])]),l("tr",null,[A,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})])]),l("tr",null,[P,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})])]),l("tr",null,[g,l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未实现")]),_:1})]),l("td",null,[n(t,null,{default:a(()=>[e("未检测")]),_:1})])])])])])}const I=d(c,[["render",w]]);export{S as __pageData,I as default};
