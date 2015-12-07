'user strict'

require.config({
  baseUrl: "",
  paths:{
    "angular": "../bower_components/angular/angular",
    "angular-route": "../bower_components/angular-route/angular-route",
    "angularAMD": "../bower_components/angularAMD/angularAMD",

    "View1Ctrl": "controller_view1"
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular']
  },
  deps: ['app']
});