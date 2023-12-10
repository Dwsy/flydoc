import{_ as n,D as h,o,c as u,k as t,I as l,w as a,R as r,a as d}from"./chunks/framework.S1SDgkSw.js";const w=JSON.parse('{"title":"ArraySectionHeaderCtrl 分组头控件-函数说明","description":"","frontmatter":{"title":"ArraySectionHeaderCtrl 分组头控件-函数说明","date":"2020-05-09T17:53:26.000Z"},"headers":[],"relativePath":"doc/wpdoc/ArraySectionHeaderCtrl 分组头控件-函数说明.md","filePath":"doc/wpdoc/ArraySectionHeaderCtrl 分组头控件-函数说明.md"}'),_={name:"doc/wpdoc/ArraySectionHeaderCtrl 分组头控件-函数说明.md"},i=r('<h1 id="函数说明" tabindex="-1">函数说明 <a class="header-anchor" href="#函数说明" aria-label="Permalink to &quot;函数说明&quot;">​</a></h1><h2 id="getctrl-ctrlname" tabindex="-1"><strong>getCtrl(ctrlName)</strong> <a class="header-anchor" href="#getctrl-ctrlname" aria-label="Permalink to &quot;**getCtrl(ctrlName)**&quot;">​</a></h2><p>获取行控件中的子控件</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>ctrlName</td><td>String</td><td>否</td><td>子控件的名字</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Ctrl</td><td>可</td><td>返回行控件的子控件，若子控件不存在，返回null，注意，目前通过该方法返回的子控件，不完全具有Ctrl的能力，目前只支持getValue、setValue</td></tr></tbody></table><h3 id="实现情况" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',6),s=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),c=t("td",null,"分组列表 sectionlist",-1),b=r('<h2 id="getvalue-key" tabindex="-1">getValue(key) <a class="header-anchor" href="#getvalue-key" aria-label="Permalink to &quot;getValue(key)&quot;">​</a></h2><p>获取行控件中绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>否</td><td>绑定值对应的key</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>String／Dictionary</td><td>可</td><td>返回对应key绑定的值，若key不存在，返回null</td></tr></tbody></table><h3 id="实现情况-1" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-1" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',5),y=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),k=t("td",null,"分组列表 sectionlist",-1),f=r('<h2 id="setvalue-key-newvalue" tabindex="-1">setValue(key, newValue) <a class="header-anchor" href="#setvalue-key-newvalue" aria-label="Permalink to &quot;setValue(key, newValue)&quot;">​</a></h2><p>设置行控件中绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>key</td><td>String</td><td>否</td><td>绑定值对应的key</td></tr><tr><td>newValue</td><td>String／Dictionary</td><td>可</td><td>绑定值对应的值</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><h3 id="实现情况-2" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-2" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',5),S=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),T=t("td",null,"分组列表 sectionlist",-1),m=r('<h2 id="getvalues-keys" tabindex="-1">getValues(keys) <a class="header-anchor" href="#getvalues-keys" aria-label="Permalink to &quot;getValues(keys)&quot;">​</a></h2><p>获取行控件中多个绑定的值</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>keys</td><td>Array</td><td>可</td><td>绑定值对应的keys，Array形如[String]，当keys为null时，获取所有绑定的值</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>Dictionay</td><td>可</td><td>返回对应key绑定的值，若key不存在，返回null</td></tr></tbody></table><h3 id="实现情况-3" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-3" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3>',5),p=t("thead",null,[t("tr",null,[t("th",null,"支持的控件"),t("th",null,"iOS"),t("th",null,"Android"),t("th",null,"Web")])],-1),A=t("td",null,"分组列表 sectionlist",-1);function V(g,C,P,q,x,N){const e=h("font");return o(),u("div",null,[i,t("table",null,[s,t("tbody",null,[t("tr",null,[c,t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})])])])]),b,t("table",null,[y,t("tbody",null,[t("tr",null,[k,t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})])])])]),f,t("table",null,[S,t("tbody",null,[t("tr",null,[T,t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})])])])]),m,t("table",null,[p,t("tbody",null,[t("tr",null,[A,t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})]),t("td",null,[l(e,null,{default:a(()=>[d("未检测")]),_:1})])])])])])}const D=n(_,[["render",V]]);export{w as __pageData,D as default};
