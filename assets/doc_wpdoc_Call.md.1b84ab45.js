import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d084db19.js";const F=JSON.parse('{"title":"Call","description":"","frontmatter":{"title":"Call","date":"2020-05-22T15:55:18.000Z"},"headers":[],"relativePath":"doc/wpdoc/Call.md","filePath":"doc/wpdoc/Call.md"}'),p={name:"doc/wpdoc/Call.md"},o=l(`<h1 id="call" tabindex="-1">Call <a class="header-anchor" href="#call" aria-label="Permalink to &quot;Call&quot;">​</a></h1><p>事件呼叫行为，按key查找</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{  </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;897995503285964871&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;call&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;pagecode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;__pageprocesscomplate&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;拜访表单处理完成事件&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;param&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{  </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;897995503285964871&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;call&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;pagecode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;__pageprocesscomplate&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;拜访表单处理完成事件&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;param&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><p>key</p><p>指定调用的key，系统将会广播改key，所有当前存在的页面都会收到该广播，并执行与该key一致的事件（handler中）。</p></li><li><p>pagecode</p><p>【废弃属性】</p><p>默认情况下向所有表单广播，也可以通过该属性向指定的某一个表单进行广播</p></li><li><p>param</p><p>call支持附带参数</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;param&quot;</span><span style="color:#E1E4E8;">:               </span><span style="color:#6A737D;">//call支持参数</span></span>
<span class="line"><span style="color:#E1E4E8;">{ </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;datatype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//需要根据datatype打包，拆包打包的datatype需要一致</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;scope&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;kx_product&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;productid&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;le:uuid()&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { </span><span style="color:#6A737D;">//在当前表单的文本控件获取新建的产品名字</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;883266839692709975&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;productname&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;param&quot;</span><span style="color:#24292E;">:               </span><span style="color:#6A737D;">//call支持参数</span></span>
<span class="line"><span style="color:#24292E;">{ </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;datatype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//需要根据datatype打包，拆包打包的datatype需要一致</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;scope&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;kx_product&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;productid&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;le:uuid()&quot;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      { </span><span style="color:#6A737D;">//在当前表单的文本控件获取新建的产品名字</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;883266839692709975&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;productname&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li></ul>`,4),e=[o];function t(c,r,E,y,u,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
