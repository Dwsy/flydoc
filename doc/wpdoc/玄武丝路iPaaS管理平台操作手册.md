---
title: 玄武丝路iPaaS管理平台操作手册
date: 2022-08-03T01:45:59
---

**此手册适用于玄武丝路iPaaS平台的管理员和开发人员使用。阅读此手册，你将了解平台功能操作与平台维护。**

|版本|日期|编辑人|变更内容|
|---|---|---|---|
|V2.0|2022-2-21|@王剑|添加2.0版本的系统功能介绍|

# 一、平台介绍

## 1.1 平台简介

* 玄武3+1平台战略需要一个统一高效的集成平台
* 面对企业日益复杂和频繁的集成需求，旧的集成解决方案很难满足灵活高效的集成为此开发此集成平台

## 1.2 核心功能

|插件化管理|内置常用组件和连接器|
|---|---|
|• 所有的连接器都是插件化，自由插拔• 用户可以自行开发连接器注册使用|• 提供分支条件，定时器，脚本等系统组件• 提供AI，数据库等常用连接器|
|**可视化编排**|**日志查看**|
|• 画布节点自动化排版• 简单点击配置|• 支持查看集成流的调用日志• 支持基本的日志统计|

## 1.3 运行环境

![](http://apaas.wxchina.com:8881/wp-content/uploads/iPaas%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83.jpg)

# 二、快速入门

## 2.1 基础概念

### 2.1.1 常见名词概念

|名词概念|释义|
|---|---|
|系统组件|指由iPaaS系统提供的功能组件，完成特定的功能和任务。如条件，循环等|
|连接器|指对一个应用的对外交互接口的封装，通常由该应用的多个行为组成。如玄武AI连接器，数据库连接器等|
|行为|即连接器行为，又分为执行行为和触发行为。如翻拍识别，SKU识别等执行行为用于执行一个应用的接口；触发行为用于监听或接收应用的消息。|
|账号类型|用于定义某种应用的账号所需要的信息，用于在添加该应用账号时，生成对应的账号录入界面。如：微信账号，玄武AI账号等|
|应用账号|可用于登录某种应用的账号的信息。如小王的微信账号，xx公司的玄武AI账号|
|插件|包含了应用的登录，执行等方法的jar包|
|资源|插件上传后就会将其内部的方法注册为资源，登录的方法注册为链接资源，执行方法注册为执行资源。|
|资源包|同一插件不同版本所产生的资源的集合。|
|集成流|由一个触发行为和多个执行行为和逻辑组件构成的，能完成特定业务处理流程行为集合。|
|私有|指某个数据属于指定的租户，其他的租户不能访问和使用。目前由租户管理员新建的数据（帐号类型，资源包，连接器）都默认是私有的。所有的集成流和应用账号都默认是私有的。|
|公有|指所有租户都能访问和使用的数据|

### 2.2.2 角色与账号

目前iPaaS管理系统使用了和玄武aPaaS相同的账号管理体系，统一在开发者中心进行登录账号的管理，包括角色权限的管理。  
目前内置了4种角色：

|系统管理员|可以查看所有模块，能够管理所有公有数据|
|---|---|
|**租户管理员**|**可以查看所有模块，但只能管理租户私有的数据（账号类型，资源包，适配器）**|
|**开发者**|**只能进行账号管理和集成流管理**|

## 2.2 常用操作流程

### 2.2.1 添加资源

资源是实际执行的代码，如果需要系统中尚未提供的功能，则需要先添加对应资源。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%B7%BB%E5%8A%A0%E8%B5%84%E6%BA%90.png)

### 2.2.2 添加连接器

连接器及其内部的行为是提供给集成流配置使用的，如果是新增的资源，就需要新建对应的连接器，将资源包装后提供给最终的集成流使用

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%B7%BB%E5%8A%A0%E8%BF%9E%E6%8E%A5%E5%99%A8.png)

### 2.2.3 添加集成流

集成流是由一系列经过编排的连接器行为组合而成，用于完成特定业务处理流程。当准备好所需的连接器后就可以进行实际业务集成流的配置了。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%B7%BB%E5%8A%A0%E9%9B%86%E6%88%90%E6%B5%81.png)

# 三、使用说明

## 3.1 账号类型

账号类型是用于定义登录一个应用所需要的信息。

### 3.1.1 账号类型列表

