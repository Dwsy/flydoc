import{_ as t,o as d,c as a,R as r}from"./chunks/framework.S1SDgkSw.js";const u=JSON.parse('{"title":"Page 表单对象","description":"","frontmatter":{"title":"Page 表单对象","date":"2020-05-19T18:27:56.000Z"},"headers":[],"relativePath":"doc/wpdoc/Page 表单对象.md","filePath":"doc/wpdoc/Page 表单对象.md"}'),e={name:"doc/wpdoc/Page 表单对象.md"},o=r('<h1 id="page-表单对象" tabindex="-1">Page 表单对象 <a class="header-anchor" href="#page-表单对象" aria-label="Permalink to &quot;Page 表单对象&quot;">​</a></h1><p>表单对象用于对表单进行操作，例如设置表单标题</p><h2 id="表单属性" tabindex="-1">表单属性 <a class="header-anchor" href="#表单属性" aria-label="Permalink to &quot;表单属性&quot;">​</a></h2><p>表单属性提供了一组可获取和设置的表单特性，用于对表单进行快捷操作。本质上属性就是不带参数的方法。</p><p>大部分的属性都可以用于获取和设置，一部分只能获取，或者只能设置。</p><table><thead><tr><th>属性</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>status</td><td>表单状态</td><td>未实现</td></tr><tr><td>title</td><td>表单标题</td><td>未实现</td></tr><tr><td>params</td><td>表单参数</td><td>未实现</td></tr></tbody></table><p>[【详情】]( <a href="http://apaas.wxchina.com:8881/2020/05/19/501/" target="_blank" rel="noreferrer">http://apaas.wxchina.com:8881/2020/05/19/501/</a>)</p><h2 id="表单控制" tabindex="-1">表单控制 <a class="header-anchor" href="#表单控制" aria-label="Permalink to &quot;表单控制&quot;">​</a></h2><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>statusIs</td><td>判断表单状态</td><td>✅</td></tr><tr><td>setTitle</td><td>设置表单标题</td><td>✅</td></tr><tr><td>getLinkParams</td><td>获取表单传参</td><td>✅</td></tr><tr><td>applyLayout</td><td>刷新表单布局</td><td>✅</td></tr></tbody></table><p><a href="./表单控制.html">【详情】</a></p><h2 id="表单值存取" tabindex="-1">表单值存取 <a class="header-anchor" href="#表单值存取" aria-label="Permalink to &quot;表单值存取&quot;">​</a></h2><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>getValue</td><td>获取单个表单内存值</td><td>✅</td></tr><tr><td>getValues</td><td>获取多个表单内存值</td><td>✅</td></tr><tr><td>setValue</td><td>设置单个表单内存值</td><td>✅</td></tr><tr><td>setValues</td><td>设置多个表单内存值</td><td>✅</td></tr><tr><td>getCtrl</td><td>获取控件对象</td><td>✅</td></tr><tr><td>getPickerCtrl</td><td>获取选项控件对象</td><td>✅</td></tr><tr><td>getArrayCtrl</td><td>获取数组控件对象</td><td>✅</td></tr></tbody></table><p><a href="./表单值存取.html">【详情】</a></p><h2 id="表单事件调用" tabindex="-1">表单事件调用 <a class="header-anchor" href="#表单事件调用" aria-label="Permalink to &quot;表单事件调用&quot;">​</a></h2><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>callEvent</td><td>调用广播事件</td><td>✅</td></tr><tr><td>runEvent</td><td>调用表单事件</td><td>✅</td></tr><tr><td>constraintCheck</td><td>检查表单合法性</td><td>✅</td></tr><tr><td>openProgress</td><td>显示进度框</td><td>✅</td></tr><tr><td>closeProgress</td><td>关闭进度框</td><td>✅</td></tr><tr><td>setLoadStatus</td><td>设置表单数据加载状态</td><td>部分实现 ✅</td></tr><tr><td>alert</td><td>弹出对话框</td><td>✅</td></tr><tr><td>linkToPage</td><td>链接到指定表单（名称）</td><td>移动端✅</td></tr><tr><td>linkToPageCode</td><td>链接到指定表单（code）</td><td>移动端✅</td></tr><tr><td>returnToPage</td><td>返回到指定表单（名称）</td><td>移动端✅</td></tr><tr><td>returnToPageCode</td><td>返回到指定表单（code）</td><td>移动端✅</td></tr><tr><td>returnToPageCount</td><td>返回指定层级的表单</td><td>移动端 ✅</td></tr><tr><td>link</td><td>链接到指定表单（code）</td><td>Web ✅</td></tr><tr><td>return</td><td>返回到上一级表单</td><td>Web ✅</td></tr></tbody></table><p><a href="./表单事件调用.html">【详情】</a></p>',16),h=[o];function l(s,n,c,i,p,_){return d(),a("div",null,h)}const P=t(e,[["render",l]]);export{u as __pageData,P as default};
