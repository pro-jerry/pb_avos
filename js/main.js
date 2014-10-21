$(document).on("pageinit", "#index", function() {
	// 绑定获取客户列表事件
	$(document).on("pagecreate", "#main", function(event) {
		$.ajax({
			type : 'POST',
			url : 'http://localhost:8085/parentsbank/clientaccount/json_getClientsByOwnerId.aspx',
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