(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{454:function(t,e,v){"use strict";v.r(e);var _=v(0),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"git使用技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git使用技巧"}},[t._v("#")]),t._v(" Git使用技巧")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("术语")]),t._v(" "),v("p",[t._v("Workspace: 工作区\nIndex / Stage: 暂存区【add 后放入暂存区】\nRepository: 本地仓库【commit后放入本地仓库】\nRemote: 远程仓库【push后放入远程仓库】")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"远程仓库操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库操作"}},[t._v("#")]),t._v(" 远程仓库操作")]),t._v(" "),v("blockquote",[v("p",[t._v("查看远程仓库地址：git remote -v")])]),t._v(" "),v("blockquote",[v("p",[t._v("关联远程仓库：git remote add origin 代码仓库地址")])]),t._v(" "),v("blockquote",[v("p",[t._v("删除远程仓库：git remote rm origin")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"分支操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),v("blockquote",[v("p",[t._v("查看远程分支：git branch -a")])]),t._v(" "),v("blockquote",[v("p",[t._v("删除远程分支： git push origin -d new_develop  【删除远程new_develop分支】")])]),t._v(" "),v("blockquote",[v("p",[t._v("删除本地分支：git branch -d new_develop")])]),t._v(" "),v("ul",[v("li",[t._v("-d === --delete")])]),t._v(" "),v("blockquote",[v("p",[t._v("git branch -m old new")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"拉取分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拉取分支"}},[t._v("#")]),t._v(" 拉取分支")]),t._v(" "),v("blockquote",[v("p",[t._v("新的项目拉取指定分支: git clone -b 分支名称 地址")])]),t._v(" "),v("ul",[v("li",[t._v("已有项目(需要三步)：")])]),t._v(" "),v("blockquote",[v("p",[t._v("1、git fetch origin 分支名 // 拉取了指定分支")])]),t._v(" "),v("blockquote",[v("p",[t._v("2、git checkout 分支名 // 切换到该分支即可")])]),t._v(" "),v("blockquote",[v("p",[t._v("3、git pull~~ // 一般不需要pull了")])]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("git fetch // 拉取所有远程分支到本地，不会自动merge，可以再进行上面第二步")])])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"回滚与强制推送"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回滚与强制推送"}},[t._v("#")]),t._v(" 回滚与强制推送")]),t._v(" "),v("h3",{attrs:{id:"_1、reset-回滚到任意一个版本-适合错误内容未推送到远程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、reset-回滚到任意一个版本-适合错误内容未推送到远程"}},[t._v("#")]),t._v(" 1、reset 回滚到任意一个版本(适合错误内容未推送到远程)")]),t._v(" "),v("blockquote",[v("p",[t._v("git reset --hard + commitId")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("git reset的操作是本地回退而已，远程仓库并没有回退，直接push会失败(提示远程仓库版本高于本地仓库版本，使用git pull拉取一次。但是拉取本地又会回到最新版本)")]),t._v(" "),v("p",[t._v("解决办法, 强制推送："),v("code",[t._v("git push -f origin + branchName")]),t._v(" (不建议，会覆盖之前的commit)")])]),t._v(" "),v("h3",{attrs:{id:"_2、revert-适用出错内容已经push到远程分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、revert-适用出错内容已经push到远程分支"}},[t._v("#")]),t._v(" 2、revert (适用出错内容已经push到远程分支)")]),t._v(" "),v("ul",[v("li",[t._v("返回指定的版本，并产生一个新的commit记录")])]),t._v(" "),v("blockquote",[v("p",[t._v("git revert HEAD // 上一个分支")])]),t._v(" "),v("blockquote",[v("p",[t._v("git revert HEAD^ // 上上一个分支")])]),t._v(" "),v("blockquote",[v("p",[t._v("git revert commitId // 指定commit")])]),t._v(" "),v("blockquote",[v("p",[t._v("git push")])]),t._v(" "),v("h2",{attrs:{id:"rebase-合并commit记录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rebase-合并commit记录"}},[t._v("#")]),t._v(" rebase 合并commit记录")]),t._v(" "),v("blockquote",[v("ol",[v("li",[t._v("git rebase -i commitId // commitId不会包含在此次合并操作")])])]),t._v(" "),v("blockquote",[v("ol",{attrs:{start:"2"}},[v("li",[t._v("执行完上面命令后，在出现的vim窗口内按i开始修改，除第一条，其他pick全修改为 s。表示全部合并到第一条。:wq保存")])])]),t._v(" "),v("blockquote",[v("ol",{attrs:{start:"3"}},[v("li",[t._v("出现新的vim窗口，表示此次合并的commit信息")])])]),t._v(" "),v("ul",[v("li",[t._v("如果这个过程中有操作错误，可以使用 git rebase --abort来撤销修改，回到没有开始操作合并之前的状态\n参考：https://www.jianshu.com/p/964de879904a")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"amend-修改提交信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#amend-修改提交信息"}},[t._v("#")]),t._v(" amend 修改提交信息")]),t._v(" "),v("blockquote",[v("p",[t._v('git commit --amend -m "新的提交信息"')])]),t._v(" "),v("p",[v("strong",[t._v("注意点")])]),t._v(" "),v("blockquote",[v("p",[t._v("amend会把当前 commit 里的内容和"),v("strong",[t._v("暂存区")]),t._v("（git add .）里的内容合并起来后创建一个新的 commit，用这个新的 commit 把当前 commit 替换掉。")])]),t._v(" "),v("h3",{attrs:{id:"_1、漏提交一个文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、漏提交一个文件"}},[t._v("#")]),t._v(" 1、漏提交一个文件")]),t._v(" "),v("blockquote",[v("p",[t._v("git add xxx")])]),t._v(" "),v("blockquote",[v("p",[t._v("git commit --amend // 进入到vim界面，按i修改，wq保存并退出")])]),t._v(" "),v("h3",{attrs:{id:"_2、刚刚提交完代码发现，我有个文件没保存，漏了提交上去怎么办？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、刚刚提交完代码发现，我有个文件没保存，漏了提交上去怎么办？"}},[t._v("#")]),t._v(" 2、刚刚提交完代码发现，我有个文件没保存，漏了提交上去怎么办？")]),t._v(" "),v("blockquote",[v("p",[t._v("git add .")])]),t._v(" "),v("blockquote",[v("p",[t._v("git commit --amend --no-edit")])]),t._v(" "),v("hr"),t._v(" "),v("h2",{attrs:{id:"操作分支的常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#操作分支的常用命令"}},[t._v("#")]),t._v(" 操作分支的常用命令")]),t._v(" "),v("p",[t._v("查看当前分支：git branch")]),t._v(" "),v("p",[t._v("切换分支：git checkout 分支名称")]),t._v(" "),v("p",[t._v("查看远程分支：git branch -a")]),t._v(" "),v("p",[t._v("创建并切换分支：git checkout -b 新的分支名称")]),t._v(" "),v("hr")])}),[],!1,null,null,null);e.default=a.exports}}]);