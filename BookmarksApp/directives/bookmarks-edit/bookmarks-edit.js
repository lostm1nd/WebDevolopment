angular.module('bookmarks').directive('bookmarksEdit', function ($routeParams, $location, restService) {
  return {
    templateUrl: 'directives/bookmarks-edit/bookmarks-edit.html',
    controller: function ($scope) {
      $scope.bookmark = restService.get({ id: $routeParams.id });

      $scope.edit = function (bookmark) {
        restService.update({
          id: $routeParams.id
        }, bookmark).$promise.then(function success() {
          $location.path('/');
        });
      };
    }
  };
});
