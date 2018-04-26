$(function() {
	setListener();
});

var setListener = function() {
	//如果是电脑上才有动画
	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
		var flag = true;
		for(var v = 0; v < Agents.length; v++) {
			if(userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	//如果PC端怎么设置
	if(IsPC()) {
		$(".row .col-md-4 div").css({"bottom":"-50px","opacity":"0"});
		$(window).scroll(function() {
			var s = $(window).scrollTop();
			if(s > 800) {
				$(".col-md-4").children().css({
					"bottom": "0px",
					"opacity": "1",
					"transition": "2.5s"
				});
			}
		});
	}
};