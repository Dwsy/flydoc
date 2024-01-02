import{_ as i,D as d,c as h,k as t,I as a,w as n,U as e,o as u,a as s}from"./chunks/framework.K-r7inPk.js";const H=JSON.parse('{"title":"ArrayRowCtrl 行控件-函数说明","description":"","frontmatter":{"title":"ArrayRowCtrl 行控件-函数说明","date":"2020-05-09T17:50:26.000Z"},"headers":[],"relativePath":"doc/wpdoc/ArrayRowCtrl 行控件-函数说明.md","filePath":"doc/wpdoc/ArrayRowCtrl 行控件-函数说明.md"}'),r={name:"doc/wpdoc/ArrayRowCtrl 行控件-函数说明.md"},k=e(`<h1 id="函数说明" tabindex="-1">函数说明 <a class="header-anchor" href="#函数说明" aria-label="Permalink to &quot;函数说明&quot;">​</a></h1><h2 id="getctrl-ctrlname" tabindex="-1"><strong>getCtrl(ctrlName)</strong> <a class="header-anchor" href="#getctrl-ctrlname" aria-label="Permalink to &quot;**getCtrl(ctrlName)**&quot;">​</a></h2><p>获取行控件中的子控件</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>ctrlName</td><td>String</td><td>否</td><td>子控件的名字</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Ctrl</td><td>可</td><td>返回行控件的子控件，若子控件不存在，返回null，注意，目前通过该方法返回的子控件，不完全具有Ctrl的能力，目前只支持getValue、setValue</td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取行控件中的性别控件，并设置值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> indexPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IndexPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rowCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getArrayCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;列表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRowAtIndexPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(indexPath)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rowCtrl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;性别&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;男&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="实现情况" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>`,7),o=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),p=t("td",null,"列表 list",-1),_=t("td",null,"表格 table",-1),c=t("td",null,"折叠列表 accordion",-1),y=t("td",null,"动态面板 dynamicpanel",-1),E=t("td",null,"分组列表 sectionlist",-1),g=e('<h2 id="getpickerctrl-ctrlname" tabindex="-1"><strong>getPickerCtrl(ctrlName)</strong> <a class="header-anchor" href="#getpickerctrl-ctrlname" aria-label="Permalink to &quot;**getPickerCtrl(ctrlName)**&quot;">​</a></h2><p>获取行控件中的选项类控件</p><h2 id="getvalue-key" tabindex="-1">getValue(key) <a class="header-anchor" href="#getvalue-key" aria-label="Permalink to &quot;getValue(key)&quot;">​</a></h2><p>获取行控件中绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>否</td><td>绑定值对应的key</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>String／Dictionary</td><td>可</td><td>返回对应key绑定的值，若key不存在，返回null</td></tr></tbody></table><h3 id="实现情况-1" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-1" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',7),b=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),f=t("td",null,"列表 list",-1),C=t("td",null,"表格 table",-1),m=t("td",null,"折叠列表 accordion",-1),F=t("td",null,"动态面板 dynamicpanel",-1),A=t("td",null,"分组列表 sectionlist",-1),P=e(`<h2 id="setvalue-key-newvalue" tabindex="-1">setValue(key, newValue) <a class="header-anchor" href="#setvalue-key-newvalue" aria-label="Permalink to &quot;setValue(key, newValue)&quot;">​</a></h2><p>设置行控件中绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>否</td><td>绑定值对应的key</td></tr><tr><td>newValue</td><td>String／Dictionary</td><td>可</td><td>绑定值对应的值</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取行控件，并设置值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> indexPath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IndexPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rowCtrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Page.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getArrayCtrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;列表&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRowAtIndexPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(indexPath).</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rowCtrl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;userCode&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1234555&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="实现情况-2" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-2" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>`,6),v=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),T=t("td",null,"列表 list",-1),V=t("td",null,"表格 table",-1),w=t("td",null,"折叠列表 accordion",-1),S=t("td",null,"动态面板 dynamicpanel",-1),x=t("td",null,"分组列表 sectionlist",-1),B=e('<h2 id="getvalues-keys" tabindex="-1">getValues(keys) <a class="header-anchor" href="#getvalues-keys" aria-label="Permalink to &quot;getValues(keys)&quot;">​</a></h2><p>获取行控件中多个绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>keys</td><td>Array</td><td>可</td><td>绑定值对应的keys，Array形如[String]，当keys为null时，获取所有绑定的值</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Dictionay</td><td>可</td><td>返回对应key绑定的值，若key不存在，返回null</td></tr></tbody></table><h3 id="实现情况-3" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-3" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',5),D=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),q=t("td",null,"列表 list",-1),N=t("td",null,"表格 table",-1),I=t("td",null,"折叠列表 accordion",-1),R=t("td",null,"动态面板 dynamicpanel",-1),O=t("td",null,"分组列表 sectionlist",-1);function j(W,$,J,U,Z,z){const l=d("font");return u(),h("div",null,[k,t("table",null,[o,t("tbody",null,[t("tr",null,[p,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})])]),t("tr",null,[_,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未检测")]),_:1})])]),t("tr",null,[c,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[y,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[E,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])])])]),g,t("table",null,[b,t("tbody",null,[t("tr",null,[f,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})])]),t("tr",null,[C,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未检测")]),_:1})])]),t("tr",null,[m,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[F,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[A,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])])])]),P,t("table",null,[v,t("tbody",null,[t("tr",null,[T,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})])]),t("tr",null,[V,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未检测")]),_:1})])]),t("tr",null,[w,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[S,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[x,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])])])]),B,t("table",null,[D,t("tbody",null,[t("tr",null,[q,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})])]),t("tr",null,[N,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未检测")]),_:1})])]),t("tr",null,[I,t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("已实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[R,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])]),t("tr",null,[O,t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})]),t("td",null,[a(l,null,{default:n(()=>[s("未实现")]),_:1})])])])])])}const K=i(r,[["render",j]]);export{H as __pageData,K as default};
