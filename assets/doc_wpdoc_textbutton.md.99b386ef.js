import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aac09c5f.js";const b=JSON.parse('{"title":"textbutton","description":"","frontmatter":{"title":"textbutton","date":"2020-05-20T16:18:44.000Z"},"headers":[],"relativePath":"doc/wpdoc/textbutton.md","filePath":"doc/wpdoc/textbutton.md"}'),p={name:"doc/wpdoc/textbutton.md"},o=l(`<h1 id="textbutton-文本按钮框" tabindex="-1">textbutton 文本按钮框 <a class="header-anchor" href="#textbutton-文本按钮框" aria-label="Permalink to &quot;textbutton 文本按钮框&quot;">​</a></h1><p>不能直接输入值，可以触发点击事件，然后通过外部设置值的按钮</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;textbutton&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;textbutton-9001284347634553&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;titlewidth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;110&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;titleflex&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;标题&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;placeholder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;icon&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;refresh&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hiddenclearbtn&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;tips&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;aaaa&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;maxlength&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onvaluechange&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onclicked&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;textbutton&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;textbutton-9001284347634553&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;titlewidth&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;110&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;titleflex&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;标题&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;placeholder&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;icon&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;refresh&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hiddenclearbtn&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;tips&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;aaaa&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;maxlength&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onvaluechange&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onclicked&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h1 id="objpicker" tabindex="-1">ObjPicker <a class="header-anchor" href="#objpicker" aria-label="Permalink to &quot;ObjPicker&quot;">​</a></h1><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;objpicker&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;标题&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;placeholder&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onvaluechange&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onclicked&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;objpicker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;标题&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;placeholder&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onvaluechange&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onclicked&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1207215468667080803&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5),t=[o];function e(c,r,E,u,y,i){return n(),a("div",null,t)}const F=s(p,[["render",e]]);export{b as __pageData,F as default};