---
title: APP从9.0升级9.1配置问题指导
date: 2021-01-25T18:26:53
---

## APP从9.0升级9.1配置问题指导

为解决两端不一致的问题以及提升实施过程中的规范配置，9.1对系统和控件协议进行了严格的遵守。  
  
因此在9.0升级到9.1时需要补全不规范的配置。 总结如下：

9.0没事，9.1有事而且需要关注的bug

1. 配置差异点：不起效的flex属性，在9.1中生效

   * 案例：禅道 3543，  
养元：我的排班。列表界面异常。

   * 原因：

     IDE在填写过flexgrow属性后，即便之后清除了填写值，在协议中依然会保留一个空值的flexgrow属性。而在9.0版本中，flexgrow属性无论有值还是空值，只要存在就会优先使用（覆盖flex的设置），导致设置了flex属性，但却不能起效的问题。

     9.1版本修复了该问题，即在flexgrow为空值时不再覆盖flex的值。但这就带来了一个问题，就是在9.0版本中错误的设置了flex，但因为被覆盖所以错误被掩盖的情况暴露了出来。

   * 解决办法：  
将错误设置了flex属性的控件（code为layout-6812350078139734的layout控件）的flex = 1修改为flex = ""即可。

   * 修改是否会影响到9.0用户：否

     ---

2. 配置差异点：9.1对水平布局时控件宽度的设置进行了明确和统一，避免了9.0经常出现的宽度错误或两端不一致的情况。

   * 案例：

     禅道3261：红牛：拜访流-现渠店情拍照：排面产品文字没有显示出来

     禅道3262 ：红牛：拜访流-现渠店情拍照：安卓端选择场景之后，排面商品无法选择了

   * 原因：

     由于9.1对水平宽度的处理进行了规范，不再支持一部分因为漏洞碰巧能正常显示的场景。由于两端差异，安卓端需要更加明确的设置空间宽度。

   * 解决方法：暂时尽量避免使用水平布局输入型的场景，必须要使用时，请务必明确设置每个控件的宽度或占比。
   * 修改是否会影响到9.0用户：否

   ---

3. 配置差异点：9.1安卓端先实现了数组型控件便捷配置规则实现

   * 案例：禅道3292，  
百年糊涂：查看陈列执行内容的待执行数据，安卓执行信息的执行状态默认是待执行，9.0为空

   * 原因：  
为降低配置难度，数组型控件有一个默认的存储和赋值规则（即字段名与控件name相同时会自动匹配）。该规则之前只在web端进行了实现，9.1安卓端也实现了该规则，所以自动匹配了相同名字的字段和控件。

   * 解决方法：  
如果不希望自动匹配，应该在控件的命名时避免与字段名相同。
   * 修改是否会影响到9.0用户：否

   ---

4. 配置差异点：9.1安卓端实现了overflow属性，更好的支持特殊的滚动场景。

   * 案例：禅道1514  
     道道全：应用-客户管理-终端详情-开始拜访-订单录入页面的提交按钮没有固定显示在页面下方
   * 原因：  
     外层overflow属性滚动被设置，但以前该设置9.0并不会生效，在9.1上因为属性的实现产生了效果
   * 解决方法：  
     需要项目组在表单中配置 overflow:"0" 关闭最外层滚动，类似问题多发，请项目组在9.1上线后多关注
   * 修改是否会影响到9.0用户：否

   ---

5. 配置差异点：9.1对控件UI配置属性进行了规范，进一步减少了两端布局的差异

   * 案例：

     禅道1503，益海嘉里：考勤，安卓手机选择门店后，界面布局有点问题

     禅道1300，考勤汇总--查看晚签异常次数明细时，明细页面的表格没有拉伸显示充满整个界面

     禅道1177，益力多：订单管理-下单后的打印单页面，签名图片显示不全

   * 原因：  
基本都是错误了设置了flex或者height属性，但由于9.0没有正确解析这些属性，导致碰巧能正常的情况。

   * 解决方法：  
项目组根据需要自行调整布局属性，该类问题可能在9.1上线后会较多发，类似问题在养元9.1上线时也有发现，请项目组在以后的配置中予以重视
   * 修改是否会影响到9.0用户：否

   ---

6. 配置差异点：返回事件配置约束不同

   * 案例：禅道917 ，  
登康：访店记录-巡店记录-点击终端进入协防反馈页面，提交成功后没有返回巡店记录列表

   * 原因：  
