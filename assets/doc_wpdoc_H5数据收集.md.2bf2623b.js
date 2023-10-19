import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.d084db19.js";const d=JSON.parse('{"title":"H5数据收集","description":"","frontmatter":{"title":"H5数据收集","date":"2021-08-24T11:45:55.000Z"},"headers":[],"relativePath":"doc/wpdoc/H5数据收集.md","filePath":"doc/wpdoc/H5数据收集.md"}'),p={name:"doc/wpdoc/H5数据收集.md"},l=e(`<h1 id="h5数据收集" tabindex="-1">H5数据收集 <a class="header-anchor" href="#h5数据收集" aria-label="Permalink to &quot;H5数据收集&quot;">​</a></h1><h2 id="业务背景" tabindex="-1">业务背景 <a class="header-anchor" href="#业务背景" aria-label="Permalink to &quot;业务背景&quot;">​</a></h2><p>​ 通过分享到微信的二维码，收集相关扫码人的基本信息；用于促销员登记等业务场景。</p><h3 id="一、问题存在痛点" tabindex="-1">一、问题存在痛点 <a class="header-anchor" href="#一、问题存在痛点" aria-label="Permalink to &quot;一、问题存在痛点&quot;">​</a></h3><p>1、企业实际业务中，比如需要招募促销人员，需要促销人员填写自己的个人信息，正常流程需要被收集人提供相关信息后，收集人再手动录入，然后做筛选；操作流程较常，而且容易出错</p><h3 id="二、二维码收集信息的价值" tabindex="-1">二、二维码收集信息的价值 <a class="header-anchor" href="#二、二维码收集信息的价值" aria-label="Permalink to &quot;二、二维码收集信息的价值&quot;">​</a></h3><p>1、使用者可通过二维码分享的方式，将信息收集二维码分享到被收集人微信，提高工作效率。</p><p>2、减少信息收集的操作流程、节约时间、避免过程中出错。</p><h3 id="三、信息收集的业务场景" tabindex="-1">三、信息收集的业务场景 <a class="header-anchor" href="#三、信息收集的业务场景" aria-label="Permalink to &quot;三、信息收集的业务场景&quot;">​</a></h3><p>1、张三分享二维码给报明参与促销员招募的李四，李四再微信上传后，张三可直接确认改人员的个人资料。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>​ 通过微信H5页面功能，上传数据到相关结构，写入数据库，完成数据采集。</p><h3 id="一、自动获取功能-使用具体操作步骤" tabindex="-1">一、自动获取功能，使用具体操作步骤 <a class="header-anchor" href="#一、自动获取功能-使用具体操作步骤" aria-label="Permalink to &quot;一、自动获取功能，使用具体操作步骤&quot;">​</a></h3><p>在APP端生成相关信息采集的二维码，通过分享功能，分享二维码图片到被收集人微信中；被采集人扫描二维码，录入相关信息后提交，数据即可通过接口上传的数据库。</p><h3 id="二、开发人员具体操作步骤" tabindex="-1">二、开发人员具体操作步骤 <a class="header-anchor" href="#二、开发人员具体操作步骤" aria-label="Permalink to &quot;二、开发人员具体操作步骤&quot;">​</a></h3><p>​ 由实施人员操作以下步骤：</p><h4 id="_1-准备内容" tabindex="-1">（1）准备内容： <a class="header-anchor" href="#_1-准备内容" aria-label="Permalink to &quot;（1）准备内容：&quot;">​</a></h4><h4 id="_1、实体" tabindex="-1">1、实体 <a class="header-anchor" href="#_1、实体" aria-label="Permalink to &quot;1、实体&quot;">​</a></h4><p>&#39;&#39;人员入职信息表&quot;-&quot;tn_userentry&quot;</p><h4 id="_2、接口" tabindex="-1">2、接口 <a class="header-anchor" href="#_2、接口" aria-label="Permalink to &quot;2、接口&quot;">​</a></h4><p>&quot;微信人员信息提交&quot;</p><h4 id="_3、ui" tabindex="-1">3、UI <a class="header-anchor" href="#_3、ui" aria-label="Permalink to &quot;3、UI&quot;">​</a></h4><p>&quot;入职采集二维码&quot;</p><h4 id="_4、h5前端页面部署" tabindex="-1">4、H5前端页面部署 <a class="header-anchor" href="#_4、h5前端页面部署" aria-label="Permalink to &quot;4、H5前端页面部署&quot;">​</a></h4><p>源码<br> project地址：ssh://git@code.renqiankeji.com:12021/pukaifeng/YangyuanServer.git<br> branch：master<br> commitid：2c3b39a238e78653bc647622c59060f584de90c3<br> 部署位置：<br> 用unzip build.zip解压文件，会得到一个build的文件夹<br> 用rm -rf personalinfo命令删除/home/apaas/目录下的personalinfo文件夹<br> 用mv build personalinfo命令将build文件夹重命名为personalinfo即可】】】</p><h4 id="_2-h5页面接口文档" tabindex="-1">（2）H5页面接口文档： <a class="header-anchor" href="#_2-h5页面接口文档" aria-label="Permalink to &quot;（2）H5页面接口文档：&quot;">​</a></h4><p><strong>如下:</strong></p><h1 id="养元h5接口文档20201210" tabindex="-1">养元H5接口文档20201210 <a class="header-anchor" href="#养元h5接口文档20201210" aria-label="Permalink to &quot;养元H5接口文档20201210&quot;">​</a></h1><h2 id="_1-open-api-简介" tabindex="-1">1.Open API 简介 <a class="header-anchor" href="#_1-open-api-简介" aria-label="Permalink to &quot;1.Open API 简介&quot;">​</a></h2><p>API（Application Programming Interface，应用程序编程接口），是一些预先定义的软件功能函数。</p><p>玄讯aPaaS（Application Platform as a Service，应用程序平台即服务），是一个帮助软件开发工程师、实施工程师，通过配置式开发工具，高效的完成SaaS软件应用的开发、部署、运行、运维、运营的一体化云平台。</p><p>SaaS（Software as a Service，软件即服务），一种通过云租赁的方式，向用户交付软件应用的业务模式。</p><p>Open API，是基于玄讯aPaaS的技术服务能力，对外发布的用于数据交换、业务调用的，功能接口。这是一种安全的开放接口，需要经过用户认证才能调用，数据传输过程也必须使用SSL协议，加密传输。</p><h3 id="_1-1-open-api的技术标准" tabindex="-1">1.1 Open API的技术标准 <a class="header-anchor" href="#_1-1-open-api的技术标准" aria-label="Permalink to &quot;1.1 Open API的技术标准&quot;">​</a></h3><p>玄讯aPaaS Open API 是通过http协议，以JSON作为数据载体协议，进行数据交换的，接口调用前需要经过OAuth2.0认证。</p><p>http协议：接口使用的是http V1.1协议，通信过程要求使用SSL协议进行数据加密处理，SSL证书由玄讯aPaaS发布，最终通过https访问。</p><p>JSON数据协议：JSON是一种轻量级的数据交换格式。具有体积小，易于阅读，支持广泛的特点。</p><p>OAuth2.0协议：此协议是开放标准协议，用于身份认证。所有的玄讯Open API都需要完成OAuth2.0认证，获取到访问令牌（access token）后才可以调用。</p><p>功能接口：玄讯产品提供的，完成特定目的，数据交换的API接口。</p><h3 id="_1-2-申请api密钥" tabindex="-1">1.2 申请API密钥 <a class="header-anchor" href="#_1-2-申请api密钥" aria-label="Permalink to &quot;1.2 申请API密钥&quot;">​</a></h3><p>首先，您必须是玄讯的正式签约客户，然后您可以委托我们玄武为您指派的项目经理，或者客户服务经理。通过邮件的方式，填写《租户数据对接密钥申请》。</p><p>我们的运维部，会在核实信息的真实有效性后，为您颁发Open API的调用密钥。</p><p>opencode: 是第三方用户唯一标识。</p><p>opentype: 第三方认证端类型,如 微信小程序, 企业微信, 或某个企业的域认证服务</p><p>opentypesecret: 第三方认证端授权密钥, 在某种类型的第三方认证端对接aPaaS时,由aPaaS生成并提供. 经过aPaaS授权的第三方认证服务/适配服务,在调用aPaaS授权认证api时,需要用到该密钥.</p><h3 id="_1-3-用户认证" tabindex="-1">1.3 用户认证 <a class="header-anchor" href="#_1-3-用户认证" aria-label="Permalink to &quot;1.3 用户认证&quot;">​</a></h3><p>使用玄讯颁发的密钥，完整身份认证。</p><p>接口描述如下：</p><p>请求：</p><p>POST /api/auth/openlogin</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;username&quot;:&quot;第三方认证体系中的用户标识,如微信小程序的openid&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;opentypecode&quot;:&quot;第三方认证端标识,如:mini-program&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;opentypesecret&quot;:&quot;第三方认证端授权密钥&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;clienttypecode&quot;:&quot;预置的客户端类型,如 微信小程序为 6&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;username&quot;:&quot;第三方认证体系中的用户标识,如微信小程序的openid&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;opentypecode&quot;:&quot;第三方认证端标识,如:mini-program&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;opentypesecret&quot;:&quot;第三方认证端授权密钥&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;clienttypecode&quot;:&quot;预置的客户端类型,如 微信小程序为 6&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>响应：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;resp_data&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJMb2dp… &quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tenants&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;code&quot;: &quot;1008201&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;name&quot;: &quot;快销V8.1开发企业&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;accountcode&quot;: &quot;1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;productversionlist&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​          {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​            &quot;code&quot;: &quot;834686017469415432&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​            &quot;name&quot;: &quot;V8.1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​            &quot;productcode&quot;: &quot;834683221240184837&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​          }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;cloudserv&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​          …</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;resp_data&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJMb2dp… &quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tenants&quot;: [</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;code&quot;: &quot;1008201&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;name&quot;: &quot;快销V8.1开发企业&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;accountcode&quot;: &quot;1&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;productversionlist&quot;: [</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​          {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​            &quot;code&quot;: &quot;834686017469415432&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​            &quot;name&quot;: &quot;V8.1&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​            &quot;productcode&quot;: &quot;834683221240184837&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​          }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;cloudserv&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​          …</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>其中，token字段，就是access token，令牌。</p><p>其他为，租户的其他基本信息。</p><h2 id="_2-接口调用" tabindex="-1">2. 接口调用 <a class="header-anchor" href="#_2-接口调用" aria-label="Permalink to &quot;2\\. 接口调用&quot;">​</a></h2><p>通过开放用户认证接口，获取到正确令牌(token)后。即被玄讯认定为合法用户，可请求该开放用户权限范围内的业务功能接口。业务功能接口，需要在header中包含 token信息。</p><h3 id="_2-1-微信人员信息提交接口对接字段" tabindex="-1">2.<strong>1</strong> 微信人员信息提交接口对接字段 <a class="header-anchor" href="#_2-1-微信人员信息提交接口对接字段" aria-label="Permalink to &quot;2.**1** 微信人员信息提交接口对接字段&quot;">​</a></h3><p>1.接口：<a href="http://yy.xtion.net:7000/api/auth/openlogin" target="_blank" rel="noreferrer">http://yy.xtion.net:7000/api/auth/openlogin</a></p><p>请求方式：POST请求</p><p>header头信息：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Content-Type: application/json</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Content-Type: application/json</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>body固定参数：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> &quot;accountinfocode&quot;:&quot;1321993622295547904&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> &quot;opentypecode&quot;:&quot;yangyuan-data-server&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> &quot;opentypesecret&quot;:&quot;123456&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> &quot;clienttypecode&quot;:&quot;1011034&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> &quot;accountinfocode&quot;:&quot;1321993622295547904&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> &quot;opentypecode&quot;:&quot;yangyuan-data-server&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> &quot;opentypesecret&quot;:&quot;123456&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> &quot;clienttypecode&quot;:&quot;1011034&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-2调用业务数据接口-微信人员信息分享" tabindex="-1">2.2调用业务数据接口（微信人员信息分享） <a class="header-anchor" href="#_2-2调用业务数据接口-微信人员信息分享" aria-label="Permalink to &quot;2.2调用业务数据接口（微信人员信息分享）&quot;">​</a></h3><p>接口：</p><p><a href="http://120.25.234.145:7000/api/teapi/dy-biz/1328887397353656404/1329969292090937428" target="_blank" rel="noreferrer">http://120.25.234.145:7000/api/teapi/dy-biz/1328887397353656404/1329969292090937428</a></p><p>请求方式：POST请求</p><p>header头信息：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Content-Type: application/json,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">token: #正确令牌(token)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Content-Type: application/json,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">token: #正确令牌(token)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>body固定参数：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;kx_parameters&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_contactactivity&quot;: &quot;活动名称/编号&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​     &quot;tn_positionname&quot;: &quot;职位名称&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_positionid&quot;: &quot;职位id&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;categorycode&quot;: &quot;职位类型&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​       &quot;id&quot;: &quot;人员id&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;kx_parameters&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_contactactivity&quot;: &quot;活动名称/编号&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​     &quot;tn_positionname&quot;: &quot;职位名称&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_positionid&quot;: &quot;职位id&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;categorycode&quot;: &quot;职位类型&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​       &quot;id&quot;: &quot;人员id&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>返回参数：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;resp_data&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_userentry&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      &quot;__metaname&quot;: &quot;tn_userentry&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_contactactivity&quot;: &quot;活动名称/编号&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_positionname&quot;: &quot;职位名称&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_positionid&quot;: &quot;职位id&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;categorycode&quot;: &quot;职位类型&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​       &quot;userid&quot;: &quot;人员id&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;kx_parameters&quot;: {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;resp_data&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_userentry&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      &quot;__metaname&quot;: &quot;tn_userentry&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_contactactivity&quot;: &quot;活动名称/编号&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_positionname&quot;: &quot;职位名称&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_positionid&quot;: &quot;职位id&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;categorycode&quot;: &quot;职位类型&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​       &quot;userid&quot;: &quot;人员id&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;kx_parameters&quot;: {}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="_2-3调用业务数据接口-微信人员信息提交" tabindex="-1">2.3调用业务数据接口(微信人员信息提交) <a class="header-anchor" href="#_2-3调用业务数据接口-微信人员信息提交" aria-label="Permalink to &quot;2.3调用业务数据接口(微信人员信息提交)&quot;">​</a></h3><p>接口：</p><p><a href="http://120.25.234.145:7000/api/teapi/dy-biz/893369323115122787/1330681430774255710" target="_blank" rel="noreferrer">http://120.25.234.145:7000/api/teapi/dy-biz/893369323115122787/1330681430774255710</a></p><p>请求方式：POST请求</p><p>header头信息：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Content-Type: application/json,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">token: #正确令牌(token)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Content-Type: application/json,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">token: #正确令牌(token)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>body固定参数：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;kx_parameters&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_userentryname&quot;: &quot;李四&quot;,       //入职人员名称</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_phonenumber&quot;: &quot;16123477646&quot;,    //手机号</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_sex&quot;: &quot;1&quot;,             //性别：1男、2女、3未知</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_idnumber&quot;: &quot;620103199201084417&quot;,  //身份证号码</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_idphoto&quot;: &quot;&quot;,            //身份证照片</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_bankcardnumber&quot;: &quot;&quot;,        //银行卡号码</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_bankcardphoto&quot;: &quot;&quot;,        //银行卡照片</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_bodyphoto&quot;: &quot;&quot;,          //全身照</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_resumephoto&quot;: &quot;&quot;,          //简历照片</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_salemanagreement&quot;: &quot;&quot;,       //促销员协议/入职考试卷</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_education&quot;: &quot;&quot;,           //人员学历</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_positionid&quot;: &quot;1053186130595418112&quot;, //职位id</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_positionname&quot;:&quot;职位名称&quot;,      //职位名称</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_contactactivity&quot;:&quot;活动名称/编号&quot;  //活动名称/编号</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;userid&quot;:&quot;人员id&quot;  //人员id</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;categorycode&quot;: &quot;职位类型&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;kx_parameters&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_userentryname&quot;: &quot;李四&quot;,       //入职人员名称</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_phonenumber&quot;: &quot;16123477646&quot;,    //手机号</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_sex&quot;: &quot;1&quot;,             //性别：1男、2女、3未知</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_idnumber&quot;: &quot;620103199201084417&quot;,  //身份证号码</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_idphoto&quot;: &quot;&quot;,            //身份证照片</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_bankcardnumber&quot;: &quot;&quot;,        //银行卡号码</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_bankcardphoto&quot;: &quot;&quot;,        //银行卡照片</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_bodyphoto&quot;: &quot;&quot;,          //全身照</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_resumephoto&quot;: &quot;&quot;,          //简历照片</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_salemanagreement&quot;: &quot;&quot;,       //促销员协议/入职考试卷</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_education&quot;: &quot;&quot;,           //人员学历</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_positionid&quot;: &quot;1053186130595418112&quot;, //职位id</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_positionname&quot;:&quot;职位名称&quot;,      //职位名称</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_contactactivity&quot;:&quot;活动名称/编号&quot;  //活动名称/编号</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;userid&quot;:&quot;人员id&quot;  //人员id</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;categorycode&quot;: &quot;职位类型&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="_2-4调用学历接口-微信人员学历数据获取" tabindex="-1">2.4调用学历接口(微信人员学历数据获取) <a class="header-anchor" href="#_2-4调用学历接口-微信人员学历数据获取" aria-label="Permalink to &quot;2.4调用学历接口(微信人员学历数据获取)&quot;">​</a></h3><p>接口：</p><p><a href="http://120.25.234.145:7000/api/teapi/dy-biz/1328887397353656404/1336135832695869537" target="_blank" rel="noreferrer">http://120.25.234.145:7000/api/teapi/dy-biz/1328887397353656404/1336135832695869537</a></p><p>请求方式：POST请求</p><p>header头信息：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Content-Type: application/json,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">token: #正确令牌(token)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Content-Type: application/json,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">token: #正确令牌(token)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>返回值：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;resp_data&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    &quot;tn_education&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;小学&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1328641324634738688&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;初中&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1328646946465910784&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;高中&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1328648719041695744&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;中专&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1336139888390705152&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;大专&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1336139950860668928&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;本科&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1328648775283118080&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dicvalue&quot;: &quot;硕士&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​        &quot;dickey&quot;: &quot;1328648928140333056&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​      }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">​    ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  &quot;resp_data&quot;: {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    &quot;tn_education&quot;: [</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;小学&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1328641324634738688&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;初中&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1328646946465910784&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;高中&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1328648719041695744&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;中专&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1336139888390705152&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;大专&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1336139950860668928&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;本科&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1328648775283118080&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dicvalue&quot;: &quot;硕士&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;__metaname&quot;: &quot;pl_dictionary&quot;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​        &quot;dickey&quot;: &quot;1328648928140333056&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">​    ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><p>学历控件使用下拉框，显示dicvalue,提交dickey字段</p><h2 id="_3-报错参数" tabindex="-1">3.报错参数 <a class="header-anchor" href="#_3-报错参数" aria-label="Permalink to &quot;3.报错参数&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;error_type&quot;: 500,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;error_code&quot;: &quot;出现异常，请联系管理员!&quot;,       //返回错误的信息</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;error_params&quot;: null</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot;error_type&quot;: 500,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot;error_code&quot;: &quot;出现异常，请联系管理员!&quot;,       //返回错误的信息</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&quot;error_params&quot;: null</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_4-根据职位类别区分页面" tabindex="-1">4.根据职位类别区分页面 <a class="header-anchor" href="#_4-根据职位类别区分页面" aria-label="Permalink to &quot;4.根据职位类别区分页面&quot;">​</a></h2><p>业务员：categorycode= sfa-salesman</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/1-2.png" alt=""></p><p>业助/主管/站长：categorycode= sfa-director</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/2-2.png" alt=""></p><p>内勤：categorycode=sfa-Internalservice</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/3-2.png" alt=""></p><h2 id="_5-使用场景" tabindex="-1">5.使用场景 <a class="header-anchor" href="#_5-使用场景" aria-label="Permalink to &quot;5.使用场景&quot;">​</a></h2><p>​ 管理人员通过app页面，分享“人员入职的信息表”页面（H5）到入职人微信，相关入职人填写入职信息后提交</p><p>促销员 categorycode- “sfa-salesman”</p><p>1、 进入页面：调用接口2.1+2.2，显示职位名称（id、关联活动）</p><p>​ 提交页面：调用接口2.1+2.3，页面输入项＋职位名称/id+关联活动</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4-2.png" alt=""></p><p>其它职位：</p><p>业主、主管、站长categorycode- “sfa-director”</p><p>进入页面：调用接口2.1+2.2，显示职位名称（id、关联活动）</p><p>提交页面：调用接口2.1+2.3，页面输入项＋职位名称/id+关联活动</p><p>注：不要入职考试卷，使用简历照片</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/5-2.png" alt=""></p><p>原型页面补充:</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/6-2.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/7-2.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/8-2.png" alt=""></p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC021-FC001-H5%E6%95%B0%E6%8D%AE%E6%94%B6%E9%9B%86%E6%8F%90%E4%BA%A4%E7%BB%84%E4%BB%B6.zip" title="COM-BC021-FC001 H5数据收集提交组件" target="_blank" rel="noreferrer">COM-BC021-FC001 H5数据收集提交组件</a></p>`,117),o=[l];function t(c,r,i,u,b,y){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};
