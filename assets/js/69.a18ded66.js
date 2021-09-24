(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{394:function(t,s,a){"use strict";a.r(s);var r=a(0),o=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb的安装与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb的安装与配置"}},[t._v("#")]),t._v(" MongoDB的安装与配置")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("参考文章：\n"),a("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://juejin.im/post/5cbe73f86fb9a0320b40d687",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金教程"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"_1、配置yum源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置yum源"}},[t._v("#")]),t._v(" 1、配置yum源")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("vim /etc/yum.repos.d/mongodb-org-4.0.repo")])])]),t._v(" "),a("p",[a("strong",[t._v("填入源信息(最新源信息参考官方文档)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("MongoDB Repository\nbaseurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("redhat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$releasever"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x86_64"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\ngpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nenabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ngpgkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mongodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pgp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("asc\n")])])]),a("p",[t._v("ps：源信息来源："),a("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/#install-mongodb-community-edition",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档：Linux安装MongoDB"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2、安装mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装mongodb"}},[t._v("#")]),t._v(" 2、安装MongoDB")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("yum install -y mongodb-org")])])]),t._v(" "),a("h2",{attrs:{id:"_3、mongodb服务操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、mongodb服务操作"}},[t._v("#")]),t._v(" 3、MongoDB服务操作")]),t._v(" "),a("p",[a("strong",[t._v("启动:")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl start mongod")])])]),t._v(" "),a("p",[a("strong",[t._v("开机自启")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl enable mongod")])])]),t._v(" "),a("p",[a("strong",[t._v("停止:")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl stop mongod")])])]),t._v(" "),a("p",[a("strong",[t._v("查看状态:")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl status mongod")])])]),t._v(" "),a("p",[a("strong",[t._v("重启:")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl restart mongod")])])]),t._v(" "),a("p",[a("strong",[t._v("查看端口是否开启（如果未开启，则尝试关闭防火墙）")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("netstat -natp | grep 27017 // 查看端口占用")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl stop firewalld // 关闭防火墙")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("systemctl disable firewalld // 开机禁用")])])]),t._v(" "),a("h2",{attrs:{id:"_4、开启公网访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、开启公网访问"}},[t._v("#")]),t._v(" 4、开启公网访问")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("vim /etc/mongod.conf")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("# network interfaces\nnet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n  bindIp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("  # "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),t._v("：开启公网访问 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),t._v("：只能本地访问\n")])])]),a("p",[a("strong",[t._v("尝试使用Navicat连接")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://blog-qiniu.zhulijun.club/mongo%E8%BF%9E%E6%8E%A5%E6%88%90%E5%8A%9F.png",alt:"连接"}})]),t._v(" "),a("h2",{attrs:{id:"_5、配置访问权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、配置访问权限"}},[t._v("#")]),t._v(" 5、配置访问权限")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("经上面步骤已可以正常连接与操作数据库，但是未设置任何权限。")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("巨坑")]),t._v(" "),a("pre",[a("code",[t._v("先设置数据库用户&密码，再配置权限访问。(mongo无缘无故炸了)\n")])])]),t._v(" "),a("p",[a("strong",[t._v("设置数据库用户&密码与权限")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("mongo // 进入mongo命令终端")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("show dbs // 会有三个默认数据库")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("use admin // 操作admin数据库")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v('db.createUser({ user:"root", pwd:"123456", roles:["root"] }) // root别动，改密码就好。而且其他库都不能用root，创建root用户会抛错。')])])]),t._v(" "),a("blockquote",[a("p",[t._v("ps：root拥有最高权限，可以读写所有数据库。")])]),t._v(" "),a("p",[a("strong",[t._v("连接成功")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://blog-qiniu.zhulijun.club/%E6%88%90%E5%8A%9F%E8%AE%BE%E7%BD%AEmongo%E6%9D%83%E9%99%90.png",alt:"权限"}})]),t._v(" "),a("p",[a("strong",[t._v("创建用户成功后，配置权限访问")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("vim /etc/mongod.conf")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("security"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  authorization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),t._v("   # disable or enabled\n")])])]),a("p",[a("strong",[t._v("ps:")]),t._v(" authorization 这个字段没有, 需要自己加上。")]),t._v(" "),a("p",[a("strong",[t._v("重启Mongo：")]),t._v(" "),a("code",[t._v("systemctl restart mongod")])]),t._v(" "),a("h2",{attrs:{id:"_6-其他问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-其他问题"}},[t._v("#")]),t._v(" 6.其他问题")]),t._v(" "),a("h3",{attrs:{id:"删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[t._v("#")]),t._v(" 删除用户")]),t._v(" "),a("p",[a("strong",[t._v("连接Mongo：")]),t._v(" "),a("code",[t._v("mongo 127.0.0.1:27017/admin -u root -p 123456")])]),t._v(" "),a("p",[a("strong",[t._v("ps：")]),t._v(" 如果密码带有！，可以使用引号引起来")]),t._v(" "),a("p",[a("strong",[t._v("删除用户：")]),t._v(" "),a("code",[t._v("db.dropUser('usertest')")])]),t._v(" "),a("h3",{attrs:{id:"小坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小坑"}},[t._v("#")]),t._v(" 小坑")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("删除root用户后无法创建新的用户，可以先关闭权限认证，再按上面步骤创建用户")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("创建数据库不会立刻展示，需要往里面插入数据："),a("code",[t._v('db.xxxdb.insert({"name":"菜鸟教程"})')])])])]),t._v(" "),a("h3",{attrs:{id:"用户权限参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户权限参考"}},[t._v("#")]),t._v(" 用户权限参考")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844903828811153421#heading-17",target:"_blank",rel:"noopener noreferrer"}},[t._v("戳我直达~"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"_7-连接mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-连接mongodb"}},[t._v("#")]),t._v(" 7.连接MongoDB")]),t._v(" "),a("p",[a("strong",[t._v("终端连接")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mongo yourIp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("database "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p password\n")])])]),a("p",[a("strong",[t._v("mongoose方式连接")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mongoose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongodb://username:password@host:port/database'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("useNewUrlParser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("通过客户端连接：")]),t._v(" Navicat")]),t._v(" "),a("h2",{attrs:{id:"卸载mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载mongodb"}},[t._v("#")]),t._v(" 卸载MongoDB")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("yum erase $(rpm -qa | grep mongodb-org) // 卸载MongoDB")]),t._v(" "),a("li",[t._v("rm -r /var/log/mongodb // 删除日志文件")]),t._v(" "),a("li",[t._v("rm -r /var/lib/mongo // 删除数据文件")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);