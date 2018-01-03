$(function() {
	
	var errorDom = "<span class='glyphicon glyphicon-remove form-control-feedback'></span>";
	var rightDom = "<span class='glyphicon glyphicon-ok form-control-feedback'></span>";

	$("#username").bind("input propertychange", function() { 
		var username = $(this).val();
		$(this).parent().removeClass("has-error has-feedback has-success");
		$(this).parent().find("span.form-control-feedback").remove();
		if(username != "admin") {
			$(this).parent().addClass("has-error has-feedback").append(errorDom);
		}else {
			$(this).parent().addClass("has-success has-feedback").append(rightDom);
		}
	});

	$("#password").bind("input propertychange", function() { 
		var password = $(this).val();
		$(this).parent().removeClass("has-error has-feedback has-success");
		$(this).parent().find("span.form-control-feedback").remove();
		if(password != "123") {
			$(this).parent().addClass("has-error has-feedback").append(errorDom);
		}else {
			$(this).parent().addClass("has-success has-feedback").append(rightDom);
		}
	});

	$("#btn-login").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		if(username == "admin" && password == "123") {
			var $btn = $(this).button('loading');
			$('#myModal').modal("show");
			setTimeout(function() {
				$btn.button('reset')
				$('#myModal').modal("hide");
				sessionStorage.setItem("admin_user","admin");
				window.location.href = "main.html";
			},1000);
		}
		if(username != "admin") {
			$("#username").parent().addClass("has-error has-feedback").append(errorDom);
		}
		if(password != "123") {
			$("#password").parent().addClass("has-error has-feedback").append(errorDom);
		}
	});
})