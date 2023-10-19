import{_ as s,o as t,c as a,Q as n}from"./chunks/framework.b1e56e49.js";const y=JSON.parse('{"title":"xcrank","description":"","frontmatter":{"title":"xcrank","date":"2020-05-20T14:04:55.000Z"},"headers":[],"relativePath":"doc/wpdoc/xcrank.md","filePath":"doc/wpdoc/xcrank.md"}'),o={name:"doc/wpdoc/xcrank.md"},e=n(`<h1 id="xcrank-排序指示器" tabindex="-1">xcrank 排序指示器 <a class="header-anchor" href="#xcrank-排序指示器" aria-label="Permalink to &quot;xcrank 排序指示器&quot;">​</a></h1><p>使用生动化的</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/rank.png" alt=""></p><h2 id="协议说明" tabindex="-1">协议说明 <a class="header-anchor" href="#协议说明" aria-label="Permalink to &quot;协议说明&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;xcrank&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;70&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;style&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;fontsize&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;14&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;fontweight&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;normal&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;xcrank&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;value&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;70&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;style&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;fontsize&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;14&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;fontweight&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;normal&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h3><p>当前的序号值，只接受大于1的正整数，空的时候不显示为 <code>-</code></p><h3 id="style" tabindex="-1">style <a class="header-anchor" href="#style" aria-label="Permalink to &quot;style&quot;">​</a></h3><p>控制前三名显示样式，目前支持以下样式：</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>cup</td><td>使用奖杯图标</td></tr><tr><td>crown</td><td>使用皇冠图标</td></tr><tr><td>medal</td><td>使用奖牌图标</td></tr><tr><td>text</td><td>使用文字的不同颜色</td></tr></tbody></table><p>具体的前三名的颜色值分别为：</p><table><thead><tr><th>排名</th><th>颜色值</th></tr></thead><tbody><tr><td>1</td><td>F5BA48</td></tr><tr><td>2</td><td>AEB3C5</td></tr><tr><td>3</td><td>F59E74</td></tr></tbody></table><h3 id="fontsize" tabindex="-1">fontsize <a class="header-anchor" href="#fontsize" aria-label="Permalink to &quot;fontsize&quot;">​</a></h3><p>数字字体大小，前三名图像和字体显示大小会有所不同，具体关系如下，具体关系如下</p><table><thead><tr><th>style</th><th>icon height</th><th>font size（前三名）</th></tr></thead><tbody><tr><td>cup</td><td>floor(fontsize * 1.45)</td><td>floor(fontsize * 0.78)</td></tr><tr><td>crown</td><td>floor(fontsize * 1.45)</td><td>floor(fontsize * 0.78)</td></tr><tr><td>medal</td><td>floor(fontsize * 1.67)</td><td>floor(fontsize * 0.78)</td></tr><tr><td>text</td><td>无</td><td>fontsize</td></tr></tbody></table><h2 id="取值与赋值规则" tabindex="-1">取值与赋值规则 <a class="header-anchor" href="#取值与赋值规则" aria-label="Permalink to &quot;取值与赋值规则&quot;">​</a></h2><p>参看 xcprogress</p>`,17),l=[e];function p(r,c,d,i,u,E){return t(),a("div",null,l)}const q=s(o,[["render",p]]);export{y as __pageData,q as default};
