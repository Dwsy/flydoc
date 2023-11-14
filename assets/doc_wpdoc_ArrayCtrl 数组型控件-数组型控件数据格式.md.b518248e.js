import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.aac09c5f.js";const q=JSON.parse('{"title":"ArrayCtrl 数组型控件-数组型控件数据格式","description":"","frontmatter":{"title":"ArrayCtrl 数组型控件-数组型控件数据格式","date":"2020-05-09T17:45:47.000Z"},"headers":[],"relativePath":"doc/wpdoc/ArrayCtrl 数组型控件-数组型控件数据格式.md","filePath":"doc/wpdoc/ArrayCtrl 数组型控件-数组型控件数据格式.md"}'),p={name:"doc/wpdoc/ArrayCtrl 数组型控件-数组型控件数据格式.md"},o=l(`<h1 id="数组型控件数据格式" tabindex="-1">数组型控件数据格式 <a class="header-anchor" href="#数组型控件数据格式" aria-label="Permalink to &quot;数组型控件数据格式&quot;">​</a></h1><p>数组型控件数据格式分两种，有分组形式和无分组形式</p><p>有分组格式如下，注意，section和row这两个key应该根据实际的数组型控件而定</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;section&quot;</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;sectionKey1&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;sectionKey2&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;row&quot;</span><span style="color:#E1E4E8;">:[</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;rowKey1&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;rowKey2&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">//下一行的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//下一个分组的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;section&quot;</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;sectionKey1&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;sectionKey2&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;row&quot;</span><span style="color:#24292E;">:[</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;rowKey1&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;rowKey2&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">//下一行的数据</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//下一个分组的数据</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>无分组格式</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;rowKey1&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;rowKey2&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">         </span><span style="color:#6A737D;">//下一行的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;rowKey1&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;rowKey2&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#6A737D;">//下一行的数据</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,6),e=[o];function c(r,t,E,i,y,u){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{q as __pageData,d as default};
