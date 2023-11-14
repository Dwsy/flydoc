import{_ as t,o as a,c as r,Q as e}from"./chunks/framework.aac09c5f.js";const A=JSON.parse('{"title":"Basic 控件基础样式","description":"","frontmatter":{"title":"Basic 控件基础样式","date":"2020-05-19T19:46:20.000Z"},"headers":[],"relativePath":"doc/wpdoc/Basic 控件基础样式.md","filePath":"doc/wpdoc/Basic 控件基础样式.md"}'),d={name:"doc/wpdoc/Basic 控件基础样式.md"},o=e('<h2 id="basic-控件基础样式" tabindex="-1">Basic 控件基础样式 <a class="header-anchor" href="#basic-控件基础样式" aria-label="Permalink to &quot;Basic 控件基础样式&quot;">​</a></h2><p>基础样式是指控件只显示最基本的交互元素。</p><p>通常输入类控件放置在表格，列表，或者搜索条内的之后，默认的显示方式就是基本样式。</p><h2 id="支持基础样式的控件" tabindex="-1">支持基础样式的控件 <a class="header-anchor" href="#支持基础样式的控件" aria-label="Permalink to &quot;支持基础样式的控件&quot;">​</a></h2><h3 id="表格-editortable" tabindex="-1">表格 EditorTable <a class="header-anchor" href="#表格-editortable" aria-label="Permalink to &quot;表格 EditorTable&quot;">​</a></h3><table><thead><tr><th>控件</th><th>说明</th></tr></thead><tbody><tr><td>teblecell</td><td></td></tr><tr><td>address</td><td></td></tr><tr><td>attachment</td><td>手机端暂不支持</td></tr><tr><td>checkbutton</td><td></td></tr><tr><td>currency</td><td></td></tr><tr><td>datepicker</td><td></td></tr><tr><td>daterange</td><td></td></tr><tr><td>dropdownbox</td><td></td></tr><tr><td>number</td><td></td></tr><tr><td>numberinputrange</td><td></td></tr><tr><td>memberpicker</td><td></td></tr><tr><td>periodicpicker</td><td></td></tr><tr><td>phonenumber</td><td></td></tr><tr><td>photo</td><td></td></tr><tr><td>picklist</td><td></td></tr><tr><td>picktree/cascade</td><td></td></tr><tr><td>text</td><td></td></tr><tr><td>textinput</td><td></td></tr><tr><td>textinputarea</td><td></td></tr><tr><td>objpicker</td><td>暂未实现</td></tr><tr><td>objmultipicker</td><td>暂未实现</td></tr></tbody></table><h1 id="ui样例说明" tabindex="-1">UI样例说明 <a class="header-anchor" href="#ui样例说明" aria-label="Permalink to &quot;UI样例说明&quot;">​</a></h1><h2 id="web端基本说明" tabindex="-1">Web端基本说明 <a class="header-anchor" href="#web端基本说明" aria-label="Permalink to &quot;Web端基本说明&quot;">​</a></h2><p>对于web端来说，控件基本都有readonly，normal，hover，highlight，error这几种状态，</p><p>大部分的控件的原则基本相同，基本的原则如下</p><p><strong>readonly</strong>：显示文字部分，没有边框，没有图标。</p><p><strong>normal</strong>：显示一个边框，也可能包含一个图标。</p><p><strong>hover</strong>：边框颜色加深，并且如果可以清除内容的，会在右边显示清除icon。</p><p><strong>highlight</strong>：边框会在hover的基础上加上阴影。</p><p><strong>error</strong>：边框颜色变为红色，显示一个错误标记，点击可以弹出具体的错误信息。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%80%9A%E7%94%A8%E8%AF%B4%E6%98%8E.png" alt=""></p><p><em>也有部分控件的部分样式不同，会在下方具体说明。</em></p><h2 id="输入类" tabindex="-1">输入类 <a class="header-anchor" href="#输入类" aria-label="Permalink to &quot;输入类&quot;">​</a></h2><p>这类控件通常使用键盘输入，包括文本输入，电话输入，大文本框，数字输入等，这些控件当内容过多时会做打点处理。</p><h3 id="非数字输入" tabindex="-1">非数字输入 <a class="header-anchor" href="#非数字输入" aria-label="Permalink to &quot;非数字输入&quot;">​</a></h3><p>这类文本输入对齐方式默认为左对齐。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E8%BE%93%E5%85%A5%E7%B1%BB.png" alt=""></p><p>样式分别为normal，readonly，error。下方的所有样例都是如此。</p><h3 id="数字输入" tabindex="-1">数字输入 <a class="header-anchor" href="#数字输入" aria-label="Permalink to &quot;数字输入&quot;">​</a></h3><p>数字的对齐默认为右对齐，且数字范围输入控件会显示两个独立的输入框。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E6%95%B0%E5%AD%97%E8%BE%93%E5%85%A5.png" alt=""></p><h3 id="日期输入" tabindex="-1">日期输入 <a class="header-anchor" href="#日期输入" aria-label="Permalink to &quot;日期输入&quot;">​</a></h3><p>日期作为一个特殊的输入，输入时有图标标记，同时支持时间区间的选择样式。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E6%97%A5%E6%9C%9F%E8%BE%93%E5%85%A5.png" alt=""></p><h2 id="选择类" tabindex="-1">选择类 <a class="header-anchor" href="#选择类" aria-label="Permalink to &quot;选择类&quot;">​</a></h2><p>选择类的控件通常右边会有一个对应的图标，目前除了人员和对象有特殊图标外，其他的均为一个向下箭头。</p><h3 id="单选" tabindex="-1">单选 <a class="header-anchor" href="#单选" aria-label="Permalink to &quot;单选&quot;">​</a></h3><p>如果选项内容国长，打点</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%80%89%E6%8B%A9%E7%B1%BB.png" alt=""></p><h3 id="多选" tabindex="-1">多选 <a class="header-anchor" href="#多选" aria-label="Permalink to &quot;多选&quot;">​</a></h3><p>选择类控件通常还会有多选的场景，当多选时其样式会很不一样，会显示一个添加按钮，用于添加选项。同时选项会有背景色，hover时会显示删除按钮。</p><p>如果内容过多可以换行。控件的placeholder文本会显示添加按钮中。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%80%89%E6%8B%A9%E7%B1%BB_%E5%8D%95%E9%80%89%E5%A4%9A%E9%80%89.png" alt=""></p><h2 id="特殊类" tabindex="-1">特殊类 <a class="header-anchor" href="#特殊类" aria-label="Permalink to &quot;特殊类&quot;">​</a></h2><p>还有一些控件，由于其各种特性使得其显示方式会比较特殊，列举如下</p><h3 id="勾选按钮" tabindex="-1">勾选按钮 <a class="header-anchor" href="#勾选按钮" aria-label="Permalink to &quot;勾选按钮&quot;">​</a></h3><p>由于勾选按钮不会存在error状态，因此只有可输入和只读两种样式如下：</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E5%8B%BE%E9%80%89.png" alt=""></p><h3 id="地址" tabindex="-1">地址 <a class="header-anchor" href="#地址" aria-label="Permalink to &quot;地址&quot;">​</a></h3><p>地址由于在只读时也能点击查看地图详情，因此只读时会显示一个图标。</p><p>如果显示不下地址，打点。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E5%9C%B0%E5%9D%80.png" alt=""></p><h3 id="照片" tabindex="-1">照片 <a class="header-anchor" href="#照片" aria-label="Permalink to &quot;照片&quot;">​</a></h3><p>web端也支持使用photo控件上传图片，样式类似于多选，过多的图片可以换行。</p><p>如果已经达到照片数量的上限将不再显示添加按钮。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E7%85%A7%E7%89%87.png" alt=""></p><h3 id="附件" tabindex="-1">附件 <a class="header-anchor" href="#附件" aria-label="Permalink to &quot;附件&quot;">​</a></h3><p>附件由于可能很大，并且支持下载，因此有多种显示的状态，并且一个附件占一行，如果已经达到附件数量的上限将不再显示上传按钮，具体参看如下</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/Basic%E6%8E%A7%E4%BB%B6%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F-%E5%9F%BA%E7%A1%80%E6%A0%B7%E5%BC%8F_%E9%99%84%E4%BB%B6.png" alt=""></p>',54),p=[o];function E(i,n,c,h,B,l){return a(),r("div",null,p)}const u=t(d,[["render",E]]);export{A as __pageData,u as default};