1. 支持根据账号类型的名称，标识，以及是否私有来搜索列表
2. 支持新增账号类型
3. 显示账号类型的基本信息，其中的关联资源是该账号类型所关联的链接资源。链接资源是反向自动关联的，也就是说是插件上传成功后，在生成链接资源时，自动根据账号类型标识来匹配绑定的。一个账号类型一旦绑定了一个链接资源就不能再更改。
4. 可以对账号类型进行启用/停用，停用时会进行必要的关联检测。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B%E5%88%97%E8%A1%A8.png)

### 3.1.2 账号类型详情

1. 账号类型标识，是用于唯一标识一个账号类型，由用户手动输入。  
   在上传插件，生成链接资源时也是通过插件配置文件中的该标识来进行关联绑定的。
2. 在此处设置配置该类型账号所需要的字段，需要根据具体应用的需求来进行定义。此处的定义会直接作为数据模板，来指导应用账号模块如何渲染应用账号详情页面。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B%E8%AF%A6%E6%83%85.png)

#### 账号类型与应用账号关系示例

第一步：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B%E4%B8%8E%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E5%85%B3%E7%B3%BB%E7%A4%BA%E4%BE%8B-%E7%AC%AC%E4%B8%80%E6%AD%A5.png)

第二步：

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B%E4%B8%8E%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E5%85%B3%E7%B3%BB%E7%A4%BA%E4%BE%8B-%E7%AC%AC%E4%BA%8C%E6%AD%A5.png)

## 3.2 应用账号

应用账号就是实际在集成流中，用于登录某个应用，执行相应行为的账号，如公司的企业微信的企业应用账号，或者调用高德地图接口的账号。  
不同的应用会需要不同的登录信息，这些信息都是在账号类型中进行定义。因此添加应用账号前，需要先确保有对应的账号类型的定义。

### 3.2.1 应用账号管理列表

1. 支持使用应用账号的名称来进行列表搜索
2. 支持添加新的应用账号
3. 应用账号列表显示账号的基本信息，点击名称可以进入对应账号详情进行查看和修改（不能修改账号类型）
4. 此处是对账号的一些基本操作，目前支持删除。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E7%AE%A1%E7%90%86%E5%88%97%E8%A1%A8.png)

### 3.2.2 应用账号详情

点击新增或查看应用账号，会进入账号详情页面

1. 账号类型选择，此处可以从系统中的账号类型列表中选择一个作为账号信息填写的模板。只有新增时才能选择，查看时不支持修改。
2. 账号别名是一个通用的应用账号字段，用于直观的描述和标识一个账号。
3. 此处是根据账号类型，动态生成的属性填写区域，填写完成后就可以保存账号了。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E8%AF%A6%E6%83%85.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E8%AF%A6%E6%83%85-%E8%B4%A6%E5%8F%B7%E8%AE%BE%E7%BD%AE.png)

## 3.3 资源

资源对应着实际调用或执行的各种功能的代码，可以通过上传jar插件的方式来添加资源。  
具体的插件开发指南请参看[丝路iPaaS-插件开发指南](http://apaas.wxchina.com:8881/2022/08/02/丝路ipaas-插件开发指南/ "丝路iPaaS-插件开发指南")

### 3.3.1 资源包列表

1. 支持使用资源包名称，以及是否私有来进行列表搜索
2. 支持添加新的资源包
3. 显示资源包的基本信息（资源包名称，备注，是否私有）以及最新版本信息（最近一次上传的插件的版本），点击名称可以进入详情进行查看和修改。
4. 此处可向资源包中上传插件

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B5%84%E6%BA%90%E5%8C%85%E5%88%97%E8%A1%A8.png)

### 3.3.2 资源包详情

需要添加全新的插件时就需要新建资源包来放置插件。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B5%84%E6%BA%90%E5%8C%85%E8%AF%A6%E6%83%85.png)

### 3.3.3 插件上传

只需要将插件（jar包）上传到指定的资源包中，就会自动检测并生成系统可用的资源。  
插件上传时需要注意里面的配置信息，如插件版本，系统将会根据插件的版本来决定是更新还是添加资源包版本。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8F%92%E4%BB%B6%E4%B8%8A%E4%BC%A0.png)

### 3.3.4 插件包详情

1. 显示了资源包的基本信息，名称和备注
2. 这里是资源包内所包含的所有资源包版本
3. 显示指定版本的更新说明
4. 显示指定版本中包含的资源的基本信息
5. 点击后支持修改资源包的基本信息
6. 支持删除指定资源包版本（会校验是否有引用关系），当不存在任何版本时，可删除资源包。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%8F%92%E4%BB%B6%E5%8C%85%E8%AF%A6%E6%83%85.png)

