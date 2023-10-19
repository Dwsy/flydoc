import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"workflow工作流","description":"","frontmatter":{"title":"workflow工作流","date":"2020-07-03T17:57:56.000Z"},"headers":[],"relativePath":"doc/wpdoc/workflow工作流.md","filePath":"doc/wpdoc/workflow工作流.md"}'),e={name:"doc/wpdoc/workflow工作流.md"},p=l(`<h1 id="_3-4-工作流" tabindex="-1">3.4. 工作流 <a class="header-anchor" href="#_3-4-工作流" aria-label="Permalink to &quot;3.4. 工作流&quot;">​</a></h1><p>flycode中可调用工作流服务，操作预设流程的发起和提交，获取当前流转的流程信息。</p><h2 id="_3-4-1-当前流程信息" tabindex="-1">3.4.1. 当前流程信息 <a class="header-anchor" href="#_3-4-1-当前流程信息" aria-label="Permalink to &quot;3.4.1. 当前流程信息&quot;">​</a></h2><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 加载模块</span></span>
<span class="line"><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;workflow&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 加载模块</span></span>
<span class="line"><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;workflow&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* 当前流程信息</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WorkflowInfo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">* 当前流程信息</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WorkflowInfo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>实例化 WorkflowInfo 即可获得当前的流程相关信息</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// WorkflowInfo 数据结构</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;af_processinstanceid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                 </span><span style="color:#6A737D;">// 流程实例Id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;af_processinstancename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,               </span><span style="color:#6A737D;">// 流程实例名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;af_processdefineid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                   </span><span style="color:#6A737D;">// 流程定义Id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;af_processdefinename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                 </span><span style="color:#6A737D;">// 流程定义名称</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;af_applyusercode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                     </span><span style="color:#6A737D;">// 流程发起人编码</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;af_hasend&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                            </span><span style="color:#6A737D;">// 流程状态，是否已结束</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;prestate&quot;</span><span style="color:#E1E4E8;">: {                               </span><span style="color:#6A737D;">// 流程提交前参数</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;af_taskname&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                      </span><span style="color:#6A737D;">// 用户任务名称</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;af_choicename&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                    </span><span style="color:#6A737D;">// 审批选项名称</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;af_comments&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">                       </span><span style="color:#6A737D;">// 审批意见</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;forwardstate&quot;</span><span style="color:#E1E4E8;">: [                           </span><span style="color:#6A737D;">// 后续流程节点信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;af_taskid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                    </span><span style="color:#6A737D;">// 用户任务实例Id</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;af_taskkey&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                   </span><span style="color:#6A737D;">// 用户任务Key 【忽略】</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;af_taskname&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                  </span><span style="color:#6A737D;">// 用户任务名称</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&quot;af_handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 处理人</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// WorkflowInfo 数据结构</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;af_processinstanceid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                 </span><span style="color:#6A737D;">// 流程实例Id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;af_processinstancename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,               </span><span style="color:#6A737D;">// 流程实例名称</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;af_processdefineid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                   </span><span style="color:#6A737D;">// 流程定义Id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;af_processdefinename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                 </span><span style="color:#6A737D;">// 流程定义名称</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;af_applyusercode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                     </span><span style="color:#6A737D;">// 流程发起人编码</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;af_hasend&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                            </span><span style="color:#6A737D;">// 流程状态，是否已结束</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;prestate&quot;</span><span style="color:#24292E;">: {                               </span><span style="color:#6A737D;">// 流程提交前参数</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;af_taskname&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                      </span><span style="color:#6A737D;">// 用户任务名称</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;af_choicename&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                    </span><span style="color:#6A737D;">// 审批选项名称</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;af_comments&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">                       </span><span style="color:#6A737D;">// 审批意见</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;forwardstate&quot;</span><span style="color:#24292E;">: [                           </span><span style="color:#6A737D;">// 后续流程节点信息</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;af_taskid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                    </span><span style="color:#6A737D;">// 用户任务实例Id</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;af_taskkey&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                   </span><span style="color:#6A737D;">// 用户任务Key 【忽略】</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;af_taskname&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                  </span><span style="color:#6A737D;">// 用户任务名称</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&quot;af_handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 处理人</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><hr><p><strong>例</strong>: 获取当前的流程定义名称，当前审批意见，并\b记录日志</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;workflow&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> wf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WorkflowInfo</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot; 流程-&gt; 名称:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> wf.af_processdefinename </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot; 审批意见:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> wf.prestate.af_comments</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;workflow&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> wf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WorkflowInfo</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot; 流程-&gt; 名称:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> wf.af_processdefinename </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot; 审批意见:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> wf.prestate.af_comments</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-4-2-流程发起" tabindex="-1">3.4.2. 流程发起 <a class="header-anchor" href="#_3-4-2-流程发起" aria-label="Permalink to &quot;3.4.2. 流程发起&quot;">​</a></h2><p><strong>API</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">load(&#39;workflow&#39;);   // 加载流程模块</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate();  // 发起流程,默认取当前成员作为发起人</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate(&#39;&lt;发起人&gt;&#39;) // 发起流程重载的方法，传递的参数为发起人</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate(&lt;流程对象自定义&gt;) // 发起流程,默认取当前成员作为发起人。需要自定义流程对象信息的，可加入</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate(&#39;&lt;发起人&gt;&#39;, &lt;流程对象自定义&gt;) // 发起人和流程对象都可自定义</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">load(&#39;workflow&#39;);   // 加载流程模块</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate();  // 发起流程,默认取当前成员作为发起人</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate(&#39;&lt;发起人&gt;&#39;) // 发起流程重载的方法，传递的参数为发起人</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate(&lt;流程对象自定义&gt;) // 发起流程,默认取当前成员作为发起人。需要自定义流程对象信息的，可加入</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate(&#39;&lt;发起人&gt;&#39;, &lt;流程对象自定义&gt;) // 发起人和流程对象都可自定义</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><p><strong>示例</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">load(&#39;workflow&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 保存请假单对象</span></span>
<span class="line"><span style="color:#e1e4e8;">var leave = IN.kx_leave;</span></span>
<span class="line"><span style="color:#e1e4e8;">var startDate = new Date(leave.starttime);</span></span>
<span class="line"><span style="color:#e1e4e8;">var endDate = new Date(leave.endtime);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">leave.applydate = NOW.time();</span></span>
<span class="line"><span style="color:#e1e4e8;">leave.approvalstatus = &#39;待审批&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">DB.insert(leave);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 发起流程</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 发起流程(如:订单录入员)</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate(IN.kx_order.inputer);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 流程对象自定义(修改流程实例名称)</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.allocate({&#39;af_processinstancename&#39;:&#39;自定义实例名&#39;});</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 更新审批状态</span></span>
<span class="line"><span style="color:#e1e4e8;">IN.kx_leave.approvalstatus = &#39;草稿&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">DB.update(IN.kx_leave);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">load(&#39;workflow&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 保存请假单对象</span></span>
<span class="line"><span style="color:#24292e;">var leave = IN.kx_leave;</span></span>
<span class="line"><span style="color:#24292e;">var startDate = new Date(leave.starttime);</span></span>
<span class="line"><span style="color:#24292e;">var endDate = new Date(leave.endtime);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">leave.applydate = NOW.time();</span></span>
<span class="line"><span style="color:#24292e;">leave.approvalstatus = &#39;待审批&#39;;</span></span>
<span class="line"><span style="color:#24292e;">DB.insert(leave);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 发起流程</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 发起流程(如:订单录入员)</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate(IN.kx_order.inputer);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 流程对象自定义(修改流程实例名称)</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.allocate({&#39;af_processinstancename&#39;:&#39;自定义实例名&#39;});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 更新审批状态</span></span>
<span class="line"><span style="color:#24292e;">IN.kx_leave.approvalstatus = &#39;草稿&#39;;</span></span>
<span class="line"><span style="color:#24292e;">DB.update(IN.kx_leave);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><hr><h2 id="_3-4-3-流程提交" tabindex="-1">3.4.3. 流程提交 <a class="header-anchor" href="#_3-4-3-流程提交" aria-label="Permalink to &quot;3.4.3. 流程提交&quot;">​</a></h2><p><strong>API</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">load(&#39;workflow&#39;);   // 加载流程模块</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.submit();  // 流程提交</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.submit(&lt;自定义对象&gt;); // 用于传递复杂逻辑的处理</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">load(&#39;workflow&#39;);   // 加载流程模块</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.submit();  // 流程提交</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.submit(&lt;自定义对象&gt;); // 用于传递复杂逻辑的处理</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><p><strong>示例</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">load(&#39;workflow&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 保存请假单对象</span></span>
<span class="line"><span style="color:#e1e4e8;">var leave = IN.kx_leave;</span></span>
<span class="line"><span style="color:#e1e4e8;">var startDate = new Date(leave.starttime);</span></span>
<span class="line"><span style="color:#e1e4e8;">var endDate = new Date(leave.endtime);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 保存对象</span></span>
<span class="line"><span style="color:#e1e4e8;">DB.update(IN.kx_leave);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.submit();  // 提交流程</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.submit({&#39;params&#39;:{&#39;iswork&#39;:&#39;true&#39;}});  // 提交流程，并传递自定义信息。本例假设传递一个是否工作的参数给流程引擎使用</span></span>
<span class="line"><span style="color:#e1e4e8;">// 更新审批状态</span></span>
<span class="line"><span style="color:#e1e4e8;">if (WF.choice == &#39;终止&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    IN.kx_leave.approvalstatus = &#39;已中止&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">} else if (WF.choice == &#39;退回&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    IN.kx_leave.approvalstatus = &#39;已驳回&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">} else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (WF.taskname == &#39;文员(行政)核对&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (WF.choice == &#39;同意&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            IN.kx_leave.approvalstatus = &#39;审批通过&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (WF.choice == &#39;不同意&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            IN.kx_leave.approvalstatus = &#39;审批不通过&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        IN.kx_leave.approvalstatus = &#39;审批中&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">DB.update(IN.kx_leave);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">load(&#39;workflow&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 保存请假单对象</span></span>
<span class="line"><span style="color:#24292e;">var leave = IN.kx_leave;</span></span>
<span class="line"><span style="color:#24292e;">var startDate = new Date(leave.starttime);</span></span>
<span class="line"><span style="color:#24292e;">var endDate = new Date(leave.endtime);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 保存对象</span></span>
<span class="line"><span style="color:#24292e;">DB.update(IN.kx_leave);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.submit();  // 提交流程</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.submit({&#39;params&#39;:{&#39;iswork&#39;:&#39;true&#39;}});  // 提交流程，并传递自定义信息。本例假设传递一个是否工作的参数给流程引擎使用</span></span>
<span class="line"><span style="color:#24292e;">// 更新审批状态</span></span>
<span class="line"><span style="color:#24292e;">if (WF.choice == &#39;终止&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    IN.kx_leave.approvalstatus = &#39;已中止&#39;;</span></span>
<span class="line"><span style="color:#24292e;">} else if (WF.choice == &#39;退回&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    IN.kx_leave.approvalstatus = &#39;已驳回&#39;;</span></span>
<span class="line"><span style="color:#24292e;">} else {</span></span>
<span class="line"><span style="color:#24292e;">    if (WF.taskname == &#39;文员(行政)核对&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">        if (WF.choice == &#39;同意&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">            IN.kx_leave.approvalstatus = &#39;审批通过&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        } else if (WF.choice == &#39;不同意&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">            IN.kx_leave.approvalstatus = &#39;审批不通过&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        IN.kx_leave.approvalstatus = &#39;审批中&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">DB.update(IN.kx_leave);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><hr><h2 id="_3-4-4-流程外部终止" tabindex="-1">3.4.4. 流程外部终止 <a class="header-anchor" href="#_3-4-4-流程外部终止" aria-label="Permalink to &quot;3.4.4. 流程外部终止&quot;">​</a></h2><p><strong>API</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">load(&#39;workflow&#39;);   // 加载流程模块</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.terminal(&#39;&lt;业务Id&gt;&#39;, &#39;&lt;流程定义Key&gt;&#39;, &#39;&lt;终止原因&gt;&#39;);  // 终止流程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">load(&#39;workflow&#39;);   // 加载流程模块</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.terminal(&#39;&lt;业务Id&gt;&#39;, &#39;&lt;流程定义Key&gt;&#39;, &#39;&lt;终止原因&gt;&#39;);  // 终止流程</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p><strong>示例</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">load(&#39;workflow&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">var order = IN.order;</span></span>
<span class="line"><span style="color:#e1e4e8;">var orderid = leave.orderid;</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKFLOW.terminal(orderid, null, &#39;订单废弃，自动终止&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">load(&#39;workflow&#39;);</span></span>
<span class="line"><span style="color:#24292e;">var order = IN.order;</span></span>
<span class="line"><span style="color:#24292e;">var orderid = leave.orderid;</span></span>
<span class="line"><span style="color:#24292e;">WORKFLOW.terminal(orderid, null, &#39;订单废弃，自动终止&#39;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr>`,32),o=[p];function c(r,t,i,y,u,E){return n(),a("div",null,o)}const m=s(e,[["render",c]]);export{d as __pageData,m as default};
