import{_ as a,c as e,o as t,U as s}from"./chunks/framework.K-r7inPk.js";const b=JSON.parse('{"title":"表格筛选数据置顶","description":"","frontmatter":{"title":"表格筛选数据置顶","date":"2021-10-11T17:04:03.000Z"},"headers":[],"relativePath":"doc/wpdoc/表格筛选数据置顶.md","filePath":"doc/wpdoc/表格筛选数据置顶.md"}'),i={name:"doc/wpdoc/表格筛选数据置顶.md"},n=s('<h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h3><p>在日常用户在手机端填写表格资料，往往存在大量数据填入。</p><h4 id="一、现有的问题痛点" tabindex="-1">一、现有的问题痛点 <a class="header-anchor" href="#一、现有的问题痛点" aria-label="Permalink to &quot;一、现有的问题痛点&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>现标准功能中没有支持将填入过（未提交或提交过）的数据，置顶到表格第一行，方便客户查看。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="一、解决方案" tabindex="-1">一、解决方案 <a class="header-anchor" href="#一、解决方案" aria-label="Permalink to &quot;一、解决方案&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>开发一个功能，客户可以在首行看到之前填写的数据。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="二、数据库及ide配置" tabindex="-1">二、数据库及ide配置 <a class="header-anchor" href="#二、数据库及ide配置" aria-label="Permalink to &quot;二、数据库及ide配置&quot;">​</a></h4><h5 id="创建业务ui" tabindex="-1">创建业务UI <a class="header-anchor" href="#创建业务ui" aria-label="Permalink to &quot;创建业务UI&quot;">​</a></h5><p>1、在表格对应加载事件改为使用flycode调用，并通过判断将有填写记录的数据赋值到表格。<br> 2、搜索框的值改变事件，编写事件，通过Page.getValue(&#39;tabledata&#39;);获取表格填写情况，将有值的行排在表格上方。</p><h3 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h3><p>1、表格初次加载，需要直接加载列表数据，使用flycode调取接口获取数据，即该案例中事件：《获取终端列表数据》，</p><p>这里需要注意逻辑输出字段会直接影响前端页面获取值。</p><p>2、判断获取其中的数据是否存在过往填写记录，并将该记录排序填入表格，可根据自己项目情况选择对应字段作为判断依据。</p><p>3、将搜索框值改变事件改为通过flycode判断是否存在已输入数据，即该案例中事件：《表格数据筛选》。</p><p>4、通过获取总数据，循环检查数据中，输入字段是否有值。</p><p>5、获取当前表格数据，获取最新字段值，判断是否期间有填入数值，并排序填入表格。</p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC028-FC001-%E8%A1%A8%E6%A0%BC%E7%AD%9B%E9%80%89%E6%95%B0%E6%8D%AE%E7%BD%AE%E9%A1%B6.zip" title="COM-BC028-FC001 表格筛选数据置顶" target="_blank" rel="noreferrer">COM-BC028-FC001 表格筛选数据置顶</a></p>',17),r=[n];function o(d,l,p,c,h,u){return t(),e("div",null,r)}const m=a(i,[["render",o]]);export{b as __pageData,m as default};
