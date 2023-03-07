$(function(){
    blockdkcstj();
    blockfangktj();
    setInterval(function () {
        blockdkcstj();
        blockfangktj();
    }, timeInterval);
})
function  blockdkcstj() {
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/JrBaseDevicegroup/getTodayData",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.message_code == "success") {
                $('#headtop_dakcs_slin').html(result.object.punchTheClock.total);
                $('#headtop_jincrs_slin').html(result.object.punchTheClock.enter);
                $('#headtop_chucrs_slin').html(result.object.punchTheClock.out);
            }
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("请求数据失败!");
        }
    });
}

function blockfangktj() {
    $.ajax({
        type : "get",
        url : urlPort+"/AccessDP/visitorinfo/getTodayVisitorinfoTotal",    //请求发送到TestServlet处
        dataType : "json",        //返回数据形式为json
        success : function(result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.message_code == "success") {
                $('#headtop_fangkrs_slin').html(result.object);
            }
        },
        error : function(errorMsg) {
            //请求失败时执行该函数
            alert("请求数据失败!");
        }
    });
}
