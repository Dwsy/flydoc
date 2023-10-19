import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"Preprocessor","description":"","frontmatter":{"title":"Preprocessor","date":"2020-05-19T19:20:26.000Z"},"headers":[],"relativePath":"doc/wpdoc/Preprocessor.md","filePath":"doc/wpdoc/Preprocessor.md"}'),l={name:"doc/wpdoc/Preprocessor.md"},o=p(`<h2 id="preprocessor" tabindex="-1">Preprocessor <a class="header-anchor" href="#preprocessor" aria-label="Permalink to &quot;Preprocessor&quot;">​</a></h2><p>表单预处理，指在表单初始化之后，执行的一系列对表单和控件初始状态进行设置的步骤</p><p>这部分由于在实际使用中并未用起来，所以在将来的版本中将会废弃掉，所以不要在此节点配置内容</p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;presenter&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;initial&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;preprocessor&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;default&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;script&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Ctrl.setProperty(&#39;somectrl1&#39;, hidden, true)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;addition&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;流程规则1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;用于发起请假申请时使用&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;script&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;if (Page.getValue(&#39;__flowstep&#39;) == &#39;123456&#39;) { Ctrl.setProperty(&#39;somectrl2&#39;, hidden, true) }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;流程规则2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;desc&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;用于审批请假申请时使用&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;script&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;if (Page.getValue(&#39;__flowstep&#39;) == &#39;654321&#39;) { Ctrl.setProperty(&#39;somectrl3&#39;, hidden, true) }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;interface&quot;</span><span style="color:#E1E4E8;">: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;handlers&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;presenter&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;initial&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;preprocessor&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;default&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;script&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Ctrl.setProperty(&#39;somectrl1&#39;, hidden, true)&quot;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;addition&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;流程规则1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;用于发起请假申请时使用&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;script&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;if (Page.getValue(&#39;__flowstep&#39;) == &#39;123456&#39;) { Ctrl.setProperty(&#39;somectrl2&#39;, hidden, true) }&quot;</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;流程规则2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;desc&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;用于审批请假申请时使用&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;script&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;if (Page.getValue(&#39;__flowstep&#39;) == &#39;654321&#39;) { Ctrl.setProperty(&#39;somectrl3&#39;, hidden, true) }&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;interface&quot;</span><span style="color:#24292E;">: [],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;handlers&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><code>preprocessor</code> 作为 <code>presenter</code> 的一部分，在协议和实现上都紧跟在 <code>initial</code> 之后。</p><p>目前预处理分为两大部分</p><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h3><p>默认预处理，指所在表单默认会执行的预处理操作。</p><ul><li><p>script</p><p>默认预处理所执行的flycode脚本</p></li></ul><h3 id="addition" tabindex="-1">addition <a class="header-anchor" href="#addition" aria-label="Permalink to &quot;addition&quot;">​</a></h3><p>这部分协议暂不支持</p><p>附加预处理，通常这部分预处理操作不在表单配置的时候配置，而是在其他场景关联了该表单，并且需要对表单进行场景相关的特殊控制时才设置。</p><p>例如配置流程时，需要根据流程的步骤和状态，对UI进行部分控制。</p><p>附加预处理可以包含多个处理块，但一次最多只会执行其中的一个。</p><ul><li><p>title</p><p>该规则的名称</p></li><li><p>desc</p><p>该规则的描述</p></li><li><p>script</p><p>处理块对应执行的flycode脚本</p><ol><li>附加预处理可以有多个处理操作，会依次执行，直到有处理返回 <code>true</code> ，或者执行完所有的附加操作后结束</li><li>附加预处理会在默认预处理执行完毕之后才执行</li></ol></li></ul>`,16),e=[o];function t(r,c,E,i,u,y){return n(),a("div",null,e)}const b=s(l,[["render",t]]);export{d as __pageData,b as default};
