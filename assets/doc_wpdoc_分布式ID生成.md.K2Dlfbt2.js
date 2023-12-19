import{_ as s,o as i,c as a,R as n}from"./chunks/framework.E9w9IFh5.js";const g=JSON.parse('{"title":"分布式ID生成","description":"","frontmatter":{"title":"分布式ID生成","date":"2020-12-29T17:00:33.000Z"},"headers":[],"relativePath":"doc/wpdoc/分布式ID生成.md","filePath":"doc/wpdoc/分布式ID生成.md"}'),p={name:"doc/wpdoc/分布式ID生成.md"},l=n(`<p>aPaaS的数据库主键采用的id生成算法是：snowflake雪花算法</p><h1 id="_1-雪花算法" tabindex="-1">1 雪花算法 <a class="header-anchor" href="#_1-雪花算法" aria-label="Permalink to &quot;1 雪花算法&quot;">​</a></h1><p>雪花算法生成的ID是纯数字，按时间趋势递增，整个分布式系统中不会产生重复id。</p><h2 id="_1-1-组成结构" tabindex="-1">1.1 组成结构 <a class="header-anchor" href="#_1-1-组成结构" aria-label="Permalink to &quot;1.1 组成结构&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%86%E5%B8%83%E5%BC%8FID%E7%94%9F%E6%88%901.png" alt=""></p><p>64位ID由：首位无效符，时间戳差值，机器（进程）编码和序列号四部分组成。</p><ul><li>时间位：用来记录时间戳（毫秒）。41位可以表示2^41-1个毫秒的值，即69年。</li><li>机器id位：用来记录工作机器id。适用于分布式环境下对多节点的各个节点进行标识，可以具体根据节点数和部署情况设计划分机器位10位长度，如划分5位表示进程位等。</li><li>序列号位：用来记录同毫秒内产生的不同id，是一系列的自增id。12位的计数序列号，支持每个节点每毫秒产生4096个ID序号。</li></ul><h2 id="_1-2-使用方法" tabindex="-1">1.2 使用方法 <a class="header-anchor" href="#_1-2-使用方法" aria-label="Permalink to &quot;1.2 使用方法&quot;">​</a></h2><h3 id="_1-2-1-存储过程" tabindex="-1">1.2.1 存储过程 <a class="header-anchor" href="#_1-2-1-存储过程" aria-label="Permalink to &quot;1.2.1 存储过程&quot;">​</a></h3><p>①、创建snow_next_id()函数:</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SEQUENCE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> table_id_seq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> increment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">by</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> maxvalue </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">99999999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> minvalue </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cycle;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE OR REPLACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> FUNCTION</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> snow_next_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">OUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $$</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DECLARE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   our_epoch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1314220021721</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   seq_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   now_millis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bigint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   shard_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BEGIN</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   seq_id :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nextval(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;table_id_seq&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) % </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   SELECT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> FLOOR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(EXTRACT(EPOCH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clock_timestamp()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now_millis;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   result :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (now_millis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> our_epoch) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   result :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result | (shard_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   result :</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result | (seq_id);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">END</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$$ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">LANGUAGE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PLPGSQL;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>②、使用snow_next_id()函数生成id：</p><p>示例：</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> snow_next_id() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dim_appver;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-2-flycode" tabindex="-1">1.2.2 Flycode <a class="header-anchor" href="#_1-2-2-flycode" aria-label="Permalink to &quot;1.2.2 Flycode&quot;">​</a></h3><p>API：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FLY.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">genId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>示例：</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> store </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BO.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;kx_store&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">store.storeid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FLY.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">genId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">store.storename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;测试门店1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_1-3-服务分布式部署调参" tabindex="-1">1.3 服务分布式部署调参 <a class="header-anchor" href="#_1-3-服务分布式部署调参" aria-label="Permalink to &quot;1.3 服务分布式部署调参&quot;">​</a></h2><p>服务分布式部署需要调整以下参数：workerid、datacenterid</p><h3 id="_1-3-1-方式一-deploy-sh" tabindex="-1">1.3.1 方式一：deploy.sh <a class="header-anchor" href="#_1-3-1-方式一-deploy-sh" aria-label="Permalink to &quot;1.3.1 方式一：deploy.sh&quot;">​</a></h3><p>修改deploy.sh中的参数：<code>-Did.workerid=1 -Did.datacenterid=1</code></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%86%E5%B8%83%E5%BC%8FID%E7%94%9F%E6%88%902.png" alt=""></p><ul><li>workerid：服务类型标识</li><li>datacenterid：同一个服务集群的节点标识</li></ul><p><code>不同的服务类型，设置不同的workid，同一个服务集群的不同节点，设置不同的datacenterid</code></p><p>例如：</p><p>认证服务集群部署：workerid = 1</p><p>认证服务1: datacenterid = 1</p><p>认证服务2: datacenterid = 2</p><p>离线服务集群部署：<br> workerid = 2 (设置成和认证服务集群不同的标识）</p><p>离线服务1：datacenterid = 1</p><p>离线服务2：datacenterid = 2</p><h3 id="_1-3-2-方式二-application-properties" tabindex="-1">1.3.2 方式二：application.properties <a class="header-anchor" href="#_1-3-2-方式二-application-properties" aria-label="Permalink to &quot;1.3.2 方式二：application.properties&quot;">​</a></h3><p>在 服务部署 的文件夹中新建一个application.properties文件：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%88%86%E5%B8%83%E5%BC%8FID%E7%94%9F%E6%88%903.png" alt=""></p><p>application.properties：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>id.workerid=1</span></span>
<span class="line"><span>id.datacenterid=1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>workerid：服务类型标识</li><li>datacenterid：同一个服务集群的节点标识</li></ul><p><code>不同的服务类型，设置不同的workid，同一个服务集群的不同节点，设置不同的datacenterid</code></p><p>例如：</p><p>认证服务集群部署：workerid = 1</p><p>认证服务1: datacenterid = 1</p><p>认证服务2: datacenterid = 2</p><p>离线服务集群部署：<br> workerid = 2 (设置成和认证服务集群不同的标识）</p><p>离线服务1：datacenterid = 1</p><p>离线服务2：datacenterid = 2</p>`,47),e=[l];function t(h,k,r,d,E,c){return i(),a("div",null,e)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
