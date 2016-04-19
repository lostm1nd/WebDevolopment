angular.module('bookmarks').directive('tagsList', function () {
  return {
    templateUrl: 'directives/tags-list/tags-list.html',
    scope: {
      tags: '='
    }
  };
});
