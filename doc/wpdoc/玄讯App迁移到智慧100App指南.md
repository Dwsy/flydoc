---
title: 玄讯App迁移到智慧100App指南
date: 2023-07-03T15:42:55
---

# 玄讯App迁移到智慧100App指南

#### 背景：当快消100的客户提出新的需求时，经平台评估后不在提供支持，需要由智慧100产品团队来提供技术或控件能力支撑时，项目组同时有意向将客户使用的App迁移到“智慧100”时，可以联系智慧100产品团队进行升级支持。

考虑到快消100的客户存在的APP使用公开发版的版本与独立打包的版本。故在升级智慧100App过程中，需要进行区别处理。

## 标准升级流程：

首先由项目服务团队向产品团队提出申请，有产品团队内部讨论后作出答复，再开启后续流程。次流程仅包括App升级部分。

### 第一阶段：智慧100App冒烟验证

时间节点：2周  
参与人员：客户方、服务部、产品部、实施部  
步骤：  
1.产品测试部冒烟测试 (1周)  
2.客户方技术与业务冒烟测试 (1周)  
3.冒烟问题收集及处理

备注：

* 已验证在老客户上的兼容度95%以上

* 独立打包会同步处理第一阶段问题并更新版本

### 第二阶段： 客户灰度验证

  时间节点：1周  
参与人员：客户方、服务部  
步骤：  
1.客户方新APP验证、全量功能验证（选取几个关键用户进行测试）  
2.客户用户试点问题验证BUG修复(仅限独立打包，公共包会在产品后续版本同步)

备注：

* 准生产验证内容：1.智慧100全量功能；2.强制升（iOS+Android）验证

### 第三阶段： 全面推广，完成智慧100App的更换

  时间节点：2周  
参与人员：客户方、服务部、产品部

  步骤：

  * 新APP试运行：新旧包并行 (1-2周)  
    1.客户确定试运行的区域或人员范围  
    2.安卓+iOS智慧100代码打tag、新包打包、归档(独立打包)  
    3.测试强制升级客户方玄讯升智慧100包：安卓+iOS  
    4.xxx区域人员清单准备  
    5.锁定xxx区域人员清单强制升级，试运行区域正式推广  
    6.升级兼容问题收集 -升级兼容问题修复，打新包(仅限独立打包，公共包会在产品后续版本同步)
* 全面上线新包，运行监控 （客户决策）  
  1.其他区域APP的正式推广  
  2.全面升级兼容问题收集  
  3.全面升级兼容问题修复，打新包(仅限独立打包，公共包会在产品后续版本同步)

备注：

* "分阶段：1.试运行阶段，新旧包并行：试运行区域使用智慧100新包，其他区域正常使用旧包 2.全面推广，全面上线新包  
  期间：1.紧急问题当天修复；2.非紧急问题当天给出回复；"
* 试点区域为图中【xxx区域】整个区域下的人员，试点时间为（x月x日 17:00）
* "分工：1.产品开发提供打包代码tag 2.PMO负责打包和归档"
* "分工:1.服务部提供强制升级测试账号 2.运维为测试账号配置强制升级 3.服务部测试强制升级功能 4.如有bug，服务团队第一时间响应，需要产品团队介入则由产品团队排查"
* "验证内容：1.强制升级；2.智慧100新功能；3.智慧100全量功能；"
* "分工:1.服务部、客户方提供xxx区域人员清单 2.运维为试点人员配置强制升级：（x月x日 17:00）"

## 独立打包与使用公共包存在以下区别：

1.独立打包需要提供客户证书，产品团队只协助打包，后交付给服务团队，由服务团队进行后续步骤；  
2.独立打包后续更新版本需要服务团队向产品团队提交申请，待产品团队同步代码后，交付服务团队自行验证后交付客户方；  
3.公共包的发版和上架会依赖产品的发版计划来进行，不会根据项目计划发布版本；  
4.公共包会通过产品测试团队进行测试及项目冒烟后，交付PMO与服务部对选定项目功能进行验证并同步上架应用市场；