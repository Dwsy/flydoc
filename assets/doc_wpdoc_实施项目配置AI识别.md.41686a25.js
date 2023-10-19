import{_ as t,o as s,c as a,Q as e}from"./chunks/framework.b1e56e49.js";const u=JSON.parse('{"title":"实施项目配置AI识别","description":"","frontmatter":{"title":"实施项目配置AI识别","date":"2020-05-11T11:26:14.000Z"},"headers":[],"relativePath":"doc/wpdoc/实施项目配置AI识别.md","filePath":"doc/wpdoc/实施项目配置AI识别.md"}'),l={name:"doc/wpdoc/实施项目配置AI识别.md"},n=e(`<h2 id="实施项目配置ai识别" tabindex="-1">实施项目配置AI识别 <a class="header-anchor" href="#实施项目配置ai识别" aria-label="Permalink to &quot;实施项目配置AI识别&quot;">​</a></h2><h3 id="_1、认识ai识别" tabindex="-1">1、认识AI识别 <a class="header-anchor" href="#_1、认识ai识别" aria-label="Permalink to &quot;1、认识AI识别&quot;">​</a></h3><p>一般行业上有货架、冰柜、水堆 用于拍照AI识别即使识别结果。<br> app对应的控件为aiphoto</p><h3 id="_2、在玄武ai平台新建一个ai账号" tabindex="-1">2、在玄武AI平台新建一个AI账号 <a class="header-anchor" href="#_2、在玄武ai平台新建一个ai账号" aria-label="Permalink to &quot;2、在玄武AI平台新建一个AI账号&quot;">​</a></h3><p>玄武科技销售经理协调处理，并最终提供一个可用的AI帐号。</p><p>示例账号：10016</p><p>示例密码：123456</p><h3 id="_3、登录接口" tabindex="-1">3、登录接口 <a class="header-anchor" href="#_3、登录接口" aria-label="Permalink to &quot;3、登录接口&quot;">​</a></h3><p>请求方式： POST</p><p>请求地址：<br><a href="https://ai.xtion.net/api/ai/auth/login" target="_blank" rel="noreferrer">https://ai.xtion.net/api/ai/auth/login</a></p><p>Content-Type: application/json</p><p>输入参数：</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必须</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">username</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">账号</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">密码</td></tr></tbody></table><p>输出参数：</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必须</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">status</td><td style="text-align:left;">int</td><td style="text-align:left;">是</td><td style="text-align:left;">状态码（0是请求失败，1是请求成功）</td></tr><tr><td style="text-align:left;">Data</td><td style="text-align:left;">Object</td><td style="text-align:left;">否</td><td style="text-align:left;">结果数据。tenantId 租户id。tenantName 租户名称username 账号parentTenantId父租户idtoken token信息cloudserv 云信息</td></tr></tbody></table><p>输出参数示例：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB-1.png" alt=""></p><p>4、货架SKU同步识别接口（用于测试AI识别可以调）</p><p>请求方式： POST</p><p>请求地址：<br><a href="https://ai.xtion.net/api/ai/shelf/syncdetect" target="_blank" rel="noreferrer">https://ai.xtion.net/api/ai/shelf/syncdetect</a></p><p>Content-Type: application/json</p><p>请求头</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必须</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">token</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">登录后获取到</td></tr></tbody></table><p>输入参数：</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必须</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">imageUrl</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">图片地址</td></tr><tr><td style="text-align:left;">identityId</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">图片身份id</td></tr></tbody></table><p>Postman测试：</p><p>(1)、Headers里面填写token, 值为上面账号登录获取到的token</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB-2.png" alt=""></p><p>(2)、Body里面填写入参数据</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB3.png" alt=""></p><p>5、在项目中配置拍照用于AI识别</p><p>(1)、在项目对应租户中 数据库的pl_globalconfig 表中需要改AI提供账号信息</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AEAI%E8%AF%86%E5%88%AB4.png" alt=""></p><p>(2)、需求中会出现多个：货架、冰柜等</p><p>在AISwitch中的值改数据</p><h4 id="_1、type为三种" tabindex="-1">1、type为三种 <a class="header-anchor" href="#_1、type为三种" aria-label="Permalink to &quot;1、type为三种&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> shelf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;shelf&quot;</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">//货架</span></span>
<span class="line"><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> freezer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;freezer&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//冰柜 </span></span>
<span class="line"><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> waterheap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;waterheap&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//水堆</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">case</span><span style="color:#24292E;"> shelf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;shelf&quot;</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">//货架</span></span>
<span class="line"><span style="color:#D73A49;">case</span><span style="color:#24292E;"> freezer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;freezer&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">//冰柜 </span></span>
<span class="line"><span style="color:#D73A49;">case</span><span style="color:#24292E;"> waterheap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;waterheap&quot;</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">//水堆</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2、switchstatus-需要改成1" tabindex="-1">2、switchstatus 需要改成1 <a class="header-anchor" href="#_2、switchstatus-需要改成1" aria-label="Permalink to &quot;2、switchstatus 需要改成1&quot;">​</a></h4><h4 id="_3、一个类型会有多个控件上的拍照-keywords对应拍照控件的title" tabindex="-1">3、一个类型会有多个控件上的拍照 keywords对应拍照控件的title <a class="header-anchor" href="#_3、一个类型会有多个控件上的拍照-keywords对应拍照控件的title" aria-label="Permalink to &quot;3、一个类型会有多个控件上的拍照 keywords对应拍照控件的title&quot;">​</a></h4><h4 id="_4、实例" tabindex="-1">4、实例： <a class="header-anchor" href="#_4、实例" aria-label="Permalink to &quot;4、实例：&quot;">​</a></h4><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;shelf&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;switchstatus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;keywords&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;货架陈列&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;堆箱陈列&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;freezer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;switchstatus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;keywords&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;冰冻化&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;shelf&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;switchstatus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;keywords&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;货架陈列&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;堆箱陈列&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}, {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;freezer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;switchstatus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;keywords&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;冰冻化&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,41),p=[n];function o(r,c,i,y,E,d){return s(),a("div",null,p)}const q=t(l,[["render",o]]);export{u as __pageData,q as default};
