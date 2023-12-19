import{_ as t,o as d,c as e,R as r}from"./chunks/framework.E9w9IFh5.js";const b=JSON.parse('{"title":"控件对象","description":"","frontmatter":{"title":"控件对象","date":"2020-05-19T19:12:29.000Z"},"headers":[],"relativePath":"doc/wpdoc/控件对象.md","filePath":"doc/wpdoc/控件对象.md"}'),a={name:"doc/wpdoc/控件对象.md"},o=r('<h1 id="控件对象" tabindex="-1">控件对象 <a class="header-anchor" href="#控件对象" aria-label="Permalink to &quot;控件对象&quot;">​</a></h1><p>不针对特定控件所有描述，其对控件的值、属性和配置绑定事件等的操作具有广泛的适用性。</p><p>部分属性和方法只适用于部分控件，具体的支持的控件参看详情说明。</p><h2 id="控件属性" tabindex="-1">控件属性 <a class="header-anchor" href="#控件属性" aria-label="Permalink to &quot;控件属性&quot;">​</a></h2><p>表单属性提供了一组可获取和设置的表单特性，用于对表单进行快捷操作。本质上属性就是不带参数的方法。</p><p>大部分的属性都可以用于获取和设置，一部分只能获取，或者只能设置。</p><table><thead><tr><th>属性</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>code</td><td>表单状态</td><td>✅</td></tr><tr><td>title</td><td>表单标题</td><td>未实现</td></tr><tr><td>floatValue</td><td>表单参数</td><td>部分实现</td></tr><tr><td>hidden</td><td>隐藏</td><td>✅</td></tr><tr><td>readonly</td><td>只读</td><td>✅</td></tr><tr><td>required</td><td>必填</td><td>✅</td></tr><tr><td>color</td><td>前景色</td><td>✅</td></tr><tr><td>bgcolor</td><td>背景色</td><td>✅</td></tr></tbody></table><p><a href="./控件属性.html">【详情】</a></p><h2 id="控件操作" tabindex="-1">控件操作 <a class="header-anchor" href="#控件操作" aria-label="Permalink to &quot;控件操作&quot;">​</a></h2><p>用于对控件进行通用的操作</p><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>getProperty</td><td>判断表单状态</td><td>✅</td></tr><tr><td>setProperty</td><td>设置指定控件属性值</td><td>✅</td></tr><tr><td>getValue</td><td>获取控件值，支持getter</td><td>✅</td></tr><tr><td>setValue</td><td>刷新表单布局</td><td>✅</td></tr><tr><td>setValidateResult</td><td>设置控件校验结果</td><td></td></tr><tr><td>validateValue</td><td>触发控件值校验</td><td></td></tr><tr><td>triggerEvent</td><td>触发控件事件</td><td></td></tr></tbody></table><p><a href="./控件操作.html">【详情】</a></p>',12),h=[o];function l(c,i,s,_,n,p){return d(),e("div",null,h)}const f=t(a,[["render",l]]);export{b as __pageData,f as default};
