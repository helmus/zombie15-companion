angular.module('myApp').controller('MainCtrl', function ($scope, tiles, scenarios, $interval) {
  'use strict';

  var tilesById = _.keyBy(tiles, 'id');
  const soundTrackTypes = {
    regular: "regular",
    bonus  : "bonus"
  };
  const soundTracks = {
    'regular': {
      '40': new Audio('audio/ost-zombie-15-40sec.mp3'),
      '60': new Audio('audio/ost-zombie-15-60sec.mp3')
    },
    'bonus'  : {
      '40': new Audio('audio/bonus_ost-zombie-15-40sec.mp3'),
      '60': new Audio('audio/bonus_ost-zombie-15-60sec.mp3')
    }
  };

  $scope.progress = {
    "40": "40s",
    "60": "60s"
  };

  Object.values(soundTracks[soundTrackTypes.regular]).forEach(function (file) {
    file.load();
  });

  $scope.scenarios = scenarios;
  $scope.selectedSoundTrackStyle = soundTrackTypes.regular;
  $scope.selectedScenario = scenarios[0];

  var setScale = _.debounce(function () {
    $scope.$apply(function () {
      var windowHeight = $(window).height();
      var rasterHeight = 361;
      $scope.scaleFactor = windowHeight / rasterHeight;
    });
  }, 100);

  var $rasterContainer = $('.rasterContainer');


  //$(window).on('resize', setScale);
  //setScale();
  $scope.navForward = true;

  $scope.tileNav = function () {
    if ($scope.navForward) {
      $scope.nextTile();
    } else {
      $scope.prevTile();
    }
  };

  $scope.$watch('selectedScenario', function () {
    $scope.loadScenario();
  });

  $scope.newScenario = function () {
    var newScenario = {id: $scope.scenarios.length + 1, tiles: []};
    $scope.scenarios.push(newScenario);
    $scope.selectedScenario = newScenario;
  };

  $scope.saveScenario = function () {
    $scope.selectedScenario.tiles = _.cloneDeep(_.flatten($scope.rows).filter(function (tile) {
      return tile.tile;
    }));
  };

  $scope.clearTiles = function () {
    $scope.rows.forEach(function (row) {
      row.forEach(function (rasterTile) {
        rasterTile.tile = null;
      });
    });
  };

  $scope.help = function () {
    alert('' +
      'Use Safari on IOS devices for full help !\n' +
      '\n' +
      'This app allows you to set up your zombie 15 map faster.\n' +
      '\n' +
      '1. Put ALL tiles in 1 pile sorted with number 1 on top. \n' +
      '2. Select your scenario from the drop down\n' +
      '3. Tap the screen\n' +
      '4. Find your tile, discard any tiles that come before it\n' +
      '5. Put the tile on the board, use the grid as a guide\n' +
      '6. Go to step 3, repeat until done\n' +
      '7. You can play the soundtrack by clicking the 60s/40s buttons.\n' +
      '   The screen will flash red on each zombie event. \n' +
      '   40s is more difficult. \n' +
      '\n' +
      'You can also use the buttons to go backward, forward or switch to full screen ( chrome only ). \n' +
      'A modern browser is required for this app to work.'
    );
  };

  $scope.nextTile = function () {
    var nextTile = $scope.selectedScenario.nextTiles.shift();
    if (!nextTile) {
      $scope.selectedScenario.nextTiles = $scope.selectedScenario.tiles.slice();
      $scope.selectedScenario.tiles.length = 0;
      $scope.clearTiles();
      nextTile = $scope.selectedScenario.nextTiles.shift();
    }
    if ($scope.selectedScenario.tiles.length) {
      var prevTile = $scope.selectedScenario.tiles[$scope.selectedScenario.tiles.length - 1];
      prevTile.tile.active = false;
    }
    $scope.selectedScenario.tiles.push(nextTile);
    $scope.rows[nextTile.row][nextTile.column].tile = nextTile.tile;
    nextTile.tile.active = true;
  };
  var tileInput = $('.tileInput');
  $scope.keypress = function (event) {
    if (event.target === tileInput[0] || (event.charCode < 48 || event.charCode > 57)) {
      return;
    }
    tileInput.val('').focus();
  };

  $scope.keyup = function (event) {
    if (!$scope.activeTileId) {
      return;
    }
    if (event.keyCode === 38) {
      $scope.activeTileId = parseInt($scope.activeTileId, 10) + '' + 'a';
    } else if (event.keyCode === 40) {
      $scope.activeTileId = parseInt($scope.activeTileId, 10) + '' + 'b';
    }
    $scope.updatePreview();
  };

  var currentlyPlaying = null;
  var currentRef = null;
  var currentDifficulty = null;

  $scope.reset = function () {
    if (!currentlyPlaying) {
      return;
    }
    currentlyPlaying.pause();
    currentlyPlaying.currentTime = 0;
    $interval.cancel(currentRef);
    currentlyPlaying = null;
    currentRef = null;
    currentDifficulty = null;

    $scope.progress = {
      "40": "40s",
      "60": "60s"
    };
  };

  $scope.play = function (difficulty) {
    if (currentDifficulty !== difficulty) {
      $scope.reset();
    }

    if (currentlyPlaying) {
      if (currentlyPlaying.paused) {
        currentlyPlaying.play();
      } else {
        currentlyPlaying.pause();
      }
      return;
    }

    const tracks = soundTracks[$scope.selectedSoundTrackStyle];
    const audioElement = tracks[difficulty];
    currentlyPlaying = audioElement;
    currentDifficulty = difficulty;
    audioElement.play();

    currentRef = $interval(function () {
      const zombieShowTime = 4;
      const time = Math.floor(currentlyPlaying.currentTime)
      const leftOVer = audioElement.duration - time;

      $scope.progress[difficulty] = Math.floor(leftOVer / 60) + ":" + Math.floor(leftOVer % 60);

      if ((time > 5 && _.inRange(time % difficulty, 0, zombieShowTime + 1))) {
        document.bgColor = "red";
      } else {
        document.bgColor = "white";
      }
    }, 50);
  };


  $scope.play60 = $scope.play.bind(null, "60");
  $scope.play40 = $scope.play.bind(null, "40");

  $scope.prevTile = function () {
    var prevTile = $scope.selectedScenario.tiles.pop();
    prevTile.tile.active = false;
    if (!$scope.selectedScenario.tiles.length) {
      $scope.selectedScenario.nextTiles.unshift(prevTile);
      $scope.selectedScenario.tiles = $scope.selectedScenario.nextTiles.slice();
      $scope.selectedScenario.nextTiles.length = 0;
      $scope.loadScenario();
      return;
    }
    $scope.selectedScenario.nextTiles.unshift(prevTile);
    $scope.selectedScenario.tiles[$scope.selectedScenario.tiles.length - 1].tile.active = 1;
    $scope.rows[prevTile.row][prevTile.column].tile = null;

  };

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
    $scope.rows.forEach(function (row) {
      row.forEach(function (rasterTile) {
        rasterTile.tile = null;
      });
    });
    $scope.selectedScenario.tiles
      .sort(function (a, b) {
        return (parseInt(a.tile.id, 10) < parseInt(b.tile.id, 10)) ? -1 : 1;
      }).forEach(function (scenarioTile) {
      $scope.rows[scenarioTile.row][scenarioTile.column].tile = scenarioTile.tile;
    });
    if (!$scope.selectedScenario.nextTiles) {
      $scope.selectedScenario.nextTiles = [];
    }
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

  $scope.$watch('scenarios', function () {
    $scope.visualState = _.flatten($scope.rows).filter(function (tile) {
      return tile.tile;
    });
  }, true);

  $scope.registerTile = function (rasterTile) {
    return;
    if (rasterTile.tile) {
      removeDuplicate(rasterTile);
    }
  };

  $scope.screenToggle = '<-->';
  $scope.hasFullScreen = 'webkitIsFullScreen' in document || 'mozRequestFullScreen' in document;
  $scope.fullScreen = function () {
    if (document.webkitIsFullScreen) {
      $scope.screenToggle = '<-->';
      document.webkitExitFullscreen();
    } else {
      $scope.screenToggle = '>--<';
      document.documentElement.webkitRequestFullScreen();
    }
  };
});
