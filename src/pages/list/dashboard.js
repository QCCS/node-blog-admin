/**
 * Created by zhouli on 18/9/19
 */
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import '../../styles/pages/list/dashboard.scss';
import ReactEcharts from 'echarts-for-react';

require("echarts/map/js/china.js");
const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: "#ff0000",
        },
    },
});

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'recents',
        };

    }

    getOption2 = () => {
        const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
        const bgColor = '#2E2733';

        const itemStyle = {
            star5: {
                color: colors[0]
            },
            star4: {
                color: colors[1]
            },
            star3: {
                color: colors[2]
            },
            star2: {
                color: colors[3]
            }
        };

        const data = [{
            name: '虚构',
            itemStyle: {
                normal: {
                    color: colors[1]
                }
            },
            children: [{
                name: '小说',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '疼'
                    }, {
                        name: '慈悲'
                    }, {
                        name: '楼下的房客'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '虚无的十字架'
                    }, {
                        name: '无声告白'
                    }, {
                        name: '童年的终结'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '疯癫老人日记'
                    }]
                }]
            }, {
                name: '其他',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '纳博科夫短篇小说全集'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '安魂曲'
                    }, {
                        name: '人生拼图版'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '比起爱你，我更需要你'
                    }]
                }]
            }]
        }, {
            name: '非虚构',
            itemStyle: {
                color: colors[2]
            },
            children: [{
                name: '设计',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '无界面交互'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '数字绘图的光照与渲染技术'
                    }, {
                        name: '日本建筑解剖书'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '奇幻世界艺术\n&RPG地图绘制讲座'
                    }]
                }]
            }, {
                name: '社科',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '痛点'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '卓有成效的管理者'
                    }, {
                        name: '进化'
                    }, {
                        name: '后物欲时代的来临',
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '疯癫与文明'
                    }]
                }]
            }, {
                name: '心理',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '我们时代的神经症人格'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '皮格马利翁效应'
                    }, {
                        name: '受伤的人'
                    }]
                }, {
                    name: '3☆',
                }, {
                    name: '2☆',
                    children: [{
                        name: '迷恋'
                    }]
                }]
            }, {
                name: '居家',
                children: [{
                    name: '4☆',
                    children: [{
                        name: '把房子住成家'
                    }, {
                        name: '只过必要生活'
                    }, {
                        name: '北欧简约风格'
                    }]
                }]
            }, {
                name: '绘本',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '设计诗'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: '假如生活糊弄了你'
                    }, {
                        name: '博物学家的神秘动物图鉴'
                    }]
                }, {
                    name: '3☆',
                    children: [{
                        name: '方向'
                    }]
                }]
            }, {
                name: '哲学',
                children: [{
                    name: '4☆',
                    children: [{
                        name: '人生的智慧'
                    }]
                }]
            }, {
                name: '技术',
                children: [{
                    name: '5☆',
                    children: [{
                        name: '代码整洁之道'
                    }]
                }, {
                    name: '4☆',
                    children: [{
                        name: 'Three.js 开发指南'
                    }]
                }]
            }]
        }];

        for (let j = 0; j < data.length; ++j) {
            const level1 = data[j].children;
            for (let i = 0; i < level1.length; ++i) {
                const block = level1[i].children;
                const bookScore = [];
                let bookScoreId;
                for (let star = 0; star < block.length; ++star) {
                    let style = (function (name) {
                        switch (name) {
                            case '5☆':
                                bookScoreId = 0;
                                return itemStyle.star5;
                            case '4☆':
                                bookScoreId = 1;
                                return itemStyle.star4;
                            case '3☆':
                                bookScoreId = 2;
                                return itemStyle.star3;
                            case '2☆':
                                bookScoreId = 3;
                                return itemStyle.star2;
                        }
                    })(block[star].name);

                    block[star].label = {
                        color: style.color,
                        downplay: {
                            opacity: 0.5
                        }
                    };

                    if (block[star].children) {
                        style = {
                            opacity: 1,
                            color: style.color
                        };
                        block[star].children.forEach(function (book) {
                            book.value = 1;
                            book.itemStyle = style;

                            book.label = {
                                color: style.color
                            };

                            let value = 1;
                            if (bookScoreId === 0 || bookScoreId === 3) {
                                value = 5;
                            }

                            if (bookScore[bookScoreId]) {
                                bookScore[bookScoreId].value += value;
                            }
                            else {
                                bookScore[bookScoreId] = {
                                    color: colors[bookScoreId],
                                    value: value
                                };
                            }
                        });
                    }
                }

                level1[i].itemStyle = {
                    color: data[j].itemStyle.color
                };
            }
        }

        return {
            backgroundColor: bgColor,
            color: colors,
            series: [{
                type: 'sunburst',
                center: ['50%', '48%'],
                data: data,
                sort: function (a, b) {
                    if (a.depth === 1) {
                        return b.getValue() - a.getValue();
                    }
                    else {
                        return a.dataIndex - b.dataIndex;
                    }
                },
                label: {
                    rotate: 'radial',
                    color: bgColor
                },
                itemStyle: {
                    borderColor: bgColor,
                    borderWidth: 2
                },
                levels: [{}, {
                    r0: 0,
                    r: 40,
                    label: {
                        rotate: 0
                    }
                }, {
                    r0: 40,
                    r: 105
                }, {
                    r0: 115,
                    r: 140,
                    itemStyle: {
                        shadowBlur: 2,
                        shadowColor: colors[2],
                        color: 'transparent'
                    },
                    label: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: colors[0]
                    }
                }, {
                    r0: 140,
                    r: 145,
                    itemStyle: {
                        shadowBlur: 80,
                        shadowColor: colors[0]
                    },
                    label: {
                        position: 'outside',
                        textShadowBlur: 5,
                        textShadowColor: '#333',
                    },
                    downplay: {
                        label: {
                            opacity: 0.5
                        }
                    }
                }]
            }]
        };
    };
    getOption1 = () => {
        const geoCoordMap = {
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028]
        };

        const BJData = [
            [{name: '北京'}, {name: '上海', value: 95}],
            [{name: '北京'}, {name: '广州', value: 90}],
            [{name: '北京'}, {name: '大连', value: 80}],
            [{name: '北京'}, {name: '南宁', value: 70}],
            [{name: '北京'}, {name: '南昌', value: 60}],
            [{name: '北京'}, {name: '拉萨', value: 50}],
            [{name: '北京'}, {name: '长春', value: 40}],
            [{name: '北京'}, {name: '包头', value: 30}],
            [{name: '北京'}, {name: '重庆', value: 20}],
            [{name: '北京'}, {name: '常州', value: 10}]
        ];

        const SHData = [
            [{name: '上海'}, {name: '包头', value: 95}],
            [{name: '上海'}, {name: '昆明', value: 90}],
            [{name: '上海'}, {name: '广州', value: 80}],
            [{name: '上海'}, {name: '郑州', value: 70}],
            [{name: '上海'}, {name: '长春', value: 60}],
            [{name: '上海'}, {name: '重庆', value: 50}],
            [{name: '上海'}, {name: '长沙', value: 40}],
            [{name: '上海'}, {name: '北京', value: 30}],
            [{name: '上海'}, {name: '丹东', value: 20}],
            [{name: '上海'}, {name: '大连', value: 10}]
        ];

        const GZData = [
            [{name: '广州'}, {name: '福州', value: 95}],
            [{name: '广州'}, {name: '太原', value: 90}],
            [{name: '广州'}, {name: '长春', value: 80}],
            [{name: '广州'}, {name: '重庆', value: 70}],
            [{name: '广州'}, {name: '西安', value: 60}],
            [{name: '广州'}, {name: '成都', value: 50}],
            [{name: '广州'}, {name: '常州', value: 40}],
            [{name: '广州'}, {name: '北京', value: 30}],
            [{name: '广州'}, {name: '北海', value: 20}],
            [{name: '广州'}, {name: '海口', value: 10}]
        ];

        const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

        const convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        const color = ['#a6c84c', '#ffa022', '#46bee9'];
        const series = [];
        [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
            series.push({
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.7,
                        color: '#fff',
                        symbolSize: 3
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 0,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['none', 'arrow'],
                    symbolSize: 10,
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbol: planePath,
                        symbolSize: 15
                    },
                    lineStyle: {
                        normal: {
                            color: color[i],
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: convertData(item[1])
                },
                {
                    name: item[0] + ' Top10',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    symbolSize: function (val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            color: color[i]
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })
                });
        });

        const option = {
            backgroundColor: '#404a59',
            title: {
                text: '模拟迁徙',
                subtext: '数据纯属虚构',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data: ['北京 Top10', '上海 Top10', '广州 Top10'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'single'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: series
        };
        return option;
    };
    getOption = () => {
        return {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: [150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };
    };

    componentDidMount() {
    }

    render = () => {

        return (<div className="dashboard-wrap">
            <div className="g2">
                <ReactEcharts option={this.getOption()}/>
            </div>
            <div className="g2">
                <ReactEcharts
                    option={this.getOption2()}
                    style={{height: '600px', width: '100%'}}
                    className='react_for_echarts'/></div>
            <div className="g2">
                <ReactEcharts
                    option={this.getOption1()}
                    style={{height: '700px', width: '100%'}}
                    className='react_for_echarts'/>
            </div>
            <div className="clear"></div>
        </div>)
    }
}

export default withStyles(styles)(Dashboard);
