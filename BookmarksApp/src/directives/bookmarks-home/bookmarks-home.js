angular.module('bookmarks').directive('bookmarksHome', function (restService, tagsService) {
  return {
    templateUrl: 'directives/bookmarks-home/bookmarks-home.html',
    controller: function ($scope) {
      $scope.bookmarks = restService.query(function success(bookmarks) {
        $scope.tags = tagsService.extract(bookmarks);
      });

      this.setFilter = function (filter) {
        $scope.filter = filter;
      };

      this.clearFilter = function () {
        $scope.filter = undefined;
      };

      this.delete = function (bookmark) {
        $scope.bookmarks.splice($scope.bookmarks.indexOf(bookmark), 1);
        $scope.tags = tagsService.extract($scope.bookmarks);

        restService.remove({
          id: bookmark._id.$oid
        });
      };
    }
  };
});
