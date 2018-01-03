$(function() {
	setListener();
});

// 治疗 product-diagnose
// 诊断 product-treat
// 辅助 product-assist


var setListener = function() {
	$(".product-assortment-all").click(function() {
		$(".product-row .col-sm-6").show();
	});
	$(".product-assortment-diagnose").click(function() {
		$(".product-row .col-sm-6").hide();
		$(".product-diagnose").show();
	});
	$(".product-assortment-treat").click(function() {
		$(".product-row .col-sm-6").hide();
		$(".product-treat").show();
	});
	$(".product-assortment-assist").click(function() {
		$(".product-row .col-sm-6").hide();
		$(".product-assist").show();
	});
}