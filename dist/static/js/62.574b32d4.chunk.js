(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),i=f(r),o=f(n(1696)),l=f(n(4)),u=f(n(1640)),s=f(n(1511)),c=f(n(79)),d=f(n(276));function f(e){return e&&e.__esModule?e:{default:e}}var w=Object.keys(o.default.Views).map(function(e){return o.default.Views[e]});o.default.setLocalizer(o.default.momentLocalizer(l.default));var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"calendar-wrapper"},i.default.createElement(s.default,{title:i.default.createElement(c.default,{id:"sidebar.basic"}),match:this.props.match}),i.default.createElement(d.default,{heading:"Basic Calendar"},i.default.createElement(o.default,{events:u.default,views:w,step:60,showMultiDayTimes:!0,defaultDate:new Date(2015,3,12)})))}}]),t}();t.default=p},1640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"All Day Event very long title",allDay:!0,start:new Date(2015,3,0),end:new Date(2015,3,1)},{title:"Long Event",start:new Date(2015,3,7),end:new Date(2015,3,10)},{title:"DTS STARTS",start:new Date(2016,2,13,0,0,0),end:new Date(2016,2,20,0,0,0)},{title:"DTS ENDS",start:new Date(2016,10,6,0,0,0),end:new Date(2016,10,13,0,0,0)},{title:"Some Event",start:new Date(2015,3,9,0,0,0),end:new Date(2015,3,9,0,0,0)},{title:"Conference",start:new Date(2015,3,11),end:new Date(2015,3,13),desc:"Big conference for important people"},{title:"Meeting",start:new Date(2015,3,12,10,30,0,0),end:new Date(2015,3,12,12,30,0,0),desc:"Pre-meeting meeting, to prepare for the meeting"},{title:"Lunch",start:new Date(2015,3,12,12,0,0,0),end:new Date(2015,3,12,13,0,0,0),desc:"Power lunch"},{title:"Meeting",start:new Date(2015,3,12,14,0,0,0),end:new Date(2015,3,12,15,0,0,0)},{title:"Happy Hour",start:new Date(2015,3,12,17,0,0,0),end:new Date(2015,3,12,17,30,0,0),desc:"Most important meal of the day"},{title:"Dinner",start:new Date(2015,3,12,20,0,0,0),end:new Date(2015,3,12,21,0,0,0)},{title:"Birthday Party",start:new Date(2015,3,13,7,0,0),end:new Date(2015,3,13,10,30,0)},{title:"Birthday Party 2",start:new Date(2015,3,13,7,0,0),end:new Date(2015,3,13,10,30,0)},{title:"Birthday Party 3",start:new Date(2015,3,13,7,0,0),end:new Date(2015,3,13,10,30,0)},{title:"Late Night Event",start:new Date(2015,3,17,19,30,0),end:new Date(2015,3,18,2,0,0)},{title:"Multi-day Event",start:new Date(2015,3,20,19,30,0),end:new Date(2015,3,22,2,0,0)}]}}]);