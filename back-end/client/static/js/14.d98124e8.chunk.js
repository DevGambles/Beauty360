(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[14],{511:function(e,a,t){},520:function(e,a,t){"use strict";var n=t(5),s=t(6),o=t(0),r=t.n(o),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:m.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,l=e.inverse,i=e.outline,f=e.tag,d=e.innerRef,b=Object(s.a)(e,p),h=Object(m.l)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return r.a.createElement(f,Object(n.a)({},b,{className:h,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},521:function(e,a,t){"use strict";var n=t(5),s=t(6),o=t(0),r=t.n(o),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","innerRef","tag"],f={tag:m.p,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},d=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,l=Object(s.a)(e,p),i=Object(m.l)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},l,{className:i,ref:o}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},523:function(e,a,t){"use strict";var n=t(5),s=t(6),o=t(0),r=t.n(o),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","noGutters","tag","form","widths"],f=l.a.oneOfType([l.a.number,l.a.string]),d={tag:m.p,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,f=Object(s.a)(e,p),d=[];i.forEach((function(a,t){var n=e[a];if(delete f[a],n){var s=!t;d.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(m.l)(u()(a,o?"no-gutters":null,l?"form-row":"row",d),t);return r.a.createElement(c,Object(n.a)({},f,{className:b}))};h.propTypes=d,h.defaultProps=b,a.a=h},524:function(e,a,t){"use strict";var n=t(12),s=t(13),o=t(14),r=t(15),c=t(0),l=t.n(c),i=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),t}(l.a.Component);a.a=i},542:function(e,a,t){"use strict";var n=t(5),s=t(6),o=t(10),r=t(9),c=t(0),l=t.n(c),i=t(1),u=t.n(i),m=t(3),p=t.n(m),f=t(4),d=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,r=e.tag,c=e.innerRef,i=Object(s.a)(e,d),u=Object(f.l)(p()(a,!!o&&"form-inline"),t);return l.a.createElement(r,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},573:function(e,a,t){"use strict";var n=t(5),s=t(6),o=t(0),r=t.n(o),c=t(1),l=t.n(c),i=t(3),u=t.n(i),m=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],f=l.a.oneOfType([l.a.number,l.a.string]),d=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:f,order:f,offset:f})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:m.p,className:l.a.string,cssModule:l.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.hidden,c=e.widths,l=e.tag,i=e.check,f=e.size,d=e.for,b=Object(s.a)(e,p),h=[];c.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var o,r=!n;if(Object(m.j)(s)){var c,l=r?"-":"-"+a+"-";o=g(r,a,s.size),h.push(Object(m.l)(u()(((c={})[o]=s.size||""===s.size,c["order"+l+s.order]=s.order||0===s.order,c["offset"+l+s.offset]=s.offset||0===s.offset,c))),t)}else o=g(r,a,s),h.push(o)}}));var v=Object(m.l)(u()(a,!!o&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return r.a.createElement(l,Object(n.a)({htmlFor:d},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},746:function(e,a,t){"use strict";t.r(a);var n=t(12),s=t(13),o=t(14),r=t(15),c=t(0),l=t.n(c),i=t(523),u=t(612),m=t(520),p=t(521),f=t(542),d=t(734),b=t(735),h=t(573),g=t(260),v=t(176),E=t(175),N=t(169),j=(t(23),t(524)),y=t(21),O=t(65),x=t.p+"static/media/login.6e5031ff.png",k=(t(511),t(492)),w=[{value:"InkDiva",label:"Ink Diva"},{value:"InkDivaNorth",label:"Ink Diva North"}],R=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={activeTab:"1",email:"",password:"",location:"InkDiva"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e.handleLogin=function(a){a.preventDefault(),e.props.signinWithJWT(e.state.email,e.state.password,e.state.location)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(i.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(m.a,{className:"bg-authentication login-card rounded-0 mb-0 w-100"},l.a.createElement(i.a,{className:"m-0"},l.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},l.a.createElement("img",{src:x,alt:"loginImg"})),l.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},l.a.createElement(m.a,{className:"rounded-0 mb-0 px-2"},l.a.createElement(p.a,null,l.a.createElement("h4",null,"Login"),l.a.createElement("p",null,"Welcome back, please login to your account."),l.a.createElement(f.a,{onSubmit:this.handleLogin},l.a.createElement(d.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement(b.a,{type:"email",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),l.a.createElement("div",{className:"form-control-position"},l.a.createElement(v.a,{size:15})),l.a.createElement(h.a,null,"Email")),l.a.createElement(d.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement(b.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),l.a.createElement("div",{className:"form-control-position"},l.a.createElement(E.a,{size:15})),l.a.createElement(h.a,null,"Password")),l.a.createElement(d.a,{className:"form-label-group"},l.a.createElement(k.a,{className:"React",classNamePrefix:"select",defaultValue:w[0],name:"location",options:w,value:w.find((function(a){return a.value===e.state.location})),onChange:function(a){return e.setState({location:a.value})}}),l.a.createElement(h.a,null,"Location")),l.a.createElement(d.a,{className:"d-flex justify-content-between align-items-center"},l.a.createElement(j.a,{color:"primary",icon:l.a.createElement(N.a,{className:"vx-icon",size:16}),label:"Remember me"}),l.a.createElement("div",{className:"float-right"},"Forgot Password?")),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(g.a.Ripple,{color:"primary",type:"submit"},"Login"))))))))))}}]),t}(l.a.Component);a.default=Object(y.b)((function(e){return{}}),{signinWithJWT:O.d})(R)}}]);
//# sourceMappingURL=14.d98124e8.chunk.js.map