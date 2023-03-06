$(function () {
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getTodayData",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.message_code == "success") {
              $('#id6enter').html(result.object.outEnterPersonAnalyse.id6.enter);
                $('#id10enter').html(result.object.outEnterPersonAnalyse.id10.enter);
                $('#id13enter').html(result.object.outEnterPersonAnalyse.id13.enter);
                $('#id8enter').html(result.object.outEnterPersonAnalyse.id8.enter);
                $('#id12enter').html(result.object.outEnterPersonAnalyse.id12.enter);
                $('#id7enter').html(result.object.outEnterPersonAnalyse.id7.enter);
                $('#id9enter').html(result.object.outEnterPersonAnalyse.id9.enter);
                $('#id6out').html(result.object.outEnterPersonAnalyse.id6.out);
                $('#id10out').html(result.object.outEnterPersonAnalyse.id10.out);
                $('#id13out').html(result.object.outEnterPersonAnalyse.id13.out);
                $('#id8out').html(result.object.outEnterPersonAnalyse.id8.out);
                $('#id12out').html(result.object.outEnterPersonAnalyse.id12.out);
                $('#id7out').html(result.object.outEnterPersonAnalyse.id7.out);
                $('#id9out').html(result.object.outEnterPersonAnalyse.id9.out);

                $('#dqjcrs').html(result.object.outAndenterTotal.east.enter);
                $('#dqcccs').html(result.object.outAndenterTotal.east.out);

                $('#xqjcrs').html(result.object.outAndenterTotal.west.enter);
                $('#xqccrs').html(result.object.outAndenterTotal.west.out);

            }
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("图表请求数据失败!");
            myChartRyjcLeft.hideLoading();
        }
    });
})
