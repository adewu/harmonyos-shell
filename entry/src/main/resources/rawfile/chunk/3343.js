/*! For license information please see 3343.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3343],{"45177":function(e,n,a){a.d(n,{"Z":function(){return p}});var t=a(82163),r=a(6676),s=a(97150),o=a(77483),i=a(26380),l=a(21065),c=a(38036),d=a(66658),p=function(e){(0,s.Z)(ComponentState,e);var n=(0,o.Z)(ComponentState);function ComponentState(){return(0,t.Z)(this,ComponentState),n.apply(this,arguments)}return(0,r.Z)(ComponentState,[{"key":"render","value":function render(){return(0,d.jsxs)(c.View,{"className":"page-state","children":[(0,d.jsxs)(c.View,{"className":"page-state-platform","children":["组件类型：",this.props.platform]}),(0,d.jsxs)(c.View,{"className":"page-state-rate","children":["适配进度：",this.props.rate,"%"]})]})}}]),ComponentState}(l.Component);(0,i.Z)(p,"options",{"addGlobalClass":!0})},"74565":function(e,n,a){a.d(n,{"Z":function(){return p}});var t=a(82163),r=a(6676),s=a(97150),o=a(77483),i=a(26380),l=a(21065),c=a(38036),d=a(66658),p=function(e){(0,s.Z)(Header,e);var n=(0,o.Z)(Header);function Header(){return(0,t.Z)(this,Header),n.apply(this,arguments)}return(0,r.Z)(Header,[{"key":"render","value":function render(){return(0,d.jsxs)(c.View,{"className":"page-head","children":[(0,d.jsx)(c.View,{"className":"page-head-title","children":this.props.title}),(0,d.jsx)(c.View,{"className":"page-head-line"}),this.props.desc?(0,d.jsx)(c.View,{"className":"page-head-desc","children":this.props.desc}):null]})}}]),Header}(l.Component);(0,i.Z)(p,"options",{"addGlobalClass":!0})},"73343":function(e,n,a){a.r(n),a.d(n,{"default":function(){return PageView}});var t=a(37e3),r=a(38036),s=a(44133),o=a(21065),i=a(74565),l=a(45177),c=a(66658),d=[{"key":"apple","name":"苹果"},{"key":"banana","name":"香蕉"},{"key":"peach","name":"桃子"}];function PageView(){s.ZP.useLoad((function(){console.log("Page loaded.")}));var e=(0,o.useState)(null),n=(0,t.Z)(e,2),a=n[0],p=n[1];return(0,c.jsxs)(r.View,{"className":"components-page","children":[(0,c.jsxs)(r.View,{"className":"components-page__header","children":[(0,c.jsx)(i.Z,{"title":"RadioGroup"}),(0,c.jsx)(l.Z,{"platform":"H5","rate":"100","children":" "})]}),(0,c.jsx)(r.View,{"className":"index","children":(0,c.jsxs)(r.RadioGroup,{"name":"选择水果","onChange":function onChange(e){p(e.detail.value)},"children":[(0,c.jsx)("h3",{"children":"单选："}),d.map((function(e){var n=a==e.key;return(0,c.jsxs)("div",{"className":"furit-item","children":[(0,c.jsx)(r.Radio,{"id":e.key,"value":e.key,"checked":n,"hidden":!0}),(0,c.jsx)("div",{"className":n?"furit-selected":"furit-normal"}),(0,c.jsx)(r.Label,{"for":e.key,"children":e.name})]},e.key)}))]})})]})}},"1834":function(e,n,a){var t=a(21065),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,a){var t,s={},c=null,d=null;for(t in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{"$$typeof":r,"type":e,"key":c,"ref":d,"props":s,"_owner":i.current}}n.Fragment=s,n.jsx=q,n.jsxs=q},"66658":function(e,n,a){e.exports=a(1834)}}]);