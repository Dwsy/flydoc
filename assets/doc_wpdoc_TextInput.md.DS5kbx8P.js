import{_ as s,c as a,o as i,U as t}from"./chunks/framework.FhXPyWfz.js";const E=JSON.parse('{"title":"TextInput","description":"","frontmatter":{"title":"TextInput","date":"2020-05-20T16:23:13.000Z"},"headers":[],"relativePath":"doc/wpdoc/TextInput.md","filePath":"doc/wpdoc/TextInput.md"}'),n={name:"doc/wpdoc/TextInput.md"},e=t(`<h1 id="textinput" tabindex="-1">Textinput <a class="header-anchor" href="#textinput" aria-label="Permalink to &quot;Textinput&quot;">​</a></h1><p>用来给用户提供单行文本输入功能的控件，用来填写较短的内容，通常由一个标题和一个输入框组成。<br> 同时，由于一般填写的内容都会有一定的规则限制，因此当不符合设定规则时会给出相应提示信息。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/textInputSample1.png" alt="textInputSample1"></p><h2 id="protocal-协议" tabindex="-1">Protocal 协议 <a class="header-anchor" href="#protocal-协议" aria-label="Permalink to &quot;Protocal 协议&quot;">​</a></h2><div class="language-Json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;textinput&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;titlewidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;titleflex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;readonly&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;maxlength&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;verificationrule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;securetextentry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;debounceinterval&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-label="Permalink to &quot;placeholder&quot;">​</a></h3><p>占位文字。默认值为空，此时固定显示 <code>请输入</code> 。</p><p>当控件为只读或查看模式下，且控件值为空时，不显示占位文字。</p><h3 id="maxlength-最大字符长度" tabindex="-1">maxlength 最大字符长度 <a class="header-anchor" href="#maxlength-最大字符长度" aria-label="Permalink to &quot;maxlength 最大字符长度&quot;">​</a></h3><p>表示最大输入字符数，当输入字符数超出时，截断输入。0表示无限制，正整数表示对应的限制数量。<br> 默认值为0，表示不限制。</p><p>目前只提供固定几个值进行选择：0，10，30，50，100，1000</p><h3 id="inputaid-辅助输入手段" tabindex="-1">inputaid 辅助输入手段 <a class="header-anchor" href="#inputaid-辅助输入手段" aria-label="Permalink to &quot;inputaid 辅助输入手段&quot;">​</a></h3><p>【暂不实现】</p><p>辅助输入手段，即在键盘输入之外，提供的额外的输入手段：</p><table><thead><tr><th>取值</th><th>含义</th></tr></thead><tbody><tr><td>voice</td><td>语音输入</td></tr><tr><td>scan</td><td>扫码输入</td></tr></tbody></table><h3 id="verificationrule-校验规则" tabindex="-1">verificationrule 校验规则 <a class="header-anchor" href="#verificationrule-校验规则" aria-label="Permalink to &quot;verificationrule 校验规则&quot;">​</a></h3><p>内置的文本校验规则，可以接受一个正则表达式或者内置的校验类型。</p><p>其中正则表达式需要有 <code>regex:</code> 前缀，后面跟自定义的表达式，当校验不通过的时候，提示 <code>格式不正确</code></p><p>内置校验类型为引擎提供的常见的规则的快捷设置，用户只需要在IDE选择类型即可。各端在具体实现的时候，可以使用正则表达式，也可以使用其他方式来校验。当用户设置了内置校验类型后，错误提示语需要根据该类型进行调整。</p><p><strong>正则表达式的格式如下：</strong></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;verificationrule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;regex:^[0-9]*$&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>内置校验类型格式如下:</strong></p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;verificationrule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;weixin&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>详细说明如下</p><table><thead><tr><th>标识</th><th>含义</th><th>规则</th><th>错误提示语</th></tr></thead><tbody><tr><td>zipcode</td><td>邮编</td><td>6位数字</td><td>邮编格式不正确</td></tr><tr><td>tels</td><td>短号</td><td>3-6位数字</td><td>短号格式不正确</td></tr><tr><td>fax</td><td>传真</td><td>数字开头</td><td>传真格式不正确</td></tr><tr><td>mail</td><td>邮箱</td><td>邮箱格式</td><td>邮箱不符合规范</td></tr><tr><td>weixin</td><td>微信</td><td>字母开头6~20位字母或数字</td><td>微信号格式不正确</td></tr><tr><td>qq</td><td>QQ</td><td>5~20位数字，不能以0开头</td><td>QQ号码不符合规范</td></tr><tr><td>id</td><td>身份证</td><td>15位数字或18位二代身份证类型</td><td>身份证号不符合规范</td></tr></tbody></table><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 参考正则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;zipcode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^d{6}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;tels&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^d{3,6}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;fax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^(d{3,4}-)?d{7,8}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;mail&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^w+([-+.]w+)@w+([-.]w+).w+([-.]w+)*$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;weixin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^[A-Za-z0-9]w{5,19}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;qq&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^[1-9]d{4,19}$&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))((0-2)|10|20|30|31)d{3}[0-9Xx])|(^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}$&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="securetextentry" tabindex="-1">securetextentry <a class="header-anchor" href="#securetextentry" aria-label="Permalink to &quot;securetextentry&quot;">​</a></h3><p>安全输入标识，<code>bool</code> 值，<code>1</code> 表示需要使用安全输入方式，通常用于密码输入。默认值为 <code>0</code></p><h3 id="debounceinterval" tabindex="-1">debounceinterval <a class="header-anchor" href="#debounceinterval" aria-label="Permalink to &quot;debounceinterval&quot;">​</a></h3><p>防抖动间隔，float类型，单位为 <code>毫秒</code> ，用于控制 onvaluechange 时间执行的频率周期。</p><p>值为 <code>0</code> 的时候表示没有防抖动； 默认值为 <code>500</code> 。</p><p>目前的策略默认为后置防抖，也就是说只执行周期内的最后一次事件。</p><blockquote><p>该属性目前不支持配置，直接使用默认值</p><p>目前支持该设置的控件有：textinput，number，currency</p></blockquote><h2 id="event-list" tabindex="-1">Event List <a class="header-anchor" href="#event-list" aria-label="Permalink to &quot;Event List&quot;">​</a></h2><h3 id="onvaluechange" tabindex="-1">onvaluechange <a class="header-anchor" href="#onvaluechange" aria-label="Permalink to &quot;onvaluechange&quot;">​</a></h3><p>值改变事件，每输入一个字符，或删除，或粘贴时均会触发。</p><h3 id="onblur" tabindex="-1">onblur <a class="header-anchor" href="#onblur" aria-label="Permalink to &quot;onblur&quot;">​</a></h3><p>失去焦点事件，在焦点离开控件时触发</p><h2 id="ui-sample" tabindex="-1">UI Sample <a class="header-anchor" href="#ui-sample" aria-label="Permalink to &quot;UI Sample&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/textInputSample2.png" alt="textInputSample2"></p><h2 id="ui-annotation-标注" tabindex="-1">UI Annotation 标注 <a class="header-anchor" href="#ui-annotation-标注" aria-label="Permalink to &quot;UI Annotation 标注&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/textInputAnnotation1.png" alt="textInputAnnotation1"></p><p>说明：</p><ol><li>错误信息显示溢出区域，是指错误信息与其他UI部分重叠的地方，由于大部分时候错误信息都是不显示的，为了尽量利用屏幕显示有用信息，需要有一定的溢出显示能力。</li><li>当出现错误时，如果required=1，则此时需要隐藏控件头部的*号。</li></ol>`,44),l=[e];function p(h,r,d,o,k,u){return i(),a("div",null,l)}const g=s(n,[["render",p]]);export{E as __pageData,g as default};
