$(function() {
	init();
//	var icon = new BMap.Icon("../image/map_icon.png");
});

var init = function() {
	var i = 1;
	setInterval(function() {
		if(i < 8) {
			i++;
		} else {
			i = 1;
		}
		$(".title-img-box img").attr("src", "../image/company" + i + ".jpg");
	}, 8000);
	
}

