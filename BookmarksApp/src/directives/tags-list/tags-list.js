angular.module('tags-list', []).directive('tagsList', function () {
  return {
    require: '^^bookmarksHome',
    templateUrl: 'directives/tags-list/tags-list.html',
    scope: {
      tags: '='
    },
    link: function ($scope, $element, $attrs, bookmarksHomeCtrl) {
      $scope.filterBy = bookmarksHomeCtrl.setFilter;
    }
  };
});
