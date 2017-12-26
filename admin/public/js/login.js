$(function() {
	$("#username,#password").blur(function() {
		$(this).parent().removeClass("has-error has-feedback has-success");
		$(this).parent().find("span.form-control-feedback").remove();
		var inputLen = $(this).val().length;
		var errorDom = "<span class='glyphicon glyphicon-remove form-control-feedback'></span>";
		var rightDom = "<span class='glyphicon glyphicon-ok form-control-feedback'></span>";
		if(inputLen < 3 || inputLen > 5) {
			$(this).parent().addClass("has-error has-feedback").append(errorDom);
		}else {
			$(this).parent().addClass("has-success has-feedback").append(rightDom);
		}
	});
	$("#btn-login").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		var $btn = $(this).button('loading');
		if(username != "admin" && password != "123") {
			var errorTip = "<div class='alert alert-danger alert-dismissible text-center'>";
			errorTip += "<button class='close' data-dismiss='alert'>";
			errorTip += "<span>&times;</span>";
			errorTip += "</button>";
			errorTip += "</button>";
			errorTip += "用户名或者密码错误";
			errorTip += "</div>";
			$("#login").append(errorTip);
			$btn.button('reset')
		}else {
			$('#myModal').modal("show");
			setTimeout(function() {
				$btn.button('reset')
				$('#myModal').modal("hide");
				sessionStorage.setItem("admin_user","admin");
				window.location.href = "main.html";
			},3000);
		}
	});
})