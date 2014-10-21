$(document).on("pageinit", "#index", function() {
	// 绑定提交按钮事件
	$(document).on("click", "#toLogin", function(event) {
		var url='http://'+window.location.host+'/parentsbank/bankowner/json_bankOwnerLogin.aspx';
		//console.log(url);
		var param = {
			"bankOwner.userName":$("#userName").val(),
			"bankOwner.password":$("#password").val()
		};
		$.ajax({
			type : 'POST',
			url : url,
			data: param,
			dataType : 'json',
			success : function(data) {
				if(data.state.code==0){
					window.location.href="main.jsp";
				}else{
					alert(data.state.msg);
					console.log(data.state.debugMsg);
				}
			},
			error : function(data) {
				console.log(data.state.debugMsg);
			}
		});
	});
});