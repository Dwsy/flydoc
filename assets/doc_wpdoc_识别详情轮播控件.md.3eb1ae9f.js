import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.aac09c5f.js";const g=JSON.parse('{"title":"识别详情轮播控件","description":"","frontmatter":{"title":"识别详情轮播控件","date":"2021-08-11T15:51:17.000Z"},"headers":[],"relativePath":"doc/wpdoc/识别详情轮播控件.md","filePath":"doc/wpdoc/识别详情轮播控件.md"}'),p={name:"doc/wpdoc/识别详情轮播控件.md"},l=n(`<h1 id="识别详情轮播控件" tabindex="-1">识别详情轮播控件 <a class="header-anchor" href="#识别详情轮播控件" aria-label="Permalink to &quot;识别详情轮播控件&quot;">​</a></h1><p>为避免每次AI识别详情页，都需要通过H5定制开发，智慧100开发出“识别详情轮播控件”，又名：“鹏胜-识别详情轮播控件”。</p><p>控件具体配置项，可以咨询智慧100产品开发：王志鹏、谢胜金</p><h2 id="应用场景-使用须知" tabindex="-1">应用场景 使用须知 <a class="header-anchor" href="#应用场景-使用须知" aria-label="Permalink to &quot;应用场景 使用须知&quot;">​</a></h2><ol><li>本组件适用于手机端需要进行图片轮播展示，ai识别结果绘制，图片预览需求场景；</li><li>本组件使用 h5 页面开发，引入时需使用interactivewebview 交互式网页控件进行载入和交互，使用前请了解 interactivewebview 使用方式，具体使用方式请参见interactivewebview文档;</li><li>本组件打包方式分为集成打包与独立打包版本，集成打包资源目录为 x-retail-appeal，独立打包资源目录为swiper,使用集成打包方式需要手动设置路由跳转至控件页面；</li><li>本组件使用示例请参考智慧100标准产品拜访流识别详情页面，具体效果见文末。</li></ol><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><p>1、在IDE文件管理中上传x-retail-appeal.zip(集成打包)或swipper.zip(独立打包)文件资源包；<br> 2、在页面中添加 interactivewebview，并配置资源所在目录 x-retail-appeal(集成打包)或者设置为swipper(独立打包)；</p><p>3、webviwe 自定义事件<br> • 配置图例<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E5%9B%BE%E4%BE%8B.png" alt=""></p><p>• loadAppData 资源包加载时调用，使用 flycode 设置页面路由跳转至swipper页面(集成打包时需配置，独立打包无需配置)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: &#39;swiper&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;__interactive_key&quot;: &quot;setPageRouter&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: &#39;swiper&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;__interactive_key&quot;: &quot;setPageRouter&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>• init 事件，控件加载时调用，可进行数据设置，各项数据配置效果见文末；</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type SkuInfo = {} // AI识别结果中SkuInfo</span></span>
<span class="line"><span style="color:#e1e4e8;">type ImageData = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  imageUrl: string; // 必填</span></span>
<span class="line"><span style="color:#e1e4e8;">  result: string; // 选填，图片计算是否合格等结果，当传入此字段会在右上角标识</span></span>
<span class="line"><span style="color:#e1e4e8;">  skus: SkuInfo[]; // 选填，当传入此字段时会使用控件自身绘制能力进行sku框选绘制</span></span>
<span class="line"><span style="color:#e1e4e8;">  waterMark: string; // 选填，水印信息，当传入此字段时会再图片上绘制水印</span></span>
<span class="line"><span style="color:#e1e4e8;">  waterMarkColor: string; // 选填，hex格式水印颜色，默认#000000</span></span>
<span class="line"><span style="color:#e1e4e8;">  cornerMark: boolean; // 选填， 使用绘制角标，当为true 时会将skuname作为角标绘制在sku框上方</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: ImageData[],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;__interactive_key&quot;: &quot;setData&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type SkuInfo = {} // AI识别结果中SkuInfo</span></span>
<span class="line"><span style="color:#24292e;">type ImageData = {</span></span>
<span class="line"><span style="color:#24292e;">  imageUrl: string; // 必填</span></span>
<span class="line"><span style="color:#24292e;">  result: string; // 选填，图片计算是否合格等结果，当传入此字段会在右上角标识</span></span>
<span class="line"><span style="color:#24292e;">  skus: SkuInfo[]; // 选填，当传入此字段时会使用控件自身绘制能力进行sku框选绘制</span></span>
<span class="line"><span style="color:#24292e;">  waterMark: string; // 选填，水印信息，当传入此字段时会再图片上绘制水印</span></span>
<span class="line"><span style="color:#24292e;">  waterMarkColor: string; // 选填，hex格式水印颜色，默认#000000</span></span>
<span class="line"><span style="color:#24292e;">  cornerMark: boolean; // 选填， 使用绘制角标，当为true 时会将skuname作为角标绘制在sku框上方</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: ImageData[],</span></span>
<span class="line"><span style="color:#24292e;">    &quot;__interactive_key&quot;: &quot;setData&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>• onChange 事件，当图片切换时调用，将当前图片 index 回传页面</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var index = IN.index</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var index = IN.index</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>• onPreview 事件，当图片点击时的事件，将当前图片地址回传页面(当使用绘制功能时，回传base64过大可能会导致无法加载问题)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var imageUrl = IN.ImageUrl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var imageUrl = IN.ImageUrl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>4、Flycode设置控件数据事件__interactive_key</p><p>• setData 事件，设置控件整体数据，data 格式为 ImageData数组，参见 init 事件;</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: ImageData[],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;__interactive_key&quot;: &quot;setData&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: ImageData[],</span></span>
<span class="line"><span style="color:#24292e;">    &quot;__interactive_key&quot;: &quot;setData&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>• setCurrentData 事件，设置当前图片数据，用于动态改变当前图片信息， data 格式为 ImageData,参见 init 事件;</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: ImageData,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;__interactive_key&quot;: &quot;setCurrentData&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: ImageData,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;__interactive_key&quot;: &quot;setCurrentData&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>• setIndex 事件，设置当前轮播图片， data 格式为数组下标；</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;__interactive_key&quot;: &quot;setIndex&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: 0,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;__interactive_key&quot;: &quot;setIndex&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>• setMode 事件，设置当前模式， 默认为swiper模式，可选为periew, 当设置为preview时会变成图片预览模式；</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: &#39;swiper&#39;, // 可选值 &#39;preview&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;__interactive_key&quot;: &quot;setMode&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Page.getCtrl(&#39;webview控件名&#39;).value = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: &#39;swiper&#39;, // 可选值 &#39;preview&#39;</span></span>
<span class="line"><span style="color:#24292e;">    &quot;__interactive_key&quot;: &quot;setMode&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>各项数据设置效果<br> 大图预览模式<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E6%95%88%E6%9E%9C.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%85%8D%E7%BD%AE%E6%95%88%E6%9E%9C2.png" alt=""></p>`,26),t=[l];function o(i,r,c,u,d,b){return a(),e("div",null,t)}const y=s(p,[["render",o]]);export{g as __pageData,y as default};
