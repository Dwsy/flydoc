---
title: 云化IDE V4.2发版日志
date: 2022-12-29T02:38:13
---

## V4.2.2（2023-03-29）

### 更新信息

* 代码分支：V4.2
* Tag或提交id：5ca2515636438c4cb3568bf374c2b8ab48222793
* 是否有经过测试or验证：是
* 更新注意事项：UI预览如果想使用web引擎版本是V9.6.0-V9.9.1的话，需要更新nginx，编辑表格支持冻结列功能需要更新web引擎到V9.9.2或以上。  

### 更新内容
* 【租户环境配置】 显示应用分组标题配置设置为默认勾选
* 【租户环境配置-UI改动】 页面改为锚点定位导航
* 【定位控件】 隐藏值改变时的配置项
* 【编辑表格】 支持冻结列功能
* 【画布-按钮】 按钮配置图标后可在画布中显示
* 【滚动条】 全局滚动条样式及交互方式优化
* 【领域-测试用例结果】 输出结果可纵向换行展示
* 【租户选择页】 租户展示优化
* 【UI-卡片化布局】 工具、功能、实体、领域模块卡片化布局
* 【数智服务】 修复数智服务地址带有子路径时无法正常进入数据分析模块的问题
* 【表单预览】 云化IDE重新支持表单UI预览功能，[UI预览功能说明](http://apaas.wxchina.com:8881/2023/03/31/ide)
* 【功能编辑页】 功能编辑页面布局样式调整

## V4.2.1（2023-02-22）

### 更新信息

* 代码分支：V4.2
* Tag或提交id：2755c90671052abda44ea4e894b4659eaf248a75
* 是否有经过测试or验证：是
* 更新注意事项：无。  

### 更新内容
* 【Flycode函数】 增加搜索条件：方法英文名、方法关键字
* 【优化】 解决谷歌109版本浏览器内核api兼容问题
* 【信息表格、编辑表格】 增加斑马纹显示属性配置
* 【表单事件】 增加图片导出事件
* 【租户选择页】 增加修改密码功能、页面样式调整
* 【个人信息页】 增加租户编码显示
* 【整体抽屉显示】 抽屉按钮统一显示在左下方
* 【工具栏】 个人/版本信息移至顶部右上角
* 【登录页】 整体样式优化
* 【IDE模块】 细节样式优化
* 【IDE列表页】 卡片化布局，样式优化

## V4.2.0（2022-12-28）

### 更新信息

* 代码分支：V4.2
* Tag或提交id：748853f412b8f4b23cbccfb04d7aa1509f778268
* 是否有经过测试or验证：是
* 更新注意事项：导出全部元数据功能需要更新ide服务，tag标签管理导入会过滤旧报表元数据。。  

### 更新内容
* 【中心管理功能权限】 增加【ide-领域-调度】按钮权限控制
* 【路由】 IDE增加路由路径显示
* 【样式优化】 表单列表页面小程序、移动端、电脑端图标风格一致
* 【样式优化】 统一三级导航样式、调整导航栏图标大小、主按钮间距统一
* 【样式优化】 IDE整体配色优化
* 【样式优化】 系统按钮增加hover状态
* 【租户选择界面】 增加搜索按钮和搜索栏
* 【tag标签管理】 增加导出全部元数据功能
* 【接口迁移】 server/....的接口换成 /api/multiplat
* 【功能点】 IDE功能点标识检查与补充
* 【tab标签】 IDEtab支持拖拽换位
* 【UI控件】 修复UI控件新建时无法加载公共包依赖的问题
* 【功能】 修复功能-字段管理首个用户字段对象UI异常的问题