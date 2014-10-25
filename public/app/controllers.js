'use strict';

/* Controllers */

myApp
    .controller('LoginCtrl', function ($scope, $rootScope, $ionicLoading, $location, $ionicPopup) {
      $scope.user = {username: null, password: null};

      $scope.login = function (user) {
        $ionicLoading.show({
          template: '正在登陆...'
        });
        AV.User.logIn(user.username, user.password, {
          success: function (user) {
            $rootScope.currentUser = user;
            $ionicLoading.hide();
            $location.url('/home');
          },
          error: function (user, error) {
            $ionicLoading.hide();

            var messageMap = {
              "1": "邮箱和密码不能为空。",
              "125": "邮箱不正确。",
              "211": "邮箱或密码不正确。"
            };
            $ionicPopup.alert({
              title: '注册失败',
              template: messageMap["" + error.code] || "登陆异常。请重新登陆，或稍后再试。"
            });
          }
        });
      };
    })
    .controller('RegisterCtrl', function ($scope, $ionicLoading, $location, $ionicPopup) {

      $scope.register = function () {
        var userData = $scope.user;

        var user = new AV.User();
        user.set("nickName", userData.nickName);
        user.set("email", userData.email);
        user.set("username", userData.email);
        user.set("password", userData.password);

        $ionicLoading.show({
          template: '正在注册...'
        });
        user.signUp(null, {
          success: function (user) {
            $ionicLoading.hide();
            $scope.login(userData);
          },
          error: function (user, error) {
            $ionicLoading.hide();
            var messageMap = {
              "-1": "密码不能为空。",
              "125": "邮箱不正确。",
              "203": "此电子邮箱已经被占用。"
            };
            $ionicPopup.alert({
              title: '注册失败',
              template: messageMap["" + error.code] || "服务器异常。请稍后再试。"
            });
          }
        });
      };

      $scope.login = function (user) {
        $ionicLoading.show({
          template: '正在登陆...'
        });
        AV.User.logIn(user.email, user.password, {
          success: function (user) {
            $rootScope.currentUser = user;
            $ionicLoading.hide();
            $location.url('/home');
          },
          error: function (user, error) {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
              title: '登陆失败',
              template: '请重新登陆，或稍后再试。'
            });
            alertPopup.then(function (res) {
              $location.url('/login');
            });
          }
        });
      }


    })
    .controller('HomeCtrl', function ($scope, $ionicLoading, $ionicSideMenuDelegate) {
      $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };

    })
    .controller('ContentCtrl', function ($scope, $ionicLoading) {


    });