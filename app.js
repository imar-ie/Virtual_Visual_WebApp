var visualApp = angular.module('visualApp', ['ngRoute', 'visualControllers']);

visualApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/add', {
    templateUrl : 'add.html',
    controller: 'addCtrl'
  }).
  when('/ibeacons', {
    templateUrl : 'ibeacons.html',
    controller: 'ibeaconsCtrl'
  }).
  otherwise({
    redirectTo : '/ibeacons'
  });
}]);