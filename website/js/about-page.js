$(function() {
	init();
//	var icon = new BMap.Icon("../image/map_icon.png");
});

var init = function() {
	var i = 1;
	setInterval(function() {
		if(i < 5) {
			i++;
		} else {
			i = 1;
		}
		$(".title-img-box img").attr("src", "img/company" + i + ".jpg");
	}, 8000);
	
}

