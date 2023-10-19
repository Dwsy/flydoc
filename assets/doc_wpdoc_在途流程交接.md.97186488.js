import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.b1e56e49.js";const _=JSON.parse('{"title":"在途流程交接","description":"","frontmatter":{"title":"在途流程交接","date":"2021-07-07T20:00:39.000Z"},"headers":[],"relativePath":"doc/wpdoc/在途流程交接.md","filePath":"doc/wpdoc/在途流程交接.md"}'),l={name:"doc/wpdoc/在途流程交接.md"},o=p(`<h1 id="在途流程交接实现方案" tabindex="-1">在途流程交接实现方案 <a class="header-anchor" href="#在途流程交接实现方案" aria-label="Permalink to &quot;在途流程交接实现方案&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h2 id="业务背景" tabindex="-1">业务背景 <a class="header-anchor" href="#业务背景" aria-label="Permalink to &quot;业务背景&quot;">​</a></h2><p>​ 审批流程中，发起人将数据存储到草稿，及提交到对应节点审批人时，对应节点审批人将进行处理对应流程数据。</p><h3 id="一、审批流程问题存在痛点" tabindex="-1">一、审批流程问题存在痛点 <a class="header-anchor" href="#一、审批流程问题存在痛点" aria-label="Permalink to &quot;一、审批流程问题存在痛点&quot;">​</a></h3><ol><li>审批流程初始化运行时，人员的情况考虑不周全</li><li>审批流程无法运行完整，流程在中途审批人员无法处理或其他原因操作不到</li><li>审批流程在数据库中，表结构数据之间复杂性，查看数据采用是视图，无索引，性能低，不是实体表。</li></ol><h3 id="二、流程交接的价值" tabindex="-1">二、流程交接的价值 <a class="header-anchor" href="#二、流程交接的价值" aria-label="Permalink to &quot;二、流程交接的价值&quot;">​</a></h3><ol><li>整个流程处理的完整性</li><li>一次处理对应发起人提交流程，审批人无法处理的流程数据，进行交接处理</li><li>适用于企业所有流程数据</li></ol><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>​ 在数据库中查找出在审批流程当中的数据，列表界面挂接搞功能权限，流程交接处理时，采用pg函数处理流程交接数据，将要处理的人数据统一分配给到要交接的人员，并使用日志进行存储操作记录。</p><p>​</p><h3 id="一、流程交接功能-使用具体操作步骤" tabindex="-1">一、流程交接功能，使用具体操作步骤 <a class="header-anchor" href="#一、流程交接功能-使用具体操作步骤" aria-label="Permalink to &quot;一、流程交接功能，使用具体操作步骤&quot;">​</a></h3><p>在web端有功能权限的人员进行将流程数据，指定勾选，选择对应的交接人后，进行处理。</p><p>如下图操作</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%871.gif" alt="图片1"></p><h3 id="二、开发人员具体操作步骤" tabindex="-1">二、开发人员具体操作步骤 <a class="header-anchor" href="#二、开发人员具体操作步骤" aria-label="Permalink to &quot;二、开发人员具体操作步骤&quot;">​</a></h3><p>​ 由实施人员操作以下步骤：</p><h3 id="_1-准备内容" tabindex="-1">（1）准备内容： <a class="header-anchor" href="#_1-准备内容" aria-label="Permalink to &quot;（1）准备内容：&quot;">​</a></h3><h4 id="_1、实体" tabindex="-1">1、实体 <a class="header-anchor" href="#_1、实体" aria-label="Permalink to &quot;1、实体&quot;">​</a></h4><p>&#39;&#39;流程待办视图&quot;-&quot;act_flow_todo&quot;、&quot;流程交接日志表&quot;-&quot;act_flow_todo_log&quot;</p><h4 id="_2、接口" tabindex="-1">2、接口 <a class="header-anchor" href="#_2、接口" aria-label="Permalink to &quot;2、接口&quot;">​</a></h4><p>&quot;加载离职人员待办列表&quot;、&quot;加载交接人&quot;、&quot;更换处理人&quot;</p><h4 id="_3、ui" tabindex="-1">3、UI <a class="header-anchor" href="#_3、ui" aria-label="Permalink to &quot;3、UI&quot;">​</a></h4><p>&quot;流程交接&quot;</p><h4 id="_4、pg函数" tabindex="-1">4、PG函数 <a class="header-anchor" href="#_4、pg函数" aria-label="Permalink to &quot;4、PG函数&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">f_change_approveops    代码内容如下：</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">f_change_approveops    代码内容如下：</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">CREATE OR REPLACE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">FUNCTION</span><span style="color:#E1E4E8;"> &quot;</span><span style="color:#B392F0;">public</span><span style="color:#E1E4E8;">&quot;.</span><span style="color:#9ECBFF;">&quot;f_change_approveops&quot;</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;assignee&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">varchar</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;oldassignee&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">text</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">RETURNS</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pg_catalog&quot;</span><span style="color:#E1E4E8;">.</span><span style="color:#9ECBFF;">&quot;void&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> $BODY$</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">begin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 更改审批人，手改处理方式  </span></span>
<span class="line"><span style="color:#6A737D;">---sql</span></span>
<span class="line"><span style="color:#6A737D;">--把运行时，某个成员的任务移交至新的成员id去处理</span></span>
<span class="line"><span style="color:#F97583;">update</span><span style="color:#E1E4E8;"> act_hi_actinst </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> assignee_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> assignee</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">exists</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> act_ru_task t </span><span style="color:#F97583;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">id_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">act_hi_actinst</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">task_id_</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">proc_inst_id_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">act_hi_actinst</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">proc_inst_id_</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">assignee_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">act_hi_actinst</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">assignee_</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">assignee_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> (oldassignee));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">update</span><span style="color:#E1E4E8;"> act_hi_taskinst </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> assignee_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> assignee</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">exists</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> act_ru_task t </span><span style="color:#F97583;">where</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">id_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">act_hi_taskinst</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">id_</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">proc_inst_id_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">act_hi_taskinst</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">proc_inst_id_</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">assignee_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">act_hi_taskinst</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">assignee_</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">assignee_</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> (oldassignee));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">update</span><span style="color:#E1E4E8;"> act_ru_task </span><span style="color:#F97583;">set</span><span style="color:#E1E4E8;"> assignee_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> assignee </span><span style="color:#F97583;">where</span><span style="color:#E1E4E8;"> assignee_ </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;">  (oldassignee);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">end</span><span style="color:#E1E4E8;">;  </span></span>
<span class="line"><span style="color:#E1E4E8;">$BODY$</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">LANGUAGE</span><span style="color:#E1E4E8;"> plpgsql VOLATILE</span></span>
<span class="line"><span style="color:#E1E4E8;">  COST </span><span style="color:#79B8FF;">100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">CREATE OR REPLACE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FUNCTION</span><span style="color:#24292E;"> &quot;</span><span style="color:#6F42C1;">public</span><span style="color:#24292E;">&quot;.</span><span style="color:#032F62;">&quot;f_change_approveops&quot;</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;assignee&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;oldassignee&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">text</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">RETURNS</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pg_catalog&quot;</span><span style="color:#24292E;">.</span><span style="color:#032F62;">&quot;void&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> $BODY$</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">begin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 更改审批人，手改处理方式  </span></span>
<span class="line"><span style="color:#6A737D;">---sql</span></span>
<span class="line"><span style="color:#6A737D;">--把运行时，某个成员的任务移交至新的成员id去处理</span></span>
<span class="line"><span style="color:#D73A49;">update</span><span style="color:#24292E;"> act_hi_actinst </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> assignee_ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> assignee</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">where</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">exists</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">select</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> act_ru_task t </span><span style="color:#D73A49;">where</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">id_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">act_hi_actinst</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">task_id_</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">proc_inst_id_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">act_hi_actinst</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">proc_inst_id_</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">assignee_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">act_hi_actinst</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">assignee_</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">assignee_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> (oldassignee));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">update</span><span style="color:#24292E;"> act_hi_taskinst </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> assignee_ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> assignee</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">where</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">exists</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">select</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> act_ru_task t </span><span style="color:#D73A49;">where</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">id_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">act_hi_taskinst</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">id_</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">proc_inst_id_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">act_hi_taskinst</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">proc_inst_id_</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">assignee_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">act_hi_taskinst</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">assignee_</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">and</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">assignee_</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> (oldassignee));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">update</span><span style="color:#24292E;"> act_ru_task </span><span style="color:#D73A49;">set</span><span style="color:#24292E;"> assignee_ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> assignee </span><span style="color:#D73A49;">where</span><span style="color:#24292E;"> assignee_ </span><span style="color:#D73A49;">in</span><span style="color:#24292E;">  (oldassignee);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">end</span><span style="color:#24292E;">;  </span></span>
<span class="line"><span style="color:#24292E;">$BODY$</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">LANGUAGE</span><span style="color:#24292E;"> plpgsql VOLATILE</span></span>
<span class="line"><span style="color:#24292E;">  COST </span><span style="color:#005CC5;">100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_2-操作步骤" tabindex="-1">（2）操作步骤： <a class="header-anchor" href="#_2-操作步骤" aria-label="Permalink to &quot;（2）操作步骤：&quot;">​</a></h3><h4 id="_1、导入实体" tabindex="-1">1、导入实体 <a class="header-anchor" href="#_1、导入实体" aria-label="Permalink to &quot;1、导入实体&quot;">​</a></h4><p>在ide业务实体里，导入&quot;业务对象-流程待办视图.json&quot;、&quot;业务对象-流程交接日志表.json&quot;完成业务实体的创建。</p><p>[^[注意]：实体导入后需要保存加发布。]:</p><p>如下图：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%872.png" alt="图片2"></p><hr><h4 id="_2、导入业务领域" tabindex="-1">2、导入业务领域 <a class="header-anchor" href="#_2、导入业务领域" aria-label="Permalink to &quot;2、导入业务领域&quot;">​</a></h4><p>在ide业务领域里，导入&quot;业务行为-更换处理人.json&quot;、&quot;业务行为-加载交接人.json&quot;、&quot;业务行为-加载离职人员待办列表.json&quot;,完成业务领域的创建。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%873.png" alt="图片3"></p><hr><h4 id="_3、导入ui" tabindex="-1">3、导入UI <a class="header-anchor" href="#_3、导入ui" aria-label="Permalink to &quot;3、导入UI&quot;">​</a></h4><p>在业务UI里，导入&quot;业务UI-流程交接.json&quot;，完成业务UI的创建。</p><p>[^[注意]：导入UI后，如需挂接功能点，需要手动创建并关联]:</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%874.png" alt="图片4"></p><hr><h4 id="_4、配置导航菜单、挂接功能点" tabindex="-1">4、配置导航菜单、挂接功能点 <a class="header-anchor" href="#_4、配置导航菜单、挂接功能点" aria-label="Permalink to &quot;4、配置导航菜单、挂接功能点&quot;">​</a></h4><p>在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%875.png" alt="图片5"></p><h4 id="_5、页面菜单权限配置" tabindex="-1">5、页面菜单权限配置 <a class="header-anchor" href="#_5、页面菜单权限配置" aria-label="Permalink to &quot;5、页面菜单权限配置&quot;">​</a></h4><p>用SFA管理员登录，在职位管理里，设置职位权限，勾选配置的页面。完成给该职位的人员页面访问权限的配置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%876.png" alt="图片6"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%877.png" alt="图片7"></p><h4 id="_6、创建pg函数" tabindex="-1">6、创建PG函数 <a class="header-anchor" href="#_6、创建pg函数" aria-label="Permalink to &quot;6、创建PG函数&quot;">​</a></h4><p>将（1）准备内容的4点 f_change_approveops 函数代码段，拷贝至租户业务库中函数进行保存即可。</p><h3 id="_3-效果" tabindex="-1">（3）效果： <a class="header-anchor" href="#_3-效果" aria-label="Permalink to &quot;（3）效果：&quot;">​</a></h3><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%878.png" alt="图片8"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%879.png" alt="图片9"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%8710.png" alt="图片10"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5-%E5%9B%BE%E7%89%8711.png" alt="图片11"></p><h3 id="组件包下载-百度网盘-也可到svn获取" tabindex="-1">组件包下载（百度网盘，也可到SVN获取） <a class="header-anchor" href="#组件包下载-百度网盘-也可到svn获取" aria-label="Permalink to &quot;组件包下载（百度网盘，也可到SVN获取）&quot;">​</a></h3><p>在途流程交接-链接：<a href="https://pan.baidu.com/s/15shJd76_7dezcYjg2KOYmw" target="_blank" rel="noreferrer">https://pan.baidu.com/s/15shJd76_7dezcYjg2KOYmw</a><br> 提取码：nlwi<br> 直接下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC004-FC001-%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5.zip" title="COM-BC004-FC001 在途流程交接" target="_blank" rel="noreferrer">COM-BC004-FC001 在途流程交接</a><br> 视频讲解：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%9B%BE%E5%B0%8F%E5%85%B5%E3%80%8A%E5%9C%A8%E9%80%94%E6%B5%81%E7%A8%8B%E4%BA%A4%E6%8E%A5%E3%80%8B.zip" title="曾小兵《在途流程交接》" target="_blank" rel="noreferrer">曾小兵《在途流程交接》</a></p>`,59),e=[o];function t(c,r,E,i,y,h){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{_ as __pageData,u as default};
