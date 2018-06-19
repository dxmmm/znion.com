$(function() {
	// 初始化轮播
	$("#myCarousel").carousel('cycle');
	setListener();
});

var setListener = function() {
	$("#product").click(function(){
		syTools.getUrlParam("product-page");
		$("#content").load("product-page.html");
	});
	$("#news").click(function(){
		syTools.getUrlParam("news");
		$("#content").load("news.html");
	});
	$("#news-visit").click(function(){
		syTools.getUrlParam("news");
		$("#content").load("news-visit.html");
	});
}