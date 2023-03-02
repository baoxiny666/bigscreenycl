let option = {
    tooltip: {
        trigger: 'axis',
        formatter:function(params){
            debugger;
            let text = '';
            for(let i = 0;i<params.length;i++){
                if(i==0){
                    text+=params[0].axisValue+"<br/>";
                }
                text += params[i].seriesName +
                    "人次：" + params[i].value+"<br/>";
            }
            return text
        },
    },
    legend: {
        data: ['进厂', '出厂'],
        icon: 'rect',
        itemWidth: 15,
        itemHeight: 6,
        //图例前面的图标形状
        textStyle: {                            //图例文字的样式
            color: '#999999',               //图例文字颜色
            fontSize: 12               //图例文字大小
        }
    },
    grid: {
        left: "10%",
        top: "10%",
        right: "5%",
        bottom: "15%"
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            splitLine:{show:false}, //去除网状线 默认为true
            //用于设置y轴的字体
            axisLabel:{
                show:true,  //这里的show用于设置是否显示y轴下的字体 默认为true
                textStyle:{   //textStyle里面写y轴下的字体的样式
                    color:'#ffffff',
                    fontSize:13
                }
            },
            //用于设置y轴的那一条线
            axisLine:{
                show:true,  //这里的show用于设置是否显示y轴那一条线 默认为true
                lineStyle:{ //lineStyle里面写y轴那一条线的样式
                    color:'#475164',
                    width:2,    //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
                }
            },
            data: ['2-22','2-23','2-24', '2-25', '2-26', '2-27', '2-28']
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine:{show:false},
            axisLabel:{
                show:true,
                textStyle:{
                    color:'#ffffff',
                    fontSize:13
                }
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#475164',
                    width:2
                }
            },
        }
    ],
    series: [
        {
            name: '进厂',
            type: 'line',
            smooth: true,
            itemStyle: {
                color: "#4ACBC6"
            },
            lineStyle: {
                color: '#4ACBC6',
                width: 1,
                opacity: 1,
            },
            symbol: "circle",
            symbolSize: 1,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(74,203,198,0.8)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(74,203,198,0.6)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(74,203,198,0.2)'// 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '出厂',
            type: 'line',
            smooth: true,
            itemStyle: {
                color: "#3589AA"
            },
            lineStyle: {
                color: '#3589AA',
                width: 1,
                opacity: 1,
            },
            symbol: "circle",
            symbolSize: 1,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(53,137,170,0.8)' // 0% 处的颜色
                    }, {
                            offset: 0.5,
                            color: 'rgba(53,137,170,0.6)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(53,137,170,0.2)'// 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};

var myChartRyjcLeft;
$(function(){
    debugger;
    console.log(2222);
    myChartRyjcLeft = echarts.init(document.getElementById('left_ryjccqs_charts'));
    myChartRyjcLeft.setOption(option);
    myChartRyjcLeft.resize();
})


//图表自适应窗口的大小
window.addEventListener("resize", function () {
    myChartRyjcLeft.resize();
});

