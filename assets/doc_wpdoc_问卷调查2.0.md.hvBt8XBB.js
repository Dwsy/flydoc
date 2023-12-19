import{_ as t,o as d,c as a,R as e}from"./chunks/framework.E9w9IFh5.js";const m=JSON.parse('{"title":"问卷调查2.0","description":"","frontmatter":{"title":"问卷调查2.0","date":"2021-10-11T17:35:18.000Z"},"headers":[],"relativePath":"doc/wpdoc/问卷调查2.0.md","filePath":"doc/wpdoc/问卷调查2.0.md"}'),r={name:"doc/wpdoc/问卷调查2.0.md"},i=e('<h3 id="组件简介" tabindex="-1">组件简介 <a class="header-anchor" href="#组件简介" aria-label="Permalink to &quot;组件简介&quot;">​</a></h3><p>问卷调查（好来化工项目）可自定义配置问卷，支持选择题（单选、多选、下拉框）、填空题（文本、小数、整数校验）、拍照等，通过数据库函数实现权限控制。</p><h3 id="一、设计背景" tabindex="-1">一、设计背景 <a class="header-anchor" href="#一、设计背景" aria-label="Permalink to &quot;一、设计背景&quot;">​</a></h3><p>在项目实施过程中，客户需要一个类似问卷星的问卷调研组件，用于给导购员工采集产品销售情况和体验情况。</p><h3 id="二、现有问题痛点" tabindex="-1">二、现有问题痛点 <a class="header-anchor" href="#二、现有问题痛点" aria-label="Permalink to &quot;二、现有问题痛点&quot;">​</a></h3><p>aPaas v8.0产品对问卷调查这块功能支持几乎空白，实施难度大，工作量多，难以推进客户需求，需要开发人员硬编码实现。</p><h3 id="三、解决方案" tabindex="-1">三、解决方案 <a class="header-anchor" href="#三、解决方案" aria-label="Permalink to &quot;三、解决方案&quot;">​</a></h3><p>基于aPaas平台的扩展性能力评估，决定采用独立服务+H5的形式来实现问卷调研组件，后台服务使用Java，H5使用React，单独部署到服务器，在aPaas配置平台采用WebView控件进行嵌套展示。</p><h3 id="四、详细设计" tabindex="-1">四、详细设计 <a class="header-anchor" href="#四、详细设计" aria-label="Permalink to &quot;四、详细设计&quot;">​</a></h3><h4 id="_1-准备工作" tabindex="-1">1.准备工作 <a class="header-anchor" href="#_1-准备工作" aria-label="Permalink to &quot;1.准备工作&quot;">​</a></h4><p>申请获取核心xw-core-1.0.0.jar包作为嵌套aPaas平台的脚手架，主要用于单点登录的实现，后台服务使用Spring boot，前端使用React。</p><h4 id="_2-数据库设计" tabindex="-1">2.数据库设计 <a class="header-anchor" href="#_2-数据库设计" aria-label="Permalink to &quot;2.数据库设计&quot;">​</a></h4><table><thead><tr><th>表名</th><th>说明</th></tr></thead><tbody><tr><td>yhjl<em>biz</em>questionnaire</td><td>问卷配置表</td></tr><tr><td>yhjl<em>biz</em>questionnaire_content</td><td>问卷内容表</td></tr><tr><td>yhjl<em>biz</em>questionnaire_answer</td><td>问卷答案表</td></tr><tr><td>yhjl<em>biz</em>questionaire<em>auth</em>person</td><td>问卷到人权限表</td></tr><tr><td>yhjl<em>biz</em>questionnaire_auth</td><td>问卷到店权限表</td></tr><tr><td>yhjl<em>biz</em>questionnaire_attpic</td><td>问卷照片表</td></tr></tbody></table><p>数据库表：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D649.png" alt=""></p><h4 id="_3-表结构定义" tabindex="-1">3.表结构定义 <a class="header-anchor" href="#_3-表结构定义" aria-label="Permalink to &quot;3.表结构定义&quot;">​</a></h4><p>ER图：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D665.png" alt=""></p><p>如果每次的问卷调查都是固定的，只是时间不一致，那么我们是可以直接通过平台进行配置开发的。</p><p>但是如果需要用户进行自定义配置问卷调查的具体选项、内容就需要进行特殊处理了。</p><p>我们这里是将每个选项都设置成json格式存储到数据库，设置问卷时，将整个问卷的定义和答案的json保存起来，然后要用时再取出来（以致于问卷调查的功能对网络的要求会相对比较高一点）。</p><h4 id="yhjlbizquestionnaire" tabindex="-1">yhjlbizquestionnaire <a class="header-anchor" href="#yhjlbizquestionnaire" aria-label="Permalink to &quot;yhjlbizquestionnaire&quot;">​</a></h4><p>需要注意的地方：（有些是这几个表共有的性质）</p><p>yhjl<em>biz</em>questionnaire 表的创建人和更新人是 userinfoid</p><p>所属营销组织 marketorg 没有使用</p><p>ispublish 1发布，0未发布</p><p>istoperson = 1 到店，0 到人</p><p>datastatus 1是启用，0是禁用（逻辑删除）</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>2</td><td>questionnairename</td><td>varchar</td><td>-1</td><td>504</td><td>t</td><td>问卷名称</td></tr><tr><td>3</td><td>questionnairetips</td><td>text</td><td>-1</td><td>-1</td><td>f</td><td>问卷说明</td></tr><tr><td>4</td><td>createtime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td>创建时间</td></tr><tr><td>5</td><td>updatetime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td>更新时间</td></tr><tr><td>6</td><td>createop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>创建人</td></tr><tr><td>7</td><td>updateop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>更新人</td></tr><tr><td>8</td><td>marketorg</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td>所属营销组织</td></tr><tr><td>9</td><td>ispublish</td><td>int4</td><td>4</td><td>-1</td><td>t</td><td>是否发布</td></tr><tr><td>10</td><td>assigntype</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td>分配类型</td></tr><tr><td>11</td><td>istoperson</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td>0到人1到店</td></tr><tr><td>12</td><td>datastatus</td><td>int4</td><td>4</td><td>-1</td><td>t</td><td>0是禁用的，1是启用，默认是禁用</td></tr><tr><td>13</td><td>remark</td><td>text</td><td>-1</td><td>-1</td><td>f</td><td></td></tr><tr><td>14</td><td>currentversion</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td></td></tr><tr><td>15</td><td>startdate</td><td>timestamp</td><td>8</td><td>6</td><td>f</td><td></td></tr><tr><td>16</td><td>enddate</td><td>timestamp</td><td>8</td><td>6</td><td>f</td><td></td></tr><tr><td>17</td><td>questionnairecode</td><td>varchar</td><td>-1</td><td>259</td><td>f</td><td></td></tr></tbody></table><h4 id="yhjlbizquestionnaire-content" tabindex="-1">yhjlbizquestionnaire_content <a class="header-anchor" href="#yhjlbizquestionnaire-content" aria-label="Permalink to &quot;yhjlbizquestionnaire\\_content&quot;">​</a></h4><p>questionnairecontent 是定义的问卷的内容，比如下图是有3个项目，最后一个是文本填空。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D1711.png" alt=""></p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>2</td><td>questionnaireid</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>问卷id</td></tr><tr><td>3</td><td>questionnairecontent</td><td>jsonb</td><td>-1</td><td>-1</td><td>f</td><td></td></tr><tr><td>4</td><td>dataversion</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>5</td><td>createtime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td></td></tr><tr><td>6</td><td>updatetime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td></td></tr><tr><td>7</td><td>createop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>8</td><td>updateop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>9</td><td>datastatus</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td></td></tr></tbody></table><h3 id="yhjlbizquestionnaire-auth" tabindex="-1">yhjlbizquestionnaire_auth <a class="header-anchor" href="#yhjlbizquestionnaire-auth" aria-label="Permalink to &quot;yhjlbizquestionnaire\\_auth&quot;">​</a></h3><p>到店，很多终端信息，关联终端，方便进行权限控制。</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>2</td><td>questionnaireid</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>问卷id</td></tr><tr><td>3</td><td>storecode</td><td>varchar</td><td>-1</td><td>504</td><td>f</td><td></td></tr><tr><td>4</td><td>storename</td><td>varchar</td><td>-1</td><td>2004</td><td>f</td><td></td></tr><tr><td>5</td><td>isselected</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td></td></tr><tr><td>6</td><td>belongorg</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>7</td><td>terminaltype</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>8</td><td>kasys</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>9</td><td>createtime</td><td>timestamp</td><td>8</td><td>6</td><td>f</td><td></td></tr><tr><td>10</td><td>updatetime</td><td>timestamp</td><td>8</td><td>6</td><td>f</td><td></td></tr><tr><td>11</td><td>datastatus</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td></td></tr><tr><td>12</td><td>createop</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>13</td><td>updateop</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>14</td><td>distributorname</td><td>varchar</td><td>-1</td><td>804</td><td>f</td><td></td></tr><tr><td>15</td><td>storeid</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr></tbody></table><h4 id="yhjlbizquestionaireauthperson" tabindex="-1">yhjlbizquestionaireauthperson <a class="header-anchor" href="#yhjlbizquestionaireauthperson" aria-label="Permalink to &quot;yhjlbizquestionaireauthperson&quot;">​</a></h4><p>到人，人员相关信息。</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>2</td><td>userid</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>3</td><td>belongorg</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>4</td><td>createtime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td></td></tr><tr><td>5</td><td>updatetime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td></td></tr><tr><td>6</td><td>createop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>7</td><td>updateop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>8</td><td>isselected</td><td>int4</td><td>4</td><td>-1</td><td>t</td><td></td></tr><tr><td>9</td><td>datastatus</td><td>int4</td><td>4</td><td>-1</td><td>t</td><td></td></tr><tr><td>10</td><td>questionnaireid</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>11</td><td>distributorname</td><td>text</td><td>-1</td><td>-1</td><td>f</td><td></td></tr><tr><td>12</td><td>mbcode</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr></tbody></table><h4 id="yhjlbizquestionnaire-answer" tabindex="-1">yhjlbizquestionnaire_answer <a class="header-anchor" href="#yhjlbizquestionnaire-answer" aria-label="Permalink to &quot;yhjlbizquestionnaire\\_answer&quot;">​</a></h4><p>问卷调查的回答。</p><p>yhjl<em>biz</em>questionnaire<em>answer 表的</em><br><em>mbcode 为 orgstructid</em><br><em>datastatus 为 1 是正常数据，0 为删除的数据</em><br><em>relatestorecode 是门店编码，关联 kx</em>kq_store.storecode</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>id</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>2</td><td>questnaireconid</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td>问卷内容id</td></tr><tr><td>3</td><td>questionnaireanswer</td><td>jsonb</td><td>-1</td><td>-1</td><td>f</td><td></td></tr><tr><td>4</td><td>createtime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td></td></tr><tr><td>5</td><td>updatetime</td><td>timestamp</td><td>8</td><td>6</td><td>t</td><td></td></tr><tr><td>6</td><td>createop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>7</td><td>updateop</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>8</td><td>datastatus</td><td>int4</td><td>4</td><td>-1</td><td>f</td><td></td></tr><tr><td>9</td><td>relatestorecode</td><td>varchar</td><td>-1</td><td>504</td><td>f</td><td></td></tr><tr><td>10</td><td>mbcode</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr><tr><td>11</td><td>questionnaireid</td><td>int8</td><td>8</td><td>-1</td><td>f</td><td></td></tr></tbody></table><h4 id="yhjlbizquestionnaire-attpic" tabindex="-1">yhjlbizquestionnaire_attpic <a class="header-anchor" href="#yhjlbizquestionnaire-attpic" aria-label="Permalink to &quot;yhjlbizquestionnaire\\_attpic&quot;">​</a></h4><p>如果问卷需要拍照，存放照片信息。</p><table><thead><tr><th>attnum</th><th>field</th><th>type</th><th>length</th><th>lengthvar</th><th>notnull</th><th>comment</th></tr></thead><tbody><tr><td>1</td><td>questionnaireanswerid</td><td>int8</td><td>8</td><td>-1</td><td>t</td><td></td></tr><tr><td>2</td><td>picid</td><td>text</td><td>-1</td><td>-1</td><td>t</td><td></td></tr></tbody></table><h4 id="_4-代码开发和部署" tabindex="-1">4.代码开发和部署 <a class="header-anchor" href="#_4-代码开发和部署" aria-label="Permalink to &quot;4.代码开发和部署&quot;">​</a></h4><p>详情见开发源码包。</p><h4 id="_5-apaas平台配置" tabindex="-1">5.aPaas平台配置 <a class="header-anchor" href="#_5-apaas平台配置" aria-label="Permalink to &quot;5.aPaas平台配置&quot;">​</a></h4><p>新建一个Web页面和一个手机端的H5页面，使用WebView控件，并把部署好的站点Url设置在WebView的默认值属性即可。</p><p>web后台：新增一个页面，添加一个 webview 控件，URL地址为部署前端代码的访问路径，如： <a href="http://120.76.133.25:7000/yihaikerry/" target="_blank" rel="noreferrer">http://120.76.133.25:7000/yihaikerry/</a> ，显示模式：内容。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D3876.png" alt=""></p><p>手机端：新增一个页面，添加一个 ultrawebview 控件，通过 flycode 设置该控件的值为部署前端代码的访问路径（URL地址）：</p><p><strong>var</strong> **linkparamData = Page.getLinkParams();<br><strong>var</strong> token = System.context().token;<br><strong>if</strong>(**linkparamData != <strong>null</strong>){<br><strong>var</strong> url = &#39;<a href="http://120.76.133.25:7000/yihaikerry/list/" target="_blank" rel="noreferrer">http://120.76.133.25:7000/yihaikerry/list/</a>&#39; + __linkparamData.storecode + &#39;?token=&#39;+token;<br> Page.getCtrl(&#39;webview旗舰版&#39;).value = url;<br><em><a href="//Page.alert" target="_blank" rel="noreferrer">//Page.alert</a>(&#39;info&#39;,url);</em><br> }</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4232.png" alt=""></p><h3 id="五、效果图" tabindex="-1">五、效果图 <a class="header-anchor" href="#五、效果图" aria-label="Permalink to &quot;五、效果图&quot;">​</a></h3><p>大概流程：web后台设置问卷，手机端填写问卷，web端查看文件填报情况。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4276.png" alt=""></p><p>如图，功能一目了然，新建问卷的流程：</p><p>上级新增问卷（如果新建的问卷与之前的类似，可以使用“复制新增”功能）；编辑问卷（设置具体项目）；设置可见范围（问卷对哪些人或者是哪些店可见）；发布问卷；业务员（手机端）填写问卷；查看填报情况。</p><h4 id="_1-新增问卷" tabindex="-1">1.新增问卷 <a class="header-anchor" href="#_1-新增问卷" aria-label="Permalink to &quot;1.新增问卷&quot;">​</a></h4><p>问卷类型：到人--对指定人员负责的所有门店有效（即可见），到店--对指定门店有效。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4444.png" alt=""></p><h4 id="_2-编辑问卷" tabindex="-1">2.编辑问卷 <a class="header-anchor" href="#_2-编辑问卷" aria-label="Permalink to &quot;2.编辑问卷&quot;">​</a></h4><p>项目可设置选择题（单选、多选、下拉框），填空题（文本填空、整数填空、小数填空），其他（拍照、分组）</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4504.png" alt=""></p><p>我这里将所有项目都设置了一个，左侧查看问卷大纲如下：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4534.png" alt=""></p><p>点击右上角预览，可在右侧生成在手机端的预览效果：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4562.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4565.png" alt=""></p><h4 id="_3-设置可见范围" tabindex="-1">3.设置可见范围 <a class="header-anchor" href="#_3-设置可见范围" aria-label="Permalink to &quot;3.设置可见范围&quot;">​</a></h4><p>可以单个操作，也可以进行批量导入。</p><p>注意：问卷发布后，如果新增门店或人员，是不可见的；需要在这里进行设置。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4631.png" alt=""></p><p>（这里测试）为这个人员设置可见范围：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4653.png" alt=""></p><h3 id="_4-发布" tabindex="-1">4.发布 <a class="header-anchor" href="#_4-发布" aria-label="Permalink to &quot;4.发布&quot;">​</a></h3><p>勾选问卷，发布</p><h4 id="_5-填写问卷" tabindex="-1">5.填写问卷 <a class="header-anchor" href="#_5-填写问卷" aria-label="Permalink to &quot;5.填写问卷&quot;">​</a></h4><p>手机端填写问题卷（界面同3中的预览）。</p><p>注意：手机端填写后，不能看到填报情况，只能在后台看。</p><h4 id="_6-查看填报情况" tabindex="-1">6.查看填报情况 <a class="header-anchor" href="#_6-查看填报情况" aria-label="Permalink to &quot;6.查看填报情况&quot;">​</a></h4><p>勾选问卷，查看填报情况，支持导出（如果有图片，需要使用“玄讯图片工具”进行转换）。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4774.png" alt=""></p><p>![img]<img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0-%E7%BB%84%E4%BB%B6%E4%BB%8B%E7%BB%8D4777.png" alt=""></p><p>相关文件下载：<br><a href="http://apaas.wxchina.com:8881/wp-content/uploads/COM-BC009-FC002-%E9%97%AE%E5%8D%B7%E8%B0%83%E6%9F%A52.0.zip" title="COM-BC009-FC002 问卷调查2.0" target="_blank" rel="noreferrer">COM-BC009-FC002 问卷调查2.0</a></p>',87),n=[i];function h(o,p,s,l,c,B){return d(),a("div",null,n)}const E=t(r,[["render",h]]);export{m as __pageData,E as default};
