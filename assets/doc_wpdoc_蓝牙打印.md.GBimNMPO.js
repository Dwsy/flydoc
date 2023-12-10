import{_ as t,o as a,c as i,R as s}from"./chunks/framework.S1SDgkSw.js";const E=JSON.parse('{"title":"蓝牙打印","description":"","frontmatter":{"title":"蓝牙打印","date":"2020-05-22T15:56:35.000Z"},"headers":[],"relativePath":"doc/wpdoc/蓝牙打印.md","filePath":"doc/wpdoc/蓝牙打印.md"}'),n={name:"doc/wpdoc/蓝牙打印.md"},e=s(`<h1 id="蓝牙打印" tabindex="-1">蓝牙打印 <a class="header-anchor" href="#蓝牙打印" aria-label="Permalink to &quot;蓝牙打印&quot;">​</a></h1><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/BluetoothPrint.png" alt=""></p><h1 id="协议" tabindex="-1">协议 <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议&quot;">​</a></h1><p>蓝牙打印使用一个专用的行为，将指定的需要打印的内容转换为打印数据，并显示打印预览界面。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;897995503285964871&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;print&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;pagecode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5464646454556465&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ctrlcode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;printmode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;printermodel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;custom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;printerinfo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;printer name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;instruction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ESC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;printwidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;63.5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;dpi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;180&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;servicesid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;******&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;writeid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;******&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;buffering&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h2><h3 id="pagecode-打印表单" tabindex="-1">pagecode 打印表单 <a class="header-anchor" href="#pagecode-打印表单" aria-label="Permalink to &quot;pagecode 打印表单&quot;">​</a></h3><p>用于指定打印哪个表单，当该值为空的时候表示打印当前表单。</p><p>蓝牙打印会将该表单的内容转换为图片进行打印。</p><h3 id="ctrlcode-打印控件" tabindex="-1">ctrlcode 打印控件 <a class="header-anchor" href="#ctrlcode-打印控件" aria-label="Permalink to &quot;ctrlcode 打印控件&quot;">​</a></h3><p>用于指定打印表单中的哪个控件用于打印，当值为空的时候表示打印整个表单，也可以指定一个layout或者panel，或者一个table之类的控件来表示只打印该控件。</p><p>默认值为空。</p><h3 id="printmode-打印方式" tabindex="-1">printmode 打印方式 <a class="header-anchor" href="#printmode-打印方式" aria-label="Permalink to &quot;printmode 打印方式&quot;">​</a></h3><p>根据打印机的打印速度，以及用户的需求，目前有两种打印数据的方式</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>image</td><td>将打印的表单转换为图片，然后使用图片打印指令进行打印。这种打印方式能过完全根据表单的显示效果进行打印，可以做到既见既所得，支持丰富的布局方式，字体排版等。 不过缺点就是打印速度较慢，对于部分指令接收速度较慢的机器不适用（例如EXP342）</td></tr><tr><td>text</td><td>将打印的表单转为纯文本打印。这种打印方式能够快速的打印。缺点是布局简陋，不能设置字体，预览效果可能和打印效果有所出入。（打印机一般支持设置有限的几种字体大小，但不同打印机支持的字体不一样，且指令也可能不同，多种字体会导致适配难度增加）</td></tr></tbody></table><p>以上两种打印方式理论上来讲都能自动适应不同型号的打印机，能很好的降低配置难度。默认值为image</p><h3 id="printermodel-打印机型号" tabindex="-1">printermodel 打印机型号 <a class="header-anchor" href="#printermodel-打印机型号" aria-label="Permalink to &quot;printermodel 打印机型号&quot;">​</a></h3><p>通过该属性指定打印机的型号，可以设置内置的打印机型号，这样将会使用内置的属性，忽略printerinfo中的打印属性。也可以设置为自定义型号，由用户填写相关属性</p><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>custom</td><td>默认值，用户自定义型号，需要用户详细配置打印机相关的必要属性</td></tr><tr><td>PP_76D</td><td>映美PP-76D，详细属性参看下方说明</td></tr><tr><td>GP_58MBIII</td><td>佳博GP_58MBIII，详细属性参看下方说明</td></tr><tr><td>START</td><td></td></tr><tr><td>EXP342</td><td></td></tr></tbody></table><h3 id="printerinfo-打印机信息" tabindex="-1">printerinfo 打印机信息 <a class="header-anchor" href="#printerinfo-打印机信息" aria-label="Permalink to &quot;printerinfo 打印机信息&quot;">​</a></h3><p>只有在打印机型号为自定义型号时才需要填写这些信息</p><h4 id="name-打印机名称" tabindex="-1">name 打印机名称 <a class="header-anchor" href="#name-打印机名称" aria-label="Permalink to &quot;name 打印机名称&quot;">​</a></h4><p>用于搜索打印机的关键字，只要搜索到的打印机的名称中包含该属性值，就会被列出。</p><p>如果该属性为空，则会列出所有搜索到的设备。</p><h4 id="instruction-打印指令" tabindex="-1">instruction 打印指令 <a class="header-anchor" href="#instruction-打印指令" aria-label="Permalink to &quot;instruction 打印指令&quot;">​</a></h4><p>不同的指令集支持的打印功能不同，直接影响预览效果，例如ESC只支持字体一倍大小的缩放，而CPCL支持1-16倍。</p><table><thead><tr><th>值</th><th>-</th></tr></thead><tbody><tr><td>ESC</td><td></td></tr><tr><td>CPCL</td><td></td></tr></tbody></table><h4 id="printwidth-有效打印宽度" tabindex="-1">printwidth 有效打印宽度 <a class="header-anchor" href="#printwidth-有效打印宽度" aria-label="Permalink to &quot;printwidth 有效打印宽度&quot;">​</a></h4><p>用于设置实际有效的打印宽度，通常比纸张宽度要小，单位为 <code>mm</code> ， 不能为空。</p><h4 id="servicesid-打印服务id" tabindex="-1">servicesid 打印服务ID <a class="header-anchor" href="#servicesid-打印服务id" aria-label="Permalink to &quot;servicesid 打印服务ID&quot;">​</a></h4><p>用于指定该设备的打印服务的ID，用于连接打印服务，不能为空。</p><h4 id="writeid-指令写入属性id" tabindex="-1">writeid 指令写入属性ID <a class="header-anchor" href="#writeid-指令写入属性id" aria-label="Permalink to &quot;writeid 指令写入属性ID&quot;">​</a></h4><p>用于指定该设备打印服务的写入属性的ID，用于最终发送指令，不能为空</p><h4 id="buffering-指令是否需要使用缓存" tabindex="-1">buffering 指令是否需要使用缓存 <a class="header-anchor" href="#buffering-指令是否需要使用缓存" aria-label="Permalink to &quot;buffering 指令是否需要使用缓存&quot;">​</a></h4><p>对于部分打印机一次接收的指令长度有限制，需要进行缓存后拆分。</p><h1 id="打印技术说明" tabindex="-1">打印技术说明 <a class="header-anchor" href="#打印技术说明" aria-label="Permalink to &quot;打印技术说明&quot;">​</a></h1><p>根据打印机的打印宽度（mm）和dpi，可以得到打印的点数：</p><p><code>printpoints = round(0.0393701 * printwidth * dpi)</code></p><p>根据点数可以决定打印的宽度。</p><p>每行可打印的默认大小的中文字符的个数为<br><code>textcount = round(printpoints/24)</code></p><h1 id="内置打印机型号" tabindex="-1">内置打印机型号 <a class="header-anchor" href="#内置打印机型号" aria-label="Permalink to &quot;内置打印机型号&quot;">​</a></h1><h2 id="pp-76d" tabindex="-1">PP_76D <a class="header-anchor" href="#pp-76d" aria-label="Permalink to &quot;PP\\_76D&quot;">​</a></h2><p>映美PP_76D便携式微型针式打印机。</p><p>相关内置属性如下</p><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>name</td><td>PP-76D</td></tr><tr><td>instruction</td><td>ESC</td></tr><tr><td>printwidth</td><td>63.5mm</td></tr><tr><td>dpi</td><td>180</td></tr><tr><td>servicesid</td><td>FF00</td></tr><tr><td>writeid</td><td>FF02</td></tr><tr><td>buffering</td><td>0</td></tr></tbody></table><h2 id="start" tabindex="-1">START <a class="header-anchor" href="#start" aria-label="Permalink to &quot;START&quot;">​</a></h2><p>相关内置属性如下</p><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>name</td><td>START</td></tr><tr><td>instruction</td><td>CPCL</td></tr><tr><td>printwidth</td><td>72</td></tr><tr><td>dpi</td><td>203</td></tr><tr><td>servicesid</td><td>FF00</td></tr><tr><td>writeid</td><td>FF02</td></tr><tr><td>buffering</td><td>0</td></tr></tbody></table><h2 id="exp342" tabindex="-1">EXP342 <a class="header-anchor" href="#exp342" aria-label="Permalink to &quot;EXP342&quot;">​</a></h2><p>相关内置属性如下</p><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>name</td><td>EXP342</td></tr><tr><td>instruction</td><td>ESC</td></tr><tr><td>printwidth</td><td>72</td></tr><tr><td>dpi</td><td>203</td></tr><tr><td>servicesid</td><td>49535343-FE7D-4AE5-8FA9-9FAFD205E455</td></tr><tr><td>writeid</td><td>49535343-8841-43F4-A8D4-ECBE34729BB3</td></tr><tr><td>buffering</td><td>1</td></tr></tbody></table><h2 id="gp-58mbiii" tabindex="-1">GP_58MBIII <a class="header-anchor" href="#gp-58mbiii" aria-label="Permalink to &quot;GP\\_58MBIII&quot;">​</a></h2><p>佳博GP_58MBIII热敏票据打印机。</p><p>相关内置属性如下</p><table><thead><tr><th>属性</th><th>值</th></tr></thead><tbody><tr><td>name</td><td>Printer_C07A</td></tr><tr><td>instruction</td><td>ESC</td></tr><tr><td>printwidth</td><td>48</td></tr><tr><td>dpi</td><td>203</td></tr><tr><td>servicesid</td><td>49535343-FE7D-4AE5-8FA9-9FAFD205E455</td></tr><tr><td>writeid</td><td>49535343-8841-43F4-A8D4-ECBE34729BB3</td></tr><tr><td>buffering</td><td>0</td></tr></tbody></table><h1 id="支持打印的控件" tabindex="-1">支持打印的控件 <a class="header-anchor" href="#支持打印的控件" aria-label="Permalink to &quot;支持打印的控件&quot;">​</a></h1><p><strong>支持打印的独立控件</strong></p><p>文字，文本输入，大文本输入，数字输入，日期，图标，图片，图形码。</p><p><strong>支持打印的容器控件</strong></p><p>表格</p>`,60),r=[e];function d(h,p,l,o,k,c){return a(),i("div",null,r)}const b=t(n,[["render",d]]);export{E as __pageData,b as default};
