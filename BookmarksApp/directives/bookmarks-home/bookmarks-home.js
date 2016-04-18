angular.module('bookmarks')
  .directive('bookmarksHome', function (tagsService) {
    return {
      templateUrl: 'directives/bookmarks-home/bookmarks-home.html',
      controller: function ($scope, bookmarksDB) {
        $scope.bookmarks = bookmarksDB;
        $scope.tags = tagsService.extract(bookmarksDB);

        this.delete = function (bookmark) {
          var index = bookmarksDB.indexOf(bookmark);

          bookmarksDB = bookmarksDB.slice(0, index).concat(bookmarksDB.slice(index + 1));
          $scope.bookmarks = bookmarksDB;
          $scope.tags = tagsService.extract(bookmarksDB);
        };
      }
    };
  });
