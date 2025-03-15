module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        {
            //设置标签
            text: '快速开始',
            //设置此标签的链接
            link: 'https://kf.miaola.work/',
            //设置此导航栏的图标，请注意，导航图标只对一级标题有用，
            iconClass: 'aurora-navbar-si-glyph-dial-number-1'
        },
        {
            text: '故事绘',
            iconClass: 'aurora-navbar-blaze-line',
            children: [
                //在这里面的是二级标题，不能为二级标题设置图标
                {
                    text: '日常',
                    children: [
                        {
                            text:'日常',
                            link:'https://Tausaki.github.io/tag/?tag=日常',
                        },
                        {
                            text: '有感而发',
                            link: 'https://Tausaki.github.io/tag/?tag=有感而发',
                        },
                    ]
                },
            ]
        },
        {
            text: '图书馆',
            iconClass: 'aurora-navbar-si-glyph-billiard-ball',
            children: [
                {
                    text: '概念图',
                    children: [
                        {
                            text:"遗海拾枝",
                            link:"https://Tausaki.github.io/tag/?tag=遗海拾枝",
                        },
                    ]
                },
                {
                    text: "电幻国度",
                    children: [
                        {
                             text:'分镜',
                             link:"https://Tausaki.github.io/tag/?tag=分镜",
                        },
                        {
                             text: '',
                             link: 'https://Tausaki.github.io/tag/?tag=',
                        },
                    ]
                },
                {
                    text: '星座线',
                    children: [
                        {
                             text:'星座线',
                             link:"https://Tausaki.github.io/tag/?tag=星座线",
                        },
                    ]
                }
            ]
        },
        {
            text: 'MADMAX',
            iconClass: 'aurora-navbar-shoulijindu-xuanzhong',
            children: [
                {
                    text: '彼方探访',
                    children: [
                        {
                             text:"MAD",
                             link:"https://Tausaki.github.io/tag/?tag=mad",
                        },
                    ]
                },
                {
                    text: '私小说',
                    children: [
                        {
                              text:"私小说",
                              link:"https://Tausaki.github.io/tag/?tag=私小说",
                        },
                    ]
                },
                {
                    text: '后室',
                    children: [
                        {
                            text:"",
                            link:"https://Tausaki.github.io/tag/?tag=",
                        },
                    ]
                },
            ]
        },
        {
            text: 'ACGN',
            iconClass: 'aurora-navbar-weather',
            children: [
                {   text: "Galgame",
                    children: [
                        {
                            text:"游记",
                            link:"https://Tausaki.github.io/tag/?tag=游记",
                        },
                        {
                            text:"准备游玩",
                            link:"http://bangumi.tv/game/list/402462/wish",
                        },
                        {
                            text:"玩过",
                            link:"http://bangumi.tv/game/list/402462/collect",
                        },
                        {
                            text:"gal攻略",
                            link:"https://seiya-saiga.com/",
                        },
                        {
                            text:"gal特殊码",
                            link:"https://www.ymgal.games/specialcode",
                        },
                    ]
                },
                {
                    text: "Anime",
                    children: [
                        {
                            text:"动漫",
                            link:"https://Tausaki.github.io/tag/?tag=Anime",
                        },
                        {
                            text:"我看过的动画",
                            link:"http://bangumi.tv/anime/list/402462/collect",
                        },
                        {
                            text:"Waifu",
                            link:"https://bangumi.tv/user/402462/mono",
                        },
                    ]
                },
                {
                    text: '妖精咖啡厅',
                    children: [
                        {
                            text:"孤独少女",
                            link:"https://Tausaki.github.io/tag/?tag=孤独少女"
                        },
                    ]
                }
            ],
        },
        {
            text: '古書堂',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    text: "影音馆",
                    children: [
                        {
                            text:"2017-2022",
                            link:"https://Tausaki.github.io/tag/?tag=music"
                        },
                    ]
                },
                {
                    text: "音乐街",
                    children: [
                        {
                            text:"2023",
                            link:"https://Tausaki.github.io/tag/?tag=music"
                        },
                    ]
                },
                {
                    text: "图书",
                    children: [
                        {
                             text:"书架",
                             link:'https://Tausaki.github.io/tag/?tag=书架'
                        },
                        {
                             text:"PIXIV",
                             link:'https://Tausaki.github.io/tag/?tag=Pixiv'
                        },
                    ]
                }
            ],
        },
        {
            text: '游戏风云',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    text: "单机类",
                    children: [
                        {
                            text:"",
                            link:"https://Tausaki.github.io/tag/?tag=",
                        },
                        {
                            text: 'DCS',
                            link: 'https://Tausaki.github.io/tag/?tag= DCS',
                        },
                    ]
                },
                {
                    text: "网游类",
                    children: [
                        {
                            text:"战舰世界",
                            link:"https://Tausaki.github.io/tag/?tag=网络游戏",
                        },
                    ]
                },
                {
                    text: "手游类",
                    children: [
                        {
                            text:"星穹铁道",
                            link:"https://Tausaki.github.io/tag/?tag=手游",
                        },
                    ]
                }
            ],
        },
        {
            text: 'Life',
            iconClass: 'aurora-navbar-hua2',
            children: [
                {
                    text: "AGH VIII",
                    children: [
                        {
                            text:"用量",
                            link:"https://Tausaki.github.io/tag/?tag= AGH VIII"
                        },
                    ]
                },
                {
                    text: "历险记",
                    children: [
                        {
                            text:"比赛",
                            link:"https://Tausaki.github.io/tag/?tag=比赛",
                        },
                    ]
                },
            ],
        },
        {
            text: 'about',
            iconClass: 'aurora-navbar-a-ziyuan107',
            children: [
                {
                    text: '关于我',
                    children: [
                        {
                            text: 'Me',
                            link: '/about'
                        },
                    ],
                },
                {
                    text: 'TAG',
                    children: [{
                        text: 'tag',
                        link: '/tag'
                    }],
                },
                {
                    text: "时间轴",
                    children: [
                        {
                            text: 'archive',
                            link: '/archive'
                        },
                    ],
                },
            ],
        },

        {
            text: '友情链接',
            link: '/link',
            iconClass: 'aurora-navbar-guide'
        },
    ]
}