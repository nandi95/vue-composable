(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{434:function(e,a,o){"use strict";o.r(a);var n=o(318),t=o(314),l=o(103),u={setup:function(){var e=Object(l.k)(""),a=Object(t.s)({locale:"en",fallback:"en",messages:{en:{locales:{en:"English",pt:"Portuguese",es:"Spanish",custom:"YourLocale"},weekDays:["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"],input:{name:{label:"Name",placeholder:"Your name"}},hello:"Hello {name}",currentDate:"Today is: {day}"},pt:{locales:{en:"Inglês",pt:"Português",es:"Espanhol"},weekDays:["Domingo","Segunda-feira","Terca-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],input:{name:{label:"Nome",placeholder:"O teu nome"}},currentDate:"Hoje e': {day}",hello:"Olá {name}"},es:function(){return Object(t.f)(10).then((function(){return{locales:{en:"Ingles",pt:"Portugués",es:"Espanol"},input:{name:{label:"Nombre",placeholder:"Tu nombre"}},weekDays:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],hello:"Holla {name}"}}))}}}),o=Object(l.k)({locales:{custom:"Awesome"},hello:"H3Y"}),u=Object(l.k)(JSON.stringify(o.value));return Object(l.m)(u,(function(e){try{o.value=JSON.parse(e)}catch(e){}}),{lazy:!0}),Object(n.a)(Object(n.a)({},a),{},{name:e,customLocaleJson:u,addCustomLocale:function(){a.addLocale("custom",o.value),a.locale.value="custom"},removeCustomLocale:function(){return a.removeLocale("custom")}})}},s=o(27),c=Object(s.a)(u,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",[o("div",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.locale,expression:"locale"}],on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.locale=a.target.multiple?o:o[0]}}},e._l(e.locales,(function(a){return o("option",{key:a,domProps:{value:a}},[e._v(e._s(e.i18n.locales[a]))])})),0),e._v(" "),o("div",[o("label",{attrs:{for:"name"}},[e._v(e._s(e.i18n.input.name.label))]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{name:"name",placeholder:e.i18n.input.name.placeholder},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})])]),e._v(" "),o("h1",[e._v(e._s(e.i18n.title))]),e._v(" "),o("h5",[e._v(e._s(e.$t("hello",{name:e.name}).value))]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("currentDate",{day:e.$t("weekDays["+(new Date).getDay()+"]")}).value)+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("currentDate",{day:e.i18n.weekDays[(new Date).getDay()]}).value)+"\n  ")]),e._v(" "),o("hr"),e._v(" "),o("h3",[e._v("Custom locale")]),e._v(" "),o("div",[e.locales.indexOf("custom")<0?o("button",{on:{click:e.addCustomLocale}},[e._v("\n      Add custom locale\n    ")]):o("button",{on:{click:e.removeCustomLocale}},[e._v("Remove custom locale")])]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.customLocaleJson,expression:"customLocaleJson"}],domProps:{value:e.customLocaleJson},on:{input:function(a){a.target.composing||(e.customLocaleJson=a.target.value)}}})])}),[],!1,null,null,null);a.default=c.exports}}]);