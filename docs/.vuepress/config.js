const { path } = require("@vuepress/utils");
const {navbar} = require("./navbar.js")
const {friendLinks} = require("./friendLinks")
const {socials} = require("./socials");
const {randomColor} = require("./randomColor");
const {siteInformation} = require("./siteInformation");
const {message} = require("./message");
const {donate} = require("./donate");
module.exports = {
    //base: '/REPO/',//如果你准备发布到 https://<USERNAME>.github.io/<REPO>/ ，也就是说你的仓库地址是 https://github.com/<USERNAME>/<REPO> ，则将 base 设置为 "/<REPO>/"。

    /*
    * 这里是配置Markdown语法增强的配置，如需配置，请查看官方介绍https://v2.vuepress.vuejs.org/zh/guide/markdown.html
    * 或者你也可以看过我的配置，使用该配置的文件路径Aurora-theme/lib/node/auroraTheme.js
    * */
    extendsMarkdown: (md) => {

    },

    // 打开下面注释，将使用webpack作为打包工具，如果注释将使用vite作为打包工具[目前主题不能使用vite打包，会报错]
    bundler: '@vuepress/bundler-webpack',
    bundlerConfig: {

    },

    /*
    * 在这里配置插件
    * 插件plugins是一个数组，官方介绍: https://v2.vuepress.vuejs.org/zh/guide/plugin.html
    * */
    plugins: [
        "@vuepress/plugin-search",
        {
            locales: {
                "/": {
                    placeholder: "Search",
                },
                "/zh/": {
                    placeholder: "搜索",
                },
            },
        },
        /*
        * 在主题中，使用path.resolve(__dirname,的地方，都是使用本地的插件或者主题，看位置
        * 这里是配置说说插件，使用https://aurora.xcye.xyz/plugin/coze/
        * */
        [
            "coze",
            {
                appId: '2A2Dyd2Affrnldhwftlaaa',//你需要在leancloud中创建自己的appId，请参照文档https://aurora.xcye.xyz/plugin/coze/
                appKey: 'qHYTbb91iOPLelyC9aaa',
                masterKey: 'eUwfvS3luIPnPiaaa',
                //下面这些是可选的
                avatarPath: '/jpoagt5sd.png',//说说头像url
                registerPath: '/register', //自定义插件默认提供的注册页面路由，请在前面加上/
                onlyAdministrator: false //是否运行其他注册的用户发布说说，true表示只有管理员可以发布
            }
        ],
        /*
        * 该插件是配置时间轴，使用https://aurora.xcye.xyz/plugin/archive/
        * 请配置一下excludes，否则在时间轴那里，会出现非文件页面链接
        * */
        [
            "archive",
            {
                excludes: ['/footer.html','/404.html','/about/','/mood/','/link/','/tag/','/photo/'],
                noTitle: '暂时没有标题配置'
            }
        ],
        /*
        * 音乐插件，使用：https://aurora.xcye.xyz/plugin/player/
        * */
        [
            "player",
            {
                disableSpace: false,
                //网易云单个歌单id
                songIds: ['29723011','1887893189','1421069053'],
                //网易云歌单
                playlist: '7082462754',
                showPlaylist: false,
                //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
                disabledNetEaseMusic: true,

                //请求接口的baseURL
                serverUrl: 'https://netease-cloud-music-api-teal-psi.vercel.app/',

                //本地歌曲
                localSongs: {
                    coverUrl: 'https://cdn.donmai.us/sample/73/b1/__ansel_arknights_drawn_by_odjikasu__sample-73b188fbdc4db3b394f8ef16eb344f04.jpg',
                    songs: [
                        {
                            path: '/songs/1.mp3',
                            songName: 'ハンブレッダーズ「またね」',
                            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001F8wVN4GSJ5j.jpg?max_age=2592000'
                        },
                        {
                            path: '/songs/8月を指折り数える君と町で出逢える確率について.mp3',
                            songName: '8月を指折り数える君と町で出逢える確率について',
                            cover: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.pUIJF8uzjQfnAN4xyIJFtwHaHa?w=159&h=180&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/16の夢旅人.mp3',
                            songName: '16の夢旅人',
                            cover: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.4-rJqPq86fpeWLgW_8SVAwAAAA?w=124&h=150&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/DEPARTURES.mp3',
                            songName: 'DEPARTURES',
                            cover: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.X1XrNj3xO-YHQ6ykFOE0ewAAAA?w=173&h=176&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/星見る頃を過ぎても.mp3',
                            songName: '星見る頃を過ぎても',
                            cover: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.N3zFawoMzWwMYP3PPA6lfQHaFj?w=227&h=180&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/桜の唄.mp3',
                            songName: '桜の唄',
                            cover: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.N3zFawoMzWwMYP3PPA6lfQHaFj?w=227&h=180&c=7&r=0&o=5&pid=1.7'
                        },{
                            path: '/songs/Kikoenaiyouni.mp3',
                            songName: 'Kikoenaiyouni',
                            cover: ''
                        },
                        {
                            path: '/songs/アマネ.mp3',
                            songName: 'アマネ',
                            cover: ''
                        },
                        {
                            path: '/songs/サイアオタイプ.mp3',
                            songName: 'サイアオタイプ',
                            cover: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.7PIhAcptrXvXal3X2gcF7wAAAA?rs=1&pid=ImgDetMain'
                        },
                        {
                            path: '/songs/スプートニク.mp3',
                            songName: 'スプートニク',
                            cover: ''
                        },
                        {
                            path: '/songs/サウダージ.mp3',
                            songName: 'サウダージ',
                            cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.dxbJy5wvIm0N7K1JbvNF9QHaE_?w=300&h=202&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/アポロ.mp3',
                            songName: 'アポロ',
                            cover: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.D_IBwogugB7hI9iyJGBoiAHaGl?w=205&h=182&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/秋風の狂詩曲.mp3',
                            songName: '秋風の狂詩曲',
                            cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.blMhQYshKdybG-gATysAowD6D6?w=187&h=187&c=7&r=0&o=5&pid=1.7'
                        },
                        {
                            path: '/songs/不等価交換.mp3',
                            songName: '不等価交換',
                            cover: 'https://img2.doubanio.com/view/subject/m/public/s34108752.jpg'
                        },
                        {
                            path: '/songs/ハテノハテ.mp3',
                            songName: 'ハテノハテ',
                            cover: ''
                        },
                        {
                            path: '/songs/悲しみの街、君の涙で滲む.mp3',
                            songName: '悲しみの街、君の涙で滲む',
                            cover: ''
                        },
                        {
                            path: '/songs/風になって.mp3',
                            songName: '風になって',
                            cover: ''
                        },
                        {
                            path: '/songs/空になる.mp3',
                            songName: '空になる',
                            cover: ''
                        },
                        {
                            path: '/songs/夢から醒めた憐れな野獣だな.mp3',
                            songName: '夢から醒めた憐れな野獣だな',
                            cover: ''
                        },
                    ]
                }
            }
        ],

        /*
        * 气泡插件，使用：https://aurora.xcye.xyz/plugin/bubble/
        * */
        [
            "bubble",
            {
                //气泡数量 推荐0(不包括)到1之前的小数，
                bubbleNumber: 0.14,

                //气泡透明度 0到1之间的小数
                bubbleAlpha: 0.6,

                //透明度变化速度，越接近于0越好
                alphaChangeSpeed: 0.00001,

                //气泡大小，推荐0到1之间的值
                size: 0.4,

                //气泡大小变化速度 越小越好
                sizeChangeSpeed: 0.0002,

                //气泡上升速度
                riseSpeed: 0.4,

                //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
                color: '255,255,255',

                zIndex: -2
            }
        ],
    ],
    /*
    * 设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    * 如果你需要额外引入css样式或者是js文件，请在head中引入，如何引入，可以参照下面的引入方式
    * */
    head: [
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ],
        //设置站点icon
        [
            "link",
            {
                href: "/favicon.ico",
                rel: "icon",
            },
        ],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2932340_r7zitafg82.css'
            }
        ],
        /*[
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2951154_btu3y5blqnn.css'
            }
        ]*/
    ],
    //这里使用本地主题
    //theme: path.resolve(__dirname, "../../Aurora-theme/lib/node/index.js"),
    theme: 'aurora',

    //站点title
    title: "竹紫Tausagi",

    //设置站点语言
    lang: 'zh-CN',

    //设置运行npm run dev的端口
    port: 8080,

    /*
    * themeConfig是和主题相关的配置项，主题的所有配置，都是在此处进行配置的
    * */
    themeConfig: {
        /*
        * 这里配置导航栏项，建议将navbar提取出，比如navbar.js
        * 使用：https://aurora.xcye.xyz/homeconfig.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
        * 因为navbar会存在很多的配置，所以推荐在该目录下，创建一个navbar.js文件，此文件中，使用module.exports = {navbar: XXX}
        * 可以参照docs/.vuepress/navbar.js使用，然后在config.js的themeConfig处引入该文件
        * */
        navbar: navbar,

        //禁用黑夜模式，当前版本未提供
        darkMode: false,

        //项目地址，会在顶部导航栏和侧边栏显示GitHub的地址
        repo: "https://github.com/qsyyke/vuepress-theme-aurora",

        //自定义GitHub的图标
        repoIconClass: 'aurora-navbar-github',

        //md文件的仓库地址
        docsRepo: 'https://github.com/qsyyke/aurora-docs',

        /*
        * 站点是否是使用github Actions自动部署，如果你使用github Actions完成自动部署，那么这里一定要为TRUE，为TRUE，假如你把此项目push
        * 到https://github.com/qsyyke/aurora-docs这个仓库中，那么你需要将docsRepo设置为https://github.com/qsyyke/aurora-docs，
        * 那么在文章页面，会根据根据你docsRepo和docsBranch设置正确的edit链接，也就是可以一键打开GitHub仓库中，此篇md文件的编辑
        * */
        githubActions: false,

        //md文件存放的仓库分支
        docsBranch: 'main',

        //顶部导航栏，你repo地址的超链接文本
        repoLabel: "Aurora-theme",

        //是否启用文章在线编辑，默认开启，会在每篇文章的底部，创建一个链接，指向该md在GitHub中的edit地址
        editLink: true,

        //在线编辑文字，点击编辑该文章的label
        editLinkText: "edit",

        //该md最后更新时间，使用github commit的提交时间
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "程",

        //首页中间hero图片地址
        heroImg: '/2JG]8B0YA6TU.png',

        //logo图片地址
        logo: "/avatar.png",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "/ljz.gif",

        //这是首页文章列表懒加载图片
        homePageLazyLoadingImg: '/aurora-loading.gif',

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响，推荐自己创建一个socials.js
        socials: socials,

        //logo旁文字 默认值为Aurora
        logoTitle: "雨傘物語",

        //貌似没用的配置项┭┮﹏┭┮
        headTitle: "this is headTitle",

        //站点描述
        description: "这里是竹紫的古本屋",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "vuepress主题,vuepress theme,生活琐事,二次元博客,简约博客,博客主题,静态主题",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 300000,

        //随机一言接口 没用配置
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",
        /*
        * 关于页面 推荐单独创建一个about.js文件存放关于页面信息
        * 使用：https://aurora.xcye.xyz/homeconfig.html
        * */
        about: [
            {
                bar: false,
                title: "我?",
                describe: [
                    "电子黑奴",
                    "擅长摘电子棉花",
                    '喜欢吃电子炸鸡电子葡萄酒"',
                    "喜欢打电动，每日最低消费2小时 ",
                    "喜欢的电影月球旅行记，大都会，卡里加里博士的小屋，银河漫游指南，银翼杀手，布达佩斯大饭店，各类爆米花，晚间剧场",
                    "DOOMMER",
                    "正在追的番有每个季度的厕纸和废萌日常番",
                ],
                tag: [
                    "galgame",
                    "社恐",
                    "番剧",
                    "电影",
                    "安静",
                    "音乐",
                    "小说",
                    "宅",
                    "懒",
                ],
                showTag: true,
            },
            {
                bar: false,
                title: "简介",
                describe: [
                    "失败人生",
                    "好想转生",
                    "转个异世界JK",
                    "你害没活腻呢？",
                    "呃",
                ],
                tag: ["大家加油呀`Σ(￣□￣||)` ..."],
                showTag: true,
            },
            {
                bar: true,
                title: "未来规划",
                describe: ["每1-2年一部旗舰级静止系MAD", "换电脑",],
                tag: ["忘记过去，展望未来"],
                showTag: true,
            },
            {
                bar: true,
                title: "比赛经历",
                describe: [
                    {
                        name: "战地1942-2016跨年战",
                        score: 100,
                    },
                    {
                        name: "2022黄金祭",
                        score: 100,
                    },
                    {
                    },
                ],
                showTag: true,
            },
            {
                bar: true,
                title: "闲话",
                describe: [
                    "说点我想说的，听点你爱听不听",
                ],
            },
            {
                bar: false,
                title: "",
                describe: [
                    "",
                ],
                tag: [],
                showTag: false,
            },
            {
                title: "",
                bar: false,
                tag: [],
                showTag: false,
                describe: [
                    "",
                ],
            },
        ],

        //这是配置随机背景；颜色 可以不设置，有默认值 推荐单独创建一个random.js文件
        randomColor: randomColor,

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],

        /*
        * 友情链接数组 推荐单独创建一个friendLinks.js存放友情链接的配置，可以参照navbar项的配置
        * 使用：https://aurora.xcye.xyz/page/friendlink.html
        * */
        friendLinks: friendLinks,

        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部，推荐单独创建一个文件存放
        siteInformation: siteInformation,

        //需要排除的标签，自动生成的标签中，不会有这个标签，这是一个数组
        //excludeTag: ["note"],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "本网站的建立特别感谢:YCX、Mackerel、Akki、saltedfish、Una-Atadura、土豆、Aurora",
            "<img src='/元素/sd5.png' class='素材1' />",
            "<img src='/元素/sd (3).png' class='素材2' />",
            "<img src='/元素/sd (4).png' class='素材3' />",
            "<img src='/元素/sd 6.png' class='素材4' />",
            "<img src='/元素/closetimg7.png' class='素材5' />",
            "<img src='/元素/stand.png' class='素材6' />",
            "<img src='/bg/bg (2).jpg' class='素材7' />",
            "<img src='/元素/sd (5).png' class='素材8' />",
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: true,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "10/6/2023 17:14:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //公告，是一个数组，支持图片，HTML
        message: message,

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "`╮(￣▽￣)╭`",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //首页中间框的话语
        mood: "青衫烟雨客",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,

        //默认的圆角，传入数字
        defaultBorderRadius: 10,

        //默认的透明度，传入0到1之间的小数，0表示全透明
        defaultOpacity: 1,

        //首页文章列表透明度是否跟随样式面板改变，true表示跟随，全白色,false表示不跟随
        isHomePageFollow: false,

        //默认模糊度
        defaultBlur: 1,

        //手机端，是否在页面的底部显示侧边栏列表，默认开启，如果需要开启，请将此值设置为FALSE
        //mobilePageSidebar: false,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //赞赏信息
        donate: donate,

        //评论配置 请自己查看文档配置 https://aurora.xcye.xyz/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: 'https://aurora-local-7hrjb6mp8-qsyyke.vercel.app/',
            emojis: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo'
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "古本屋",

            //作者
            author: "竹紫",

            //博客前缀
            preBlog: "Tausagi",

            //海报博客名称后缀
            suffixBlog: " theme",

            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "/jpoagt5sd.png",
        },

        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: true,

        //是否开启在线添加说说功能，如果需要，请自己写后台，修改源码，目前在主题内部暂未加入 组件位置docs/.vuepress/theme/lib/client/components/child/AddMood.vue
        showMoodEdit: false,

        //此项仅限我自己的增加说说请求配置，暂未提供注册服务，目前仅限自己使用，可能在以后完善之后，你们只需要简单配置下，就能使用了，期待
        addMood: {
            siteName: "localhost:8080",
            appId: "q4LlYVTTk2r39sNrJr7BL9A6p",
            appKey: "VxezWTppppyX2LTx4TUK8w6e2",
        },

        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: false,

            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                "/bg/5.png",
                '/bg/4.png',
                '/bg/7.png'
            ],
            //友情链接页面
            friend: [
                "/bg/6.png",
                '/bg/2.png'
            ],
            //标签页面
            tag: [
                "/bg/2.png"
            ],
            //心情页面
            mood: [
                "/bg/1.png"
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            "/bg/1.png",
            '/bg/2.png',
            '/bg/3.jpg',
            '/bg/4.jpg',
            '/bg/4.png',
            '/bg/5.jpg',
            '/bg/6.png',
            '/bg/7.png',
            '/bg/8.jpg',
            '/bg/9.jpg',
            '/bg/10.png',
            '/bg/11.png',
            '/bg/12.png',
            '/bg/13.png',
            '/bg/14.png',
            '/bg/15.png',
            '/bg/16.jpg',
            '/bg/17.png',
            '/bg/18.png',
            '/bg/19.png',
            '/bg/20.jpg',
        ],

        //手机端首页背景图片
        homeWpsMobile: [
            "/bg/1.png",
            '/bg/2.png',
            '/bg/3.jpg',
            '/bg/4.jpg',
            '/bg/5.jpg',
            '/bg/6.png',
            '/bg/7.png',
            '/bg/8.jpg',
            '/bg/9.jpg',
            '/bg/10.png',
            '/bg/11.png',
            '/bg/12.png',
            '/bg/13.png',
            '/bg/14.png',
        ],

        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 4,

        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/qsyyke/vuepress-theme-aurora",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: false,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 3,

        //首页文章列表封面图api接口
        homePageImgApi: "https://www.dmoe.cc/random.php?return=text?time=-Infinity",

        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "Aurora",

        //侧边栏标签处显示还是分类还是标签，只有两个值，默认为分类，如果为categories，那么就显示为类别，否则显示为标签
        sidebarTag: "categories",

        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: true,

        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: 'https://picture.cco.vin/pic/rmimg?type=bing',

        /*
        * 以下为v1.5.4新增功能
        * */

        //文章h2标签的icon
        articleH2Icon: '🌸',

        //文章h3标签的icon
        articleH3Icon: '🐳',

        //文章h4标签及h4标签之后的标签的icon
        articleH4Icon: '⛄',

        //v1.6.4新增配置
        sidebarAvatar: '/jpoagt5sd.png',

        //1.7.1增加配置
        sugCountPerMin: 300,

        //v1.8.0新增配置项
        //是否展示文章推荐 默认展示
        showRecommend: true,

        //文章页面是否显示上一页，下一页 默认展示
        articlePagination: true,

        //这个global暂时没用
        global: {
            sidebar: {
                showStatus: true,
                perData: false,
                social: false,
                friendLink: true,
                navbar: false,
                latestPage: true,
                message: false,
                tag: true,
                siteData: false
            },
            footer: false,
        },

        //excludeTag: ["note"], 此配置项，不再需要使用

        //在统计文章，标签，类别的时候，需要排除的路径，只针对于根目录下的路径，
        excludePath: ['/footer.html','/v1.3.0/','/plugin/',"/node.html","/style.html"],

        //类别项是否包含文件夹名，默认包含
        categoriesIncludeFolderName: false,
        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.4,

            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255'
        },

        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: '2A2Dyd2AffrnldhwftlEddVn-MdYXbMMI',
            appKey: 'qHYTbb91iOPLelyC9lpbXxLH',
            masterKey: 'eUwfvS3luIPnPiHS5SpEhDYr',
        },


        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: true,

        /*
        * 以下是1.11.0版本新增的配置项
        * */

        //随机一言接口，请注意，一定要保证该接口直接返回Text文本，一定要保证该接口直接返回Text文本，而不是返回json
        randomSayApi: {
            method: 'GET',
            urlApi: 'https://v1.hitokoto.cn/?encode=text&c=a'
        },

        /*
        * 一下是v1.11.1版本增加的配置
        * */
        afDianUrl: 'https://afdian.net/@qsyyke',//你的爱发电个人页面地址

        /*
        * 下面这些是v1.12.0版本新增的配置项
        * */

        // 首页置顶文字
        homeTopText: '置顶',

        //侧边栏一句话描述
        sidebarDesc: '滅び朽ちる世界に追憶の花束を',

        /*
        * 下面的是v1.13.0版本的配置
        * */

        /*
        * 如果你以前使用的是其他的主题或者工具，比如hexo的主题，reco主题等等，发现frontmatter中的标签并不是使用tag字段设置，而是使用比如tags进行设置的
        * 那么你可以像customTagName: 'tags'自定义标签的字段，此配置仅仅针对于md文件设置的标签并不是使用tag字段，请注意，谨慎使用
        * */
        //customTagName: 'tags',

        /*
       * 如果你以前使用的是其他的主题，比如hexo，reco等等，发现frontmatter中的类别并不是使用categories字段，而是使用比如category进行设置的
       * 那么你可以像customCategoriesName: "category"这样自定义类别的字段，此配置仅仅针对于md文件设置的类别并不是使用categories字段，请注意，谨慎使用
       * */
        //customCategoriesName: "category",

        /*
        * 下面这个是v1.13版本新增的配置项
        * */

        //是否显示关于页面气泡效果 默认开启
        showAboutPageBubble: true,
    }
};
