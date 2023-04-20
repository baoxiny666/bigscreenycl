let myChartCsdkjiRight;
let qqq ={"河北冶金":8,"唐山冠通":31,"宏晟物业":111,"河北冶建":188,"龙源惟德":75,"沃顿科技":116,"郑州振东":56,"唐山时创":113,"索海冶金":12,"四川宏远":50};
let option =  {
    // 坐标轴
    grid: {
        top: "7%",
        left: "5%",
        right: "10%",
        bottom: "0%",
        containLabel: true
    },
    // X轴：横向柱状图，将xAxis的type设置为value
    xAxis: {
        type: "value",

        axisLine: {
            show: false
        },
        inverse: false,
        axisTick: {
            show: false
        },
        show:false,
        axisTick: {       //x轴刻度线
            show: false
        },
        splitLine: {     //网格线
            show: false
        },
        axisLine: {    //坐标轴线
            show: false
        },
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 14
        },
    },
    // Y轴：横向柱状图，将xAxis的type设置为category
    yAxis: {
        type: "category",
        axisLabel: {
            show: true,
            color: '#ffffff',
            fontSize: 14
        },
        axisTick: {       //x轴刻度线
            show: false
        },
        splitLine: {     //网格线
            show: false
        },
        axisLine: {    //坐标轴线
            show: false
        },

        data: ["河北冶金","唐山冠通","宏晟物业","河北冶建","龙源惟德","沃顿科技","郑州振东","唐山时创","索海冶金","四川宏远"]
    },
    // 图表内容
    series: [
        {
            type: "bar", // 图表类型
            data: [13,11,56,34,34,23,23,23,12,45], // 数据
            barWidth: 10, // 柱的宽度
            // 柱上面的数值配置
            label: {
                show: true, // 显示值
                position: "right", // 显示位置
                color: "#ffffff",
                fontSize:14,
                formatter:function (ee) {
                    return  ee.data+"次"
                }
            },
            // 每一个条目的样式配置
            itemStyle: {
                barBorderRadius: [0, 20, 20, 0], // 圆角
                // 渐变色  1、指明颜色渐变的方向  2、指明不同百分比之下颜色的值
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: 'rgba(69,204,234,0.7)' },
                    { offset: 1, color: 'rgba(69,204,234,0.9)' },
                ]),
            },
        },
    ]
}
$(function(){
    myChartCsdkjiRight = echarts.init(document.getElementById('right_csdkjl_charts'));
    myChartCsdkjiRight.setOption(option);
    piecsdkji();
   setInterval(function () {
        piecsdkji();
    }, timeInterval);
})
function piecsdkji(){
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getPunchTheClockOtherUnitsNumber",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            let cateTypeList = new Array();
            let dataList = new Array();
            if (result.message_code == "success") {
                debugger;
                for(var lLi=0;lLi<13;lLi++){
                    cateTypeList.push(result.object[lLi].name);
                    dataList.push(result.object[lLi].total);
                }
                console.log(cateTypeList);
                console.log(dataList);
                myChartCsdkjiRight.setOption({        //加载数据图表,
                    // 图表内容
                    yAxis: {
                        data:cateTypeList.reverse()
                    },
                    series: [
                        {
                            type: "bar", // 图表类型
                            data: dataList.reverse()
                        }]
                });
            }
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChartCsdkjiRight.hideLoading();
        }
    });
}



//图表自适应窗口的大小
window.addEventListener("resize", function () {
    myChartCsdkjiRight.resize();
});

