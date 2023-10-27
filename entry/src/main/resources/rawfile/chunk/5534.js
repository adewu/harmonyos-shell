/*! For license information please see 5534.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5534],{"63682":function(e,n,t){t.d(n,{"Z":function(){return x}});var a=t(82163),r=t(6676),i=t(65599),s=t(97150),c=t(77483),l=t(26380),o=t(21065),u=t(34465),d=t(38036),p=t(91753),f=t(66658),h=function(e){(0,s.Z)(Index,e);var n=(0,c.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=n.call.apply(n,[this].concat(r)),(0,l.Z)((0,i.Z)(e),"state",{}),(0,l.Z)((0,i.Z)(e),"stringify",(function(e){var n=new Map,t=JSON.stringify(e,(function(e,t){if(void 0===t)return"undefined";if("object"===(0,p.Z)(t)&&null!==t){if(n.has(t))return;n.set(t,t)}return t}));return n.clear(),t})),e}return(0,r.Z)(Index,[{"key":"render","value":function render(){var e=this.props,n=e.testApi,t=e.callbackRes;return(0,f.jsx)(d.View,{"className":"callback-content","children":(0,f.jsx)(d.View,{"className":"callback-res","id":"".concat(n,"-callback"),"children":this.stringify(t)})})}}]),Index}(o.Component),x=function(e){(0,s.Z)(Index,e);var n=(0,c.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=n.call.apply(n,[this].concat(r)),(0,l.Z)((0,i.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,l.Z)((0,i.Z)(e),"changeData",(function(n,t){var a=e.state.inputData;try{a[t]=JSON.parse(n.detail.value)}catch(e){a[t]=n.detail.value}e.setState({"inputData":a})})),(0,l.Z)((0,i.Z)(e),"submitData",(function(e,n,t){null!=n.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?n.func(t):n.func(t,e))})),(0,l.Z)((0,i.Z)(e),"minusHidden",(function(){var n=e.state.hiddenNum;n>0?e.setState({"hiddenNum":n-1}):(0,u.CF)({"title":"已全部显示"})})),(0,l.Z)((0,i.Z)(e),"addHidden",(function(){var n=e.state.hiddenNum;n<e.props.buttonList.length?e.setState({"hiddenNum":n+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,l.Z)((0,i.Z)(e),"hideTextarea",(function(n){var t=e.state.textareaControl;t[n]=!t[n],e.setState({"textareaControl":t})})),(0,l.Z)((0,i.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,r.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,n=[],t=[];e.forEach((function(e){e.inputData?n.push(e.inputData):n.push(void 0),t.push(!0)})),this.setState({"inputData":n})}},{"key":"render","value":function render(){var e=this,n=this.props.buttonList,t=this.state,a=t.inputData,r=t.textareaControl,i=t.hiddenNum;return(0,f.jsxs)(d.View,{"className":"button-list","children":[(0,f.jsxs)(d.View,{"className":"hidden-control","children":[(0,f.jsx)(d.Text,{"children":"隐藏按钮"}),(0,f.jsxs)(d.View,{"className":"stepper","children":[(0,f.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,f.jsx)(d.View,{"className":"stepper-num","children":i}),(0,f.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),n.map((function(n,t){return(0,f.jsxs)(d.View,{"className":"api-page-btn-area ".concat(t<i?"api-page-btn-area-hidden":""),"children":[null!=a[t]?(0,f.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,f.jsx)(d.Textarea,{"className":"api-input-area ".concat(r[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(n.id,"-input"),"value":"string"==typeof a[t]?a[t]:JSON.stringify(a[t],null,2),"onInput":function onInput(n){e.changeData(n,t)}}),(0,f.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(t)},"children":r[t]?"+":"-"})]}):"",(0,f.jsxs)(d.View,{"className":"api-page-btn ".concat(null==n.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(n.id)?"api-page-btn-advanced":""),"id":n.id,"onClick":function onClick(){e.submitData(a[t],n,t)},"children":[n.id,null!=n.callbackRes?(0,f.jsx)(h,{"testApi":n.id,"callbackRes":n.callbackRes}):""]})]},n.id)}))]})}}]),Index}(o.Component)},"15534":function(e,n,t){t.r(n),t.d(n,{"default":function(){return f}});var a=t(82163),r=t(6676),i=t(65599),s=t(97150),c=t(77483),l=t(26380),o=t(21065),u=t(38036),d=t(63682),p=t(66658),f=function(e){(0,s.Z)(Index,e);var n=(0,c.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=n.call.apply(n,[this].concat(r)),(0,l.Z)((0,i.Z)(e),"state",{"list":[{"id":"createWorker","func":null},{"id":"Worker","func":null}]}),e}return(0,r.Z)(Index,[{"key":"render","value":function render(){var e=this.state.list;return(0,p.jsx)(u.View,{"className":"api-page","children":(0,p.jsx)(d.Z,{"buttonList":e})})}}]),Index}(o.Component)},"1834":function(e,n,t){var a=t(21065),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var a,i={},o=null,u=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,a)&&!l.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{"$$typeof":r,"type":e,"key":o,"ref":u,"props":i,"_owner":c.current}}n.Fragment=i,n.jsx=q,n.jsxs=q},"66658":function(e,n,t){e.exports=t(1834)}}]);