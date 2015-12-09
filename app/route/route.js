define(function () {
  return {
    defaultUrl: '/home',
    routes : {
      '/home':{
        templateUrl: 'components/home/index.html',
        controller: 'HomeController',
        controllerUrl: 'components/home/controller.js'
      },
      '/view':{
        templateUrl: '/components/view/index.html',
        controller: 'ViewController',
        controllerUrl: 'components/view/controller.js'
      }
    }
  };
});