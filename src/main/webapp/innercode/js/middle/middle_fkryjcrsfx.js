let option = {

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

