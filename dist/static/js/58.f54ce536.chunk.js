(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1468:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(1)),l=c(a(1696)),r=c(a(4)),d=c(a(1640)),i=c(a(1511)),s=c(a(79)),u=c(a(276));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.event;return n.default.createElement("span",null,n.default.createElement("strong",null,t.title),t.desc&&":  "+t.desc)}function D(e){var t=e.event;return n.default.createElement("span",null,n.default.createElement("em",{style:{color:"magenta"}},t.title),n.default.createElement("p",null,t.desc))}l.default.setLocalizer(l.default.momentLocalizer(r.default));var w=function(e){return 7===e.getDate()||15===e.getDate()?{className:"special-day",style:{border:"solid 3px "+(7===e.getDate()?"#faa":"#afa")}}:{}},f=function(e){return 7===e.getDate()||15===e.getDate()?{className:"special-day"}:{}};t.default=function(e){var t=e.match;return n.default.createElement("div",{className:"calendar-wrapper"},n.default.createElement(i.default,{title:n.default.createElement(s.default,{id:"sidebar.customRendering"}),match:t}),n.default.createElement(u.default,{heading:"Custom Rendering"},n.default.createElement(l.default,{events:d.default,defaultDate:new Date(2015,3,12),defaultView:"agenda",dayPropGetter:w,slotPropGetter:f,components:{event:o,agenda:{event:D}}})))}},1640:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"All Day Event very long title",allDay:!0,start:new Date(2015,3,0),end:new Date(2015,3,1)},{title:"Long Event",start:new Date(2015,3,7),end:new Date(2015,3,10)},{title:"DTS STARTS",start:new Date(2016,2,13,0,0,0),end:new Date(2016,2,20,0,0,0)},{title:"DTS ENDS",start:new Date(2016,10,6,0,0,0),end:new Date(2016,10,13,0,0,0)},{title:"Some Event",start:new Date(2015,3,9,0,0,0),end:new Date(2015,3,9,0,0,0)},{title:"Conference",start:new Date(2015,3,11),end:new Date(2015,3,13),desc:"Big conference for important people"},{title:"Meeting",start:new Date(2015,3,12,10,30,0,0),end:new Date(2015,3,12,12,30,0,0),desc:"Pre-meeting meeting, to prepare for the meeting"},{title:"Lunch",start:new Date(2015,3,12,12,0,0,0),end:new Date(2015,3,12,13,0,0,0),desc:"Power lunch"},{title:"Meeting",start:new Date(2015,3,12,14,0,0,0),end:new Date(2015,3,12,15,0,0,0)},{title:"Happy Hour",start:new Date(2015,3,12,17,0,0,0),end:new Date(2015,3,12,17,30,0,0),desc:"Most important meal of the day"},{title:"Dinner",start:new Date(2015,3,12,20,0,0,0),end:new Date(2015,3,12,21,0,0,0)},{title:"Birthday Party",start:new Date(2015,3,13,7,0,0),end:new Date(2015,3,13,10,30,0)},{title:"Birthday Party 2",start:new Date(2015,3,13,7,0,0),end:new Date(2015,3,13,10,30,0)},{title:"Birthday Party 3",start:new Date(2015,3,13,7,0,0),end:new Date(2015,3,13,10,30,0)},{title:"Late Night Event",start:new Date(2015,3,17,19,30,0),end:new Date(2015,3,18,2,0,0)},{title:"Multi-day Event",start:new Date(2015,3,20,19,30,0),end:new Date(2015,3,22,2,0,0)}]}}]);