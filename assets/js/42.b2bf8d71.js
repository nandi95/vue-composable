(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{455:function(e,t,n){"use strict";n.r(t);var a=n(318),s=n(314),r=n(103),i={name:"shared-ref-example",setup:function(){var e=Object(s.M)("test-shared-ref",0),t=Object(r.a)((function(){switch(e.mind.value){case 0:return"HIVE";case 1:return"MASTER"}}));return Object(a.a)(Object(a.a)({},e),{},{mindDescription:t,changeMind:function(){e.setMind((e.mind.value+1)%2)}})}},c=n(27),d=Object(c.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Supported: "+e._s(e.supported))]),e._v(" "),n("p",[e._v("\n    Mind: "+e._s(e.mindDescription)+" "),n("button",{on:{click:e.changeMind}},[e._v("Change")])]),e._v(" "),n("p",[e._v("IsMaster: "+e._s(e.master))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.data,expression:"data"}],attrs:{disabled:!e.editable},domProps:{value:e.data},on:{input:function(t){t.target.composing||(e.data=t.target.value)}}}),e._v(" "),n("p",[e._v("targets: "+e._s(e.targets.length))])])}),[],!1,null,null,null);t.default=d.exports}}]);