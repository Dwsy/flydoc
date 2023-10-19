import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b1e56e49.js";const q=JSON.parse('{"title":"Pagelistrequest","description":"","frontmatter":{"title":"Pagelistrequest","date":"2020-05-22T16:01:55.000Z"},"headers":[],"relativePath":"doc/wpdoc/Pagelistrequest.md","filePath":"doc/wpdoc/Pagelistrequest.md"}'),l={name:"doc/wpdoc/Pagelistrequest.md"},o=p(`<h1 id="pagelistrequest" tabindex="-1">Pagelistrequest <a class="header-anchor" href="#pagelistrequest" aria-label="Permalink to &quot;Pagelistrequest&quot;">​</a></h1><p>控件想要获取到指定目录的可见表单列表，需要使用 <code>pagelistrequest</code> 进行列表数据获取。</p><p>该事件有固定的出参结构（参看下方出参说明），因此不再进行出参绑定。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pagelistrequest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ctrlcode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;folderkey&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;客户拜访店面工作&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bizproperties&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;customertype&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;pagelistrequest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ctrlcode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;folderkey&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;客户拜访店面工作&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bizproperties&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;customertype&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li><p>ctrlcode</p><p>进行列表请求的控件的code，请求结果会直接发送给该控件。</p><p>如果发起请求的表单流之类的特殊表单，只需要填写对应特殊节点（例如 <code>pageflow</code> , <code>pageswitch</code>）的code即可</p></li><li><p>folderkey</p><p>想要请求的目录的key值，目前只支持填一个固定值。</p></li><li><p>bizproperties</p><p>请求额外需要的业务数据，作用与 <code>datarequest</code> 的 <code>getter</code> 类似，只不过没有容器控件的指定。</p></li></ul><h2 id="手机端接口" tabindex="-1">手机端接口 <a class="header-anchor" href="#手机端接口" aria-label="Permalink to &quot;手机端接口&quot;">​</a></h2><p><strong>pagelistrequest</strong> 是一个特殊的行为，对于Web端，直接调用指定的接口</p><p>对于手机端，需要调用内部API，实现具有以下出入参能力的接口：</p><h3 id="入参" tabindex="-1">入参 <a class="header-anchor" href="#入参" aria-label="Permalink to &quot;入参&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&quot;key1&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;key2&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;key3&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;key1&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;key2&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;key3&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>入参只需要提供一组按目录结构从上到下排序好的 <code>key</code> 的数组即可。这些 <code>key</code> 对应于 action 中的 folderkey 和 bizproperties 属性的值，以上方 <em>Action Protocol</em> 协议中的例子来说，如果此时 <code>customertype</code> 获取到的值为 <code>123456</code> ，则组装后的完整入参为 :</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&quot;客户拜访店面工作&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;123456&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;客户拜访店面工作&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;123456&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="出参" tabindex="-1">出参 <a class="header-anchor" href="#出参" aria-label="Permalink to &quot;出参&quot;">​</a></h3><p>出参就是一个 <code>pageinfo</code> 的数组</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#6A737D;">// pageinfo struct</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;标题&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;icon&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;pagecode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;submitevent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;hidden&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6A737D;">// pageinfo struct</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;标题&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;icon&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;pagecode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;submitevent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;hidden&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="运算过程" tabindex="-1">运算过程 <a class="header-anchor" href="#运算过程" aria-label="Permalink to &quot;运算过程&quot;">​</a></h3><p>运算大致过程如下</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">func </span><span style="color:#B392F0;">getPageList</span><span style="color:#E1E4E8;">(inputKeys: [String]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> tmpPagelist </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> keyPath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  for key </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> inputKeys {</span></span>
<span class="line"><span style="color:#E1E4E8;">    keyPath.</span><span style="color:#B392F0;">appendKey</span><span style="color:#E1E4E8;">(key)</span></span>
<span class="line"><span style="color:#E1E4E8;">    tmpPagelist.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">findPagesForKeyPath</span><span style="color:#E1E4E8;">(keyPath))</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> pagelist </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">  for page </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> tmpPagelist {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isVisible</span><span style="color:#E1E4E8;">(page) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pagelist.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(page)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> pagelist</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">func </span><span style="color:#6F42C1;">getPageList</span><span style="color:#24292E;">(inputKeys: [String]) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> tmpPagelist </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> keyPath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  for key </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> inputKeys {</span></span>
<span class="line"><span style="color:#24292E;">    keyPath.</span><span style="color:#6F42C1;">appendKey</span><span style="color:#24292E;">(key)</span></span>
<span class="line"><span style="color:#24292E;">    tmpPagelist.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">findPagesForKeyPath</span><span style="color:#24292E;">(keyPath))</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> pagelist </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">  for page </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> tmpPagelist {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isVisible</span><span style="color:#24292E;">(page) {</span></span>
<span class="line"><span style="color:#24292E;">      pagelist.</span><span style="color:#6F42C1;">append</span><span style="color:#24292E;">(page)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> pagelist</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="支持表单列表请求接口的模块" tabindex="-1">支持表单列表请求接口的模块 <a class="header-anchor" href="#支持表单列表请求接口的模块" aria-label="Permalink to &quot;支持表单列表请求接口的模块&quot;">​</a></h2><p>能够支持导航接口的模块（通常是控件），需要提供一个可以使用 <code>pageinfo</code> 数据进行赋值的接口。</p><p>目前内置的功能中，<code>functionlist</code> 和 <code>flowpage</code> 支持使用表单列表请求接口。</p><p>手机端的处理时序大致如下：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/MobileNavigationServiceSequence.png" alt=""></p>`,23),e=[o];function t(c,r,E,i,y,u){return n(),a("div",null,e)}const b=s(l,[["render",t]]);export{q as __pageData,b as default};