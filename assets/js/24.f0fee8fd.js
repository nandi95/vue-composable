(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{334:function(e,s,n){"use strict";n.r(s);var t=n(61),o={name:"web-socket-example",setup:function(){var e=Object(t.p)("wss://javascript.info/article/websocket/demo/hello");return{isOpen:e.isOpen,isClosed:e.isClosed,data:e.data,errored:e.errored,send:e.send,close:e.close}}},r=n(2),a=Object(r.a)(o,(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",[n("button",{attrs:{disabled:!e.isOpen},on:{click:e.send}},[e._v("Send")]),e._v(" "),n("button",{attrs:{disabled:!e.isOpen},on:{click:function(s){return e.close(1e3)}}},[e._v("Close")]),e._v(" "),n("p",[e._v("open: "+e._s(e.isOpen))]),e._v(" "),n("p",[e._v("closed: "+e._s(e.isClosed))]),e._v(" "),n("p",[e._v("data: "+e._s(e.data))]),e._v(" "),n("p",[e._v("errored: "+e._s(e.errored))])])}),[],!1,null,null,null);s.default=a.exports}}]);