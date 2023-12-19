import{_ as t,o as d,c as e,R as r}from"./chunks/framework.E9w9IFh5.js";const u=JSON.parse('{"title":"数组控件对象","description":"","frontmatter":{"title":"数组控件对象","date":"2020-05-19T19:04:25.000Z"},"headers":[],"relativePath":"doc/wpdoc/数组控件对象.md","filePath":"doc/wpdoc/数组控件对象.md"}'),a={name:"doc/wpdoc/数组控件对象.md"},o=r('<h1 id="数组控件对象" tabindex="-1">数组控件对象 <a class="header-anchor" href="#数组控件对象" aria-label="Permalink to &quot;数组控件对象&quot;">​</a></h1><p>针对数组类控件（如list、table等）的操作</p><h2 id="数组控件属性" tabindex="-1">数组控件属性 <a class="header-anchor" href="#数组控件属性" aria-label="Permalink to &quot;数组控件属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>checkedNumber</td><td>勾选行数</td><td></td></tr><tr><td>pageIndex</td><td>当前页码</td><td></td></tr><tr><td>rowNumber</td><td>总行数</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><a href="http://apaas.wxchina.com:8881/technology/113/" title="[【详情】]" target="_blank" rel="noreferrer">[【详情】]</a></p><h2 id="数组控件操作" tabindex="-1">数组控件操作 <a class="header-anchor" href="#数组控件操作" aria-label="Permalink to &quot;数组控件操作&quot;">​</a></h2><h3 id="数据获取" tabindex="-1">数据获取 <a class="header-anchor" href="#数据获取" aria-label="Permalink to &quot;数据获取&quot;">​</a></h3><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>getRowNumberInSection</td><td>获取数组型控件某一分组下的行数</td><td></td></tr><tr><td>getRowAtIndexPath</td><td>获取数组型控件中某一行的行控件</td><td></td></tr><tr><td>getAllRows</td><td>获取数组型控件中所有所有的行控件</td><td></td></tr><tr><td>getCheckedRows</td><td>获取数组型控件中所有被勾选的行控件</td><td></td></tr><tr><td>getCheckedRowsIndexPath</td><td>获取列表型控件所有选中行的indexPath</td><td></td></tr><tr><td>getFocusRowIndexPath</td><td>获取数组型控件的焦点所在的行索引</td><td></td></tr><tr><td>getFocusRow</td><td>获取数组型控件的焦点行控件</td><td></td></tr><tr><td>getData</td><td>获取数组型控件中所有分组的所有数据</td><td></td></tr></tbody></table><blockquote><p>以下为新设计的数据获取方法</p></blockquote><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>getInIndexes</td><td>获取指定多行的数据</td><td></td></tr><tr><td>getInScope</td><td>获取指定范围内的数据</td><td></td></tr><tr><td>getInScopeReverse</td><td>获取指定范围外的数据</td><td></td></tr><tr><td>getInIndexesSerialized</td><td>返回 getInIndexes 的序列化数据</td><td></td></tr><tr><td>getInScopeSerialized</td><td>返回 getInScope 的序列化数据</td><td></td></tr><tr><td>getInScopeReverseSerialized</td><td>返回 getInScopeReverse 的序列化数据</td><td></td></tr><tr><td>getSerializedValue</td><td>获取全部序列化后的数据</td><td></td></tr><tr><td>getIndexesInScope</td><td>获取指定范围的行的indexes</td><td></td></tr><tr><td>getRowAtIndexes</td><td>获取指定位置的行控件对象ArrayRowCtrl</td><td></td></tr><tr><td>getColByName</td><td>获取指定名字的列控件对象ArrayColCtrl</td><td></td></tr><tr><td>getHeaderButtons</td><td>获取头部按钮栏按钮控件的Ctrl，以数组形式返回</td><td>仅信息/编辑表格支持</td></tr></tbody></table><p><a href="http://apaas.wxchina.com:8881/technology/114/" title="[【详情】]" target="_blank" rel="noreferrer">[【详情】]</a></p><h3 id="数据更新" tabindex="-1">数据更新 <a class="header-anchor" href="#数据更新" aria-label="Permalink to &quot;数据更新&quot;">​</a></h3><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>reloadRows</td><td>刷新多个行的数据</td><td></td></tr><tr><td>setData</td><td>重新加载所有数据，同updateList</td><td></td></tr><tr><td>updateList</td><td>重新加载所有分组数据</td><td></td></tr><tr><td>updateListWithOperations</td><td>批量修改数组型控件中的分组或行</td><td></td></tr><tr><td>insertRows</td><td>在指定位置连续插入若干行数据</td><td></td></tr><tr><td>deleteRows</td><td>删除数组型控件中指定行的数据</td><td></td></tr><tr><td>moveRow</td><td>把指定行索引的两行进行交换</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><blockquote><p>以下为新设计的数据更新方法</p></blockquote><table><thead><tr><th>方法</th><th>简要说明</th><th>实现情况</th></tr></thead><tbody><tr><td>reload</td><td>重新设置全部数据</td><td></td></tr><tr><td>update</td><td>更新多条数据到指定的index</td><td></td></tr><tr><td>insert</td><td>插入多条数据到指定的index</td><td></td></tr><tr><td>append</td><td>插入多条数据到头部或者尾部</td><td></td></tr><tr><td>reloadSerialized</td><td>同 reload，接受序列化数据</td><td></td></tr><tr><td>updateSerialized</td><td>同 update，接受序列化数据</td><td></td></tr><tr><td>insertSerialized</td><td>同 insert，接受序列化数据</td><td></td></tr><tr><td>appendSerialized</td><td>同 append，接受序列化数据</td><td></td></tr><tr><td>setSerializedValue</td><td>同 reloadSerialized</td><td></td></tr><tr><td>delete</td><td>删除指定位置的行</td><td></td></tr><tr><td>deleteInScope</td><td>删除指定范围内的数据</td><td></td></tr><tr><td>deleteInScopeReverse</td><td>删除指定范围外的数据</td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><a href="http://apaas.wxchina.com:8881/technology/115/" title="[【详情】]" target="_blank" rel="noreferrer">[【详情】]</a></p>',16),h=[o];function l(n,i,c,s,p,b){return d(),e("div",null,h)}const g=t(a,[["render",l]]);export{u as __pageData,g as default};
