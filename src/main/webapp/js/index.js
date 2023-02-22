$(function(){
    loadLeftHtml();
    loadMiddleHtml();
    loadRightHtml();
})

function loadLeftHtml(){
    $.get(resafety_script_host+'innercode/left.html', function(data){
        $('.topLeft').html(data);
        console.log(resafety_script_host+'innercode/left.html');
    });
}

function loadMiddleHtml(){
    $.get(resafety_script_host+'innercode/middle.html', function(data){
        $('.topMiddle').html(data);
        console.log(resafety_script_host+'innercode/middle.html');
    });
}

function loadRightHtml(){
    $.get(resafety_script_host+'innercode/right.html', function(data){
        $('.topRight').html(data);
        console.log(resafety_script_host+'innercode/right.html');
    });
}
