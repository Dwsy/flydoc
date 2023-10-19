import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"元数据关系初始化、元数据分析及影响分析功能说明","description":"","frontmatter":{"title":"元数据关系初始化、元数据分析及影响分析功能说明","date":"2022-09-08T08:56:14.000Z"},"headers":[],"relativePath":"doc/wpdoc/元数据关系初始化、元数据分析及影响分析功能说明.md","filePath":"doc/wpdoc/元数据关系初始化、元数据分析及影响分析功能说明.md"}'),t={name:"doc/wpdoc/元数据关系初始化、元数据分析及影响分析功能说明.md"},o=e(`<h2 id="元数据关系初始化、元数据分析及影响分析功能说明" tabindex="-1">元数据关系初始化、元数据分析及影响分析功能说明 <a class="header-anchor" href="#元数据关系初始化、元数据分析及影响分析功能说明" aria-label="Permalink to &quot;元数据关系初始化、元数据分析及影响分析功能说明&quot;">​</a></h2><h3 id="元数据关系初始化" tabindex="-1">元数据关系初始化 <a class="header-anchor" href="#元数据关系初始化" aria-label="Permalink to &quot;元数据关系初始化&quot;">​</a></h3><p>初始化元数据引用关系</p><h4 id="sql" tabindex="-1">sql <a class="header-anchor" href="#sql" aria-label="Permalink to &quot;sql&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- ----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">-- Table structure for meta_relation</span></span>
<span class="line"><span style="color:#e1e4e8;">-- ----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">DROP TABLE IF EXISTS &quot;public&quot;.&quot;meta_relation&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE TABLE &quot;public&quot;.&quot;meta_relation&quot; (</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;metarelationid&quot; int8 NOT NULL,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;metamodelcode&quot; int8 NOT NULL,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;relationtype&quot; varchar(100) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;metadatacode&quot; int8,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;metacategory&quot; int4,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;relationmetadatacode&quot; int8,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;relationmetacategory&quot; int4</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metarelationid&quot; IS &#39;关系id&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metamodelcode&quot; IS &#39;领域编码&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;relationtype&quot; IS &#39;关系类型&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metadatacode&quot; IS &#39;元数据编码&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metacategory&quot; IS &#39;元数据类型&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;relationmetadatacode&quot; IS &#39;关联元数据编码&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;relationmetacategory&quot; IS &#39;关联元数据类型&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">COMMENT ON TABLE &quot;public&quot;.&quot;meta_relation&quot; IS &#39;元数据关系&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- ----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">-- Indexes structure for table meta_relation</span></span>
<span class="line"><span style="color:#e1e4e8;">-- ----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE INDEX &quot;idx_metarelation_metadatacode&quot; ON &quot;public&quot;.&quot;meta_relation&quot; USING btree (</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;metadatacode&quot; &quot;pg_catalog&quot;.&quot;int8_ops&quot; ASC NULLS LAST</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE INDEX &quot;idx_metarelation_metamodelcode&quot; ON &quot;public&quot;.&quot;meta_relation&quot; USING btree (</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;metamodelcode&quot; &quot;pg_catalog&quot;.&quot;int8_ops&quot; ASC NULLS LAST</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE INDEX &quot;idx_metarelation_rmetadatacode&quot; ON &quot;public&quot;.&quot;meta_relation&quot; USING btree (</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;relationmetadatacode&quot; &quot;pg_catalog&quot;.&quot;int8_ops&quot; ASC NULLS LAST</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- ----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">-- Primary Key structure for table meta_relation</span></span>
<span class="line"><span style="color:#e1e4e8;">-- ----------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">ALTER TABLE &quot;public&quot;.&quot;meta_relation&quot; ADD CONSTRAINT &quot;meta_relation_pkey&quot; PRIMARY KEY (&quot;metarelationid&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- ----------------------------</span></span>
<span class="line"><span style="color:#24292e;">-- Table structure for meta_relation</span></span>
<span class="line"><span style="color:#24292e;">-- ----------------------------</span></span>
<span class="line"><span style="color:#24292e;">DROP TABLE IF EXISTS &quot;public&quot;.&quot;meta_relation&quot;;</span></span>
<span class="line"><span style="color:#24292e;">CREATE TABLE &quot;public&quot;.&quot;meta_relation&quot; (</span></span>
<span class="line"><span style="color:#24292e;">  &quot;metarelationid&quot; int8 NOT NULL,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;metamodelcode&quot; int8 NOT NULL,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;relationtype&quot; varchar(100) COLLATE &quot;pg_catalog&quot;.&quot;default&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;metadatacode&quot; int8,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;metacategory&quot; int4,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;relationmetadatacode&quot; int8,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;relationmetacategory&quot; int4</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metarelationid&quot; IS &#39;关系id&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metamodelcode&quot; IS &#39;领域编码&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;relationtype&quot; IS &#39;关系类型&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metadatacode&quot; IS &#39;元数据编码&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;metacategory&quot; IS &#39;元数据类型&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;relationmetadatacode&quot; IS &#39;关联元数据编码&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON COLUMN &quot;public&quot;.&quot;meta_relation&quot;.&quot;relationmetacategory&quot; IS &#39;关联元数据类型&#39;;</span></span>
<span class="line"><span style="color:#24292e;">COMMENT ON TABLE &quot;public&quot;.&quot;meta_relation&quot; IS &#39;元数据关系&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- ----------------------------</span></span>
<span class="line"><span style="color:#24292e;">-- Indexes structure for table meta_relation</span></span>
<span class="line"><span style="color:#24292e;">-- ----------------------------</span></span>
<span class="line"><span style="color:#24292e;">CREATE INDEX &quot;idx_metarelation_metadatacode&quot; ON &quot;public&quot;.&quot;meta_relation&quot; USING btree (</span></span>
<span class="line"><span style="color:#24292e;">  &quot;metadatacode&quot; &quot;pg_catalog&quot;.&quot;int8_ops&quot; ASC NULLS LAST</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">CREATE INDEX &quot;idx_metarelation_metamodelcode&quot; ON &quot;public&quot;.&quot;meta_relation&quot; USING btree (</span></span>
<span class="line"><span style="color:#24292e;">  &quot;metamodelcode&quot; &quot;pg_catalog&quot;.&quot;int8_ops&quot; ASC NULLS LAST</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">CREATE INDEX &quot;idx_metarelation_rmetadatacode&quot; ON &quot;public&quot;.&quot;meta_relation&quot; USING btree (</span></span>
<span class="line"><span style="color:#24292e;">  &quot;relationmetadatacode&quot; &quot;pg_catalog&quot;.&quot;int8_ops&quot; ASC NULLS LAST</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- ----------------------------</span></span>
<span class="line"><span style="color:#24292e;">-- Primary Key structure for table meta_relation</span></span>
<span class="line"><span style="color:#24292e;">-- ----------------------------</span></span>
<span class="line"><span style="color:#24292e;">ALTER TABLE &quot;public&quot;.&quot;meta_relation&quot; ADD CONSTRAINT &quot;meta_relation_pkey&quot; PRIMARY KEY (&quot;metarelationid&quot;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%83%E6%95%B0%E6%8D%AE%E5%85%B3%E8%81%94%E5%88%86%E6%9E%90%E5%9B%BE.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%85%83%E6%95%B0%E6%8D%AE%E5%BC%95%E7%94%A8%E5%85%B3%E7%B3%BB%E5%9B%BE.png" alt=""></p><h3 id="元数据分析" tabindex="-1">元数据分析 <a class="header-anchor" href="#元数据分析" aria-label="Permalink to &quot;元数据分析&quot;">​</a></h3><p>能根据功能，追溯到所有关联的元数据（主要覆盖：实体、页面、逻辑）</p><p>【用途】<br> 产品发布补丁包时，便于功能的迁移和升级</p><h3 id="元数据影响分析" tabindex="-1">元数据影响分析 <a class="header-anchor" href="#元数据影响分析" aria-label="Permalink to &quot;元数据影响分析&quot;">​</a></h3><p>由某元数据出发，查询到其关联影响的其他元数据和功能菜单<br> 【用途】<br> 1，全局掌控当前修改项，对业务系统的影响面<br> 2，记录实施改动，会导致哪些产品级功能受影响</p>`,12),l=[o];function p(u,c,r,i,q,m){return s(),n("div",null,l)}const _=a(t,[["render",p]]);export{d as __pageData,_ as default};
