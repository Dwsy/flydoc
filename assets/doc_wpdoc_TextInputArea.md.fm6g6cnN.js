import{_ as a,c as s,o as i,U as n}from"./chunks/framework.K-r7inPk.js";const b=JSON.parse('{"title":"TextInputArea","description":"","frontmatter":{"title":"TextInputArea","date":"2020-05-20T16:20:56.000Z"},"headers":[],"relativePath":"doc/wpdoc/TextInputArea.md","filePath":"doc/wpdoc/TextInputArea.md"}'),e={name:"doc/wpdoc/TextInputArea.md"},t=n(`<h1 id="textinputarea" tabindex="-1">TextInputArea <a class="header-anchor" href="#textinputarea" aria-label="Permalink to &quot;TextInputArea&quot;">​</a></h1><p>文本输入区域控件，用于输入较多的文字，如备注信息等。<br> 其与TextInput由很多相似的属性和UI特征，可以参看两者的UI效果图进行对比。<br> 由于多行文本输入通常不涉及到数据有效性校验，因此TextInputArea没有相关属性。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/textAreaSample1.png" alt="textAreaSample1"></p><h2 id="protocol-协议详解" tabindex="-1">Protocol 协议详解 <a class="header-anchor" href="#protocol-协议详解" aria-label="Permalink to &quot;Protocol 协议详解&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;textinputarea&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maxlength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;minvisiblelinenumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maxvisiblelinenumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;linebreakenable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="maxlength-最大字符长度" tabindex="-1">maxlength 最大字符长度 <a class="header-anchor" href="#maxlength-最大字符长度" aria-label="Permalink to &quot;maxlength 最大字符长度&quot;">​</a></h3><p>与TextInput的maxLength属性相同，用于控制最大输入的字符数。0表示无限制，正整数表示相应的限制数量。默认值为0，表示不限制。</p><p>目前只提供固定几个值进行选择：0，10，30，50，100，1000</p><p>与TextInput不同，对于超出数量限制的字符并不截断，而只是进行剩余字符数量提示，并且在之后的提交或保存操作中，提示其输入超过限制。<br> 剩余字符数量提示规则如下</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>当剩余字符数&lt;=10时，开始显示提示；&gt;10 提示消失。</span></span>
<span class="line"><span>剩余字数为负数时，显示为红色；正数时为灰色。</span></span>
<span class="line"><span>当提示的剩余字符数为正数时，控件获得焦点时显示；失去焦点时不显示。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="minvisiblelinenumber-最小可见行数-兼容旧字段-rows" tabindex="-1">minvisiblelinenumber 最小可见行数（兼容旧字段 rows） <a class="header-anchor" href="#minvisiblelinenumber-最小可见行数-兼容旧字段-rows" aria-label="Permalink to &quot;minvisiblelinenumber 最小可见行数（兼容旧字段 rows）&quot;">​</a></h3><blockquote><p>暂时不用实现</p></blockquote><p>表示最小的可显示的行数，默认值为3，不能小于3。该值决定了大文本框的默认高度。</p><h3 id="maxvisiblelinenumber-最大可见行数" tabindex="-1">maxvisiblelinenumber 最大可见行数 <a class="header-anchor" href="#maxvisiblelinenumber-最大可见行数" aria-label="Permalink to &quot;maxvisiblelinenumber 最大可见行数&quot;">​</a></h3><blockquote><p>暂时不用实现</p></blockquote><p>表示最大的可显示的行数，0表示无限值，其余&gt;=3的正整数表示最大可显示的行数。</p><p>maxvisiblelinenumber不能小于minvisiblelinenumber，当小于时，默认使用minvisiblelinenumber的值。</p><p>默认为3，此时随着用户的输入，控件会不断的增加高度，以显示全部分输入内容。<br> 其他情况下，当输入的内容行数超出限制时，控件就不再增高，此时可以继续输入，控件内部的输入框可以上下滚动查看内容。</p><h3 id="linebreakenable-允许输入换行" tabindex="-1">linebreakenable 允许输入换行 <a class="header-anchor" href="#linebreakenable-允许输入换行" aria-label="Permalink to &quot;linebreakenable 允许输入换行&quot;">​</a></h3><blockquote><p>暂时不用实现</p></blockquote><p>表示是否允许输入回车符。0表示不能，1表示能，默认值为0。<br> 当不能输入回车时，点击键盘的回车表示完成输入；否则就是进行换行。</p><h2 id="取值规则" tabindex="-1">取值规则 <a class="header-anchor" href="#取值规则" aria-label="Permalink to &quot;取值规则&quot;">​</a></h2><p>简单文本值，即其输入的文本内容</p><h2 id="ui-sample" tabindex="-1">UI Sample <a class="header-anchor" href="#ui-sample" aria-label="Permalink to &quot;UI Sample&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/textAreaSample2.png" alt="textAreaSample2"></p><h2 id="ui-annotation-标注" tabindex="-1">UI Annotation 标注 <a class="header-anchor" href="#ui-annotation-标注" aria-label="Permalink to &quot;UI Annotation 标注&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/textAreaAnnotation1.png" alt="textAreaAnnotation1"></p>`,27),l=[t];function p(r,h,o,k,u,c){return i(),s("div",null,l)}const m=a(e,[["render",p]]);export{b as __pageData,m as default};