## 3.4 连接器

连接器是对一组行为（触发行为，执行行为）的包装。执行行为通常是对某个资源的包装，而触发行为则定义一个外部调用的接口。

### 3.4.1 连接器列表

1. 支持使用连接器名称，连接器状态，以及是否私有来进行列表搜索
2. 支持添加新的连接器
3. 显示连接器的基本信息（连接器名称，图标，备注，是否私有，状态）以及最近一次的更新人和更新时间，点击名称可以进入详情进行查看和修改。
4. 支持启用，停用，或删除连接器。停用时会进行必要的关联检测，只有停用状态的连接器才能被删除。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9E%E6%8E%A5%E5%99%A8%E5%88%97%E8%A1%A8.png)

### 3.4.2 连接器基本信息

新建连接器时需要先填写基本信息

1. 连接器名称，必须全局唯一
2. 主题，用于当连接器中有触发行为时，生成外部调用链接的，该字段只能保存一次，一旦确定就不再支持更改。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9E%E6%8E%A5%E5%99%A8%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF.png)

### 3.4.3 连接器详情

可在此处查看连接器的基本信息，以及管理连接器所包含的行为。

1. 显示连接器的基本信息
2. 点击后可修改基本信息
3. 显示连接器所包含的行为的基本信息
4. 在此处可添加行为
5. 支持对已有的行为进行编辑，启用/停用，删除等操作。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9E%E6%8E%A5%E5%99%A8%E8%AF%A6%E6%83%85.png)

### 3.4.4 行为详情 - 触发详情

1. 目前支持两种类型的行为，触发和执行，一旦保存后，就不再支持修改行为类型。
2. 触发行为必须填写主题，用于生成调用链接。行为主题不支持修改。
3. 触发类型，支持精确和广播两种，会影响生成的调用链接。  
   精确会调用指定的集成流，广播会调用所有使用了该触发行为的集成流。
4. 此处进行调用接口的参数定义，支持基本的数据类型（Number，String，Bool，Array，Map），其中的参数名为必填，只能输入英文字符和基本符号
5. 此处可以在根节点添加参数
6. 如果参数类型为Map或Array时，可以在此处添加其子属性。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%8C%E4%B8%BA%E8%AF%A6%E6%83%85-%E8%A7%A6%E5%8F%91%E8%A1%8C%E4%B8%BA.png)

#### 触发行为与集成流节点属性关系示例

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A7%A6%E5%8F%91%E8%A1%8C%E4%B8%BA%E4%B8%8E%E9%9B%86%E6%88%90%E6%B5%81%E8%8A%82%E7%82%B9%E5%B1%9E%E6%80%A7%E5%85%B3%E7%B3%BB%E7%A4%BA%E4%BE%8B.png)

### 3.4.5 行为详情 - 执行行为

1. 如果选择的是执行类型，则需要填写执行行为相关的属性。
2. 执行行为需要关联一个实际执行业务逻辑的资源，并要确定好使用资源的版本。  
   资源一旦确定就不能再更改，只能更改资源的版本。
3. 此处是执行行为所需的入参列表，该参数列表的基本信息是在插件中描述的，这里只是补充一些在实际使用该行为配置集成流时所需要的信息。
4. 插件中可以描述入参字段在集成流配置中使用哪种控件来录入（如文本框，下拉框等）。在此处也可以根据需要更改控件类型。
5. 此处是执行行为所产生的出参列表，该参数列表的基本信息是在插件中描述的，这里只是补充一些在实际使用该行为配置集成流时所需要的信息。
6. 此处为执行行为所可能产生的特定异常列表，该列表的基本信息是在插件中描述的，此处可以进行显示信息的补充和修改，这些信息将会在配置集成流节点的异常处理策略时使用。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%8C%E4%B8%BA%E8%AF%A6%E6%83%85-%E6%89%A7%E8%A1%8C%E8%A1%8C%E4%B8%BA.png)

#### 执行行为与集成流节点属性关系示例

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%A7%E8%A1%8C%E8%A1%8C%E4%B8%BA%E4%B8%8E%E9%9B%86%E6%88%90%E6%B5%81%E8%8A%82%E7%82%B9%E5%B1%9E%E6%80%A7%E5%85%B3%E7%B3%BB%E7%A4%BA%E4%BE%8B.png)

