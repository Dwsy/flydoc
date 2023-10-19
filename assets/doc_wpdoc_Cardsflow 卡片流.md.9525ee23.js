import{_ as p,C as t,o as e,c,k as s,a as n,H as l,w as o,Q as r}from"./chunks/framework.b1e56e49.js";const V=JSON.parse('{"title":"Cardsflow 卡片流","description":"","frontmatter":{"title":"Cardsflow 卡片流","date":"2020-09-27T11:07:50.000Z"},"headers":[],"relativePath":"doc/wpdoc/Cardsflow 卡片流.md","filePath":"doc/wpdoc/Cardsflow 卡片流.md"}'),E={name:"doc/wpdoc/Cardsflow 卡片流.md"},u=r(`<h1 id="cardsflow-卡片流" tabindex="-1">Cardsflow 卡片流 <a class="header-anchor" href="#cardsflow-卡片流" aria-label="Permalink to &quot;Cardsflow 卡片流&quot;">​</a></h1><p>卡片流是以卡片形式来显示一组信息的控件，支持卡片内容自定义（目前只支持一个卡片模板控件：timageinfo）。</p><p>其用法与其他的数组型控件基本一致，支持勾选，支持点击，支持数据分页（目前建议分页大小60），</p><p>手机端示意图，手机端没有页码</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/cardsflowMobile.png" alt=""></p><p>web端，支持页码，支持当页全选，暂时不支持跨页勾选和查看勾选项<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/cardsflowWeb.png" alt=""></p><p>分页大小建议为60，支持依据控件宽度和卡片的宽度自行按需调整分页数量<br> 分页配置与其他数组型控件一致，配置数据请求事件 ‘每页显示数’即可</p><table><thead><tr><th>列数</th><th>行数</th><th>手机端</th><th>web端</th></tr></thead><tbody><tr><td>1</td><td>60</td><td>支持</td><td></td></tr><tr><td>2</td><td>30</td><td>支持</td><td></td></tr><tr><td>3</td><td>20</td><td>支持</td><td>支持</td></tr><tr><td>4</td><td>15</td><td></td><td>支持</td></tr><tr><td>5</td><td>12</td><td></td><td>支持</td></tr><tr><td>6</td><td>10</td><td></td><td>支持</td></tr></tbody></table><h2 id="protocol" tabindex="-1">Protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;Protocol&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cardsflow&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cardlistcode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;checkable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;cards&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;width&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;180/20%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;card&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;timageinfo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;timageinfo_code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;style&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;aspectratio&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;displaymode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;fill&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;detailcount&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#6A737D;">// 0 ~ 6</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;enlargeable&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;watermarkcomposite&quot;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;eventlist&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onload&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onloadmore&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onchecked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;handler&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;trigger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;onclicked&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cardsflow&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cardlistcode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;checkable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;cards&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;width&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;180/20%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;card&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;content&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;timageinfo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;timageinfo_code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;style&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;aspectratio&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;displaymode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;fill&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;detailcount&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">,</span><span style="color:#6A737D;">// 0 ~ 6</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;enlargeable&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;watermarkcomposite&quot;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;eventlist&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onload&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onloadmore&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onchecked&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;handler&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;trigger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;onclicked&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="checkable" tabindex="-1">checkable <a class="header-anchor" href="#checkable" aria-label="Permalink to &quot;checkable&quot;">​</a></h3><p>是否可以选择，默认值为1，表示可以选择。</p><p>当支持勾选时，如果 onclicked 事件为空，则点击整个卡片区域均能勾选；否则，点击勾选区域触发勾选，点击卡片区域触发点击。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/CardArea.png" alt=""></p><h3 id="cards" tabindex="-1">cards <a class="header-anchor" href="#cards" aria-label="Permalink to &quot;cards&quot;">​</a></h3><p>卡片内容定义区域，cards本身相当于一个layout，不过目前只支持设置固定值的宽度。卡片的宽度不能小于100。</p><p>卡片的高度默认根据其内容决定，由于目前只接受配置一个图片信息控件，因此就是由该控件来决定卡片高度。</p><h2 id="timageinfo-图片信息卡片" tabindex="-1">timageinfo 图片信息卡片 <a class="header-anchor" href="#timageinfo-图片信息卡片" aria-label="Permalink to &quot;timageinfo 图片信息卡片&quot;">​</a></h2><p>专门用于以卡片形式展现图片及其附加信息的一个控件，目前可用于Cardsflow，或者一个Layout中</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/ctimageinfo.png" alt=""></p><h3 id="aspectratio" tabindex="-1">aspectratio <a class="header-anchor" href="#aspectratio" aria-label="Permalink to &quot;aspectratio&quot;">​</a></h3><p>图片区域宽高比，默认值为1</p><h3 id="displaymode" tabindex="-1">displaymode <a class="header-anchor" href="#displaymode" aria-label="Permalink to &quot;displaymode&quot;">​</a></h3><table><thead><tr><th>值</th><th>含义</th></tr></thead><tbody><tr><td>fill</td><td>拉伸图片，完整显示图片并充满显示区域，默认值</td></tr><tr><td>aspectfill</td><td>保持宽高比拉伸图片，需要充满显示区域，同时居中显示</td></tr><tr><td>aspectfit</td><td>保持宽高比拉伸图片，需要完整显示图片，同时居中显示</td></tr></tbody></table><h3 id="detailcount" tabindex="-1">detailcount <a class="header-anchor" href="#detailcount" aria-label="Permalink to &quot;detailcount&quot;">​</a></h3><p>用于指定附加文字信息的数量，控件会根据该数量来，默认值为2</p><h3 id="enlargeable" tabindex="-1">enlargeable <a class="header-anchor" href="#enlargeable" aria-label="Permalink to &quot;enlargeable&quot;">​</a></h3><p>是否能显示大图，默认为 <code>1</code>，如果可以显示，则点击图片区域后可以全屏显示大图。</p><blockquote><p>此时如果有点击事件，则只能在文字区域触发点击</p></blockquote><h3 id="component" tabindex="-1">Component <a class="header-anchor" href="#component" aria-label="Permalink to &quot;Component&quot;">​</a></h3><p>图片信息卡片作为一个控件，自身支持一下值选项进行赋值和取值</p><table><thead><tr><th>name</th><th>含义</th></tr></thead><tbody><tr><td>photo</td><td>图片名</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>subtitle</td><td>副标题</td></tr><tr><td>time</td><td>时间（只支持时间戳的值，固定的格式化方式: 2019-10-22 15:22:37）</td></tr><tr><td>detail1</td><td>详细信息1</td></tr><tr><td>detail2</td><td>详细信息2</td></tr><tr><td>detail3</td><td>详细信息3</td></tr><tr><td>detail4</td><td>详细信息4</td></tr><tr><td>detail5</td><td>详细信息5</td></tr><tr><td>detail6</td><td>详细信息6</td></tr></tbody></table><h2 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h2><p>赋值方式与普通的数组控件类似，此处只使用了一个模板控件进行赋值。</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;setter&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;kx_store&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;datatype&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;ctrlcode&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cardlistcode&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;storeid&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;storephoto&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ct_imageinfo_code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;photo&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;storename&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ct_imageinfo_code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;title&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;phonenum&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ct_imageinfo_code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;detail1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;contacter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;ctrl&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ct_imageinfo_code&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;detail2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;setter&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;kx_store&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;datatype&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;ctrlcode&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cardlistcode&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;storeid&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;storephoto&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ct_imageinfo_code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;photo&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;storename&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ct_imageinfo_code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;title&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;phonenum&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ct_imageinfo_code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;detail1&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;contacter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;ctrl&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ct_imageinfo_code&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;detail2&quot;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h1 id="uiflycode-支持" tabindex="-1">UIFlycode 支持 <a class="header-anchor" href="#uiflycode-支持" aria-label="Permalink to &quot;UIFlycode 支持&quot;">​</a></h1>`,36),y=s("thead",null,[s("tr",null,[s("th",null,"方法"),s("th",null,"简要说明"),s("th",null,"实现情况")])],-1),i=s("td",null,"获取指定范围内的数据",-1),q=s("td",null,"web端 v9.7.1支持",-1),d=s("td",null,"返回 getInScope 的序列化数据",-1),b=s("td",null,"web端不支持",-1),F=s("tr",null,[s("td",null,"getFocusRow"),s("td",null,"获取数组型控件的焦点行控件"),s("td",null,"web端 v9.7.1支持")],-1),m=s("tr",null,[s("td",null,"getAllRows"),s("td",null,"获取数组型控件中所有所有的行控件"),s("td",null,"web端 v9.7.1支持")],-1),h=s("tr",null,[s("td",null,"getCheckedRows"),s("td",null,"获取数组型控件中所有被勾选的行控件"),s("td",null,"web端 v9.7.1支持")],-1),C=s("tr",null,[s("td",null,"reload"),s("td",null,"重新设置全部数据"),s("td",null,"web端不支持")],-1),B=s("h1",{id:"内部可拖拽控件支持",tabindex:"-1"},[n("内部可拖拽控件支持 "),s("a",{class:"header-anchor",href:"#内部可拖拽控件支持","aria-label":'Permalink to "内部可拖拽控件支持"'},"​")],-1),_=s("p",null,"timageinfo（图片信息卡片）/ （如需要展示image控件效果，不配置文本内容即可）",-1),g=s("p",null,"button（按钮）",-1),f=s("p",null,"icon（图标）",-1),w=s("p",null,"text（文本）",-1),k=s("p",null,"dynamictext（动态文本）",-1),x=s("p",null,"link(链接按钮)",-1);function v(P,S,A,T,I,D){const a=t("font");return e(),c("div",null,[u,s("table",null,[y,s("tbody",null,[s("tr",null,[s("td",null,[n("getInScope"),l(a,null,{default:o(()=>[n("*")]),_:1})]),i,q]),s("tr",null,[s("td",null,[n("getInScopeSerialized"),l(a,null,{default:o(()=>[n("*")]),_:1})]),d,b]),F,m,h,C])]),s("blockquote",null,[l(a,null,{default:o(()=>[n("\\*")]),_:1}),n(" 由于只支持只读的控件配置，因此不能使用modified作为取值范围；而由于数据是真分页的，因此使用 all 来获取数据是，获取到的是当前页的全部数据，而不是全部页的数据。")]),B,_,g,f,w,k,x])}const j=p(E,[["render",v]]);export{V as __pageData,j as default};
