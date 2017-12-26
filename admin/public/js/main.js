(function() {
	if(!sessionStorage.getItem("admin_user")) {
		window.location.href = "login.html";
	}
	setListener();
})();

var setListener = function() {
	$("#sidebar a").click(function() {
		$("#sidebar a").removeClass("active");
		$(this).addClass("active");
	});
	$("#logout").click(function() {
		sessionStorage.removeItem("admin_user");
	});
}