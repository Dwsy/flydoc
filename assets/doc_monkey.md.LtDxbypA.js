import{_ as e,c as t,o,U as s}from"./chunks/framework.K-r7inPk.js";const a="/assets/image.-n-asoCi.png",l="/assets/image-1.lCieDojy.png",c="/assets/image-2.c-7PVSkI.png",r="/assets/image-3.PqleNL9v.png",i="/assets/image-4.SIS2PqcY.png",n="/assets/image-6.OrztXHd0.png",d="/assets/image-7.mHW3ROL5.png",p="/assets/image.fGJJq2Tx.png",A=JSON.parse('{"title":"Flycode 代码生成器 (摸鱼)","description":"","frontmatter":{},"headers":[],"relativePath":"doc/monkey.md","filePath":"doc/monkey.md"}'),m={name:"doc/monkey.md"},_=s('<h1 id="flycode-代码生成器-摸鱼" tabindex="-1">Flycode 代码生成器 (摸鱼) <a class="header-anchor" href="#flycode-代码生成器-摸鱼" aria-label="Permalink to &quot;Flycode 代码生成器 (摸鱼)&quot;">​</a></h1><ol><li>浏览器安装油猴插件 <a href="https://juejin.cn/post/7000726775453974558" target="_blank" rel="noreferrer">安装教程</a></li><li><a href="https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js" target="_blank" rel="noreferrer">点击这里安装</a>Flycode 代码生成器</li></ol><hr><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>第一版，功能不太完善，生成后的代码并不能直接使用建议酌情修改 😄</p><p>代码生成功能强依托与实体的类型，创建时需要正确填写。</p><p>保存领域时如果保存时间成功消息弹出太慢建议保存后刷新页面或者再次保存，因为插件协议数据是通过请求获取的而不是<code>monaco</code>编辑器中的数据</p><blockquote><p>IDE更新到5.10版本打包方式更改，monaco全局变量无法调用所以手动设置全局变量暴露并反向代理了IDE网站 反向代理版本IDE URL:<a href="http://xwide.dwsy.link/" target="_blank" rel="noreferrer">http://xwide.dwsy.link/</a> :::</p></blockquote><h3 id="功能介绍" tabindex="-1">功能介绍 <a class="header-anchor" href="#功能介绍" aria-label="Permalink to &quot;功能介绍&quot;">​</a></h3><ol><li>列表查询 FlyQuery</li></ol><p>创建领域后配置输入与输出然后保存点击 生成 SQL 按钮即可 <img src="'+a+'" alt="Alt text"></p><ol start="2"><li>新增编辑</li></ol><p>创建领域后配置输入即可 点击生成 Flycode 按钮后可配置那些参数需要校验以及是否必填，在<code>校验配置中还可以选择是否校验字典与业务对象是否存在</code><img src="'+l+'" alt="Alt text"><img src="'+c+'" alt="Alt text"><img src="'+r+'" alt="Alt text"></p><ol start="3"><li>Excel 导入</li></ol><p>创建领域操作类型选择<code>导入</code>配置<code>输入</code>后保存点击生成 Flycode 然后上传 Excel 模版文件，选择表后会自动映射导入关系以及根据<code>业务对象</code>啥啥值以及字典对象值反查 ID， 还可以进行必填校验，这个功能自动完成功能依靠 Execl 表中第二行的备注是否有<code>必填</code>与<code>非必填</code><img src="'+i+'" alt="Alt text"><img src="'+n+'" alt="Alt text"></p><ol start="4"><li>Excel 导出</li></ol><p>创建领域操作类型选择<code>导出</code>配置<code>输入</code>后配置映射关系即可 <img src="'+d+'" alt="Alt text"></p><ol start="5"><li>主题切换以及去除彩虹括号 <img src="'+p+'" alt="Alt text"></li></ol></div>',4),g=[_];function h(x,y,f,k,u,F){return o(),t("div",null,g)}const q=e(m,[["render",h]]);export{A as __pageData,q as default};
