import{_ as a,o as p,c as s,Q as n}from"./chunks/framework.b1e56e49.js";const g=JSON.parse('{"title":"苹果端ABM分发实现方案","description":"","frontmatter":{"title":"苹果端ABM分发实现方案","date":"2021-07-07T18:53:44.000Z"},"headers":[],"relativePath":"doc/wpdoc/苹果端ABM分发实现方案.md","filePath":"doc/wpdoc/苹果端ABM分发实现方案.md"}'),e={name:"doc/wpdoc/苹果端ABM分发实现方案.md"},t=n(`<h1 id="苹果端abm分发实现方案" tabindex="-1">苹果端ABM分发实现方案 <a class="header-anchor" href="#苹果端abm分发实现方案" aria-label="Permalink to &quot;苹果端ABM分发实现方案&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h2 id="业务背景" tabindex="-1">业务背景 <a class="header-anchor" href="#业务背景" aria-label="Permalink to &quot;业务背景&quot;">​</a></h2><p>​ 苹果官方有六大账号：“Apple ID”、“个人账号”、“公司账号”、“企业账号”、“其他账号”及“ABM 系统”六种账号是苹果对于不同开发者的身份所提供的不同账号。开发者可通过“个人账号”、“公司账号”、“企业账号”、“其他账号”及“ABM 系统账号“发布App。</p><h3 id="一、证书的类型概念" tabindex="-1">一、证书的类型概念 <a class="header-anchor" href="#一、证书的类型概念" aria-label="Permalink to &quot;一、证书的类型概念&quot;">​</a></h3><p><strong>1、个人开发者账号</strong></p><p><strong>优点：</strong></p><p>①申请速度快（1 – 3 个工作日完成）</p><p>②自身 App 可上架至 App Store 供用户下载</p><p><strong>缺点：</strong></p><p>①苹果审核相对严格</p><p>②只显示个人开发者名称，缺少公信力</p><p>③iTC 后台无法创建更多开发者协同账号</p><p>④测试设备数量限制 100 台</p><p><strong>适用范围：</strong></p><p>①独立开发者或小团队</p><p>②节省注册申请时间</p><p>③无需体现公司背景</p><p><strong>2、公司开发者账号</strong><br><strong>优点：</strong></p><p>①有公司背书，用户在 App Store 下载较为放心</p><p>②iTC 后台可以创建更多开发者协同账号，参加的相关开发等成员可以集中管理</p><p>③申请过程中获得的邓白氏编码，相当于企业的一张英文名片</p><p><strong>缺点：</strong></p><p>①需要邓白氏编码和公司开发者账号双重申请，一般需要 2 – 8 个工作日</p><p>②苹果审核相对严格</p><p>③测试设备数量限制 100 台</p><p><strong>适用范围：</strong></p><p>①公司或工作室等集体性账号</p><p>②分发过程中需要进行成员协作</p><p>③需要彰显公司信息，打造系列产品，树立产品背书形象</p><p><strong>3、企业开发者账号</strong></p><p><strong>优点：</strong></p><p>①可自行分发部署 App，不需要苹果审核，直接上架到企业网站或内部渠道</p><p>②可自定义登录账号、自定义支付方式</p><p>③iTC后台可以创建更多开发者协同账号，集中管理成员权限及产品开发</p><p>④申请过程中获得的邓白氏编码，相当于企业的一张英文名片</p><p>⑤无测试设备限制，适合大型、敏捷团队开发，迭代版本快</p><p><strong>缺点：</strong></p><p>①需要邓白氏编码和企业开发者账号双重申请，但通过率极低</p><p>②只在企业内部分发使用，无法借助 App Store 流量</p><p>③不能显示公司信息</p><p>④目前违规滥用情况较多，封号严重</p><p><strong>适用范围：</strong></p><p>①企业内部管理</p><p>②无需上线 App Store 供大众用户使用的产品</p><p><strong>4、ABM 系统</strong></p><p><strong>优点：</strong></p><p>①2019 年 10 月中国区启动，是全新的分发平台</p><p>②相比企业开发者账号，资质审核没有那么严格</p><p>③App 的开发只需预审和机审，适合公司、企业内部管理使用</p><p>④iTC 后台可以创建更多开发者协同账号，集中管理成员权限及产品开发</p><p><strong>缺点：</strong></p><p>①要邓白氏编码和企业开发者账号双重申请</p><p>②只在企业内部使用</p><p>③不能显示公司信息</p><p>④有下载量的限制，与公司规模相关联（企业员工数*1.5±）</p><p><strong>适用范围：</strong></p><p>①企业内部管理</p><p>②无需上线 App Store 供大众用户使用的产品</p><p>③无“企业开发者账号”的相关开发者</p><p><strong>5、其他账号</strong></p><p>其他账号包括三大类行组织机构可特殊申请：非营利、被认可的教育机构和政府组织。</p><p><strong>6、Apple ID</strong></p><p>苹果帐户（Apple ID）是苹果公司为其产品（如iWork、iTunes Store和Apple Store）所引入的认证系统。Apple ID作为一个集全功能于一身的用户帐户，允许用户访问苹果的各种资源。因为一个Apple ID可以被用于由苹果提供的多个产品和服务，它也可以称为Apple账户、MobileMe账户、Mac账户、iTunes Store账户和iChat账户。</p><p><strong>账号申请入口</strong></p><p>1、Apple ID 直接通过苹果官网即可注册</p><p>2、个人账号、公司账号、企业账号：建议下载 Developer 应用程序，进行注册。</p><p>3、ABM 系统：<a href="https://business.apple.com/" target="_blank" rel="noreferrer">https://business.apple.com/</a></p><h3 id="二、现有的问题痛点" tabindex="-1">二、现有的问题痛点 <a class="header-anchor" href="#二、现有的问题痛点" aria-label="Permalink to &quot;二、现有的问题痛点&quot;">​</a></h3><p>1、企业证书逐步限制申请</p><p>​ 在 2019 年下半年，苹果停止了企业账号的申请和审批，同时苹果对于各类签名开始收紧管控力度，大量苹果企业签名（Apple Developer Enterprise Program）被清理，大量依靠苹果企业签分发的 App 都无法使用。很多开发者转向矩阵部署开发者账号的超级签名。但由于超级签也有多种限制，价格也水涨船高，普通开发者账号的申请也日益艰难，因此 App 的快速批量分发成了开发者们很是棘手的问题。</p><p>2、个人证书数据安全问题（例如个人离职后，通过个人证书部署企业应用，导致企业资产受损）</p><p>3、项目发布频繁、故障类Fixed问题紧急处理等，需要缩短上价时间，快速分发IOS应用包</p><h3 id="三、abm的价值" tabindex="-1">三、ABM的价值 <a class="header-anchor" href="#三、abm的价值" aria-label="Permalink to &quot;三、ABM的价值&quot;">​</a></h3><p>1、一个企业证书可以打N个包<br> 2、每一个ABM包可以自定义图标、LOGO、名称等<br> 3、ABM可快速发布下载，不需上架APPstore</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>​ 由客户注册ABM账号后，下载兑换码。由实施人员填入模板excel，通过兑换码管理页面导入到数据库里。在实施人员将jar包部署到服务器上后。如下图，用户在浏览器上访问下载页面，微服务从数据库中随机取一个有效兑换码对应的url跳转链接，让浏览器重定向到该链接，会跳转到iTunes Store下载app。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%871.png" alt="图片1"></p><h3 id="一、上架app及下载兑换码的具体步骤" tabindex="-1">一、上架app及下载兑换码的具体步骤 <a class="header-anchor" href="#一、上架app及下载兑换码的具体步骤" aria-label="Permalink to &quot;一、上架app及下载兑换码的具体步骤&quot;">​</a></h3><h4 id="一-、注册abm账号" tabindex="-1">（一）、注册ABM账号 <a class="header-anchor" href="#一-、注册abm账号" aria-label="Permalink to &quot;（一）、注册ABM账号&quot;">​</a></h4><p><strong>1.</strong> 登录注册网站</p><p><a href="https://business.apple.com/#enrollment" target="_blank" rel="noreferrer">https://business.apple.com/#enrollment</a></p><p><strong>2.</strong> 点击“立即注册”</p><p><strong>3.</strong> 输入并检查以下组织信息：</p><p>•数据通用编号系统 D-U-N-S 编号（即邓白氏编码）（邓白氏申请步骤可自行网上查询或参考如下链接：<a href="https://juejin.im/post/6844903778596945928" target="_blank" rel="noreferrer">https://juejin.im/post/6844903778596945928</a>）<br><strong>【注意】D-U-N-S 编号必须与组织的法定名称和地址相匹配。</strong><br> •所在的国家或地区<br> •电话号码（系统会根据您输入的 D-U-N-S 编号所提供的信息来预填电话号码。也可以输入新的电话号码。）<br> •网站网址 (URL)<br><strong>【注意】此域名用于预填管理式 Apple ID。但是，如果组织的网站网址 (URL) 不同于其注册域名，那么在创建管理式 Apple ID 并将其分配给 Apple 商务管理的其他用户之前，可将这个 URL 更改为组织的注册域名。请勿使用所创建的域名，否则会导致已创建的所有管理式 Apple ID 都无法正常工作。</strong><br> •时区和语言</p><p><strong>- 输入并检查信息：</strong><br> •代表组织注册的人员的姓氏和名字<br><strong>【注意】此姓名必须是合法登记的人名。若姓名为“IT 协调员”或“Apple 部署”等名称，系统会将其退回并让更正信息。</strong><br> •工作电子邮件地址，该地址不能与 iTunes 或 iCloud 帐户关联，且未在其他任何 Apple 服务或网站上作为 Apple ID 使用。<br> •职务/职称</p><p><strong>- 输入并检查验证联系人信息：</strong><br> •姓名<br> •工作电子邮件地址<br> •职务/职称</p><p><strong>4.</strong> 点按“继续”，仔细检查信息，然后点按“提交”。</p><p><strong>5.</strong> 查看来自 Apple 商务管理的电子邮件，找到主题为“您的注册正在审核中”的邮件。</p><p>在审核过程中，苹果会通过电话联系验证联系人，并要求该联系人确认有关注册人所在组织的信息，然后才能批准注册。<br><strong>【注意】要确保能收到来自<a href="http://apple.xn--com-wu9ds6uwlgbt6d8z3b" target="_blank" rel="noreferrer">http://apple.com域名的邮件</a>。苹果也会通过电话沟通，若有未接来电，请尽快回电，以便注册过程可以顺利进行。</strong></p><h4 id="二-、确认注册和授予管理员访问权限" tabindex="-1">（二）、确认注册和授予管理员访问权限 <a class="header-anchor" href="#二-、确认注册和授予管理员访问权限" aria-label="Permalink to &quot;（二）、确认注册和授予管理员访问权限&quot;">​</a></h4><p>Apple 联系验证联系人并确认好信息之后，该联系人将收到来自 Apple 商务管理的主题为“感谢您确认您的组织”的邮件。然后，该联系人即可完成以下任务。</p><p><strong>1.</strong> 打开来自 Apple 商务管理的主题为“感谢您确认您的组织”的邮件。</p><p><strong>2.</strong> 查看邮件并执行以下操作之一：</p><p>•点按“确认为[人名]”按钮，让此人成为ABM的管理员。这是最初在ABM中注册的人的名字。</p><p>•如果不希望此人成为管理员，点按“另选他人”链接，输入其他人的信息，然后点按“提交”<br><strong>【注意】最多只可以向四个经理授予管理员访问权限。</strong></p><p><strong>3.</strong> 验证联系人须勾选相应复选框，签署 ABM 条款与条件。</p><p>此任务完成后，被选中作为管理员的人将收到来自 ABM的主题为“注册完成”的邮件。</p><h4 id="三-、完成注册流程" tabindex="-1">（三）、完成注册流程 <a class="header-anchor" href="#三-、完成注册流程" aria-label="Permalink to &quot;（三）、完成注册流程&quot;">​</a></h4><p>验证联系人批准之后，将收到通知注册已批准的邮件。然后创建自己的管理式 Apple ID 并同意所有条款与条件。</p><p><strong>1.</strong> 打开来自 Apple 商务管理的主题为“注册完成”的邮件。</p><p><strong>2.</strong> 点按邮件中的“开始操作”按钮打开 Safari 浏览器或默认浏览器。要查看受支持的浏览器列表，请参阅 Apple 商务管理的计划要求。</p><p><strong>3.</strong> 输入一个电子邮件地址，以便作为管理式 Apple ID 使用。<br><strong>【注意】确保这个电子邮件地址之前没有将其作为 Apple ID 用于 iTunes 或 iCloud 帐户，或任何其他 Apple 服务或网站即可。输入安全密码，然后确认密码。</strong></p><p><strong>4.</strong> 确认名字，然后输入出生日期。</p><p><strong>5.</strong> 输入已启用短信的手机号码，然后选择如何获取二次验证。</p><p><strong>6.</strong> 点按“提交”。系统会要求验证电子邮件地址和手机号码。</p><p><strong>7.</strong> 点按您收到的邮件中的链接，以验证您的电子邮件地址。</p><p><strong>8.</strong> 输入您手机上收到的短信验证码，然后点按“验证”。</p><p><strong>9.</strong> 接受条款与条件。必须接受所有条款才能继续操作。</p><p>需要指出的是，ABM 只是用于分发的系统，不是开发 App 的系统，开发打包 App 还是要用个人开发者账号或公司开发者账号。开发者可以打包后提交到 ABM 账号进行内部分发。目前 ABM 系统还处在内部测试中，只有极少数的企业能够通过定邀获取使用资格。蝉大师会和开发者一同关注 ABM 系统的最新进展，第一时间同步最新消息。</p><h4 id="四-、申请上架验证及客户上线工作" tabindex="-1">(四)、申请上架验证及客户上线工作 <a class="header-anchor" href="#四-、申请上架验证及客户上线工作" aria-label="Permalink to &quot;(四)、申请上架验证及客户上线工作&quot;">​</a></h4><ol><li>登陆AppStore开发者站点（<a href="https://appstoreconnect.apple.com/%EF%BC%89%EF%BC%8C%E7%94%B3%E8%AF%B7%E4%B8%8A%E6%9E%B6%E6%B5%81%E7%A8%8B%E4%B8%8E%E6%AD%A3%E5%B8%B8%E7%9A%84%E4%B8%8A%E6%9E%B6%E6%B5%81%E7%A8%8B%E4%B8%80%E6%A0%B7%EF%BC%8C%E5%94%AF%E4%B8%80%E4%B8%8D%E5%90%8C%E7%9A%84%E5%9C%B0%E6%96%B9%E6%98%AF%E5%88%86%E5%8F%91%E6%96%B9%E5%BC%8F%E7%9A%84%E9%80%89%E6%8B%A9%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE%EF%BC%8C%E5%9C%A8%E2%80%9C%E4%BB%B7%E6%A0%BC%E4%B8%8E%E9%94%80%E5%94%AE%E8%8C%83%E5%9B%B4%E2%80%9D%E6%A0%8F%E4%B8%AD%E7%9A%84%E5%88%86%E5%8F%91%E6%96%B9%E5%BC%8F%E9%80%89%E6%8B%A9%E7%AC%AC%E4%B8%89%E9%A1%B9%EF%BC%88%E5%A6%82%E6%9E%9C%E4%B8%8A%E6%9E%B6%E5%88%B0App" target="_blank" rel="noreferrer">https://appstoreconnect.apple.com/），申请上架流程与正常的上架流程一样，唯一不同的地方是分发方式的选择，如下图，在“价格与销售范围”栏中的分发方式选择第三项（如果上架到App</a> Store则选择的为第一项），然后再填入组织ID即可。然后提交审核申请。</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%872.jpg" alt="图片2"></p><p>备注：组织ID获取方式，登陆ABM账号管理站点（<a href="https://business.apple.com/#main/settings/enrollmentinfo" target="_blank" rel="noreferrer">https://business.apple.com/#main/settings/enrollmentinfo</a>）</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%873.jpg" alt="图片3"></p><ol><li>审核通过后，选择发布（如果自动发布则省略此步骤）</li><li>发布后便可以在ABM账号站点中（<a href="https://business.apple.com/#main/b2bapps%EF%BC%89%E4%B8%AD%E7%9C%8B%E5%88%B0%E8%87%AA%E5%8A%A8App%EF%BC%88%E6%B3%A8%E6%84%8F%E5%8F%AF%E8%83%BD%E4%BC%9A%E6%9C%89%E4%B8%80%E5%AE%9A%E5%BB%B6%E8%BF%9F%EF%BC%8C%E4%BD%86%E4%B8%8D%E4%BC%9A%E5%A4%AA%E4%B9%85%EF%BC%89%EF%BC%8C%E5%A6%82%E4%B8%8B%E5%9B%BE" target="_blank" rel="noreferrer">https://business.apple.com/#main/b2bapps）中看到自动App（注意可能会有一定延迟，但不会太久），如下图</a>。</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%874.jpg" alt="图片4"></p><ol><li>选中自定义App后，可以选择具体的分发方式，如下图</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%875.jpg" alt="图片5"></p><ol><li>目前已经验证可以使用兑换码的方式分发。但是需要注意的是每个兑换码都是一次性的，不同的用户需要使用不同的兑换码。下载下来的兑换码文件如下：</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%876.jpg" alt="图片6"></p><ol><li>兑换码的使用方法有一下几种：</li></ol><p>Ø 方式一：可以直接使用safari浏览器打开连接，可以自动安装。</p><p>Ø 方式二：打开 iPhone 中的 App Store 点击右上角的头像, 在账户中选择「兑换礼品卡或代码」，输入兑换码后点击右上角兑换即可。</p><p>Ø 方式三：打开 App Store 在 Today 页面拖到底部，点击兑换按钮，输入兑换码后点击右上角兑换即可。</p><p><strong>【注意】本方案的使用方式是：用户使用浏览器访问微服务，微服务将浏览器重定向访问该链接，会自动跳转到iTunes Store，点击兑换，即可自动安装好app。</strong></p><h3 id="二、数据库及ide兑换码管理页面的配置" tabindex="-1">二、数据库及ide兑换码管理页面的配置 <a class="header-anchor" href="#二、数据库及ide兑换码管理页面的配置" aria-label="Permalink to &quot;二、数据库及ide兑换码管理页面的配置&quot;">​</a></h3><h4 id="_1、数据库" tabindex="-1">1、数据库 <a class="header-anchor" href="#_1、数据库" aria-label="Permalink to &quot;1、数据库&quot;">​</a></h4><p><strong>创建业务实体</strong></p><p>方法一（不建议）：如果想单独使用微服务和业务对象。可直接执行com_t_appversionurl.sql，完成兑换码表创建。但这种方法，ide里面是不认这个表。</p><p>方法二：在ide业务实体里，导入“业务实体-com_t_appversionurl.json”。</p><p><strong>注意: ide直接导入的json无法入到数据库里，通过对照上面json导入的实体，自己手动重新一个个加字段，新建一个com_t_appversionurl</strong></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%877.png" alt="图片7"></p><h4 id="_2、创建业务领域" tabindex="-1">2、创建业务领域 <a class="header-anchor" href="#_2、创建业务领域" aria-label="Permalink to &quot;2、创建业务领域&quot;">​</a></h4><p>在ide业务领域里，导入“业务行为-2021-03-17.json”，完成业务领域的创建。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%878.png" alt="图片8"></p><h4 id="_3、创建业务ui" tabindex="-1">3、创建业务UI <a class="header-anchor" href="#_3、创建业务ui" aria-label="Permalink to &quot;3、创建业务UI&quot;">​</a></h4><p>在业务UI里，导入“业务UI-2021-03-17.json”，完成业务UI的创建。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%879.png" alt="图片9"></p><h4 id="_4、上传导入模板" tabindex="-1">4、上传导入模板 <a class="header-anchor" href="#_4、上传导入模板" aria-label="Permalink to &quot;4、上传导入模板&quot;">​</a></h4><p>在文件管理里，导入“兑换码导入模板.xlsx”，完成导入模板的上传。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8710.png" alt="图片10"></p><p>记得在兑换码管理页面UI里面，检查模板关联正确性。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8711.png" alt="图片11"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8712.png" alt="图片12"></p><h4 id="_5、配置导航、挂功能点" tabindex="-1">5、配置导航、挂功能点 <a class="header-anchor" href="#_5、配置导航、挂功能点" aria-label="Permalink to &quot;5、配置导航、挂功能点&quot;">​</a></h4><p>在功能配置里面先配置好导航，新增节点。再在关联功能里面，新增功能，关联UI。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8713.png" alt="图片13"></p><h4 id="_6、页面菜单权限配置" tabindex="-1">6、页面菜单权限配置 <a class="header-anchor" href="#_6、页面菜单权限配置" aria-label="Permalink to &quot;6、页面菜单权限配置&quot;">​</a></h4><p>用SFA管理员登录，在职位管理里，设置职位权限，勾选配置的页面。完成给该职位的人员页面访问权限的配置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8714.png" alt="图片14"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8715.png" alt="图片15"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8716.png" alt="图片16"></p><p>然后就可以在这里更新、导入兑换码了。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8717.png" alt="图片17"></p><p>导入时，选择覆盖导入代表相同下载地址的数据会覆盖，复原未使用的状态。放弃导入，指的检测到与库里数据相同的数据跳过，不处理。</p><p><strong>注意：</strong></p><p>​ <strong>本方案下，用户需要事先在APP Stroe下载好iTunes Store。用户初次使用，不会操作，会浪费很多兑换码（就是从我们这拿了兑换码链接，却没有安装软件，兑换码不算失效，但数据库里已经标为失效，用过了），需提前做好安装操作培训。</strong></p><p>​ <strong>可以让客户去查下ABM账户下哪些兑换码还是有效状态，通过这个页面，导入，将浪费的兑换码更新为有效状态，继续用。</strong></p><h3 id="三、jar包和静态资源部署" tabindex="-1">三、jar包和静态资源部署 <a class="header-anchor" href="#三、jar包和静态资源部署" aria-label="Permalink to &quot;三、jar包和静态资源部署&quot;">​</a></h3><h4 id="_1、上传" tabindex="-1">1、上传 <a class="header-anchor" href="#_1、上传" aria-label="Permalink to &quot;1、上传&quot;">​</a></h4><p>将“link-appstore-Install.zip”上传到服务器目录下，解压缩，进入目录；</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">unzip link-appstore-Install.zip</span></span>
<span class="line"><span style="color:#e1e4e8;">cd link-appstore-Install</span></span>
<span class="line"><span style="color:#e1e4e8;">cd link-appstore</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">unzip link-appstore-Install.zip</span></span>
<span class="line"><span style="color:#24292e;">cd link-appstore-Install</span></span>
<span class="line"><span style="color:#24292e;">cd link-appstore</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2、修改配置" tabindex="-1">2、修改配置 <a class="header-anchor" href="#_2、修改配置" aria-label="Permalink to &quot;2、修改配置&quot;">​</a></h4><h5 id="_1-bootstrap-yml" tabindex="-1">1) bootstrap.yml <a class="header-anchor" href="#_1-bootstrap-yml" aria-label="Permalink to &quot;1) bootstrap.yml&quot;">​</a></h5><p>可以看到这几个文件：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8718.png" alt="图片18"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vi bootstrap.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vi bootstrap.yml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8719.png" alt="图片19"></p><p>修改服务器所处环境（dev/test/prod），以及修改nacos所在的ip、端口号。</p><h5 id="_2-nacos" tabindex="-1">2)nacos <a class="header-anchor" href="#_2-nacos" aria-label="Permalink to &quot;2)nacos&quot;">​</a></h5><p>文件夹中，“请将这段配置复制到nacos里.txt”里的内容就是nacos里需要添加的配置内容。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8720.png" alt="图片20"></p><p><strong>修改里面的安卓下载地址androidUrl。</strong></p><p><strong>修改数据库账号、密码和url：username、password、jdbc-url。</strong></p><p>登录nacos，添加新配置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8721.png" alt="图片21"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8722.png" alt="图片22"></p><p>将修改后的配置复制进“配置内容”。</p><p>Data ID:根据开发、测试、生产环境，分别填：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">link-appstore-dev.yml</span></span>
<span class="line"><span style="color:#e1e4e8;">link-appstore-test.yml</span></span>
<span class="line"><span style="color:#e1e4e8;">link-appstore-prod.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">link-appstore-dev.yml</span></span>
<span class="line"><span style="color:#24292e;">link-appstore-test.yml</span></span>
<span class="line"><span style="color:#24292e;">link-appstore-prod.yml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>点发布，完成nacos配置。</p><h5 id="_3-nginx" tabindex="-1">3）nginx <a class="header-anchor" href="#_3-nginx" aria-label="Permalink to &quot;3）nginx&quot;">​</a></h5><p>修改nginx配置文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cd /usr/local/openresty/nginx/conf/</span></span>
<span class="line"><span style="color:#e1e4e8;">vi nginx.conf</span></span>
<span class="line"><span style="color:#e1e4e8;">#在nginx.conf里，添加下面的配置</span></span>
<span class="line"><span style="color:#e1e4e8;">server {</span></span>
<span class="line"><span style="color:#e1e4e8;">                listen 7000;</span></span>
<span class="line"><span style="color:#e1e4e8;">                location /linkappstore/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    proxy_pass http://127.0.0.1:10060/;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cd /usr/local/openresty/nginx/conf/</span></span>
<span class="line"><span style="color:#24292e;">vi nginx.conf</span></span>
<span class="line"><span style="color:#24292e;">#在nginx.conf里，添加下面的配置</span></span>
<span class="line"><span style="color:#24292e;">server {</span></span>
<span class="line"><span style="color:#24292e;">                listen 7000;</span></span>
<span class="line"><span style="color:#24292e;">                location /linkappstore/ {</span></span>
<span class="line"><span style="color:#24292e;">                    proxy_pass http://127.0.0.1:10060/;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="_3、启动jar包" tabindex="-1">3、启动jar包 <a class="header-anchor" href="#_3、启动jar包" aria-label="Permalink to &quot;3、启动jar包&quot;">​</a></h4><p>回到服务器文件夹下，输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh deploy.sh start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh deploy.sh start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>实现启动jar包。</p><p>另：sh deploy.sh restart对应重启，sh deploy.sh stop对应停止jar包。</p><p>这台服务器的域名拼上/linkappstore/linkappstore/download，就是下载页面访问地址了。</p><p>如：这台服务器域名为pmmdev-interface.wilmar.cn，下载页面访问地址为：</p><p><a href="https://pmm.wilmar.cn/linkappstore/linkappstore/download" target="_blank" rel="noreferrer">https://pmm.wilmar.cn/linkappstore/linkappstore/download</a></p><p><strong>访问前需先下载好iTunes Store</strong></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8723.png" alt="图片23"></p><h4 id="_4、自定义下载页面" tabindex="-1">4、自定义下载页面 <a class="header-anchor" href="#_4、自定义下载页面" aria-label="Permalink to &quot;4、自定义下载页面&quot;">​</a></h4><h5 id="_1-图片" tabindex="-1">1）图片 <a class="header-anchor" href="#_1-图片" aria-label="Permalink to &quot;1）图片&quot;">​</a></h5><p>文件夹下 static/images文件夹下放置的是页面图片。</p><p>如果想要替换，将新图片命名成一样的直接替换，重启jar包即可替换。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8724.png" alt="图片24"></p><h5 id="_2-页面标题" tabindex="-1">2）页面标题 <a class="header-anchor" href="#_2-页面标题" aria-label="Permalink to &quot;2）页面标题&quot;">​</a></h5><p>文件夹下 templates/文件夹下放置的是下载页面html。</p><p>如果想要替换页面标题（现在的是“益海嘉里”），修改下面这个地方即可：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cd templates</span></span>
<span class="line"><span style="color:#e1e4e8;">vi downloadpro.html</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cd templates</span></span>
<span class="line"><span style="color:#24292e;">vi downloadpro.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8725.png" alt="图片25"></p><h5 id="_3-页面字段及链接" tabindex="-1">3）页面字段及链接 <a class="header-anchor" href="#_3-页面字段及链接" aria-label="Permalink to &quot;3）页面字段及链接&quot;">​</a></h5><p>打开nacos修改配置，如下图对应关系：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91-%E5%9B%BE%E7%89%8726.png" alt="图片26"></p><p>上图的，androidName、androidDesc、iosName、iosDesc分别对应安卓、ios的版本和版本描述。androidUrl是安卓下载地址。</p><p>另，iosUrlSuffix不用修改，是兑换码获取路径。</p><p>ios下载链接是自动拼的。如果域名特殊，ios下载按钮点击报错，可以修改iosUrl，自己填写完整的获取兑换码的访问链接。</p><p>openTest设置为on可打开测试接口。</p><h3 id="组件包下载-百度网盘-也可到svn获取" tabindex="-1">组件包下载（百度网盘，也可到SVN获取） <a class="header-anchor" href="#组件包下载-百度网盘-也可到svn获取" aria-label="Permalink to &quot;组件包下载（百度网盘，也可到SVN获取）&quot;">​</a></h3><p>ABM分发-链接：<a href="https://pan.baidu.com/s/1SciiUL7cS18Q8ssIFmfb6Q" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1SciiUL7cS18Q8ssIFmfb6Q</a><br> 提取码：g4bs<br> 直接下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC001-FC001-%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91.zip" title="COM-BC001-FC001 苹果端ABM分发" target="_blank" rel="noreferrer">COM-BC001-FC001 苹果端ABM分发</a><br> 视频讲解：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%91%A8%E6%B6%9B%E3%80%8A%E8%8B%B9%E6%9E%9C%E7%AB%AFABM%E5%88%86%E5%8F%91%E3%80%8B.zip" title="周涛《苹果端ABM分发》" target="_blank" rel="noreferrer">周涛《苹果端ABM分发》</a></p>`,214),o=[t];function r(l,i,c,E,h,d){return p(),s("div",null,o)}const A=a(e,[["render",r]]);export{g as __pageData,A as default};
