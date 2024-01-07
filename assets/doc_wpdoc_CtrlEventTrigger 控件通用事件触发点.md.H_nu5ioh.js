import{_ as e,c as t,o,U as a}from"./chunks/framework.FhXPyWfz.js";const _=JSON.parse('{"title":"CtrlEventTrigger 控件通用事件触发点","description":"","frontmatter":{"title":"CtrlEventTrigger 控件通用事件触发点","date":"2020-05-20T15:10:39.000Z"},"headers":[],"relativePath":"doc/wpdoc/CtrlEventTrigger 控件通用事件触发点.md","filePath":"doc/wpdoc/CtrlEventTrigger 控件通用事件触发点.md"}'),r={name:"doc/wpdoc/CtrlEventTrigger 控件通用事件触发点.md"},n=a('<h1 id="ctrl-event-trigger" tabindex="-1">Ctrl Event Trigger <a class="header-anchor" href="#ctrl-event-trigger" aria-label="Permalink to &quot;Ctrl Event Trigger&quot;">​</a></h1><h2 id="onload" tabindex="-1">onload <a class="header-anchor" href="#onload" aria-label="Permalink to &quot;onload&quot;">​</a></h2><p>所有的控件都有 <code>onload</code> 事件</p><p>该事件在控件被加载(渲染)的时候调用</p><blockquote><p><code>page</code> 页面的 <code>onload</code> 事件在表单加载(此时控件还未开始加载)时调用</p></blockquote><h2 id="onrefresh" tabindex="-1">onrefresh <a class="header-anchor" href="#onrefresh" aria-label="Permalink to &quot;onrefresh&quot;">​</a></h2><p>所有支持刷新内容的控件都有该事件</p><p>例如：list，table等</p><h2 id="onvaluechange" tabindex="-1">onvaluechange <a class="header-anchor" href="#onvaluechange" aria-label="Permalink to &quot;onvaluechange&quot;">​</a></h2><p>所有的录入型控件都有 <code>onvaluechange</code> 事件</p><p>该事件在控件的值发生改变时调用，注意，只有是在用户直接输入导致的值改变才会调用，其他方式（例如事件赋值等）造成的值改变，不触发该事件（Web端因历史原因需要特殊处理，请看备注）</p><p>录入型控件有：</p><p>textinput, textinputarea, filtertextinput, currencyinput, datepicker, photo, attachment, location, picklist, selectbox, cascade</p><h3 id="web端备注" tabindex="-1">web端备注 <a class="header-anchor" href="#web端备注" aria-label="Permalink to &quot;web端备注&quot;">​</a></h3><ul><li>V9.4.0后的版本后，onvaluechange有0.5秒的防抖(新改版的控件有效)，不支持配置</li><li>因历史原因，web端部分控件事件赋值等方式赋值也会触发值改变事件（editortable内的控件除外），如果赋值的值等于控件的值则不触发（防止配置错误的uiflycode引起死循环）</li></ul><table><thead><tr><th>事件/uiflycode赋值行为赋值能触发值改变事件的控件</th></tr></thead><tbody><tr><td>checkbutton</td></tr><tr><td>picktree</td></tr><tr><td>datatree</td></tr><tr><td>dropdownbox</td></tr><tr><td>memberpicker</td></tr><tr><td>daterange</td></tr><tr><td>date/datepicker</td></tr><tr><td>textbutton</td></tr><tr><td>switch</td></tr><tr><td>selectbox</td></tr><tr><td>cascade</td></tr></tbody></table><h2 id="onblur" tabindex="-1">onblur <a class="header-anchor" href="#onblur" aria-label="Permalink to &quot;onblur&quot;">​</a></h2><p>焦点移出事件，目前输入型控件支持</p><p>textinput, textinputarea, filtertextinput, currency,number</p><h2 id="onloadoptions" tabindex="-1">onloadoptions <a class="header-anchor" href="#onloadoptions" aria-label="Permalink to &quot;onloadoptions&quot;">​</a></h2><p>所有的选项值控件都有 <code>onloadoptions</code> 事件</p><p>该事件在控件的选项为空，且用户点击了控件，需要显示选项时调用。</p><p><em><strong>暂时不可用</strong></em></p><h2 id="onloadsuboptions" tabindex="-1">onloadsuboptions <a class="header-anchor" href="#onloadsuboptions" aria-label="Permalink to &quot;onloadsuboptions&quot;">​</a></h2><p>所有的级联选项值控件都有 <code>onloadsuboptions</code> 事件</p><p>该事件在控件的当前需要加载的选项层的选项为空时调用。该事件需要将子选项层的parentid，也就是当前选中的选项的id，作为参数传入，约定的参数名为 <code>__optionid</code></p><p><em><strong>暂时不可用</strong></em></p><h2 id="onclicked" tabindex="-1">onclicked <a class="header-anchor" href="#onclicked" aria-label="Permalink to &quot;onclicked&quot;">​</a></h2><p>所有的可点击控件具有该事件</p><p>该事件在用户点击控件后触发</p><p>可点击控件有：</p><p>button，rows</p><h2 id="onchecked" tabindex="-1">onchecked <a class="header-anchor" href="#onchecked" aria-label="Permalink to &quot;onchecked&quot;">​</a></h2><p>所有的数组值容器控件均有这个事件</p><p>该事件在控件可选择行的情况下，用户点击行（list），或者点击对应的checkbox（table）时，触发该事件。该事件需要将当前选中的行的数量用参数传出，约定的参数名为 <code>__checkednumber</code></p>',35),d=[n];function c(l,i,p,h,s,u){return o(),t("div",null,d)}const g=e(r,[["render",c]]);export{_ as __pageData,g as default};
