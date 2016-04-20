angular.module('bookmarks').factory('tagsService', function () {
  return {
    extract: function (array) {
      return array.reduce(function (acc, bookmark) {
          return acc.concat(bookmark.tags);
        }, []).reduce(function (acc, bookmark) {
          if (!acc[bookmark]) {
            acc[bookmark] = {
              name: bookmark,
              number: 0
            };
          }

          acc[bookmark].number += 1;
          return acc;
        }, {});
    }
  };
});
