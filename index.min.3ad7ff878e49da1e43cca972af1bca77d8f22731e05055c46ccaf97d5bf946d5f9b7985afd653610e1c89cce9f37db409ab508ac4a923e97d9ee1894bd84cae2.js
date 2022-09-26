var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/docs/resource/go/",title:"golang",description:"go 开源资源，oscome 开源到",content:`【基础】go 指南 # https://tour.go-zh.org/list 熟悉语法，可以直接 web 中运行。
【基础】Effective Go # https://golang.google.cn/doc/effective_go
可以理解为 go 指南的拓展，新手必备。如果习惯中文，可以看 https://learnku.com/docs/effective-go/2020
【基础】gin docs # https://gin-gonic.com/zh-cn/docs/ gin 应该目前golang web api 领域使用者最多的了，docs提供了很多基础的例子，如果需要更多功能，可以基于业务和经验拓展。
【进阶】go设计模式 # https://lailin.xyz/post/go-design-pattern.html
Go 设计模式实现，作者很用心，适合学习语法后练习。
【进阶】gorm # https://gorm.io/zh_CN/docs/
应该是golang最火热的orm库了，使用者众多，相信你迟早会用上的。
【进阶】geektutu 的七天系列 # https://github.com/geektutu/7days-golang
geektutu 的七天系列，质量很高。有一定难度，但有编程基础的go初学者跟着多练习会提升很多的，强烈推荐。
【进阶】go-kit 微服务 # https://www.hwholiday.com/categories/go-kit/
适合学习 go-kit，设计知识面很广，jwt、etcd、hystrix。。。
【底层逻辑】go 语言设计与实现 # https://draveness.me/golang/ draveness 的这本书相当硬核，偏底层实现，为了深入了解go，值得多读几次。如果是为了面试，我也推荐你读读。
【底层逻辑】go语言原本 # https://golang.design/under-the-hood/zh-cn/preface/
也是大牛，也很硬核解析，
优质博客 # 飞雪无情 峰云就她了 `}),e.add({id:1,href:"/docs/resource/rust/",title:"rust",description:"rust 开源书籍",content:`rust 正在学习中，如有好的学习资源，会继续更新。
基础教程 # rust 程序设计 # https://doc.rust-lang.org/book/
官网教程，也有中文版本https://kaisery.github.io/trpl-zh-cn/title-page.html
rust 语言圣经 # https://course.rs/about-book.html
`}),e.add({id:2,href:"/docs/resource/php/",title:"php",description:"php 开源资源，oscome 开源到",content:`php 的学习一般可以从语法学起，然后是搭建环境，然后是框架，然后就可以搭建项目了，一般会涉及前端知识，也可以学习下。
几年前觉得搭建环境是个麻烦事，如今docker、宝塔兴起后，搭建不费事。
教程手册 # php教程 # https://www.runoob.com/php/php-tutorial.html
熟悉语法使用，小欧个人还比较喜欢菜鸟的各个系列教程。w3school的也不错，https://www.w3school.com.cn/php/index.asp
php手册 # http://www.php.net/manual/zh/ phper必备，适合作为手册使用，各种例子，新特性都有点。
pecl # http://pecl.php.net/
php 扩展仓库，相信你肯定用得到。
PSR # https://www.php-fig.org/psr/
非常建议以此为php编码标准，但很多phper不知道，强烈建议看看。
composer中文文档 # https://docs.phpcomposer.com/
Composer 是 PHP 的一个依赖管理工具，现在的项目中几乎是必不可少的了。
框架 # Laravel 中文文档 # https://learnku.com/docs/laravel/9.x
Laravel 无需多言，功能十分强大。这个剖析文档也值得看看，https://learnku.com/docs/laravel-core-concept/5.5
ThinkPHP文档 # https://www.kancloud.cn/manual/thinkphp6_0/1037479
ThinkPHP 也无需多言，国内使用者众。
workerman # https://www.workerman.net/doc/workerman/
更底层更通用的服务框架，你可以用它开发tcp代理、梯子代理、做游戏服务器、邮件服务器、ftp服务器、甚至开发一个php版本的redis、php版本的数据库、php版本的nginx、php版本的php-fpm等等。
如果想用php做个im，我推荐这个，曾经使用 workerman 成功运行。
yii中文文档 # https://www.yiichina.com/doc
yii 也非常强大，插件式框架，国内使用者也非常多。
swoole 文档 # https://wiki.swoole.com/#/
swoole 性能强大，如果遇到php瓶颈，可以尝试一下。
hyperf 文档 # https://hyperf.wiki/2.2/
近几年很火的 swoole 框架。
优质博客 # 风雪之隅 # https://www.laruence.com/
php 核心开发者，大名鼎鼎的鸟哥，虽然他如今算是淡出 php 开发了，但是依旧关注 php 进展，博客有很多优质文章。
优质论坛 # https://learnku.com/ `}),e.add({id:3,href:"/docs/",title:"软件扩展",description:"vscode插件，vscode扩展，软件扩展，来自开源到",content:""}),e.add({id:4,href:"/docs/vscode/%E6%91%B8%E9%B1%BC%E7%A5%9E%E5%99%A8/",title:"摸 🐟 鱼？不存在的",description:"VSCode 扩展分享，VSCode 摸鱼神器",content:`本期推荐 VSCode 放（摸）松（🐟）神器，上班和学习一样，要劳逸结合的哦 👍
小霸王 # 项目地址: https://marketplace.visualstudio.com/items?itemName=gamedilong.anes
小霸王是一款基于vscode的nes游戏插件，能让你在紧张的开发之余在vscode里放松身心。选择想要玩的游戏，右键菜单下载。下载完成后，会加载到local菜单。点击即可完。 小霸王\u0026mdash;\u0026ndash;其乐无穷！！！但要记得戴耳机或者关闭外音哦！别问我是怎么知道的。。。
韭菜盒子 # 项目地址: https://marketplace.visualstudio.com/items?itemName=giscafer.leek-fund
VSCode 里也可以看股票 \u0026amp; 基金 \u0026amp; 期货实时数据，投资有风险，入市需谨慎！ ⏰s
小欧并不建议初入股市的朋友打开实时查看，会三心二意的，bug连篇的。。。。。。
Cloudmusic # 项目地址: https://marketplace.visualstudio.com/items?itemName=yxl.cloudmusic
网易云音乐插件，功能还蛮丰富的，直接登录账号即可，会同步歌单播客等信息，效果如图。（代码和音乐真的很配哦 💯 ）
z-reader # 项目地址:https://marketplace.visualstudio.com/items?itemName=aooiu.z-reader
用来摸鱼或学习的小说阅读插件，支持在线搜索笔趣阁起点等，也支持本地阅读，支持 txt 和 epub 格式，效果如图。
NBA real-time score # 项目地址: https://marketplace.visualstudio.com/items?itemName=liyangjj.NBARealTimeScore
实时获取当天NBA比赛比分，并显示在vscode下方状态栏左侧；更可以观看实时文字直播，以及赛后数据统计。让你实现边 coding 边关注NBA。
鼓励师系列 # 这个不过多介绍，可自行搜索。
摸鱼不可耻，但要适当哈! 🧑
`}),e.add({id:5,href:"/docs/tool/markdown/",title:"Markdown 编辑器",description:"markdown 编辑器",content:`Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。 它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。
Typora # 项目地址：https://www.typora.io/
相信在收费之前， Typora 的用户应该大有人在，小欧周边就有很多人在使用。
我也曾是重度用户，文档基本都是 Typora + Github，使用感受相当舒适。
优点：
主题多，界面清爽 支持 pdf、html、image 导出（话说小欧的简历就是通过 Typora 的 Orangeheart 主题修改后制作的） 支持插入图片保存特定目录 缺点：
开始收费 Obsdian # 项目地址：https://obsidian.md/
Obsdian 是去年同事推荐给我的，功能十分强大，但是语法稍微有点不一样，可以通过配置去修改。
优点：
双链强大炫酷 免费 社区开放 缺点：
每个项目都要单独设置外观主题，繁琐 有道云笔记 # 项目地址： https://note.youdao.com/
有道云笔记在很早的时候就支持 Markdown 了，而且支持多端，这个非常好，在前几年使用频率较高，但是windows版本软件时常出现卡死情况，一度只使用网页版本。
优点：
多端云存储 依托有道云，功能不仅限于Markdown 可直接分享网页给朋友 缺点：
不开会员有广告 卡顿（曾经，近期使用频率不高） 作业部落 # 项目地址： https://www.zybuluo.com/
这是最早接触 Markdown 时使用的，应该至少2年没用过了，刚尝试登录了一下，发现还有80多篇文档。
这有点惊到我了，必须给站长点赞。
优点：
纯网页端，无需单独安装（也支持客户端了，难道是我曾经一直没发现😓） 支持标签分类 缺点：
上传本地文件需要升级至高级会员，查看详情 VSCode # 项目地址： https://code.visualstudio.com/
这是我写文章正在使用的，装了 Markdown All in One、Markdown Preview Enhanced 等扩展，对于 VSCode 重度使用者相当巴适，要啥自行车。
PS：VSCode 貌似对各种语言支持越来越强，对于重度使用者来说，倒是非常不错的信息。
优点：
依托于 VSCode，扩展众多 缺点：
导出功能较弱 以上是小欧自己深度使用过的 Markdown 编辑器，优缺点等言论也仅限于个人使用体验，仅供参考。如果你有其他好用的 Markdown 编辑器，不妨再评论区留言，分享给大家。
`}),e.add({id:6,href:"/docs/vscode/%E7%BE%8E%E5%8C%96/",title:"颜值扩展",description:"VSCode 扩展分享，颜值党",content:`本期推荐几个颜值扩展，无关乎语言层面，IDE 看得舒适，coding 更快。
vscode-icons # 项目地址: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
这个插件会根据文件后缀、名称显示不同的 icons，颜值颇高，设置后看着各种小图标心情舒畅，颜值党值得一试，如下图。（也可以自己设置喜欢的图标主题，扩展栏搜索 tag:icon-theme 安装你喜欢的即可）
Better Comments # 项目地址: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
美化注释必选，可以通过第一个字符区分不同的注释，也可以自定义，@和diy都是小欧自定义的，不同颜色也更方便区分不同级别的注释，好看又实用。
indent-rainbow # 项目地址: https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow
让缩进不再冰冷，项彩虹🌈一样绚烂。
我的颜色配置如下，效果
{ ... \u0026quot;indentRainbow.colorOnWhiteSpaceOnly\u0026quot;: false, \u0026quot;indentRainbow.colors\u0026quot;: [ \u0026quot;rgba(255,255,60,0.7)\u0026quot;, \u0026quot;rgba(127,255,127,0.7)\u0026quot;, \u0026quot;rgba(255,127,255,0.7)\u0026quot;, \u0026quot;rgba(60 90 170,0.4)\u0026quot; ], \u0026quot;indentRainbow.ignoreErrorLanguages\u0026quot;: [ \u0026quot;markdown\u0026quot; ], \u0026quot;indentRainbow.excludedLanguages\u0026quot;: [ \u0026quot;plaintext\u0026quot; ], \u0026quot;indentRainbow.includedLanguages\u0026quot;: [ ], \u0026quot;indentRainbow.indicatorStyle\u0026quot;: \u0026quot;light\u0026quot;, .... } 效果如图: 简体中文 # 项目地址: https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans
适用于 VS Code 的中文（简体）语言包，无需多言。
Better Align # 项目地址: https://marketplace.visualstudio.com/items?itemName=wwm.better-align
用冒号（ ）、:赋值（、、、、、）和箭头（ ）对齐你的代码。它对逗号优先的编码样式和尾随注释有额外的支持=+=-=*=/==\u0026gt;
需要注意的是，扩展没有内置快捷方式，您必须自己添加快捷键。
比如：
{ \u0026quot;key\u0026quot; : \u0026quot;ctrl+cmd+=\u0026quot;, \u0026quot;command\u0026quot;: \u0026quot;wwm.aligncode\u0026quot;, \u0026quot;when\u0026quot; : \u0026quot;editorTextFocus \u0026amp;\u0026amp; !editorReadonly\u0026quot; } 选择需要对其的代码，输入快捷键 ctrl+cmd+= ，即可看到效果(线上面的是格式过得，下面是未格式化的)。
Power Mode # 项目地址: https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-power-mode
这个安装后默认是不开启的，需要去配置enable一下，效果我就不贴了，插件项目地址页面有，可自行尝试，有点炫酷。（我比较喜欢Flame） 🔥🔥🔥🔥🔥🔥
还有像 Bracket Pair Colorizer2 美化括号的如今的vscode 内置了，无需安装，更新下版本即可，我就不介绍了。
颜值党的你是否有其他扩展推荐呢？不妨在评论区留言，分享给大家吧！
`}),e.add({id:7,href:"/docs/vscode/git%E6%8F%92%E4%BB%B6/",title:"Git 插件",description:"VSCode 扩展分享，VSCode Git 插件",content:`Git 想必在大家伙的日常开发中是必不可少的，本期给大家推荐几个 git 相关插件，希望能提高你的开发效率。
gitigone # 项目地址: https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore
如果你觉得写 gitigone 是个烦人的事情，那么你可以试试，安装后command+shift+P打开，就贸易选择 add gitigone 了。
选择后具体语言后就会生成gitignore 文件啦。 Git History # 项目地址: https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory
在某个文件里直接点击右键，就可以查看当前你文件的 git 历史了，相当方便。
Git Graph # 项目地址: https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph
安装完成后左下角有快捷菜单，点击后看查看自己的 git 提交，如图：
可点击查看单词 commit 的明细：
github # 项目地址: https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github
这个算是针对 github 的扩展，可以快捷的插件 github PR，操作课件如下图。 目前小欧用到比较多的是 git history 和 git graph，像其他的 gitlens 等插件使用不多，就不推荐了。
如果您有其他 git 插件推荐，欢迎在评论区留言分享，感谢您的阅读。
`}),e.add({id:8,href:"/docs/vscode/",title:"VSCode 扩展",description:"VSCode 扩展分享",content:`VSCode 是小欧目前正在使用的IDE，近几年使用人数增长很快。这些扩展是小欧工作中使用过的，分享给诸位，希望能给你提升一点效率。
`}),e.add({id:9,href:"/docs/tool/",title:"工具篇",description:"开源到，oscome，工具篇",content:`小欧在学习与工作中使用过的软件、工具推荐，观点来源于使用感受，如果你觉得不对，或者用什么不足的，欢迎指出。
`}),e.add({id:10,href:"/docs/resource/",title:"开源资源",description:"开源到，oscome，开源资源",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()