import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.d084db19.js";const h=JSON.parse('{"title":"准备领域接口","description":"","frontmatter":{"title":"准备领域接口","date":"2021-05-24T16:33:00.000Z"},"headers":[],"relativePath":"doc/wpdoc/准备领域接口.md","filePath":"doc/wpdoc/准备领域接口.md"}'),o={name:"doc/wpdoc/准备领域接口.md"},p=l(`<h1 id="准备领域接口" tabindex="-1">准备领域接口 <a class="header-anchor" href="#准备领域接口" aria-label="Permalink to &quot;准备领域接口&quot;">​</a></h1><p>在前一章节中，设计好实体后，就可以着手准备数据的存取接口了。</p><p>在该演示场景中，为了便于快速演示，只简单创建一个新增网点信息，以及一个简单的演示用的详情查询接口。</p><h2 id="新建flycode接口" tabindex="-1">新建Flycode接口 <a class="header-anchor" href="#新建flycode接口" aria-label="Permalink to &quot;新建Flycode接口&quot;">​</a></h2><ol><li>在主导航切换到 <strong>领域</strong> 模块</li><li>选择或创建一个接口所属的 <strong>目录</strong></li><li>选择或创建一个接口所属的 <strong>领域</strong></li><li>点击 <strong>添加</strong> 按钮</li><li>选择 <strong>flycode接口</strong> ，即可以进入接口编辑页面</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%9B%E5%BB%BA%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3.jpg" alt=""></p><h2 id="设置新增接口基本属性" tabindex="-1">设置新增接口基本属性 <a class="header-anchor" href="#设置新增接口基本属性" aria-label="Permalink to &quot;设置新增接口基本属性&quot;">​</a></h2><ol><li>首先切换到 <strong>行为信息</strong> 页面，进行基本的信息设置</li><li>填写 <strong>行为名称</strong> ，方便好记的就行</li><li>选择 <strong>操作类型</strong>，因为是新增接口，选择 <strong>数据提交</strong> 类型即可</li><li>接下来就可以切换到 <strong>flycode代码</strong> 页面，进行接口编写了。</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%AE%BE%E7%BD%AE%E6%96%B0%E5%A2%9E%E6%8E%A5%E5%8F%A3%E5%B1%9E%E6%80%A7.jpg" alt=""></p><h2 id="新增接口入参设置" tabindex="-1">新增接口入参设置 <a class="header-anchor" href="#新增接口入参设置" aria-label="Permalink to &quot;新增接口入参设置&quot;">​</a></h2><p>首要要设置接口参数，因为是新增数据的接口，因此需要把新增时的 <strong>入参</strong> 确定好，出参可以不设置。</p><ol><li>确认右边的参数列表处在 <strong>输入</strong> 页签</li><li>点击 <strong>添加</strong> 按钮</li><li>在弹出菜单中选择 <strong>从实体中选择</strong> ，就可以看到输入设置页面</li><li>在列表中搜索上一章中新建的实体名称</li><li>在实体列表中选择该实体，就可以加入到添加栏中</li><li>点击确定后，就可以将选中的实体加入到参数列表中了。本示例中只需要添加一个实体即可</li><li>因为是单个数据的保存，因此确保参数实体类型为 <strong>单实体</strong></li><li>选中实体中需要传递给接口的具体属性，在本例中，<strong>id</strong> 会自动生成，其余三个属性需要传递给接口，因此勾选这三个属性。</li><li>点击 <strong>保存</strong> 后，入参设置就完成了</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%AE%BE%E7%BD%AE%E6%8E%A5%E5%85%A5%E5%85%A5%E5%8F%82.jpg" alt=""></p><h2 id="新增接口编写" tabindex="-1">新增接口编写 <a class="header-anchor" href="#新增接口编写" aria-label="Permalink to &quot;新增接口编写&quot;">​</a></h2><ol><li><p>此处就是上一步设置好的入参信息</p></li><li><p>输入保存数据的代码，关于flycode可查看具体的编码教程，本示例中只需要复制以下代码即可：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 生成数据id</span></span>
<span class="line"><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.test_sales_station.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FLY</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">genId</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 保存数据</span></span>
<span class="line"><span style="color:#79B8FF;">DB</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">save</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">IN</span><span style="color:#E1E4E8;">.test_sales_station);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 生成数据id</span></span>
<span class="line"><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.test_sales_station.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FLY</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">genId</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 保存数据</span></span>
<span class="line"><span style="color:#005CC5;">DB</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">save</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">IN</span><span style="color:#24292E;">.test_sales_station);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>点击 <strong>保存</strong> 按钮，就完成了新增接口了。</p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%BC%96%E5%86%99%E6%8E%A5%E5%8F%A3%E4%BB%A3%E7%A0%81.jpg" alt=""></p><h2 id="添加详情查询接口" tabindex="-1">添加详情查询接口 <a class="header-anchor" href="#添加详情查询接口" aria-label="Permalink to &quot;添加详情查询接口&quot;">​</a></h2><p>用同样的方法新增一个详情查询的接口，不同之处在于以下几点：</p><blockquote><p>该接口只是查询一条已经填写的数据出来，用于演示，并没有实际的的作用。在实际应用中，通常需要从一个数据列表进入单条数据的详情查看，此处为了简化，就没有创建数据列表。</p></blockquote><ol><li><p>行为名称可以设置为 <strong>查询网点信息</strong> ，而操作类型不同需要设置为 <strong>单个查询</strong></p></li><li><p>由于是查询接口，因此要设置是不再是入参，而是 <strong>出参</strong> ，其设置过程与入参设置一样，相当于一个互逆的操作。</p></li><li><p>查询的代码也不同，这里只简单的查询一条数据出来。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> results </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SELECT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FROM</span><span style="color:#E1E4E8;"> test_sales_station;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (results.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">OUT</span><span style="color:#E1E4E8;">.test_sales_station </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> results[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> results </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FROM</span><span style="color:#24292E;"> test_sales_station;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (results.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">OUT</span><span style="color:#24292E;">.test_sales_station </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> results[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%9B%E5%BB%BA%E8%AF%A6%E6%83%85%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3.jpg" alt=""></p>`,21),t=[p];function e(r,c,i,E,y,d){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{h as __pageData,u as default};
