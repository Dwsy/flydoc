import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.aac09c5f.js";const g=JSON.parse('{"title":"Paging","description":"","frontmatter":{"title":"Paging","date":"2020-05-22T15:48:41.000Z"},"headers":[],"relativePath":"doc/wpdoc/Paging.md","filePath":"doc/wpdoc/Paging.md"}'),e={name:"doc/wpdoc/Paging.md"},o=p(`<h1 id="paging-分页协议" tabindex="-1">Paging 分页协议 <a class="header-anchor" href="#paging-分页协议" aria-label="Permalink to &quot;Paging 分页协议&quot;">​</a></h1><p>分页是处理大量数据加载的一种技术手段，会由多个环节共同形成一个分页请求。</p><p>通常是由控件发起分页请求，其中包含需要请求的分页序号 <code>__pageindex</code> ，然后由数据请求行为 <code>datarequest</code> 根据其分页大小属性 <code>pagesize</code> 的设置，包装出分页请求对象 <code>__paging</code> ，并将该对象附加在数据入参之中进行数据请求。</p><p>请求数据在返回后，由 <code>datarequest</code> 根据setter设置进行分配。</p><p>由于发起分页事件可以由支持分页的控件发出，也可以由 <code>filter</code> 控件发出，所以分页的信息分成两部分村粗</p><ul><li><p>pageindex 页码</p><p>由控件负责存储</p></li><li><p>pagesize 分页大小</p><p>由数据请求事件负责存储</p></li></ul><p>时序图如下</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/List%E5%8F%91%E8%B5%B7%E5%88%86%E9%A1%B5.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Filter%E5%8F%91%E8%B5%B7%E5%88%86%E9%A1%B5.png" alt=""></p><h2 id="related-protocol-相关协议" tabindex="-1">Related Protocol 相关协议 <a class="header-anchor" href="#related-protocol-相关协议" aria-label="Permalink to &quot;Related Protocol 相关协议&quot;">​</a></h2><ul><li><p>支持分页的控件</p><p><strong>数组值控件</strong> 均支持分页，如 <code>list</code> , <code>table</code></p><p>部分 <strong>选项值控件</strong> 的选项支持分页，如 <code>picklist</code> 等，具体参看控件定义。</p><p>这部分控件均有一个叫 <code>pageable</code> 的属性用于决定是否支持分页：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;pageable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;pageable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当 <code>pageable = 0</code> 时，不传递 <code>__pageindex</code> ，默认值为 <code>0</code></p><blockquote><p>所有支持分页的控件，如 <code>list</code> 需要在其实现中自行储存当前的 <code>__pageindex</code> ，并根据 <code>pageable</code> 的设置决定是否传递该值；</p><p>在该控件接收到 <code>__paging</code> 参数对象时，需要根据其中的 <code>__pageindex</code> 决定其数据更新行为，并同时更新其存储的 <code>__pageindex</code> 的值。如果没有接收到 <code>__paging</code> ，默认将 <code>__pageindex</code> 设置为0</p></blockquote></li><li><p>支持分页的事件</p><p>目前只有 <code>datarequest</code> 事件支持分页，该事件有一个叫 <code>pagesize</code> 的属性决定是否支持分页，以及分页大小</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;datarequest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;pagesize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;datarequest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;pagesize&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>pagesize = 0</code> 表示不支持分页，默认值为 <code>20</code></p><p>根据不同的 <code>pagesize</code> 的值，以及事件传参所传递的 <code>__pageindex</code> 的值，该事件的处理如下</p></li></ul><p>|无 <code>__pageindex</code>|有 <code>__pageindex = n</code>| |---|---|---| |pagesize = 0|空|不组装 <code>__paging</code>|不组装 <code>__paging</code>| |pagesize &gt; 0|组装 <code>__paging</code>，<code>__pageindex = 0</code>|组装 <code>__paging</code>，<code>__pageindex = n</code>|</p><h2 id="paging-数据结构" tabindex="-1">__paging 数据结构 <a class="header-anchor" href="#paging-数据结构" aria-label="Permalink to &quot;\\_\\_paging 数据结构&quot;">​</a></h2><h3 id="请求数据-入参" tabindex="-1">请求数据（入参） <a class="header-anchor" href="#请求数据-入参" aria-label="Permalink to &quot;请求数据（入参）&quot;">​</a></h3><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bizdata&quot;</span><span style="color:#E1E4E8;">:{ },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;__paging&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;__pageindex&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;__pagesize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bizdata&quot;</span><span style="color:#24292E;">:{ },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;__paging&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;__pageindex&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;__pagesize&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;20&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>__paging</p><p>分页对象</p></li><li><p>__pageindex</p><p>请求的页码</p></li><li><p>__pagesize</p><p>分页大小</p></li></ul><h3 id="返回数据-出参" tabindex="-1">返回数据（出参） <a class="header-anchor" href="#返回数据-出参" aria-label="Permalink to &quot;返回数据（出参）&quot;">​</a></h3><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bizdata1&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bizdata2&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;__paging&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;__pageindex&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;__pagesize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;20&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;__itemcount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;90&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bizdata1&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bizdata2&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;__paging&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;__pageindex&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;__pagesize&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;20&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;__itemcount&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;90&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li><p>__itemcount</p><p>总的数据条数，可以不返回，此时前端只能根据返回数据是否为空来判断数据是否已经取完。</p></li></ul>`,19),l=[o];function t(c,r,i,d,E,u){return a(),n("div",null,l)}const q=s(e,[["render",t]]);export{g as __pageData,q as default};