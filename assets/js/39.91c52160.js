(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{364:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"常用的docker镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的docker镜像"}},[e._v("#")]),e._v(" 常用的docker镜像")]),e._v(" "),t("h2",{attrs:{id:"解锁网易云灰色音乐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解锁网易云灰色音乐"}},[e._v("#")]),e._v(" 解锁网易云灰色音乐")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("docker run -d -p 8888:8080 --name=neteasy-cloud-music chaoszhu/unlock-netease-cloud-music")])])])]),e._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://github.com/nondanee/UnblockNeteaseMusic",target:"_blank",rel:"noopener noreferrer"}},[e._v("开源仓库地址"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("打开网易云音乐 --\x3e 设置 --\x3e 工具 --\x3e 填入代理地址&端口 --\x3e 重启")])]),e._v(" "),t("h2",{attrs:{id:"聚合各平台的音乐搜索web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#聚合各平台的音乐搜索web"}},[e._v("#")]),e._v(" 聚合各平台的音乐搜索web")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("docker run -d -p 9999:80 --name=search-music-web chaoszhu/search-music-web")])])])]),e._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://github.com/maicong/music",target:"_blank",rel:"noopener noreferrer"}},[e._v("开源仓库地址"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"nginx配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[e._v("#")]),e._v(" nginx配置")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server {\n    listen 80;\n    server_name xxx.xxx;\n    location / {\n      proxy_pass http://127.0.0.1:9999/;\n    }\n}\n")])])]),t("h2",{attrs:{id:"protainer：可视化docker容器管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protainer：可视化docker容器管理"}},[e._v("#")]),e._v(" protainer：可视化docker容器管理")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("docker run -d -p 7777:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /home/docker/portainer:/data -v /root/Portainer-CN/public:/public --name portainer --restart=always portainer/portainer")])])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("blockquote",[t("ul",[t("li",[t("ol",[t("li",[t("strong",[e._v("其中：")]),e._v(" "),t("code",[e._v("-v /root/Portainer-CN/public:/public")]),e._v(" "),t("strong",[e._v("为汉化包挂载卷")])])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[t("a",{attrs:{href:"https://chaoszhu.lanzous.com/i9ph2l9d3de",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载汉化文件"),t("OutboundLink")],1),e._v(", 上传到服务器目录："),t("code",[e._v("/root/Portainer-CN/public")])])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[e._v("访问管理面板："),t("code",[e._v("http://ip:7777")]),e._v(" --\x3e 选择Local --\x3e Connect")])])])])])]),e._v(" "),t("h3",{attrs:{id:"nginx配置-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置-2"}},[e._v("#")]),e._v(" nginx配置")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server {\n    listen 80;\n    server_name docker.xxx.xxx;\n      # ^~ 表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找。\n    location / {\n      proxy_pass http://127.0.0.1:7777/;\n    }\n}\n\n")])])]),t("h2",{attrs:{id:"socks5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#socks5"}},[e._v("#")]),e._v(" socks5")]),e._v(" "),t("p",[t("strong",[e._v("无密码(不建议使用)")]),e._v(" "),t("code",[e._v("docker run -d --name socks5 -p 1080:1080 serjs/go-socks5-proxy")])]),e._v(" "),t("p",[t("strong",[e._v("用户名+密码：")]),e._v(" "),t("code",[e._v("docker run -d --name socks5 -p 1080:1080 -e PROXY_USER=<PROXY_USER> -e PROXY_PASSWORD=<PROXY_PASSWORD> serjs/go-socks5-proxy")])])])}),[],!1,null,null,null);r.default=s.exports}}]);