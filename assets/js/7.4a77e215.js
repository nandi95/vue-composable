(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,n,t){var r=t(34);r(r.P,"Array",{fill:t(140)}),t(83)("fill")},140:function(e,n,t){"use strict";var r=t(66),a=t(44),u=t(35);e.exports=function(e){for(var n=r(this),t=u(n.length),l=arguments.length,i=a(l>1?arguments[1]:void 0,t),o=l>2?arguments[2]:void 0,c=void 0===o?t:a(o,t);c>i;)n[i++]=e;return n}},320:function(e,n,t){"use strict";t.r(n);t(139),t(82);var r=t(61),a={name:"array-pagination-example",setup:function(){var e=new Array(1e3).fill(0).map((function(e,n){return n})),n=Object(r.b)(e,{pageSize:3});return{result:n.result,next:n.next,prev:n.prev,currentPage:n.currentPage,lastPage:n.lastPage}}},u=t(2),l=Object(u.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[e._v("page "+e._s(e.currentPage)+" of "+e._s(e.lastPage))]),e._v(" "),t("p",[t("button",{on:{click:e.prev}},[e._v("prev")]),e._v(" "),t("button",{on:{click:e.next}},[e._v("next")])]),e._v(" "),t("ul",e._l(e.result,(function(n){return t("li",{key:n},[e._v("\n      "+e._s(n)+"\n    ")])})),0)])}),[],!1,null,null,null);n.default=l.exports}}]);