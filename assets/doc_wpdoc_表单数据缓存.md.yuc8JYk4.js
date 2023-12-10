import{_ as a,o as e,c as i,R as s}from"./chunks/framework.S1SDgkSw.js";const b=JSON.parse('{"title":"表单数据缓存","description":"","frontmatter":{"title":"表单数据缓存","date":"2020-05-19T19:36:23.000Z"},"headers":[],"relativePath":"doc/wpdoc/表单数据缓存.md","filePath":"doc/wpdoc/表单数据缓存.md"}'),t={name:"doc/wpdoc/表单数据缓存.md"},l=s(`<h1 id="表单数据缓存功能" tabindex="-1">表单数据缓存功能 <a class="header-anchor" href="#表单数据缓存功能" aria-label="Permalink to &quot;表单数据缓存功能&quot;">​</a></h1><p>表单数据缓存功能是指，用户在表单中输入数据时，自动存储输入的数据到缓存文件中，方便当用户意外退出表单后，可以重新找回已填写的数据。</p><h2 id="缓存配置" tabindex="-1">缓存配置 <a class="header-anchor" href="#缓存配置" aria-label="Permalink to &quot;缓存配置&quot;">​</a></h2><h3 id="主动配置" tabindex="-1">主动配置 <a class="header-anchor" href="#主动配置" aria-label="Permalink to &quot;主动配置&quot;">​</a></h3><p>表单可以主动设置为支持缓存的相关信息，主动设置能够更精确的控制缓存。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pageinfo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1061903577213177955&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;cache&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;keys&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;submitevents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1234123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4564567567&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><p>enable</p><p>是否允许缓存，bool 类型值，默认值为 1</p></li><li><p>keys</p><p>指定缓存表单需要的特殊标记，配置时从表单的入参中选择一个或多个入参，这些入参的 <code>value</code> 就作为标记的 <code>key</code> 放入该字段。</p><p>表单引擎会使用这些字段的值的组合，作为 <strong>业务值</strong> 记录进 <strong>表单实例标识</strong> 中去。</p></li><li><p>submitevents</p><p><strong>提交事件</strong>，用于指定表单中哪些事件是提交数据的事件。这些事件一旦执行成功，立即删除当前表单实例的缓存数据。</p></li></ul><h3 id="自动配置" tabindex="-1">自动配置 <a class="header-anchor" href="#自动配置" aria-label="Permalink to &quot;自动配置&quot;">​</a></h3><p>如果表单没有设置 <code>cache</code> 字段，则使用自动配置方案。该方案会自动设置支持缓存的相关信息，具体如下</p><ul><li><p>enable</p><p>搜索表单中是否存在数据上传行为 <code>datasubmit</code> ，如果有，则标记为 1， 否则标记为 0</p></li><li><p>keys</p><p>会将表单接收入参的事件 <code>receivelink</code> 的所有参数中，值为字符串的参数的作为 <code>key</code></p></li><li><p>submitevents</p><p>所有包含 <code>datasubmit</code> 行为的事件，都会被标记为提交事件。</p></li></ul><h3 id="表单实例标识" tabindex="-1">表单实例标识 <a class="header-anchor" href="#表单实例标识" aria-label="Permalink to &quot;表单实例标识&quot;">​</a></h3><p>即唯一标记一个缓存数据，只有当前表单的实例标识，与缓存数据的实例标识的值相同时，才认为该缓存数据为当前表单的数据。</p><p>实例标识是由多个值共同组成的，具体包括：<code>用户ID</code> + <code>企业ID</code> + <code>职位ID</code> + <code>表单ID</code> + <code>业务值1</code> + ... + <code>业务值N</code></p><p>如果前端使用了不同的用户，企业，职位的数据的物理分离，则可以将缓存数据也使用相同的规则分割。这样的话实例标识就只剩下 <code>表单ID</code> + <code>业务值1</code> + ... + <code>业务值N</code></p><h2 id="规则说明" tabindex="-1">规则说明 <a class="header-anchor" href="#规则说明" aria-label="Permalink to &quot;规则说明&quot;">​</a></h2><h3 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h3><ol><li><p>用户在输入型控件中进行输入后立即缓存这个输入内容。</p></li><li><p>当用户的点击会触发一个事件时立即缓存这个点击。</p></li><li><p>对于文本输入框，数字输入框这类可以会使用键盘连续输入的控件，可以在关闭键盘，或者焦点离开该控件时触发缓存。</p></li><li><p>缓存输入内容时，使用控件的code作为 <strong>控件实例标识</strong> ，如果是在数组型容器控件内部的控件，需要看该数组型控件是否配置了primarykey属性(primarykey的值可以设置为内存值的name或数组型控件内部控件的name)：</p><ol><li><p>如果没有设置 primarykey，则需要使用 <code>容器控件code</code> + <code>indexPath</code> + <code>控件code</code> 作为缓存标识。</p><p>其中 indexPath直接使用其section和row的值做标识，例如：容器A中，第0组第2行的控件B的实例标识为： <code>A/0/2/B</code></p></li><li><p>如果设置了primarykey，则使用 <code>容器控件code</code> + <code>primarykey对应内存值或控件的值</code> + <code>控件code</code> 作为缓存标识。恢复时，只有找到了相同的primarykey的行的数据才会被恢复。</p><ul><li>注意：primarykey为控件的name</li></ul></li></ol></li><li><p>缓存用户点击的时候，同样使用 <strong>控件实例标识</strong> 做为key，并缓存实际触发的事件的 trigger 。</p></li><li><p>如果触发的 trigger 没有配置 handler，或者handler 对应的事件中有链接行为，则不缓存该 trigger。</p></li></ol><h5 id="注意" tabindex="-1">注意： <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意：&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 缓存操作只缓存用户输入的值，不缓存自动获取的值(比如：定位等)</span></span>
<span class="line"><span>2. 对于没有在表单中设置enable字段，且没有配置提交事件(由于flycode编写的事件无法判断是否是提交事件，所以对于此判断来说，flycode编写的提交事件暂不算做提交事件)，代码中控制不进行缓存操作。没有提交事件的表单在表单中设置enable:&quot;1&quot;，也能开启缓存功能，但是不建议这么操作，因为无法清除缓存。</span></span>
<span class="line"><span>3. 当使用primarykey形式缓存时，primarykey对应内存值或控件的值需要唯一，不能相同，否则仍会出现缓存错乱的问题</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="恢复" tabindex="-1">恢复 <a class="header-anchor" href="#恢复" aria-label="Permalink to &quot;恢复&quot;">​</a></h3><ol><li>当表单执行完表单的onload事件，以及所有控件的onload事件后，使用当前表单的实例ID去缓存库中查询是否有缓存。</li><li>如果有，则弹框提示用户是否使用缓存数据进行填充。</li><li>当用户选择确定按钮后，取出缓存数据并填充进控件中。</li><li>恢复操作根据缓存的顺序，依次进行恢复。</li><li>当恢复输入内容时，自动触发对应控件的 onvaluechanged。</li><li>当恢复用户点击时，自动触发对应的 trigger。</li><li>当恢复时实际触发了事件，需要等待该事件执行完毕后，再执行下一个恢复。</li><li>如果有数据找不到对应的控件，则丢弃。</li></ol><h3 id="清理" tabindex="-1">清理 <a class="header-anchor" href="#清理" aria-label="Permalink to &quot;清理&quot;">​</a></h3><ol><li>当表单中的任一 <strong>提交事件</strong> 被成功执行后，即清理当前表单的缓存。</li><li>当用户在恢复弹框时，选择了 <strong>丢弃</strong> 按钮后，清理当前表单的缓存。</li><li>当用户使用清除缓存的功能时，清理所有的表单缓存。</li><li>当缓存列表类控件，例如表格，内部的数据的时候，如果控件的数据被刷新（内存搜索除外）时，需要清除掉该控件的缓存。（PS. 实际中，这种情况应该不会存在，录入型的列表类控件，不应该配置数据刷新）</li><li>当用户主动退出当前的表单时，需要检测当前表单是否有缓存数据，如果有，则提示用户是否保留缓存数据，如果用户选择了否，则清除当前的缓存数据</li></ol><h2 id="缓存时序" tabindex="-1">缓存时序 <a class="header-anchor" href="#缓存时序" aria-label="Permalink to &quot;缓存时序&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/CacheFlow.jpg" alt=""></p><h2 id="缓存数据设计" tabindex="-1">缓存数据设计 <a class="header-anchor" href="#缓存数据设计" aria-label="Permalink to &quot;缓存数据设计&quot;">​</a></h2><p>各端可根据实际情况做出自己的设计，只要能满足缓存的需求即可。以下为一个简单的设计以供参考：</p><p>缓存数据由两部分组成：</p><ol><li>缓存文件目录。</li><li>缓存文件</li></ol><h3 id="缓存文件目录" tabindex="-1">缓存文件目录 <a class="header-anchor" href="#缓存文件目录" aria-label="Permalink to &quot;缓存文件目录&quot;">​</a></h3><p>用于记录有缓存数据的表单文件的索引的目录文件，格式如下</p><table><thead><tr><th>ID</th><th>path</th><th>update_date</th></tr></thead><tbody><tr><td>243213546123455_456t34563_2</td><td>243213546123455_456t34563_2.plist</td><td>18966532144</td></tr></tbody></table><p>如果缓存文件在一个文件夹里面，也可以不用真实存在一个目录文件，直接读取该文件夹的文件列表即可。</p><h3 id="缓存文件" tabindex="-1">缓存文件 <a class="header-anchor" href="#缓存文件" aria-label="Permalink to &quot;缓存文件&quot;">​</a></h3><p>缓存文件里面实际记录了指定表单的缓存数据，其内部应该是一个字典，key为控件实例标识，value为缓存值：</p><table><thead><tr><th>key</th><th>value</th><th>trigger</th></tr></thead><tbody><tr><td>somebutton</td><td>nil</td><td>onclicked</td></tr><tr><td>sonetable_0_1_sometextinput</td><td>A</td><td>onvaluechange</td></tr><tr><td>somedropdown</td><td>4</td><td>nil</td></tr></tbody></table><p>somebutton，只是点击事件，没有值</p><p>sonetable_0_1_sometextinput，即有输入，又有触发值改变事件</p><p>somedropdown，有输入，但是没有值改变事件，或者值改变事件中有链接行为。</p>`,39),n=[l];function o(p,d,r,h,c,k){return e(),i("div",null,n)}const m=a(t,[["render",o]]);export{b as __pageData,m as default};
