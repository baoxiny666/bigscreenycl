let girl = 300;
let boy = 700;
let total1 = 1000;
let per1 = 500;
let per11 = 500;
let total2 = 700;
let per2 = 200;
let per22 = 500;
let color1 =[
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#1DC4CF" },
        { offset: 1, color: "#1DC4CF" },
    ]),
    'rgba(11,54,104,0.7)',
];

let color2 =[
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#18ABE2" },
        { offset: 1, color: "#18ABE2" },
    ]),
    'rgba(11,54,104,0.7)',
];

let option_left = {
    color: color1,
    series: [
        {
            type: 'pie',
            radius: ['70%','55%'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    value: per1,
                    name: 'per',
                    label:{
                        normal:{
                            show:true,
                            formatter: '{d}%',
                            textStyle: {
                                fontSize: 20,
                                color:'#1DC4CF',
                                fontWeight: 'bolder',
                            },
                        }
                    }},
                { value: per11, name: 'total' }
            ]
        }
    ]
};



let option_right = {
    color: color2,
    series: [
        {
            type: 'pie',
            radius: ['70%','55%'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    value: per2,
                    name: 'per',
                    label:{
                        normal:{
                            show:true,
                            formatter: '{d}%',
                            textStyle: {
                                fontSize: 20,
                                color:'#1DC4CF',
                                fontWeight: 'bolder',
                            }
                        }
                    }
                },
                { value: per22, name: 'total' }
            ]
        }
    ]
};
$(function () {
    var myChartPieLeftPie1 = echarts.init(document.getElementById('left_wxjxxzb_pie1'));
    var myChartPieLeftPie2 = echarts.init(document.getElementById('left_wxjxxzb_pie2'));
    myChartPieLeftPie1.setOption(option_left);
    myChartPieLeftPie2.setOption(option_right);
})

//图表自适应窗口的大小
window.addEventListener("resize", function () {
    myChartPieLeftPie1.resize();
    myChartPieLeftPie2.resize();
});

