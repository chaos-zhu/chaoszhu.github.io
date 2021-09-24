(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{366:function(e,t,o){"use strict";o.r(t);var r=o(0),c=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"镜像-容器常用操作命令"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#镜像-容器常用操作命令"}},[e._v("#")]),e._v(" 镜像&容器常用操作命令")]),e._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("菜鸟的docker命令大全"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"镜像操作"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#镜像操作"}},[e._v("#")]),e._v(" 镜像操作")]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("查看本地镜像："),o("code",[e._v("docker images")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("删除本地镜像(批量删除用空格隔开IMAGE-ID)："),o("code",[e._v("docker image IMAGE-ID")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("删除所有本地镜像："),o("code",[e._v("docker rmi $(docker images)")])])])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("删除镜像前需删除关联的容器")])]),e._v(" "),o("h2",{attrs:{id:"容器操作"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[e._v("#")]),e._v(" 容器操作")]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("查看容器，加-a查看所有状态(正在运行&暂停&已退出)的容器："),o("code",[e._v("docker ps (-a)")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("启动/停止容器："),o("code",[e._v("docker start/stop (容器名称/id)")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("删除某一个容器："),o("code",[e._v("docker rm (容器名称/id)")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("删除所有停止的容器："),o("code",[e._v("docker container prune")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("删除所有容器："),o("code",[e._v("docker rm $(docker ps -a)")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("查看容器运行日志："),o("code",[e._v("docker logs CONTAINER-ID")])])])]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v("查看容器信息："),o("code",[e._v("docker inspect CONTAINER-ID")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-images.githubusercontent.com/44160914/99233256-f391f380-282d-11eb-9319-defe89e76993.png",alt:"image"}})]),e._v(" "),o("h2",{attrs:{id:"将容器打包为镜像"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#将容器打包为镜像"}},[e._v("#")]),e._v(" 将容器打包为镜像")]),e._v(" "),o("blockquote",[o("ul",[o("li",[e._v('docker commit -m="描述信息" -a="作者" CONTAINER_ID 镜像名称:TAG')])])]),e._v(" "),o("p",[e._v('举例： docker commit -m="commit image test" -a="chaoszhuz" b67765584cb8 nginxImage:v1.1')]),e._v(" "),o("p",[e._v("注意： 镜像名称不能出现大写字母")])])}),[],!1,null,null,null);t.default=c.exports}}]);