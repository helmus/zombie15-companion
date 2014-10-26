angular.module('myApp').controller('MainCtrl', function ($scope, tiles) {
  'use strict';

  var tilesById = _.indexBy(tiles, 'id');

  $scope.rows = _.range(0, 6);
  $scope.columns = _.range(0, 9);

  $scope.activeTileRoads = [];
  $scope.updatePreview = function () {
    if ($scope.activeTile && $scope.activeTile.length > 1) {
      var theTile = tilesById[$scope.activeTile];
      if (theTile) {
        $scope.activeTileRoads = theTile.roads;
        return;
      }
    }
    $scope.activeTileRoads = [false, false, false, false];
  };

  $scope.tiles = [];
  $scope.$watch('tiles', function () {
    $scope.tilesJson = JSON.stringify($scope.tiles.slice().reverse(), null, 2);
  }, true);
  $scope.reload = function () {
    try {
      $scope.tiles = $scope.tilesJson ? JSON.parse($scope.tilesJson) : [];
      $scope.tilesJson = JSON.stringify($scope.tiles, null, 2);
    } catch (ex) {
      alert(ex);
    }
  };

  $scope.add = function () {
    if ($scope.activeTile) {
      $scope.tiles.push({
        id   : $scope.activeTile,
        roads: $scope.activeTileRoads.slice()
      });
    }
  };

  $scope.update = function (row, column, event) {
    $(event.target).text($scope.activeTile);
    $scope.activeTile = '';
    $('.text').focus();
  };
});