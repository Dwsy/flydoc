import{_ as a,o as t,c as s,R as e}from"./chunks/framework.S1SDgkSw.js";const q=JSON.parse('{"title":"终端分布图，渠道客户分布图，资产分布图支持自定义颜色配置","description":"","frontmatter":{"title":"终端分布图，渠道客户分布图，资产分布图支持自定义颜色配置","date":"2020-12-21T09:45:57.000Z"},"headers":[],"relativePath":"doc/wpdoc/终端分布图，渠道客户分布图，资产分布图支持自定义颜色配置.md","filePath":"doc/wpdoc/终端分布图，渠道客户分布图，资产分布图支持自定义颜色配置.md"}'),n={name:"doc/wpdoc/终端分布图，渠道客户分布图，资产分布图支持自定义颜色配置.md"},p=e(`<h1 id="终端分布图-渠道客户分布图-资产分布图支持颜色配置" tabindex="-1">终端分布图，渠道客户分布图，资产分布图支持颜色配置 <a class="header-anchor" href="#终端分布图-渠道客户分布图-资产分布图支持颜色配置" aria-label="Permalink to &quot;终端分布图，渠道客户分布图，资产分布图支持颜色配置&quot;">​</a></h1><p>这三个报表的分布图支持地图自定义颜色配置，协议如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;type&quot;: &quot;storedistribution&quot;,</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;storedistribution-893661699113095244&quot;,</span></span>
<span class="line"><span>    &quot;title&quot;: &quot;终端分布图&quot;,</span></span>
<span class="line"><span>    &quot;palette&quot;: &quot;sequential&quot;,</span></span>
<span class="line"><span>    &quot;mapcolor&quot;: &quot;[\\&quot;#fff\\&quot;,\\&quot;#05a\\&quot;,\\&quot;#f00\\&quot;]&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="palette-调色板" tabindex="-1">palette 调色板 <a class="header-anchor" href="#palette-调色板" aria-label="Permalink to &quot;palette 调色板&quot;">​</a></h3><table><thead><tr><th>值</th><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>sequential</td><td>系列值</td><td>用于同一类型值的一个系列 分布图展示为由浅到深的蓝色渐变</td></tr><tr><td>qualitative</td><td>特性值</td><td>用于一组相互较为独立的数据 分布图展示为默认的由蓝到红的多彩渐变</td></tr></tbody></table><p>palette = sequential 示例图</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16085160052278.png" alt=""></p><p>palette = qualitative 示例图</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16085159364244.png" alt=""></p><h3 id="mapcolor-自定义颜色值" tabindex="-1">mapcolor 自定义颜色值 <a class="header-anchor" href="#mapcolor-自定义颜色值" aria-label="Permalink to &quot;mapcolor 自定义颜色值&quot;">​</a></h3><p>接受由低到高的自定义的颜色数组字符串（注意：必须是json数组字符串），最多支持10个颜色配置，优先级比palette调色板高。</p><p>白 - 蓝 - 红 示例图</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16085163032933.png" alt=""></p>`,13),o=[p];function l(i,r,c,d,u,_){return t(),s("div",null,o)}const m=a(n,[["render",l]]);export{q as __pageData,m as default};
