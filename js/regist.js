$(document).on("pageinit", "#regist", function() {
	// 绑定提交按钮事件
	$(document).on("click", "#toRegist", function(event) {
	/*	var param = {
			"bankOwner.userName":$("#userName").val(),
			"bankOwner.password":$("#password").val()
		};*/

        AV.initialize("nt9nujwnc0vp7g1htejarpovprpsy6inrrr2ixeobaozy0xe", "k9beb8y6876zbhp5cgk4p83swuri1y2gc10f8y1tml07haam");
        var user = new AV.User();
        user.set("username", $("#userName").val());
        user.set("password", $("#password").val());
        user.set("nickName", $("#nickName").val());
// other fields can be set just like with AV.Object

        user.signUp(null, {
            success: function(user) {
                alert("done");
                // Hooray! Let them use the app now.
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
	});
});