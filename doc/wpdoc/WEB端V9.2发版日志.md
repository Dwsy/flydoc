---
title: WEB端V9.2发版日志
date: 2020-10-09T16:46:19
---

# V9.2.9 (2021-01-25)

* 容器分支: V9.2
* 容器tag: V9.2.9
* 引擎分支: V9.2
* 引擎tag: V9.2.9
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 项目组已验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 苏滨 修复日志上报接口连接超时问题

# V9.2.8 (2021-01-20)

* 容器分支: V9.2
* 容器tag: V9.2.8
* 引擎分支: V9.2
* 引擎tag: V9.2.8
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 庄焕滨 Bug修改：【td1733】web前端引擎9.2.6会导致资产投放热力图报错
* 潘建 新增功能：在 FlyBI 和 一站式数据开发平台 的报表配置当中添加钻取报表的面包屑的位置配置
* 潘建 【BI】报表页面初始化传参遗漏
* 庄焕滨 Bug修复：【td1751】在panel板中，初始化将panel折叠，cardflow显示样式不正确
* 黄逸朗 Bug修复：editortable无数据时，暂无数据提示语与列名重叠
* 黄逸朗 Bug修复：【td1743】家化列表触发值改变事件加载控件值，若后续查询结果为空，除照片外无法将空值写入控件
* 苏滨 Bug修复：空附件上传后查看，附件大小显示为NaN
* 庄焕滨 fix: 修复报表搜索栏样式不正确的问题
* 苏滨 【项目验证】Bug修复：【td1734】待办审批，点击提交不能关闭窗口
* 庄焕滨 UI优化：web端，管理员登录，新增数据权限页面，筛选方式选择【脚本】，规则json编辑输入框有点小
* 潘建 修复非地图图表点击钻取传参带中国.的问题

# V9.2.7 (2021-01-06)

* 容器分支: V9.2
* 容器tag: V9.2.7
* 引擎分支: V9.2
* 引擎tag: V9.2.7
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 庄焕滨 文本和大文本输入框默认的限制长度改为0，即不限制
* 苏滨 【1696】dropdownbox控件多选状态下清除已选项时值变更事件未正常触发
* 吴疆 修复组合图报表数据为空时展示错误的问题
* 庄焕滨 【NT】修复绿盟科技WEB应用漏洞扫描报告jsrsasign依赖中引用YUI2.9.0的XSS漏洞
* 黄逸朗 【1679】信息表格边缘显示问题，表格移动过程中，右侧显示不全
* 庄焕滨 【1574】修复tabborad缺陷：通过setProperty方法设置tab的属性后，导致tab内数据丢失

# V9.2.6 (2020-12-21)

