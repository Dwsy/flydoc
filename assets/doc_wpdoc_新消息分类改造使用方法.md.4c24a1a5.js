import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.aac09c5f.js";const B=JSON.parse('{"title":"新消息分类改造使用方法","description":"","frontmatter":{"title":"新消息分类改造使用方法","date":"2020-08-10T16:26:05.000Z"},"headers":[],"relativePath":"doc/wpdoc/新消息分类改造使用方法.md","filePath":"doc/wpdoc/新消息分类改造使用方法.md"}'),p={name:"doc/wpdoc/新消息分类改造使用方法.md"},l=o(`<p>此功能需要更新web端至web V9.2.0及以上、APP端至9.0.0rc9及以上、messageserv（消息服务）至2.7.0及以上</p><h1 id="新消息分类改造使用方法" tabindex="-1">新消息分类改造使用方法 <a class="header-anchor" href="#新消息分类改造使用方法" aria-label="Permalink to &quot;新消息分类改造使用方法&quot;">​</a></h1><p>更新的UI、实体、业务行为：<a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%96%B0%E6%B6%88%E6%81%AFUI.zip" title="[点击下载：dist.zip压缩包" target="_blank" rel="noreferrer">点击获取</a></p><h2 id="表单配置" tabindex="-1">表单配置 <a class="header-anchor" href="#表单配置" aria-label="Permalink to &quot;表单配置&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%951.jpg" alt="image-20200805093906759"></p><h2 id="离线数据配置" tabindex="-1">离线数据配置 <a class="header-anchor" href="#离线数据配置" aria-label="Permalink to &quot;离线数据配置&quot;">​</a></h2><p>&quot;消息分类&quot;数据定义了消息如何分组显示(即分类显示标准的出厂设置)</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%952.jpg" alt="image-20200805094731611"></p><p>对应的离线下载逻辑为：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%953.jpg" alt="image-20200805094836439"></p><h2 id="导航与权限配置" tabindex="-1">导航与权限配置 <a class="header-anchor" href="#导航与权限配置" aria-label="Permalink to &quot;导航与权限配置&quot;">​</a></h2><ol><li>如果只需要使用新消息表单，不需要包含通讯录这个tab，按照常规方式在&quot;app菜单&quot;入口菜单处新增表单节点即可</li><li>如果需要像旧消息那样，需要显示成&quot;消息+通讯录&quot;两个tab的形式，则需要新建一个key固定为&quot;messagecontacts&quot;的应用导航，该应用导航下新增两个表单节点，分别对应消息和通讯录，其中新/旧消息表单可以选择其中一个任意挂接，对应新/旧消息模式</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%954.jpg" alt="image-20200805095310690"></p><ol><li>功能权限配置注意关联上述相关表单和&quot;消息分类&quot;离线对象</li></ol><h2 id="后台flycode配置" tabindex="-1">后台flycode配置 <a class="header-anchor" href="#后台flycode配置" aria-label="Permalink to &quot;后台flycode配置&quot;">​</a></h2><p>getMsgTicket接口返回的消息详情数据格式如下：</p><p>对于新消息，如果需要按子类分类，增加的字段为jsondata内容里的msgsubtype(子类标识，非空必填)、msgsubtitle(子类标题)、msgsubicon(子类图标，与icon控件资源相同)</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
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
<span class="line"><span style="color:#6A737D;">             &quot;msgsubtype&quot;:&quot;100101&quot;,  //新消息消息子类类型</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;msgsubtitle&quot;:&quot;请假审批&quot;，//新消息消息子类标题</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;msgsubicon&quot;:&quot;message&quot;, //新消息消息子类图标</span></span>
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
<span class="line"><span style="color:#6A737D;">             &quot;msgsubtype&quot;:&quot;100101&quot;,  //新消息消息子类类型</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;msgsubtitle&quot;:&quot;请假审批&quot;，//新消息消息子类标题</span></span>
<span class="line"><span style="color:#6A737D;">             &quot;msgsubicon&quot;:&quot;message&quot;, //新消息消息子类图标</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;text&quot;:&quot;&quot;,//消息中间显示的文字，需要与消息模板结合使用</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;image&quot;:[{//消息中间显示的图片，需要与消息模板结合使用</span></span>
<span class="line"><span style="color:#6A737D;">                   source:&quot;&quot;,//图片的名字，xxxx.png/jpg</span></span>
<span class="line"><span style="color:#6A737D;">                   datetime:&quot;&quot;//图片发送日期，13位时间戳</span></span>
<span class="line"><span style="color:#6A737D;">                 }],</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;param&quot;:{},//消息查看详情时传递的参数</span></span>
<span class="line"><span style="color:#6A737D;">         &quot;pagecode&quot;:&quot;&quot;//新增字段，表单code，对应应用模块节点配置的表单code</span></span>
<span class="line"><span style="color:#6A737D;">       }*/</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ol><li><p>普通的非流程审批消息，以&quot;资讯消息&quot;为例，如果需要资讯消息按照不同消息类型子类分类显示，如&quot;放假通知&quot;、&quot;热点新闻&quot;等，代替旧消息全部放在资讯消息一个大模块内，则需要：</p><p>在资讯消息发推送消息的接口，消息体jsondata内容增加msgsubtype、msgsubtitle、msgsubicon设置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%955.jpg" alt="image-20200805100522033"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%956.jpg" alt="image-20200805100438229"></p></li><li><p>特殊的流程审批消息，以审批管理中的&quot;请假单&quot;为例</p><p>因为对于流程审批消息，按照旧的消息发送写法，后台会特殊识别WorkflowInfo对象类型然后做特殊处理，所以对于这类审批流消息如果也需要按照子类分类显示，如&quot;请假单&quot;、&quot;出差申请&quot;等，则需要比资讯消息多一步处理，即替换WorkflowInfo类型消息体，改造成普通的消息体</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%957.jpg" alt="image-20200805102258513"></p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%958.jpg" alt="image-20200805102624088"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%96%B0%E6%B6%88%E6%81%AF%E5%88%86%E7%B1%BB%E6%94%B9%E9%80%A0%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%959.jpg" alt="image-20200805102652827"></p>`,21),t=[l];function e(c,r,E,u,i,q){return a(),n("div",null,t)}const m=s(p,[["render",e]]);export{B as __pageData,m as default};
