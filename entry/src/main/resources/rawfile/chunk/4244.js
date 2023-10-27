/*! For license information please see 4244.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4244],{"63682":function(e,t,n){n.d(t,{"Z":function(){return x}});var a=n(82163),i=n(6676),r=n(65599),c=n(97150),s=n(77483),o=n(26380),l=n(21065),u=n(34465),d=n(38036),p=n(91753),f=n(66658),h=function(e){(0,c.Z)(Index,e);var t=(0,s.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,o.Z)((0,r.Z)(e),"state",{}),(0,o.Z)((0,r.Z)(e),"stringify",(function(e){var t=new Map,n=JSON.stringify(e,(function(e,n){if(void 0===n)return"undefined";if("object"===(0,p.Z)(n)&&null!==n){if(t.has(n))return;t.set(n,n)}return n}));return t.clear(),n})),e}return(0,i.Z)(Index,[{"key":"render","value":function render(){var e=this.props,t=e.testApi,n=e.callbackRes;return(0,f.jsx)(d.View,{"className":"callback-content","children":(0,f.jsx)(d.View,{"className":"callback-res","id":"".concat(t,"-callback"),"children":this.stringify(n)})})}}]),Index}(l.Component),x=function(e){(0,c.Z)(Index,e);var t=(0,s.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,o.Z)((0,r.Z)(e),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,o.Z)((0,r.Z)(e),"changeData",(function(t,n){var a=e.state.inputData;try{a[n]=JSON.parse(t.detail.value)}catch(e){a[n]=t.detail.value}e.setState({"inputData":a})})),(0,o.Z)((0,r.Z)(e),"submitData",(function(e,t,n){null!=t.func&&("string"==typeof e?(0,u.CF)({"icon":"error","title":"请检查参数格式"}):null==e?t.func(n):t.func(n,e))})),(0,o.Z)((0,r.Z)(e),"minusHidden",(function(){var t=e.state.hiddenNum;t>0?e.setState({"hiddenNum":t-1}):(0,u.CF)({"title":"已全部显示"})})),(0,o.Z)((0,r.Z)(e),"addHidden",(function(){var t=e.state.hiddenNum;t<e.props.buttonList.length?e.setState({"hiddenNum":t+1}):(0,u.CF)({"title":"已全部隐藏"})})),(0,o.Z)((0,r.Z)(e),"hideTextarea",(function(t){var n=e.state.textareaControl;n[t]=!n[t],e.setState({"textareaControl":n})})),(0,o.Z)((0,r.Z)(e),"isAdvancedAPI",(function(e){try{return asAPIMap.get(e)}catch(e){return!1}})),e}return(0,i.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.buttonList,t=[],n=[];e.forEach((function(e){e.inputData?t.push(e.inputData):t.push(void 0),n.push(!0)})),this.setState({"inputData":t})}},{"key":"render","value":function render(){var e=this,t=this.props.buttonList,n=this.state,a=n.inputData,i=n.textareaControl,r=n.hiddenNum;return(0,f.jsxs)(d.View,{"className":"button-list","children":[(0,f.jsxs)(d.View,{"className":"hidden-control","children":[(0,f.jsx)(d.Text,{"children":"隐藏按钮"}),(0,f.jsxs)(d.View,{"className":"stepper","children":[(0,f.jsx)(d.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,f.jsx)(d.View,{"className":"stepper-num","children":r}),(0,f.jsx)(d.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),t.map((function(t,n){return(0,f.jsxs)(d.View,{"className":"api-page-btn-area ".concat(n<r?"api-page-btn-area-hidden":""),"children":[null!=a[n]?(0,f.jsxs)(d.View,{"className":"api-textarea-area","children":[(0,f.jsx)(d.Textarea,{"className":"api-input-area ".concat(i[n]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(t.id,"-input"),"value":"string"==typeof a[n]?a[n]:JSON.stringify(a[n],null,2),"onInput":function onInput(t){e.changeData(t,n)}}),(0,f.jsx)(d.View,{"className":"textarea-control","onClick":function onClick(){e.hideTextarea(n)},"children":i[n]?"+":"-"})]}):"",(0,f.jsxs)(d.View,{"className":"api-page-btn ".concat(null==t.func?"api-page-btn-uncreate":""," ").concat(e.isAdvancedAPI(t.id)?"api-page-btn-advanced":""),"id":t.id,"onClick":function onClick(){e.submitData(a[n],t,n)},"children":[t.id,null!=t.callbackRes?(0,f.jsx)(h,{"testApi":t.id,"callbackRes":t.callbackRes}):""]})]},t.id)}))]})}}]),Index}(l.Component)},"84244":function(e,t,n){n.r(t),n.d(t,{"default":function(){return x}});var a=n(82163),i=n(6676),r=n(65599),c=n(97150),s=n(77483),o=n(26380),l=n(21065),u=n(31533),d=n(38036),p=n(49141),f=n(63682),h=n(66658),x=function(e){(0,c.Z)(Index,e);var t=(0,s.Z)(Index);function Index(){var e;(0,a.Z)(this,Index);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,o.Z)((0,r.Z)(e),"state",{"list":[{"id":"getMenuButtonBoundingClientRect","func":function func(t){p.n.consoleTest("Taro.getMenuButtonBoundingClientRect");var n=(0,u.z)();p.n.consoleResult.call((0,r.Z)(e),n,t)}}],"style":{"top":0,"left":0}}),e}return(0,i.Z)(Index,[{"key":"onLoad","value":function onLoad(){try{var e=(0,u.z)();this.setState({"style":{"top":"".concat(e.top,"px"),"left":"".concat(e.right-87,"px"),"position":"relative","marginBottom":"50px","width":"87px","borderRadius":"".concat(e.height,"px"),"height":"".concat(e.height,"px"),"fontSize":"16fp"}})}catch(e){console.log("getMenuButtonBoundingClientRect failed")}}},{"key":"render","value":function render(){var e=this.state,t=e.list,n=e.style;return(0,h.jsxs)(h.Fragment,{"children":[(0,h.jsx)(d.View,{"className":"capsule-btn","style":n,"children":"胶囊"}),(0,h.jsx)(d.View,{"className":"api-page","children":(0,h.jsx)(f.Z,{"buttonList":t})})]})}}]),Index}(l.Component)},"1834":function(e,t,n){var a=n(21065),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var a,r={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,a)&&!o.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{"$$typeof":i,"type":e,"key":l,"ref":u,"props":r,"_owner":s.current}}t.Fragment=r,t.jsx=q,t.jsxs=q},"66658":function(e,t,n){e.exports=n(1834)}}]);