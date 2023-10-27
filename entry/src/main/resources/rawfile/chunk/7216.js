/*! For license information please see 7216.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7216],{"63682":function(n,e,t){t.d(e,{"Z":function(){return Z}});var c=t(82163),a=t(6676),o=t(65599),i=t(97150),l=t(77483),s=t(26380),u=t(21065),r=t(34465),f=t(38036),d=t(91753),p=t(66658),h=function(n){(0,i.Z)(Index,n);var e=(0,l.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a)),(0,s.Z)((0,o.Z)(n),"state",{}),(0,s.Z)((0,o.Z)(n),"stringify",(function(n){var e=new Map,t=JSON.stringify(n,(function(n,t){if(void 0===t)return"undefined";if("object"===(0,d.Z)(t)&&null!==t){if(e.has(t))return;e.set(t,t)}return t}));return e.clear(),t})),n}return(0,a.Z)(Index,[{"key":"render","value":function render(){var n=this.props,e=n.testApi,t=n.callbackRes;return(0,p.jsx)(f.View,{"className":"callback-content","children":(0,p.jsx)(f.View,{"className":"callback-res","id":"".concat(e,"-callback"),"children":this.stringify(t)})})}}]),Index}(u.Component),Z=function(n){(0,i.Z)(Index,n);var e=(0,l.Z)(Index);function Index(){var n;(0,c.Z)(this,Index);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a)),(0,s.Z)((0,o.Z)(n),"state",{"inputData":[],"textareaControl":[],"hiddenNum":0}),(0,s.Z)((0,o.Z)(n),"changeData",(function(e,t){var c=n.state.inputData;try{c[t]=JSON.parse(e.detail.value)}catch(n){c[t]=e.detail.value}n.setState({"inputData":c})})),(0,s.Z)((0,o.Z)(n),"submitData",(function(n,e,t){null!=e.func&&("string"==typeof n?(0,r.CF)({"icon":"error","title":"请检查参数格式"}):null==n?e.func(t):e.func(t,n))})),(0,s.Z)((0,o.Z)(n),"minusHidden",(function(){var e=n.state.hiddenNum;e>0?n.setState({"hiddenNum":e-1}):(0,r.CF)({"title":"已全部显示"})})),(0,s.Z)((0,o.Z)(n),"addHidden",(function(){var e=n.state.hiddenNum;e<n.props.buttonList.length?n.setState({"hiddenNum":e+1}):(0,r.CF)({"title":"已全部隐藏"})})),(0,s.Z)((0,o.Z)(n),"hideTextarea",(function(e){var t=n.state.textareaControl;t[e]=!t[e],n.setState({"textareaControl":t})})),(0,s.Z)((0,o.Z)(n),"isAdvancedAPI",(function(n){try{return asAPIMap.get(n)}catch(n){return!1}})),n}return(0,a.Z)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var n=this.props.buttonList,e=[],t=[];n.forEach((function(n){n.inputData?e.push(n.inputData):e.push(void 0),t.push(!0)})),this.setState({"inputData":e})}},{"key":"render","value":function render(){var n=this,e=this.props.buttonList,t=this.state,c=t.inputData,a=t.textareaControl,o=t.hiddenNum;return(0,p.jsxs)(f.View,{"className":"button-list","children":[(0,p.jsxs)(f.View,{"className":"hidden-control","children":[(0,p.jsx)(f.Text,{"children":"隐藏按钮"}),(0,p.jsxs)(f.View,{"className":"stepper","children":[(0,p.jsx)(f.View,{"className":"normal","onClick":this.minusHidden,"children":"-"}),(0,p.jsx)(f.View,{"className":"stepper-num","children":o}),(0,p.jsx)(f.View,{"className":"normal","onClick":this.addHidden,"children":"+"})]})]}),e.map((function(e,t){return(0,p.jsxs)(f.View,{"className":"api-page-btn-area ".concat(t<o?"api-page-btn-area-hidden":""),"children":[null!=c[t]?(0,p.jsxs)(f.View,{"className":"api-textarea-area","children":[(0,p.jsx)(f.Textarea,{"className":"api-input-area ".concat(a[t]?"api-input-area-hidden":""),"maxlength":-1,"id":"".concat(e.id,"-input"),"value":"string"==typeof c[t]?c[t]:JSON.stringify(c[t],null,2),"onInput":function onInput(e){n.changeData(e,t)}}),(0,p.jsx)(f.View,{"className":"textarea-control","onClick":function onClick(){n.hideTextarea(t)},"children":a[t]?"+":"-"})]}):"",(0,p.jsxs)(f.View,{"className":"api-page-btn ".concat(null==e.func?"api-page-btn-uncreate":""," ").concat(n.isAdvancedAPI(e.id)?"api-page-btn-advanced":""),"id":e.id,"onClick":function onClick(){n.submitData(c[t],e,t)},"children":[e.id,null!=e.callbackRes?(0,p.jsx)(h,{"testApi":e.id,"callbackRes":e.callbackRes}):""]})]},e.id)}))]})}}]),Index}(u.Component)},"17216":function(n,e,t){t.r(e),t.d(e,{"default":function(){return x}});var c=t(24497),a=t(82163),o=t(6676),i=t(65599),l=t(97150),s=t(77483),u=t(26380),r=t(21065),f=t(34465),d=t(38036),p=t(63682),h=t(49141),Z=t(85208),m=t(66658),x=function(n){(0,l.Z)(Index,n);var e=(0,s.Z)(Index);function Index(){var n;(0,a.Z)(this,Index);for(var t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return n=e.call.apply(e,[this].concat(o)),(0,u.Z)((0,i.Z)(n),"state",{"list":[{"id":"showToast","inputData":{"title":"showToast","duration":1e4,"icon":"success","image":Z,"mask":!1},"func":function func(e,t){h.n.consoleTest("showToast"),(0,f.CF)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"hideToast","inputData":{"noConflict":!1},"func":function func(e,t){h.n.consoleTest("hideToast"),(0,f.PE)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"showLoading","inputData":{"title":"加载中","mask":!1},"func":function func(e,t){h.n.consoleTest("showLoading"),(0,f.QP)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"hideLoading","inputData":{"noConflict":!1},"func":function func(e,t){h.n.consoleTest("hideLoading"),(0,f.Zk)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"showModal","inputData":{"title":"提示","content":"这是一个模态弹窗","showCancel":!0,"cancelColor":"#f00","cancelText":"取消","confirmColor":"#0f0","confirmText":"确认"},"func":function func(e,t){h.n.consoleTest("showModal"),(0,f.K4)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"showActionSheet","inputData":{"alertText":"警示文案","itemList":["ActionA","ActionB","ActionC"],"itemColor":"#0f0"},"func":function func(e,t){h.n.consoleTest("showActionSheet"),(0,f.Cy)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){(0,f.CF)({"title":"选择项目：".concat(t.tapIndex),"icon":"success"}),h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){(0,f.CF)({"title":"失败：".concat(t.errMsg),"icon":"error"}),h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"enableAlertBeforeUnload","inputData":{"message":"空实现"},"func":function func(e,t){h.n.consoleTest("Taro.enableAlertBeforeUnload"),(0,f.WL)((0,c.Z)((0,c.Z)({},t),{},{"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}}))}},{"id":"disableAlertBeforeUnload","func":function func(e){h.n.consoleTest("Taro.disableAlertBeforeUnload"),(0,f.nG)({"success":function success(t){h.n.consoleSuccess.call((0,i.Z)(n),t,e)},"fail":function fail(t){h.n.consoleFail.call((0,i.Z)(n),t,e)},"complete":function complete(t){h.n.consoleComplete.call((0,i.Z)(n),t,e)}})}}]}),n}return(0,o.Z)(Index,[{"key":"render","value":function render(){var n=this.state.list;return(0,m.jsx)(d.View,{"className":"api-page","children":(0,m.jsx)(p.Z,{"buttonList":n})})}}]),Index}(r.Component)},"1834":function(n,e,t){var c=t(21065),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(n,e,t){var c,o={},u=null,r=null;for(c in void 0!==t&&(u=""+t),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(r=e.ref),e)i.call(e,c)&&!s.hasOwnProperty(c)&&(o[c]=e[c]);if(n&&n.defaultProps)for(c in e=n.defaultProps)void 0===o[c]&&(o[c]=e[c]);return{"$$typeof":a,"type":n,"key":u,"ref":r,"props":o,"_owner":l.current}}e.Fragment=o,e.jsx=q,e.jsxs=q},"66658":function(n,e,t){n.exports=t(1834)}}]);