import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.b1e56e49.js";const d=JSON.parse('{"title":"目标项配置操作【向导】手册","description":"","frontmatter":{"title":"目标项配置操作【向导】手册","date":"2022-06-08T11:24:36.000Z"},"headers":[],"relativePath":"doc/wpdoc/目标项配置操作【向导】手册.md","filePath":"doc/wpdoc/目标项配置操作【向导】手册.md"}'),l={name:"doc/wpdoc/目标项配置操作【向导】手册.md"},p=e(`<h2 id="目标项配置操作【向导】手册" tabindex="-1">目标项配置操作【向导】手册 <a class="header-anchor" href="#目标项配置操作【向导】手册" aria-label="Permalink to &quot;目标项配置操作【向导】手册&quot;">​</a></h2><ul><li>编辑：陈聪</li><li>时间：2022-05-26</li><li>状态：已完成</li><li>适用范围：智慧100V6.0</li></ul><h2 id="业务背景说明" tabindex="-1">业务背景说明 <a class="header-anchor" href="#业务背景说明" aria-label="Permalink to &quot;业务背景说明&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">为更加全面地服务客户，贯彻客户第一的价值理念，智慧100开发出了一套新的新的考核指标从而达到目标管控 。存在指标的个性化配置或新增。对于指标的配置</span></span>
<span class="line"><span style="color:#e1e4e8;">    在原有【绩效管理】基础上，增加了扩展性，更加方便使用。</span></span>
<span class="line"><span style="color:#e1e4e8;">    目标项配置出厂内置10个指标</span></span>
<span class="line"><span style="color:#e1e4e8;">    支持原有4个内置指标：拜访次数、新增客户、终端销售金额、终端销售数量的目标设置，</span></span>
<span class="line"><span style="color:#e1e4e8;">    新增4个量化指标：个人任务、晨会、培训会、意向客户拜访</span></span>
<span class="line"><span style="color:#e1e4e8;">    新增2个内置指标：协访客户、门店检查的目标设置。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">为更加全面地服务客户，贯彻客户第一的价值理念，智慧100开发出了一套新的新的考核指标从而达到目标管控 。存在指标的个性化配置或新增。对于指标的配置</span></span>
<span class="line"><span style="color:#24292e;">    在原有【绩效管理】基础上，增加了扩展性，更加方便使用。</span></span>
<span class="line"><span style="color:#24292e;">    目标项配置出厂内置10个指标</span></span>
<span class="line"><span style="color:#24292e;">    支持原有4个内置指标：拜访次数、新增客户、终端销售金额、终端销售数量的目标设置，</span></span>
<span class="line"><span style="color:#24292e;">    新增4个量化指标：个人任务、晨会、培训会、意向客户拜访</span></span>
<span class="line"><span style="color:#24292e;">    新增2个内置指标：协访客户、门店检查的目标设置。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="出厂指标说明" tabindex="-1">出厂指标说明 <a class="header-anchor" href="#出厂指标说明" aria-label="Permalink to &quot;出厂指标说明&quot;">​</a></h1><table><thead><tr><th>指标名</th><th style="text-align:right;">指标类型</th><th style="text-align:right;">对应存储函数</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>拜访次数</td><td style="text-align:right;">内置指标</td><td style="text-align:right;">f_get_target_member_visitcount(&#39;&#39;)</td><td style="text-align:center;">拜访次数统计指标</td></tr><tr><td>新增客户</td><td style="text-align:right;">内置指标</td><td style="text-align:right;">f_get_target_member_addcustomer(&#39;&#39;)</td><td style="text-align:center;">新增客户统计指标</td></tr><tr><td>终端销售金额</td><td style="text-align:right;">内置指标</td><td style="text-align:right;">f_get_target_member_salesamount(&#39;&#39;)</td><td style="text-align:center;">统计指标终端销售金额</td></tr><tr><td>终端销售数量</td><td style="text-align:right;">内置指标</td><td style="text-align:right;">f_get_target_member_salescount(&#39;&#39;)</td><td style="text-align:center;">协访客户统计指标</td></tr><tr><td>协访客户</td><td style="text-align:right;">内置指标</td><td style="text-align:right;">f_get_target_member_store_scooperative_visit(&#39;&#39;)</td><td style="text-align:center;">协访客户统计指标</td></tr><tr><td>门店检查</td><td style="text-align:right;">内置指标</td><td style="text-align:right;">f_get_target_member_mdcheck(&#39;&#39;)</td><td style="text-align:center;">门店检查统计指标</td></tr><tr><td>个人任务</td><td style="text-align:right;">量化指标</td><td style="text-align:right;">f_get_target_member_liteform(&#39;l09f0p1n&#39;)</td><td style="text-align:center;">个人任务统计指标</td></tr><tr><td>晨会</td><td style="text-align:right;">量化指标</td><td style="text-align:right;">f_get_target_member_liteform(&#39;l099tb47&#39;,&#39;&#39;)</td><td style="text-align:center;">晨会统计指标</td></tr><tr><td>培训会</td><td style="text-align:right;">量化指标</td><td style="text-align:right;">f_get_target_member_liteform(&#39;l09dyvib&#39;)</td><td style="text-align:center;">培训会统计指标</td></tr><tr><td>意向客户拜访</td><td style="text-align:right;">量化指标</td><td style="text-align:right;">f_get_target_member_liteform(&#39;l09ensmk&#39;)</td><td style="text-align:center;">意向客户拜访统计指标</td></tr></tbody></table><h2 id="如何给人配置指标" tabindex="-1">如何给人配置指标？ <a class="header-anchor" href="#如何给人配置指标" aria-label="Permalink to &quot;如何给人配置指标？&quot;">​</a></h2><p>菜单栏的【目标管理】-【目标配置】-【目标配置按钮】<br> 支持多人员，多月份，多指标的目标配置</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%BB%99%E4%BA%BA%E5%91%98%E8%AE%BE%E7%BD%AE%E7%9B%AE%E6%A0%87.png" alt="&#39;给人配置目标&#39;"></p><h2 id="目标完成统计报表" tabindex="-1">目标完成统计报表 <a class="header-anchor" href="#目标完成统计报表" aria-label="Permalink to &quot;目标完成统计报表&quot;">​</a></h2><p>给相关人员配置了目标配置之后，后台会通过相关的逻辑采集数据作结果显示（汇总数据到昨天）<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%9B%AE%E6%A0%87%E5%AE%8C%E6%88%90%E7%BB%9F%E8%AE%A1.png" alt="&#39;目标完成统计&#39;"></p><h2 id="app首页-目标达成模块" tabindex="-1">APP首页 -目标达成模块 <a class="header-anchor" href="#app首页-目标达成模块" aria-label="Permalink to &quot;APP首页 -目标达成模块&quot;">​</a></h2><p>人员目标数据展示 目标达成模块也是使用到目标完成统计数据（昨日调度结果+今日相关指标执行）</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/APP%E9%A6%96%E9%A1%B5%E5%B1%95%E7%A4%BA%E5%9B%BE2.png" alt="&#39;APP首页展示&#39;"></p><h2 id="目标项配置流程图" tabindex="-1">目标项配置流程图 <a class="header-anchor" href="#目标项配置流程图" aria-label="Permalink to &quot;目标项配置流程图&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%9B%AE%E6%A0%87%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3%E6%B5%81%E7%A8%8B%E5%9B%BE.png" alt="&#39;配置界面&#39;"></p><h2 id="人员配置目标流程图-上级给下属制定计划" tabindex="-1">人员配置目标流程图（上级给下属制定计划） <a class="header-anchor" href="#人员配置目标流程图-上级给下属制定计划" aria-label="Permalink to &quot;人员配置目标流程图（上级给下属制定计划）&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%BA%E5%91%98%E9%85%8D%E7%BD%AE%E7%9B%AE%E6%A0%87.png" alt="&#39;人员配置目标&#39;"></p><h2 id="目标配置结合调度处理" tabindex="-1">目标配置结合调度处理 <a class="header-anchor" href="#目标配置结合调度处理" aria-label="Permalink to &quot;目标配置结合调度处理&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%9B%AE%E6%A0%87%E9%85%8D%E7%BD%AE%E7%BB%93%E5%90%88%E8%B0%83%E5%BA%A6%E5%A4%84%E7%90%86.png" alt="&#39;目标配置结合调度处理&#39;"></p><h2 id="结合相关调度任务" tabindex="-1">结合相关调度任务 <a class="header-anchor" href="#结合相关调度任务" aria-label="Permalink to &quot;结合相关调度任务&quot;">​</a></h2><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E7%BB%93%E5%90%88qruatz%E8%B0%83%E5%BA%A6%E4%BB%BB%E5%8A%A1.png" alt="&#39;结合qruatz调度任务&#39;"></p><h2 id="如何配置新目标项" tabindex="-1">如何配置新目标项 ？ <a class="header-anchor" href="#如何配置新目标项" aria-label="Permalink to &quot;如何配置新目标项 ？&quot;">​</a></h2><p>当内置的10个出厂指标不满足的时候，可以通过以下方式扩展</p><p>如图-【产品配置中心】-【产品小工具】-【目标项配置】</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E4%BA%A7%E5%93%81%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83-%E4%BA%A7%E5%93%81%E5%B0%8F%E5%B7%A5%E5%85%B7-%E7%9B%AE%E6%A0%87%E9%A1%B9%E9%85%8D%E7%BD%AE.png" alt="&#39;配置界面&#39;"></p><h1 id="新增目标项配置字段说明" tabindex="-1">新增目标项配置字段说明 <a class="header-anchor" href="#新增目标项配置字段说明" aria-label="Permalink to &quot;新增目标项配置字段说明&quot;">​</a></h1><table><thead><tr><th>指标名</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td>*目标项编码</td><td style="text-align:center;">*目标项编码，不可重复，用于目标项选择时编码查询；</td></tr><tr><td>*目标项名称</td><td style="text-align:center;">目标项名称，不可重复，用于目标项选择时名称展示</td></tr><tr><td>*指标类型</td><td style="text-align:center;">可选项：内置指标、量化指标；内置指标对应ide或自定义创建的存储过程代码；量化指标对应超级表单中的量化应用中可选的普通表单</td></tr><tr><td>*量化指标</td><td style="text-align:center;">*量化指标，指标类型选择量化指标时，可下拉选择指标名称</td></tr><tr><td>表名</td><td style="text-align:center;">表名，非必填，用于后续自定义配置定义</td></tr><tr><td>目标列</td><td style="text-align:center;">目标列，非必填，用于后续自定义配置定义</td></tr><tr><td>*调度类型</td><td style="text-align:center;">存储过程 配置后按类型填写调度方法代码；Java（未实现）后续扩展</td></tr><tr><td>*调度方法</td><td style="text-align:center;">*调度方法，必填，当指标类型 1.选择量化指标，并选择相应的量化表单后，自动填充量化的存储过程； 2.当选择内置指标需要手动填写对应代码如：存储过程方法名</td></tr><tr><td>备注</td><td style="text-align:center;">备注，非必填，填写目标项说明描述</td></tr></tbody></table><p>当指标类型选择 量化指标的时候</p><p>结合超级表单 量化管理模块<br> 自动已有的量化表单以及量化表单的调用的存储过程<br> 存储过程也可以自己自行开发</p><h2 id="目标管理的存储过程的-核心思想" tabindex="-1">目标管理的存储过程的---核心思想 <a class="header-anchor" href="#目标管理的存储过程的-核心思想" aria-label="Permalink to &quot;目标管理的存储过程的---核心思想&quot;">​</a></h2><p>概念一致性</p><ul><li>1.查询所有该指标有效的成员信息</li><li>2.查询特定指标的完成数</li><li>3.插入结果表 target_result<br> (关键信息 人，目标月份，关联目标项ID，该指标的完成数)</li></ul><p>存储过程例子参考 f_get_target_member_visitcount(&#39;&#39;)</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">CREATE </span></span>
<span class="line"><span style="color:#e1e4e8;">        OR REPLACE FUNCTION &quot;public&quot;.&quot;f_get_target_member_visitcount&quot; ( &quot;currdate&quot; VARCHAR ) RETURNS &quot;pg_catalog&quot;.&quot;void&quot; AS $BODY$ DECLARE</span></span>
<span class="line"><span style="color:#e1e4e8;">        deleteSql TEXT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    tempSql TEXT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    targetTempSql TEXT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    actualTempSql TEXT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    storeTempSql TEXT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    insertSql TEXT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    curYearMonth VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    curYear VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    curMonth VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    currtentTime DATE;</span></span>
<span class="line"><span style="color:#e1e4e8;">    curMonthBegin VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    curMonthEnd VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    itemId VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    targetId1 VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    beginDate VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    endDate VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    kpi_refcursor refcursor;</span></span>
<span class="line"><span style="color:#e1e4e8;">    salearea BIGINT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    memb BIGINT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ymonth VARCHAR;</span></span>
<span class="line"><span style="color:#e1e4e8;">    target INT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    temptargetid BIGINT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    actual INT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    exist INT;</span></span>
<span class="line"><span style="color:#e1e4e8;">    BEGIN-- 拜访次数 itemid=1</span></span>
<span class="line"><span style="color:#e1e4e8;">        itemId := &#39;1500755543076245504&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    -- 牌坊次数 targetId</span></span>
<span class="line"><span style="color:#e1e4e8;">        targetId1 := &#39;拜访次数&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        IF</span></span>
<span class="line"><span style="color:#e1e4e8;">            currDate IS NULL </span></span>
<span class="line"><span style="color:#e1e4e8;">            OR currDate = &#39;&#39; THEN</span></span>
<span class="line"><span style="color:#e1e4e8;">                currDate := &#39;&#39; || to_char( CURRENT_DATE - INTERVAL &#39;1 D&#39;, &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        END IF;</span></span>
<span class="line"><span style="color:#e1e4e8;">    --raise notice &#39;currDate is : %&#39;,currDate;</span></span>
<span class="line"><span style="color:#e1e4e8;">        currtentTime := to_date( currDate, &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#e1e4e8;">        curYear := EXTRACT ( YEAR FROM currtentTime );</span></span>
<span class="line"><span style="color:#e1e4e8;">        curMonth := EXTRACT ( MONTH FROM currtentTime );</span></span>
<span class="line"><span style="color:#e1e4e8;">    -- 获取入参日期的年月</span></span>
<span class="line"><span style="color:#e1e4e8;">        curYearMonth := to_char( currtentTime, &#39;yyyy-MM&#39; );</span></span>
<span class="line"><span style="color:#e1e4e8;">    -- 获取入参日期的月份第一天和最后一天</span></span>
<span class="line"><span style="color:#e1e4e8;">        curMonthBegin := to_char( date_trunc( &#39;month&#39;, currtentTime ), &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#e1e4e8;">        curMonthEnd := to_char(( date_trunc( &#39;month&#39;, currtentTime ) + INTERVAL &#39;1 month&#39; - INTERVAL &#39;1 day&#39; ), &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#e1e4e8;">        curMonthBegin := curMonthBegin || &#39; 00:00:00&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        curMonthEnd := curMonthEnd || &#39; 23:59:59&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        beginDate := currDate || &#39; 00:00:00&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        endDate := currDate || &#39; 23:59:59&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    --查询所有有效的成员信息</span></span>
<span class="line"><span style="color:#e1e4e8;">        tempSql := &#39;SELECT </span></span>
<span class="line"><span style="color:#e1e4e8;">        distinct</span></span>
<span class="line"><span style="color:#e1e4e8;">        ass.targetid as targetid,</span></span>
<span class="line"><span style="color:#e1e4e8;">        conf.target_name,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ass.targetmonth,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ass.targetvalue,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ps.orgstructid AS memberid,</span></span>
<span class="line"><span style="color:#e1e4e8;">        p2.orgstructid AS saleareaid,</span></span>
<span class="line"><span style="color:#e1e4e8;">        to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;) as yearmonth</span></span>
<span class="line"><span style="color:#e1e4e8;">        FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">        target_assignment ass</span></span>
<span class="line"><span style="color:#e1e4e8;">        inner join target_config conf on  conf.targetid =   ass.targetid</span></span>
<span class="line"><span style="color:#e1e4e8;">        LEFT JOIN pl_orgstruct ps ON ps.orgstructid = ass.memberid</span></span>
<span class="line"><span style="color:#e1e4e8;">        LEFT JOIN pl_orgtype po ON ps.orgstructtypeid = po.orgstructtypeid </span></span>
<span class="line"><span style="color:#e1e4e8;">        AND ps.orgtypeid = po.orgtypeid</span></span>
<span class="line"><span style="color:#e1e4e8;">        LEFT JOIN pl_orgstruct p1 ON ps.parentorgstructid = p1.orgstructid</span></span>
<span class="line"><span style="color:#e1e4e8;">        LEFT JOIN pl_orgstruct p2 ON p1.parentorgstructid = p2.orgstructid</span></span>
<span class="line"><span style="color:#e1e4e8;">        WHERE</span></span>
<span class="line"><span style="color:#e1e4e8;">        conf.target_name = &#39;&#39;&#39; || targetId1 || &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        and ass.targetmonth = to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        and conf.status =1</span></span>
<span class="line"><span style="color:#e1e4e8;">        and ps.platstatus = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">        and po.orgtypecategory = 3</span></span>
<span class="line"><span style="color:#e1e4e8;">        AND ps.orgstructtypeid = 1&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    --查询特定指标的本月目标</span></span>
<span class="line"><span style="color:#e1e4e8;">        targetTempSql := &#39;  select ass.memberid,ass.targetmonth,ass.targetvalue,conf.target_name from target_assignment  ass</span></span>
<span class="line"><span style="color:#e1e4e8;">        left join target_config conf on conf.targetid = ass.targetid</span></span>
<span class="line"><span style="color:#e1e4e8;">        where 1=1</span></span>
<span class="line"><span style="color:#e1e4e8;">        and  conf.target_name = &#39;&#39;&#39; || targetId1 || &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        and  conf.status =1 </span></span>
<span class="line"><span style="color:#e1e4e8;">        and  ass.targetmonth=to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;)&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        actualTempSql := &#39;select ka.userid as memberid</span></span>
<span class="line"><span style="color:#e1e4e8;">        ,to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;) as targetmonth</span></span>
<span class="line"><span style="color:#e1e4e8;">        ,COALESCE(count(1),0) as actualcount</span></span>
<span class="line"><span style="color:#e1e4e8;">        from kx_visit_actual ka</span></span>
<span class="line"><span style="color:#e1e4e8;">        left join kx_customer ks on ka.customerid = ks.id</span></span>
<span class="line"><span style="color:#e1e4e8;">        where ka.platstatus=1</span></span>
<span class="line"><span style="color:#e1e4e8;">        and ka.actualvisitdate BETWEEN &#39;&#39;&#39; || curMonthBegin || &#39;&#39;&#39; AND &#39;&#39;&#39; || curMonthEnd || &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        group by ka.userid&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        raise notice&#39;actualTempSql is : %&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        actualTempSql;</span></span>
<span class="line"><span style="color:#e1e4e8;">        storeTempSql := &#39;select case when targetTemp.targetmonth is null then temp.targetmonth else targetTemp.targetmonth end as targetmonth</span></span>
<span class="line"><span style="color:#e1e4e8;">        ,temp.saleareaid,temp.memberid</span></span>
<span class="line"><span style="color:#e1e4e8;">        ,COALESCE(targetTemp.targetvalue,0) as targetcount</span></span>
<span class="line"><span style="color:#e1e4e8;">        from (&#39; || tempSql || &#39;) temp </span></span>
<span class="line"><span style="color:#e1e4e8;">        left join (&#39; || targetTempSql || &#39;) targetTemp on temp.memberid = targetTemp.memberid&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    -- 游标遍历纪录 (当月纪录)</span></span>
<span class="line"><span style="color:#e1e4e8;">        storeTempSql := &#39;select temp.targetmonth</span></span>
<span class="line"><span style="color:#e1e4e8;">        ,temp.saleareaid,temp.memberid,temp.targetid </span></span>
<span class="line"><span style="color:#e1e4e8;">        ,COALESCE(targetTemp.targetvalue,0) as targetcount</span></span>
<span class="line"><span style="color:#e1e4e8;">        ,COALESCE(actualTemp.actualcount,0) as actualcount</span></span>
<span class="line"><span style="color:#e1e4e8;">        from (&#39; || tempSql || &#39;) temp </span></span>
<span class="line"><span style="color:#e1e4e8;">        left join (&#39; || targetTempSql || &#39;) targetTemp on temp.memberid = targetTemp.memberid and temp.targetmonth = targetTemp.targetmonth</span></span>
<span class="line"><span style="color:#e1e4e8;">        left join (&#39; || actualTempSql || &#39;) actualTemp on temp.memberid = actualTemp.memberid and temp.targetmonth = actualTemp.targetmonth&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        OPEN kpi_refcursor FOR EXECUTE storeTempSql;</span></span>
<span class="line"><span style="color:#e1e4e8;">        loop</span></span>
<span class="line"><span style="color:#e1e4e8;">        FETCH kpi_refcursor INTO ymonth,</span></span>
<span class="line"><span style="color:#e1e4e8;">        salearea,</span></span>
<span class="line"><span style="color:#e1e4e8;">        memb,</span></span>
<span class="line"><span style="color:#e1e4e8;">        temptargetid,</span></span>
<span class="line"><span style="color:#e1e4e8;">        target,</span></span>
<span class="line"><span style="color:#e1e4e8;">        actual;</span></span>
<span class="line"><span style="color:#e1e4e8;">        IF</span></span>
<span class="line"><span style="color:#e1e4e8;">            FOUND THEN--raise notice &#39;yearmonth is : %&#39;,ymonth;--   raise notice &#39;saleareaid is : %&#39;,salearea;--    raise notice &#39;targetcount is : %&#39;,target;-- raise notice &#39;actualcount is : %&#39;,actual;-- raise notice &#39;memb is : %&#39;,memb;--  raise notice &#39;temptargetid is : %&#39;,temptargetid;-- 对于数据库里有的数据就做增量修改，没有的数据就做新增 973507088175206400 to_number(salearea, &#39;999999999999999999&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">            SELECT COUNT</span></span>
<span class="line"><span style="color:#e1e4e8;">                ( * ) </span></span>
<span class="line"><span style="color:#e1e4e8;">            FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">                target_result </span></span>
<span class="line"><span style="color:#e1e4e8;">            WHERE</span></span>
<span class="line"><span style="color:#e1e4e8;">                targetmonth = ymonth </span></span>
<span class="line"><span style="color:#e1e4e8;">                AND targetid = temptargetid </span></span>
<span class="line"><span style="color:#e1e4e8;">                AND memberid = memb INTO exist;</span></span>
<span class="line"><span style="color:#e1e4e8;">            IF</span></span>
<span class="line"><span style="color:#e1e4e8;">                exist &gt; 0 THEN--raise notice &#39;update data &#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    UPDATE target_result </span></span>
<span class="line"><span style="color:#e1e4e8;">                    SET finished_number = actual,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    platupdateop = memb,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    platupdatetime = now() </span></span>
<span class="line"><span style="color:#e1e4e8;">                WHERE</span></span>
<span class="line"><span style="color:#e1e4e8;">                    targetmonth = ymonth </span></span>
<span class="line"><span style="color:#e1e4e8;">                    AND targetid = temptargetid </span></span>
<span class="line"><span style="color:#e1e4e8;">                    AND memberid = memb;</span></span>
<span class="line"><span style="color:#e1e4e8;">                ELSE --raise notice &#39;insert data &#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                INSERT INTO target_result ( targetmonth, targetid, memberid, finished_number, platcreateop, platcreatetime, platupdatetime )</span></span>
<span class="line"><span style="color:#e1e4e8;">                VALUES</span></span>
<span class="line"><span style="color:#e1e4e8;">                    (</span></span>
<span class="line"><span style="color:#e1e4e8;">                        ymonth,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        temptargetid,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        memb,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        actual,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        memb,</span></span>
<span class="line"><span style="color:#e1e4e8;">                        now(),</span></span>
<span class="line"><span style="color:#e1e4e8;">                    now());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            END IF;</span></span>
<span class="line"><span style="color:#e1e4e8;">            ELSE exit;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        END IF;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    END loop;</span></span>
<span class="line"><span style="color:#e1e4e8;">    CLOSE kpi_refcursor;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    END;</span></span>
<span class="line"><span style="color:#e1e4e8;">    $BODY$ LANGUAGE plpgsql VOLATILE COST 100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">CREATE </span></span>
<span class="line"><span style="color:#24292e;">        OR REPLACE FUNCTION &quot;public&quot;.&quot;f_get_target_member_visitcount&quot; ( &quot;currdate&quot; VARCHAR ) RETURNS &quot;pg_catalog&quot;.&quot;void&quot; AS $BODY$ DECLARE</span></span>
<span class="line"><span style="color:#24292e;">        deleteSql TEXT;</span></span>
<span class="line"><span style="color:#24292e;">    tempSql TEXT;</span></span>
<span class="line"><span style="color:#24292e;">    targetTempSql TEXT;</span></span>
<span class="line"><span style="color:#24292e;">    actualTempSql TEXT;</span></span>
<span class="line"><span style="color:#24292e;">    storeTempSql TEXT;</span></span>
<span class="line"><span style="color:#24292e;">    insertSql TEXT;</span></span>
<span class="line"><span style="color:#24292e;">    curYearMonth VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    curYear VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    curMonth VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    currtentTime DATE;</span></span>
<span class="line"><span style="color:#24292e;">    curMonthBegin VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    curMonthEnd VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    itemId VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    targetId1 VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    beginDate VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    endDate VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    kpi_refcursor refcursor;</span></span>
<span class="line"><span style="color:#24292e;">    salearea BIGINT;</span></span>
<span class="line"><span style="color:#24292e;">    memb BIGINT;</span></span>
<span class="line"><span style="color:#24292e;">    ymonth VARCHAR;</span></span>
<span class="line"><span style="color:#24292e;">    target INT;</span></span>
<span class="line"><span style="color:#24292e;">    temptargetid BIGINT;</span></span>
<span class="line"><span style="color:#24292e;">    actual INT;</span></span>
<span class="line"><span style="color:#24292e;">    exist INT;</span></span>
<span class="line"><span style="color:#24292e;">    BEGIN-- 拜访次数 itemid=1</span></span>
<span class="line"><span style="color:#24292e;">        itemId := &#39;1500755543076245504&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    -- 牌坊次数 targetId</span></span>
<span class="line"><span style="color:#24292e;">        targetId1 := &#39;拜访次数&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        IF</span></span>
<span class="line"><span style="color:#24292e;">            currDate IS NULL </span></span>
<span class="line"><span style="color:#24292e;">            OR currDate = &#39;&#39; THEN</span></span>
<span class="line"><span style="color:#24292e;">                currDate := &#39;&#39; || to_char( CURRENT_DATE - INTERVAL &#39;1 D&#39;, &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        END IF;</span></span>
<span class="line"><span style="color:#24292e;">    --raise notice &#39;currDate is : %&#39;,currDate;</span></span>
<span class="line"><span style="color:#24292e;">        currtentTime := to_date( currDate, &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#24292e;">        curYear := EXTRACT ( YEAR FROM currtentTime );</span></span>
<span class="line"><span style="color:#24292e;">        curMonth := EXTRACT ( MONTH FROM currtentTime );</span></span>
<span class="line"><span style="color:#24292e;">    -- 获取入参日期的年月</span></span>
<span class="line"><span style="color:#24292e;">        curYearMonth := to_char( currtentTime, &#39;yyyy-MM&#39; );</span></span>
<span class="line"><span style="color:#24292e;">    -- 获取入参日期的月份第一天和最后一天</span></span>
<span class="line"><span style="color:#24292e;">        curMonthBegin := to_char( date_trunc( &#39;month&#39;, currtentTime ), &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#24292e;">        curMonthEnd := to_char(( date_trunc( &#39;month&#39;, currtentTime ) + INTERVAL &#39;1 month&#39; - INTERVAL &#39;1 day&#39; ), &#39;yyyy-MM-dd&#39; );</span></span>
<span class="line"><span style="color:#24292e;">        curMonthBegin := curMonthBegin || &#39; 00:00:00&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        curMonthEnd := curMonthEnd || &#39; 23:59:59&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        beginDate := currDate || &#39; 00:00:00&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        endDate := currDate || &#39; 23:59:59&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    --查询所有有效的成员信息</span></span>
<span class="line"><span style="color:#24292e;">        tempSql := &#39;SELECT </span></span>
<span class="line"><span style="color:#24292e;">        distinct</span></span>
<span class="line"><span style="color:#24292e;">        ass.targetid as targetid,</span></span>
<span class="line"><span style="color:#24292e;">        conf.target_name,</span></span>
<span class="line"><span style="color:#24292e;">        ass.targetmonth,</span></span>
<span class="line"><span style="color:#24292e;">        ass.targetvalue,</span></span>
<span class="line"><span style="color:#24292e;">        ps.orgstructid AS memberid,</span></span>
<span class="line"><span style="color:#24292e;">        p2.orgstructid AS saleareaid,</span></span>
<span class="line"><span style="color:#24292e;">        to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;) as yearmonth</span></span>
<span class="line"><span style="color:#24292e;">        FROM</span></span>
<span class="line"><span style="color:#24292e;">        target_assignment ass</span></span>
<span class="line"><span style="color:#24292e;">        inner join target_config conf on  conf.targetid =   ass.targetid</span></span>
<span class="line"><span style="color:#24292e;">        LEFT JOIN pl_orgstruct ps ON ps.orgstructid = ass.memberid</span></span>
<span class="line"><span style="color:#24292e;">        LEFT JOIN pl_orgtype po ON ps.orgstructtypeid = po.orgstructtypeid </span></span>
<span class="line"><span style="color:#24292e;">        AND ps.orgtypeid = po.orgtypeid</span></span>
<span class="line"><span style="color:#24292e;">        LEFT JOIN pl_orgstruct p1 ON ps.parentorgstructid = p1.orgstructid</span></span>
<span class="line"><span style="color:#24292e;">        LEFT JOIN pl_orgstruct p2 ON p1.parentorgstructid = p2.orgstructid</span></span>
<span class="line"><span style="color:#24292e;">        WHERE</span></span>
<span class="line"><span style="color:#24292e;">        conf.target_name = &#39;&#39;&#39; || targetId1 || &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">        and ass.targetmonth = to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        and conf.status =1</span></span>
<span class="line"><span style="color:#24292e;">        and ps.platstatus = 1</span></span>
<span class="line"><span style="color:#24292e;">        and po.orgtypecategory = 3</span></span>
<span class="line"><span style="color:#24292e;">        AND ps.orgstructtypeid = 1&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    --查询特定指标的本月目标</span></span>
<span class="line"><span style="color:#24292e;">        targetTempSql := &#39;  select ass.memberid,ass.targetmonth,ass.targetvalue,conf.target_name from target_assignment  ass</span></span>
<span class="line"><span style="color:#24292e;">        left join target_config conf on conf.targetid = ass.targetid</span></span>
<span class="line"><span style="color:#24292e;">        where 1=1</span></span>
<span class="line"><span style="color:#24292e;">        and  conf.target_name = &#39;&#39;&#39; || targetId1 || &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">        and  conf.status =1 </span></span>
<span class="line"><span style="color:#24292e;">        and  ass.targetmonth=to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;)&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        actualTempSql := &#39;select ka.userid as memberid</span></span>
<span class="line"><span style="color:#24292e;">        ,to_char(to_date(&#39;&#39;&#39; || curYearMonth || &#39;&#39;&#39;,&#39;&#39;yyyy-mm&#39;&#39;),&#39;&#39;yyyy-mm&#39;&#39;) as targetmonth</span></span>
<span class="line"><span style="color:#24292e;">        ,COALESCE(count(1),0) as actualcount</span></span>
<span class="line"><span style="color:#24292e;">        from kx_visit_actual ka</span></span>
<span class="line"><span style="color:#24292e;">        left join kx_customer ks on ka.customerid = ks.id</span></span>
<span class="line"><span style="color:#24292e;">        where ka.platstatus=1</span></span>
<span class="line"><span style="color:#24292e;">        and ka.actualvisitdate BETWEEN &#39;&#39;&#39; || curMonthBegin || &#39;&#39;&#39; AND &#39;&#39;&#39; || curMonthEnd || &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">        group by ka.userid&#39;;</span></span>
<span class="line"><span style="color:#24292e;">        raise notice&#39;actualTempSql is : %&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        actualTempSql;</span></span>
<span class="line"><span style="color:#24292e;">        storeTempSql := &#39;select case when targetTemp.targetmonth is null then temp.targetmonth else targetTemp.targetmonth end as targetmonth</span></span>
<span class="line"><span style="color:#24292e;">        ,temp.saleareaid,temp.memberid</span></span>
<span class="line"><span style="color:#24292e;">        ,COALESCE(targetTemp.targetvalue,0) as targetcount</span></span>
<span class="line"><span style="color:#24292e;">        from (&#39; || tempSql || &#39;) temp </span></span>
<span class="line"><span style="color:#24292e;">        left join (&#39; || targetTempSql || &#39;) targetTemp on temp.memberid = targetTemp.memberid&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    -- 游标遍历纪录 (当月纪录)</span></span>
<span class="line"><span style="color:#24292e;">        storeTempSql := &#39;select temp.targetmonth</span></span>
<span class="line"><span style="color:#24292e;">        ,temp.saleareaid,temp.memberid,temp.targetid </span></span>
<span class="line"><span style="color:#24292e;">        ,COALESCE(targetTemp.targetvalue,0) as targetcount</span></span>
<span class="line"><span style="color:#24292e;">        ,COALESCE(actualTemp.actualcount,0) as actualcount</span></span>
<span class="line"><span style="color:#24292e;">        from (&#39; || tempSql || &#39;) temp </span></span>
<span class="line"><span style="color:#24292e;">        left join (&#39; || targetTempSql || &#39;) targetTemp on temp.memberid = targetTemp.memberid and temp.targetmonth = targetTemp.targetmonth</span></span>
<span class="line"><span style="color:#24292e;">        left join (&#39; || actualTempSql || &#39;) actualTemp on temp.memberid = actualTemp.memberid and temp.targetmonth = actualTemp.targetmonth&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        OPEN kpi_refcursor FOR EXECUTE storeTempSql;</span></span>
<span class="line"><span style="color:#24292e;">        loop</span></span>
<span class="line"><span style="color:#24292e;">        FETCH kpi_refcursor INTO ymonth,</span></span>
<span class="line"><span style="color:#24292e;">        salearea,</span></span>
<span class="line"><span style="color:#24292e;">        memb,</span></span>
<span class="line"><span style="color:#24292e;">        temptargetid,</span></span>
<span class="line"><span style="color:#24292e;">        target,</span></span>
<span class="line"><span style="color:#24292e;">        actual;</span></span>
<span class="line"><span style="color:#24292e;">        IF</span></span>
<span class="line"><span style="color:#24292e;">            FOUND THEN--raise notice &#39;yearmonth is : %&#39;,ymonth;--   raise notice &#39;saleareaid is : %&#39;,salearea;--    raise notice &#39;targetcount is : %&#39;,target;-- raise notice &#39;actualcount is : %&#39;,actual;-- raise notice &#39;memb is : %&#39;,memb;--  raise notice &#39;temptargetid is : %&#39;,temptargetid;-- 对于数据库里有的数据就做增量修改，没有的数据就做新增 973507088175206400 to_number(salearea, &#39;999999999999999999&#39;)</span></span>
<span class="line"><span style="color:#24292e;">            SELECT COUNT</span></span>
<span class="line"><span style="color:#24292e;">                ( * ) </span></span>
<span class="line"><span style="color:#24292e;">            FROM</span></span>
<span class="line"><span style="color:#24292e;">                target_result </span></span>
<span class="line"><span style="color:#24292e;">            WHERE</span></span>
<span class="line"><span style="color:#24292e;">                targetmonth = ymonth </span></span>
<span class="line"><span style="color:#24292e;">                AND targetid = temptargetid </span></span>
<span class="line"><span style="color:#24292e;">                AND memberid = memb INTO exist;</span></span>
<span class="line"><span style="color:#24292e;">            IF</span></span>
<span class="line"><span style="color:#24292e;">                exist &gt; 0 THEN--raise notice &#39;update data &#39;;</span></span>
<span class="line"><span style="color:#24292e;">                    UPDATE target_result </span></span>
<span class="line"><span style="color:#24292e;">                    SET finished_number = actual,</span></span>
<span class="line"><span style="color:#24292e;">                    platupdateop = memb,</span></span>
<span class="line"><span style="color:#24292e;">                    platupdatetime = now() </span></span>
<span class="line"><span style="color:#24292e;">                WHERE</span></span>
<span class="line"><span style="color:#24292e;">                    targetmonth = ymonth </span></span>
<span class="line"><span style="color:#24292e;">                    AND targetid = temptargetid </span></span>
<span class="line"><span style="color:#24292e;">                    AND memberid = memb;</span></span>
<span class="line"><span style="color:#24292e;">                ELSE --raise notice &#39;insert data &#39;;</span></span>
<span class="line"><span style="color:#24292e;">                INSERT INTO target_result ( targetmonth, targetid, memberid, finished_number, platcreateop, platcreatetime, platupdatetime )</span></span>
<span class="line"><span style="color:#24292e;">                VALUES</span></span>
<span class="line"><span style="color:#24292e;">                    (</span></span>
<span class="line"><span style="color:#24292e;">                        ymonth,</span></span>
<span class="line"><span style="color:#24292e;">                        temptargetid,</span></span>
<span class="line"><span style="color:#24292e;">                        memb,</span></span>
<span class="line"><span style="color:#24292e;">                        actual,</span></span>
<span class="line"><span style="color:#24292e;">                        memb,</span></span>
<span class="line"><span style="color:#24292e;">                        now(),</span></span>
<span class="line"><span style="color:#24292e;">                    now());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            END IF;</span></span>
<span class="line"><span style="color:#24292e;">            ELSE exit;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        END IF;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    END loop;</span></span>
<span class="line"><span style="color:#24292e;">    CLOSE kpi_refcursor;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    END;</span></span>
<span class="line"><span style="color:#24292e;">    $BODY$ LANGUAGE plpgsql VOLATILE COST 100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br></div></div><h2 id="扩展点" tabindex="-1">扩展点 <a class="header-anchor" href="#扩展点" aria-label="Permalink to &quot;扩展点&quot;">​</a></h2><ul><li>1.相关业务扩展点 如内置指标 则抒写好存储过程 配置相关业务的指标名称（目标项配置界面）</li><li>2.调度会遍历相关 有效人员已经分配的指标 ，执行你编写的存储过程</li><li>3.生成数据会插入相关人员的目标结果表</li></ul>`,37),t=[p];function r(c,o,i,m,y,u){return n(),a("div",null,t)}const g=s(l,[["render",r]]);export{d as __pageData,g as default};
