import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.d084db19.js";const m=JSON.parse('{"title":"跨域问题","description":"","frontmatter":{"title":"跨域问题","date":"2021-12-10T17:18:14.000Z"},"headers":[],"relativePath":"doc/wpdoc/跨域问题.md","filePath":"doc/wpdoc/跨域问题.md"}'),l={name:"doc/wpdoc/跨域问题.md"},o=n(`<h1 id="允许跨域头设置指南" tabindex="-1">允许跨域头设置指南 <a class="header-anchor" href="#允许跨域头设置指南" aria-label="Permalink to &quot;允许跨域头设置指南&quot;">​</a></h1><h2 id="_1-接口跨域" tabindex="-1">1.接口跨域 <a class="header-anchor" href="#_1-接口跨域" aria-label="Permalink to &quot;1.接口跨域&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">修改 /usr/local/openresty/nginx/scripts/apaas_trace_resp.lua 文件：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">在 ngx.header[&quot;Access-Control-Allow-Headers&quot;] 节点，补上 x-apaas-lang 和 tecode</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">ngx.header[&quot;Access-Control-Allow-Headers&quot;] = &quot;x-apaas-lang,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,ctcode,debug,dynamicId,idecode,idetoken,metamodeltype,pdcode,pscode,pvcode,req_id,tecode,tenantname,token,usercode,userinfoname,username,update&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">修改 /usr/local/openresty/nginx/scripts/apaas_trace_resp.lua 文件：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">在 ngx.header[&quot;Access-Control-Allow-Headers&quot;] 节点，补上 x-apaas-lang 和 tecode</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">例如：</span></span>
<span class="line"><span style="color:#24292e;">ngx.header[&quot;Access-Control-Allow-Headers&quot;] = &quot;x-apaas-lang,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,ctcode,debug,dynamicId,idecode,idetoken,metamodeltype,pdcode,pscode,pvcode,req_id,tecode,tenantname,token,usercode,userinfoname,username,update&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_2-oss跨域" tabindex="-1">2.OSS跨域 <a class="header-anchor" href="#_2-oss跨域" aria-label="Permalink to &quot;2.OSS跨域&quot;">​</a></h2><h3 id="独立部署环境-使用oss模拟器的" tabindex="-1">独立部署环境，使用OSS模拟器的 <a class="header-anchor" href="#独立部署环境-使用oss模拟器的" aria-label="Permalink to &quot;独立部署环境，使用OSS模拟器的&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">找到</span></span>
<span class="line"><span style="color:#e1e4e8;">server {</span></span>
<span class="line"><span style="color:#e1e4e8;">   listen 8099;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">节点，在  add_header Access-Control-Allow-Headers 节点，补上 x-apaas-lang 和 tecode</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">add_header Access-Control-Allow-Headers &quot;content-md5,token,x-oss-security-token,x-oss-date,x-oss-user-agent,$http_access_control_allow_headers,authorization,content-disposition,content-type,x-apaas-lang,tecode&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">找到</span></span>
<span class="line"><span style="color:#24292e;">server {</span></span>
<span class="line"><span style="color:#24292e;">   listen 8099;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">节点，在  add_header Access-Control-Allow-Headers 节点，补上 x-apaas-lang 和 tecode</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">例如：</span></span>
<span class="line"><span style="color:#24292e;">add_header Access-Control-Allow-Headers &quot;content-md5,token,x-oss-security-token,x-oss-date,x-oss-user-agent,$http_access_control_allow_headers,authorization,content-disposition,content-type,x-apaas-lang,tecode&quot;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="阿里云oss" tabindex="-1">阿里云OSS <a class="header-anchor" href="#阿里云oss" aria-label="Permalink to &quot;阿里云OSS&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">让运维部，在OSS的允许跨域头配置中增加 x-apaas-lang 和 tecode</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">让运维部，在OSS的允许跨域头配置中增加 x-apaas-lang 和 tecode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,8),p=[o];function t(c,r,i,d,u,h){return s(),a("div",null,p)}const _=e(l,[["render",t]]);export{m as __pageData,_ as default};