## 3.5 集成流

### 3.5.1 集成流列表

1. 支持通过集成流名称进行模糊搜索
2. 支持对够选的集成流进行导出。导出时还会同时导出必要的关联数据（如应用账号，账号类型，资源，连接器等）。同时支持将导出的数据进行导入，导入时也会同步导入必要的关联数据。
3. 支持新建集成流
4. 集成流列表会显示集成流的基本信息
5. 支持对集成流进行启用或停用操作
6. 支持删除未启用的集成流。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E5%88%97%E8%A1%A8.png)

### 3.5.2 集成流配置IDE

1. 集成流名称，支持直接在此处修改
2. 支持修改集成流的基本属性（参看下方说明），以及查看该集成流的执行日志。
3. 保存操作只保存配置协议；发布操作会先保存，然后自动新增版本发布，并将该版本设置为启用版本。
4. 支持缩放画布
5. 支持查看当前的配置协议，主要是用来方便开发查找错误。
6. 集成流节点，点击后可以查看和编辑对应的属性（参看下方说明）。
7. 添加节点按钮，点击后可以添加集成流节点

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E9%85%8D%E7%BD%AEIDE.png)

#### 3.5.2.1 集成流基本属性

1. 总超时时间是指整个集成流所允许的运行最大时长，可以不填写。
2. 集成流默认为异步执行，设置为否的时候就是同步执行。异步执行时，需要调用端通过轮询接口来获取运行结果；

3. 当选择同步执行时，可以设置一个节点，用该节点的出参作为整个集成流同步返回的结果。  
[接口文档](http://172.16.0.141/aPaaS-OpenDoc/Markdown/blob/master/back-endWiki/iPaaS/%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/%E8%B7%AF%E7%94%B1%E6%9C%8D%E5%8A%A1/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD.md "接口文档")

   ![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E5%9F%BA%E6%9C%AC%E5%B1%9E%E6%80%A7.png)

#### 3.5.2.2 行为选择

点击添加节点按钮后，就可以通过选择连接器，以及对应的行为，来新增行为节点了。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%8C%E4%B8%BA%E9%80%89%E6%8B%A9.png)

#### 3.5.2.3 节点属性 - 触发节点

一个集成流有且只有一个触发节点，触发节点主要有两种，一种是通过外部调用接口触发，一种是定时触发。

##### 外部调用接口触发

1. 节点名称，所有集成流节点都支持修改节点名称，默认为关联行为的名称
2. 调用API，会根据行为的相应属性来生成一个调用接口，外部应用通过此接口的调用来触发该集成流的执行
3. 参数列表，此处展示调用该接口所需要的参数信息。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%A4%96%E9%83%A8%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8.png)

##### 定时触发

根据设置的时限和周期来周期性的执行，具体属性参看系统组件【定时器】

#### 3.5.2.4 节点属性 - 执行节点

执行节点可以选择系统组件或者连接器行为，具体设置请参看【系统组件】以及【常见连接器】部分的介绍。

### 3.5.3 集成流运行日志

记录集成流运行的历史记录，以及简单的统计信息

1. 基本统计信息
2. 日志搜索
3. 日志列表，可点击查看日志详情

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E8%BF%90%E8%A1%8C%E6%97%A5%E5%BF%97.png)

# 四、系统组件

一组由系统提供的执行基础逻辑，数据处理等需求的组件。

## 4.1 条件分支

根据配置的逻辑条件执行指定的分支节点。  
一个条件分支节点，至少需要两个分支，并且为了避免出现没有任何可执行的分支，系统会生成一个默认分支，用于不满足任何条件时执行。

### 4.1.1 属性面板

在属性面板可以添加或删除分支。

1. 点击此处添加新的分支。
2. 会生成两个分支，并且这两个分支不支持删除，其中默认分支也不支持条件设置。
3. 可以删除一个分支，删除条件会同时删除该分支下的所有节点。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%9D%A1%E4%BB%B6%E5%88%86%E6%94%AF-%E5%B1%9E%E6%80%A7%E9%9D%A2%E6%9D%BF.png)

### 4.1.2 条件设置

目前支持可视化的配置两层条件，第一层and，第二层or，类似于以下模式  
(条件1 or 条件2) and (条件3)

