import{_ as o,C as s,o as r,c as i,k as t,a,H as l,w as d,Q as n}from"./chunks/framework.d084db19.js";const A=JSON.parse('{"title":"数据转换","description":"","frontmatter":{"title":"数据转换","date":"2023-07-19T16:38:03.000Z"},"headers":[],"relativePath":"doc/wpdoc/数据转换.md","filePath":"doc/wpdoc/数据转换.md"}'),h={name:"doc/wpdoc/数据转换.md"},p=n('<h1 id="数据转换" tabindex="-1">数据转换 <a class="header-anchor" href="#数据转换" aria-label="Permalink to &quot;数据转换&quot;">​</a></h1><p>可进行数据修改、数据集筛选、JSON转XML、数据集合并、XML转JSON五种操作</p><h2 id="_1-数据修改" tabindex="-1">1. 数据修改 <a class="header-anchor" href="#_1-数据修改" aria-label="Permalink to &quot;1\\. 数据修改&quot;">​</a></h2><p>用于对一个对象（map or list）的属性（名称，值）进行调整。同时也支持删除和新增属性。<br> 该方法适合对一个复杂对象进行少量的调整。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-1-1.png" alt=""></p><table><thead><tr><th>参数名称</th><th>参数说明</th></tr></thead><tbody><tr><td>数据来源</td><td>点击选择框选择一个参数，选择框已标识该参数的类型（map or list），对象列表只能选择map或list类型的参数，必填，默认为空值点击后会出现参数列表，供选择。</td></tr><tr><td>对象属性列表</td><td>属性列表显示属性名称，属性类型，属性值。默认状态为空列表，会依据来源对象的值来自动刷新，可进行新增属性，删除、编辑、枚举替换、恢复原属性等操作。</td></tr><tr><td>输出</td><td>输出修改后的对象属性列表，包括参数以及参数属性。</td></tr></tbody></table><h2 id="_2-数据集合并" tabindex="-1">2. 数据集合并 <a class="header-anchor" href="#_2-数据集合并" aria-label="Permalink to &quot;2\\. 数据集合并&quot;">​</a></h2><p>将两个List的数据，以指定的方式进行合并。只支持Item类型为Map的List进行浅合并。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-2-1.png" alt=""></p>',9),c=t("thead",null,[t("tr",null,[t("th",null,"参数名称"),t("th",null,"参数说明")])],-1),_=t("tr",null,[t("td",null,"List1"),t("td",null,"必填，单选，支持从环境参数中选择一个Item类型为Map的List参数。")],-1),u=t("tr",null,[t("td",null,"主键1"),t("td",null,"必填，单选，支持从List1的属性中选择一个作为合并依据的主键，只能选择number或string类型的属性。当List1的值发生改变后，需要自动更新该值。如果新选择的参数对象中含有相同的属性，则保留原值；否则清空该值。")],-1),m=t("td",null,"List2",-1),L=t("td",null,"主键2",-1),b=t("tr",null,[t("td",null,"合并方式"),t("td",null,"必填，单选，支持“Inner Join”，“Left Join”，“Left Semi Join”，“Left Anti Join”四种合并方式，默认为“Inner join”模式。所有合并方式的对比条件均为：List1.主键1 == List2.主键2。当遇到属性名冲突时，自动在List2的相应属性名后面添加 _2 的后缀名称。")],-1),f=t("tr",null,[t("td",null,"合并方式说明"),t("td",null,"Inner：返回满足对比条件的List1和List2的数据Left：返回List1的全部数据，以及满足条件的List2的数据Left Semi：返回满足对比条件的List1的数据Left Anti：返回不满足对比条件的List1的数据")],-1),S=t("tr",null,[t("td",null,"输出"),t("td",null,"根据选择的参数和合并方式，显示最终的输出数据结构。当list1行、list2行满足条件时，无需选择合并方式，默认执行Inner join，显示最终输出的数据结构。支持自动更新，即在List 1，List 2，合并方式 这三个选项的值发生变化时，自动更新输出结构。")],-1),x=n('<h2 id="_3-数据集筛选" tabindex="-1">3. 数据集筛选 <a class="header-anchor" href="#_3-数据集筛选" aria-label="Permalink to &quot;3\\. 数据集筛选&quot;">​</a></h2><p>从一个list对象中筛选出符合条件的数据集。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/image-3.png" alt=""></p><table><thead><tr><th>参数名称</th><th>参数说明</th></tr></thead><tbody><tr><td>数据来源</td><td>必填，单选，支持从环境参数中选择一个List类型的参数，作为数据的原始来源。</td></tr><tr><td>筛选条件</td><td>必填（至少一个条件），配置规则与交互，参考数据库-查询的条件设置。区别在于此处条件的左值只能从数据来源的参数属性中选择，其属性路径直接从数据来源的参数名称开始显示。</td></tr><tr><td>输出</td><td>根据选择的数据来源，显示最终的输出数据结构。最终的数据结构其实就是数据来源的结构，需要在数据来源值更新时自动同步更新。</td></tr></tbody></table><h2 id="_4-json转xml" tabindex="-1">4. JSON转XML <a class="header-anchor" href="#_4-json转xml" aria-label="Permalink to &quot;4\\. JSON转XML&quot;">​</a></h2><p>JSON是一种轻量级的数据交换格式，XML是可扩展标记语言，被设计用来传输和存储数据。<br> JSON转XML，可以将该组件节点之前节点输出的JSON格式的参数，转换成XML语言进行输出。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/json%E8%BD%AC%E6%8D%A2%E4%B8%BAxml.png" alt=""></p><table><thead><tr><th>参数名称</th><th>参数说明</th></tr></thead><tbody><tr><td>需要转换的数据</td><td>点击选择框选择一个参数，选择框提供可转换的数据列表。必填，单选，默认为空值选择后会显示数据列表。</td></tr><tr><td>输出</td><td>输出数据列表转换后的XML格式</td></tr></tbody></table><h2 id="_5-xml转json" tabindex="-1">5. XML转JSON <a class="header-anchor" href="#_5-xml转json" aria-label="Permalink to &quot;5\\. XML转JSON&quot;">​</a></h2><p>XML转JSON，可以将该组件节点之前节点输出的XML格式的参数，转换成JSON语言进行输出。</p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230719174432-1.png" alt=""></p><table><thead><tr><th>参数名称</th><th>参数说明</th></tr></thead><tbody><tr><td>XML数据</td><td>点击选择框选择一个参数，选择框提供可转换的数据列表。必填，单选，默认为空值选择后会显示数据列表。</td></tr><tr><td>生成转换结果</td><td>点击该按钮，出现转换弹窗</td></tr><tr><td>输出</td><td>输出数据列表转换后的JSON格式</td></tr></tbody></table><ol><li>输入要转换的XML内容，点击【转换】，就会输出对应的JSON格式</li><li>点击【确认】，输出区域将展示转换后的JSON格式</li></ol><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/1-7.png" alt=""></p><p><img src="http://apaas.wxchina.com:8881/wp-content/uploads/2-7.png" alt=""></p>',15);function N(g,w,J,M,O,T){const e=s("font");return r(),i("div",null,[p,t("table",null,[c,t("tbody",null,[_,u,t("tr",null,[m,t("td",null,[a("参考"),l(e,null,{default:d(()=>[a("List1")]),_:1})])]),t("tr",null,[L,t("td",null,[a("参考"),l(e,null,{default:d(()=>[a("主键1")]),_:1})])]),b,f,S])]),x])}const E=o(h,[["render",N]]);export{A as __pageData,E as default};
