angular.module('myApp').controller('MainCtrl', function ($scope, tiles, scenarios) {
  'use strict';

  var tilesById = _.indexBy(tiles, 'id');

  $scope.scenarios = scenarios;
  $scope.selectedScenario = scenarios[0];

  $scope.rows = _.range(0, 6).map(function (row) {
    return _.range(0, 9).map(function (column) {
      return {
        row   : row,
        column: column,
        tile  : null
      };
    });
  });

  $scope.loadScenario = function () {
    $scope.selectedScenario.tiles.forEach(function (scenarioTile) {
      $scope.rows[scenarioTile.row][scenarioTile.column].tile = scenarioTile.tile;
    });
  };
  $scope.loadScenario();


  window.raster = $scope.rows;

  $scope.updatePreview = function () {
    if ($scope.activeTileId && $scope.activeTileId.length > 1) {
      var theTile = tilesById[$scope.activeTileId];
      if (theTile) {
        $scope.activeTile = theTile;
        return;
      }
    }
    $scope.activeTile = null;
  };


  $scope.visualState = [];
  $scope.$watch('visualState', function () {
    $scope.visualStateText = JSON.stringify($scope.visualState.slice().reverse(), null, 2);
  }, true);

  $scope.tiles = [];
  $scope.$watch('tiles', function () {
    $scope.visualState = $scope.tiles.slice();
  }, true);
  $scope.reload = function () {
    try {
      $scope.tiles = $scope.visualState ? JSON.parse($scope.visualState) : [];
      $scope.visualState = JSON.stringify($scope.tiles, null, 2);
    } catch (ex) {
      alert(ex);
    }
  };

  $scope.add = function () {
    if ($scope.activeTile) {
      $scope.tiles.push({
        id   : $scope.activeTileId,
        roads: $scope.activeTileRoads.slice()
      });
    }
  };

  $scope.update = function (row, column, event) {
    $(event.target).text($scope.activeTileId);
    $scope.activeTileId = '';
    $('.text').focus();
  };

  function removeDuplicate(rasterTile) {
    _.find($scope.rows, function (row) {
      return _.find(row, function (rowTile) {
        if (rowTile.tile && parseInt(rowTile.tile.id, 10) === parseInt(rasterTile.tile.id, 10) &&
          (rowTile.column !== rasterTile.column ||
          rowTile.row !== rasterTile.row)) {
          rowTile.tile = null;
          return true;
        }
      });
    });
  }

  $scope.$watch('rows', function () {
    $scope.visualState = _.flatten($scope.rows).filter(function (tile) {
      return tile.tile;
    });
  }, true);

  $scope.registerTile = function (rasterTile) {
    if (rasterTile.tile) {
      removeDuplicate(rasterTile);
    }
  };

});