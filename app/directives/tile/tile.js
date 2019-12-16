angular.module('myApp').directive('tile', function () {
  'use strict';

  return {
    restrict   : 'E',
    scope      : {
      tile      : '=',
      edit      : '=',
      activeTile: '='
    },
    templateUrl: 'directives/tile/tile.html',
    link       : function ($scope, element) {
      if (_.isArray($scope.tile)) {
        $scope.tile.roads = $scope.tile.roads
          .concat(Array.apply(null, new Array(4 - $scope.rile.roads.length)))
          .map(function (a) {
            return !!a;
          });
      }
      $scope.toggleTile = function () {
        return;
        if ($scope.activeTile !== $scope.tile && (!$scope.activeTile || !$scope.tile)) {
          $scope.tile = $scope.activeTile;
          return;
        }
        if ($scope.tile) {
          $scope.tile.rotation = $scope.tile.rotation ? ($scope.tile.rotation + 1) % 4 : 1;

        }
      };
    }
  };
});
