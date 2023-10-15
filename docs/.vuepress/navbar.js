module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        {
            //设置标签
            text: '快速开始',
            //设置此标签的链接
            link: 'https://www.bilibili.com/video/BV1M84y1S7zF/',
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
                            link:'https://reisenzone.github.io/tag/?tag=日常',
                        },
                        {
                            text: '有感而发',
                            link: 'https://reisenzone.github.io/tag/?tag=有感而发',
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
                            text:"万维",
                            link:"https://reisenzone.github.io/tag/?tag=万维",
                        },
                    ]
                },
                {
                    text: "电幻国度",
                    children: [
                        {
                             text:'分镜',
                             link:"https://reisenzone.github.io/tag/?tag=分镜",
                        },
                        {
                             text: '参考图',
                             link: 'https://reisenzone.github.io/tag/?tag=参考图d',
                        },
                    ]
                },
                {
                    text: '卡德什花园',
                    children: [
                        {
                             text:'卡德什花园',
                             link:"https://reisenzone.github.io/tag/?tag=卡德什花园",
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
                    text: '喜欢的MAD',
                    children: [
                        {
                             text:"喜欢的MAD",
                             link:"https://reisenzone.github.io/tag/?tag=Lovemad",
                        },
                    ]
                },
                {
                    text: '造船厂',
                    children: [
                        {
                              text:"我的MAD",
                              link:"https://reisenzone.github.io/tag/?tag=Mymad",
                        },
                    ]
                },
                {
                    text: '后室',
                    children: [
                        {
                            text:"后日谈",
                            link:"https://reisenzone.github.io/tag/?tag=后日谈",
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
                            link:"https://reisenzone.github.io/tag/?tag=游记",
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
                            link:"https://reisenzone.github.io/tag/?tag=Anime",
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
                            link:"https://reisenzone.github.io/tag/?tag=孤独少女"
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
                            link:"https://reisenzone.github.io/tag/?tag=music"
                        },
                    ]
                },
                {
                    text: "音乐街",
                    children: [
                        {
                            text:"2023",
                            link:"https://reisenzone.github.io/tag/?tag=music"
                        },
                    ]
                },
                {
                    text: "图书",
                    children: [
                        {
                             text:"书架",
                             link:'https://reisenzone.github.io/tag/?tag=书架'
                        },
                        {
                             text:"PIXIV2023",
                             link:'https://reisenzone.github.io/tag/?tag=Pixiv'
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
                            text:"战争游戏 红龙",
                            link:"https://reisenzone.github.io/tag/?tag=战争游戏红龙",
                        },
                        {
                            text: 'DCS',
                            link: 'https://reisenzone.github.io/tag/?tag=DCS',
                        },
                    ]
                },
                {
                    text: "网游类",
                    children: [
                        {
                            text:"战舰世界",
                            link:"https://reisenzone.github.io/tag/?tag=战舰世界",
                        },
                    ]
                },
                {
                    text: "手游类",
                    children: [
                        {
                            text:"战双帕米什",
                            link:"https://reisenzone.github.io/tag/?tag=手游",
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
                            text:"2017",
                            link:"/AGH VIII/2017.md"
                        },
                        {
                            text:"2018",
                            link:"/AGH VIII/2018.md"
                        },
                        {
                            text:"2019",
                            link:"/AGH VIII/2019.md"
                        },
                        {
                            text:"2020",
                            link:"/AGH VIII/2020.md"
                        },
                        {
                            text:"2021",
                            link:"/AGH VIII/2021.md"
                        },
                        {
                            text:"2022",
                            link:"/AGH VIII/2022.md"
                        },
                        {
                            text:"2023",
                            link:"/AGH VIII/2023.md",
                        },
                    ],
                },
                {
                    text: "赛事经历",
                    children: [
                        {
                            text:"比赛",
                            link:"https://reisenzone.github.io/tag/?tag=比赛",
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