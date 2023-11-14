import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.aac09c5f.js";const f=JSON.parse('{"title":"ArrayCtrl 数组型控件","description":"","frontmatter":{"title":"ArrayCtrl 数组型控件","date":"2020-05-09T17:29:26.000Z"},"headers":[],"relativePath":"doc/wpdoc/ArrayCtrl 数组型控件.md","filePath":"doc/wpdoc/ArrayCtrl 数组型控件.md"}'),l={name:"doc/wpdoc/ArrayCtrl 数组型控件.md"},i=r('<h1 id="arrayctrl-数组型控件" tabindex="-1">ArrayCtrl 数组型控件 <a class="header-anchor" href="#arrayctrl-数组型控件" aria-label="Permalink to &quot;ArrayCtrl 数组型控件&quot;">​</a></h1><hr><p>指像List、Table之类的由数组型数据驱动显示的控件</p><p>数组型控件的相关flycode主要分为一下几类：</p><h3 id="数据获取" tabindex="-1">数据获取 <a class="header-anchor" href="#数据获取" aria-label="Permalink to &quot;数据获取&quot;">​</a></h3><blockquote><p>-</p></blockquote><h2 id="数据设置" tabindex="-1">数据设置 <a class="header-anchor" href="#数据设置" aria-label="Permalink to &quot;数据设置&quot;">​</a></h2><h3 id="多个分组的数组型控件" tabindex="-1">多个分组的数组型控件 <a class="header-anchor" href="#多个分组的数组型控件" aria-label="Permalink to &quot;多个分组的数组型控件&quot;">​</a></h3><ul><li><p>reloadData(data, setter) 重新设置全部数据</p></li><li><p>insertData(data, setter, indexPaths) 插入多条数据到指定的indexPath</p></li><li><p>updateData(data, setter, indexPaths) 更新多条数据到指定的indexPath</p></li></ul><h3 id="单个分组的数组型控件" tabindex="-1">单个分组的数组型控件 <a class="header-anchor" href="#单个分组的数组型控件" aria-label="Permalink to &quot;单个分组的数组型控件&quot;">​</a></h3><h4 id="设置数据" tabindex="-1">设置数据 <a class="header-anchor" href="#设置数据" aria-label="Permalink to &quot;设置数据&quot;">​</a></h4><ul><li><p>reload(rowsData, setter) 重新设置全部数据</p></li><li><p>insert(rowsData, indexes, setter) 插入多条数据到指定的index</p></li><li><p>append(rowsData, head/tail, setter) 插入多条数据到头部或者尾部</p></li><li><p>update(rowsData, indexes, setter) 更新多条数据到指定的index</p></li><li><p>delete(indexes) 删除指定位置的行</p></li><li><p>deleteInScope(all/checked/focus/modified) 删除指定范围内的数据</p></li><li><p>deleteInScopeReverse(all/checked/focus/modified) 删除指定范围外的数据</p></li></ul><h4 id="获取数据" tabindex="-1">获取数据 <a class="header-anchor" href="#获取数据" aria-label="Permalink to &quot;获取数据&quot;">​</a></h4><ul><li><p>getInScope(all/checked/focus/modified) 获取指定范围内的数据</p></li><li><p>getInScopeReverse(all/checked/focus/modified) 获取指定范围外的数据</p></li></ul><h4 id="控件操作" tabindex="-1">控件操作 <a class="header-anchor" href="#控件操作" aria-label="Permalink to &quot;控件操作&quot;">​</a></h4><ul><li>setLoadStatus(statusType) 手动设置控件的加载状态</li></ul>',16),o=[i];function d(s,c,n,h,p,u){return e(),t("div",null,o)}const m=a(l,[["render",d]]);export{f as __pageData,m as default};
