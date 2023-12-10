import{_ as s,o as n,c as a,R as p}from"./chunks/framework.S1SDgkSw.js";const q=JSON.parse('{"title":"AI离线识别","description":"","frontmatter":{"title":"AI离线识别","date":"2021-07-19T17:46:12.000Z"},"headers":[],"relativePath":"doc/wpdoc/AI离线识别.md","filePath":"doc/wpdoc/AI离线识别.md"}'),e={name:"doc/wpdoc/AI离线识别.md"},t=p(`<h1 id="ai离线识别-实现方案" tabindex="-1">AI离线识别 实现方案 <a class="header-anchor" href="#ai离线识别-实现方案" aria-label="Permalink to &quot;AI离线识别 实现方案&quot;">​</a></h1><p>使用过程中，若有问题请联系：行业组件部-王娟</p><h3 id="一、适用场景" tabindex="-1">一、适用场景 <a class="header-anchor" href="#一、适用场景" aria-label="Permalink to &quot;一、适用场景&quot;">​</a></h3><p>有涉及到AI拍照的项目几乎都适用。当拜访门店在负一楼等网络较差的地段，业务员进行AI拍照可能就会无法立即进行识别，这时就需要AI离线识别了。<br> AI离线识别，其实应该说是AI延迟识别，网络不好时，图片会先保存到本地，当网络好时，拍照记录会通过离线队列生成到数据库，然后我们就需要找到未识别的记录，然后通过后台调度去调用AI对应的识别结果，以得到对应的结果。</p><h3 id="二、基础知识" tabindex="-1">二、基础知识 <a class="header-anchor" href="#二、基础知识" aria-label="Permalink to &quot;二、基础知识&quot;">​</a></h3><h4 id="_1、常见的识别功能" tabindex="-1">1、常见的识别功能 <a class="header-anchor" href="#_1、常见的识别功能" aria-label="Permalink to &quot;1、常见的识别功能&quot;">​</a></h4><p>•翻拍检测（注：对着照片拍就是翻拍的一种）<br> •产品（主产品、竞品）SKU识别<br> •拼接（多张图片拼接一张）</p><h4 id="_2、识别流程" tabindex="-1">2、识别流程 <a class="header-anchor" href="#_2、识别流程" aria-label="Permalink to &quot;2、识别流程&quot;">​</a></h4><p>（假设上面三种场景都需要）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>翻拍+SKU识别</span></span>
<span class="line"><span> •拍照后，先进行翻拍检测：</span></span>
<span class="line"><span>   –翻拍：提醒照片翻拍，是否保留？</span></span>
<span class="line"><span>     •不保留：删除照片（重新拍照）</span></span>
<span class="line"><span>     •保留：保留照片，进行SKU</span></span>
<span class="line"><span>   –非翻拍，进行SKU识别</span></span>
<span class="line"><span>拼接+翻拍+SKU识别</span></span>
<span class="line"><span> •拼接拍照</span></span>
<span class="line"><span>   –检测翻拍</span></span>
<span class="line"><span>     •翻拍：提醒照片翻拍，是否保留？</span></span>
<span class="line"><span>         –不保留：删除照片（重新拍照）</span></span>
<span class="line"><span>         –保留：保留照片，进行SKU识别</span></span>
<span class="line"><span>    •非翻拍，拼接照片</span></span>
<span class="line"><span>         –拼接失败</span></span>
<span class="line"><span>         –拼接成功</span></span>
<span class="line"><span>           •进行SKU识别</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="_3、非正常情况" tabindex="-1">3、非正常情况 <a class="header-anchor" href="#_3、非正常情况" aria-label="Permalink to &quot;3、非正常情况&quot;">​</a></h4><p>弱网或者无网的情况，可能会出现问题。会导致图片无SKU信息，点击图片时，可能会点不开，提示“图片正在识别，请稍候再试”；或者点开后没有具体的SKU信息。</p><h5 id="_3-1-图片上传失败" tabindex="-1">3.1 图片上传失败 <a class="header-anchor" href="#_3-1-图片上传失败" aria-label="Permalink to &quot;3.1 图片上传失败&quot;">​</a></h5><p>单拍会提醒：“图片上传失败，是否重试（不重试则离线提交）”，下面是取消和确定按钮。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%871.png" alt="图片1"><br> 拼接会提醒：“获取拼接图片失败，请重试（不重试则离线提交）”，下面是取消和确定按钮。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%872.png" alt="图片2"><br> 如果中途失败的话，也会提示类似信息：“XXX，是否重试（不重试则离线提交）”，下面是取消和确定按钮。<br> •确定：（使用者自认为网络好）尝试重新上传<br> •取消：离线提交</p><h5 id="_3-2-数据返回不及时" tabindex="-1">3.2 数据返回不及时 <a class="header-anchor" href="#_3-2-数据返回不及时" aria-label="Permalink to &quot;3.2 数据返回不及时&quot;">​</a></h5><p>数据库里面存的AI图片是json格式，而其中的一个重要的属性是detecResult，里面存放的是sku数据，识别后正常情况下应该是要有的。<br> 用AI拍照控件拍照后，进行AI识别的流程（个人理解，有网时）：<br> •a. 将图片上传到OSS云空间，<br> •b. AI服务器对图片进行操作（拼接、翻拍检测、sku识别），<br> •c. 返回对应的结果到图片的json中的对应的属性中。<br> （这些内容可能不是很明显，但是还是可以从控件中看出现，图片框最下面会显示一些标志，比如：正在拼接、拼接完成正在识别、识别完成等。）<br> 但是当网络不好时，数据的传递可能会出现问题，比如b步骤后，没有及时将返回结果写到对应的json属性中，它就会一直显示为识别。这是就需要后台进行处理了（AI离线识别）。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%873.png" alt="图片3"><br> 注意：虽然很多时候我们都会将AI拍照控件设置为必填，但是只要是拍了照，它即认为是已经填了内容的，而不管关键的json的属性是否有值。</p><h3 id="三、ai项目开发流程" tabindex="-1">三、AI项目开发流程 <a class="header-anchor" href="#三、ai项目开发流程" aria-label="Permalink to &quot;三、AI项目开发流程&quot;">​</a></h3><h4 id="_1、明确需求-设计数据库表结构" tabindex="-1">1、明确需求，设计数据库表结构 <a class="header-anchor" href="#_1、明确需求-设计数据库表结构" aria-label="Permalink to &quot;1、明确需求，设计数据库表结构&quot;">​</a></h4><p>注意：需要查看config表里面是否有AIconfig记录，即对于的AI 的配置信息，比如这个项目的AI数据库的信息（账号、密码、租户名等）。<br> 这个一般会有，如果没有的话，让AI相关的同事帮忙配置一下。</p><h5 id="图片类型" tabindex="-1">图片类型 <a class="header-anchor" href="#图片类型" aria-label="Permalink to &quot;图片类型&quot;">​</a></h5><p>在IDE里面新建实体，直接使用图片类型来存储图片，其实数据库里面使用的是 varchar ，没有进行长度限制，因此最大长度是1G（详见：<a href="https://www.postgresql.org/docs/13/datatype-character.html" target="_blank" rel="noreferrer">https://www.postgresql.org/docs/13/datatype-character.html</a>）<br> 即10485760个字符。（这个长度应该够了吧？！加入1张照片内容是1万字符，那么可以拍1000张，然而你真的需要拍这么多照片吗？）<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%874.png" alt="图片4"></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%875.png" alt="图片5"></p><h4 id="_2、配置ai控件" tabindex="-1">2、配置AI控件 <a class="header-anchor" href="#_2、配置ai控件" aria-label="Permalink to &quot;2、配置AI控件&quot;">​</a></h4><p>•选择哪种AI控件：普通aiphoto？拼接aisplicephoto？<br> •配置一些关键的属性（开启翻拍校验、SKU识别等</p><h4 id="_3、编写提交的离线脚本" tabindex="-1">3、编写提交的离线脚本 <a class="header-anchor" href="#_3、编写提交的离线脚本" aria-label="Permalink to &quot;3、编写提交的离线脚本&quot;">​</a></h4><p>保证没网的时候能够进行离线提交（先提交到队列中，等网络好的时候会自动提交）。</p><h4 id="_4、编写离线识别调度" tabindex="-1">4、编写离线识别调度 <a class="header-anchor" href="#_4、编写离线识别调度" aria-label="Permalink to &quot;4、编写离线识别调度&quot;">​</a></h4><p>保证未识别完成or未识别的图片能够有sku数据。</p><h3 id="四、ai相关表" tabindex="-1">四、AI相关表 <a class="header-anchor" href="#四、ai相关表" aria-label="Permalink to &quot;四、AI相关表&quot;">​</a></h3><p>是AI数据库通过数据同步对接过来的，数据可能有一定的延迟。<br> 如果涉及到识别后的一些业务处理的话，我们就必须保证实施数据库有对应的AI的数据（可能会因为各种原因没有对接过来），因此我们需要对一些表结构有一定了解（注：最后面的部分字段可能是好来新增的）。<br> AI相关表的表名都以 ait 开头（当然不同可能也有一些定制化的表）。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%876.png" alt="图片6"></p><h4 id="ai-task识别任务表" tabindex="-1">ai_task识别任务表 <a class="header-anchor" href="#ai-task识别任务表" aria-label="Permalink to &quot;ai\\_task识别任务表&quot;">​</a></h4><p>表结构说明：</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>platcreatetime</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>平台固定字段，记录创建时间</td></tr><tr><td>2</td><td>platupdatetime</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>平台固定字段，记录修改时间</td></tr><tr><td>3</td><td>platcreateop</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>平台固定字段，创建人id</td></tr><tr><td>4</td><td>platupdateop</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>平台固定字段，修改人id</td></tr><tr><td>5</td><td>platstatus</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td>平台固定字段，记录状态 1. 正常 2. 逻辑删除 3. 异常数据</td></tr><tr><td>6</td><td>task_id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>任务Id</td></tr><tr><td>7</td><td>tenant_id</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>租户Id</td></tr><tr><td>8</td><td>original_imgurl</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>请求信息中的图片URL</td></tr><tr><td>9</td><td>handle_imgurl</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>处理后图片的新URL</td></tr><tr><td>10</td><td>create_time</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>创建时间</td></tr><tr><td>11</td><td>update_time</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>更新时间</td></tr><tr><td>12</td><td>handled_status</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>10010代表未处理，10020代表已经发送到队列，10030代表以及处理成功，10040代表处理失败</td></tr><tr><td>13</td><td>biz_from</td><td>varchar</td><td>-1</td><td>204</td><td>f</td><td>业务来源</td></tr><tr><td>14</td><td>biz_type</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td>1待定， 2待定，3货架 ，4冰柜 ，5水堆</td></tr><tr><td>15</td><td>request_mode</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td>1同步 2异步</td></tr><tr><td>16</td><td>parameters</td><td>varchar</td><td>-1</td><td>204</td><td>f</td><td>扩展字段</td></tr><tr><td>17</td><td>display_agreement</td><td>varchar</td><td>-1</td><td>204</td><td>f</td><td>陈列协议</td></tr><tr><td>18</td><td>batch_id</td><td>varchar</td><td>-1</td><td>204</td><td>f</td><td>batch_id</td></tr><tr><td>19</td><td>identity_id</td><td>varchar</td><td>-1</td><td>204</td><td>f</td><td>identity_id</td></tr><tr><td>20</td><td>store_info</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>终端信息</td></tr><tr><td>21</td><td>if_deal</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td></td></tr><tr><td>22</td><td>task_type</td><td>varchar</td><td>-1</td><td>204</td><td>f</td><td></td></tr><tr><td>23</td><td>expire_time</td><td>timestamp</td><td>8</td><td>-1</td><td>f</td><td></td></tr></tbody></table><p>查询数据：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%877.png" alt="图片7"></p><h4 id="aitanalysis-data识别结果表" tabindex="-1">aitanalysis_data识别结果表 <a class="header-anchor" href="#aitanalysis-data识别结果表" aria-label="Permalink to &quot;aitanalysis\\_data识别结果表&quot;">​</a></h4><p>表结构说明：</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>platcreatetime</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>平台固定字段，记录创建时间</td></tr><tr><td>2</td><td>platupdatetime</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>平台固定字段，记录修改时间</td></tr><tr><td>3</td><td>platcreateop</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>平台固定字段，创建人id</td></tr><tr><td>4</td><td>platupdateop</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>平台固定字段，修改人id</td></tr><tr><td>5</td><td>platstatus</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td>平台固定字段，记录状态 1. 正常 2. 逻辑删除 3. 异常数据</td></tr><tr><td>6</td><td>data_id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>主键</td></tr><tr><td>7</td><td>original_data</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>原始数据</td></tr><tr><td>8</td><td>vector_data</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>向量数据</td></tr><tr><td>9</td><td>hierarchy_data</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>分层数据</td></tr><tr><td>10</td><td>result_data</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>结果数据</td></tr><tr><td>11</td><td>extra_data</td><td>varchar</td><td>-1</td><td>-1</td><td>f</td><td>扩展字段</td></tr><tr><td>12</td><td>task_id</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>任务id</td></tr><tr><td>13</td><td>create_time</td><td>timestamp</td><td>8</td><td>0</td><td>f</td><td>创建时间</td></tr><tr><td>14</td><td>tenant_id</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>租户id</td></tr></tbody></table><p>查询数据：<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%878.png" alt="图片8"></p><h3 id="五、ai拍照控件及照片属性说明" tabindex="-1">五、AI拍照控件及照片属性说明 <a class="header-anchor" href="#五、ai拍照控件及照片属性说明" aria-label="Permalink to &quot;五、AI拍照控件及照片属性说明&quot;">​</a></h3><p>有两个控件：aiphoto、aisplicephoto。</p><h4 id="_1、aiphoto普通ai控件" tabindex="-1">1、aiphoto普通AI控件 <a class="header-anchor" href="#_1、aiphoto普通ai控件" aria-label="Permalink to &quot;1、aiphoto普通AI控件&quot;">​</a></h4><p>aiphoto控件实现手机端拍摄照片并且进行照片sku识别功能<br> 详见：aiphoto普通AI控件</p><h5 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h5><p>每个拍照框只能拍一张照片。<br> 翻拍+sku识别</p><h5 id="常用属性介绍" tabindex="-1">常用属性介绍 <a class="header-anchor" href="#常用属性介绍" aria-label="Permalink to &quot;常用属性介绍&quot;">​</a></h5><p>•maxnumber 可保存拍照控件最大组数，默认为1 可拍一组。<br> •source 照片来源</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>默认值，从相机获取</td></tr><tr><td>1</td><td>从相册获取</td></tr><tr><td>2</td><td>从相册获取</td></tr></tbody></table><p>•detecttype 识别类型，需配置该字段才能使用AI相机进行拍照，否则只会调用普通相机。一般使用1。</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>不开启SKU识别</td></tr><tr><td>1</td><td>货架SKU识别</td></tr><tr><td>2</td><td>冰柜SKU识别</td></tr><tr><td>3</td><td>水堆SKU识别</td></tr></tbody></table><p>•fakedetect 是否开启翻拍检测</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>默认项， 关闭翻拍检测</td></tr><tr><td>1</td><td>开启翻拍检测</td></tr></tbody></table><p>•htmlopentype 识别结果详情页</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>IDE配置页面，需手动进行页面定制，否则不会进行跳转。IDE配置页面参数信息请参考智慧100V5.1开发环境</td></tr><tr><td>2</td><td>默认值，AI-SDK内置页面 ，不支持定制，页面样式请参考景田</td></tr></tbody></table><p>•pricedetect 价签识别功能(仅支持智慧100包)</p><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>默认值，关闭控件支持价签识别功能</td></tr><tr><td>1</td><td>开启控件支持价签识别功能</td></tr></tbody></table><h4 id="_2、aisplicephoto拼接控件" tabindex="-1">2、aisplicephoto拼接控件 <a class="header-anchor" href="#_2、aisplicephoto拼接控件" aria-label="Permalink to &quot;2、aisplicephoto拼接控件&quot;">​</a></h4><p>aisplicephoto可以用于获取用户照片的控件，包括一组单张拍照和拼接拍照可以拍照。<br> 详见：aiphoto普通AI控件</p><h5 id="功能-1" tabindex="-1">功能 <a class="header-anchor" href="#功能-1" aria-label="Permalink to &quot;功能&quot;">​</a></h5><p>支持拼接，多张图片拼成一张。<br> 一个框可以单拍很多张（可配置）。<br> 同时也可以实现aiphoto的功能。<br> 拼接+翻拍+sku识别</p><h5 id="常用属性介绍-1" tabindex="-1">常用属性介绍 <a class="header-anchor" href="#常用属性介绍-1" aria-label="Permalink to &quot;常用属性介绍&quot;">​</a></h5><p>•onclickdetectdetail 点击跳转识别详情页<br> •maxnumber 可保存拍照控件最大组数，默认为1可拍一组。<br> •compression压缩程度</p><table><thead><tr><th>取值</th><th>说明</th><th>图片大致大小</th><th>图片指导尺寸</th></tr></thead><tbody><tr><td>0</td><td>最大压缩</td><td>10K左右</td><td>•</td></tr><tr><td>1</td><td>1级压缩（默认值）</td><td>30K左右</td><td>•</td></tr><tr><td>2</td><td>2级压缩</td><td>90K左右</td><td>•</td></tr><tr><td>3</td><td>3级压缩</td><td>200K左右</td><td>•</td></tr><tr><td>4</td><td>4级压缩</td><td>500K左右</td><td>•</td></tr><tr><td>5</td><td>5级压缩</td><td>1M左右</td><td>•</td></tr><tr><td>10</td><td>无压缩</td><td>原图</td><td>•</td></tr></tbody></table><p>•detecttype 1为产品识别，0为不产品识别，默认为产品识别<br> •fakedetect 1为检测翻拍，0为不检测翻拍，默认为不检测翻拍<br> •htmlopentype 1为IDE配置页面打开识别结果详情页，2为AISDK页面打开识别结果详情页，此项为1时需要手动配置跳转的页面，否则不会进行跳转。默认值为跳转AISDK页面</p><h4 id="_3、图片属性介绍" tabindex="-1">3、图片属性介绍 <a class="header-anchor" href="#_3、图片属性介绍" aria-label="Permalink to &quot;3、图片属性介绍&quot;">​</a></h4><p>对图片属性进行分析，以便了解它的结构（不同包可能会有些差异）。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>photo普通照片</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619670811116&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>datetime：时间戳</span></span>
<span class="line"><span>source：图片数据来源</span></span>
<span class="line"><span>aiphoto</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619670811116&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>isFake：是否翻拍，true为翻拍，false为非翻拍。</span></span>
<span class="line"><span>identityId：图片id（必须，如果没有，请检查包是否正常）</span></span>
<span class="line"><span>detectResult：图片识别结果（可能会没有这个属性，也可能会为空；没有则需要后台离线调度补。）</span></span>
<span class="line"><span>aisplicephoto待处理</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619663627856&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;8bdca59b-2c77-4147-85ad-d6d585ef146d&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619663633033&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;06f635d1-7746-47a4-bf7b-751b84e6afb2&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>cameraType：区分是否拼接。1为拼接，0为非拼接</span></span>
<span class="line"><span>mergeId：拼接后的图片id（可能会没有这个属性，也可能会为空；没有则需要后台离线调度补。）</span></span>
<span class="line"><span>offline：用于区分在线和离线的标识。1为离线，0或者没有这个属性则为在线。（个人自定义的一个属性，如果后期与默认字段冲突，可以稍加修改。）</span></span>
<span class="line"><span>aisplicephoto成功</span></span>
<span class="line"><span>拼接，并且识别后的结果数据是这样的：（多个json和）</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/168487e0-eb9b-46a3-a217-2c08181f0f24.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: 1619625600000,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;168487e0-eb9b-46a3-a217-2c08181f0f24.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;33c0b84abea74323bbd5e904ac3c892f&quot;,</span></span>
<span class="line"><span>            &quot;httpUrl&quot;: &quot;https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/33c/img/20210429/10071/33c0b84abea74323bbd5e904ac3c892f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;1387597508942893056&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;因篇幅原因，省略识别结果内容数据&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>httpUrl：为拼接图片URL。（离线的话可能会没有这个字段，成功后需要反写这个字段）</span></span>
<span class="line"><span>detectResult：成功的话，这个字段一般都会比较长，这里省略。</span></span>
<span class="line"><span>aisplicephoto失败</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619663627856&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;8bdca59b-2c77-4147-85ad-d6d585ef146d&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;mergeFailure&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619663633033&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;06f635d1-7746-47a4-bf7b-751b84e6afb2&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;mergeFailure&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>detectResult：失败的话，这个字段的值是mergeFailure。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br></div></div><h3 id="六、ai接口说明" tabindex="-1">六、AI接口说明 <a class="header-anchor" href="#六、ai接口说明" aria-label="Permalink to &quot;六、AI接口说明&quot;">​</a></h3><h4 id="_1、常用接口" tabindex="-1">1、常用接口 <a class="header-anchor" href="#_1、常用接口" aria-label="Permalink to &quot;1、常用接口&quot;">​</a></h4><p>1.登录接口：login<br> 2.翻拍识别接口：fakephoto<br> 3.获取已经sku识别完成的结果：findskuresult<br> 4.货架SKU同步识别接口：syncdetect<br> 5.拼接异步识别接口：mergeimage<br> 6.查询拼接识别结果接口：getmergeinfo</p><h4 id="_2、调用顺序说明" tabindex="-1">2、调用顺序说明 <a class="header-anchor" href="#_2、调用顺序说明" aria-label="Permalink to &quot;2、调用顺序说明&quot;">​</a></h4><p>说明：<br> 1.识别前需检测是否已经有识别接口，因为调用识别接口是按照调用次数付费的，而识别结果是存在AI对应数据库里面的（调用无需付费）。<br> 2.识别拼接有两个步骤：（1）将多张拼接成一张图片（2）识别拼接后的图片<br> 3.mergeimage：相当于拼接+自动识别，注意每次调用拼接接口都会返回不同的结果（即使入参一样）。<br> 我们的调用顺序和前端识别的流程类似（上面的顺序即为调用顺序）。假如上面的功能都有的话，顺序是这样的：<br> 翻拍+SKU识别：登录--&gt;检测翻拍--&gt;查询图片是否已识别过--&gt;如果没有，进行识别。<br> 翻拍+拼接+SKU识别：登录--&gt;检测翻拍--&gt;是否拼接过--&gt;如果已经拼接，查询是否已经识别（如果没有，进行识别）；如果未拼接，则进行拼接。</p><h4 id="_3、测试说明" tabindex="-1">3、测试说明 <a class="header-anchor" href="#_3、测试说明" aria-label="Permalink to &quot;3、测试说明&quot;">​</a></h4><p>以好来化工实施环境为例进行演示。统一说明：<br> •测试工具：Postman<br> •请求方式：POST<br> •Content-Type: application/json</p><h4 id="_4、状态码说明" tabindex="-1">4、状态码说明 <a class="header-anchor" href="#_4、状态码说明" aria-label="Permalink to &quot;4、状态码说明&quot;">​</a></h4><p>识别、拼接等需要用到状态（handledStatus，常用于拼接和获取拼接识别结果接口中，因为这两个操作比较耗时，可能需要等待10010，10020；而且容易出现错误10040，10050 ），这里统一说明下：<br> 10010，10020 待处理<br> 10030 完成<br> 10040，10050 失败</p><h4 id="_5、ai后台" tabindex="-1">5、AI后台 <a class="header-anchor" href="#_5、ai后台" aria-label="Permalink to &quot;5、AI后台&quot;">​</a></h4><p>不管是手机端在线识别还是调度调用接口识别，这里都能看到相关数据。<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%879.png" alt="图片9"><br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%8710.png" alt="图片10"><br> 获取AI后台登录账号密码的两种方式：<br> 1.直接找AI同事问。<br> 2.写代码获取</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var account = FLY.call(&quot;globalconfigmgr.getGlobalConfigByKey&quot;, {</span></span>
<span class="line"><span>    pl_globalconfig: {</span></span>
<span class="line"><span>        key: &quot;AIAccount&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}).confjson;</span></span>
<span class="line"><span>FLY.log(account);</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    url=https://ai.xtion.net,</span></span>
<span class="line"><span>    username=10071,</span></span>
<span class="line"><span>    password = 123456,</span></span>
<span class="line"><span>    photoprefix = https://xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com,</span></span>
<span class="line"><span>    accessKey=0929e0ccc7e0458780eba375582ab8b3, </span></span>
<span class="line"><span>    account=10071</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>对应值说明：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    url=后台访问地址,</span></span>
<span class="line"><span>    username=账号,</span></span>
<span class="line"><span>    password = 密码,</span></span>
<span class="line"><span>    photoprefix = AI拼接图片域名,</span></span>
<span class="line"><span>    accessKey=0929e0ccc7e0458780eba375582ab8b3, </span></span>
<span class="line"><span>    account=AI数据库</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="_6、图片url问题" tabindex="-1">6、图片URL问题 <a class="header-anchor" href="#_6、图片url问题" aria-label="Permalink to &quot;6、图片URL问题&quot;">​</a></h4><p>因为接口会涉及到图片URL问题，因此你需要对URL的构成有一定的了解。<br> （如果运气好的话，在web端的URL没有进行特殊处理，F12可以看到对应的图片URL）</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>示例图片json：</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619670811116&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 0,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>图片URL应该是这样的：<br><a href="https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg" target="_blank" rel="noreferrer">https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg</a><br> 拼接规则<br><a href="https://xn--eqrt2g/identityId%E5%89%8D3%E4%B8%AA%E5%AD%97%E7%AC%A6/img/%E6%97%B6%E9%97%B4%E6%88%B3datetime%E8%BD%AC%E6%97%A5%E6%9C%9F/%E5%AE%9E%E6%96%BD%E6%95%B0%E6%8D%AE%E5%BA%93%E5%90%8D%EF%BC%88%E7%A7%9F%E6%88%B7%E5%90%8D%EF%BC%89/identityId.jpg" target="_blank" rel="noreferrer">https://域名/identityId前3个字符/img/时间戳datetime转日期/实施数据库名（租户名）/identityId.jpg</a></p><p>注意：<br> 1.一般实施环境和生产环境的域名是不一样的（资源存在阿里云不同的OSS对象存储的桶中），上线时要对应改一下（如果不知道可以问下搭建环境的运维同事）。<br> 2.AI拼接的照片的域名也是不一样的（identityId也是不一样的，中间不带-），比如实施环境是这个：<br> xtionai-storage-test.oss-cn-shenzhen.aliyuncs.com，例如是这样的：<br><a href="https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/ad1/img/20210429/10071/ad17626f593c4f1e8ae63987314cabcb.jpg" target="_blank" rel="noreferrer">https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/ad1/img/20210429/10071/ad17626f593c4f1e8ae63987314cabcb.jpg</a></p><p>附：时间戳在线转换工具：<a href="https://tool.lu/timestamp/" target="_blank" rel="noreferrer">https://tool.lu/timestamp/</a></p><h4 id="_7、接口测试案例" tabindex="-1">7、接口测试案例 <a class="header-anchor" href="#_7、接口测试案例" aria-label="Permalink to &quot;7、接口测试案例&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.登录接口</span></span>
<span class="line"><span>https://ai.xtion.net/api/ai/auth/login</span></span>
<span class="line"><span>入参来源：上面FLY.call获取的账号密码。</span></span>
<span class="line"><span>入参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;username&quot;: &quot;10071&quot;,</span></span>
<span class="line"><span>    &quot;password&quot;: &quot;123456&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>返回结果：</span></span>
<span class="line"><span>里面的token即为调用其他接口的请求头。</span></span>
<span class="line"><span>（tenantId是AI数据库租户名）</span></span>
<span class="line"><span>出参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: 1,</span></span>
<span class="line"><span>    &quot;traceId&quot;: &quot;ruuFZBU-RSCalt2BAq-QRQ&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;tenantId&quot;: 10071,</span></span>
<span class="line"><span>        &quot;tenantName&quot;: &quot;黑人牙膏&quot;,</span></span>
<span class="line"><span>        &quot;username&quot;: null,</span></span>
<span class="line"><span>        &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ5NDAyNDEsIkxvZ2luVXNlciI6eyJ0b2tlbklkIjpudWxsLCJ0cmFjZUlkIjpudWxsLCJ1c2VyTmFtZSI6bnVsbCwidGVuYW50SWQiOjEwMDcxLCJ0ZW5hbnROYW1lIjoi6buR5Lq654mZ6IaPIiwiYWNjb3VudElkIjoxMDA3MSwiY2xpZW50VmVyc2lvbiI6bnVsbCwiY2xpZW50VHlwZUNvZGUiOiI0IiwidXNlck5hbWUxIjpudWxsLCJ1c2VyTmFtZTIiOm51bGwsInVzZXJOYW1lMyI6bnVsbCwidGFza1R5cGVzIjpbIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIklNQUdFX01FUkdFIiwiSU1BR0VfTUVSR0VfUFJFRElDVElPTiIsIkJMVVJfREVURUNUIiwiRkFLRV9QSE9UTyIsIkZBS0VfUEhPVE8iLCJGQUtFX1BIT1RPIl19fQ.oGcdTWGFiti6BorZwQuPAbEnjH-IU1pRYmipZb2P9lk&quot;,</span></span>
<span class="line"><span>        &quot;tokenExpires&quot;: &quot;1624940241771&quot;,</span></span>
<span class="line"><span>        &quot;refreshToken&quot;: &quot;eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUwMjY2NDEsIkxvZ2luVXNlciI6eyJ0b2tlbklkIjpudWxsLCJ0cmFjZUlkIjpudWxsLCJ1c2VyTmFtZSI6bnVsbCwidGVuYW50SWQiOjEwMDcxLCJ0ZW5hbnROYW1lIjoi6buR5Lq654mZ6IaPIiwiYWNjb3VudElkIjoxMDA3MSwiY2xpZW50VmVyc2lvbiI6bnVsbCwiY2xpZW50VHlwZUNvZGUiOiI0IiwidXNlck5hbWUxIjpudWxsLCJ1c2VyTmFtZTIiOm51bGwsInVzZXJOYW1lMyI6bnVsbCwidGFza1R5cGVzIjpbIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIlNIRUxGX0xBWUVSIiwiRlJFRVpFUl9MQVlFUiIsIldBVEVSSEVBUF9MQVlFUiIsIklNQUdFX01FUkdFIiwiSU1BR0VfTUVSR0VfUFJFRElDVElPTiIsIkJMVVJfREVURUNUIiwiRkFLRV9QSE9UTyIsIkZBS0VfUEhPVE8iLCJGQUtFX1BIT1RPIl19fQ.MZCfq2_KpiKucWnf18VtPmVkhybt7lT0oqLJ61HGzmY&quot;,</span></span>
<span class="line"><span>        &quot;cloudserv&quot;: {</span></span>
<span class="line"><span>            &quot;storage&quot;: {</span></span>
<span class="line"><span>                &quot;provider&quot;: &quot;aliyun&quot;,</span></span>
<span class="line"><span>                &quot;storageendpoint&quot;: &quot;oss-cn-shenzhen.aliyuncs.com&quot;,</span></span>
<span class="line"><span>                &quot;storagebucket&quot;: &quot;xtionai-hlhg&quot;,</span></span>
<span class="line"><span>                &quot;storageurl&quot;: &quot;xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>2.翻拍识别接口</span></span>
<span class="line"><span>https://ai.xtion.net/api/ai/imagequality/fakephoto</span></span>
<span class="line"><span>入参来源：按照规则拼接图片。</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619670811116&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 0,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;detectResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>入参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;url&quot;: &quot;https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>出参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: 1,</span></span>
<span class="line"><span>    &quot;traceId&quot;: &quot;I0OtMgfjTg2yKVtY9CoHvw&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: true</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>分析：data为true为翻拍，false为非翻拍。</span></span>
<span class="line"><span>调度操作：将data值反写到图片的 isFake 属性中。</span></span>
<span class="line"><span>3.获取已经sku识别完成的结果</span></span>
<span class="line"><span>https://ai.xtion.net/api/ai/search/fetch/findskuresult</span></span>
<span class="line"><span>入参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;batchId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>    &quot;identityId&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>出参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: 1,</span></span>
<span class="line"><span>    &quot;traceId&quot;: &quot;jXRMu2A2TnmyOtFNotzY1A&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;batchId&quot;: null,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f&quot;,</span></span>
<span class="line"><span>            &quot;originalImgurl&quot;: &quot;https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>            &quot;handledStatus&quot;: 10030,</span></span>
<span class="line"><span>            &quot;dataId&quot;: &quot;1409389543953666048&quot;,</span></span>
<span class="line"><span>            &quot;bizType&quot;: 3,</span></span>
<span class="line"><span>            &quot;resultData&quot;: &quot;{}&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>分析：data为返回结果，只有当转态值 handledStatus 为10030时，才是正常的，其中的resultData为识别结果。</span></span>
<span class="line"><span>调度操作：将 resultData 值反写到图片的 detectResult 属性中。</span></span>
<span class="line"><span>4.货架SKU同步识别接口</span></span>
<span class="line"><span>https://ai.xtion.net/api/ai/shelf/syncdetect</span></span>
<span class="line"><span>注：priceDetect为1时识别价签，好像是好来新功能，不保证其他项目可用。</span></span>
<span class="line"><span>入参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;imageUrl&quot;: &quot;https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/fd9/img/20210429/1011038/fd9c3296-26e7-46e2-8660-936268035d5f.jpg&quot;,</span></span>
<span class="line"><span>    &quot;identityId&quot;: &quot;fd9c3296-26e7-46e2-8660-936268035d5f&quot;,</span></span>
<span class="line"><span>    &quot;priceDetect&quot;: &quot;1&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>出参：</span></span>
<span class="line"><span>省略了几个长值的数据是这样的（skuInfo、ownSkuInfos、layerOut）</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: 1,</span></span>
<span class="line"><span>    &quot;traceId&quot;: &quot;laIhsClbQiuwxg6lx9kLUg&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;taskId&quot;: &quot;1409389533040087040&quot;,</span></span>
<span class="line"><span>        &quot;imageInfo&quot;: {</span></span>
<span class="line"><span>            &quot;isVision&quot;: 0,</span></span>
<span class="line"><span>            &quot;width&quot;: &quot;900&quot;,</span></span>
<span class="line"><span>            &quot;height&quot;: &quot;1200&quot;,</span></span>
<span class="line"><span>            &quot;distance&quot;: &quot;0.68&quot;,</span></span>
<span class="line"><span>            &quot;direction&quot;: 0</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        &quot;layerNum&quot;: 4,</span></span>
<span class="line"><span>        &quot;skuInfo&quot;: [],</span></span>
<span class="line"><span>        &quot;ownSkuInfos&quot;: [],</span></span>
<span class="line"><span>        &quot;ownSkuTypeNum&quot;: 11,</span></span>
<span class="line"><span>        &quot;ownSkuNum&quot;: 21,</span></span>
<span class="line"><span>        &quot;ownPurity&quot;: &quot;75%&quot;,</span></span>
<span class="line"><span>        &quot;plumpness&quot;: null,</span></span>
<span class="line"><span>        &quot;isOwnFreezer&quot;: false,</span></span>
<span class="line"><span>        &quot;shelfDistributionRate&quot;: &quot;22%&quot;,</span></span>
<span class="line"><span>        &quot;ownDisplayLayerNum&quot;: 3,</span></span>
<span class="line"><span>        &quot;goldLocationDetection&quot;: true,</span></span>
<span class="line"><span>        &quot;centralizedDetection&quot;: true,</span></span>
<span class="line"><span>        &quot;notCentralizedLayer&quot;: null,</span></span>
<span class="line"><span>        &quot;competeSkuInfos&quot;: [],</span></span>
<span class="line"><span>        &quot;competeSkuTypeNum&quot;: 6,</span></span>
<span class="line"><span>        &quot;competeSkuNum&quot;: 7,</span></span>
<span class="line"><span>        &quot;otherSkuNum&quot;: 0,</span></span>
<span class="line"><span>        &quot;allSkuNum&quot;: 28,</span></span>
<span class="line"><span>        &quot;otherSkuInfos&quot;: [],</span></span>
<span class="line"><span>        &quot;imageUrl&quot;: &quot;https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/bac/img/20210628/10071/bace8faecffb4228a4507b133322491d.jpg&quot;,</span></span>
<span class="line"><span>        &quot;layerOut&quot;: [],</span></span>
<span class="line"><span>        &quot;bizType&quot;: 3</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>分析：data为识别结果。</span></span>
<span class="line"><span>调度操作：将data值反写到图片的 detectResult 属性中。</span></span>
<span class="line"><span>5.拼接异步识别接口</span></span>
<span class="line"><span>https://ai.xtion.net/api/ai/merge/mergeimage</span></span>
<span class="line"><span>入参说明：需要拼接的一组照片的URL放到数组中，入参。</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619663627856&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;8bdca59b-2c77-4147-85ad-d6d585ef146d&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;filePath&quot;: &quot;/storage/emulated/0/Android/data/com.xuanwu.apaas.app/files/Pictures/com.xuanwu.apaas.app/TakePhoto/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;,</span></span>
<span class="line"><span>            &quot;datetime&quot;: &quot;1619663633033&quot;,</span></span>
<span class="line"><span>            &quot;source&quot;: &quot;06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;,</span></span>
<span class="line"><span>            &quot;isFake&quot;: false,</span></span>
<span class="line"><span>            &quot;cameraType&quot;: 1,</span></span>
<span class="line"><span>            &quot;identityId&quot;: &quot;06f635d1-7746-47a4-bf7b-751b84e6afb2&quot;,</span></span>
<span class="line"><span>            &quot;watermark&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;priceResult&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;mergeId&quot;: &quot;&quot;,</span></span>
<span class="line"><span>            &quot;offline&quot;: 1</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>入参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;imageData&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;url&quot;: &quot;https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/8bd/img/20210429/1011038/8bdca59b-2c77-4147-85ad-d6d585ef146d.jpg&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;url&quot;: &quot;https://apaas-storage-test.oss-cn-beijing.aliyuncs.com/06f/img/20210429/1011038/06f635d1-7746-47a4-bf7b-751b84e6afb2.jpg&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;priceDetect&quot;: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>出参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: 1,</span></span>
<span class="line"><span>    &quot;traceId&quot;: &quot;jMATcpyvShqvDBUY74xVaw&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: &quot;1409395756049240064&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>分析：data为非空说明拼接成功，返回的为拼接图片的mergeId。</span></span>
<span class="line"><span>调度操作：将 data 值反写到图片的 mergeId 属性中。</span></span>
<span class="line"><span>6.查询拼接识别结果接口</span></span>
<span class="line"><span>https://ai.xtion.net/api/ai/search/merge/getmergeinfo</span></span>
<span class="line"><span>入参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;mergeId&quot;: &quot;1409395756049240064&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>出参：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;status&quot;: 1,</span></span>
<span class="line"><span>    &quot;traceId&quot;: &quot;QNHbvqrRRT2Mzyj9uJz-MQ&quot;,</span></span>
<span class="line"><span>    &quot;data&quot;: {</span></span>
<span class="line"><span>        &quot;mergeId&quot;: &quot;1409395756049240064&quot;,</span></span>
<span class="line"><span>        &quot;resultUrl&quot;: &quot;https://xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com/945/img/20210628/10071/94507f5ba23343c6921edeebfff5f7b2.jpg&quot;,</span></span>
<span class="line"><span>        &quot;commitTime&quot;: &quot;2021-06-28 14:18:28&quot;,</span></span>
<span class="line"><span>        &quot;finishTime&quot;: &quot;2021-06-28 14:18:51&quot;,</span></span>
<span class="line"><span>        &quot;status&quot;: 10030,</span></span>
<span class="line"><span>        &quot;tenantId&quot;: 10071,</span></span>
<span class="line"><span>        &quot;mergeSkuData&quot;: {</span></span>
<span class="line"><span>            &quot;status&quot;: 1,</span></span>
<span class="line"><span>            &quot;traceId&quot;: null,</span></span>
<span class="line"><span>            &quot;data&quot;: {}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>分析：data为返回结果，只有当转态值 status 为10030时，才是正常的，其中的 mergeSkuData 为识别结果。</span></span>
<span class="line"><span>调度操作：将 mergeSkuData 值反写到图片的 detectResult 属性中。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br></div></div><h3 id="七、ai离线调度" tabindex="-1">七、AI离线调度 <a class="header-anchor" href="#七、ai离线调度" aria-label="Permalink to &quot;七、AI离线调度&quot;">​</a></h3><p>文件详见：Step-2：业务领域配置<br> 为每个记录表写一个离线调度，权责清晰，如果出现问题排查起来也比较容易。<br> （当然一些通用的方法也可以写成全局函数，然后统一去调用就行了。）</p><h4 id="文件说明" tabindex="-1">文件说明 <a class="header-anchor" href="#文件说明" aria-label="Permalink to &quot;文件说明&quot;">​</a></h4><p>1-提交-业务行为代码 ：3个拍照步骤的提交逻辑。<br> 2-调度-业务行为代码：3个步骤的离线识别的调度。<br> 3-调度-业务行为代码-纯flycode：1,2为可导入的，和2一样，这个纯flycode形式的。</p><h4 id="调度时间间隔" tabindex="-1">调度时间间隔 <a class="header-anchor" href="#调度时间间隔" aria-label="Permalink to &quot;调度时间间隔&quot;">​</a></h4><table><thead><tr><th>拍照框数量，3个步骤，拍照框数量</th><th>项目</th><th>图片字段数量</th></tr></thead><tbody><tr><td>拍照采集</td><td>12</td><td></td></tr><tr><td>促销活动</td><td>8</td><td></td></tr><tr><td>竞品采集</td><td>7</td><td></td></tr></tbody></table><h4 id="分析" tabindex="-1">分析 <a class="header-anchor" href="#分析" aria-label="Permalink to &quot;分析&quot;">​</a></h4><p>先简单分析下，一条记录最多能产生多少照片。<br> 假设：以拍照采集为例，12个拍照框必填，并且每个拍照框的每组照片都没有识别完成（最坏的情况）。<br> 一条记录照片数量：单拍 x 拍照控件最大组数 x 拍照框 = 30x8x12 = 2880张，单次调2880次（识别）接口。<br> 一条记录照片数量：拼接的数量 x 拍照控件最大组数 x 拍照框 = 50x8x12 = 4800张，单次调98次（拼接）接口。<br> 一条记录有2880张照片，有点恐怖，调度应该会超时，调接口本来就比较慢，而且需要循环那么多次。<br> 当然这是最坏的情况，实际上12个拍照框只有2个是必填的，单拍或者拼接数量也比较少达到最大值的，12个框当拍到后面时，前面的一些已经在线识别完成了，不需要再调度处理了。</p><h4 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h4><p>正常情况下，未识别完成的照片在100张左右，因此建议设置为毎3或5分钟一次，对于拼接或拼接识别这种需要等待的，这个时间段应该也已经处理完了，处理两次就能有结果，这样提交后10分钟左右应该就能有识别结果。</p><h4 id="文件查看顺序说明" tabindex="-1">文件查看顺序说明 <a class="header-anchor" href="#文件查看顺序说明" aria-label="Permalink to &quot;文件查看顺序说明&quot;">​</a></h4><p>1.拍照采集-AI离线识别-调度-简单：因为表的照片字段比较多，比较麻烦，这里先简单化：只处理一个表的一个字段。<br> 2.拍照采集-AI离线识别-调度：基于1，循环处理12个拍照框。<br> 3.拍照采集-AI离线识别-处理mergeFailure：这个一个补充的调度，因为拼接经常会出现问题，比如识别错误、卡队列等，可能就会导致很多照片被误判为 mergeFailure，因此等AI同事处理好问题后，就需要去处理一下这个错误数据。</p><h4 id="离线调度说明" tabindex="-1">离线调度说明 <a class="header-anchor" href="#离线调度说明" aria-label="Permalink to &quot;离线调度说明&quot;">​</a></h4><p>这里只介绍编写步骤（流程），详情请看对应的程序。<br> 1.（login）获取token。<br> 2.查询最近没有识别结果的记录（我这里的查询逻辑设置的是查询1天内没有识别结果的记录，然后也可以设置为几个小时内的）。<br> 3.遍历照片字段，找到未识别记录。<br> 4.（fakephoto）调用翻拍接口，检测翻拍（注：好来这个项目没有开启这个功能，示例代码没有这个。）<br> 5.判断照片是否是拼接的<br> –非拼接：先检测是有结果（findskuresult），没有结果就进行识别（syncdetect）。<br> –拼接：先判断是否已经拼接，如果没有进行拼接（mergeimage），如果拼接了，获取识别结果（getmergeinfo）<br> 一些相关的其他业务逻辑（如果需要的话）。</p><h3 id="八、字符太长引起的问题" tabindex="-1">八、字符太长引起的问题 <a class="header-anchor" href="#八、字符太长引起的问题" aria-label="Permalink to &quot;八、字符太长引起的问题&quot;">​</a></h3><p>AI识别结果字段通常都会比较大，而且照片识别到越多产品，信息量就越大，之前有看到有个拍照框有55万+字符（好来化工产品是黑人牙膏、牙刷……），这可能会引起一系列的问题。下面是我遇到过的一些问题，以及解决方法。</p><h4 id="_1、前端入参到后端字符超长" tabindex="-1">1、前端入参到后端字符超长 <a class="header-anchor" href="#_1、前端入参到后端字符超长" aria-label="Permalink to &quot;1、前端入参到后端字符超长&quot;">​</a></h4><h5 id="报错信息" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息" aria-label="Permalink to &quot;报错信息&quot;">​</a></h5><p>报错信息为：入参校验失败，入参值超过了最大长度限制！最长为：10000字符<br><img src="http://apaas.wxchina.com:8881/wp-content/uploads/AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB-%E5%9B%BE%E7%89%8711.png" alt="图片11"></p><h5 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h5><p>找到对应的配置，把这个值设置的大一点就行了。具体值视情况而定（1张照片字符数*照片张数）。<br> 登录项目对应的nacos后台配置网站，找到biz开头的属性，将对应的值设置的大一点（默认应该是 10000）。</p><h4 id="_2-web端导出字符超长" tabindex="-1">2.web端导出字符超长 <a class="header-anchor" href="#_2-web端导出字符超长" aria-label="Permalink to &quot;2.web端导出字符超长&quot;">​</a></h4><h5 id="报错信息-1" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息-1" aria-label="Permalink to &quot;报错信息&quot;">​</a></h5><p>单元格的长度超出32,767个字符。</p><h5 id="解决办法-1" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法-1" aria-label="Permalink to &quot;解决办法&quot;">​</a></h5><p>该问题常见于AI识别的图片字段，我们需要将冗余字段属性置为空（其实图片导出工具能用到的字段就只有：datetime和source属性，也就是说其实其它都是冗余字段，特别是识别结果字段detectResult）。<br> 去除对象属性的两种方法：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1.delete obj.name; 主动删除不需要的属性。</span></span>
<span class="line"><span>2.obj.name = undefined; 平台会忽略值undefined的属性。</span></span>
<span class="line"><span>// 导出时，去除图片json的冗余字段</span></span>
<span class="line"><span>if(tpds!=null &amp;&amp; tpds.length&gt;0){</span></span>
<span class="line"><span>  for(var i = 0; i &lt; tpds.length; i++){</span></span>
<span class="line"><span>    var pic = tpds[i].display_photo;</span></span>
<span class="line"><span>    //FLY.log(&quot;pic:&quot;+pic);</span></span>
<span class="line"><span>    if(pic!=null &amp;&amp; pic!=&#39;&#39;){</span></span>
<span class="line"><span>      //FLY.log(&quot;pic不为空&quot;);</span></span>
<span class="line"><span>      pic = JSON.parse(pic);</span></span>
<span class="line"><span>      for(var j = 0; j &lt; pic.length; j++){</span></span>
<span class="line"><span>        for(var k = 0; k &lt; pic[j].length; k++){</span></span>
<span class="line"><span>          pic[j][k].filePath = &#39;&#39;;</span></span>
<span class="line"><span>          pic[j][k].watermark = &#39;&#39;;</span></span>
<span class="line"><span>          pic[j][k].detectResult = &#39;&#39;;</span></span>
<span class="line"><span>          pic[j][k].filePath = undefined;</span></span>
<span class="line"><span>          pic[j][k].watermark = undefined;</span></span>
<span class="line"><span>          pic[j][k].detectResult = undefined;</span></span>
<span class="line"><span>          delete pic[j][k].isFake;</span></span>
<span class="line"><span>          delete pic[j][k].cameraType;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      tpds[i].display_photo = JSON.stringify(pic);</span></span>
<span class="line"><span>      //FLY.log(&quot;tpds[i].display_photo:&quot;+tpds[i].display_photo);</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_3、图片导出工具不能导出ai照片" tabindex="-1">3、图片导出工具不能导出AI照片 <a class="header-anchor" href="#_3、图片导出工具不能导出ai照片" aria-label="Permalink to &quot;3、图片导出工具不能导出AI照片&quot;">​</a></h4><h5 id="错误情况" tabindex="-1">错误情况 <a class="header-anchor" href="#错误情况" aria-label="Permalink to &quot;错误情况&quot;">​</a></h5><p>在使用导出工具导出Excel中的图片时，发现AI拼接的照片不能成功导出。</p><h5 id="分析-1" tabindex="-1">分析 <a class="header-anchor" href="#分析-1" aria-label="Permalink to &quot;分析&quot;">​</a></h5><p>其实我们可以想象的图片导出工具的逻辑：根据登录者的环境信息，利用图片datetime和source属性拼接图片URL，但是之前已经提到过了，拼接后的照片的URL和普通照片的域名是不同的，这样就导致它找不到对应图片了。<br> 从该工具的开发人员处了解到：该工具支持两种类型的图片json，<br> •datetime和source信息数组<br> •URL数组。<br> 因为我们可以统一使用URL数组来解决这个问题。</p><h5 id="解决办法-2" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法-2" aria-label="Permalink to &quot;解决办法&quot;">​</a></h5><p>通过定义一个全局函数来处理这个导出的照片字段。<br> 可以处理单层数组和双重数组，通过httpUrl属性来判断是否是拼接照片（有就是拼接照片），然后拼接URL，返回对应数组。<br> 使用时注意下要替换前面这3个全局变量。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var ImageUtils = {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局变量</span></span>
<span class="line"><span>var photoprefix = &quot;http:\\/\\/apaas-storage-test.oss-cn-beijing.aliyuncs.com&quot;;</span></span>
<span class="line"><span>var photoprefix_ai = &quot;http:\\/\\/xtionai-hlhg.oss-cn-shenzhen.aliyuncs.com&quot;;</span></span>
<span class="line"><span>var account = &quot;1011038&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * 作用：解析图片字段，返回所包含的URL数组（字符串），常用于导出图片</span></span>
<span class="line"><span> * param: field 图片字段（字符串），如: obj.tn_adulttoothpaste</span></span>
<span class="line"><span> * return: URL数组（字符串），如: [&quot;url1&quot;,&quot;url2&quot;];如果字段为空，返回空数组 []</span></span>
<span class="line"><span> * 例子：测试图片工具类</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>ImageUtils.getOssUrl = function(field){</span></span>
<span class="line"><span>  var arr = [];</span></span>
<span class="line"><span>  if (field == &#39;&#39; || field == null || field == undefined) {</span></span>
<span class="line"><span>    //字段为空，返回空数组</span></span>
<span class="line"><span>    return [];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  field = JSON.parse(field);</span></span>
<span class="line"><span>  for (var i = 0; i &lt; field.length; i++) {</span></span>
<span class="line"><span>    // 双重数组</span></span>
<span class="line"><span>    if(field[0].length != undefined){</span></span>
<span class="line"><span>      for(var j = 0; j&lt; field[i].length; j++){</span></span>
<span class="line"><span>        var httpUrl = field[i][j].httpUrl;</span></span>
<span class="line"><span>        if(httpUrl!=undefined &amp;&amp; httpUrl!=null &amp;&amp; httpUrl!=&#39;&#39;){</span></span>
<span class="line"><span>           arr.push(httpUrl);</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        var datetime = field[i][j].datetime;</span></span>
<span class="line"><span>        var source = field[i][j].source;</span></span>
<span class="line"><span>        var url = photoprefix + &#39;/&#39; + source.substring(0, 3) + &#39;/img/&#39; + Date.parseDate(datetime).Format(&quot;yyyyMMdd&quot;) + &#39;/&#39; + account + &#39;/&#39; + source;</span></span>
<span class="line"><span>          arr.push(url);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }else{// 单层数组</span></span>
<span class="line"><span>        var httpUrl = field[i].httpUrl;</span></span>
<span class="line"><span>        if(httpUrl!=undefined &amp;&amp; httpUrl!=null &amp;&amp; httpUrl!=&#39;&#39;){</span></span>
<span class="line"><span>           arr.push(httpUrl);</span></span>
<span class="line"><span>        }else{</span></span>
<span class="line"><span>          var datetime = field[i].datetime;</span></span>
<span class="line"><span>          var source = field[i].source;</span></span>
<span class="line"><span>          var url = photoprefix + &#39;/&#39; + source.substring(0, 3) + &#39;/img/&#39; + Date.parseDate(datetime).Format(&quot;yyyyMMdd&quot;) + &#39;/&#39; + account + &#39;/&#39; + source;</span></span>
<span class="line"><span>          arr.push(url);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //FLY.log(&quot;arr:&quot; + arr);</span></span>
<span class="line"><span>  //FLY.log(&quot;arr:&quot; + JSON.stringify(arr));</span></span>
<span class="line"><span>  return JSON.stringify(arr);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>返回形式（直接赋值给对应字段即可）：</span></span>
<span class="line"><span>[&quot;http://apaas-storage-test.oss-cn-beijing.aliyuncs.com/42c/img/20210322/1011038/42cc5935-4f79-4e1a-b035-8178ac23ece7.jpg&quot;,&quot;http://apaas-storage-test.oss-cn-beijing.aliyuncs.com/42c/img/20210322/1011038/42cc5935-4f79-4e1a-b035-8178ac23ece7.jpg&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><p>文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC011-FC001-AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB.zip" title="COM-BC011-FC001 AI离线识别" target="_blank" rel="noreferrer">COM-BC011-FC001 AI离线识别</a><br> 视频讲解：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%A2%9C%E5%8D%87-AI%E7%A6%BB%E7%BA%BF%E8%AF%86%E5%88%AB.wmv" target="_blank" rel="noreferrer">颜升《AI离线识别》</a></p>`,122),l=[t];function r(i,u,c,b,o,d){return n(),a("div",null,l)}const h=s(e,[["render",r]]);export{q as __pageData,h as default};
