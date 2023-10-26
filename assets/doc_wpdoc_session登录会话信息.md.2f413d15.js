import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.d084db19.js";const m=JSON.parse('{"title":"session登录会话信息","description":"","frontmatter":{"title":"session登录会话信息","date":"2020-07-03T17:54:44.000Z"},"headers":[],"relativePath":"doc/wpdoc/session登录会话信息.md","filePath":"doc/wpdoc/session登录会话信息.md"}'),l={name:"doc/wpdoc/session登录会话信息.md"},o=p(`<h1 id="_3-1-2-登录会话信息" tabindex="-1">3.1.2. 登录会话信息 <a class="header-anchor" href="#_3-1-2-登录会话信息" aria-label="Permalink to &quot;3.1.2. 登录会话信息&quot;">​</a></h1><p>SESSION对象为flycode内置对象，可获取到当前登录人的一些信息。</p><p><strong>API</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.orgcode;        </span><span style="color:#6A737D;">// 组织编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.usercode;       </span><span style="color:#6A737D;">// 用户编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.pscode;         </span><span style="color:#6A737D;">// 岗位编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.mbcode;         </span><span style="color:#6A737D;">// 成员编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.accode;         </span><span style="color:#6A737D;">// 账号编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.ctcode;         </span><span style="color:#6A737D;">// 客户端类型编码(1-web管理端、2-iPhone端、3-Android)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.rpscode;        </span><span style="color:#6A737D;">// 职位编码(模板岗位编码)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.orgdim;         </span><span style="color:#6A737D;">// 组织维度Id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.codepath;       </span><span style="color:#6A737D;">// code编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.isleaforg;      </span><span style="color:#6A737D;">// 判断当前登录人是否是组织架构叶子节点的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.appcode;        </span><span style="color:#6A737D;">// 当前应用编码 (sales, distribution, promotion)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.appcodes : List</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">String</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">;    </span><span style="color:#6A737D;">// 当前用户可用应用编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.categorycode;   </span><span style="color:#6A737D;">// 岗位类别</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.subpdcodes;     </span><span style="color:#6A737D;">// 子产品编码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.orgcode;        </span><span style="color:#6A737D;">// 组织编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.usercode;       </span><span style="color:#6A737D;">// 用户编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.pscode;         </span><span style="color:#6A737D;">// 岗位编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.mbcode;         </span><span style="color:#6A737D;">// 成员编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.accode;         </span><span style="color:#6A737D;">// 账号编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.ctcode;         </span><span style="color:#6A737D;">// 客户端类型编码(1-web管理端、2-iPhone端、3-Android)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.rpscode;        </span><span style="color:#6A737D;">// 职位编码(模板岗位编码)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.orgdim;         </span><span style="color:#6A737D;">// 组织维度Id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.codepath;       </span><span style="color:#6A737D;">// code编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.isleaforg;      </span><span style="color:#6A737D;">// 判断当前登录人是否是组织架构叶子节点的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.appcode;        </span><span style="color:#6A737D;">// 当前应用编码 (sales, distribution, promotion)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.appcodes : List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">String</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">;    </span><span style="color:#6A737D;">// 当前用户可用应用编码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.categorycode;   </span><span style="color:#6A737D;">// 岗位类别</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.subpdcodes;     </span><span style="color:#6A737D;">// 子产品编码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">以下内容由颜潮盛 整理（</span><span style="color:#79B8FF;">202203</span><span style="color:#E1E4E8;">）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">--------------</span><span style="color:#E1E4E8;">web端</span></span>
<span class="line"><span style="color:#E1E4E8;">SESSION对象为flycode内置对象，可获取到当前登录⼈的⼀些信息。</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.orgcode;               </span><span style="color:#6A737D;">// 组织编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.usercode;             </span><span style="color:#6A737D;">// ⽤户编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.pscode;                 </span><span style="color:#6A737D;">// 岗位编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.mbcode;                 </span><span style="color:#6A737D;">// 成员编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.accode;                 </span><span style="color:#6A737D;">// 账号编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.ctcode;                 </span><span style="color:#6A737D;">// 客户端类型编码(1-web管理端、2-iPhone端、3-Android)</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.rpscode;               </span><span style="color:#6A737D;">// 职位编码(模板岗位编码)</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.orgdim;                 </span><span style="color:#6A737D;">// 组织维度Id</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.codepath;             </span><span style="color:#6A737D;">// code编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.isleaforg;           </span><span style="color:#6A737D;">// 判断当前登录⼈是否是组织架构叶⼦节点的</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.appcode;         </span><span style="color:#6A737D;">// 当前应⽤编码(sales,distribution, promotion)</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.appcodes : List</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">String</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">;       </span><span style="color:#6A737D;">// 当前⽤户可⽤应⽤编码</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.categorycode;      </span><span style="color:#6A737D;">// 岗位类别</span></span>
<span class="line"><span style="color:#79B8FF;">SESSION</span><span style="color:#E1E4E8;">.subpdcodes;         </span><span style="color:#6A737D;">// ⼦产品编码</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#F97583;">----------------------</span><span style="color:#E1E4E8;">app端</span></span>
<span class="line"><span style="color:#E1E4E8;">System</span></span>
<span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//获取用户信息</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().accountCode  </span><span style="color:#6A737D;">//账号编码</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().userinfoName </span><span style="color:#6A737D;">//用户名称</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().userinfoID </span><span style="color:#6A737D;">//用户id</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().tenantName </span><span style="color:#6A737D;">//企业名称 </span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().tenantCode </span><span style="color:#6A737D;">//企业编码</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().orgName </span><span style="color:#6A737D;">//组织名称</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().orgCode </span><span style="color:#6A737D;">//组织编码</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().positionID </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().positionName </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().mbCode </span><span style="color:#6A737D;">// 成员编码</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().refpositionID </span><span style="color:#6A737D;">//职位编码</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().appCode </span><span style="color:#6A737D;">//当前登录的应⽤编码</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().appCodes </span><span style="color:#6A737D;">//当前租户的应⽤列表</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().categoryCode </span><span style="color:#6A737D;">//当前的职位类别</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">user</span><span style="color:#E1E4E8;">().subpdCodes </span><span style="color:#6A737D;">//当前租户⼦产品列表</span></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//获取当前用户登录信息</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">().isOffline </span><span style="color:#6A737D;">//当前是否离线</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">().token </span><span style="color:#6A737D;">//当前⽤户登录的token</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">().httpAddress </span><span style="color:#6A737D;">// http请求url头</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">().versionName </span><span style="color:#6A737D;">//版本名称</span></span>
<span class="line"><span style="color:#E1E4E8;">System.</span><span style="color:#B392F0;">context</span><span style="color:#E1E4E8;">().versionCode </span><span style="color:#6A737D;">//版本号</span></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">uniqueid</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//获取⼀个的uniqueid</span></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">date</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//获取服务端当前时间</span></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">functionCodes</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//获取功能权限</span></span>
<span class="line"><span style="color:#79B8FF;">6.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">functionCheck</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;80998877734324&#39;</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">//功能权限检测</span></span>
<span class="line"><span style="color:#79B8FF;">7.</span><span style="color:#E1E4E8;"> System.</span><span style="color:#B392F0;">consloe</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;request  is OK&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//控制⽇志输出</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">以下内容由颜潮盛 整理（</span><span style="color:#005CC5;">202203</span><span style="color:#24292E;">）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">--------------</span><span style="color:#24292E;">web端</span></span>
<span class="line"><span style="color:#24292E;">SESSION对象为flycode内置对象，可获取到当前登录⼈的⼀些信息。</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.orgcode;               </span><span style="color:#6A737D;">// 组织编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.usercode;             </span><span style="color:#6A737D;">// ⽤户编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.pscode;                 </span><span style="color:#6A737D;">// 岗位编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.mbcode;                 </span><span style="color:#6A737D;">// 成员编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.accode;                 </span><span style="color:#6A737D;">// 账号编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.ctcode;                 </span><span style="color:#6A737D;">// 客户端类型编码(1-web管理端、2-iPhone端、3-Android)</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.rpscode;               </span><span style="color:#6A737D;">// 职位编码(模板岗位编码)</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.orgdim;                 </span><span style="color:#6A737D;">// 组织维度Id</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.codepath;             </span><span style="color:#6A737D;">// code编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.isleaforg;           </span><span style="color:#6A737D;">// 判断当前登录⼈是否是组织架构叶⼦节点的</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.appcode;         </span><span style="color:#6A737D;">// 当前应⽤编码(sales,distribution, promotion)</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.appcodes : List</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">String</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">;       </span><span style="color:#6A737D;">// 当前⽤户可⽤应⽤编码</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.categorycode;      </span><span style="color:#6A737D;">// 岗位类别</span></span>
<span class="line"><span style="color:#005CC5;">SESSION</span><span style="color:#24292E;">.subpdcodes;         </span><span style="color:#6A737D;">// ⼦产品编码</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#D73A49;">----------------------</span><span style="color:#24292E;">app端</span></span>
<span class="line"><span style="color:#24292E;">System</span></span>
<span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//获取用户信息</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().accountCode  </span><span style="color:#6A737D;">//账号编码</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().userinfoName </span><span style="color:#6A737D;">//用户名称</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().userinfoID </span><span style="color:#6A737D;">//用户id</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().tenantName </span><span style="color:#6A737D;">//企业名称 </span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().tenantCode </span><span style="color:#6A737D;">//企业编码</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().orgName </span><span style="color:#6A737D;">//组织名称</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().orgCode </span><span style="color:#6A737D;">//组织编码</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().positionID </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().positionName </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().mbCode </span><span style="color:#6A737D;">// 成员编码</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().refpositionID </span><span style="color:#6A737D;">//职位编码</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().appCode </span><span style="color:#6A737D;">//当前登录的应⽤编码</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().appCodes </span><span style="color:#6A737D;">//当前租户的应⽤列表</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().categoryCode </span><span style="color:#6A737D;">//当前的职位类别</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">user</span><span style="color:#24292E;">().subpdCodes </span><span style="color:#6A737D;">//当前租户⼦产品列表</span></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//获取当前用户登录信息</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">().isOffline </span><span style="color:#6A737D;">//当前是否离线</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">().token </span><span style="color:#6A737D;">//当前⽤户登录的token</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">().httpAddress </span><span style="color:#6A737D;">// http请求url头</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">().versionName </span><span style="color:#6A737D;">//版本名称</span></span>
<span class="line"><span style="color:#24292E;">System.</span><span style="color:#6F42C1;">context</span><span style="color:#24292E;">().versionCode </span><span style="color:#6A737D;">//版本号</span></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">uniqueid</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//获取⼀个的uniqueid</span></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">date</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//获取服务端当前时间</span></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">functionCodes</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//获取功能权限</span></span>
<span class="line"><span style="color:#005CC5;">6.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">functionCheck</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;80998877734324&#39;</span><span style="color:#24292E;">]) </span><span style="color:#6A737D;">//功能权限检测</span></span>
<span class="line"><span style="color:#005CC5;">7.</span><span style="color:#24292E;"> System.</span><span style="color:#6F42C1;">consloe</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;request  is OK&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//控制⽇志输出</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div>`,5),e=[o];function c(r,t,y,E,i,S){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
