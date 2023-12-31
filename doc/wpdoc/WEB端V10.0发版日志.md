---
title: WEB端V10.0发版日志
date: 2023-04-26T10:02:09
---

## V10.0.3

* 【Bug修复】修复菜单控件进入Spu页面后，刷新后没有选中状态
* 【功能优化】增加支持侧边弹框方式返回事件支持跳转目标页面
* 【Bug修复】修复panel和layout布局控件隐藏后，仍会对内部子控件做必填校验
* 【功能优化】优化级联控件内存过大导致页面奔溃问题。
* 【功能优化】支持下拉框控件（dropdownbox）可根据IDE配置显示对应字体颜色
* 【Bug修复】web端普通表格内number控件，负值校验失效  

#### 2023-07-26

  ---

## V10.0.2

* 【控件优化】优化勾选项控件只读时在表格中颜色过浅的问题
* 【功能优化】优化单点登录接入跳转，支持传递自定义参数。
* 【控件优化】短视频控制能力拓展，支持短视频展示多个视频内容。
* 【Bug修复】修复公告通知中富文本编辑器在预览状态下无法正常查看图片的问题。
* 【功能优化】infotable表格支持用户级存储列宽以及设置自定义列宽。
* 【Bug修复】修复弹框中，layout默认布局导致的button控件按钮错乱问题。
* 【功能优化】信息表格，优化列编辑中列名称与列宽设置显示问题

#### 2023-06-28

---

## V10.0.1

* 【新增功能】UIFlyCode引擎进行改造：支持外部UIFlyCode在UIFlyCode引擎中执行
* 【新增功能】 链接事件增加返回按钮事件配置
* 【Bug修复】修复Alert行为调用数据提交没有加载条
* 【Bug修复】修复xlsx附件预览部分文字内容展示丢失问题
* 【Bug修复】修复pptx附件预览部分内容预览报错问题。
* 【Bug修复】修复web端地址控件选择直辖市后提交的数据与手机端格式不一致问题，导致手机端显示异常。
* 【Bug修复】修复图片水印首次打开由于产品登录页面样式冲突导致，文字异常问题。
* 【Bug修复】修复xlsx附件预览行号丢失问题
* 【Bug修复】修复List控件单独设置行控件属性状态后，页面尺寸变化情况下导致属性状态丢失的问题。
* 【Bug修复】信息表格(Infotable)设置默认分组后，由于边距线展示效果原因，不能正常展示分组的问题
* 【Bug修复】修复editorTable中flycode .delete（）方法失效
* 【Bug修复】修复infotable全屏功能后再缩放infotable高度不能自适应的问题
* 【功能优化】优化编辑表格的只读、非只读状态边距线样式统一
* 【功能优化】在只读状态下点击附件控件，会弹出数量已达上限的提示
* 【功能优化】优化在页签切换的时候或者弹窗之后回来，list选中状态保留样式不清除

#### 2023-05-24

---

## V10.0

* 【Bug修复】修复特殊多数据返回情况下埋点上传工具处理满导致，导致页面卡顿崩溃问题
* 【bug修复】产品价格表详情弹框保存后，第二次打开查看详情时不请求接口
* 【bug修复】修复编辑表格清除数据后同步执行reload而导致页面遗留数据的问题。
* 【bug修复】修复address控件首次进行地址选择，选中地址后点击确认，显示的地址和下拉选中的不一致的问题
* 【功能优化】引擎全链路日志pagebegin事件添加pageinfo字段，记录页面信息
* 【功能优化】优化流程模块进入选择审批人页面时滚动条需要重置到页面顶部
* 【功能优化】优化Page.openProgress()添加loading的显示效果优化，从局部的遮挡改为全局遮挡
* 【新增功能】新增infotable 动态列支持其他字段额外设如的字段获取
* 【控件优化】附件预览增加预览文件大小限制。
* 【控件优化】处理多个按钮控件垂直排列的时候，第一个按钮左侧不对齐的现象
* 【功能优化】处理大数据情况下点击数据树进行操作，操作过程中整个页面会变得非常卡的问题

#### 2023-04-26

---