let myChartCsdkjiRight;
let option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right:20
    },
    series: [
        {
            name: '处室打卡记录',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: true,
            itemStyle: {
                normal: {
                    color: function (colors) {
                        var colorList = [
                            '#fc8251',
                            '#5470c6',
                            '#91cd77',
                            '#ef6567',
                            '#f9c956',
                            '#75bedc',
                            '#75b435',
                            '#ef6567',
                            '#19c956',
                            '#25bedc',
                            '#851435',
                            '#fc9951',
                            '#5411c6',
                            '#914577',
                            '#136767',
                        ];
                        return colorList[colors.dataIndex];
                    }
                },
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {
                    "name": "能环处",
                    "value": 8
                },
                {
                    "name": "数字智能部",
                    "value": 31
                },
                {
                    "name": "生产处",
                    "value": 312
                },
                {
                    "name": "技术中心",
                    "value": 169
                },
                {
                    "name": "财务处",
                    "value": 63
                },
                {
                    "name": "保卫处",
                    "value": 78
                },
                {
                    "name": "备件材料处",
                    "value": 14
                },
                {
                    "name": "党群办公室",
                    "value": 111
                },
                {
                    "name": "供应处",
                    "value": 12
                },
                {
                    "name": "质量处",
                    "value": 0
                },
                {
                    "name": "企管处",
                    "value": 31
                },
                {
                    "name": "销售处",
                    "value": 35
                },
                {
                    "name": "设备工程处",
                    "value": 51
                }
            ]
        }
    ]
};
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
            if (result.message_code == "success") {
                myChartCsdkjiRight.setOption({        //加载数据图表
                    series: [{
                            data:result.object
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

