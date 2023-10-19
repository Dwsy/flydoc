import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.d084db19.js";const q=JSON.parse('{"title":"授权认证说明","description":"","frontmatter":{"title":"授权认证说明","date":"2023-03-07T16:11:31.000Z"},"headers":[],"relativePath":"doc/wpdoc/授权认证说明.md","filePath":"doc/wpdoc/授权认证说明.md"}'),p={name:"doc/wpdoc/授权认证说明.md"},l=o(`<h1 id="授权认证" tabindex="-1">授权认证 <a class="header-anchor" href="#授权认证" aria-label="Permalink to &quot;授权认证&quot;">​</a></h1><h2 id="_1-1-功能边界" tabindex="-1">1.1. 功能边界 <a class="header-anchor" href="#_1-1-功能边界" aria-label="Permalink to &quot;1.1. 功能边界&quot;">​</a></h2><ul><li>账户登录,获取twt token</li><li>租户，应用选择，交换jwt token</li><li>租户，岗位选择，交换jwt token</li><li>jwt token超时机制</li><li>注销及踢人机制</li></ul><h2 id="_1-2-设计" tabindex="-1">1.2. 设计 <a class="header-anchor" href="#_1-2-设计" aria-label="Permalink to &quot;1.2. 设计&quot;">​</a></h2><h3 id="_1-2-1-登录验证时序" tabindex="-1">1.2.1. 登录验证时序 <a class="header-anchor" href="#_1-2-1-登录验证时序" aria-label="Permalink to &quot;1.2.1. 登录验证时序&quot;">​</a></h3><ul><li>平台级登录</li></ul><ol><li>单租户场景</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%99%BB%E5%BD%95%E9%AA%8C%E8%AF%81%E6%97%B6%E5%BA%8F-%E5%8D%95%E7%A7%9F%E6%88%B7.png" alt="account.singletenant.png"></p><ol><li>多租户场景</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%99%BB%E5%BD%95%E9%AA%8C%E8%AF%81%E6%97%B6%E5%BA%8F-%E5%A4%9A%E7%A7%9F%E6%88%B7.png" alt="account.singletenant.png"></p><ul><li>租户级登录</li></ul><ol><li>单岗位场景</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%99%BB%E5%BD%95%E9%AA%8C%E8%AF%81%E6%97%B6%E5%BA%8F-%E5%8D%95%E5%B2%97%E4%BD%8D.png" alt="account.singletenant.png"></p><ol><li>多岗位场景</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%99%BB%E5%BD%95%E9%AA%8C%E8%AF%81%E6%97%B6%E5%BA%8F-%E5%A4%9A%E5%B2%97%E4%BD%8D.png" alt="account.singletenant.png"></p><h3 id="_1-2-2-校验token-无返回" tabindex="-1">1.2.2. 校验token -&gt; 无返回 <a class="header-anchor" href="#_1-2-2-校验token-无返回" aria-label="Permalink to &quot;1.2.2. 校验token -&gt; 无返回&quot;">​</a></h3><p>api-gateway -&gt; 认证服务</p><p>实现tokenid校验及过期</p><p>请求:<br> header: token</p><p>返回：<br> 靠http状态码判断结果</p><h3 id="_1-2-3-token超时机制-jwt超时" tabindex="-1">1.2.3. token超时机制，jwt超时 <a class="header-anchor" href="#_1-2-3-token超时机制-jwt超时" aria-label="Permalink to &quot;1.2.3. token超时机制，jwt超时&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/token%E8%B6%85%E6%97%B6%E6%9C%BA%E5%88%B6%EF%BC%8Cjwt%E8%B6%85%E6%97%B6.png" alt="account.refreshtoken.png"></p><ol><li><p>登录后，认证服务返回 token、refresh-token和token的超时时间， token拥有较短的超时时间，refresh-token拥有较长的超时时间。</p></li><li><p>在业务请求前，客户端判断token是否接近超时时间，若即将超时，则请求刷新token，认证服务返回 新的token,refresh-token和token超时时间</p></li><li><p>在业务服务收到业务请求时，xwcore的sessionfilter，提供token的校验（校验除了防篡改，还包含超时校验)，如果超时，则返回token无效的异常。若一切正常，进入后续的业务操作。</p></li></ol><p>规则:</p><ul><li>手机端和web端超时时间不同</li><li>统一租户配置超时时间</li></ul><h2 id="_1-3-接口" tabindex="-1">1.3. 接口 <a class="header-anchor" href="#_1-3-接口" aria-label="Permalink to &quot;1.3. 接口&quot;">​</a></h2><h3 id="jwt-payload结构" tabindex="-1">jwt payload结构 <a class="header-anchor" href="#jwt-payload结构" aria-label="Permalink to &quot;jwt payload结构&quot;">​</a></h3><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;accode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tecode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;pdcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;pvcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ctcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;accode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;tecode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;pdcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;pvcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ctcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="首次登录" tabindex="-1">首次登录 <a class="header-anchor" href="#首次登录" aria-label="Permalink to &quot;首次登录&quot;">​</a></h3><p>客户端 -&gt; 认证服务 : /auth/login -&gt;</p><ol><li>如果该用户拥有多个企业和多个产品，返回原始token，accode/tokenid，并返回企业产品列表</li><li>如果服务端判断该用户只有一个企业和一个产品，返回 新token accode/tokenid/tecode/pdcode/pvcode，并返回企业产品列表</li></ol><p>请求:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;username&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;password&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;clienttypecode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;username&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;password&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;clienttypecode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>返回:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                         </span><span style="color:#6A737D;">// 最新token</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tokenexpires&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                  </span><span style="color:#6A737D;">// token超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;refreshtoken&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                  </span><span style="color:#6A737D;">// 刷新时用的token</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tenants&quot;</span><span style="color:#E1E4E8;">:[                         </span><span style="color:#6A737D;">// 租户列表</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;accountcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 租户用户编号</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                  </span><span style="color:#6A737D;">// 租户编号</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,                  </span><span style="color:#6A737D;">// 租户名称</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;productversionlist&quot;</span><span style="color:#E1E4E8;">:[      </span><span style="color:#6A737D;">// 产品版本列表</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,          </span><span style="color:#6A737D;">// 产品版本编号</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,          </span><span style="color:#6A737D;">// 产品版本名称</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;productcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 产品编号</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                         </span><span style="color:#6A737D;">// 最新token</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;tokenexpires&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                  </span><span style="color:#6A737D;">// token超时时间</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;refreshtoken&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                  </span><span style="color:#6A737D;">// 刷新时用的token</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;tenants&quot;</span><span style="color:#24292E;">:[                         </span><span style="color:#6A737D;">// 租户列表</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;accountcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,           </span><span style="color:#6A737D;">// 租户用户编号</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                  </span><span style="color:#6A737D;">// 租户编号</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,                  </span><span style="color:#6A737D;">// 租户名称</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;productversionlist&quot;</span><span style="color:#24292E;">:[      </span><span style="color:#6A737D;">// 产品版本列表</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,          </span><span style="color:#6A737D;">// 产品版本编号</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,          </span><span style="color:#6A737D;">// 产品版本名称</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;productcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 产品编号</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="切换租户-切换-企业-产品版本" tabindex="-1">切换租户（切换 企业/产品版本） <a class="header-anchor" href="#切换租户-切换-企业-产品版本" aria-label="Permalink to &quot;切换租户（切换 企业/产品版本）&quot;">​</a></h3><p>客户端 -&gt; 认证服务 : /auth/choosetenant -&gt; 返回 新token accode/tokenid/tecode/pdcode/pvcode</p><p><strong>需要将login的原始token放在header里</strong></p><p>请求:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;accountcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 租户用户编号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;tenantcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,            </span><span style="color:#6A737D;">// 租户编号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;productcode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,           </span><span style="color:#6A737D;">// 产品编号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;productversioncode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 产品版本编号</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;accountcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,           </span><span style="color:#6A737D;">// 租户用户编号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;tenantcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,            </span><span style="color:#6A737D;">// 租户编号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;productcode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,           </span><span style="color:#6A737D;">// 产品编号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;productversioncode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 产品版本编号</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>返回:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//新token accode/tokenid/tecode/pdcode/pvcode</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//新token accode/tokenid/tecode/pdcode/pvcode</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="刷新token" tabindex="-1">刷新token <a class="header-anchor" href="#刷新token" aria-label="Permalink to &quot;刷新token&quot;">​</a></h3><p>客户端 -&gt; 认证服务 : /auth/refreshtoken -&gt; 返回新token</p><p>请求:</p><p><strong>GET /auth/refreshtoken?refreshtoken=</strong></p><p>header: token</p><p>返回：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;token&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;新的token&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;refreshtoken&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;新的refreshtoken&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;token&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;新的token&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;refreshtoken&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;新的refreshtoken&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_1-4-同设备互踢时序" tabindex="-1">1.4. 同设备互踢时序 <a class="header-anchor" href="#_1-4-同设备互踢时序" aria-label="Permalink to &quot;1.4. 同设备互踢时序&quot;">​</a></h2><p>登录及token验证时序</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%90%8C%E8%AE%BE%E5%A4%87%E4%BA%92%E8%B8%A2%E6%97%B6%E5%BA%8F1.png" alt="token.flush.login.png"></p><p>后台管理清理token时序</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%90%8C%E8%AE%BE%E5%A4%87%E4%BA%92%E8%B8%A2%E6%97%B6%E5%BA%8F2.png" alt="token.flush.manage.png"></p><p><strong>说明，此处的clienttype为端类型，并非clienttypecode，如：手机端(1,2)，web端(3)，小程序端(6)</strong></p><h2 id="_1-5-获取当前人的租户列表及信息" tabindex="-1">1.5. 获取当前人的租户列表及信息 <a class="header-anchor" href="#_1-5-获取当前人的租户列表及信息" aria-label="Permalink to &quot;1.5. 获取当前人的租户列表及信息&quot;">​</a></h2><p>请求:</p><p><strong>GET /auth/tenantlist</strong></p><p>header: token</p><p>返回:</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;resp_data&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;tenants&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#FDAEB7;font-style:italic;">...租户信息</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;resp_data&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;tenants&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#B31D28;font-style:italic;">...租户信息</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_1-6-注销登录" tabindex="-1">1.6. 注销登录 <a class="header-anchor" href="#_1-6-注销登录" aria-label="Permalink to &quot;1.6. 注销登录&quot;">​</a></h2><p>注销token接口</p><p>请求:</p><p><strong>POST /api/auth/logout</strong></p><p>header: token</p><p>返回:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">logout ok</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">logout ok</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,68),e=[l];function t(c,r,E,i,u,y){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{q as __pageData,b as default};
