(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb731"],{"4a5c":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"calc-wrap"},[e("form",{staticClass:"calculator",attrs:{action:""}},[t._m(0),t._m(1),e("table",{staticClass:"table table-borderless",attrs:{width:"100%"}},[t._m(2),e("tbody",[e("tr",[t._m(3),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.param_n,expression:"param_n"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.param_n},on:{input:function(a){a.target.composing||(t.param_n=a.target.value)}}})]),t._m(4)]),e("tr",[t._m(5),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.param_p,expression:"param_p"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.param_p},on:{input:function(a){a.target.composing||(t.param_p=a.target.value)}}})])]),e("tr",[t._m(6),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.param_k1,expression:"param_k1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.param_k1},on:{input:function(a){a.target.composing||(t.param_k1=a.target.value)}}})])]),e("tr",[t._m(7),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.param_k2,expression:"param_k2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.param_k2},on:{input:function(a){a.target.composing||(t.param_k2=a.target.value)}}})])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("div",{staticClass:"result",class:t.classObj},[t._v(" Результат:"),e("p",{attrs:{id:"result"}},[t._v(t._s(t.result))])])]),e("td")]),e("tr",[e("td",{attrs:{colspan:"4"}},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return a.preventDefault(),t.compute(a)}}},[t._v("Рассчитать")])])])])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",[e("b",[t._v("Инструкция:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list-group list-group-flush mr-auto instruction"},[e("li",{staticClass:"list-group-item"},[e("p",{staticStyle:{color:"red"}},[e("b",[t._v("ВНИМАНИЕ!")])]),e("p",[t._v("Данная формула рекомендуется к использованию, в случае наличия большого кол-ва испытаний, с вероятностью БОЛЕЕ 0.1. Также она применима, если нужно получить некое кол-во успехов в диапазоне k1 ≤ k ≤ k2 из n испытаний ")])]),e("li",{staticClass:"list-group-item"},[e("p",[e("b",[t._v("n -")]),t._v(" кол-во независимых испытаний ")])]),e("li",{staticClass:"list-group-item"},[e("p",[e("b",[t._v("p -")]),t._v(" вероятность появления некого события в каждом испытании (соответственно q = 1 - р это вероятность непоявления данного события) ")])]),e("li",{staticClass:"list-group-item"},[e("p",[e("b",[t._v("k1 - ")]),t._v(" нижняя граница кол-ва появления события из n испытаний ")])]),e("li",{staticClass:"list-group-item"},[e("p",[e("b",[t._v("k2 - ")]),t._v(" верхняя граница кол-ва появления события из n испытаний ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[e("h3",[e("b",[t._v("Параметры")])])]),e("th")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("h4",[e("b",[t._v("n =")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",{attrs:{rowspan:"4"}},[e("img",{attrs:{src:"/img/calc/6.1.png",alt:""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("h4",[e("b",[t._v("p =")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("h4",[e("b",[t._v("k1 =")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("h4",[e("b",[t._v("k2 =")])])])}],n=e("aabe"),l=e("1143"),i=e("4b78"),c={data:function(){return{param_n:i["a"].inputDefaultValue,param_p:i["a"].inputDefaultValue,param_k1:i["a"].inputDefaultValue,param_k2:i["a"].inputDefaultValue,result:i["a"].outputTip,classObj:{}}},methods:{compute:function(){Object(l["a"])(this,this.lapalsInt,[+this.param_n,+this.param_p,+this.param_k1,+this.param_k2])},lapalsInt:function(t,a,e,r){var s=function(e){return(e-t*a)/Object(n["sqrt"])(t*a*(1-a))},l=function(t){return Object(n["erf"])(t/Object(n["sqrt"])(2))/2};return l(s(r))-l(s(e))}}},o=c,u=e("2877"),p=Object(u["a"])(o,r,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0cb731.1d858bcc.js.map