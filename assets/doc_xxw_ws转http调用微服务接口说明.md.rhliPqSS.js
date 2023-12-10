import{_ as s,o as i,c as a,R as n}from"./chunks/framework.S1SDgkSw.js";const t="/assets/WS函数名称.SSKlpOjJ.png",o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"doc/xxw/ws转http调用微服务接口说明.md","filePath":"doc/xxw/ws转http调用微服务接口说明.md"}'),e={name:"doc/xxw/ws转http调用微服务接口说明.md"},p=n(`<h2 id="新希望-ws-接口转换-http-调用说明" tabindex="-1">新希望 Ws 接口转换 http 调用说明 <a class="header-anchor" href="#新希望-ws-接口转换-http-调用说明" aria-label="Permalink to &quot;新希望 Ws 接口转换 http 调用说明&quot;">​</a></h2><p>请求体格式说明</p><div class="language-typescript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reqJson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//WebService调用地址</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//函数名：urn: + 接口函数 如urn:ZSD_MATERAIL_DATA_RFC</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  namespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//默认：urn:sap-com:document:sap:rfc:functions</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  username</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// shisiping</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 123456</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对象形式请求体</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  timeOut</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //超时时间（毫秒）非必填默认300秒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="`+t+`" alt="Alt text"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Excel 表格中的接口地址为新希望内网环境 需要替换为<code>119.6.204.184:50100</code></p></div><p>调用示例</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reqJson </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;urn:ZSD_MATERAIL_DATA_RFC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  username: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;shisiping&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  password: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Abcd1234&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  namespace: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;urn:sap-com:document:sap:rfc:functions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IT_ERSDA: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SIGN: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        OPTION: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        LOW: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20221001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HIGH: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20221031&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IT_LAEDA: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SIGN: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        OPTION: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        LOW: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20221001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HIGH: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;20221031&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IT_MTART: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SIGN: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        OPTION: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EQ&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        LOW: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Z005&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HIGH: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    IT_VKORG: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      item: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SIGN: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        OPTION: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EQ&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        LOW: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4511&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HIGH: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ip_port </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;119.6.204.184:50100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">reqJson.url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;http:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ip_port </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">XISOAPAdapter</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MessageServlet?senderParty=&amp;senderService=BS_DPBP&amp;receiverParty=&amp;receiverService=&amp;interface=SI_MaterailData_Out_Syn&amp;interfaceNamespace=urn:newhopedairy.cn:dpbp:sd:oubound&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;microservice.wstohttp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, reqJson);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FLY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(temp);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>成功响应 <code>&quot;status&quot;: &quot;Success&quot;</code></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;调用成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ns0:ZSD_MATERAIL_DATA_RFC.Response&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;xmlns:ns0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;urn:sap-com:document:sap:rfc:functions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ET_BOM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;ET_MAKTX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;MATNR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;000000000050000822&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;MAKTX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;新希望(蝶泉)邓川速溶全脂甜奶粉20g*20*20&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;PRDHA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;MTART&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Z005&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;MEINS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;EA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;MSTAE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">            ......省略</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>失败响应 <code>&quot;status&quot;: &quot;Fault&quot;</code></p></div><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fault&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;faultcode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SOAP:Server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;faultstring&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Server Error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;detail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;s:SystemError&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;xmlns:s&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://sap.com/xi/WebService/xi2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;context&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;XIAdapter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ADAPTER.JAVA_EXCEPTION&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">com.sap.engine.interfaces.messaging.api.exception.MessagingException: com.sap.aii.adapter.xi.routing.RoutingException: InterfaceDetermination did not yield any actual interface</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.aii.adapter.soap.web.SOAPHandler.processSOAPtoXMB(SOAPHandler.java:746)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.aii.adapter.soap.web.MessageServlet.doPost(MessageServlet.java:530)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at javax.servlet.http.HttpServlet.service(HttpServlet.java:754)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at javax.servlet.http.HttpServlet.service(HttpServlet.java:847)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.server.runtime.FilterChainImpl.runServlet(FilterChainImpl.java:202)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.server.runtime.FilterChainImpl.doFilter(FilterChainImpl.java:103)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.server.servlet.AuthenticationFilter.doFilter(AuthenticationFilter.java:126)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.server.runtime.FilterChainImpl.doFilter(FilterChainImpl.java:79)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.server.HttpHandlerImpl.runServlet(HttpHandlerImpl.java:441)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.server.HttpHandlerImpl.handleRequest(HttpHandlerImpl.java:210)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.server.RequestAnalizer.startServlet(RequestAnalizer.java:441)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.server.RequestAnalizer.startServlet(RequestAnalizer.java:430)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.filters.DSRWebContainerFilter.process(DSRWebContainerFilter.java:38)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.filters.ServletSelector.process(ServletSelector.java:81)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.servlets_jsp.filters.ApplicationSelector.process(ApplicationSelector.java:278)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.WebContainerInvoker.process(WebContainerInvoker.java:81)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.HostFilter.process(HostFilter.java:9)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.ResponseLogWriter.process(ResponseLogWriter.java:60)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.HostFilter.process(HostFilter.java:9)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.DefineHostFilter.process(DefineHostFilter.java:27)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.ServerFilter.process(ServerFilter.java:12)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.MonitoringFilter.process(MonitoringFilter.java:29)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.ServerFilter.process(ServerFilter.java:12)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.SessionSizeFilter.process(SessionSizeFilter.java:26)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.ServerFilter.process(ServerFilter.java:12)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.MemoryStatisticFilter.process(MemoryStatisticFilter.java:57)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.ServerFilter.process(ServerFilter.java:12)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.filters.DSRHttpFilter.process(DSRHttpFilter.java:43)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.ServerFilter.process(ServerFilter.java:12)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.chain.AbstractChain.process(AbstractChain.java:78)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.server.Processor.chainedRequest(Processor.java:475)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.server.Processor$FCAProcessorThread.process(Processor.java:269)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.services.httpserver.server.rcm.RequestProcessorThread.run(RequestProcessorThread.java:56)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.core.thread.execution.Executable.run(Executable.java:122)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.core.thread.execution.Executable.run(Executable.java:101)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">at com.sap.engine.core.thread.execution.CentralExecutor$SingleThread.run(CentralExecutor.java:328)</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,11),l=[p];function h(k,r,E,F,c,d){return i(),a("div",null,l)}const y=s(e,[["render",h]]);export{o as __pageData,y as default};
