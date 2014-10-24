'use strict';

/* Controllers */

myApp
    .controller('LoginCtrl', function ($scope,$ionicLoading,$location) {
      $scope.login = function (user) {
        $ionicLoading.show({
          template: '正在登陆...'
        });
        AV.User.logIn(user.username, user.password, {
          success: function (user) {
            $ionicLoading.hide();
            $location.url('/home');
          },
          error: function (user, error) {
            $ionicLoading.hide();
            debugger;
            // The login failed. Check error to see why.
          }
        });
      };
    })
    .controller('RegisterCtrl', function ($scope, $ionicLoading, $location) {

      $scope.register = function () {
        var userData = $scope.user;

        var user = new AV.User();
        user.set("username", userData.username);
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
            debugger;
            $ionicLoading.hide();
            alert("Error: " + error.code + " " + error.message);
          }
        });
      };

      $scope.login = function (user) {
        $ionicLoading.show({
          template: '正在登陆...'
        });
        AV.User.logIn(user.username, user.password, {
          success: function (user) {
            $ionicLoading.hide();
            $location.url('/home');
          },
          error: function (user, error) {
            $ionicLoading.hide();
            debugger;
            // The login failed. Check error to see why.
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