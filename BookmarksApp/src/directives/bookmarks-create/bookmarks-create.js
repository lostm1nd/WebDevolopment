angular.module('bookmarks-create', [
  'rest-service'
]).directive('bookmarksCreate', function (restService) {
  return {
    templateUrl: 'directives/bookmarks-create/bookmarks-create.html',
    controller: function ($scope, $location) {
      $scope.create = function (bookmark) {
        restService.save({
          name: bookmark.name,
          url: bookmark.url,
          tags: bookmark.tags.split(',').map(function (tag) { return tag.trim(); })
        }).$promise.then(function success() {
          $location.path('/');
        });
      };
    }
  };
});
