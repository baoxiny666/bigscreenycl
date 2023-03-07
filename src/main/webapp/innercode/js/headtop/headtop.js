$(function(){
    blockdkcstj();
    setInterval(function () {
        blockdkcstj();
    }, timeInterval);
})
function  blockdkcstj() {
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getStatisticsOfClockingTimes",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.message_code == "success") {
                $('.leftdk78_inner .leftdkback .wenzi').html(result.object[0]);
                $('.leftdk817_inner .leftdkback .wenzi').html(result.object[1]);
                $('.leftdk1724_inner .leftdkback .wenzi').html(result.object[2]);
                $('.leftdk247_inner .leftdkback .wenzi').html(result.object[3]);
            }
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChartRyjcLeft.hideLoading();
        }
    });
}
