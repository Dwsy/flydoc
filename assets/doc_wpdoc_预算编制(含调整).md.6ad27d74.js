import{_ as t,o as d,c as a,Q as r}from"./chunks/framework.d084db19.js";const u=JSON.parse('{"title":"预算编制(含调整)","description":"","frontmatter":{"title":"预算编制(含调整)","date":"2021-10-11T16:45:21.000Z"},"headers":[],"relativePath":"doc/wpdoc/预算编制(含调整).md","filePath":"doc/wpdoc/预算编制(含调整).md"}'),e={name:"doc/wpdoc/预算编制(含调整).md"},h=r('<h3 id="业务组件简介" tabindex="-1">业务组件简介 <a class="header-anchor" href="#业务组件简介" aria-label="Permalink to &quot;业务组件简介&quot;">​</a></h3><p>编制企业的年度预算<br> 1.预算编制维度：组织、品牌、科目、年-月<br> 2.支持批量导入和手动新增的方式录入预算，确认发布后生效<br> 3.支持批量导入和手动调整的方式调整预算，录入后直接生效<br> 4.支持按照自然年和非自然年管理预算</p><h3 id="_1-功能描述" tabindex="-1">1. 功能描述 <a class="header-anchor" href="#_1-功能描述" aria-label="Permalink to &quot;1\\. 功能描述&quot;">​</a></h3><p>支持财务人员将线下制定好的预算导入到系统内，并对系统进行调整；有了预算之后才能支持方案的申请，控制方案的申请。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4.%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A32860.png" alt=""></p><h3 id="_2-组件原型" tabindex="-1">2. 组件原型 <a class="header-anchor" href="#_2-组件原型" aria-label="Permalink to &quot;2\\. 组件原型&quot;">​</a></h3><h4 id="_2-1-预算编制" tabindex="-1">2.1. 预算编制 <a class="header-anchor" href="#_2-1-预算编制" aria-label="Permalink to &quot;2.1. 预算编制&quot;">​</a></h4><p>预算列表 界面：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4.%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A32881.png" alt=""></p><p>新增预算 界面：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4.%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A32892.png" alt=""><br> 新增审批 界面：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4.%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A32903.png" alt=""></p><p>调整预算 界面：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/4.%E9%9C%80%E6%B1%82%E6%96%87%E6%A1%A32914.png" alt=""></p><h3 id="_3-业务规则" tabindex="-1">3. 业务规则 <a class="header-anchor" href="#_3-业务规则" aria-label="Permalink to &quot;3\\. 业务规则&quot;">​</a></h3><h4 id="_3-1-业务流程" tabindex="-1">3.1. 业务流程 <a class="header-anchor" href="#_3-1-业务流程" aria-label="Permalink to &quot;3.1. 业务流程&quot;">​</a></h4><p>见“预算管理-流程绘制”</p><h4 id="_3-2-流程设计" tabindex="-1">3.2. 流程设计 <a class="header-anchor" href="#_3-2-流程设计" aria-label="Permalink to &quot;3.2. 流程设计&quot;">​</a></h4><p>见“预算管理-流程文档”</p><h4 id="_3-3-规则说明" tabindex="-1">3.3. 规则说明 <a class="header-anchor" href="#_3-3-规则说明" aria-label="Permalink to &quot;3.3. 规则说明&quot;">​</a></h4><h4 id="_3-3-1-预算编制" tabindex="-1">3.3.1. 预算编制 <a class="header-anchor" href="#_3-3-1-预算编制" aria-label="Permalink to &quot;3.3.1. 预算编制&quot;">​</a></h4><h4 id="_3-3-1-1-列表" tabindex="-1">3.3.1.1. 列表 <a class="header-anchor" href="#_3-3-1-1-列表" aria-label="Permalink to &quot;3.3.1.1. 列表&quot;">​</a></h4><h5 id="_1-1-1-1-1-筛选条件" tabindex="-1">1.1.1.1.1 <strong>筛选条件</strong> <a class="header-anchor" href="#_1-1-1-1-1-筛选条件" aria-label="Permalink to &quot;1.1.1.1.1 **筛选条件**&quot;">​</a></h5><table><thead><tr><th>序号</th><th>名称</th><th>类型</th><th>默认值</th><th>规则</th></tr></thead><tbody><tr><td>1</td><td>营销组织</td><td>组织树</td><td>无</td><td>查询选择下的预算</td></tr><tr><td>2</td><td>品牌</td><td>下拉单选</td><td>无</td><td>可选内容包括：养元、红牛</td></tr><tr><td>3</td><td>预算年度</td><td>日期控件</td><td>当年</td><td>查询选择年度的预算</td></tr><tr><td>4</td><td>预算科目</td><td>下拉单选</td><td>无</td><td>查询选择科目下的预算</td></tr></tbody></table><h5 id="_1-1-1-1-2-功能设计" tabindex="-1">1.1.1.1.2 <strong>功能设计</strong> <a class="header-anchor" href="#_1-1-1-1-2-功能设计" aria-label="Permalink to &quot;1.1.1.1.2 **功能设计**&quot;">​</a></h5><table><thead><tr><th>序号</th><th>功能菜单</th><th>功能要求</th></tr></thead><tbody><tr><td>1</td><td>新增</td><td>点击进入【新增】界面，规则详见： 3.3.1.2.新增</td></tr><tr><td>2</td><td>导入</td><td>通过导入录入预算，按照“组织+品牌+预算年月+科目”判重，如果重复则导入失败。</td></tr><tr><td>3</td><td>预算审核</td><td>点击进入【预算发布】界面，规则详见： 3.3.1.3.预算审核</td></tr><tr><td>4</td><td>调整</td><td>点击进入【新增】界面，规则详见： 3.3.1.4.预算调整</td></tr><tr><td>5</td><td>调整导入</td><td>通过导入进行预算调整，具体规则同新增。</td></tr><tr><td>6</td><td>导出</td><td>导出当前查询的预算明细</td></tr></tbody></table><h5 id="_1-1-1-1-3-列表维度" tabindex="-1">1.1.1.1.3 <strong>列表维度</strong> <a class="header-anchor" href="#_1-1-1-1-3-列表维度" aria-label="Permalink to &quot;1.1.1.1.3 **列表维度**&quot;">​</a></h5><table><thead><tr><th>序号</th><th>字段名称</th><th>字段类型</th><th>字段说明</th></tr></thead><tbody><tr><td>1</td><td>营销区域</td><td>文本</td><td>预算编制的组织名称</td></tr><tr><td>2</td><td>预算科目</td><td>文本</td><td>预算编制的科目</td></tr><tr><td>3</td><td>品牌</td><td>文本</td><td>预算编制的科目</td></tr><tr><td>4</td><td>年份</td><td>文本</td><td>预算编制的年份</td></tr><tr><td>5</td><td>月份</td><td>文本</td><td>份依次显示为：1月、2月、3月...12月、次年1月、次年2月；各个月份下编制的预算金额；养元品牌按照3月到次年2月的非自然年份进行预算编制；红牛按照1月到12月的自然年份进行预算编制</td></tr></tbody></table><h5 id="_1-1-1-1-4-排序" tabindex="-1">1.1.1.1.4 <strong>排序</strong> <a class="header-anchor" href="#_1-1-1-1-4-排序" aria-label="Permalink to &quot;1.1.1.1.4 **排序**&quot;">​</a></h5><p>列表展示已审批发布的预算记录，列表按照营销组织-预算科目排序，同一个组织的预算显示在一起。</p><h4 id="_3-3-1-2-新增" tabindex="-1">3.3.1.2. <em>新增</em> <a class="header-anchor" href="#_3-3-1-2-新增" aria-label="Permalink to &quot;3.3.1.2. *新增*&quot;">​</a></h4><p>1.1.1.1</p><h5 id="_1-1-1-1-1-新增字段" tabindex="-1">1.1.1.1.1 <strong>新增字段</strong> <a class="header-anchor" href="#_1-1-1-1-1-新增字段" aria-label="Permalink to &quot;1.1.1.1.1 **新增字段**&quot;">​</a></h5><table><thead><tr><th>序号</th><th>名称</th><th>类型</th><th>是否必填</th><th>规则</th></tr></thead><tbody><tr><td>1</td><td>营销组织</td><td>组织树单选</td><td>是</td><td>可选择组织权限内的组织，对选择的组织仅预算编制。</td></tr><tr><td>2</td><td>品牌</td><td>下拉单选</td><td>是</td><td>可选内容包括：养元、红牛。</td></tr><tr><td>3</td><td>预算年度</td><td>年度控件</td><td>是</td><td>仅可选择当前年份及未来年份</td></tr><tr><td>4</td><td>月份</td><td>下拉控件</td><td>是</td><td>可选择：1月、2月...12月</td></tr><tr><td>5</td><td>预算科目</td><td>下拉单选</td><td>是</td><td>可选内容包括：费用科目管理模块设置的启用的科目</td></tr><tr><td>6</td><td>预算金额</td><td>小数框</td><td>是</td><td>最多可录入2位小数</td></tr></tbody></table><h5 id="_1-1-1-1-2-功能设计-1" tabindex="-1">1.1.1.1.2 <strong>功能设计</strong> <a class="header-anchor" href="#_1-1-1-1-2-功能设计-1" aria-label="Permalink to &quot;1.1.1.1.2 **功能设计**&quot;">​</a></h5><p>|功能菜单|功能要求| |---|---|---| |1|保存|校验规则：若同一“营销组织+品牌+年度+月份+科目”已设置了预算，则不能提交，提示“系统中已存在该预算！”。| |2|取消|取消当前页面操作|</p><h4 id="_3-3-1-3-预算审核" tabindex="-1">3.3.1.3. <em>预算审核</em> <a class="header-anchor" href="#_3-3-1-3-预算审核" aria-label="Permalink to &quot;3.3.1.3. *预算审核*&quot;">​</a></h4><p>1.1.1.2</p><h5 id="_1-1-1-2-1-列表" tabindex="-1">1.1.1.2.1 <strong>列表</strong> <a class="header-anchor" href="#_1-1-1-2-1-列表" aria-label="Permalink to &quot;1.1.1.2.1 **列表**&quot;">​</a></h5><p>列表展示通过“导入”或者“新增”录入的待生效的预算，最早录入的预算显示在前面。</p><h5 id="_1-1-1-2-2-功能设计" tabindex="-1">1.1.1.2.2 <strong>功能设计</strong> <a class="header-anchor" href="#_1-1-1-2-2-功能设计" aria-label="Permalink to &quot;1.1.1.2.2 **功能设计**&quot;">​</a></h5><table><thead><tr><th>序号</th><th>功能菜单</th><th>功能要求</th></tr></thead><tbody><tr><td>1</td><td>移除</td><td>选择一条或者多条预算，点击【移除】则将预算直接删除。</td></tr><tr><td>2</td><td>导出</td><td>导出当前查询的待生效的预算</td></tr><tr><td>3</td><td>审核</td><td>选择一条或者多条预算，点击【审核】，选择的预算生效，更新到预算表内</td></tr><tr><td>4</td><td>全部审核</td><td>可直接点击，待生效的预算全部生效</td></tr><tr><td>5</td><td>取消</td><td>取消当前页面的操作</td></tr></tbody></table><h4 id="_3-3-1-4-预算调整" tabindex="-1">3.3.1.4. <em>预算调整</em> <a class="header-anchor" href="#_3-3-1-4-预算调整" aria-label="Permalink to &quot;3.3.1.4. *预算调整*&quot;">​</a></h4><p>1.1.1.3</p><h5 id="_1-1-1-3-1-调整字段" tabindex="-1">1.1.1.3.1 调整字段 <a class="header-anchor" href="#_1-1-1-3-1-调整字段" aria-label="Permalink to &quot;1.1.1.3.1 调整字段&quot;">​</a></h5><table><thead><tr><th>序号</th><th>名称</th><th>类型</th><th>是否必填</th><th>规则</th></tr></thead><tbody><tr><td>基础信息</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>调整编码</td><td>文本</td><td>/</td><td>系统自动生成，生成规则：YSTZ+年+月+日+01(递增)，如YSTZ2021092401</td></tr><tr><td>2</td><td>创建人</td><td>文本</td><td>/</td><td>取当前调整的人员姓名</td></tr><tr><td>3</td><td>所属部门</td><td>文本</td><td>/</td><td>去当前调整人所属的组织</td></tr><tr><td>4</td><td>调整类型</td><td>下拉单选</td><td>是</td><td>可选择：增加、减少；选择的类型对以下的调整通用，若选择“增加”则对应增加组织的预算，选择“减少”则对应减少组织的预算</td></tr><tr><td>5</td><td>调整原因</td><td>大文本框</td><td>是</td><td>调整原因</td></tr><tr><td>6</td><td>附件</td><td>附件</td><td>否</td><td>附件</td></tr><tr><td>调整区域</td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>营销组织</td><td>文本</td><td>/</td><td>显示选择调整预算的组织</td></tr><tr><td>8</td><td>品牌</td><td>文本</td><td>/</td><td>显示选择调整预算的品牌</td></tr><tr><td>9</td><td>预算科目</td><td>文本</td><td>/</td><td>显示选择调整预算的科目</td></tr><tr><td>10</td><td>预算年月</td><td>文本</td><td>/</td><td>显示选择调整预算的科目</td></tr><tr><td>11</td><td>可用预算</td><td>文本</td><td>/</td><td>显示选择的组织-品牌-预算科目-月份当前可用的预算</td></tr><tr><td>12</td><td>调整金额</td><td>小数框</td><td>是</td><td>设置增加或者减少的预算，最多可录入2位小数；当减少预算时，调整金额可大于可用预算</td></tr><tr><td>13</td><td>备注</td><td>文本</td><td>否</td><td>文本</td></tr></tbody></table><h5 id="_1-1-1-3-2-功能设计" tabindex="-1">1.1.1.3.2 <strong>功能设计</strong> <a class="header-anchor" href="#_1-1-1-3-2-功能设计" aria-label="Permalink to &quot;1.1.1.3.2 **功能设计**&quot;">​</a></h5><table><thead><tr><th>序号</th><th>功能菜单</th><th>功能要求</th></tr></thead><tbody><tr><td>1</td><td>保存</td><td>保存后，调整直接生效。</td></tr><tr><td>2</td><td>取消</td><td>取消当前页面操作</td></tr></tbody></table><h3 id="_4-数据操作" tabindex="-1">4. 数据操作 <a class="header-anchor" href="#_4-数据操作" aria-label="Permalink to &quot;4\\. 数据操作&quot;">​</a></h3><h4 id="_4-1-数据输入" tabindex="-1">4.1. 数据输入 <a class="header-anchor" href="#_4-1-数据输入" aria-label="Permalink to &quot;4.1. 数据输入&quot;">​</a></h4><h4 id="_4-2-数据处理" tabindex="-1">4.2. 数据处理 <a class="header-anchor" href="#_4-2-数据处理" aria-label="Permalink to &quot;4.2. 数据处理&quot;">​</a></h4><h4 id="_4-3-数据输出" tabindex="-1">4.3. 数据输出 <a class="header-anchor" href="#_4-3-数据输出" aria-label="Permalink to &quot;4.3. 数据输出&quot;">​</a></h4><h3 id="_5-相关组件" tabindex="-1">5. 相关组件 <a class="header-anchor" href="#_5-相关组件" aria-label="Permalink to &quot;5\\. 相关组件&quot;">​</a></h3><p>相关文件下载<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/SP-YL-BC456-%E9%A2%84%E7%AE%97%E7%AE%A1%E7%90%86%E9%A2%84%E7%AE%97%E6%96%B0%E5%A2%9E%E5%8F%8A%E8%B0%83%E6%95%B4-%E5%85%BB%E5%85%83.zip" title="SP-YL-BC456 预算管理(预算新增及调整-养元)" target="_blank" rel="noreferrer">SP-YL-BC456 预算管理(预算新增及调整-养元)</a></p>',54),o=[h];function l(n,i,s,c,b,_){return d(),a("div",null,o)}const q=t(e,[["render",l]]);export{u as __pageData,q as default};
