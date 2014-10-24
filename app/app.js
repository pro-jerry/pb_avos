var myApp = angular.module('myApp', ['ngRoute', 'ionic', 'myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/login', {templateUrl: 'app/partials/login.html', controller: 'LoginCtrl' });
      $routeProvider.when('/register', {templateUrl: 'app/partials/register.html', controller: 'RegisterCtrl' });
      $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: 'HomeCtrl' });
      $routeProvider.otherwise({redirectTo: '/login'});
    }])
    .run(function ($rootScope) {
      $rootScope.$on('$viewContentLoaded', function () {
        AV.initialize("nt9nujwnc0vp7g1htejarpovprpsy6inrrr2ixeobaozy0xe", "k9beb8y6876zbhp5cgk4p83swuri1y2gc10f8y1tml07haam");
      });
    });