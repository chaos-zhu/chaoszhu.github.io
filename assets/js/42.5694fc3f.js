(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{367:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"express中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#express中间件"}},[t._v("#")]),t._v(" Express中间件")]),t._v(" "),s("h2",{attrs:{id:"中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),s("blockquote",[s("p",[t._v("大白话：携带 req、res、next三个参数的函数就是中间件函数")])]),t._v(" "),s("h2",{attrs:{id:"请求过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求过程"}},[t._v("#")]),t._v(" 请求过程")]),t._v(" "),s("blockquote",[s("p",[t._v("请求 --\x3e a中间件 --\x3e b中间件 --\x3e c中间件 --\x3e 响应\n###get/post请求自定义中间件的抽离\n"),s("img",{attrs:{src:"https://user-images.githubusercontent.com/44160914/99231822-19b69400-282c-11eb-80af-0fe98a0a900b.png",alt:"image"}})])]),t._v(" "),s("blockquote",[s("p",[t._v("请求到/midderware1后，先调用中间件函数，执行next()后，再接着往下执行，一直到res.send()或res.json()等响应后停止，如继续执行中间件函数将会报错。")])]),t._v(" "),s("h2",{attrs:{id:"中间件函数传值的技巧——闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件函数传值的技巧——闭包"}},[t._v("#")]),t._v(" 中间件函数传值的技巧——闭包")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/44160914/99232142-8467cf80-282c-11eb-9d2f-ede056fe13ab.png",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"使用中间件app-use-全局中间件或局部中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用中间件app-use-全局中间件或局部中间件"}},[t._v("#")]),t._v(" 使用中间件app.use()   // 全局中间件或局部中间件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/44160914/99232200-93e71880-282c-11eb-964a-2da68ee5ca6a.png",alt:"全局中间件"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/44160914/99232215-98abcc80-282c-11eb-8f1b-3f02a81919e8.png",alt:"特定中间件"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/44160914/99232225-9c3f5380-282c-11eb-8a72-723c9a87fbc0.png",alt:"可使用多个中间件"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);