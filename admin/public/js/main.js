(function() {
	if(!sessionStorage.getItem("admin_user")) {
		window.location.href = "login.html";
	}
})();