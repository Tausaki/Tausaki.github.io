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
                    text: '吐槽',
                    children: [
                        {
                            text:'吐槽',
                            link:'/故事绘/吐槽/吐槽导航.md'
                        },
                        {
                            text: '有感而发',
                            link: '故事绘/有感而发/有感而发导航.md'
                        }
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
                            link:"/万维/万维导航.md"
                        }
                    ]
                },
                {
                    text: "分镜and参考图",
                    children: [
                        {
                             text:'分镜',
                             link:"/分镜/分镜导航.md"
                        },
                        {
                            text: '参考图',
                            link: '/参考图/参考图导航.md'
                        }
                    ]
                },
                {
                    text: '卡德什花园',
                    children: [
                        {
                             text:'卡德什花园',
                             link:"/卡德什花园/卡德什花园导航.md"
                        }
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
                             link:"/LoveMad/喜欢的mad导航.md"
                        }
                    ]
                },
                {
                    text: '造船厂',
                    children: [
                        {
                              text:"我的MAD",
                              link:"/Mymad/Mymad导航.md"
                        }
                    ]
                },
                {
                    text: '后室',
                    children: [
                        {
                            text:"后日谈",
                            link:"/Mymad/后日谈/后日谈导航.md"
                        }
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
                            text:"感想",
                            link:"/Galgame/感想/感想导航.md",

                            text:"准备游玩",
                            link:"http://bangumi.tv/game/list/402462/wish",

                            text:"玩过",
                            link:"http://bangumi.tv/game/list/402462/collect"
                        }
                    ]
                },
                {
                    text: "追番",
                    children: [
                        {
                             text:"我看过的动画",
                             link:"http://bangumi.tv/anime/list/402462/collect"
                        }
                    ]
                },
                {
                    text: 'Waifu',
                    children: [
                        {
                            text:"老婆们",
                            link:"https://bangumi.tv/user/402462/mono"
                        }
                    ]
                }
            ],
        },
        {
            text: '影音馆',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    text: "年度十佳",
                    children: [
                        {
                            text:"2017-2022",
                            link:"/Music/年度十佳导航.md"
                        }
                    ]
                },
                {
                    text: "喜欢的音乐",
                    children: [
                        {
                            text:"2023",
                            link:"/Music/Music导航.md"
                        }
                    ]
                },
                {
                    text: "图库",
                    children: [
                        {
                             text:"2023",
                             link:'/Pixiv/2023/readme.md'
                        }
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
                            link:"/Game/单机/战争游戏红龙/"
                        },
                        {
                            text: 'DCS',
                            link: '/DCS/readme.md'
                        }
                    ]
                },
                {
                    text: "网游类",
                    children: [
                        {
                            text:"战争雷霆",
                            link:"/Game/网游"
                        }
                    ]
                },
                {
                    text: "手游类",
                    children: [
                        {
                            text:"战双帕米什",
                            link:"/Game/手游"
                        }
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
                        }
                    ],
                },
                {
                    text: "赛事经历",
                    children: [
                        {
                            text:"比赛",
                            link:"/比赛/比赛导航.md"
                        }
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
                        }
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
                        }
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