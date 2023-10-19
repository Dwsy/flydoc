import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b1e56e49.js";const y=JSON.parse('{"title":"IDE预览功能路由说明","description":"","frontmatter":{"title":"IDE预览功能路由说明","date":"2023-03-31T15:32:29.000Z"},"headers":[],"relativePath":"doc/wpdoc/IDE预览功能路由说明.md","filePath":"doc/wpdoc/IDE预览功能路由说明.md"}'),p={name:"doc/wpdoc/IDE预览功能路由说明.md"},l=e(`<h1 id="文档目的" tabindex="-1">文档目的 <a class="header-anchor" href="#文档目的" aria-label="Permalink to &quot;文档目的&quot;">​</a></h1><p>说明IDE中心路由增加UI预览后的路由适配</p><h1 id="场景描述" tabindex="-1">场景描述 <a class="header-anchor" href="#场景描述" aria-label="Permalink to &quot;场景描述&quot;">​</a></h1><p>原来的IDE路由只是nginx的简单代理。如下方显示</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">   server {</span></span>
<span class="line"><span style="color:#e1e4e8;">      listen 9000;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">        root /path/to/idewe;</span></span>
<span class="line"><span style="color:#e1e4e8;">        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">   server {</span></span>
<span class="line"><span style="color:#24292e;">      listen 9000;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      location / {</span></span>
<span class="line"><span style="color:#24292e;">        root /path/to/idewe;</span></span>
<span class="line"><span style="color:#24292e;">        try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>UI预览功能改造后，预定uipreview的请求需要插入特定js，并且请求需要发送到具体的环境。<br><strong>约定规定如下:</strong><br> 1.插入js由ideweb提供，路径和名称是规定的，在DOM中before.js需要在after.js前面<br> /static/preview-script/preview_script_before.js<br> /static/preview-script/preview_script_after.js<br> 2./uipreview/schema_host_port<em>subpath</em>/请求uri<br> 记录说明: 调试的环境是<a href="http://120.46.182.226:7000/%EF%BC%8C%E5%AF%B9%E5%BA%94%E5%9C%A8ideweb%E4%B8%8A%E8%AF%B7%E6%B1%82%E7%9A%84%E5%9C%B0%E5%9D%80%E6%98%AF/uipreview/http%5C_120.46.182.226*7000*/%5C_/%E8%AF%B7%E6%B1%82uri" target="_blank" rel="noreferrer">http://120.46.182.226:7000/，对应在ideweb上请求的地址是/uipreview/http\\_120.46.182.226*7000*/\\_/请求uri</a></p><p>路由配置如下:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;">   server {</span></span>
<span class="line"><span style="color:#e1e4e8;">      listen  9000;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      # K8S环境才需要配置，去解析域名的。</span></span>
<span class="line"><span style="color:#e1e4e8;">      #resolver 114.114.114.114 ipv6=off;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      absolute_redirect off;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      location ~ ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        proxy_pass $1://$2:$3;</span></span>
<span class="line"><span style="color:#e1e4e8;">        sub_filter &#39;&lt;/noscript&gt;&#39; &#39;&lt;/noscript&gt;&lt;script src=&quot;/static/preview-script/preview_script_before.js&quot;&gt;&lt;/script&gt;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        sub_filter &#39;&lt;/body&gt;&#39; &#39;&lt;script src=&quot;/static/preview-script/preview_script_after.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        rewrite ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) $4/$5 break;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">          root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#e1e4e8;">          try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;">   server {</span></span>
<span class="line"><span style="color:#24292e;">      listen  9000;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      # K8S环境才需要配置，去解析域名的。</span></span>
<span class="line"><span style="color:#24292e;">      #resolver 114.114.114.114 ipv6=off;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      absolute_redirect off;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      location ~ ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) {</span></span>
<span class="line"><span style="color:#24292e;">        proxy_pass $1://$2:$3;</span></span>
<span class="line"><span style="color:#24292e;">        sub_filter &#39;&lt;/noscript&gt;&#39; &#39;&lt;/noscript&gt;&lt;script src=&quot;/static/preview-script/preview_script_before.js&quot;&gt;&lt;/script&gt;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        sub_filter &#39;&lt;/body&gt;&#39; &#39;&lt;script src=&quot;/static/preview-script/preview_script_after.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        rewrite ^/uipreview/(.*)_(.*)_(\\d*)_(.*)_/(.*) $4/$5 break;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      location / {</span></span>
<span class="line"><span style="color:#24292e;">          root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#24292e;">          try_files $uri $uri/ /index.html;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><strong>不适用情况说明:</strong><br> web端在子路径，后台接口在跟路径上。<br> 例子: 调试地址是<a href="http://120.46.182.226:7000/V9.8.0/%EF%BC%8C%E8%80%8C%E7%99%BB%E5%BD%95%E6%8E%A5%E5%8F%A3%E6%98%AFhttp://120.46.182.226:7000/api/auth/login%EF%BC%8C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E6%98%AF%E4%B8%8D%E8%A1%8C%EF%BC%9B" target="_blank" rel="noreferrer">http://120.46.182.226:7000/V9.8.0/，而登录接口是http://120.46.182.226:7000/api/auth/login，这种情况是不行；</a><br> 必须要求web端的路径和后台接口在同一个分段上。如果想让例子的情况可行，后台接口是<a href="http://120.46.182.226:7000/V9.8.0/xxx%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E6%89%8D%E8%A1%8C%E3%80%82" target="_blank" rel="noreferrer">http://120.46.182.226:7000/V9.8.0/xxx这种情况才行。</a></p>`,9),r=[l];function t(i,c,o,b,u,_){return n(),a("div",null,r)}const h=s(p,[["render",t]]);export{y as __pageData,h as default};
