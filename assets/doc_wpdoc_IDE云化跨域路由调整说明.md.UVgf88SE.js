import{_ as s,o as n,c as a,R as e}from"./chunks/framework.E9w9IFh5.js";const h=JSON.parse('{"title":"IDE云化跨域路由调整说明","description":"","frontmatter":{"title":"IDE云化跨域路由调整说明","date":"2022-04-27T11:25:36.000Z"},"headers":[],"relativePath":"doc/wpdoc/IDE云化跨域路由调整说明.md","filePath":"doc/wpdoc/IDE云化跨域路由调整说明.md"}'),p={name:"doc/wpdoc/IDE云化跨域路由调整说明.md"},l=e(`<h1 id="ide云化后-中心路由与环境路由的跨域调整说明" tabindex="-1">IDE云化后，中心路由与环境路由的跨域调整说明 <a class="header-anchor" href="#ide云化后-中心路由与环境路由的跨域调整说明" aria-label="Permalink to &quot;IDE云化后，中心路由与环境路由的跨域调整说明&quot;">​</a></h1><h3 id="术语说明" tabindex="-1">术语说明 <a class="header-anchor" href="#术语说明" aria-label="Permalink to &quot;术语说明&quot;">​</a></h3><p>中心路由是指开发者网站的路由，默认端口是51074的<br> 环境路由是指具体租户环境的路由，常有端口是7000,7001,8000,8001等</p><h3 id="环境说明" tabindex="-1">环境说明 <a class="header-anchor" href="#环境说明" aria-label="Permalink to &quot;环境说明&quot;">​</a></h3><p>本次调整是在路由V3.4的基础上操作的</p><h3 id="具体步骤" tabindex="-1">具体步骤 <a class="header-anchor" href="#具体步骤" aria-label="Permalink to &quot;具体步骤&quot;">​</a></h3><h4 id="中心路由部分" tabindex="-1">中心路由部分 <a class="header-anchor" href="#中心路由部分" aria-label="Permalink to &quot;中心路由部分&quot;">​</a></h4><p>一般只需要调整一次，增加以下跨域字段，修改nginx.conf</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    ...</span></span>
<span class="line"><span>    listen 51074;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # IDE云化 start</span></span>
<span class="line"><span>    add_header Access-Control-Allow-Headers app_id,ctcode,idetoken,metamodeltype,pdcode,pscode,pvcode,req_id,tecode,tenantname,usercode,userinfonamee,username,version;</span></span>
<span class="line"><span>    # IDE云化 end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span>        root /home/apaas/morelove;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="环境路由部分" tabindex="-1">环境路由部分 <a class="header-anchor" href="#环境路由部分" aria-label="Permalink to &quot;环境路由部分&quot;">​</a></h4><ul><li><p>nginx.conf端口8001部分</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>listen       8001;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IDE云化start</span></span>
<span class="line"><span>add_header Access-Control-Allow-Methods *;</span></span>
<span class="line"><span>add_header Access-Control-Allow-Headers app_id,content-type,idetoken,req_id,pdcode,pscode,pvcode,tenantname,token,usercode,userinfoname,username,version,debug,ctcode,dynamicId,idecode,metamodeltype,update,Authorization,tecode,x-requested-with,version;</span></span>
<span class="line"><span>add_header Access-Control-Expose-Headers Content-Disposition,*;</span></span>
<span class="line"><span># IDE云化end</span></span>
<span class="line"><span></span></span>
<span class="line"><span>include &quot;/usr/local/openresty/nginx/scripts/config/ide_location.conf&quot;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><p>ide_location.conf部分。 由于调度服务没有做跨域处理，需要在nginx做处理，内容如下:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location /task/ {</span></span>
<span class="line"><span># IDE云化 start</span></span>
<span class="line"><span>if ( $upstream_http_Access-Control-Allow-Origin = &#39;&#39;){</span></span>
<span class="line"><span>  more_set_headers &quot;Access-Control-Allow-Origin *&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># IDE云化 end</span></span>
<span class="line"><span>proxy_pass http://apaastomcat/taskserv/;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>apaas_location.conf部分。 由于业务引擎做的跨域不完整，需要添加调整,内容如下:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>location ~^/api/teapi/dy-biz/ {</span></span>
<span class="line"><span># IDE云化 start OPTIONS请求</span></span>
<span class="line"><span>if ( $request_method = &#39;OPTIONS&#39; ) {</span></span>
<span class="line"><span>  return 204;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># IDE云化 start OPTIONS请求</span></span>
<span class="line"><span>set $jwtok &quot;error&quot;;</span></span>
<span class="line"><span>set $ss_tenant_code &#39;&#39;;</span></span>
<span class="line"><span>set $ss_account_code &#39;&#39;;</span></span>
<span class="line"><span>access_by_lua_file &#39;/usr/local/openresty/nginx/scripts/apaas_jwtdecode_withoutcheck.lua&#39;;</span></span>
<span class="line"><span>proxy_set_header Host $host:$server_port;</span></span>
<span class="line"><span>proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>proxy_set_header X-Forwarded-For $remote_addr;</span></span>
<span class="line"><span>proxy_set_header Request-Url $request_uri;</span></span>
<span class="line"><span># IDE 云化 start Access-Control-Allow-Origin</span></span>
<span class="line"><span>if ( $upstream_http_Access-Control-Allow-Origin = &#39;&#39; ){</span></span>
<span class="line"><span>  more_set_headers &quot;Access-Control-Allow-Origin *&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># IDE 云化 end Access-Control-Allow-Origin</span></span>
<span class="line"><span>proxy_pass http://bizserv;</span></span>
<span class="line"><span>rewrite ^/api/teapi/dy-biz/(.+)/(.+) /biz/run?mocode=$1&amp;lgcode=$2 break;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></li></ul>`,11),i=[l];function r(c,t,o,d,b,u){return n(),a("div",null,i)}const _=s(p,[["render",r]]);export{h as __pageData,_ as default};
