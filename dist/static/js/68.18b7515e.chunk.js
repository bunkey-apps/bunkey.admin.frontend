(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1478:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(1),r=m(n),s=m(a(80)),c=m(a(81)),i=m(a(1511)),u=m(a(79)),o=a(577),f=m(a(42));function m(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];return a=l=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),l.state={users:null},d(l,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentWillMount",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var e=this;c.default.get(f.default.appUrl+"/data/usersList.js").then(function(t){e.setState({users:t.data})}).catch(function(e){})}},{key:"render",value:function(){var e=this.state.users;return r.default.createElement("div",{className:"user-list-wrapper"},r.default.createElement(i.default,{title:r.default.createElement(u.default,{id:"sidebar.userList"}),match:this.props.match}),r.default.createElement("div",{className:"row"},e&&e.map(function(e,t){return r.default.createElement(o.RctCard,{customClasses:"p-10",colClasses:"col-sm-6 col-lg-4 col-xl-3",key:t},r.default.createElement("img",{src:e.coverPhoto,className:"img-fluid",alt:"user listing",width:"100%",height:"140"}),r.default.createElement("div",{className:"card-block-content"},r.default.createElement("div",{className:"d-flex justify-content-between mb-20"},r.default.createElement("div",{className:"d-flex align-items-start"},r.default.createElement("div",{className:"media"},r.default.createElement("div",{className:"media-left mx-10"},r.default.createElement("img",{src:e.userAvatar,alt:"user profile",className:"rounded-circle img-fluid",width:"90",height:"90"})),r.default.createElement("div",{className:"media-body py-10"},r.default.createElement("p",{className:"mb-0"},e.userName),r.default.createElement("span",{className:"text-muted fs-12"},r.default.createElement("i",{className:"ti-world mr-5"}),e.location)))),r.default.createElement("div",{className:"d-flex align-items-end card-action pt-15"},e.socialLinks.length>0&&null!==e.socialLinks&&e.socialLinks.map(function(e,t){return r.default.createElement("a",{key:t,href:e.url,className:"mr-0"},r.default.createElement("i",{className:"ti-"+e.icon}))}))),e.isAvailable?r.default.createElement("div",{className:"d-flex justify-content-between"},r.default.createElement(s.default,{variant:"raised",className:"btn-primary text-white btn-xs"},r.default.createElement("i",{className:"zmdi zmdi-comment-outline mr-10"}),"Send Message"),r.default.createElement(s.default,{className:"text-success btn-xs"},r.default.createElement("i",{className:"zmdi zmdi-check-circle mr-10"})," Available for Hire")):r.default.createElement("div",{className:"d-flex justify-content-center"},r.default.createElement(s.default,{className:"text-secondary btn-xs"},r.default.createElement("i",{className:"zmdi zmdi-circle mr-10"})," Not Available for Hiring"))))})))}}]),t}();t.default=p}}]);