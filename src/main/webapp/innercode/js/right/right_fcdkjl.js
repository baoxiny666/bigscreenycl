let myChartfcdkjiRight;
let tdszArray = {"炼铁厂":1348,"炼钢厂":1278,"动力厂":448,"带钢厂":370,"烧结厂":990};
let option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right:20,
        top:100,
        textStyle: {
            color: '#FFFFFF'
        },
        data: [
            "炼铁厂","炼钢厂","动力厂","带钢厂","烧结厂"
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
            return '{a|'+name+'}{b|'+tdszArray[name]+'次}'
        }
    },
    series: [
        {
            name: '分厂打卡记录',
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
                    "name": "炼铁厂",
                    "value": 1348
                },
                {
                    "name": "炼钢厂",
                    "value": 1278
                },
                {
                    "name": "动力厂",
                    "value": 448
                },
                {
                    "name": "带钢厂",
                    "value": 370
                },
                {
                    "name": "烧结厂",
                    "value": 990
                }
            ]
        }
    ]
};
$(function(){
    myChartfcdkjiRight = echarts.init(document.getElementById('right_fcdkjl_charts'));
    myChartfcdkjiRight.setOption(option);
    piefcdkji();
    setInterval(function () {
        piefcdkji();
    }, timeInterval);
})
function piefcdkji(){
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getBranchFactory",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            let legendList = new Array();
            let lellmap = new Map();
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.message_code == "success") {
                for(var lLi=0;lLi<result.object.length;lLi++){
                    legendList.push(result.object[lLi].name);
                    lellmap.set(result.object[lLi].name,result.object[lLi].value);
                }
                debugger;
                myChartfcdkjiRight.setOption({        //加载数据图表
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
            myChartfcdkjiRight.hideLoading();
        }
    });
}



//图表自适应窗口的大小
window.addEventListener("resize", function () {
    myChartfcdkjiRight.resize();
});

