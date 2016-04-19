angular.module('bookmarks').directive('bookmarksList', function ($location) {
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
      $scope.edit = function (bookmark) {
        $location.path('/edit/' + bookmark._id.$oid);
      };
    }
  };
});
