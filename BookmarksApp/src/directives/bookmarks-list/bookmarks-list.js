angular.module('bookmarks-list', []).directive('bookmarksList', function ($location) {
  return {
    require: '^^bookmarksHome',
    templateUrl: 'directives/bookmarks-list/bookmarks-list.html',
    scope: {
      bookmarks: '=',
      filter: '='
    },
    link: function ($scope, $element, $attrs, bookmarksHomeCtrl) {
      $scope.delete = bookmarksHomeCtrl.delete;
      $scope.clearFilter = bookmarksHomeCtrl.clearFilter;
    }
  };
});
