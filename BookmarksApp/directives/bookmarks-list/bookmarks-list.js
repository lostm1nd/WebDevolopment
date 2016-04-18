angular.module('bookmarks')
  .directive('bookmarksList', function () {
    return {
      require: '^^bookmarksHome',
      templateUrl: 'directives/bookmarks-list/bookmarks-list.html',
      scope: {
        bookmarks: '='
      },
      link: function ($scope, element, attrs, bookmarksHomeCtrl) {
        $scope.delete = bookmarksHomeCtrl.delete;
      }
    };
  });
