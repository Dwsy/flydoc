import{_ as t,o as a,c as i,R as s}from"./chunks/framework.S1SDgkSw.js";const b=JSON.parse('{"title":"Action","description":"","frontmatter":{"title":"Action","date":"2020-05-19T16:59:47.000Z"},"headers":[],"relativePath":"doc/wpdoc/Action.md","filePath":"doc/wpdoc/Action.md"}'),e={name:"doc/wpdoc/Action.md"},n=s(`<h1 id="action" tabindex="-1">Action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;Action&quot;">​</a></h1><p>行为是指完成一项特定任务的指令，是表单能够配置的逻辑的基本单元。</p><p>目前表单提供了多种的行为，通过这些行为的组合，可以实现丰富的表单逻辑。</p><p>根据行为的作用分为以下几类</p><ul><li>Data Process 数据处理</li></ul><table><thead><tr><th>name</th><th>function</th></tr></thead><tbody><tr><td>datarequest</td><td>数据请求，用于表单中控件值，控件选项等数据的获取</td></tr><tr><td>datasubmit</td><td>数据提交，用于存储指定的表单中的数据</td></tr><tr><td>cachedatarequest</td><td>缓存数据请求，用于从缓存数据中筛选获取数据</td></tr><tr><td>packagesubmit</td><td>打包提交</td></tr></tbody></table><ul><li>Page Functions 表单逻辑</li></ul><table><thead><tr><th>name</th><th>function</th></tr></thead><tbody><tr><td>refresh</td><td>刷新，重新加载表单或控件</td></tr><tr><td>alert</td><td>弹框提示</td></tr><tr><td>eventlink</td><td>调用当前page的某个event</td></tr><tr><td>ctrlevent</td><td>触发当前page的某个控件绑定的event</td></tr><tr><td>call</td><td>发出事件调用广播</td></tr></tbody></table><ul><li>Page Navigation 表单导航</li></ul><table><thead><tr><th>name</th><th>function</th></tr></thead><tbody><tr><td>link</td><td>链接</td></tr><tr><td>recivelink</td><td>接收链接参数</td></tr><tr><td>return</td><td>返回上一表单</td></tr></tbody></table><ul><li><p>Flycode</p><p>调用 <code>Flycode</code> 的专用行为，可以将一些零散的，不方便配置的逻辑，放置其中，然后插入到行为执行队列中去。</p></li><li><p>Particular Action 特殊行为</p><p>对应于特定场景和表单的行为，不能随意配置，只能应用于特定的场景</p><ul><li>工作流事件</li></ul></li></ul><table><thead><tr><th>name</th><th>function</th></tr></thead><tbody><tr><td>af_preaddflow</td><td>发起审批流程，用于在业务表单发起指定的类型的审批流程</td></tr></tbody></table><ul><li>报表事件</li></ul><table><thead><tr><th>name</th><th>function</th></tr></thead><tbody><tr><td>rp_optionrequest</td><td>报表选项值获取</td></tr><tr><td>rp_datarequest</td><td>报表数据获取</td></tr></tbody></table><h2 id="common-attribute" tabindex="-1">Common Attribute <a class="header-anchor" href="#common-attribute" aria-label="Permalink to &quot;Common Attribute&quot;">​</a></h2><p>所有的事件都具有以下属性</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;datarequest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;刷新列表&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;condition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;failhint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><p>desc</p><p>行为描述，仅用于描述行为的用途</p></li><li><p>condition</p><p>行为执行的条件，当条件为 <code>空</code>，或者条件中的表达式的结果是 <code>true</code> 时，行为才能被执行。</p></li><li><p>failhint</p><p>行为执行失败的提示内容标题，空值的时候显示由具体行为返回的错误信息，如果最终提示信息为空，则表示不需要显示提示。</p><p>提示信息为一个弹出的信息框，包含提示内容和一个 <code>确定</code> 按钮。</p></li></ul>`,18),d=[n];function l(r,p,o,h,c,u){return a(),i("div",null,d)}const E=t(e,[["render",l]]);export{b as __pageData,E as default};
