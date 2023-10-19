import{_ as t,o as e,c as l,Q as a}from"./chunks/framework.d084db19.js";const c=JSON.parse('{"title":"参考手册","description":"","frontmatter":{"title":"参考手册","date":"2020-07-03T17:34:14.000Z"},"headers":[],"relativePath":"doc/wpdoc/参考手册.md","filePath":"doc/wpdoc/参考手册.md"}'),d={name:"doc/wpdoc/参考手册.md"},r=a('<h1 id="_3-参考手册" tabindex="-1">3. 参考手册 <a class="header-anchor" href="#_3-参考手册" aria-label="Permalink to &quot;3\\. 参考手册&quot;">​</a></h1><h2 id="_3-1-核心库api检索" tabindex="-1">3.1. 核心库API检索 <a class="header-anchor" href="#_3-1-核心库api检索" aria-label="Permalink to &quot;3.1. 核心库API检索&quot;">​</a></h2><h3 id="_3-1-1-bo-业务对象" tabindex="-1">3.1.1. BO 业务对象 <a class="header-anchor" href="#_3-1-1-bo-业务对象" aria-label="Permalink to &quot;3.1.1. BO 业务对象&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="/doc/wpdoc/db数据库操作.html#_3-1-3-1-增删改">BO.new()</a></td><td style="text-align:left;">实例化业务对象</td></tr></tbody></table><hr><h3 id="_3-1-2-db-数据库操作" tabindex="-1">3.1.2. <a href="/doc/wpdoc/db数据库操作.html#_3-1-3-1-增删改">DB 数据库操作</a> <a class="header-anchor" href="#_3-1-2-db-数据库操作" aria-label="Permalink to &quot;3.1.2. [DB 数据库操作](/doc/wpdoc/db数据库操作#_3-1-3-1-增删改)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">DB.insert()</td><td style="text-align:left;">插入</td></tr><tr><td style="text-align:left;">DB.update()</td><td style="text-align:left;">修改</td></tr><tr><td style="text-align:left;">DB.delete()</td><td style="text-align:left;">删除</td></tr><tr><td style="text-align:left;">DB.save()</td><td style="text-align:left;">保存</td></tr><tr><td style="text-align:left;">DB.replace()</td><td style="text-align:left;">条件全表替换</td></tr></tbody></table><hr><h3 id="_3-1-3-date-日期" tabindex="-1">3.1.3. <a href="/doc/wpdoc/datetime日期时间.html">Date 日期</a> <a class="header-anchor" href="#_3-1-3-date-日期" aria-label="Permalink to &quot;3.1.3. [Date 日期](/doc/wpdoc/datetime日期时间)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Date.parseDate()</td><td style="text-align:left;">时间戳--&gt;Date</td></tr><tr><td style="text-align:left;">new Date([时间字符串])</td><td style="text-align:left;">时间字符串--&gt;Date</td></tr><tr><td style="text-align:left;">[Date对象].Format()</td><td style="text-align:left;">Date--&gt;时间字符串</td></tr><tr><td style="text-align:left;">[Date对象].time()</td><td style="text-align:left;">Date--&gt;&quot;yyyy-MM-dd HH:mm:ss&quot;</td></tr><tr><td style="text-align:left;">[Date对象].date()</td><td style="text-align:left;">Date--&gt;&quot;yyyy-MM-dd&quot;</td></tr><tr><td style="text-align:left;">[Date对象].getDayBegin()</td><td style="text-align:left;">获取今日开始</td></tr><tr><td style="text-align:left;">[Date对象].getDayEnd()</td><td style="text-align:left;">获取今日结束</td></tr><tr><td style="text-align:left;">[Date对象].getLastDayBegin()</td><td style="text-align:left;">获取昨日开始</td></tr><tr><td style="text-align:left;">[Date对象].getLastDayEnd()</td><td style="text-align:left;">获取昨日结束</td></tr><tr><td style="text-align:left;">[Date对象].getWeekBegin()</td><td style="text-align:left;">获取本周开始</td></tr><tr><td style="text-align:left;">[Date对象].getWeekEnd()</td><td style="text-align:left;">获取本周结束</td></tr><tr><td style="text-align:left;">[Date对象].getMonthBegin()</td><td style="text-align:left;">获取本月开始</td></tr><tr><td style="text-align:left;">[Date对象].getMonthEnd()</td><td style="text-align:left;">获取本月结束</td></tr><tr><td style="text-align:left;">[Date对象].getLastMonthBegin()</td><td style="text-align:left;">获取上月开始</td></tr><tr><td style="text-align:left;">[Date对象].getLastMonthEnd()</td><td style="text-align:left;">获取上月结束</td></tr><tr><td style="text-align:left;">[Date对象].getYearBegin()</td><td style="text-align:left;">获取今年开始</td></tr><tr><td style="text-align:left;">[Date对象].getYearEnd()</td><td style="text-align:left;">获取今年结束</td></tr><tr><td style="text-align:left;">[Date对象].getLastYearBegin()</td><td style="text-align:left;">获取去年开始</td></tr><tr><td style="text-align:left;">[Date对象].getLastYearEnd()</td><td style="text-align:left;">获取去年结束</td></tr><tr><td style="text-align:left;">[Date对象].getQuarterBegin()</td><td style="text-align:left;">获取本季度开始</td></tr><tr><td style="text-align:left;">[Date对象].getQuarterEnd()</td><td style="text-align:left;">获取本季度结束</td></tr></tbody></table><hr><h3 id="_3-1-4-fly-工具库" tabindex="-1">3.1.4. FLY 工具库 <a class="header-anchor" href="#_3-1-4-fly-工具库" aria-label="Permalink to &quot;3.1.4. FLY 工具库&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./core/fly.html#3151-打印日志">FLY.log()</a></td><td style="text-align:left;">记录日志</td></tr><tr><td style="text-align:left;"><a href="./core/fly.html#3152-分布式id生成">FLY.genId()</a></td><td style="text-align:left;">分布式ID生成</td></tr><tr><td style="text-align:left;"><a href="./core/fly.html#3153-自增序列">FLY.nextval()</a></td><td style="text-align:left;">自增序列</td></tr><tr><td style="text-align:left;"><a href="./core/fly.html#3154-地址转经纬度高德地图">FLY.geocode()</a></td><td style="text-align:left;">中文地址转换成经纬度</td></tr><tr><td style="text-align:left;"><a href="./core/fly.html#3154-js对象去除属性左右两端空格">FLY.trimObjAttrValue()</a></td><td style="text-align:left;">js对象去除属性左右两端空格</td></tr></tbody></table><hr><h3 id="_3-1-5-now-当前时间" tabindex="-1">3.1.5. <a href="/doc/wpdoc/datetime日期时间.html#_3-1-4-1-当前日期">NOW 当前时间</a> <a class="header-anchor" href="#_3-1-5-now-当前时间" aria-label="Permalink to &quot;3.1.5. [NOW 当前时间](/doc/wpdoc/datetime日期时间#_3-1-4-1-当前日期)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">NOW.time()</td><td style="text-align:left;">当前时间，精确到毫秒</td></tr><tr><td style="text-align:left;">NOW.date()</td><td style="text-align:left;">当前时间，精确到天</td></tr></tbody></table><hr><h3 id="_3-1-6-number-数值转换" tabindex="-1">3.1.6. <a href="/doc/wpdoc/fly工具库.html#_3-1-5-6-数值转换">Number 数值转换</a> <a class="header-anchor" href="#_3-1-6-number-数值转换" aria-label="Permalink to &quot;3.1.6. [Number 数值转换](/doc/wpdoc/fly工具库#_3-1-5-6-数值转换)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Number.toRoundDecimal</td><td style="text-align:left;">保留小数(四舍五入)</td></tr><tr><td style="text-align:left;">Number.toFloorDecimal</td><td style="text-align:left;">保留小数(全部舍掉)</td></tr></tbody></table><hr><h3 id="_3-1-7-session-登录会话信息" tabindex="-1">3.1.7. <a href="/doc/wpdoc/session登录会话信息.html#_3-1-2-登录会话信息">SESSION 登录会话信息</a> <a class="header-anchor" href="#_3-1-7-session-登录会话信息" aria-label="Permalink to &quot;3.1.7. [SESSION 登录会话信息](/doc/wpdoc/session登录会话信息#_3-1-2-登录会话信息)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">SESSION.orgcode</td><td style="text-align:left;">组织编码</td></tr><tr><td style="text-align:left;">SESSION.usercode</td><td style="text-align:left;">用户编码</td></tr><tr><td style="text-align:left;">SESSION.pscode</td><td style="text-align:left;">岗位编码</td></tr><tr><td style="text-align:left;">SESSION.mbcode</td><td style="text-align:left;">成员编码</td></tr><tr><td style="text-align:left;">SESSION.accode</td><td style="text-align:left;">账号编码</td></tr><tr><td style="text-align:left;">SESSION.ctcode</td><td style="text-align:left;">客户端类型编码(1-web管理端、2-iPhone端、3-Android)</td></tr><tr><td style="text-align:left;">SESSION.rpscode</td><td style="text-align:left;">职位编码(模板岗位编码)</td></tr><tr><td style="text-align:left;">SESSION.orgdim</td><td style="text-align:left;">组织维度Id</td></tr><tr><td style="text-align:left;">SESSION.codepath</td><td style="text-align:left;">code编码</td></tr><tr><td style="text-align:left;">SESSION.isleaforg</td><td style="text-align:left;">判断当前登录人是否是组织架构叶子节点的</td></tr></tbody></table><hr><h3 id="_3-1-8-string-字符串处理" tabindex="-1">3.1.8. <a href="/doc/wpdoc/fly工具库.html#_3-1-5-5-字符串处理">String 字符串处理</a> <a class="header-anchor" href="#_3-1-8-string-字符串处理" aria-label="Permalink to &quot;3.1.8. [String 字符串处理](/doc/wpdoc/fly工具库#_3-1-5-5-字符串处理)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">String.substringLastAt</td><td style="text-align:left;">根据某字符截取字符串</td></tr><tr><td style="text-align:left;">String.isBlank</td><td style="text-align:left;">判断字符串是否为空</td></tr></tbody></table><hr><h3 id="_3-1-7-tx-事务控制" tabindex="-1">3.1.7. <a href="/doc/wpdoc/db数据库操作.html#_3-1-3-2-事务控制">TX 事务控制</a> <a class="header-anchor" href="#_3-1-7-tx-事务控制" aria-label="Permalink to &quot;3.1.7. [TX 事务控制](/doc/wpdoc/db数据库操作#_3-1-3-2-事务控制)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">TX.begin()</td><td style="text-align:left;">开启事务</td></tr><tr><td style="text-align:left;">TX.commit()</td><td style="text-align:left;">提交事务</td></tr><tr><td style="text-align:left;">TX.rollback()</td><td style="text-align:left;">回滚事务</td></tr></tbody></table><hr><h2 id="_3-2-扩展库api检索" tabindex="-1">3.2. 扩展库API检索 <a class="header-anchor" href="#_3-2-扩展库api检索" aria-label="Permalink to &quot;3.2. 扩展库API检索&quot;">​</a></h2><h3 id="_3-2-1-account-平台账号模块" tabindex="-1">3.2.1. ACCOUNT 平台账号模块 <a class="header-anchor" href="#_3-2-1-account-平台账号模块" aria-label="Permalink to &quot;3.2.1. ACCOUNT 平台账号模块&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./extension/account.html#351-新增账号">ACCOUNT.add()</a></td><td style="text-align:left;">新增账号</td></tr><tr><td style="text-align:left;"><a href="./extension/account.html#352-启用账号">ACCOUNT.enable()</a></td><td style="text-align:left;">启用账号</td></tr><tr><td style="text-align:left;"><a href="./extension/account.html#353-停用账号">ACCOUNT.disable()</a></td><td style="text-align:left;">停用账号</td></tr></tbody></table><hr><h3 id="_3-2-2-config-系统配置" tabindex="-1">3.2.2. <a href="/doc/wpdoc/configuration系统配置.html#_3-6-系统配置">CONFIG 系统配置</a> <a class="header-anchor" href="#_3-2-2-config-系统配置" aria-label="Permalink to &quot;3.2.2. [CONFIG 系统配置](/doc/wpdoc/configuration系统配置#_3-6-系统配置)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">CONFIG.get()</td><td style="text-align:left;">获取指定key的系统配置JSON</td></tr></tbody></table><hr><h3 id="_3-2-3-msg-消息模块" tabindex="-1">3.2.3. <a href="/doc/wpdoc/message消息.html#_3-4-消息">MSG 消息模块</a> <a class="header-anchor" href="#_3-2-3-msg-消息模块" aria-label="Permalink to &quot;3.2.3. [MSG 消息模块](/doc/wpdoc/message消息#_3-4-消息)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">MSG.send()</td><td style="text-align:left;">发送消息</td></tr></tbody></table><hr><h3 id="_3-2-4-pinyin-拼音转换模块" tabindex="-1">3.2.4. <a href="/doc/wpdoc/pinyin汉字拼音转换.html#_3-7-汉字拼音转换">PINYIN 拼音转换模块</a> <a class="header-anchor" href="#_3-2-4-pinyin-拼音转换模块" aria-label="Permalink to &quot;3.2.4. [PINYIN 拼音转换模块](/doc/wpdoc/pinyin汉字拼音转换#_3-7-汉字拼音转换)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">PINYIN.get()</td><td style="text-align:left;">汉字转小写拼音</td></tr><tr><td style="text-align:left;">PINYIN.getshort()</td><td style="text-align:left;">汉字转小写拼音简写</td></tr></tbody></table><hr><h3 id="_3-2-5-workflow-工作流模块" tabindex="-1">3.2.5. <a href="/doc/wpdoc/workflow工作流.html#_3-4-工作流">WORKFLOW 工作流模块</a> <a class="header-anchor" href="#_3-2-5-workflow-工作流模块" aria-label="Permalink to &quot;3.2.5. [WORKFLOW 工作流模块](/doc/wpdoc/workflow工作流#_3-4-工作流)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">对象</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="/doc/wpdoc/workflow工作流.html#_3-4-1-当前流程信息">WorkflowInfo</a></td><td style="text-align:left;">当前上下文中的流程信息</td></tr></tbody></table><hr><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="/doc/wpdoc/workflow工作流.html#_3-4-2-流程发起">WORKFLOW.allocate()</a></td><td style="text-align:left;">流程发起</td></tr><tr><td style="text-align:left;"><a href="/doc/wpdoc/workflow工作流.html#_3-4-2-流程提交">WORKFLOW.submit()</a></td><td style="text-align:left;">流程提交</td></tr><tr><td style="text-align:left;"><a href="/doc/wpdoc/workflow工作流.html#_3-4-4-流程外部终止">WORKFLOW.terminal()</a></td><td style="text-align:left;">流程外部终止</td></tr></tbody></table><hr><h3 id="_3-2-6-cache-缓存模块" tabindex="-1">3.2.6. CACHE 缓存模块 <a class="header-anchor" href="#_3-2-6-cache-缓存模块" aria-label="Permalink to &quot;3.2.6. CACHE 缓存模块&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">CACHE.put()</td><td style="text-align:left;">添加</td></tr><tr><td style="text-align:left;">CACHE.get()</td><td style="text-align:left;">获取</td></tr><tr><td style="text-align:left;">CACHE.delete()</td><td style="text-align:left;">删除</td></tr><tr><td style="text-align:left;">CACHE.increment()</td><td style="text-align:left;">增加</td></tr></tbody></table><hr><h3 id="_3-2-7-opendata-模块" tabindex="-1">3.2.7. <a href="/doc/wpdoc/opendata服务.html#_3-9-1-http接口调用">OPENDATA 模块</a> <a class="header-anchor" href="#_3-2-7-opendata-模块" aria-label="Permalink to &quot;3.2.7. [OPENDATA 模块](/doc/wpdoc/opendata服务#_3-9-1-http接口调用)&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">函数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">OPENDATA.http()</td><td style="text-align:left;">http请求调用</td></tr><tr><td style="text-align:left;">OPENDATA.query()</td><td style="text-align:left;">数据库查询</td></tr><tr><td style="text-align:left;">OPENDATA.update()</td><td style="text-align:left;">数据库更新</td></tr><tr><td style="text-align:left;">OPENDATA.ws()</td><td style="text-align:left;">webservice接口调用</td></tr></tbody></table><hr>',53),n=[r];function i(h,s,o,f,y,g){return e(),l("div",null,n)}const b=t(d,[["render",i]]);export{c as __pageData,b as default};
