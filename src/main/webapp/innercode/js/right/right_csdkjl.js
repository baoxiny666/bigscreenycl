let myChartCsdkjiRight;
let qqq ={"能环处":8,"数字智能部":31,"生产处":353,"技术中心":188,"财务处":75,"保卫处":116,"备件材料处":14,"党群办公室":113,"供应处":12,"质量处":0,"企管处":33,"销售处":35,"设备工程处":51}
let option =  {
    // 坐标轴
    grid: {
        top: "6%",
        left: "5%",
        right: "5%",
        bottom: "3%",
        containLabel: true, //是否包含坐标轴的文字
    },
    // X轴：横向柱状图，将xAxis的type设置为value
    xAxis: {
        type: "value",
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
        rotate:45,
        axisTick: {       //x轴刻度线
            show: false
        },
        splitLine: {     //网格线
            show: false
        },
        axisLine: {    //坐标轴线
            show: false
        },

        data: ["能环处","数字智能部","生产处","技术中心","财务处","保卫处","备件材料处","党群办公室","供应处","质量处","企管处","销售处","设备工程处"]
    },
    // 图表内容
    series: [
        {
            type: "bar", // 图表类型
            data: [13,11,56,34,34,23,23,23,12,45,34,23,45], // 数据
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
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getDivision",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            let cateTypeList = new Array();
            let dataList = new Array();
            if (result.message_code == "success") {
                for(var lLi=0;lLi<result.object.length;lLi++){
                    cateTypeList.push(result.object[lLi].name);
                    dataList.push(result.object[lLi].value);
                }
                console.log(cateTypeList);
                console.log(dataList);
                myChartCsdkjiRight.setOption({        //加载数据图表,

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

