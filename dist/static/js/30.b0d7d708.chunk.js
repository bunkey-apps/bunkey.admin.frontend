(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1440:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=p(n(1)),r=p(n(280)),o=p(n(2236)),u=p(n(2235)),c=p(n(2234)),i=p(n(2232)),f=p(n(1511)),s=p(n(79)),d=p(n(276));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),l(t,[{key:"render",value:function(){return a.default.createElement("div",{className:"menu-paper-wrapper"},a.default.createElement(f.default,{title:a.default.createElement(s.default,{id:"sidebar.menu"}),match:this.props.match}),a.default.createElement("div",{className:"row"},a.default.createElement(d.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:a.default.createElement(s.default,{id:"widgets.simpleMenus"})},a.default.createElement(o.default,null)),a.default.createElement(d.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:a.default.createElement(s.default,{id:"widgets.selectedMenu"})},a.default.createElement(u.default,null)),a.default.createElement(d.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:a.default.createElement(s.default,{id:"widgets.maxHeightMenu"})},a.default.createElement(c.default,null)),a.default.createElement(d.default,{colClasses:"col-sm-6 col-md-6 col-xl-3",heading:a.default.createElement(s.default,{id:"widgets.changeTransition"})},a.default.createElement(i.default,null))),a.default.createElement(d.default,{heading:a.default.createElement(s.default,{id:"widgets.paper"})},a.default.createElement("ul",{className:"list-inline d-flex align-items-center justify-content-around flex-wrap"},a.default.createElement("li",null,a.default.createElement(r.default,{elevation:10,className:"mb-10 m-10 size-120 bg-primary"})),a.default.createElement("li",null,a.default.createElement(r.default,{elevation:8,className:"mb-10 m-10 size-100 bg-success"})),a.default.createElement("li",null,a.default.createElement(r.default,{elevation:6,className:"mb-10 m-10 size-80 bg-warning"})),a.default.createElement("li",null,a.default.createElement(r.default,{elevation:4,className:"mb-10 m-10 size-60 bg-danger"})),a.default.createElement("li",null,a.default.createElement(r.default,{elevation:2,className:"mb-10 m-10 size-40 bg-info"})))))}}]),t}();t.default=m},1517:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"MenuList",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return o.default}});var a=l(n(1533)),r=l(n(1590)),o=l(n(1540))},1540:function(e,t,n){"use strict";var l=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=l(n(11)),r=l(n(14)),o=l(n(8)),u=l(n(34)),c=l(n(1)),i=(l(n(0)),l(n(2))),f=l(n(13)),s=l(n(585)),d=function(e){return{root:(0,u.default)({},e.typography.subheading,{height:3*e.spacing.unit,boxSizing:"content-box",width:"auto",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit,"&$selected":{backgroundColor:e.palette.action.selected}}),selected:{}}};function p(e){var t=e.classes,n=e.className,l=e.component,u=e.selected,f=e.role,d=(0,o.default)(e,["classes","className","component","selected","role"]);return c.default.createElement(s.default,(0,a.default)({button:!0,role:f,tabIndex:-1,className:(0,i.default)(t.root,(0,r.default)({},t.selected,u),n),component:l},d))}t.styles=d,p.propTypes={},p.defaultProps={component:"li",role:"menuitem",selected:!1};var m=(0,f.default)(d,{name:"MuiMenuItem"})(p);t.default=m},2232:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=i(n(1)),r=i(n(80)),o=n(1517),u=i(o),c=i(n(581));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=l=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),l.state={anchorEl:null},l.handleClick=function(e){l.setState({anchorEl:e.currentTarget})},l.handleClose=function(){l.setState({anchorEl:null})},f(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),l(t,[{key:"render",value:function(){var e=this.state.anchorEl;return a.default.createElement("div",null,a.default.createElement(r.default,{"aria-owns":e?"fade-menu":null,"aria-haspopup":"true",onClick:this.handleClick,className:"btn-danger text-white"},"Open with fade transition"),a.default.createElement(u.default,{id:"fade-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose,transition:c.default},a.default.createElement(o.MenuItem,{onClick:this.handleClose},"Profile"),a.default.createElement(o.MenuItem,{onClick:this.handleClose},"My account"),a.default.createElement(o.MenuItem,{onClick:this.handleClose},"Logout")))}}]),t}();t.default=s},2233:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(1)),a=o(n(284)),r=o(n(275));function o(e){return e&&e.__esModule?e:{default:e}}var u=e.__MUI_SvgIcon__||r.default,c=l.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),i=function(e){return l.default.createElement(u,e,c)};(i=(0,a.default)(i)).muiName="SvgIcon",t.default=i}).call(this,n(35))},2234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=i(n(1)),r=i(n(109)),o=n(1517),u=i(o),c=i(n(2233));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],d=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=l=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),l.state={anchorEl:null},l.handleClick=function(e){l.setState({anchorEl:e.currentTarget})},l.handleClose=function(){l.setState({anchorEl:null})},f(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),l(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl;return a.default.createElement("div",null,a.default.createElement(r.default,{"aria-label":"More","aria-owns":t?"long-menu":null,"aria-haspopup":"true",onClick:this.handleClick},a.default.createElement(c.default,null)),a.default.createElement(u.default,{id:"long-menu",anchorEl:this.state.anchorEl,open:Boolean(t),onClose:this.handleClose,PaperProps:{style:{maxHeight:216,width:200}}},s.map(function(t){return a.default.createElement(o.MenuItem,{key:t,selected:"Pyxis"===t,onClick:e.handleClose},t)})))}}]),t}();t.default=d},2235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=i(n(1)),r=n(277),o=i(r),u=n(1517),c=i(u);function i(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],d=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=l=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),l.state={anchorEl:null,selectedIndex:1},l.button=void 0,l.handleClickListItem=function(e){l.setState({anchorEl:e.currentTarget})},l.handleMenuItemClick=function(e,t){l.setState({selectedIndex:t,anchorEl:null})},l.handleClose=function(){l.setState({anchorEl:null})},f(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),l(t,[{key:"render",value:function(){var e=this,t=this.state.anchorEl;return a.default.createElement("div",null,a.default.createElement(o.default,{component:"nav"},a.default.createElement(r.ListItem,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:this.handleClickListItem},a.default.createElement(r.ListItemText,{primary:"When device is locked",secondary:s[this.state.selectedIndex]}))),a.default.createElement(c.default,{id:"lock-menu",anchorEl:t,open:Boolean(t),onClose:this.handleClose},s.map(function(t,n){return a.default.createElement(u.MenuItem,{key:t,disabled:0===n,selected:n===e.state.selectedIndex,onClick:function(t){return e.handleMenuItemClick(t,n)}},t)})))}}]),t}();t.default=d},2236:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=c(n(1)),r=n(1517),o=c(r),u=c(n(80));function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var e,n,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,r=Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=l=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),l.state={anchorEl:null,selectedIndex:1},l.button=void 0,l.handleClickListItem=function(e){l.setState({anchorEl:e.currentTarget})},l.handleMenuItemClick=function(e,t){l.setState({selectedIndex:t,anchorEl:null})},l.handleClose=function(){l.setState({anchorEl:null})},l.handleClick=function(e){l.setState({anchorEl:e.currentTarget})},i(l,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),l(t,[{key:"render",value:function(){var e=this.state.anchorEl;return a.default.createElement("div",null,a.default.createElement(u.default,{raised:"true",className:"btn-primary text-white","aria-owns":e?"simple-menu":null,"aria-haspopup":"true",onClick:this.handleClick},"Open Menu"),a.default.createElement(o.default,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose},a.default.createElement(r.MenuItem,{onClick:this.handleClose},"Profile"),a.default.createElement(r.MenuItem,{onClick:this.handleClose},"My account"),a.default.createElement(r.MenuItem,{onClick:this.handleClose},"Logout")))}}]),t}();t.default=f}}]);