var Passage = false;
//Je sais, ça pique les yeux et c'est aberrant de faire ça. C'est une solution provisoire ^^'
var visualControllers = angular.module('visualControllers', []);

visualControllers.controller('addCtrl', ['$scope', function ($scope) {
  Passage = false;
}]);

visualControllers.controller('ibeaconsCtrl', ['$scope', function ($scope, $http) {

  if (Passage == false) {
    window.onload = loadBeacons();
    Passage = true;
  };


}]);