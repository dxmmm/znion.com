$(function() {
	init();
	setListener();
});

var syTools = {
	getUrlParam: getUrlParam
}

/**
 * [getUrlParam 获取get传值]
 * @param  {[string]} name [get对应的传值名]
 * @return {[string]}   [返回匹配的值，如果不存在就返回null]
 */
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
	if(r != null) return unescape(r[2]);
	return null; //返回参数值
}


//初始化操作
var init = function() {
	//1.获取get传值
	var active = syTools.getUrlParam("active");
	//2.控制页面加载
	switch(active) {
		case "home-page":
			$("#content").load("home-page.html");
			break;
		case "product-page":
			$("#content").load("product-page.html");
			break;
		case "about-page":
			$("#content").load("about-page.html");
			break;
		case "join-page":
			$("#content").load("join-page.html");
			break;	
		default:
			location.href = "index.html?active=home-page";
			break;
	}
}

//监听器
var setListener = function() {
	$(".nav-skip").click(function() {
		var active = $(this).attr("class").split(" ")[0];
		location.href = "index.html?active=" + active;
	});
}


