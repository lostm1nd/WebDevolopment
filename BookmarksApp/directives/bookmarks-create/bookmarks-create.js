angular.module('bookmarks').directive('bookmarksCreate', function () {
  return {
    templateUrl: 'directives/bookmarks-create/bookmarks-create.html',
    controller: function ($scope, $location, bookmarksDB) {
      $scope.create = function (bookmark) {
        var nextId = bookmarksDB[bookmarksDB.length - 1].id + 1;

        bookmarksDB.push({
          id: nextId,
          name: bookmark.name,
          url: bookmark.url,
          tags: bookmark.tags.split(',').map(function (tag) { return tag.trim(); })
        });

        $location.path('/');
      };
    }
  };
});
