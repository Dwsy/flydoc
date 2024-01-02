import{_ as a,c as p,o as e,U as s}from"./chunks/framework.K-r7inPk.js";const m=JSON.parse('{"title":"iOS数据库调试教程","description":"","frontmatter":{"title":"iOS数据库调试教程","date":"2020-06-11T11:01:24.000Z"},"headers":[],"relativePath":"doc/wpdoc/iOS数据库调试教程.md","filePath":"doc/wpdoc/iOS数据库调试教程.md"}'),i={name:"doc/wpdoc/iOS数据库调试教程.md"},n=s(`<h2 id="ios数据库调试教程" tabindex="-1">iOS数据库调试教程 <a class="header-anchor" href="#ios数据库调试教程" aria-label="Permalink to &quot;iOS数据库调试教程&quot;">​</a></h2><h4 id="_1-同时打开手机app的开发模式和开启数据库调试功能开关" tabindex="-1">1. 同时打开手机app的开发模式和开启数据库调试功能开关 <a class="header-anchor" href="#_1-同时打开手机app的开发模式和开启数据库调试功能开关" aria-label="Permalink to &quot;1\\. 同时打开手机app的开发模式和开启数据库调试功能开关&quot;">​</a></h4><ul><li><p>“数据库调试功能&quot; 开关只能单独控制数据库调试功能</p></li><li><p>&quot;开启&quot;开关关闭时也会数据库调试功能也会关闭</p></li><li><p>建议：只有在使用数据调试时才打开 &quot;数据库调试功能&quot; 开关，不再使用时请关闭此开关，否则可能会增加手机的负担 <img src="http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9482.png" alt=""><img src="http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9483.png" alt=""></p></li></ul><h4 id="_2-手机使用wifi-在设置里获取手机的ip地址-如-192-16-102-230" tabindex="-1">2. 手机使用wifi，在设置里获取手机的ip地址(如：192.16.102.230) <a class="header-anchor" href="#_2-手机使用wifi-在设置里获取手机的ip地址-如-192-16-102-230" aria-label="Permalink to &quot;2\\. 手机使用wifi，在设置里获取手机的ip地址(如：192.16.102.230)&quot;">​</a></h4><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9480.png" alt=""> <img src="http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9481.png" alt=""></p><h4 id="_3-使用电脑浏览器输入步骤2中获取的ip-端口号-9002-如-192-16-102-230-9002" tabindex="-1">3. 使用电脑浏览器输入步骤2中获取的ip+端口号(9002)(如：192.16.102.230:9002) <a class="header-anchor" href="#_3-使用电脑浏览器输入步骤2中获取的ip-端口号-9002-如-192-16-102-230-9002" aria-label="Permalink to &quot;3\\. 使用电脑浏览器输入步骤2中获取的ip+端口号(9002)(如：192.16.102.230:9002)&quot;">​</a></h4><p>注意：进行此操作时，app需要在前台运行(即手机屏幕显示的为我们的app)</p><ul><li><p>Query：需要查询的语句，输入查询语句后，点击Run Query 按钮即可查询选中的数据库的数据，结果展示在Data栏</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：使用query要首先正确选中对应的数据库的和表，否则可能无法正确查到数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Databases： 对应数据库的名称</p></li><li><p>Tables：选中数据库中的表</p></li><li><p>Data：选中的对应的数据库中的对应的表中的数据，或者是查询的数据</p><ul><li><p>Edit： 可以编辑选中数据库中的某一条数据</p></li><li><p>Delete：可以删除选中数据库中的某一条数据</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>注意：</span></span>
<span class="line"><span>1. 使用Ddit和Delete之前需要先使用鼠标点击选中需要操作的数据，否则Ddit和Delete按钮为灰色，</span></span>
<span class="line"><span>不可点击，只有选中要操作的某条数据后方可点击。</span></span>
<span class="line"><span>2. 在使用过程中手机不能锁屏，也不能退到后台，否则出现连接不到数据库的问题。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul></li></ul><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/IMG_9485.png" alt=""></p>`,9),t=[n];function l(o,c,r,d,u,h){return e(),p("div",null,t)}const b=a(i,[["render",l]]);export{m as __pageData,b as default};
