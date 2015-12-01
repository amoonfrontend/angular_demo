define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module('angularDemo', ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', angularAMD.route({
      templateUrl: 'view_home.html',
      controller: 'HomeCtrl',
      controllerUrl: 'controller_home'
    }))
    .when('/view1', angularAMD.route({
      templateUrl: 'view_view1.html',
      controller: 'View1Ctrl',
      controllerUrl: 'controller_view1'
    }))
    .otherwise({
      redirectTo: '/home'
    });
  })
  return angularAMD.bootstrap(app);
});

