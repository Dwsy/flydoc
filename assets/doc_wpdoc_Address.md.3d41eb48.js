import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.d084db19.js";const q=JSON.parse('{"title":"Address","description":"","frontmatter":{"title":"Address","date":"2020-05-20T17:07:43.000Z"},"headers":[],"relativePath":"doc/wpdoc/Address.md","filePath":"doc/wpdoc/Address.md"}'),l={name:"doc/wpdoc/Address.md"},p=o(`<h1 id="address" tabindex="-1">Address <a class="header-anchor" href="#address" aria-label="Permalink to &quot;Address&quot;">​</a></h1><p>地址控件，用于显示或录入地址，包括经纬度，行政区划，以及详细地址（POI）等信息。同时支持导航。</p><p>默认只记录地址，可通过属性控制收集行政区划信息。行政区划将直接通过高德的接口获取，然后与</p><p>该控件可以通过地图搜索选点的方式进行快捷填充，其中的行政区划部分目前只能通过地图选点来获取（此时也会更新经纬度和poi）。</p><p>详细地址部分可以直接手动编辑。</p><p>由于详细地址可以手动编辑，因此经纬度就只是一个参考，不保证能和地址精确匹配。</p><p>与控件 <code>location</code> 的却别在于，后者用于获取当前的位置信息，而前者没有此限制。</p><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;address&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;门店地址&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;markregion&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;addreditable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;readonly&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;displaymode&quot;</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;address&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;门店地址&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;markregion&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;addreditable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;readonly&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;displaymode&quot;</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="markregion" tabindex="-1">markregion <a class="header-anchor" href="#markregion" aria-label="Permalink to &quot;markregion&quot;">​</a></h3><p>标记行政区划</p><p>用于设置地址控件是否支持行政区划的采集和编辑，会影响控件的UI交互和最终的取值。</p><h3 id="addreditable" tabindex="-1">addreditable <a class="header-anchor" href="#addreditable" aria-label="Permalink to &quot;addreditable&quot;">​</a></h3><p>【手机端无效】</p><p>是否可编辑地址，默认可以编辑</p><h3 id="displaymode" tabindex="-1">displaymode <a class="header-anchor" href="#displaymode" aria-label="Permalink to &quot;displaymode&quot;">​</a></h3><p>显示模式</p><table><thead><tr><th>value</th><th>名字</th><th>meaning</th></tr></thead><tbody><tr><td>default</td><td>默认</td><td>默认模式，默认显示地址录入页面，点击可进入地图页面</td></tr><tr><td>map</td><td>地图</td><td>只显示地图页面</td></tr><tr><td>mappicker</td><td>地址选择</td><td>只显示地图，并且没有确认和取消按钮，点击地址后会改编值并触发值改变事件</td></tr></tbody></table><blockquote><p>map 和 mappicker模式为手机端为解决特殊场景临时加入，web端不支持，手机端也不建议配置使用</p></blockquote><h2 id="value" tabindex="-1">Value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;Value&quot;">​</a></h2><h3 id="无行政区划" tabindex="-1">无行政区划 <a class="header-anchor" href="#无行政区划" aria-label="Permalink to &quot;无行政区划&quot;">​</a></h3><p>此时控件不采集行政区划信息</p><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 无行政区划信息</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;latitude&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;123.12345&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;longitude&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;123.12345&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;timestamp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1547028474203&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// web暂时不提供</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;address&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广东省广州市天河区体育西路101号维多利广场32楼&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;poiname&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;维多利广场&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 无行政区划信息</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;latitude&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;123.12345&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;longitude&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;123.12345&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;timestamp&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1547028474203&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// web暂时不提供</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;address&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广东省广州市天河区体育西路101号维多利广场32楼&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;poiname&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;维多利广场&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>交互说明：通过地图选点得到的数据中，直接将高德返回的address和poiname合并生成控件的address字段值，并填充到输入框，该输入框也可以直接编辑控件的address字段。控件的poiname字段将不会单独显示，只是用于取值。</p><h3 id="有行政区划" tabindex="-1">有行政区划 <a class="header-anchor" href="#有行政区划" aria-label="Permalink to &quot;有行政区划&quot;">​</a></h3><p>此时控件会采集行政区划信息</p><blockquote><p>如果赋值时不包含行政区划信息，则对应显示区域数据为空，此时自动将 address 字段的值复制到 detailaddr 字段用于显示和编辑。</p></blockquote><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 有行政区划信息</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;latitude&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;123.12345&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;longitude&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;123.12345&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;timestamp&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1547028474203&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// web暂时不提供</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;address&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广东省广州市天河区体育西路101号维多利广场32楼&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;poiname&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;维多利广场&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;regionid&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;80187&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;country&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;中国&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;province&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广东省&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;city&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;广州市&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;district&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;天河区&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;detailaddr&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;体育西路101号维多利广场32楼&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 有行政区划信息</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;latitude&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;123.12345&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;longitude&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;123.12345&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;timestamp&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1547028474203&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// web暂时不提供</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;address&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广东省广州市天河区体育西路101号维多利广场32楼&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;poiname&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;维多利广场&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;regionid&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;80187&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;country&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;中国&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;province&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广东省&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;city&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;广州市&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;district&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;天河区&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;detailaddr&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;体育西路101号维多利广场32楼&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li><p>detailaddr</p><p>详细地址，由地图选点后的结果合成：街道 + 门牌 + POI，合成后填入详细地址编辑框，之后也可以由用户手动修改。</p></li><li><p>address</p><p>完整地址，由控件拼接而成：<code>province</code> + <code>city</code> + <code>district</code> + <code>detailaddr</code></p></li><li><p>regionid</p><p>区域编码，非高德的编码，而是平台自己定义的区域编码，由高德返回的行政区域信息在本地的行政区划数据中进行检索匹配后得到的。</p></li></ul><p>交互说明：</p><ol><li>地图选点后 <ol><li>将高德返回的latitude，longitude，poiname， province，city，district三个值分别存储在控件的对应值选项中</li><li>并将这三个值合并为字符串显示在行政区划的位置。</li><li>......</li></ol></li></ol><h2 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h2><table><thead><tr><th>name</th><th>value</th><th>meaning</th><th>取值</th><th>赋值</th></tr></thead><tbody><tr><td>coordinate</td><td>见下方</td><td>坐标</td><td>✅</td><td></td></tr><tr><td>address</td><td>广州市天河区体育西路101号32楼</td><td>地址</td><td>✅</td><td>✅</td></tr><tr><td>poiname</td><td>VT101维多利广场</td><td>poi名称</td><td>✅</td><td></td></tr></tbody></table><p>// coordinate 的数据格式为： <code>latitude</code> + <code>|</code> + <code>longitude</code> ， 例如 ：<code>123.145453143 | 235.1254658441</code></p><h2 id="event-trigger" tabindex="-1">Event Trigger <a class="header-anchor" href="#event-trigger" aria-label="Permalink to &quot;Event Trigger&quot;">​</a></h2><ul><li>onload</li><li>onvaluechange</li></ul><blockquote><p>1、目前由于一些技术原因，单纯修改详细地址不会触发值改变事件，只有地图选点，确认选中才会触发值改变。<br> 2、web端：地址控件点击delete icon，清空选中值也不会触发值改变事件。</p></blockquote>`,37),t=[p];function e(r,c,E,i,u,d){return a(),n("div",null,t)}const b=s(l,[["render",e]]);export{q as __pageData,b as default};
