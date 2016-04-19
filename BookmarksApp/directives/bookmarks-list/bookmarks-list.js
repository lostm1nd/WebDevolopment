angular.module('bookmarks').directive('bookmarksList', function () {
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
