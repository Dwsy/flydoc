import{_ as e,o as a,c as t,Q as p}from"./chunks/framework.b1e56e49.js";const _=JSON.parse('{"title":"手机端极光推送失效原因排查","description":"","frontmatter":{"title":"手机端极光推送失效原因排查","date":"2020-05-11T12:06:59.000Z"},"headers":[],"relativePath":"doc/wpdoc/手机端极光推送失效原因排查.md","filePath":"doc/wpdoc/手机端极光推送失效原因排查.md"}'),i={name:"doc/wpdoc/手机端极光推送失效原因排查.md"},r=p('<p>edit by 黄坤庭</p><h2 id="_1、-操作方式是否正确-责任人-实施-测试" tabindex="-1">1、 操作方式是否正确？（责任人：实施/测试） <a class="header-anchor" href="#_1、-操作方式是否正确-责任人-实施-测试" aria-label="Permalink to &quot;1、 操作方式是否正确？（责任人：实施/测试）&quot;">​</a></h2><ol><li><p>账号已登录，手动退出后不能再接收到推送；</p></li><li><p>多台设备登录同一个账号，只有最后登陆的设备可以收到推送；</p></li><li><p>检查手机端设置是否允许通知；</p></li><li><p>检查APP版本：Android要8.5.2及以后版本、iOS要9.0及以后版本；<br> （原因：旧版本没有调用getMsgTicketById1接口）</p></li><li><p>确认开通了推送服务和推送flycode无误？</p></li><li><p>由于iOS端推送配置的特殊性，bundleID与推送key是一一对应的关系。<br> 所以，如果用独立打包的iOS手机包(使用客户提供的企业证书打包)，验证时要用正式生产环境（推送服务key和secret配置已更新），不要用独立打包的去验证实施环境，同样的也不要用内部包(RC包和日更新包)去验证正式环境。</p></li><li><p>登录时检查/api/teapi/rolepermission/accountDevice/registerPush注册推送接口是否报错？（报错的直接找手机端开发）<br> Android端抓包截图：</p></li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%9E%81%E5%85%89%E6%8E%A8%E9%80%81%E5%A4%B1%E6%95%88%E5%8E%9F%E5%9B%A0%E6%8E%92%E6%9F%A5-1.png" alt=""> ios端抓包截图：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%9E%81%E5%85%89%E6%8E%A8%E9%80%81%E5%A4%B1%E6%95%88%E5%8E%9F%E5%9B%A0%E6%8E%92%E6%9F%A5-2.png" alt=""></p><p>对于Android包，只需要传pushdevicecode和deviceinfo;</p><p>对于iOS包，还可以检查registerPush接口的pushowner字段，如果是从App Store下载的包pushowner入参应该是xwappstore，否则应该是xwent，如果这个参数不对可以定位到是手机包打包时配置的问题。</p><h3 id="总结" tabindex="-1">总结： <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结：&quot;">​</a></h3><p>所以验证推送的时候要重新登录下，确保不是同时登陆的其他设备收到了推送，而误认为推送不生效。 以上述条件作为前提，验证方法以iOS为例：</p><ol><li>APP位于前台：无横幅提醒，消息有显示红点</li><li>APP退到后台：有横幅提醒</li><li>杀掉APP进程：有横幅提醒</li></ol><h2 id="_2、registerpush接口的报错处理-责任人-手机端开发" tabindex="-1">2、registerPush接口的报错处理（责任人：手机端开发） <a class="header-anchor" href="#_2、registerpush接口的报错处理-责任人-手机端开发" aria-label="Permalink to &quot;2、registerPush接口的报错处理（责任人：手机端开发）&quot;">​</a></h2><p>如果这个接口报错，实施可以不用看下去，这是手机端开发的问题。</p><p>对于Android开发的同事，可以检查一下，是否升级了极光推送的版本，如果是的话，检查一下AndroidManifest.xml是否按照官网文档的说明，做了相应的修改，导致JPushInterface.getRegistrationID 为空？</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%9E%81%E5%85%89%E6%8E%A8%E9%80%81%E5%A4%B1%E6%95%88%E5%8E%9F%E5%9B%A0%E6%8E%92%E6%9F%A5-3.png" alt=""></p><h2 id="_3、找运维更新后台推送服务-责任人-运维" tabindex="-1">3、找运维更新后台推送服务（责任人：运维） <a class="header-anchor" href="#_3、找运维更新后台推送服务-责任人-运维" aria-label="Permalink to &quot;3、找运维更新后台推送服务（责任人：运维）&quot;">​</a></h2><p>原因1：</p><p>推送key和secret配置有误 key和secret配置有误是最常见的不生效原因<br> 运维配置错误的例子：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%9E%81%E5%85%89%E6%8E%A8%E9%80%81%E5%A4%B1%E6%95%88%E5%8E%9F%E5%9B%A0%E6%8E%92%E6%9F%A5-4.png" alt=""></p><p>手机端开发也可以登录极光后台协助排查，如果发现errmsg:验证失败，那就是运维配置有问题。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E6%89%8B%E6%9C%BA%E7%AB%AF%E6%9E%81%E5%85%89%E6%8E%A8%E9%80%81%E5%A4%B1%E6%95%88%E5%8E%9F%E5%9B%A0%E6%8E%92%E6%9F%A5-5.png" alt=""></p><p>原因2：</p><p>旧的后台推送服务缺少getMsgTicketById1接口。</p><p>简单定位方法：如果推送发出后通过手机端抓包，getMsgTicketById1接口返回了404错误，可以定位到是后台推送服务没有更新。</p><h3 id="特殊的-对于独立打包的ios端-使用客户提供的企业证书打包" tabindex="-1">特殊的，对于独立打包的iOS端(使用客户提供的企业证书打包) <a class="header-anchor" href="#特殊的-对于独立打包的ios端-使用客户提供的企业证书打包" aria-label="Permalink to &quot;特殊的，对于独立打包的iOS端(使用客户提供的企业证书打包)&quot;">​</a></h3><p>原因3：</p><p>独立打包bundleID改变，对应的推送服务key和secret配置也要配套改变，一一对应。</p><p>方案：找运维更新后台推送服务key和secret配置，key和secret可找瑞烜提供</p><h2 id="_4、最后" tabindex="-1">4、最后 <a class="header-anchor" href="#_4、最后" aria-label="Permalink to &quot;4、最后&quot;">​</a></h2><p>如果上述方案都不能解决iOS和Android端问题，可找开发或瑞烜检查推送证书配置是否过期！</p>',29),o=[r];function E(s,c,l,n,d,h){return a(),t("div",null,o)}const u=e(i,[["render",E]]);export{_ as __pageData,u as default};
