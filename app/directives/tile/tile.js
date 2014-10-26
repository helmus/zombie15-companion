angular.module('myApp').directive('tile', function () {
  'use strict';

  return {
    restrict   : 'E',
    scope      : {
      roads      : '=',
      orientation: '=',
      edit       : '=',
      activeTile : '='
    },
    templateUrl: 'directives/tile/tile.html',
    link       : function ($scope, element) {
      if (_.isArray($scope.roads)) {
        $scope.roads = $scope.roads.concat(Array.apply(null, new Array(4 - $scope.roads.length))).map(function (a) {
          return !!a;
        });
      }
      element.on('click', function () {
        $scope.$apply(function () {
          if ($scope.roads.length) {
            $scope.roads.length = 0;
            return;
          }
          $scope.roads = $scope.activeTile.slice();
        });
      });
    }
  };
});