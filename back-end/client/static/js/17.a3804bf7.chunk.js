/*! For license information please see 17.a3804bf7.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[17],{497:function(e,t,a){"use strict";t.a=[{label:"Laser Hair Removal",value:"Laser",url:"/lasersessions",available:!0},{label:"Permanent Makeup",value:"Makeup",url:"/makeupsessions",available:!0},{label:"Scalp Pigmentation",value:"Scalp",url:"/scalpsessions",available:!0},{label:"Skin Pigmentation",value:"Skin",url:"/skinsessions",available:!0},{label:"Tattooing",value:"Tattoo",url:"/tattoosessions",available:!0},{label:"Chemical Peels",value:"Chem-Peel",url:"/chem-peelsessions",available:!0},{label:"Natural Peels",value:"Natural-Peel",url:"/nat-peelsessions",available:!0},{label:"Microneedling",value:"Microneedling",url:"/micro-nsessions",available:!0},{label:"Facial",value:"Facial",url:"/facialsessions",available:!0},{label:"Sclerotherapy(Varicose/SpiderVeins)",value:"Sclerotherapy",url:"/sclerosessions",available:!0},{label:"Botox Injections",value:"Botox",url:"/botoxsessions",available:!0},{label:"Dermal Fillers",value:"Fillers",url:"/fillerssessions",available:!0},{label:"Microdermabrasion",value:"Microdermabrasion",url:"/micro-dsessions",available:!0},{label:"Body Contouring",value:"Contouring",url:"/contouringsessions",available:!0},{label:"Facial Rejuvenation",value:"Rejuvenation",url:"/rejuvenationsessions",available:!0}].filter((function(e){return e.available}))},498:function(e,t,a){},499:function(e,t,a){},510:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return l})),a.d(t,"g",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"h",(function(){return h})),a.d(t,"a",(function(){return f}));var r=a(489),n=(a(541),a(53)),o=a(62);function s(){s=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof p?t:p,o=Object.create(n.prototype),s=new S(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return L()}for(a.method=n,a.arg=o;;){var s=a.delegate;if(s){var i=E(s,a);if(i){if(i===d)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var l=u(e,t,a);if("normal"===l.type){if(r=a.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r="completed",a.method="throw",a.arg=l.arg)}}}(e,a,s),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(N){return{type:"throw",arg:N}}}e.wrap=c;var d={};function p(){}function h(){}function f(){}var m={};l(m,n,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(D([])));g&&g!==t&&a.call(g,n)&&(m=g);var b=f.prototype=p.prototype=Object.create(m);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;this._invoke=function(n,o){function s(){return new t((function(r,s){!function r(n,o,s,i){var l=u(e[n],e,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,i)}),(function(e){r("throw",e,s,i)})):t.resolve(d).then((function(e){c.value=e,s(c)}),(function(e){return r("throw",e,s,i)}))}i(l.arg)}(n,o,r,s)}))}return r=r?r.then(s,s):s()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function D(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,l(b,"constructor",f),l(f,"constructor",h),h.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(w.prototype),l(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var s=new w(c(t,a,r,n),o);return e.isGeneratorFunction(a)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},y(b),l(b,i,"Generator"),l(b,n,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=D,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return s.type="throw",s.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:D(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var i=function(e,t){return function(a){n.a.post("customers/generate_url",{session_time:e,service:t}).then((function(e){console.log("GenerateUrl Response: ",e),e.data.status?a({type:"GENERATE_URL",url:e.data.url}):o.b.error(e.data.msg)})).catch((function(e){return console.log(e)}))}},l=function(e){return function(t){n.a.post("customers/isopened",{url:e}).then((function(e){e.data.status?o.b.success("This url is already opened."):o.b.error(e.data.msg)})).catch((function(e){return console.log(e)}))}},c=function(e){return function(t){n.a.post("customers/timeleft",{url:e}).then((function(e){e.data.status?o.b.success(e.data.msg):o.b.error(e.data.msg)})).catch((function(e){return console.log(e)}))}},u=function(e){return function(){var t=Object(r.a)(s().mark((function t(a){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("customers/customers",{params:e.service?{service:e.service}:{}}).then((function(t){if(t.data.status){var r=t.data,n=e.page,s=e.perPage,i=Math.ceil(r.data.length/s),l=[],c={};if(void 0!==n&&void 0!==s){var u=(n-1)*s,d=n*s;u>r.data.length?(i=Math.ceil(r.data.length/s),l=r.data.slice(0,s),c.page=0,c.perPage=s):(l=r.data.slice(u,d),c=e)}else i=Math.ceil(r.data.length/4),l=r.data.slice(0,4),c=e;0===l.length&&(c.page=0,c.perPage=4,l=r.data.slice(0,4)),a({type:"GET_CUSTOMER_ALL_DATA",data:r.data,bodyarea:r.bodyarea}),a({type:"GET_CUSTOMER_DATA",data:l,bodyarea:r.bodyarea,totalPages:i,newparams:c})}else o.b.error("Internal Server Error!")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(t){return t({type:"FILTER_CUSTOMER_DATA",value:e})}},p=function(e){return function(t){n.a.post("customers/delete",e).then((function(a){a.data.status?t(u(e)):o.b.error(a.data.msg)}))}},h=function(e){return console.log(e),function(t,a){n.a.post("customers/update",e).then((function(a){a.data.status?t(u(e)):o.b.error(a.data.msg)}))}},f=function(e){return function(t,a){n.a.post("customers/add",e).then((function(a){a.data.status?t(u(e)):o.b.error(a.data.msg)}))}}},742:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(13),o=a(14),s=a(15),i=a(0),l=a.n(i),c=a(523),u=a(612),d=a(260),p=a(476),h=a(480),f=a(475),m=a(474),v=a(735),g=a(505),b=a.n(g),y=a(3),w=a.n(y),E=a(506),P=a.n(E),x=a(23),S=a(172),D=a(180),L=a(170),N=a(171),C=a(146),k=a(21),F=a(510),j=a(734),_=a(573),R=a(139),O=a(43),A=a.n(O),T=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={_id:"",name:"",email:"",phone:"",city:"",price:"",fsession:"",lsession:"",referredby:""},e.addNew=!1,e.handleSubmit=function(t){null!==e.props.data?e.props.updateData(t):(e.addNew=!0,e.props.addData(t));var a=Object.keys(e.props.dataParams).length?e.props.dataParams:{page:1,perPage:10};e.props.handleSidebar(!1,!0),e.props.getData(a)},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e,t){null!==this.props.data&&null===e.data&&(this.props.data._id!==t._id&&this.setState({_id:this.props.data._id}),this.props.data.name!==t.name&&this.setState({name:this.props.data.name}),this.props.data.email!==t.email&&this.setState({email:this.props.data.email}),this.props.data.phone!==t.phone&&this.setState({phone:this.props.data.phone}),this.props.data.city!==t.city&&this.setState({city:this.props.data.city}),this.props.data.fsession!==t.fsession&&this.setState({fsession:this.props.data.fsession}),this.props.data.lsession!==t.lsession&&this.setState({lsession:this.props.data.lsession}),this.props.data.referredby!==t.referredby&&this.setState({referredby:this.props.data.referredby})),null===this.props.data&&null!==e.data&&this.setState({_id:"",name:"",email:"",phone:"",city:"",price:"",fsession:"",lsession:"",referredby:""}),this.addNew&&this.setState({_id:"",name:"",email:"",phone:"",city:"",price:"",fsession:"",lsession:"",referredby:""}),this.addNew=!1}},{key:"render",value:function(){var e=this,t=this.props,a=t.show,r=t.handleSidebar,n=t.data,o=this.state,s=o.name,i=o.email,c=o.phone,u=o.city,p=o.fsession,h=o.lsession,f=o.referredby;return l.a.createElement("div",{className:w()("data-list-sidebar",{show:a})},l.a.createElement("div",{className:"data-list-sidebar-header mt-2 px-2 d-flex justify-content-between"},l.a.createElement("h4",null,null!==n?"UPDATE DATA":"ADD NEW DATA"),l.a.createElement(R.a,{size:20,onClick:function(){return r(!1,!0)}})),l.a.createElement(A.a,{className:"data-list-fields px-2 mt-3",options:{wheelPropagation:!1}},l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-name"},"Name"),l.a.createElement(v.a,{type:"text",value:s,placeholder:"Apple IphoneX",onChange:function(t){return e.setState({name:t.target.value})},id:"data-name"})),l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-email"},"Email"),l.a.createElement(v.a,{type:"text",id:"data-email",value:i,onChange:function(t){return e.setState({email:t.target.value})}})),l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-phone"},"Phone"),l.a.createElement(v.a,{type:"text",id:"data-phone",value:c,onChange:function(t){return e.setState({phone:t.target.value})}})),l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-city"},"City"),l.a.createElement(v.a,{type:"text",id:"data-city",value:u,onChange:function(t){return e.setState({city:t.target.value})}})),l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-fsession"},"First Session"),l.a.createElement(v.a,{type:"text",id:"data-fsession",value:p,onChange:function(t){return e.setState({fsession:t.target.value})}})),l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-lsession"},"Last Session"),l.a.createElement(v.a,{type:"text",id:"data-lsession",value:h,onChange:function(t){return e.setState({lsession:t.target.value})}})),l.a.createElement(j.a,null,l.a.createElement(_.a,{for:"data-referredby"},"Referred By"),l.a.createElement(v.a,{type:"text",id:"data-referredby",value:f,onChange:function(t){return e.setState({referredby:t.target.value})}}))),l.a.createElement("div",{className:"data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1"},l.a.createElement(d.a,{color:"primary",onClick:function(){return e.handleSubmit(e.state)}},null!==n?"Update":"Submit"),l.a.createElement(d.a,{className:"ml-1",color:"danger",outline:!0,onClick:function(){return r(!1,!0)}},"Cancel")))}}]),a}(i.Component),I=(a(498),a(499),a(16)),M={rows:{selectedHighlighStyle:{backgroundColor:"rgba(115,103,240,.05)",color:"#7367F0 !important",boxShadow:"0 0 1px 0 #7367F0 !important","&:hover":{transform:"translateY(0px) !important"}}}},V=function(e){return l.a.createElement("div",{className:"data-list-action"},l.a.createElement(S.a,{className:"cursor-pointer mr-1",size:20,onClick:function(){return e.currentData(e.row)}}),l.a.createElement(D.a,{className:"cursor-pointer",size:20,onClick:function(){e.deleteRow(e.row)}}))},G=function(e){return l.a.createElement("div",{className:"data-list-header d-flex justify-content-between flex-wrap"},l.a.createElement("div",{className:"actions-left d-flex flex-wrap"},l.a.createElement(d.a,{class:"mt-sm-0 mt-2",color:"primary",onClick:function(t){return H(e.data)}},"Export")),l.a.createElement("div",{className:"actions-right d-flex flex-wrap mt-sm-0 mt-2"},l.a.createElement(p.a,{className:"data-list-rows-dropdown mr-1 d-md-block d-none"},l.a.createElement(h.a,{color:"",className:"sort-dropdown"},l.a.createElement("span",{className:"align-middle mx-50"},"".concat(e.index[0]||0," - ").concat(e.index[1]||0," of ").concat(e.total)),l.a.createElement(L.a,{size:15})),l.a.createElement(f.a,{tag:"div",right:!0},l.a.createElement(m.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(4)}},"4"),l.a.createElement(m.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(10)}},"10"),l.a.createElement(m.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(15)}},"15"),l.a.createElement(m.a,{tag:"a",onClick:function(){return e.handleRowsPerPage(20)}},"20"))),l.a.createElement("div",{className:"filter-section"},l.a.createElement(v.a,{type:"text",onChange:function(t){return e.handleFilter(t)}}))))},U="Laser",H=function(e){var t=document.createElement("a"),a=function(e){var t,a=Object.keys(e[0]);return t="",t+=a.join(","),t+="\n",e.forEach((function(e){var r=0;a.forEach((function(a){r>0&&(t+=","),t+=e[a],r++})),t+="\n"})),t}(e);if(null!=a){var r="ClientList-".concat(U,"-").concat(new Date,".csv");a.match(/^data:text\/csv/i)||(a="data:text/csv;charset=utf-8,".concat(a)),t.setAttribute("href",encodeURI(a)),t.setAttribute("download",r),t.click()}},z=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={data:[],totalPages:0,currentPage:0,columns:[{name:"Name",selector:"name",sortable:!0,cell:function(e){return l.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Email",selector:"email",sortable:!0},{name:"Phone",selector:"phone",sortable:!0},{name:"City",selector:"city",sortable:!0},{name:"First Session",selector:"fsession",sortable:!0},{name:"Last Session",selector:"lsession",sortable:!0},{name:"Referred By",selector:"referredby",sortable:!0},{name:"Consent Form",selector:"pdf",sortable:!0,cell:function(e){return l.a.createElement("a",{className:"m-0",href:I.a.host+"consentforms/"+e.pdf,target:"_blank"},"View")}},{name:"Actions",sortable:!0,cell:function(t){return l.a.createElement(V,{row:t,currentData:e.handleCurrentData,deleteRow:e.handleDelete})}}],allData:[],value:"",rowsPerPage:4,sidebar:!1,currentData:null,selected:[],totalRecords:0,sortIndex:[],addNew:""},e.thumbView=e.props.thumbView,e.handleFilter=function(t){e.setState({value:t.target.value}),e.props.filterData(t.target.value)},e.handleRowsPerPage=function(t){var a=e.props,r=a.parsedFilter,n=a.getData,o=void 0!==r.page?r.page:1;x.a.push("?page=".concat(o,"&perPage=").concat(t)),e.setState({rowsPerPage:t}),n({page:r.page,perPage:t})},e.handleSidebar=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setState({sidebar:t}),!0===a&&e.setState({currentData:null,addNew:!0})},e.handleDelete=function(t){if(e.props.deleteData(t),e.props.getData(e.props.parsedFilter),e.state.data.length-1===0){var a=(e.props.thumbView,"");x.a.push("".concat(a,"?page=").concat(parseInt(e.props.parsedFilter.page-1),"&perPage=").concat(e.props.parsedFilter.perPage)),e.props.getData({page:e.props.parsedFilter.page-1,perPage:e.props.parsedFilter.perPage})}},e.handleCurrentData=function(t){e.setState({currentData:t}),e.handleSidebar(!0)},e.handlePagination=function(t){var a=e.props,r=a.parsedFilter,n=a.getData,o=void 0!==r.perPage?r.perPage:4,s=(e.props.thumbView,"");x.a.push("".concat(s,"?page=").concat(t.selected+1,"&perPage=").concat(o)),n({page:t.selected+1,perPage:o}),e.setState({currentPage:t.selected})},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){U=this.props.service.value,this.props.getData({service:U})}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.thumbView){this.thumbView=!1;var r=[{name:"Name",selector:"name",sortable:!0,cell:function(e){return l.a.createElement("p",{title:e.name,className:"text-truncate text-bold-500 mb-0"},e.name)}},{name:"Email",selector:"email",sortable:!0},{name:"Phone",selector:"phone",sortable:!0},{name:"City",selector:"city",sortable:!0},{name:"First Session",selector:"fsession",sortable:!0},{name:"Last Session",selector:"lsession",sortable:!0},{name:"Referred By",selector:"referredby",sortable:!0},{name:"Consent Form",selector:"pdf",sortable:!0,cell:function(e){return l.a.createElement("a",{className:"m-0",href:I.a.host+"consentforms/"+e.pdf,_target:"blank"},"View")}},{name:"Actions",sortable:!0,cell:function(e){return l.a.createElement(V,{row:e,currentData:a.handleCurrentData,deleteRow:a.handleDelete})}}];this.setState({columns:r})}e.service!=this.props.service&&(U=this.props.service.value,this.props.getData({service:U}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.columns,r=t.data,n=t.allData,o=t.totalPages,s=t.value,i=t.rowsPerPage,c=t.currentData,u=t.sidebar,d=t.totalRecords,p=t.sortIndex;return l.a.createElement("div",{className:"data-list ".concat(this.props.thumbView?"thumb-view":"list-view")},l.a.createElement(b.a,{key:this.props.service.value,columns:a,data:s.length?n:r,pagination:!0,paginationServer:!0,paginationComponent:function(){return l.a.createElement(P.a,{previousLabel:l.a.createElement(N.a,{size:15}),nextLabel:l.a.createElement(C.a,{size:15}),breakLabel:"...",breakClassName:"break-me",pageCount:o,containerClassName:"vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2",activeClassName:"active",forcePage:e.props.parsedFilter.page?parseInt(e.props.parsedFilter.page-1):0,onPageChange:function(t){return e.handlePagination(t)}})},noHeader:!0,subHeader:!0,responsive:!0,pointerOnHover:!0,selectableRowsHighlight:!0,onSelectedRowsChange:function(t){return e.setState({selected:t.selectedRows})},customStyles:M,subHeaderComponent:l.a.createElement(G,{handleSidebar:this.handleSidebar,handleFilter:this.handleFilter,handleRowsPerPage:this.handleRowsPerPage,rowsPerPage:i,total:d,index:p,data:s.length?n:r}),sortIcon:l.a.createElement(L.a,null)}),l.a.createElement(T,{show:u,data:c,updateData:this.props.updateData,addData:this.props.addData,handleSidebar:this.handleSidebar,thumbView:this.props.thumbView,getData:this.props.getData,dataParams:this.props.parsedFilter,addNew:this.state.addNew}),l.a.createElement("div",{className:w()("data-list-overlay",{show:u}),onClick:function(){return e.handleSidebar(!1,!0)}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.dataList.data.length!==t.data.length||t.currentPage!==e.parsedFilter.page?{data:e.dataList.data,allData:e.dataList.filteredData,totalPages:e.dataList.totalPages,currentPage:parseInt(e.parsedFilter.page)-1,rowsPerPage:parseInt(e.parsedFilter.perPage),totalRecords:e.dataList.totalRecords,sortIndex:e.dataList.sortIndex}:null}}]),a}(i.Component),B=Object(k.b)((function(e){return console.log(e.customer),{dataList:e.customer}}),{getData:F.e,deleteData:F.b,updateData:F.h,addData:F.a,filterData:F.c})(z),Y=a(522),J=a.n(Y),W=a(497),X=a(492),q=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={service:{label:"Laser Hair Removal",value:"Laser"}},e}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.service!==t.service&&console.log("State updated!",this.state.service)}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{className:"mb-2"},l.a.createElement(u.a,{sm:"12"},l.a.createElement(X.a,{className:"React",classNamePrefix:"select",name:"service",value:this.state.service,options:W.a,onChange:function(t){e.setState({service:{value:t.value,label:t.label}})}}))),l.a.createElement(c.a,null,l.a.createElement(u.a,{sm:"12"},l.a.createElement(B,{key:this.state.service,service:this.state.service,parsedFilter:J.a.parse(this.props.location.search)}))))}}]),a}(l.a.Component);t.default=q}}]);
//# sourceMappingURL=17.a3804bf7.chunk.js.map