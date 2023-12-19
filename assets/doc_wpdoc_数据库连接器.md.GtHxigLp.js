import{_ as a,o as t,c as r,R as e}from"./chunks/framework.E9w9IFh5.js";const g=JSON.parse('{"title":"数据库连接器","description":"","frontmatter":{"title":"数据库连接器","date":"2022-08-24T06:36:55.000Z"},"headers":[],"relativePath":"doc/wpdoc/数据库连接器.md","filePath":"doc/wpdoc/数据库连接器.md"}'),o={name:"doc/wpdoc/数据库连接器.md"},n=e('<p>数据库连接器支持对指定数据库进行操作。数据库连接器包含五种执行行为，分别为<strong>插入、更新、删除、SQL和存储过程</strong>操作。</p><p>在集成流配置界面中，点击“<strong>+</strong>”添加节点，在连接器列表下，找到<strong>Database</strong>并点击，进入<strong>执行行为选择</strong>界面，选择所需行为，并点击，进入行为配置界面，在此界面中填写相应的信息，最后点击“<strong>确定</strong>”，即可完成此连接器的配置，具体如下图所示。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%95%B0%E6%8D%AE%E5%BA%93.gif" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%8C%E4%B8%BA%E9%80%89%E6%8B%A9%E7%95%8C%E9%9D%A2.jpg" alt=""></p><h2 id="_1-插入" tabindex="-1">1. 插入 <a class="header-anchor" href="#_1-插入" aria-label="Permalink to &quot;1\\. 插入&quot;">​</a></h2><p>数据库连接器的插入行为，能实现<strong>往指定数据库的数据表插入数据</strong>的功能，支持单条插入和批量插入两种插入模式，分别对应向数据库中的指定数据表插入一条或多条数据的操作。插入行为的配置操作，请参看<a href="http://apaas.wxchina.com:8881/2022/08/26/%E6%95%B0%E6%8D%AE%E5%BA%93-%E6%8F%92%E5%85%A5/" title="此处" target="_blank" rel="noreferrer">此处</a>。</p><h2 id="_2-更新" tabindex="-1">2. 更新 <a class="header-anchor" href="#_2-更新" aria-label="Permalink to &quot;2\\. 更新&quot;">​</a></h2><p>更新行为，能够实现<strong>数据表的指定数据内容的更新</strong>功能；通过字段配置区，设置更新内容；通过更新条件，筛选需要更新的指定数据字段。更新行为的配置操作，请参看<a href="http://apaas.wxchina.com:8881/2022/08/29/%E6%95%B0%E6%8D%AE%E5%BA%93-%E6%9B%B4%E6%96%B0/" title="此处" target="_blank" rel="noreferrer">此处</a>。</p><h2 id="_3-删除" tabindex="-1">3. 删除 <a class="header-anchor" href="#_3-删除" aria-label="Permalink to &quot;3\\. 删除&quot;">​</a></h2><p>数据库连接器的删除行为，能实现<strong>在指定数据库的数据表删除数据</strong>的功能，支持批量删除模式，能向数据库中的指定数据表删除单条，或多条数据的操作。删除行为的配置操作，请参看<a href="http://apaas.wxchina.com:8881/2022/08/29/%E6%95%B0%E6%8D%AE%E5%BA%93-%E5%88%A0%E9%99%A4/" title="此处" target="_blank" rel="noreferrer">此处</a>。</p><h2 id="_4-sql" tabindex="-1">4. SQL <a class="header-anchor" href="#_4-sql" aria-label="Permalink to &quot;4\\. SQL&quot;">​</a></h2><p>数据库连接器的SQL行为，<strong>支持使用SQL语言对数据库进行操作</strong>。SQL行为的配置操作，请参看<a href="http://apaas.wxchina.com:8881/2022/08/29/%E6%95%B0%E6%8D%AE%E5%BA%93-sql/" title="此处" target="_blank" rel="noreferrer">此处</a>。</p><h2 id="_5-存储过程" tabindex="-1">5. 存储过程 <a class="header-anchor" href="#_5-存储过程" aria-label="Permalink to &quot;5\\. 存储过程&quot;">​</a></h2><p>存储过程是在大型数据库系统中，一组为了完成特定功能的SQL语句集，它存储在数据库中，一次编译后永久有效，通过指定存储过程的名字并给出参数来执行。</p><p>存储过程行为，是指<strong>iPaaS平台调用数据库指定名称的存储过程，给定参数，并执行存储过程的SQL语句的行为</strong>。存储过程的配置操作，请参看<a href="http://apaas.wxchina.com:8881/2022/08/29/%E6%95%B0%E6%8D%AE%E5%BA%93-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B" title="此处" target="_blank" rel="noreferrer">此处</a>。</p>',13),s=[n];function c(l,h,i,p,_,E){return t(),r("div",null,s)}const A=a(o,[["render",c]]);export{g as __pageData,A as default};
