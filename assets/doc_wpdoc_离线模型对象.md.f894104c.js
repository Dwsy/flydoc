import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b1e56e49.js";const F=JSON.parse('{"title":"离线模型对象","description":"","frontmatter":{"title":"离线模型对象","date":"2020-12-15T14:58:18.000Z"},"headers":[],"relativePath":"doc/wpdoc/离线模型对象.md","filePath":"doc/wpdoc/离线模型对象.md"}'),p={name:"doc/wpdoc/离线模型对象.md"},o=l(`<h1 id="离线模型对象" tabindex="-1">离线模型对象 <a class="header-anchor" href="#离线模型对象" aria-label="Permalink to &quot;离线模型对象&quot;">​</a></h1><h2 id="excequery-sql-success-fail-completion" tabindex="-1">exceQuery(sql, success, fail, completion) <a class="header-anchor" href="#excequery-sql-success-fail-completion" aria-label="Permalink to &quot;exceQuery(sql, success, fail, completion)&quot;">​</a></h2><p>执行select sql语句，支持一条或多条sql语句，多条sql语句时，需使用Array\b包装</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>sql</td><td>String/Array</td><td>否</td><td>查询参数、返回数据的承载对象</td></tr><tr><td>success</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>fail</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>completion</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//outout，成功结果，Array类型，其元素为Dictionary，Dictionary中都为String类型</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> output.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> dic </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output[i];    </span><span style="color:#6A737D;">//Dictionary类型</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dic[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dic[</span><span style="color:#9ECBFF;">&#39;sex&#39;</span><span style="color:#E1E4E8;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dic[</span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//outout，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select name, sex, age from userinfo&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">exceQuery</span><span style="color:#E1E4E8;">(sql, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//outout，成功结果，Array类型，其元素为Dictionary，Dictionary中都为String类型</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> output.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> dic </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> output[i];    </span><span style="color:#6A737D;">//Dictionary类型</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dic[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">]; </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dic[</span><span style="color:#032F62;">&#39;sex&#39;</span><span style="color:#24292E;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dic[</span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//outout，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select name, sex, age from userinfo&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">exceQuery</span><span style="color:#24292E;">(sql, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//执行多条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一条不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//outout，成功结果，二维Array类型</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> output.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> o </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;">( </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> j </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; j </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> o.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; j</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> dic </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> o[j];    </span><span style="color:#6A737D;">//Dictionary类型</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dic[</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">]; </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dic[</span><span style="color:#9ECBFF;">&#39;sex&#39;</span><span style="color:#E1E4E8;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dic[</span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一条sql执行失败时会停下</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//错误的sql索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userinfo[</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行\b完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行多条语句</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select name, sex, age from userinfo where sex = </span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">1</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select name, sex, age from userinfo where sex = </span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">0</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;select name, sex, age from userinfo where sex = </span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">2</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sqls </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [sql1, sql2, sql3];</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">exceQuery</span><span style="color:#E1E4E8;">(sqls, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//执行多条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一条不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//outout，成功结果，二维Array类型</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> output.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> o </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> output[i]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">( </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> j </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; j </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> o.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; j</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> dic </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> o[j];    </span><span style="color:#6A737D;">//Dictionary类型</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dic[</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">]; </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dic[</span><span style="color:#032F62;">&#39;sex&#39;</span><span style="color:#24292E;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> dic[</span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">];   </span><span style="color:#6A737D;">//String类型</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一条sql执行失败时会停下</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//错误的sql索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userinfo[</span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行\b完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行多条语句</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select name, sex, age from userinfo where sex = </span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">1</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select name, sex, age from userinfo where sex = </span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">0</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;select name, sex, age from userinfo where sex = </span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">2</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sqls </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [sql1, sql2, sql3];</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">exceQuery</span><span style="color:#24292E;">(sqls, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="实现情况" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th></tr></thead><tbody><tr><td>✅</td><td></td></tr></tbody></table><h2 id="excemodify-sql-success-fail-completion" tabindex="-1">exceModify(sql, success, fail, completion) <a class="header-anchor" href="#excemodify-sql-success-fail-completion" aria-label="Permalink to &quot;exceModify(sql, success, fail, completion)&quot;">​</a></h2><p>执行insert、\binsert or ignore、update、delete或replace sql语句，支持一条或多条sql语句，多条sql语句时，需使用Array\b包装</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>sql</td><td>String/Array</td><td>否</td><td>查询的sql语句</td></tr><tr><td>success</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>fail</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>completion</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;inert into userinfo values(</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">小明</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">1</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">18</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">exceModify</span><span style="color:#E1E4E8;">(sql, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行一条语句</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;inert into userinfo values(</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">小明</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">1</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">18</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">)&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">exceModify</span><span style="color:#24292E;">(sql, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//执行多条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一条不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一条sql执行失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//错误的sql索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userinfo[</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务执行多条语句，可以混合不同的修改操作</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;inert into userinfo values(</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">小明</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">1</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">18</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;inert into userinfo values(</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">小兰</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">0</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">,</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">18</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sql3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;delete from userinfo where name = </span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">sam</span><span style="color:#79B8FF;">\\&#39;</span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sqls </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [sql1, sql2, sql3];</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">exceQuery</span><span style="color:#E1E4E8;">(sqls, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//执行多条语句</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一条不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一条sql执行失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//错误的sql索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userinfo[</span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务执行多条语句，可以混合不同的修改操作</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;inert into userinfo values(</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">小明</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">1</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">18</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">)&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;inert into userinfo values(</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">小兰</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">0</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">,</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">18</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">)&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sql3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;delete from userinfo where name = </span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">sam</span><span style="color:#005CC5;">\\&#39;</span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sqls </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [sql1, sql2, sql3];</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">exceQuery</span><span style="color:#24292E;">(sqls, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="实现情况-1" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-1" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th></tr></thead><tbody><tr><td>✅</td><td></td></tr></tbody></table><h2 id="insertobject-bizobject-success-fail-completion" tabindex="-1">insertObject(bizObject, success, fail, completion) <a class="header-anchor" href="#insertobject-bizobject-success-fail-completion" aria-label="Permalink to &quot;insertObject(bizObject, success, fail, completion)&quot;">​</a></h2><p>插入一个或多个业务对象到数据库，如果业务对象类型为数组，则会批量操作</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>bizObject</td><td>Dictionary/Array</td><td>否</td><td>业务对象</td></tr><tr><td>success</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>fail</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>completion</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//插入一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//插入一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userinfo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.sex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;18&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">insertObject</span><span style="color:#E1E4E8;">(obj, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//插入一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//插入一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userinfo&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">obj.sex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;1&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;18&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">insertObject</span><span style="color:#24292E;">(obj, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//插入多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象插入失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userinfo[</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务插入多个对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">);           </span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">insertObject</span><span style="color:#E1E4E8;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时插入</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo1&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;sam&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;jack&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo2&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">objs1.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(objs2);</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">insertObject</span><span style="color:#E1E4E8;">(objs1, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//插入多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象插入失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userinfo[</span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务插入多个对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo&#39;</span><span style="color:#24292E;">);           </span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">insertObject</span><span style="color:#24292E;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时插入</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo1&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;sam&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;jack&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo2&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">objs1.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(objs2);</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">insertObject</span><span style="color:#24292E;">(objs1, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h3 id="实现情况-2" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-2" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th></tr></thead><tbody><tr><td>✅</td><td></td></tr></tbody></table><h2 id="updateobject-bizobject-success-fail-completion" tabindex="-1">updateObject(bizObject, success, fail, completion) <a class="header-anchor" href="#updateobject-bizobject-success-fail-completion" aria-label="Permalink to &quot;updateObject(bizObject, success, fail, completion)&quot;">​</a></h2><p>更新一个或多个业务对象到数据库，如果业务对象类型为数组，则会批量操作</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>bizObject</td><td>Dictionary/Array</td><td>否</td><td>业务对象</td></tr><tr><td>success</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>fail</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>completion</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//更新一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//更新一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BO</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userinfo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">//主键，更新时必须有主键</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">updateObject</span><span style="color:#E1E4E8;">(obj, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//更新一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//更新一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BO</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userinfo&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//主键，更新时必须有主键</span></span>
<span class="line"><span style="color:#24292E;">obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">updateObject</span><span style="color:#24292E;">(obj, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//更新多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userinfo[</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务更新多个对象</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">);           </span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">updateObject</span><span style="color:#E1E4E8;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时更新</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo1&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;sam&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;jack&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo2&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">objs1.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(objs2);</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">updateObject</span><span style="color:#E1E4E8;">(objs1, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//更新多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userinfo[</span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务更新多个对象</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo&#39;</span><span style="color:#24292E;">);           </span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">updateObject</span><span style="color:#24292E;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时更新</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo1&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;sam&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;jack&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo2&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">objs1.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(objs2);</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">updateObject</span><span style="color:#24292E;">(objs1, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="实现情况-3" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-3" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th></tr></thead><tbody><tr><td>✅</td><td></td></tr></tbody></table><h2 id="saveobject-bizobject-success-fail-completion" tabindex="-1">saveObject(bizObject, success, fail, completion) <a class="header-anchor" href="#saveobject-bizobject-success-fail-completion" aria-label="Permalink to &quot;saveObject(bizObject, success, fail, completion)&quot;">​</a></h2><p>新增或更新一个或多个业务对象到数据库，如果业务对象类型为数组，则会批量操作</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>bizObject</td><td>Dictionary/Array</td><td>否</td><td>业务对象</td></tr><tr><td>success</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>fail</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>completion</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//保存一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//保存一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BO</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userinfo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">//主键，保存时必须有主键</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">saveObject</span><span style="color:#E1E4E8;">(obj, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//保存一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//保存一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BO</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userinfo&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//主键，保存时必须有主键</span></span>
<span class="line"><span style="color:#24292E;">obj.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">saveObject</span><span style="color:#24292E;">(obj, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//保存多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userinfo[</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务保存多个对象</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">);           </span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">saveObject</span><span style="color:#E1E4E8;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时保存</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo1&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;sam&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;jack&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;age&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;20&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo2&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">objs1.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(objs2);</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">saveObject</span><span style="color:#E1E4E8;">(objs1, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//保存多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userinfo[</span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务保存多个对象</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo&#39;</span><span style="color:#24292E;">);           </span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">saveObject</span><span style="color:#24292E;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时保存</span></span>
<span class="line"><span style="color:#6A737D;">//必须设置主键</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo1&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;sam&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;jack&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;age&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;20&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo2&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">objs1.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(objs2);</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">saveObject</span><span style="color:#24292E;">(objs1, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="实现情况-4" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-4" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th></tr></thead><tbody><tr><td>✅</td><td></td></tr></tbody></table><h2 id="deleteobject-bizobject-success-fail-completion" tabindex="-1">deleteObject(bizObject, success, fail, completion) <a class="header-anchor" href="#deleteobject-bizobject-success-fail-completion" aria-label="Permalink to &quot;deleteObject(bizObject, success, fail, completion)&quot;">​</a></h2><p>从数据库中\b删除对应\b主键的\b对象，如果业务对象类型为数组，则会批量操作</p><table><thead><tr><th>参数</th><th>类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>bizObject</td><td>Dictionary/Array</td><td>否</td><td>业务对象</td></tr><tr><td>success</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>fail</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr><tr><td>completion</td><td>function</td><td>可</td><td>见使用范例\x1B\b注释</td></tr></tbody></table><table><thead><tr><th>返回类型</th><th>可空</th><th>说明</th></tr></thead><tbody><tr><td>无</td><td></td><td></td></tr></tbody></table><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//删除一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//删除一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BO</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userinfo&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">;  </span><span style="color:#6A737D;">//主键</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">deleteObject</span><span style="color:#E1E4E8;">(obj, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//注意！！！</span></span>
<span class="line"><span style="color:#6A737D;">//若不设置主键，将会删除表中所有数据</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = new BO(&#39;userinfo&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//SQLiteDB.deleteObject(obj, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//删除一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//删除一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//使用BO构建一个userinfo对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BO</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userinfo&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">;  </span><span style="color:#6A737D;">//主键</span></span>
<span class="line"><span style="color:#6A737D;">//或使用set设置一个对象</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = [{&#39;name&#39;: &#39;小明&#39;}]</span></span>
<span class="line"><span style="color:#6A737D;">//BO.set(obj, &#39;userInfo&#39;)</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">deleteObject</span><span style="color:#24292E;">(obj, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//注意！！！</span></span>
<span class="line"><span style="color:#6A737D;">//若不设置主键，将会删除表中所有数据</span></span>
<span class="line"><span style="color:#6A737D;">//var obj = new BO(&#39;userinfo&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//SQLiteDB.deleteObject(obj, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//删除多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">errorCode</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> userinfo[</span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">completion</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">output</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">userinfo</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(code </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务删除多个对象</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">);           </span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">deleteObject</span><span style="color:#E1E4E8;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时删除</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小明&#39;</span><span style="color:#E1E4E8;">}, {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;小兰&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo1&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> objs2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;sam&#39;</span><span style="color:#E1E4E8;">}, {</span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;jack&#39;</span><span style="color:#E1E4E8;">}];</span></span>
<span class="line"><span style="color:#79B8FF;">BO</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(objs, </span><span style="color:#9ECBFF;">&#39;userInfo2&#39;</span><span style="color:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">objs1.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(objs2);</span></span>
<span class="line"><span style="color:#E1E4E8;">SQLiteDB.</span><span style="color:#B392F0;">deleteObject</span><span style="color:#E1E4E8;">(objs1, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//注意！！！</span></span>
<span class="line"><span style="color:#6A737D;">//若不设置主键，将会删除表中所有数据</span></span>
<span class="line"><span style="color:#6A737D;">//var obj1 = new BO(&#39;userinfo1&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//var obj2 = new BO(&#39;userinfo2&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//objs1.concat(objs2)</span></span>
<span class="line"><span style="color:#6A737D;">//SQLiteDB.deleteObject(obj1, success, fail, completion);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//删除多个对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行成功回调，与执行一个不同，批量执行都成功时才回调</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，Bool类型，永远为true</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">output</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行失败，批量执行时，任意一个对象更新失败时会停下，且之前的修改会被回滚</span></span>
<span class="line"><span style="color:#6A737D;">//errorCode，错误码，默认为0</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">errorCode</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//错误的对象索引</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> userinfo[</span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//执行完成回调</span></span>
<span class="line"><span style="color:#6A737D;">//code，结果码，1表示成功，其他见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//output，成功结果，见success描述</span></span>
<span class="line"><span style="color:#6A737D;">//msg，错误信息，见fail描述</span></span>
<span class="line"><span style="color:#6A737D;">//userinfo，额外的错误信息，见fail描述</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">completion</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">code</span><span style="color:#24292E;">, </span><span style="color:#E36209;">output</span><span style="color:#24292E;">, </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">, </span><span style="color:#E36209;">userinfo</span><span style="color:#24292E;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(code </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//处理方式与success一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//错误处理，与fail一致</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//事务删除多个对象</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#24292E;">                    {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo&#39;</span><span style="color:#24292E;">);           </span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">deleteObject</span><span style="color:#24292E;">(objs, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//支持不同的对象同时删除</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小明&#39;</span><span style="color:#24292E;">}, {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;小兰&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo1&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> objs2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;sam&#39;</span><span style="color:#24292E;">}, {</span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;jack&#39;</span><span style="color:#24292E;">}];</span></span>
<span class="line"><span style="color:#005CC5;">BO</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(objs, </span><span style="color:#032F62;">&#39;userInfo2&#39;</span><span style="color:#24292E;">);  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">objs1.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(objs2);</span></span>
<span class="line"><span style="color:#24292E;">SQLiteDB.</span><span style="color:#6F42C1;">deleteObject</span><span style="color:#24292E;">(objs1, success, fail, completion);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//注意！！！</span></span>
<span class="line"><span style="color:#6A737D;">//若不设置主键，将会删除表中所有数据</span></span>
<span class="line"><span style="color:#6A737D;">//var obj1 = new BO(&#39;userinfo1&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//var obj2 = new BO(&#39;userinfo2&#39;);</span></span>
<span class="line"><span style="color:#6A737D;">//objs1.concat(objs2)</span></span>
<span class="line"><span style="color:#6A737D;">//SQLiteDB.deleteObject(obj1, success, fail, completion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="实现情况-5" tabindex="-1">实现情况 <a class="header-anchor" href="#实现情况-5" aria-label="Permalink to &quot;实现情况&quot;">​</a></h3><table><thead><tr><th>iOS</th><th>Android</th></tr></thead><tbody><tr><td>✅</td><td></td></tr></tbody></table>`,49),e=[o];function c(r,t,y,E,i,b){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{F as __pageData,m as default};
