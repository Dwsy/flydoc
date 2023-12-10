import{_ as s,o as a,c as i,R as t}from"./chunks/framework.S1SDgkSw.js";const u=JSON.parse('{"title":"photo（new2020.9）","description":"","frontmatter":{"title":"photo（new2020.9）","date":"2020-09-27T11:12:10.000Z"},"headers":[],"relativePath":"doc/wpdoc/photo（new2020.9）.md","filePath":"doc/wpdoc/photo（new2020.9）.md"}'),n={name:"doc/wpdoc/photo（new2020.9）.md"},e=t(`<h1 id="photo" tabindex="-1">Photo <a class="header-anchor" href="#photo" aria-label="Permalink to &quot;Photo&quot;">​</a></h1><p>用于获取用户照片的控件，可以拍照或者从手机相册中选取， web端可以直接上传图片</p><p>同时也可以用来展示由用户上传的图片。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Photo_Plain.png" alt="photo1"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Photo_Free.png" alt="photo1"></p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;photo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ctrl_photo_contractphoto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;合同拍照&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maxnumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;compression&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fly:datetime()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermarkposition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermarkstyle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermarkcomposite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermarkrequired&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermarkalbumfree&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;consecutive&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;steady&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;tags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;duplicating&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;翻&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;bgcolor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;red&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stitching&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;拼&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;bgcolor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blue&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;eventlist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handler_loaddetail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onvaluechanged&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;handler&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handler_clickimage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;trigger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onclicked&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><blockquote><p>拍照和水印相关属性只在手机端有效，包括以下属性</p><p>source，watermarkposition，watermarkstyle，watermarkalbumfree，consecutive，watermarkrequired，watermarkcomposite</p></blockquote><h3 id="maxnumber" tabindex="-1">maxnumber <a class="header-anchor" href="#maxnumber" aria-label="Permalink to &quot;maxnumber&quot;">​</a></h3><p>可保存拍照控件最大张数，默认为1可拍一张。</p><h3 id="compression" tabindex="-1">compression <a class="header-anchor" href="#compression" aria-label="Permalink to &quot;compression&quot;">​</a></h3><p>压缩程度</p><table><thead><tr><th>取值</th><th>说明</th><th>图片大致大小</th><th>图片指导尺寸</th></tr></thead><tbody><tr><td>0</td><td>最大压缩</td><td>10K左右</td><td></td></tr><tr><td>1</td><td>1级压缩（手机端默认值）</td><td>30K左右</td><td></td></tr><tr><td>2</td><td>2级压缩</td><td>90K左右</td><td></td></tr><tr><td>3</td><td>3级压缩</td><td>200K左右</td><td></td></tr><tr><td>4</td><td>4级压缩</td><td>500K左右</td><td></td></tr><tr><td>5</td><td>5级压缩</td><td>1M左右</td><td></td></tr><tr><td>10</td><td>无压缩（web端默认值）</td><td>原图</td><td></td></tr></tbody></table><h3 id="source" tabindex="-1">source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;source&quot;">​</a></h3><p>照片来源</p><table><thead><tr><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>默认值，从相机获取</td></tr><tr><td>1</td><td>从相册获取</td></tr><tr><td>2</td><td>从相机或者相册获取</td></tr></tbody></table><h3 id="watermark" tabindex="-1">watermark <a class="header-anchor" href="#watermark" aria-label="Permalink to &quot;watermark&quot;">​</a></h3><p>照片水印</p><h3 id="watermarkrequired" tabindex="-1">watermarkrequired <a class="header-anchor" href="#watermarkrequired" aria-label="Permalink to &quot;watermarkrequired&quot;">​</a></h3><p>水印必填，bool值，默认值为0，表示水印不是必须的，此时即便水印没有正常生成也能拍照。</p><p>如果值为1，则表示水印必填，此时如果水印生成中或者生成失败时，不能拍照。</p><h3 id="watermarkposition" tabindex="-1">watermarkposition <a class="header-anchor" href="#watermarkposition" aria-label="Permalink to &quot;watermarkposition&quot;">​</a></h3><p>指定水印显示位置，默认值为 <code>bottom</code></p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>bottom</td><td>下方，左对齐，占据左边三分之二的区域</td></tr><tr><td>center</td><td>居中，左对齐，占据左边三分之二的区域</td></tr><tr><td>top</td><td>上方，左对齐，占据左边三分之二的区域</td></tr><tr><td></td><td></td></tr></tbody></table><h3 id="watermarkstyle" tabindex="-1">watermarkstyle <a class="header-anchor" href="#watermarkstyle" aria-label="Permalink to &quot;watermarkstyle&quot;">​</a></h3><p>水印显示的样式，默认值为 <code>clear</code></p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>clear</td><td>直接覆盖在图片之上，白色，黑色阴影</td></tr><tr><td>darken (未实现)</td><td>将使用dark blend模式，白色，黑色阴影</td></tr><tr><td>translucent（web端）</td><td>半透明，在clear的基础上添加20%的透明度</td></tr></tbody></table><blockquote><p>字体大小目前为统一的算法：<code>max(11, ceil(image.width/25))</code></p><p>web端在 watermarkcomposite == attached 时支持该属性的解析实现</p></blockquote><h3 id="watermarkcomposite" tabindex="-1">watermarkcomposite <a class="header-anchor" href="#watermarkcomposite" aria-label="Permalink to &quot;watermarkcomposite&quot;">​</a></h3><p>水印合成方式，默认值为 <code>blended</code> 。</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>blended</td><td>水印直接合成在原始图片上</td></tr><tr><td>attached</td><td>水印存储在照片的值当中，需要在显示的时候临时合成</td></tr></tbody></table><blockquote><p><s>attached 模式下，watermarkposition 和 watermarkstyle 将不支持配置，使用其默认值来实现</s></p></blockquote><h3 id="watermarkalbumfree" tabindex="-1">watermarkalbumfree <a class="header-anchor" href="#watermarkalbumfree" aria-label="Permalink to &quot;watermarkalbumfree&quot;">​</a></h3><p>相册图片不使用水印，bool值，用于控制从相册选择照片时是否不需要生成水印。</p><p>默认为 <code>0</code>，即需要生成水印。</p><h3 id="consecutive" tabindex="-1">consecutive <a class="header-anchor" href="#consecutive" aria-label="Permalink to &quot;consecutive&quot;">​</a></h3><p>临时属性，用于标记是否使用连续拍照相机。主要是用于过度期间测试新相机功能。等新相机稳定后则去除该属性。默认值为 <code>0</code> ，即使用旧相机。</p><h3 id="steady" tabindex="-1">steady <a class="header-anchor" href="#steady" aria-label="Permalink to &quot;steady&quot;">​</a></h3><p>【暂不实现】</p><p>稳定值，用于控制 <strong>非当前拍照</strong> 数据是否可编辑，默认为 <code>0</code> ，表示不可编辑。</p><p><strong>非当前拍照</strong> 是指不是当前表单中用户使用添加按钮添加的照片。当值为 <code>1</code> 时，这些照片不能被手动删除，会在缩略图右上角显示一个灰色半透明角标。</p><h3 id="storage" tabindex="-1">storage <a class="header-anchor" href="#storage" aria-label="Permalink to &quot;storage&quot;">​</a></h3><p>附件（图片，文件等）在后台的存储位置，用于指导所提交的数据中的附件的最终位置，影响其存储生命周期。</p><table><thead><tr><th>值</th><th>标题</th><th>说明</th></tr></thead><tbody><tr><td>storage</td><td>默认</td><td>默认值，永久保存或兼容旧环境</td></tr><tr><td>storage-3m</td><td>临时</td><td>3分钟</td></tr><tr><td>storage-1d</td><td>1天</td><td>24小时</td></tr><tr><td>storage-1y</td><td>1年</td><td>365天</td></tr></tbody></table><p>详情请参看 <a href="http://172.16.0.141/aPaaS-OpenDoc/Markdown/blob/master/BizEngine/baseServ/file3rd.md" target="_blank" rel="noreferrer">阿里云存储服务</a></p><h3 id="tags" tabindex="-1">tags <a class="header-anchor" href="#tags" aria-label="Permalink to &quot;tags&quot;">​</a></h3><p>【目前只在web端支持】</p><p>标签定义，用于定义该控件支持的标签信息，会配合value中的tags字段使用。</p><p>显示样式如下：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/photoTags.png" alt=""></p><p><em>目前 tag 只支持在缩略图中显示，默认字体大小为14，背景大小为18x18</em></p><ul><li><p>key</p><p>tag的key，用于匹配value中的tags中的key值</p></li><li><p>text</p><p>显示的文字，目前只支持输入一个文字或字符</p></li><li><p>icon</p><p>【暂不支持】</p><p>显示的图标，如果有图标将会忽略文字</p></li><li><p>color</p><p>控制文字或图标的颜色</p><p>该属性值为空的时候，默认使用white</p></li><li><p>bgcolor</p><p>控制背景矩形的填充颜色</p><p>该属性值为空的时候，默认使用blue</p></li></ul><h2 id="eventlist" tabindex="-1">eventlist <a class="header-anchor" href="#eventlist" aria-label="Permalink to &quot;eventlist&quot;">​</a></h2><h3 id="onvaluechanged" tabindex="-1">onvaluechanged <a class="header-anchor" href="#onvaluechanged" aria-label="Permalink to &quot;onvaluechanged&quot;">​</a></h3><p>值改变事件，当拍照控件的值发生变化时触发，包括删除照片或确认拍摄一张新照片。</p><h3 id="onclicked" tabindex="-1">onclicked <a class="header-anchor" href="#onclicked" aria-label="Permalink to &quot;onclicked&quot;">​</a></h3><p>图片点击事件，只在控件只读时有效。</p><p>如果控件只读，且配置了onclicked 事件，那么点击缩略图片后将执行对应的事件，而不是打开大图查看。</p><p><em>该功能目前只在web端实现</em></p><h2 id="value-format" tabindex="-1">Value Format <a class="header-anchor" href="#value-format" aria-label="Permalink to &quot;Value Format&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxxx.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;datetime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;845623154531&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;latitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123.12345&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;longitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123.12345&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广州市天河区体育西路101号32楼&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;watermark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018-01-02 18:22 广州市天河区体育西路101号32楼&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;tags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;duplicating&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><p>source</p><p>存储图片文件的名称。</p></li><li><p>datetime</p><p>照片拍摄的时间的时间戳</p></li><li><p>latitude , longitude, address</p><p>拍照位置，拍照控件将会默认自动在拍照时获取定位信息，该定位在打开相机时开始定位，定位完成后作为拍照控件的值的一部分存储在拍照控件中。</p><p>多张拍照时，该信息共享第一张拍照时的定位信息。</p><p>该信息不强制要求成功获取。</p><blockquote><p>暂未实现</p></blockquote></li><li><p>watermark</p><p>自定义照片的水印，只在 <code>watermarkcomposite == attached</code> 时有效</p></li><li><p>storage</p><p>照片存储位置。</p><p>取值时，直接使用控件属性 <code>storage</code> 的值；赋值时优先使用该值进行图片下载。</p></li></ul><table><thead><tr><th>手机端</th><th>控件值是否有水印信息</th><th>照片上是否有水印</th><th>web端是否临时合成水印</th></tr></thead><tbody><tr><td>临时</td><td>有</td><td>无</td><td>合成</td></tr><tr><td>需要</td><td>无</td><td>无</td><td>不合</td></tr><tr><td>不需要</td><td>有</td><td>有</td><td>不合</td></tr><tr><td>不需要</td><td>无</td><td>有</td><td>不合</td></tr></tbody></table><ul><li><p>tags</p><p>照片附加的标签的key。如果没有该字段，或者该字段为空，则照片不用附加标签。如果该字段有值，则显示控件属性 <code>tags</code> 中对应 <code>key</code> 值的标签。</p><p><em>目前只支持一张照片一个tag</em></p></li></ul><h2 id="value-component" tabindex="-1">Value Component <a class="header-anchor" href="#value-component" aria-label="Permalink to &quot;Value Component&quot;">​</a></h2><ul><li><p>fileinfo</p><blockquote><p>用于使用flycode提交图片的时候获取本地图片位置信息</p><p>只在手机端支持</p></blockquote><p>获取文件的本地信息，包含完整路径和时间戳</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;filepath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;datetime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;watermark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广州市天河区&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;storage&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>clickedinfo</p><p><code>uiflycode</code></p><p>获取用户最近一次点击的那一张图片的信息，通常和 <code>onclicked</code> 事件搭配使用，获取到的值如下：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxxx.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;datetime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;845623154531&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;latitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123.12345&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;longitude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123.12345&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;广州市天河区体育西路101号32楼&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;watermark&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2018-01-02 18:22 广州市天河区体育西路101号32楼&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;storage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;tag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;duplicating&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;index&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>即，获取到点击图片的value值，再附加上该图片的所在位置 <code>index</code></p><p>index代表被点击的图片在第几张，第一张图片的 index = 0</p><p>如果没有任何照片被点击，则获取到的值为空字符串。</p></li></ul><h1 id="水印的处理" tabindex="-1">水印的处理 <a class="header-anchor" href="#水印的处理" aria-label="Permalink to &quot;水印的处理&quot;">​</a></h1><h2 id="水印支持的种类" tabindex="-1">水印支持的种类 <a class="header-anchor" href="#水印支持的种类" aria-label="Permalink to &quot;水印支持的种类&quot;">​</a></h2><h3 id="内置水印" tabindex="-1">内置水印 <a class="header-anchor" href="#内置水印" aria-label="Permalink to &quot;内置水印&quot;">​</a></h3><p>【暂不支持】</p><p>内置水印只需要通过简单勾选就能进行常见的水印配置，目前支持的内置水印选项有：</p><table><thead><tr><th>选项</th><th>表达式示例</th><th>说明</th></tr></thead><tbody><tr><td>时间</td><td>datetime:yyyy-MM-dd HH:mm</td><td>拍照的时间，支持配置具体的时间格式</td></tr><tr><td>定位</td><td>location</td><td>当前的定位地址</td></tr><tr><td>人员</td><td>username</td><td>当前账号的人员名称</td></tr><tr><td>表单名称</td><td>pagename</td><td>当前控件所在的表单名称</td></tr><tr><td>控件值</td><td>ctrlvalue:34562523452345</td><td>指定控件的值，可以配置多个</td></tr></tbody></table><p>每个水印选项由一对大括号 <code>{}</code> 包裹，每个水印选项在显示时占据一行的位置</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 内置水印示例</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 包含一个控件值,定位和时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wm:{</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">ctrlvalue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34562523452345</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}{</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">datetime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>时间</p><p>默认的表达为 <code>{datetime}</code> ，用于获取拍照时的时间，多张拍照时，每张照片的时间单独获取。</p><p>默认的时间格式为 <code>yyyy-MM-dd HH:mm</code> 。</p><p>也支持配置指定的时间格式，只需要在 <code>:</code> 后面加上指定格式即可，如：<code>{datetime:MM-dd}</code></p></li><li><p>定位</p><p>表达式为 <code>{location}</code> ，表示当前的定位地址。将会直接读取拍照控件自身的定位信息。</p><p>多张拍照时，使用统一的定位地址。</p><p><strong>如果 watermarkrequired == 1 ，那么如果当前还在定位中，或者获取地址失败时，后不能进行拍照。</strong></p><p>关于定位的详细说明，参看下方说明。</p></li><li><p>人员姓名</p><p>表达式为 <code>{location}</code> ，当前登录人员的姓名。</p></li><li><p>表单名称</p><p>表达式为<code>{pagename}</code> ，当前表单的名称。</p></li><li><p>控件值</p><p>指定控件的值，目前只支持text和textinput控件。</p></li></ul><h3 id="flycode水印" tabindex="-1">flycode水印 <a class="header-anchor" href="#flycode水印" aria-label="Permalink to &quot;flycode水印&quot;">​</a></h3><p>支持返回String类型值的flycode，返回值即为水印需要显示的内容，可以在返回的字符串中插入换行符 <code>\\n</code> 来达到换行的效果。</p><p>如果该属性为空，默认使用当前的时间作为水印（默认水印获取失败时不返回错误信息）。</p><p>水印同时支持返回错误提示信息，即当水印无法正常生成时，可以通过返回指定格式的字符串，来标识获取水印失败。当水印获取失败后，</p><p>错误提示字符串的格式为： <code>__error:</code> + <code>hit message</code> ，例如：</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__error:尚不能获取地址信息，请稍候再试。&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__error:请先选择需要投放的终端。&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">......</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><strong>水印生成的时机</strong></p><p>用户在每次确认获取的照片时（即使用相机拍摄成功并确定使用照片时，或者使用相册确定选择了某张照片时），生成该照片的水印。</p><p>如果水印获取失败，即返回了错误信息时，需要显示该错误信息，并中断后续的操作。此时需要提供一个提示选项，让用户选择放弃此次获取的图片，或者再次尝试获取水印。直到正确获取水印后才能真正使用照片。</p></blockquote><h2 id="全局水印设置" tabindex="-1">全局水印设置 <a class="header-anchor" href="#全局水印设置" aria-label="Permalink to &quot;全局水印设置&quot;">​</a></h2><p>当前控件没有设置水印的时候，使用全局水印设置。</p><p>全局水印的选项包含除了 <code>控件值</code> 之外的其他内置水印选项，处理方式与内置水印一致。</p><h2 id="全局水印的显示" tabindex="-1">全局水印的显示 <a class="header-anchor" href="#全局水印的显示" aria-label="Permalink to &quot;全局水印的显示&quot;">​</a></h2><p>当使用全局水印配置时，会在拍照时直接显示在相机界面，如果包含定位信息，还会控制是否能拍照。</p><p>此时水印信息会在每次打开相机时刷新，停留在拍照界面时不刷新。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/photoCameraWatermark.png" alt="photoCameraWatermark"></p><blockquote><p>注意，目前，新的水印方式只对全局设置的水印有效，其他方式，如配置控件的watermark属性，依然使用旧的方式显示水印；</p><p>同时对与相册选取的图片添加水印方式也使用旧的方式。</p></blockquote><h1 id="图片的上传与下载" tabindex="-1">图片的上传与下载 <a class="header-anchor" href="#图片的上传与下载" aria-label="Permalink to &quot;图片的上传与下载&quot;">​</a></h1>`,91),l=[e];function p(h,r,k,d,o,E){return a(),i("div",null,l)}const g=s(n,[["render",p]]);export{u as __pageData,g as default};
