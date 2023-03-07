let wxjinccolor = "rgba(24,160,179)";
let wxchuccolor = "rgba(71,121,227)";
let myChartPieLeftPie1;
let myChartPieLeftPie2;
let color1 =[
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {offset: 0, color: wxjinccolor},
        {offset: 1, color: wxjinccolor},
    ]),
    'rgba(11,54,104,0.7)'
];

let color2 =[
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: wxchuccolor },
        { offset: 1, color: wxchuccolor },
    ]),
    'rgba(11,54,104,0.7)'
];

let option_left = {
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
                    value: 612,
                    name: 'per',
                    itemStyle:{
                        color:wxjinccolor
                    }
                    ,
                    label:{
                        normal:{
                            show:true,
                            formatter: '{d}%',
                            textStyle: {
                                fontSize: 20,
                                color:wxjinccolor,
                                fontWeight: 'bolder',
                            },
                        }
                    }

                },
                {
                    value:305 ,
                    itemStyle:{
                        color:'rgba(11,54,104,0.7)'
                    },
                    axisLine:{
                        lineStyle:{
                            color:['rgba(11,54,104,0.7)']
                        }
                    }
                }
            ]
        }
    ]
};



let option_right = {
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
                    value: 612,
                    name: 'per',
                    itemStyle:{
                        color:wxchuccolor
                    }
                    ,
                    label:{
                        normal:{
                            show:true,
                            formatter: '{d}%',
                            textStyle: {
                                fontSize: 20,
                                color:wxchuccolor,
                                fontWeight: 'bolder'
                            },
                        }
                    }

                },
                {
                    value:305 ,
                    itemStyle:{
                        color:'rgba(11,54,104,0.7)'
                    },
                    axisLine:{
                        lineStyle:{
                            color:['rgba(11,54,104,0.7)']
                        }
                    }
                }
            ]
        }
    ]
};
$(function () {
    myChartPieLeftPie1 = echarts.init(document.getElementById('left_wxjxxzb_pie1'));
    myChartPieLeftPie2 = echarts.init(document.getElementById('left_wxjxxzb_pie2'));
    myChartPieLeftPie1.setOption(option_left);
    myChartPieLeftPie2.setOption(option_right);
    PieLeftRightPiewxjxxzb();
    setInterval(function () {
        PieLeftRightPiewxjxxzb();
    }, timeInterval);
})
function PieLeftRightPiewxjxxzb(){
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getImportAndExportRatio",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.message_code == "success") {
                myChartPieLeftPie1.setOption({        //加载数据图表
                    series: [
                        {
                            type: 'pie',
                            radius: ['70%', '55%'],
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
                                    value: result.object.enter,
                                    name: 'per',
                                    itemStyle: {
                                        color: wxjinccolor
                                    }
                                    ,
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '进厂:{d}%',
                                            textStyle: {
                                                fontSize: 15,
                                                color: wxjinccolor,
                                                fontWeight: 'bolder',
                                            },
                                        }
                                    }

                                },
                                {
                                    value: result.object.out,
                                    itemStyle: {
                                        color: 'rgba(11,54,104,0.7)'
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: ['rgba(11,54,104,0.7)']
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                });


                myChartPieLeftPie2.setOption({        //加载数据图表
                    series: [
                        {
                            type: 'pie',
                            radius: ['70%', '55%'],
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
                                    value: result.object.out,
                                    name: 'per',
                                    itemStyle: {
                                        color: wxchuccolor
                                    }
                                    ,
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '出厂:{d}%',
                                            textStyle: {
                                                fontSize: 15,
                                                color: wxchuccolor,
                                                fontWeight: 'bolder'
                                            },
                                        }
                                    }
                                },
                                {
                                    value: result.object.enter,
                                    itemStyle: {
                                        color: 'rgba(11,54,104,0.7)'
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: ['rgba(11,54,104,0.7)']
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                });
            }},error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChartPieLeftPie1.hideLoading();
            myChartPieLeftPie2.hideLoading();
        }
    });
}

function PieRightPiewxjxxzb(){

}
//图表自适应窗口的大小
window.addEventListener("resize", function () {
    myChartPieLeftPie1.resize();
    myChartPieLeftPie2.resize();
});

