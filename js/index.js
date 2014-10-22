$(document).on("pageinit", "#index", function() {
	// 绑定提交按钮事件
	$(document).on("click", "#toLogin", function(event) {
	/*	var param = {
			"bankOwner.userName":$("#userName").val(),
			"bankOwner.password":$("#password").val()
		};*/

        AV.initialize("nt9nujwnc0vp7g1htejarpovprpsy6inrrr2ixeobaozy0xe", "k9beb8y6876zbhp5cgk4p83swuri1y2gc10f8y1tml07haam");
        var Test = AV.Object.extend('test');
        var query = new AV.Query(Test);
        query.find({
            success: function(results) {
                console.log(results);
                if(results && results.length>0){
                    document.getElementById('target').innerHTML = "id:" +results[0].attributes.status +"<br/>createAt:" + results[0].createdAt + "<br/>updateAt:" + results[0].updatedAt;

                }
            },
            error: function(error) {
                console.log(error);
            }
        });
	});
});