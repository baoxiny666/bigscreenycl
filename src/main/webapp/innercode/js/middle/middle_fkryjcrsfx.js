let option = {
    tooltip: {
        trigger: 'axis',
        formatter:function(params){
            let text = '';
            for(let i = 0;i<params.length;i++){
                if(i==0){
                    text+=params[0].axisValue+"点<br/>";
                }
                text +=
                    "人次：" + params[i].value+"<br/>";
            }
            return text
        },
    },
    legend: {
        show:false
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
                    width:2    //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
                }
            },
            data: ['1','2','3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
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
            name: '访客人员进厂人数趋势',
            type:'line',
            smooth: true,
            symbol:'emptyCircle',
            symbolSize:6,
            showSymbol:true,
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#BCECFD'
                }, {
                    offset: 1,
                    color: '#B2CBFA'
                }]),
            },
            itemStyle: {
                normal: {
                    color: '#357DF6',
                },
                emphasis: {
                    borderWidth: 5,
                    borderColor: "transparent"
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210,67,210,34,56,34,56,35,26,78,45,34,23,100,120,110,233,102]
        }
    ]
};


let myChartfkryjcrsfx;
$(function(){
    myChartfkryjcrsfx = echarts.init(document.getElementById('middle_fkryjcrsfx_charts'));
    myChartfkryjcrsfx.setOption(option);
    myChartfkryjcrsfx.resize();
})


//图表自适应窗口的大小
window.addEventListener("resize", function () {
    myChartfkryjcrsfx.resize();
});

