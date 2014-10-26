angular.module('myApp').directive('tile', function () {
  'use strict';

  return {
    restrict   : 'E',
    scope      : {
      roads     : '=',
      edit      : '=',
      activeTile: '='
    },
    templateUrl: 'directives/tile/tile.html',
    link       : function ($scope, element) {
      $scope.orientation = 0;
      if (_.isArray($scope.roads)) {
        $scope.roads = $scope.roads.concat(Array.apply(null, new Array(4 - $scope.roads.length))).map(function (a) {
          return !!a;
        });
      }
      $scope.rotate = function () {
        if ($scope.activeTile.indexOf(true) == -1) {
          $scope.roads = [];
          return
        }
        if ($scope.roads && $scope.roads.length) {
          if ($scope.roads.indexOf(true) == -1) {
            $scope.roads = $scope.activeTile.slice();
            $scope.orientation = 0;
            return;
          }
          $scope.orientation = $scope.orientation + 1 % 4;
          return;
        }
        $scope.roads = $scope.activeTile.slice();
      };
    }
  };
});