该种返回的配置方式不再支持：9.1 Android的返回事件 如果指定了返回到某一页面的时候，指定的页面是switchPage下面的子页面 将无法返回到switchPage这个页面

   * 解决方法：项目组应该根据需求正确配置返回事件

   * 修改是否会影响到9.0用户：否

     ---

7. 配置差异点： 请注意flycode传递数据的字段都应该是字符串类型

   * 案例：禅道619，  
     景田：应用-路线管理-我的-点击右上角按钮-新增编辑路线页面的路线类型默认值不一致，Android显示的默认值是循环路线，ios没有默认值
   * 原因：  
     iOS不支持支持赋值数字，平台创建之初亦是如此  
     目前平台统一的值传递方式都是字符串，不支持其他格式
   * 解决方法：直接修改表单即可，将数字改为字符串即可
   * 修改是否会影响到9.0用户：否

   ---

8. 配置差异点：9.1按钮背景大小需要按协议正确配置

   * 案例：禅道216 ，  
     蜡笔：考勤管理-上班打卡或下班打卡页面，提交按钮的黄色背景太窄了
   * 原因：  
     协议预留有按钮配置的相关协议，但之前并没有完整实现。9.1会对按钮形状的配置按协议做约束
   * 解决方法：请有该UI问题的项目补上该配置
   * 修改是否会影响到9.0用户：否

   ---

9. 配置差异点：9.0 iOS会在下拉框为只读的情况下，将未在所有选项中能找到的数据展示出来，9.1不再支持该种配置

   * 案例：禅道167，  
     九三：拜访管理-进入某个终端的拜访记录页面，竞品管理的陈列形式的值没有显示
   * 原因：  
     该问题为实施配置问题，对应设置到下拉框的数据没有指定componet为text。  
     注意1、9.0 iOS会在下拉框为只读的情况下，将未在所有选项中能找到的数据展示出来， 9.1的iOS也将不再支持这种错误的配置方式；  
     注意2、9.1 Android 已和 9.1 iOS保持一致
   * 解决方法：项目组结合需求进行修改
   * 修改是否会影响到9.0用户：否

   ---

10. 配置差异点：9.0的Android在picklist配置为单选模式下，依旧可以作为多选使用，9.1将约束这种配置方式

  * 案例：禅道 2801，  
    景田：ios新增终端，无法新增，提示异常，安卓正常 9.0的ios包正常
  * 原因：负责业务员配置的是picklist单选模式，按照协议提交格式9.1是正确的， 9.0以及安卓提交的格式是多选格式，错误
  * 解决方案：  
    为了兼容新旧版本两个格式，有两种配置方案： 1.修改表单配置，负责业务员修改为picklist多选 2.修改后台flycode逻辑，兼容数组型json字符串与json字符串两种格式
  * 修改是否会影响到9.0用户：否

  ---

11. 配置差异点：9.0的Android 在拜访步骤，配置使用datasubmit，可以。安卓APP 9.1.1 拜访步骤提交完拜访里面的“活动执行”之后外面没有打勾

  * 案例：禅道 3446，  
    家化：拜访流程提交数据后，拜访流程列表无法正确对步骤进行打勾展示
  * 原因：  
    安卓9.0错误兼容了该配置 9.1安卓 / 9.0IOS最新包/9.1 IOS 包是正确按照协议走的。  
    拜访步骤中的活动执行提交之后，返回到列表，没有勾选。
  * 解决方案：9.1的Android和iOS应该是保持了一致，提交按钮最终触发的行为为datasubmit，该行为不具有 列表打钩的能力，请使用 visitworkdatasubmit
  * 修改是否会影响到9.0用户：否

  ---

12. 配置差异点：  
AI控件（AIPHOTO）：弃用拍照时值改变事件（onvaluechange）修改为跳转事件（jumpdetail）

  * 案例：  
    红牛店情拍照，可能出现一直在loading的情况，无法正确执行值改变事件
  * 原因：  
    当页面开启缓存且有aiphoto控件的图片缓存时，加载缓存会导致aiphoto自动跳转至识别详情页面（触发onvaluechange事件）。  
    修改项：aiphoto在9.1版本中弃用拍照时值改变事件（onvaluechange）修改为跳转事件（jumpdetail）
  * 解决方案： 1.手机端在触发此事件时上传的是当前图片的信息（单张），如需获取当前控件所有图片需使用（“allFileInfo”）。 2.值改变事件和点击图片进行跳转都由 jumpdetail事件控制。
  * 修改是否会影响到9.0用户：是