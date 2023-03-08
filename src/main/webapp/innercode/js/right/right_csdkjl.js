let myChartCsdkjiRight;
let qqq ={"能环处":8,"数字智能部":31,"生产处":353,"技术中心":188,"财务处":75,"保卫处":116,"备件材料处":14,"党群办公室":113,"供应处":12,"质量处":0,"企管处":33,"销售处":35,"设备工程处":51}
let option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right:20,
        top:40,
        textStyle: {
            color: '#FFFFFF'
        },
        data: [
            "能环处","数字智能部","生产处","技术中心","财务处","保卫处","备件材料处","党群办公室","供应处","质量处","企管处","销售处","设备工程处"
        ],
        show: true,
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
            rich: {
                a: {
                    align: 'left',
                    color: '#00E4FF',
                    padding: [0, 5, 0, 5],
                },
                b: {
                    color: '#FFFFFF',
                }
            }
        },
        formatter: function(name) {
            return '{a|'+name+'}'
        }
    },
    series: [
        {
            name: '处室打卡记录',
            type: 'pie',
            center: ['35%', '45%'],
            radius: '60%',
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
            let legendList = new Array();
            let lellmap = new Map();
            if (result.message_code == "success") {
                for(var lLi=0;lLi<result.object.length;lLi++){
                    legendList.push(result.object[lLi].name);
                    lellmap.set(result.object[lLi].name,result.object[lLi].value);
                }
                console.log(lellmap);
                debugger;
                myChartCsdkjiRight.setOption({        //加载数据图表,
                    legend: {
                        data: legendList,
                        formatter: function(name) {
                            debugger;
                            return '{a|' + name + '}{b|'+lellmap.get(name)+'次}'
                        }
                    },
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

