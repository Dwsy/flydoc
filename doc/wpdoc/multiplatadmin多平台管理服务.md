---
title: multiplatadmin多平台管理服务
date: 2020-05-25T14:37:57
---

## multiplatadmin多平台管理服务

|||||
|---|---|---|---|
|历史版本|发布时间|下载地址|服务说明|
|v2.10.0|2022.4.28|https://xwsvn.wxchina.com/doc/aPaaS/V4.0/5.发布阶段/程序包/multiplatadmin.zip(4368)||
|v2.9.0|2022.1.7|https://xwsvn.wxchina.com/doc/aPaaS/V3.4/5.发布阶段/程序包/multiplatadmin.zip(4232)|新功能session中新增角色编码新增保存和移除租户库信息的接口新增获取租户库列表的接口根据登录的应用来获取权限兼容数据平台的部署增加版本字段的导出为了支持新增租户lisence控制功能，优化中心的租户管理同步功能#531增加服务器配置复制功能增加部署清单导出的功能增加后台服务日志管理功能增加手机端日志统计功能。增加自动化部署日志统计的功能。修复缺陷修复原修改密码接口获取多账号的问题@764修复禅道 2792。筛选超出条件范围的数据修改更新后原配置丢失的问题修改oss模拟器ip获取的优先级。优先内网|
|v2.8.5|2021.3.26|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/multiplatadmin.zip (3457)|新功能增加版本字段的导出为了支持新增租户lisence控制功能，优化中心的租户管理同步功能#531|
|v2.8.4|2020.12.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.1/5.发布阶段/程序包/multiplatadmin.zip （3198）|\* 【new】增加自动化部署日志统计的功能\* 【new】新增刷新环境信息到环境端的接口\* 【fix】重写数据库底层，解决链接溢出的问题\* 【change】修改oss模拟器ip获取的优先级。优先内网\* 【change】调整js引擎，报错的时候写日志。\* 【new】客户端版本管理list新增status条件\* 【new】增加http请求，兼容https模式\* 【new】增加手机端日志统计功能\* 【change】修改自动化部署启动nginx和nacos成功的验证条件\* 【fix】修改更新后原配置丢失的问题\* 【change】通过配置方式支持负载均衡\* 【change】修改登录接口，将原对象改为cmdb对象\* 【fix】修复禅道 2792。筛选超出条件范围的数据\* 【new】开发者账号的新增编辑删除功能只有中心角色可以操作\* 【new】增加后台服务日志管理功能|
|v2.8.3|2020.10.16|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/multiplatadmin.zip (2986)|\*【fixed】 修复租户管理系统显示的租户列表不受角色控制的bug|
|v2.8.2|2020.9.29|http://183.63.72.243:48080/svn/doc/aPaaS/V3.0/5.发布阶段/程序包/multiplatadmin.zip (2930)|\*【fixed】修复和优化若干数据库操作API执行问题；升级springboot和sping-framework版本，修复安全漏洞。|
|v2.8.1|2020.7.27|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/multiplatadmin.zip (2692)|\*【new】客户端升级管理功能调整，部分已经通过测试验证\*【fixed】去掉清除密码；修复编辑介质无效的bug；修复自测可能存在的数据问题。仅仅是部署关联apaasadmin 时存在的问题|
|v2.8.0|2020.7.3|http://183.63.72.243:48080/svn/doc/aPaaS/V2.9/5.发布阶段/程序包/multiplatadmin.zip （2605）|\*【new】1.新增JS引擎2.工单管理模块3.工单审核模块4.开发者帐号管理模块5.开发者角色权限管理模块6.环境配置模块7.资源配置模块8.租户升级管理模块9.帐号升级模块10.租户管理模块11.租户套餐分配功能12.支持private key的ssh链接方式13.支持服务的升级，启停，配置修改\*【fixed】1.租户管理生成超级管理员帐号时license记录异常情况。2.优化了自动化部署功能|