* 容器分支: V9.2
* 容器tag: V9.2.6
* 引擎分支: V9.2
* 引擎tag: V9.2.6
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 庄焕滨 feat: 资产分布图支持颜色配置。[【详细配置说明】](http://apaas.wxchina.com:8881/2020/12/21/分布图支持颜色配置/)
* 庄焕滨 feat: pageswitch横向模式头部样式修改。
* 苏滨 【TD1624】editortable中的attachment控件入参错误
* 黄逸朗 【TD-1622】infotable, 删除行之后，再勾选，把删除的行计算在内了

# V9.2.5 (2020-12-07)

* 容器分支: V9.2
* 容器tag: V9.2.5
* 引擎分支: V9.2
* 引擎tag: V9.2.5
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 采用setter清空对象选择器但text一直显示的bug
* 庄焕滨 feat: 终端分布图支持颜色配置。
* 苏滨 【TD1601】旧web版本号V8.4,升级至V9.2，数据导入功能无响应问题
* 苏滨 【TD:1588】导出的文件下载时报错问题
* 黄晓星 【TD：1600】页面不返回，写返回事件也不执行的bug
* 黄逸朗 【TD：1597】使用 Page.constraintCheck() 用于校验必填项的函数无法使用,提示没有这个函数
* 庄焕滨 【TD1603】日期控件设置最小值为day(0) 默认是选中当天 但是当选择其他日期之后会发现无法再选择当天的bug
* 苏滨 【TD:1578】dropdownbox下拉框控件，配置多选模式下，hiddenclearbtn禁止清除属性失效
* 苏滨 【TD:1566】web端待办事项中将申请选择退回和退回节点后，点击无反应
* 黄逸朗 【TD:1554 缺陷】无法使用UIFlycode为editortable中的objpicker控件赋值

# V9.2.4 (2020-11-23)

* 容器分支: V9.2
* 容器tag: V9.2.4
* 引擎分支: V9.2
* 引擎tag: V9.2.4
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 TD1510 【缺陷】edittable中的下拉框超过7个时也没有搜索框
* 庄焕滨 TD1515 附件控件，在layout的只读属性为【是】的情况下，依旧展示为可编辑样式
* 黄晓星 TD1541 货币单位与数字挤在一起
* 黄逸朗 TD1534 objpicker的查询参数设置，设置默认值从焦点项取值时，第一次点击无法获取到数据
* 庄焕滨 布局优化：支持表单控件上下布局排版(在表单协议pageinfo里增加属性"ctrllayout": "vertical"即可)
* 庄焕滨 fix(旗舰版): 【1548】修复日期和日期范围控件无法通过flycode设置min和max
* 苏滨 【1521】流程审批-审批意见内容长度限制开放
* 黄逸朗 infotable支持分页属性&数据事件支持分页属性指定来源
* 庄焕滨 fix(禅道): 【2105】组织管理-点击查看职位人员，报错问题
* 苏滨 fix(旗舰版): 【1566】修复待办事项中将申请选择退回和退回节点后，点击下一步无反应的bug
* 苏滨 fix(旗舰版): 【1520】修复从表格外部tab按键进来表格内部输入框，改变输入框事件不响应的问题

# V9.2.3 (2020-11-09)

* 容器分支: V9.2
* 容器tag: V9.2.3
* 引擎分支: V9.2
* 引擎tag: V9.2.3
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄晓星 【TD:1457】阳光麦田项目-列表设置焦点行控件必填无法生效
* 黄晓星 fix(旗舰版): 【1456】修复非标准事件配置后导致执行中断的BUG
* 黄晓星 【TD：1456】测试环境，旧web版本号V8.4升级至V9.2问题
* 苏滨 【TD:1466】红牛-表格下拉级联值改变，控件值绑定失效
* 苏滨 feat: 审批流程优化：允许在配置流程时设置退回的默认节点的，包括3个选项：发起人、上一级审批节点、无默认
* 苏滨 feat: 审批流程优化：增加撤回功能
* 苏滨 fix(禅道): 【1770】 textinput控件，初始化没有绑定赋值，且设置value默认值读取逻辑表达式情况下，无法设置到默认
* 黄逸朗 【TD：1422】需求-信息表格的 顶部按钮操作 实现列表为空时，禁用导出按钮
* 黄逸朗 fix(禅道:1971) 编辑表格：下拉框，数据加载后无法显示选项。
* 庄焕滨 feat: 新增link控件 [【详细配置说明】](http://apaas.wxchina.com:8881/technology/397/)
* 庄焕滨 feat: 登录页配置环境变量 supportresetpwd 配置优化
* 庄焕滨 fix(禅道): 【1994】flycode隐藏/显示列之后数据显示错乱的bug
* 庄焕滨 【TD:1460】memberpicker控件在只读状态下可点击展开

# V9.2.2 (2020-10-26)

* 容器分支: V9.2
* 容器tag: V9.2.2
* 引擎分支: V9.2
* 引擎tag: V9.2.2
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 庄焕滨 feat: 旗舰版【1460】memberpicker人员选择控件只读样式优化
* 庄焕滨 fix(企业版): 【1459】弹出框搜索栏标题不会自动隐藏的bug
* 苏滨 fix(自测): 【null】修复微软云下载文件由于拼接地址错误导致无法下载的问题
* 庄焕滨 fix(自测): 【】修复登录时不记住密码webview传token为空的问题
* 苏滨 web端return事件支持返回指定目标页面

# V9.2.1 (2020-10-19)

* 容器分支: V9.2
* 容器tag: V9.2.1
* 引擎分支: V9.2
* 引擎tag: V9.2.1
* 更新内容编写人: 庄焕滨
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 庄焕滨 fix(旗舰版): 【1446】修复旧表格flycode设置列控件必填属性getColByName(xx).required不生效的bug
* 黄晓星 【TD:1439】dropdownbox支持fullvalue赋值方式
* 黄逸朗 对象选择控件功能补全-列表查询支持额外参数（extraparams）及取值值选项(component)支持列表字段值
* 庄焕滨 【TD: 1409】对象选择控件样式和其他控件样式一致问题
* 黄晓星 fix(禅道): 【585】pannel支持横向布局设置

# V9.2.0 (2020-10-12)

* 容器分支: V9.2
* 容器tag: V9.2.0
* 引擎分支: V9.2
* 引擎tag: V9.2.0
* 更新内容编写人: 黄晓星/苏滨/庄焕滨/邱吉顺/黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 EditorTable [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/editortable-编辑表格-2)
* 黄逸朗 ObjPicker 对象选择控件 [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/objpicker-对象选择控件)
* 苏滨 新导入导出模块 [【新导出模块配置说明】](http://apaas.wxchina.com:8881/2020/10/09/export-新导出模块/)[【新导入模块配置说明】](http://apaas.wxchina.com:8881/2020/10/09/import-新导入模块/)
* 庄焕滨 cardsflow卡片流控件(通用照片墙) 与 timageinfo图片信息卡片 [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/cardsflow卡片流控件通用照片墙-与-timageinfo图片信息卡片)
* 庄焕滨 登录首页增加密码过期提醒功能 [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/登录首页增加密码过期提醒功能)
* 庄焕滨 登录首页增加忘记密码及重置密码(手动设置密码) [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/登录首页增加忘记密码及重置密码手动设置密码)
* 庄焕滨 管理员 - 职位管理页面 增加复制职位功能 [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/管理员-职位管理页面-增加复制职位功能)
* 庄焕滨 管理员 - 帐号管理页面 改造成可配置化表单 [【详细配置说明】](http://apaas.wxchina.com:8881/2020/10/09/管理员-帐号管理页面-改造成可配置化表单)
* 庄焕滨 管理员 - 帐号管理 增加“强制清除绑定”功能 [【详细配置说明】](http://apaas.wxchina.com:8881/2020/09/04/帐号管理页面增加强制清除绑定功能)
* 苏滨 web端退出登录时调用logout接口 清除token相关权限