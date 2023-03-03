<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8">
	<%
		String path = request.getContextPath();
		String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/";
	%>
	<title>大屏</title>
	<script type="text/javascript">
		var basePath = '<%=basePath%>';
	</script>
	<style type="text/css">
		@font-face {
			font-family: 'DS-Digital';
			src:
					url(/css/font-family/DS-DIGIT-4.ttf),
					url(/css/font-family/DS-DIGII-3.ttf),
					url(/css/font-family/DS-DIGIB-2.ttf),
					url(/css/font-family/DS-DIGI-1.ttf);
		}
	</style>
	<link rel="stylesheet" href="./css/index1920-1080.css">
	<script type="text/javascript" src="./js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="./js/echarts.min.js"></script>
	<script type="text/javascript" src="./js/publidjs.js"></script>
</head>
<body>

	<div class="topCountDiv" >
		<div class="titler"></div>
		<div class="upper"></div>
		<div class="middler">
			<div class="topLeft">

			</div>
			<div class="topMiddle">

			</div>
			<div class="topRight">

			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	$(function(){
		loadLeftHtml();
		loadMiddleHtml();
		loadRightHtml();
	})
	function loadLeftHtml(){
		$.get(basePath+'innercode/left.html', function(data)
		{
			$('.topLeft').html(data);
		});
	}

	function loadMiddleHtml(){
		$.get(basePath+'innercode/middle.html', function(data)
		{
			$('.topMiddle').html(data);
		});
	}

	function loadRightHtml(){
		$.get(basePath+'innercode/right.html', function(data)
		{
			$('.topRight').html(data);
		});
	}
</script>
</html>
