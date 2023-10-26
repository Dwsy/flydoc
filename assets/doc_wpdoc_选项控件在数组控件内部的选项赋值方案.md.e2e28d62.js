import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.d084db19.js";const F=JSON.parse('{"title":"选项控件在数组控件内部的选项赋值方案","description":"","frontmatter":{"title":"选项控件在数组控件内部的选项赋值方案","date":"2020-05-20T16:01:22.000Z"},"headers":[],"relativePath":"doc/wpdoc/选项控件在数组控件内部的选项赋值方案.md","filePath":"doc/wpdoc/选项控件在数组控件内部的选项赋值方案.md"}'),p={name:"doc/wpdoc/选项控件在数组控件内部的选项赋值方案.md"},o=l(`<h1 id="选项控件在数组控件内部的选项赋值方案" tabindex="-1">选项控件在数组控件内部的选项赋值方案 <a class="header-anchor" href="#选项控件在数组控件内部的选项赋值方案" aria-label="Permalink to &quot;选项控件在数组控件内部的选项赋值方案&quot;">​</a></h1><h2 id="配置方案" tabindex="-1">配置方案 <a class="header-anchor" href="#配置方案" aria-label="Permalink to &quot;配置方案&quot;">​</a></h2><h3 id="_1-固定选项" tabindex="-1">1：固定选项 <a class="header-anchor" href="#_1-固定选项" aria-label="Permalink to &quot;1：固定选项&quot;">​</a></h3><p>即在控件协议中写死选项，这种适合于选项较少，且固定的情况，直接在对应控件中配置选项即可。</p><p>此时所有行的该控件的选项都是一致的。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;table&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;rows&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;row&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;columnitems&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dropdownbox&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;options&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;已处理&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;未处理&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;table&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;rows&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;row&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;columnitems&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dropdownbox&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;options&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;已处理&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;未处理&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_2-加载选项" tabindex="-1">2：加载选项 <a class="header-anchor" href="#_2-加载选项" aria-label="Permalink to &quot;2：加载选项&quot;">​</a></h3><p>这种选项需要通过数据接口获取，因此会使用datarequest事件进行选项赋值。</p><p>获取事件需要配置在该控件的onload事件中，这样每一行的该控件在第一次加载时，都会触发该控件的加载事件。</p><blockquote><p>由于有的时候每一行的选项其实是一样的，因此在实现上，可以让数组型控件对该选项获取的入参和出参进行缓存，当新的请求的入参命中的已缓存的入参时，则直接使用对应的出参，不再实际发起数据获取请求。</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;table&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;rows&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;row&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;columnitems&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dropdownbox&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;表格内的下拉框&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onload&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;加载下拉框数据事件&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;加载下拉框数据事件&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;actions&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;datarequest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;下拉框选项获取&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;getter&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;datatype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#79B8FF;">&quot;scope&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;productid&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;setter&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;kx_cost_plan&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;datatype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;ctrlcode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;表格内的下拉框&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;id&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;key&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;costname&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;table&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;rows&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;row&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;columnitems&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;dropdownbox&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;表格内的下拉框&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onload&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;加载下拉框数据事件&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;加载下拉框数据事件&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;actions&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;datarequest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;下拉框选项获取&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;getter&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;datatype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#005CC5;">&quot;scope&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;productid&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">                    ]</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;setter&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;kx_cost_plan&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;datatype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;ctrlcode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;表格内的下拉框&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;id&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;key&quot;</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;costname&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;text&quot;</span></span>
<span class="line"><span style="color:#24292E;">                            }</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">                    ]</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="uiflycode-方案" tabindex="-1">UIFlycode 方案 <a class="header-anchor" href="#uiflycode-方案" aria-label="Permalink to &quot;UIFlycode 方案&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> optionData </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;key&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;yyyy&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为整列赋选项</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getArrayCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getColByName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;colname&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getPickerCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dropDownBox&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setOptions</span><span style="color:#E1E4E8;">(optionData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为某行赋选项</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getArrayCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getRowAtIndexPath</span><span style="color:#E1E4E8;">(indexPath).</span><span style="color:#B392F0;">getPickerCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dropDownBox&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setOptions</span><span style="color:#E1E4E8;">(optionData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[狗头] 如果上面的不行，或者试一下去掉s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为整列赋选项</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getArrayCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getColByName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;colname&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getPickerCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dropDownBox&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(optionData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为某行赋选项</span></span>
<span class="line"><span style="color:#E1E4E8;">Page.</span><span style="color:#B392F0;">getArrayCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getRowAtIndexPath</span><span style="color:#E1E4E8;">(indexPath).</span><span style="color:#B392F0;">getPickerCtrl</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;dropDownBox&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(optionData);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> optionData </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;key&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;yyyy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为整列赋选项</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getArrayCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getColByName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;colname&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getPickerCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dropDownBox&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setOptions</span><span style="color:#24292E;">(optionData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为某行赋选项</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getArrayCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getRowAtIndexPath</span><span style="color:#24292E;">(indexPath).</span><span style="color:#6F42C1;">getPickerCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dropDownBox&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setOptions</span><span style="color:#24292E;">(optionData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[狗头] 如果上面的不行，或者试一下去掉s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为整列赋选项</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getArrayCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getColByName</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;colname&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getPickerCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dropDownBox&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(optionData);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 为某行赋选项</span></span>
<span class="line"><span style="color:#24292E;">Page.</span><span style="color:#6F42C1;">getArrayCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getRowAtIndexPath</span><span style="color:#24292E;">(indexPath).</span><span style="color:#6F42C1;">getPickerCtrl</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;dropDownBox&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(optionData);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,13),e=[o];function t(c,r,E,y,u,i){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{F as __pageData,b as default};
