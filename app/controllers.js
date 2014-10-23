'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('LoginCtrl', [function () {

    }])
    .controller('RegisterCtrl', [function ($scope) {

      $scope.register = function(){
        var data = $scope.user;
        //....
      };


    }]);