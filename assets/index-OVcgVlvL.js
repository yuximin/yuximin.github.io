import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang-B0nr8NRe.js";import{d as y,i as v,o as m,e as d,g as s,F as $,j as w,n as b,t as p,f as _,_ as j,a as B,p as u,c as I,w as n,k as S,r as e}from"./app-CgAwNXzm.js";import{o as D}from"./index-C7yU5XnD.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-D7tZ3qix.js";import"./YunCard.vue_vue_type_script_setup_true_lang-9u9PpYwB.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-DLZNHkPW.js";const E={class:"links"},L={class:"link-items"},N=["href","title"],V={class:"link-left"},x=["src","alt"],z={class:"link-info",m:"l-2"},C={class:"link-blog",font:"serif black"},F={class:"link-desc"},O=y({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(c){const o=c,{data:r}=v(o.links,o.random);function i(a){D(a,o.errorImg)}return(a,l)=>(m(),d("div",E,[s("ul",L,[(m(!0),d($,null,w(_(r),(t,f)=>(m(),d("li",{key:f,class:"link-item",style:b(`--primary-color: ${t.color}`)},[s("a",{class:"link-url",p:"x-4 y-2",href:t.url,title:t.name,alt:"portrait",rel:"friend",target:"_blank"},[s("div",V,[s("img",{class:"link-avatar",width:"64",height:"64",w:"16",h:"16",loading:"lazy",src:t.avatar,alt:t.name,onError:i},null,40,x)]),s("div",z,[s("div",C,p(t.blog),1),s("div",F,p(t.desc),1)])],8,N)],4))),128))])]))}}),R=j(O,[["__scopeId","data-v-64ff5004"]]),q={__name:"index",setup(c,{expose:o}){const r=JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/home/runner/work/yuximin.github.io/yuximin.github.io/pages/links/index.md","lastUpdated":1708951579000}'),i=B(),a=r.frontmatter||{};i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},r.frontmatter||{}),u("pageData",r),u("valaxy:frontmatter",a),globalThis.$frontmatter=a;const l={title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",links:"https://www.yunyoujun.cn/friends/links.json",random:!0};return o({frontmatter:l}),(t,f)=>{const h=R,k=g;return m(),I(k,{frontmatter:_(a)},{"main-content-md":n(()=>[S(h,{links:l.links,random:l.random},null,8,["links","random"])]),"main-header":n(()=>[e(t.$slots,"main-header")]),"main-header-after":n(()=>[e(t.$slots,"main-header-after")]),"main-nav":n(()=>[e(t.$slots,"main-nav")]),"main-content":n(()=>[e(t.$slots,"main-content")]),"main-content-after":n(()=>[e(t.$slots,"main-content-after")]),"main-nav-before":n(()=>[e(t.$slots,"main-nav-before")]),"main-nav-after":n(()=>[e(t.$slots,"main-nav-after")]),comment:n(()=>[e(t.$slots,"comment")]),footer:n(()=>[e(t.$slots,"footer")]),aside:n(()=>[e(t.$slots,"aside")]),"aside-custom":n(()=>[e(t.$slots,"aside-custom")]),default:n(()=>[e(t.$slots,"default")]),_:3},8,["frontmatter"])}}};export{q as default};
