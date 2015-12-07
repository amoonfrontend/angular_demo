define(['angularAMD', 'angular-route'], function (angularAMD) {
  // Load route module in application by adding it as a dependent module.
  var app = angular.module('ngreq-app', ['ngRoute']);
  app.config(['$routeProvider',function ($routeProvider) {

    $routeProvider
    .when('/home', angularAMD.route({
      templateUrl: '/view_home.html',
      controller: 'HomeCtrl',
      controllerUrl: 'controller_home'
    }))
    .when('/view1', angularAMD.route({
      templateUrl: '/view_view1.html',
      controller: 'View1Ctrl',
    }))
    .otherwise({redirectTo: '/home'});

  }]);
  // Bootstrap Angular when DOM is ready
  return angularAMD.bootstrap(app);
});


