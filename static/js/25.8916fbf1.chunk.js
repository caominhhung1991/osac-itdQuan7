(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{1017:function(e,t,a){},1018:function(e,t,a){e.exports=a.p+"static/media/logo.0a6fcc85.jpg"},1055:function(e,t,a){"use strict";a.r(t);a(1017);var o=a(0),n=a.n(o),i=a(48),r=a(1030),l=a(5),c=a(66),s=a(80),d=a(109),p=a(133),b=a.n(p),u=a(7),h=a.n(u),m=a(984),g=a(726),f=a(973),v={caret:b.a.bool,color:b.a.string,children:b.a.node,className:b.a.string,cssModule:b.a.object,disabled:b.a.bool,onClick:b.a.func,"aria-haspopup":b.a.bool,split:b.a.bool,tag:g.e,nav:b.a.bool},O={isOpen:b.a.bool.isRequired,toggle:b.a.func.isRequired,inNavbar:b.a.bool.isRequired},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this.props,a=t.className,o=t.color,i=t.cssModule,r=t.caret,s=t.split,d=t.nav,p=t.tag,b=Object(c.a)(t,["className","color","cssModule","caret","split","nav","tag"]),u=b["aria-label"]||"Toggle Dropdown",v=Object(g.c)(h()(a,{"dropdown-toggle":r||s,"dropdown-toggle-split":s,"nav-link":d}),i),O=b.children||n.a.createElement("span",{className:"sr-only"},u);return d&&!p?(e="a",b.href="#"):p?e=p:(e=f.a,b.color=o,b.cssModule=i),this.context.inNavbar?n.a.createElement(e,Object(l.a)({},b,{className:v,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:O})):n.a.createElement(m.c,Object(l.a)({},b,{className:v,component:e,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:O}))},t}(n.a.Component);j.propTypes=v,j.defaultProps={"aria-haspopup":!0,color:"secondary"},j.contextTypes=O;var k=j,C=a(6);var y={tag:g.e,children:b.a.node.isRequired,right:b.a.bool,flip:b.a.bool,modifiers:b.a.object,className:b.a.string,cssModule:b.a.object,persist:b.a.bool},N={isOpen:b.a.bool.isRequired,direction:b.a.oneOf(["up","down","left","right"]).isRequired,inNavbar:b.a.bool.isRequired},w={flip:{enabled:!1}},E={up:"top",left:"left",right:"right",down:"bottom"},x=function(e,t){var a=e.className,o=e.cssModule,i=e.right,r=e.tag,s=e.flip,d=e.modifiers,p=e.persist,b=Object(c.a)(e,["className","cssModule","right","tag","flip","modifiers","persist"]),u=Object(g.c)(h()(a,"dropdown-menu",{"dropdown-menu-right":i,show:t.isOpen}),o),f=r;if(p||t.isOpen&&!t.inNavbar){f=m.b;var v=E[t.direction]||"bottom",O=i?"end":"start";b.placement=v+"-"+O,b.component=r,b.modifiers=s?d:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach((function(t){Object(C.a)(e,t,a[t])}))}return e}({},d,w)}return n.a.createElement(f,Object(l.a)({tabIndex:"-1",role:"menu"},b,{"aria-hidden":!t.isOpen,className:u,"x-placement":b.placement}))};x.propTypes=y,x.defaultProps={tag:"div",flip:!0},x.contextTypes=N;var M=x,T={children:b.a.node,active:b.a.bool,disabled:b.a.bool,divider:b.a.bool,tag:g.e,header:b.a.bool,onClick:b.a.func,className:b.a.string,cssModule:b.a.object,toggle:b.a.bool},R={toggle:b.a.func},I=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(d.a)(Object(d.a)(a))),a.getTabIndex=a.getTabIndex.bind(Object(d.a)(Object(d.a)(a))),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(g.d)(this.props,["toggle"]),o=a.className,i=a.cssModule,r=a.divider,s=a.tag,d=a.header,p=a.active,b=Object(c.a)(a,["className","cssModule","divider","tag","header","active"]),u=Object(g.c)(h()(o,{disabled:b.disabled,"dropdown-item":!r&&!d,active:p,"dropdown-header":d,"dropdown-divider":r}),i);return"button"===s&&(d?s="h6":r?s="div":b.href&&(s="a")),n.a.createElement(s,Object(l.a)({type:"button"===s&&(b.onClick||this.props.toggle)?"button":void 0},b,{tabIndex:e,role:t,className:u,onClick:this.onClick}))},t}(n.a.Component);I.propTypes=T,I.defaultProps={tag:"button",toggle:!0},I.contextTypes=R;var q=I,P=a(43),D=a(994),z=a(1018),S=a.n(z);t.default=Object(i.o)((function(e){var t=e.history;var a=Object(P.b)("employee")||{};return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.j,{className:"d-lg-none",display:"md",mobile:!0}),n.a.createElement(D.c,{to:"/",full:{src:S.a,width:43.6,height:33,alt:"CoreUI Logo"},minimized:{src:S.a,width:43.6,height:33,alt:"CoreUI Logo"}}),n.a.createElement(D.j,{className:"d-md-down-none",display:"lg"}),n.a.createElement(r.a,{className:"ml-auto",navbar:!0},n.a.createElement(D.b,{direction:"down"},n.a.createElement(k,{nav:!0},n.a.createElement("img",{width:40,src:S.a,className:"osac",alt:"osac"})),n.a.createElement(M,{right:!0,style:{right:"auto"}},n.a.createElement(q,{header:!0,tag:"div",className:"text-center"},n.a.createElement("strong",null,"Welcome ",a.fullname||"")),n.a.createElement(q,{onClick:function(){t.push("/login"),window.location.reload(),localStorage.clear()}},n.a.createElement("i",{className:"fa fa-sign-out"})," \u0110\u0103ng xu\u1ea5t")))))}))},973:function(e,t,a){"use strict";var o=a(5),n=a(66),i=a(80),r=a(109),l=a(0),c=a.n(l),s=a(133),d=a.n(s),p=a(7),b=a.n(p),u=a(726),h={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:u.e,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(Object(r.a)(a))),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,r=e.className,l=e.close,s=e.cssModule,d=e.color,p=e.outline,h=e.size,m=e.tag,g=e.innerRef,f=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof f.children&&(f.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+d,O=Object(u.c)(b()(r,{close:l},l||"btn",l||v,!!h&&"btn-"+h,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),s);f.href&&"button"===m&&(m="a");var j=l?"Close":null;return c.a.createElement(m,Object(o.a)({type:"button"===m&&f.onClick?"button":void 0},f,{className:O,ref:g,onClick:this.onClick,"aria-label":a||j}))},t}(c.a.Component);m.propTypes=h,m.defaultProps={color:"secondary",tag:"button"},t.a=m}}]);