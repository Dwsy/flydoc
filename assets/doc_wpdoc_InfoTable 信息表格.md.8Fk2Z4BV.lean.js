import{_ as p,D as e,c as h,m as s,a as i,I as n,w as l,U as t,o as k}from"./chunks/framework.FhXPyWfz.js";const W=JSON.parse('{"title":"InfoTable 信息表格","description":"","frontmatter":{"title":"InfoTable 信息表格","date":"2020-05-20T14:39:45.000Z"},"headers":[],"relativePath":"doc/wpdoc/InfoTable 信息表格.md","filePath":"doc/wpdoc/InfoTable 信息表格.md"}'),r={name:"doc/wpdoc/InfoTable 信息表格.md"},E=t("",92),d=s("thead",null,[s("tr",null,[s("th",null,"方法"),s("th",null,"简要说明"),s("th",null,"实现情况")])],-1),o=s("td",null,"获取指定范围内的数据",-1),u=s("td",null,"支持",-1),c=s("td",null,"返回 getInScope 的序列化数据",-1),g=s("td",null,"支持",-1),b=s("td",null,"获取指定范围外的数据，与getInScope相反",-1),y=s("td",null,"支持",-1),F=s("tr",null,[s("td",null,"getFocusRow"),s("td",null,"获取数组型控件的焦点行控件"),s("td",null,"支持")],-1),q=s("tr",null,[s("td",null,"getCheckedRows"),s("td",null,"获取数组型控件中所有被勾选的行控件"),s("td",null,"支持")],-1),C=s("td",null,"获取数组型控件中所有被勾选的行控件",-1),m=s("td",null,"支持",-1),B=s("tr",null,[s("td",null,"getColByName"),s("td",null,"获取指定名字的列控件对象ArrayColCtrl"),s("td",null,"支持")],-1),_=s("td",null,"获取指定多行的数据",-1),f=s("td",null,"支持",-1),v=s("td",null,"获取指定范围的行的indexes",-1),x=s("td",null,"支持",-1),A=s("td",null,"获取指定位置的行控件ArrayRowCtrl",-1),D=s("td",null,"支持",-1),w=s("tr",null,[s("td",null,"clearSelect"),s("td",null,"清空表格勾选"),s("td",null,"支持")],-1),P=s("tr",null,[s("td",null,"reload"),s("td",null,"传入表格并重新初始化表格，表格会变为假分页模式"),s("td",null,"v9.6.6+,v9.7.1+支持")],-1),I=s("tr",null,[s("td",null,"getHeaderButtons"),s("td",null,"获取顶部按钮栏的所有按钮的Ctrl"),s("td",null,"v9.7.4+支持")],-1),T=s("tr",null,[s("td",null,"samecheck"),s("td",null,"数据相似性校验"),s("td",null,"v9.7.6+支持")],-1),S=s("tr",null,[s("td",null,"selectRows"),s("td",null,"传入数据勾选表格行"),s("td",null,"v9.7.6+支持")],-1),z=t("",3),N=t("",8);function R(V,j,U,$,H,J){const a=e("font");return k(),h("div",null,[E,s("table",null,[d,s("tbody",null,[s("tr",null,[s("td",null,[i("getInScope "),n(a,null,{default:l(()=>[i("*")]),_:1})]),o,u]),s("tr",null,[s("td",null,[i("getInScopeSerialized "),n(a,null,{default:l(()=>[i("*")]),_:1})]),c,g]),s("tr",null,[s("td",null,[i("getInScopeReverse "),n(a,null,{default:l(()=>[i("*")]),_:1})]),b,y]),F,q,s("tr",null,[s("td",null,[i("getAllRows "),n(a,null,{default:l(()=>[i("*")]),_:1})]),C,m]),B,s("tr",null,[s("td",null,[i("getInIndexes "),n(a,null,{default:l(()=>[i("**")]),_:1})]),_,f]),s("tr",null,[s("td",null,[i("getIndexesInScope "),n(a,null,{default:l(()=>[i("**")]),_:1})]),v,x]),s("tr",null,[s("td",null,[i("getRowAtIndexes "),n(a,null,{default:l(()=>[i("**")]),_:1})]),A,D]),w,P,I,T,S])]),z,s("blockquote",null,[n(a,null,{default:l(()=>[i("\\*")]),_:1}),i(" 如果数据是真分页的，getAllRows或getInScope 使用 all 来获取数据时，获取到的是当前页的全部数据，而不是全部页的数据；使用假分页 all 能获取全部数据"),n(a,null,{default:l(()=>[i("\\*\\*")]),_:1}),i(" 如果数据是真分页的，getInIndexes、getIndexesInScope等根据索引获取数据的方法，索引的起点是当前页的第一条数据，而不是全部页的数据；使用假分页则能正常获取数据")]),N])}const Z=p(r,[["render",R]]);export{W as __pageData,Z as default};
