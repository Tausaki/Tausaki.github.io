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
                        '/吐槽/',
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
                        '/万维/',
                    ]
                },
                {
                    text: "分镜and参考图",
                    children: [
                        '/分镜/'
                    ]
                },
                {
                    text: '卡德什花园',
                    children: [
                        '/卡洛斯坟场/'
                    ]
                }
            ]
        },
        {
            text: 'MADMAX',
            iconClass: 'aurora-navbar-shoulijindu-xuanzhong',
            children: [
                {
                    link:"",
                    text: '喜欢的MAD',
                    children: [
                    ]
                },
                {
                    text: '我的MAD',
                    children: [
                    ]
                },
                {
                    link:"https://www.bilibili.com/video/BV1M84y1S7zF/",
                    text: '后日谈',
                    children: [
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
                        "/Galgame/2017",
                    ]
                },
                {   text: "追番",
                    children: [
                        "/Anime/",
                    ]
                },
                {
                    text: 'Waifu',
                    children: [
                        '/Waifu/'
                    ]
                }
            ],
        },
        {
            text: '影音馆',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    text: "年度推荐",
                    children: [
                        "/Music/2017-2022/",
                    ]
                },
                {
                    text: "喜欢的音乐",
                    children: [
                        "/Music/2023/",
                    ]
                },
                {
                    text: "图库",
                    children: [
                        "/Pixiv/2023/",
                    ]
                }
            ],
        },
        {
            text: '游戏专区',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    text: "单机类",
                    children: [
                        "/Game/单机/",
                    ]
                },
                {
                    text: "网游类",
                    children: [
                        "/Game/网游/",
                    ]
                },
                {
                    text: "手游类",
                    children: [
                        "/Game/手游/",
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
                        "/AGH VIII/",
                    ]
                },
                {
                    text: "赛事经历",
                    children: [
                        "/比赛/",
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