1. 此处添加条件
2. 此处删除一个条件
3. 此处添加一个条件组
4. 此处删除一个条件组
5. 支持从环境变量中选择一个参数作为对比对象
6. 支持设置对比关系，根据参数类型不同有所不同
7. 支持固定值对比或者跟其他环境变量对比

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%9D%A1%E4%BB%B6%E8%AE%BE%E7%BD%AE.png)

## 4.2 迭代器

尚未实现

## 4.3 定时器

用于周期性触发一个集成流。只能在触发节点选择。

1. 开始执行时间，规定了从何时开始执行周期。为空时表示立即开始
2. 结束执行时间，规定了何时自动结束执行周期。为空时表示永远不结束。也可以通过手动停用集成流来达到结束执行周期的目的。
3. 执行周期设置，支持Cron表达式。可参考此处文档：Corn表达式
4. 如果执行的任务不能并发执行，同一时间只能有一个执行实例的，可以勾选该选项来避免冲突。勾选后，执行集成流之前会检测上一次执行是否完成，如果没有完成，则会取消当前的执行，等待下一个执行周期。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%AE%9A%E6%97%B6%E5%99%A8.png)

## 4.4 数据缓存

用于存储临时数据，可用于外部应用获取集成流内部的输出。可通过指定的接口获取到缓存的数据。

1. 设置数据缓存的时间，超过时间后会自动清除缓存内容
2. 可以自定义缓存的内容，缓存内容以键值对的形式存储，需要手动输入想要存储的数据的键值。
3. 缓存的值支持固定值和字段值两种，固定值可以手动输入一个值，字段值可以从环境变量中选择一个字段。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%95%B0%E6%8D%AE%E7%BC%93%E5%AD%98.png)

## 4.5 脚本执行

系统提供了一个支持运行脚本的组件，可以用于处理一些较为复杂，现有连接器或组件不便实现的业务逻辑，主要是一些数据处理和转换逻辑。  
脚本支持JS语法，支持使用集成流的环境变量，支持返回数据添加到环境变量中，供后续节点使用。

### 4.5.1 属性面板

1. 点击此处进入脚本编辑器。
2. 此处显示脚本的出参列表，便于快速查看脚本的输出内容。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%84%9A%E6%9C%AC%E8%BF%90%E8%A1%8C.png)

### 4.5.2 脚本编辑器

1. 参数列表会显示可用的环境变量，双击后会在右边的脚本输入框中自动插入该变量。实例在运行中会根据变量的实际值替换这些变量。
2. 通过简单的 return 语句就能输出想要的结果。不过目前不能自动的分析识别出脚本中的返回内容，需要额外定义出参。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E8%84%9A%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8.png)

### 4.5.3 出参设置

此处进行手动的设置出参列表

1. 点击后进入出参编辑页面。
2. 显示出参列表。
3. 目前只支持通过一个合法的json来自动生成出参列表。配置人员应确保该json的结构与脚本实际输出的内容结构一致。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%87%BA%E5%8F%82%E8%AE%BE%E7%BD%AE.png)

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E5%87%BA%E5%8F%82%E8%AE%BE%E7%BD%AE2.png)

## 4.6 成功

用于标记当前流程执行成功，并结束当前流程实例的执行。

## 4.7 失败

用于标记当前流程执行失败，并结束当前流程实例的执行。

# 五、常用连接器

此处列举部分常用的连接器的使用。

## 5.1 数据库连接器

数据库连接器可以直接连接指定的数据表执行指定操作，目前支持PG数据库的单条数据的单表插入操作。

1. 账号选择，可以选择需要连接的数据库。该选项决定了后续的配置内容，需要先选择确定。
2. 在选好了数据库后，就可以在指定其中的一个数据表进行操作，可以通过表名来搜索选择。
3. 此处设置需要插入的数据，可以选择指定数据表中的字段，然后指定需要插入的字段值
4. 字段值支持固定值和字段值两种设置方式。
5. 此处显示输出字段，这些字段由插件定义。

![](http://apaas.wxchina.com:8881/wp-content/uploads/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5.png)

在实际使用过程中，数据库插入需要一些特殊的能力，例如生成主键值等，目前提供了手动输入表达式的方式来满足。

1. ${FLY.genId()} ：用于生成UUID。
2. ${FLY.toJsonString(s1051)} ：用于将指定的环境变量值转换为字符串。支持整个节点数据的转换，不过目前需要手动填写节点编码。节点编码可通过查看协议的方式，或者从脚本编辑页面获取。

## 5.2 玄武AI连接器