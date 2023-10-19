import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"应用节点显示消息推送","description":"","frontmatter":{"title":"应用节点显示消息推送","date":"2020-05-11T13:53:12.000Z"},"headers":[],"relativePath":"doc/wpdoc/应用节点显示消息推送.md","filePath":"doc/wpdoc/应用节点显示消息推送.md"}'),l={name:"doc/wpdoc/应用节点显示消息推送.md"},o=p(`<p>此功能需要更新web端至web V9.2.0及以上、APP端至9.0.0rc9及以上、messageserv（消息服务）至2.7.0及以上</p><h1 id="应用节点显示消息推送" tabindex="-1">应用节点显示消息推送 <a class="header-anchor" href="#应用节点显示消息推送" aria-label="Permalink to &quot;应用节点显示消息推送&quot;">​</a></h1><p>目前消息推送的红点提示统一显示在tab页签下的消息模块，现需要支持一种新模式：收到消息推送后，应用模块的某节点图标上显示红点（或其他类型角标）。</p><p>UI图例：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BA%94%E7%94%A8%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81%EF%BC%88%E4%B8%BB%E5%8A%A8%EF%BC%89.jpg" alt=""></p><h4 id="实现方式-消息内容的基本数据格式不变-通过-msgtype-字段和新增的-pagecode-字段决定红点显示位置。" tabindex="-1">实现方式：消息内容的基本数据格式不变，通过&quot;msgtype&quot;字段和新增的&quot;pagecode&quot;字段决定红点显示位置。 <a class="header-anchor" href="#实现方式-消息内容的基本数据格式不变-通过-msgtype-字段和新增的-pagecode-字段决定红点显示位置。" aria-label="Permalink to &quot;实现方式：消息内容的基本数据格式不变，通过&quot;msgtype&quot;字段和新增的&quot;pagecode&quot;字段决定红点显示位置。&quot;">​</a></h4><p>发送通知内容</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//android发送通知内容</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;alert&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//显示的摘要内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//显示的title</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;extras&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;msgid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//额外字段,消息id</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;msgtype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//额外字段,消息类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">//iOS发送通知内容</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;alert&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//显示的内容</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#6A737D;">//显示的title</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;extras&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;msgid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//额外字段,消息id</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;msgtype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//额外字段,消息类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;badge&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">//角标</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sound&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#6A737D;">//声音</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//android发送通知内容</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;alert&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//显示的摘要内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//显示的title</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;extras&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;msgid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//额外字段,消息id</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;msgtype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//额外字段,消息类型</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//iOS发送通知内容</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;alert&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//显示的内容</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#6A737D;">//显示的title</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;extras&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;msgid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//额外字段,消息id</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;msgtype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//额外字段,消息类型</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;badge&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">//角标</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sound&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#6A737D;">//声音</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>getMsgTicket接口返回的消息详情</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;msgid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//消息id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;msgtitle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//消息的标题</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;msgsummary&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//消息的摘要，推送消息时用</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;msgtype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//消息类型，组合编号，1001：1审批，001通知，002提醒</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sender&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//发送人code</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;sendername&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//发送人姓名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;senddatetime&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//发送时间，13位时间戳</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;bizid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//业务id</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dispalytemplate&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//消息显示模板，组合编号，10011，1：默认显示标题；001：消息中间显示方式，001只有文字；1：能否查看详情，0不能，1能</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;jsondata&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//消息附带的内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*{</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;text&quot;:&quot;&quot;,//消息中间显示的文字，需要与消息模板结合使用</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;image&quot;:[{//消息中间显示的图片，需要与消息模板结合使用</span></span>
<span class="line"><span style="color:#6A737D;">                   source:&quot;&quot;,//图片的名字，xxxx.png/jpg</span></span>
<span class="line"><span style="color:#6A737D;">                   datetime:&quot;&quot;//图片发送日期，13位时间戳</span></span>
<span class="line"><span style="color:#6A737D;">                 }],</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;param&quot;:{},//消息查看详情时传递的参数</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;pagecode&quot;:&quot;&quot;//新增字段，表单code，对应应用模块节点配置的表单code</span></span>
<span class="line"><span style="color:#6A737D;">       }*/</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;msgid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//消息id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;msgtitle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//消息的标题</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;msgsummary&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//消息的摘要，推送消息时用</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;msgtype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//消息类型，组合编号，1001：1审批，001通知，002提醒</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sender&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//发送人code</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;sendername&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//发送人姓名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;senddatetime&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//发送时间，13位时间戳</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;bizid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//业务id</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dispalytemplate&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//消息显示模板，组合编号，10011，1：默认显示标题；001：消息中间显示方式，001只有文字；1：能否查看详情，0不能，1能</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;jsondata&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//消息附带的内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*{</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;text&quot;:&quot;&quot;,//消息中间显示的文字，需要与消息模板结合使用</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;image&quot;:[{//消息中间显示的图片，需要与消息模板结合使用</span></span>
<span class="line"><span style="color:#6A737D;">                   source:&quot;&quot;,//图片的名字，xxxx.png/jpg</span></span>
<span class="line"><span style="color:#6A737D;">                   datetime:&quot;&quot;//图片发送日期，13位时间戳</span></span>
<span class="line"><span style="color:#6A737D;">                 }],</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;param&quot;:{},//消息查看详情时传递的参数</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;pagecode&quot;:&quot;&quot;//新增字段，表单code，对应应用模块节点配置的表单code</span></span>
<span class="line"><span style="color:#6A737D;">       }*/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="msgtype" tabindex="-1">msgtype <a class="header-anchor" href="#msgtype" aria-label="Permalink to &quot;msgtype&quot;">​</a></h2><p>消息类型，组合编号</p><p>目前显示在消息模块的消息类型有：</p><ol><li>工作消息：1001、1002审批消息，3001日报，3002周报，3003月报</li><li>资讯消息：4001通知公告</li><li>终端表现智能推：5001-5004不同维度终端表现智能推送</li></ol><p>现增加一种新的消息类型6001，当收到此类型的消息推送时，消息显示在应用界面，如对应节点（根据pagecode字段）有红点提示。</p><h2 id="pagecode" tabindex="-1">pagecode <a class="header-anchor" href="#pagecode" aria-label="Permalink to &quot;pagecode&quot;">​</a></h2><p>新增字段，表单code</p><p>在&quot;extras&quot;或&quot;jsondata&quot;附带内容中增加一个&quot;pagecode&quot;字段，对应应用模块节点配置的表单code。</p><p>当pagecode不为空时，接收到消息推送后，与pagecode相同的应用节点会有红点提示。</p>`,19),e=[o];function t(c,r,E,y,u,i){return n(),a("div",null,e)}const b=s(l,[["render",t]]);export{d as __pageData,b as default};
