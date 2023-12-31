---
title: Cron表达式
date: 2022-09-07T09:22:21
---

# Cron表达式介绍

Cron表达式是一个具有时间含义的字符串，字符串以5至6个空格隔开，分为6至7个域，格式为X X X X X X X。其中X是一个域的占位符。最后一个代表年份的域非必须，可省略。单个域有多个取值时，使用半角逗号,隔开取值。每个域可以是确定的取值，也可以是具有逻辑意义的特殊字符。每个域最多支持一个前导零。  
`说明 如指定2022年每天上午8:15执行任务，Cron表达式可指定为0 15 8 ? * * 2022或0 15 08 ? * * 2022，而不能指定为0 15 008 ? * * 2022。`

## **域取值**

下表为Cron表达式中六个域能够取的值以及支持的特殊字符。  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20221012135856-1.png)

## **特殊字符**

Cron表达式中的每个域都支持一定数量的特殊字符，每个特殊字符有其特殊含义。  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220907171726.jpg)

## 取值示例

以下为Cron表达式的取值示例。  
![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220907171908.jpg)