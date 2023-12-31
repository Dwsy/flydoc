---
title: WEB端V9.6发版日志
date: 2021-12-23T09:01:46
---

# V9.6.6 (2022-5-9)

## 更新信息

* 容器分支: V9.6
* 容器tag: V9.6.6
* 引擎分支: V9.6
* 引擎tag: V9.6.6
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

## 更新内容

### 新增功能

1. 【信息表格控件】：增加控制是否有分页栏的功能 [\[详细文档(ispage)\]](http://apaas.wxchina.com:8881/technology/156/)
2. 【信息表格控件】：信息表格支持uiflycode事件ArrayCtrl().reload()赋值[\[详细文档(UIFlycode-reload)\]](http://apaas.wxchina.com:8881/technology/156/)
3. 【信息表格控件】：信息表格支持假分页 [\[详细文档(真分页与假分页)\]](http://apaas.wxchina.com:8881/technology/156/)

### 功能优化

1. 【编辑表格控件】：当数据条数少于10条时，不显示分页栏
2. 【搜索栏控件】：优化值改变事件触发延迟过长的问题
3. 【popview弹窗】：优化popview弹窗在二次打开滚动条未回到顶部的问题

### UI/UE优化

1. 【旧表格控件】：优化旧表格内的上传图片控件上传按钮显示，上传达到规定张数之后，隐藏"上传按钮"
2. 【编辑表格控件】：编辑表格配置合并行时，序号列增加了右边框
3. 【下拉控件/大文本控件】：修复查看模式默认有下边距的问题
4. 【编辑表格控件】：修复编辑表格内的附件控件内容布局的问题

### bug修复

1. 【旧表格控件】：修复旧表格内的下拉框控件取'fullvalue'值偶尔无法获取额外字段的问题
2. 【信息/编辑表格控件】：修复页面初始化时，设置信息表格和编辑表格的只读属性和是否勾选属性不生效的问题
3. 【编辑表格控件】：优化焦点行获取逻辑，解决当切换控件焦点过快导致焦点行获取错误的问题
4. 【穿梭框控件】：修复选择数据后点取消，选择的记录没有恢复原来的状态的问题
5. 【时间选择控件】：修复上下限设置逻辑不正确的问题
6. 【信息表格控件】：修复手动调整列宽后数据加载不出来的问题
7. 【流程-发起审批】：修复方案-发起审批校验信息显示重复的问题
8. 【数据导出】：修复当"导出"类型的领域接口返回的数目为0条时，页面导出会报异常的问题

# V9.6.5

* 容器分支: V9.6
* 容器tag: V9.6.5
* 引擎分支: V9.6
* 引擎tag: V9.6.5
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 【Bug修复】修复切换职位导致web菜单不显示
* 黄逸朗 【控件优化】树控件作为导航树形态，不可取消选择的需求
* 黄逸朗 【Bug修复】修复时间范围设置上下限问题
* 赖彦彰 【Bug修复】在popview中放置穿梭框控件时层级问题
* 赖彦彰 【控件优化】打开popview弹窗时支持自定义标题

# V9.6.4 (2022-3-23)

* 容器分支: V9.6
* 容器tag: V9.6.4
* 引擎分支: V9.6
* 引擎tag: V9.6.4
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 【控件优化】编辑表格(edittable)支持tablecell类型的列合并单元格
* 赖彦彰 【功能优化】uiflycode支持打开关闭popview弹窗

# V9.6.3 (2022-3-9)

* 容器分支: V9.6
* 容器tag: V9.6.3
* 引擎分支: V9.6
* 引擎tag: V9.6.3
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 【Bug修复】编辑表格动态列取值修正
* 黄逸朗 【Bug修复】修复通过初始事件uiflycode设置编辑表格的列隐藏失效

# V9.6.2 (2022-2-23)

* 容器分支: V9.6
* 容器tag: V9.6.2
* 引擎分支: V9.6
* 引擎tag: V9.6.2
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 【功能优化】call事件广播隔离功能（解决页面事件广播到其他页签的问题）
* 黄逸朗 【新增功能】增加了用于编辑表格数据搜索的uiflycode函数[\[使用说明\]](http://apaas.wxchina.com:8881/technology/496/)
* 黄逸朗 【Bug修复】SFA管理员账号管理缺少开启设备绑定按钮
* 黄逸朗 【Bug修复】修复旧版表格二开控件图片显示错误的问题
* 郑桂 【Bug修复】修复穿梭框控件会被二级菜单遮挡的问题
* 苏滨 【Bug修复】修复搜索栏控件入参丢失的问题

# V9.6.1 (2022-1-19)

* 容器分支: V9.6
* 容器tag: V9.6.1
* 引擎分支: V9.6
* 引擎tag: V9.6.1
* 更新内容编写人: 黄逸朗
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: 无
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄晓星 【Bug修复】修复二开控件加载更新浏览器本地数据库版本导致登录卡住/页面不加载问题（备注：首次升级后还存在loading停留问题，需清空一次浏览器缓存）
* 黄逸朗 【控件优化】大文本，只读或查看状态下，设置了最小最大可见行数时，当超过了最大行数则出现“展开/收起”的按钮在文字内容的尾部

# V9.6.0 (2022-1-5)

* 容器分支: V9.6
* 容器tag: V9.6.0
* 引擎分支: V9.6
* 引擎tag: V9.6.0
* 更新内容编写人: 黄逸朗，苏滨，郑桂，赖彦彰
* 是否有经过测试验证: 测试环境验证
* 更新注意事项: **需更新帐号服务、离线服务**
* 不兼容性说明: 无

欢迎使用该版本，此版本特性如下：

* 黄逸朗 【新增功能】infotable支持接入二开控件[\[详细文档\]](http://apaas.wxchina.com:8881/2021/12/10/infotable%e4%bf%a1%e6%81%af%e8%a1%a8%e6%a0%bc%e6%8e%a5%e5%85%a5%e4%ba%8c%e5%bc%80%e6%8e%a7%e4%bb%b6/ "[详细文档]")
* 郑桂 【新增功能】多语言：实现多种语言的切换，平台设定需要配置的语言翻译，业务数据由业务自行翻译（更新帐号服务、离线服务）[\[详细文档\]](http://apaas.wxchina.com:8881/2021/11/17/%e5%a4%9a%e8%af%ad%e8%a8%80%e9%83%a8%e7%bd%b2%e6%96%87%e6%a1%a3%e8%af%b4%e6%98%8e/ "[详细文档]")
* 苏滨 【新增功能】字段权限管理（更新账号服务 配合IDE3.4版本）[\[详细文档\]](http://apaas.wxchina.com:8881/2021/12/10/5285/ "[详细文档]")
* 黄晓星 【新增功能】数据字典页开放字典搜索功能（更新账号服务）
* 赖彦彰 黄逸朗 【功能优化】转可配置化：后台职位管理（更新账号服务）[\[详细文档\]](http://apaas.wxchina.com:8881/2021/11/17/%e7%ae%a1%e7%90%86%e5%91%98-%e8%81%8c%e4%bd%8d%e7%ae%a1%e7%90%86%e9%a1%b5%e9%9d%a2-%e6%94%b9%e9%80%a0%e6%88%90%e5%8f%af%e9%85%8d%e7%bd%ae%e5%8c%96%e8%a1%a8%e5%8d%95/ "[详细文档]")
* 黄晓星 【功能优化】二开控件租户隔离，web引擎需要支持记录不同租户二开控件代码的缓存版本
* 黄晓星 【功能优化】导出优化：导出文件下载调整
* 苏滨 【功能优化】控件优化：image的缩略图、hover、点击查看大图、点击事件配置项优化
* 黄逸朗 【UI/UE优化】控件标题及内容在颜色上统一处理，并有所区分，便于用户查看
* 黄逸朗 【UI/UE优化】菜单的icon需要始终与第一行文字对齐
* 黄逸朗 【Bug修复】级联控件-单/多:只读状态下，希望增加悬浮或者其他方式可以看全数据
* 黄逸朗 【Bug修复】信息表格先导列合并，勾选未全部选择合并的行
* 苏滨 【Bug修复】照片信息水印字段有值，WEB端控件选择临时合成水印，照片无显示水印