import{_ as a,o as t,c as o,Q as r}from"./chunks/framework.b1e56e49.js";const B=JSON.parse('{"title":"常见的操作步骤","description":"","frontmatter":{"title":"常见的操作步骤","date":"2022-08-24T05:56:28.000Z"},"headers":[],"relativePath":"doc/wpdoc/常见的操作步骤.md","filePath":"doc/wpdoc/常见的操作步骤.md"}'),n={name:"doc/wpdoc/常见的操作步骤.md"},s=r('<p>本文主要针对iPaaS使用场景中的常见操作步骤进行演示与说明。<em>在阅读本文之前，请先阅读<a href="http://apaas.wxchina.com:8881/2022/08/19/ipaas%E5%B8%B8%E8%A7%81%E7%9A%84%E5%90%8D%E8%AF%8D%E6%A6%82%E5%BF%B5/" title="iPaaS常见名词概念" target="_blank" rel="noreferrer">iPaaS常见名词概念</a>，有助于理解。</em></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AAA.jpg" alt=""></p><h2 id="第一步-1-账号类型的配置—-2-添加资源—-3-连接器的配置" tabindex="-1"><strong>第一步：1.账号类型的配置—&gt; 2.添加资源—&gt; 3.连接器的配置</strong> <a class="header-anchor" href="#第一步-1-账号类型的配置—-2-添加资源—-3-连接器的配置" aria-label="Permalink to &quot;**第一步：1.账号类型的配置—&gt; 2.添加资源—&gt; 3.连接器的配置**&quot;">​</a></h2><h3 id="_1-账号类型的配置" tabindex="-1">1. 账号类型的配置 <a class="header-anchor" href="#_1-账号类型的配置" aria-label="Permalink to &quot;1\\. 账号类型的配置&quot;">​</a></h3><p>账号类型指某种应用的账号所需要的信息，即<strong>某种应用系统的账号类型</strong>。如：微信账号，玄武AI账号等。</p><p>**第1步：**点击“<strong>账号类型</strong>”，切换至账号类型列表界面，如下图所示，账号列表界面支持以下功能：</p><ol><li>此处，支持根据账号类型的名称，标识，以及是否私有来搜索列表。</li><li>此处，可以对账号类型进行启用/停用/删除，停用时会进行必要的关联检测。</li><li>此处，支持新增账号类型。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B%E5%88%97%E8%A1%A8-1.png" alt=""></li></ol><p>**第2步：**点击“<strong>新增账号类型</strong>”，进入新建账号类型的配置界面。</p><p><strong>第3步</strong>：在新增账号的配置界面，如下图所示，<strong>按规则设置</strong>账号类型的详细信息。</p><ol><li>输入账号类型名称，使用者可自定义填写。</li><li>输入账号类型标识，是用于<strong>唯一</strong>标识一个账号类型，由使用者<strong>手动输入</strong>。<br> （此处的账号类型标识与插件相关，在上传插件时，<strong>生成链接资源时也是通过插件配置文件中的该标识来进行关联绑定的，自动根据账号类型标识来匹配绑定的。</strong> ）</li><li>在此处，设置配置该类型账号所需要的字段，需要根据具体应用的需求来进行定义。</li><li>点击&quot;<strong>保存</strong>&quot;，返回账号类型列表界面，显示已成功添加了账号类型管理。账号类型配置完成。新建立的账号类型需绑定资源，需要<strong>2.添加资源</strong>，完成绑定。<br> (<strong>一个账号类型一旦绑定了一个链接资源就不能再更改。</strong>)<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B%E8%AE%BE%E7%BD%AE.png" alt=""></li></ol><h3 id="_2-添加资源" tabindex="-1">2. 添加资源 <a class="header-anchor" href="#_2-添加资源" aria-label="Permalink to &quot;2\\. 添加资源&quot;">​</a></h3><p>资源是实际执行的代码，如果需要系统种尚未提供的功能，则需要先添加对应资源；可以通过上传jar插件的方式来添加资源，具体的插件开发指南请参看<a href="http://apaas.wxchina.com:8881/2022/08/02/%E4%B8%9D%E8%B7%AFipaas-%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/" title="此处" target="_blank" rel="noreferrer">此处</a></p><p>可通过玄武丝路iPaaS平台的资源页面，进行搜索，查看用户所需资源是否存在，若存在，可直接进行<strong>3.连接器的配置</strong>，若资源不存在，则需要添加资源。</p><p><strong>添加资源的操作步骤如下：</strong></p><h4 id="第1步-准备工作" tabindex="-1"><strong>第1步：准备工作</strong> <a class="header-anchor" href="#第1步-准备工作" aria-label="Permalink to &quot;**第1步：准备工作**&quot;">​</a></h4><ol><li>新增账号类型(资源包中的配置文件需要调用账号类型，所以需要先新增账号类型)，参看<strong>1.账号类型的配置</strong></li><li>插件开发，具体开发规则参看<a href="http://apaas.wxchina.com:8881/2022/08/02/%E4%B8%9D%E8%B7%AFipaas-%E6%8F%92%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/" title="此处" target="_blank" rel="noreferrer">此处</a></li><li>新增资源包</li></ol><h4 id="第2步-上传插件" tabindex="-1"><strong>第2步：上传插件</strong> <a class="header-anchor" href="#第2步-上传插件" aria-label="Permalink to &quot;**第2步：上传插件**&quot;">​</a></h4><p>需要添加全新的插件时就需要新建资源包来放置插件。操作步骤如下：</p><ol><li><p>在资源包列表界面，点击“<strong>添加资源</strong>”，进入资源包的新建界面，如下图所示，在此界面<strong>手动输入资源包名称（不可重复）</strong>，资源包说明（可不填），点击“<strong>保存</strong>”，进入插件上传界面。（PS：只需要将插件（jar包）上传到指定的资源包中，就会自动检测并生成系统可用的资源。插件上传时需要注意里面的配置信息，如插件版本，系统将会根据插件的版本来决定是更新还是添加资源包版本。）</p></li><li><p>在插件上传界面，将插件拖放至指定位置，或浏览文件选中，点击“<strong>确定</strong>”，进入资源包详情界面，如下图所示。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%B7%BB%E5%8A%A0%E8%B5%84%E6%BA%90-1.png" alt=""></p></li><li><p>在资源包详情界面，系统会根据资源包自动生成显示内容，详情页面介绍如下，具体如图所示：</p><p>1） 显示了资源包的基本信息，名称和备注</p><p>2） 这里是资源包内所包含的所有资源包版本</p><p>3） 显示指定版本的更新说明</p><p>4） 显示指定版本中包含的资源的基本信息</p><p>5） 点击后支持修改资源包的基本信息</p><p>6） 支持删除指定资源包版本（会校验是否有引用关系），当不存在任何版本时，可删除资源包。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%B5%84%E6%BA%90%E5%8C%85%E5%88%97%E8%A1%A8-1.png" alt=""></p></li></ol><h4 id="第3步-最后校验" tabindex="-1">第3步：最后校验 <a class="header-anchor" href="#第3步-最后校验" aria-label="Permalink to &quot;第3步：最后校验&quot;">​</a></h4><p><strong>校验成功</strong>，生成资源，生成的资源可在创建连接器的过程中选择并应用。</p><h3 id="_3-连接器的配置" tabindex="-1">3. 连接器的配置 <a class="header-anchor" href="#_3-连接器的配置" aria-label="Permalink to &quot;3\\. 连接器的配置&quot;">​</a></h3><p>连接器及其内部的行为是提供给集成流配置使用的，如果是新增的资源，就需要新建对应的连接器，将资源包装后提供给最终的集成流使用。<br> 可通过玄武丝路iPaaS平台的连接器页面，进行搜索，查看用户所需连接器<strong>是否存在，若存在，可直接进行第二步；若连接器不存在，则需要配置连接器。</strong></p><h4 id="第1步-添加连接器" tabindex="-1">第1步：添加连接器 <a class="header-anchor" href="#第1步-添加连接器" aria-label="Permalink to &quot;第1步：添加连接器&quot;">​</a></h4><p>在平台首页，点击“<strong>连接器</strong>”在连接器列表界面，点击“<strong>添加连接器</strong>”，进入连接器基本信息界面。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9E%E6%8E%A5%E5%99%A8-2.png" alt=""></p><h4 id="第2步-设置连接器基本信息" tabindex="-1">第2步：设置连接器基本信息 <a class="header-anchor" href="#第2步-设置连接器基本信息" aria-label="Permalink to &quot;第2步：设置连接器基本信息&quot;">​</a></h4><p>在新进入的界面，如下图所示，分别输入连接器的名称、主题、描述，和选择图标等信息，信息填写规则如下，点击“<strong>确定</strong>”，进入连接器详情界面。</p><ol><li>连接器名称，必须全局唯一。</li><li>主题，用于当连接器中有触发行为时，<strong>生成外部调用链接的，该字段只能保存一次，一旦确定就不再支持更改。</strong><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%BF%9E%E6%8E%A5%E5%99%A8%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF-1.png" alt=""></li></ol><h4 id="第3步-添加连接器行为" tabindex="-1">第3步：添加连接器行为 <a class="header-anchor" href="#第3步-添加连接器行为" aria-label="Permalink to &quot;第3步：添加连接器行为&quot;">​</a></h4><p>在连接器详情界面，可以修改连接器基本信息，可以添加连接器行为。如下图所示，点击“<strong>添加行为</strong>”，进入连接器新建行为界面。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%B7%BB%E5%8A%A0%E8%A1%8C%E4%B8%BA.png" alt=""></p><h4 id="第4步-设置连接器行为" tabindex="-1">第4步：设置连接器行为 <a class="header-anchor" href="#第4步-设置连接器行为" aria-label="Permalink to &quot;第4步：设置连接器行为&quot;">​</a></h4><p>在新建行为的界面，使用者可以进行<strong>设定行为名称、选择行为类型、关联资源、选择关联资源的版本、输入连接器行为的基本描述、设置入参、出参和异常显示</strong>；设置完成后，点击“<strong>保存</strong>”。连接器行为配置的具体操作步骤，请参考此处。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A1%8C%E4%B8%BA%E9%85%8D%E7%BD%AE%E7%95%8C%E9%9D%A2.png" alt=""></p><h2 id="第二步-1-应用账号的配置—-2-集成流的配置" tabindex="-1">第二步：1.应用账号的配置—&gt; 2.集成流的配置 <a class="header-anchor" href="#第二步-1-应用账号的配置—-2-集成流的配置" aria-label="Permalink to &quot;第二步：1.应用账号的配置—&gt; 2.集成流的配置&quot;">​</a></h2><h3 id="_1-应用账号的配置" tabindex="-1">1. 应用账号的配置 <a class="header-anchor" href="#_1-应用账号的配置" aria-label="Permalink to &quot;1\\. 应用账号的配置&quot;">​</a></h3><h4 id="第1步-添加应用账号" tabindex="-1">第1步：添加应用账号 <a class="header-anchor" href="#第1步-添加应用账号" aria-label="Permalink to &quot;第1步：添加应用账号&quot;">​</a></h4><p>应用账号就是实际在集成流中，用于登录某个应用，执行相应行为的账号，如公司的企业微信的企业应用账号，或者调用高德地图接口的账号。</p><p>不同的应用会需要不同的登录信息，这些信息都是在账号类型中进行定义。因此添加应用账号前，需要先确保有对应的账号类型的定义。</p><p>点击“<strong>应用账号</strong>”，切换至添加应用账号列表界面，如下图所示，应用账号列表界面支持以下功能：</p><ol><li>此处，支持使用应用账号的名称来进行列表搜索</li><li>应用账号列表显示账号的基本信息，点击名称可以进入对应账号详情进行查看和修改（不能修改账号类型）</li><li>此处是对账号的一些基本操作，目前支持删除，点击“...”，出现删除操作界面。</li><li>此处，支持添加新的应用账号。</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E5%88%97%E8%A1%A8.png" alt=""></p><h4 id="第2步-配置应用账号" tabindex="-1">第2步：配置应用账号 <a class="header-anchor" href="#第2步-配置应用账号" aria-label="Permalink to &quot;第2步：配置应用账号&quot;">​</a></h4><ol><li><p>在应用账号列表界面，点击“<strong>添加账号</strong>”，弹出选择新建账号的类型界面，如下图所示，可以从系统中的账号类型列表中选择一个作为账号信息填写的模板。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%80%89%E6%8B%A9%E8%B4%A6%E5%8F%B7%E7%B1%BB%E5%9E%8B.png" alt=""></p></li><li><p>点击某一个“<strong>账号的类型</strong>”，进入动态生成的属性填写区域，填写规则如下,具体界面如下所示。</p><p>**规则1：**账号别名是一个通用的应用账号字段，用于直观的描述和标识一个账号。</p><p>**规则2：**接下来按照应用账号的要求填入的信息，不同的账号类型所需填写的内容也不同，用户可以依据业务需求进行选择。<br> （例如：选择数据库的账号类型，其应用账号需要填写，账号别名、数据库地址等信息；而选择企业微信的账户类型，其应用账号，需要填写账号别名、企业ID、应用密钥等信息。</p><p>**规则3：**填写完成后，点击&quot;<strong>确定</strong>&quot;，就可以保存应用账号了 。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BA%94%E7%94%A8%E8%B4%A6%E5%8F%B7%E5%A1%AB%E5%86%99.png" alt=""></p></li></ol><h3 id="_2-集成流的配置" tabindex="-1">2. 集成流的配置 <a class="header-anchor" href="#_2-集成流的配置" aria-label="Permalink to &quot;2\\. 集成流的配置&quot;">​</a></h3><p>集成流，是指由一个触发行为和多个执行行为和逻辑组件构成的，能完成特定业务处理流程行为集合。即在玄武丝路iPaaS平台上，用户配置的集成流，能按照用户配置的行为流程，处理特定业务。例如：翻拍识别、铺货拍照SKU识别、定时循环集成流等。</p><p>**第1步：**在平台首页，点击&quot;<strong>集成流</strong>&quot;，切换至集成流列表界面，具体界面如下图所示，集成流列表界面支持以下功能：</p><ol><li>此处，支持通过集成流名称进行模糊<strong>搜索</strong>。</li><li>此处，支持对够选的集成流进行<strong>导出</strong>。导出时还会同时导出必要的关联数据（如应用账号，账号类型，资源，连接器等）。同时支持将导出的数据进行导入，导入时也会同步导入必要的关联数据。</li><li>此处，集成流列表会显示集成流的<strong>基本信息</strong>。</li><li>此处，支持对集成流进行<strong>启用</strong>或<strong>停用</strong>、<strong>删除</strong>、<strong>复制</strong>和<strong>查看日志</strong>操作。点击“<strong>...</strong>”，出现集成流的停用、复制、删除、日志操作界面。</li><li>此处，支持新增集成流。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E5%88%97%E8%A1%A8%E7%95%8C%E9%9D%A2png.png" alt=""></li></ol><p><strong>第2步</strong>：新增集成流</p><ol><li>在集成流列表界面，点击“<strong>新增集成流</strong>”，进入新建集成流的名称的填写界面，具体如下图所示，填写完毕后，点击“<strong>新建</strong>”，进入集成流的配置界面。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E5%90%8D%E7%A7%B0.png" alt=""></li><li>设置集成流基本信息<br> 集成流的配置界面支持以下功能，具体如下图所示。<br> 1） 集成流名称，支持直接此处修改，点击-集成流名称，出现文字输入框，可对集成流名称进行修改。<br> 2） 支持修改集成流的基本属性（参看下方说明），以及查看该集成流的执行日志。<br> 3） 保存操作只保存配置协议；发布操作会先保存，然后自动新增版本发布，并将该版本设置为启用版本。<br> 4） 支持缩放画布 动新增版本发布，并将该版本设置为启用版本。<br> 5） 支持查看当前的配置协议，主要是用来方便开发查找错误。点击-集成流节点（如点击-玄虚AI触发器），可以查看和编辑对应的属性。<br> 6） 支持添加节点按钮，点击后可以添加集成流节点，鼠标移动到节点范围，即可进行复制、或删除节点的行为。<br> 7） 点击此处，发布集成流。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%9B%86%E6%88%90%E6%B5%81%E9%85%8D%E7%BD%AE%E7%95%8C%E9%9D%A2.png" alt=""></li></ol><p><strong>第3步</strong>：配置集成流行为</p><p><strong>1.设置触发行为</strong><br> 1） 一个集成流有且只有一个触发节点，触发行为有两种类型，一种是通过调用外部系统的接口触发，一种是平台内部生成接口触发。点击集成流的第一个节点“<strong>设置触发行为</strong>”，在此界面中，“<strong>系统组件</strong>”下的所有组件属于内部生成的接口，“<strong>连接器</strong>”列表下的所有连接器，属于外部调用接口。<br> 2） 选择一个连接器或者逻辑组件，点击，出现接器或者组件节点，点击节点，进入配置界面，如下图所示。<br> 3） <strong>系统组件的具体配置规则请参考此处</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A7%A6%E5%8F%91%E8%A1%8C%E4%B8%BA-1.png" alt=""><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E8%A7%A6%E5%8F%91%E8%A1%8C%E4%B8%BA.gif" alt=""></p><p><strong>2.设置执行行为</strong><br> 1） **执行行为是：**指连接器中所包含的、能完成某些业务任务的行为。如翻拍识别，SKU识别等。执行行为用于执行一个应用的接口，一个连接器会有多个执行行为，即完成某项或多项业务任务的行为。例如蒙牛的冰品识别执行行为。**逻辑组件是：**指由玄武丝路iPaaS平台提供的功能组件，完成特定的功能和任务。如条件，循环等。<br> 2） 选择一个连接器或者逻辑组件，点击，出现接器或者组件节点，点击节点，进入配置界面，如下图所示。<br> 3） <strong>系统组件的具体配置规则请参考此处</strong><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%A7%E8%A1%8C%E8%A1%8C%E4%B8%BA.gif" alt=""></p>',51),l=[s];function p(i,e,g,c,h,E){return t(),o("div",null,l)}const A=a(n,[["render",p]]);export{B as __pageData,A as default};
