import{_ as s,o as a,c as n,R as i}from"./chunks/framework.E9w9IFh5.js";const E=JSON.parse('{"title":"Normal Page 通用表单","description":"","frontmatter":{"title":"Normal Page 通用表单","date":"2020-05-19T16:46:48.000Z"},"headers":[],"relativePath":"doc/wpdoc/Normal Page 通用表单.md","filePath":"doc/wpdoc/Normal Page 通用表单.md"}'),e={name:"doc/wpdoc/Normal Page 通用表单.md"},l=i(`<h2 id="normal-page-通用表单" tabindex="-1">Normal Page 通用表单 <a class="header-anchor" href="#normal-page-通用表单" aria-label="Permalink to &quot;Normal Page 通用表单&quot;">​</a></h2><p>对于所有的表单来讲，主要的组成部分如下</p><blockquote><p>功能表单的基本组成结构与普通表单一致，只是附加了部分特有的信息。</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;pageinfo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;view&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;body&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;menu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;presenter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;initial&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;preprocessor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;addition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;interface&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;handlers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;businessmodel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="pageinfo" tabindex="-1">pageinfo <a class="header-anchor" href="#pageinfo" aria-label="Permalink to &quot;pageinfo&quot;">​</a></h2><p>此处定义表单的整体的一些信息，包含表单标题，ID，表单的加载事件等</p><p>关于更多详细属性的说明，请参看<a href="./PageInfo.html">pageinfo 属性说明</a></p><h2 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h2><p>这部分是关于表单的显示的UI的定义，是由各种控件相互嵌套组合后，共同确定表单的显示的样子。</p><p>控件显示的布局是根据标准的 <code>flexbox</code> 布局规则来处理的。</p><p>更详细的说明请查看 <a href="./View.html">view 属性说明</a></p><h2 id="presenter" tabindex="-1">presenter <a class="header-anchor" href="#presenter" aria-label="Permalink to &quot;presenter&quot;">​</a></h2><p>这部分为表单逻辑的配置模块，所有的控件的取值，赋值，按钮行为的处理等等，都是在这里定义</p><p>更详细的说明请查看 <a href="./../Actions/Presenter/Presenter.html">presenter 说明</a></p><h2 id="businessmodel" tabindex="-1">businessmodel <a class="header-anchor" href="#businessmodel" aria-label="Permalink to &quot;businessmodel&quot;">​</a></h2><p>这部分为该表单所用到的业务模型的描述</p><p>更详细的说明请查看 <a href="./businessmodel.html">businessmodel 说明</a></p>`,17),p=[l];function t(r,h,o,k,d,c){return a(),n("div",null,p)}const b=s(e,[["render",t]]);export{E as __pageData,b as default};
