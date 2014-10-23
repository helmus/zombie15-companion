angular.module('myApp').controller('MainCtrl', function ($scope) {
  'use strict';

  $scope.rows = _.range(0, 6);
  $scope.columns = _.range(0, 9);

  $scope.update = function (row, column, event) {
    $(event.target).css({
        backgroundColor: 'green'
    });
  };
});