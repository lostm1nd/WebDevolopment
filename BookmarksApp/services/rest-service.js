angular.module('bookmarks').factory('restService', function ($resource) {
  var dbUrl = 'https://api.mlab.com/api/1/databases/bookmarks_db/collections/bookmarks/:id';
  var apiKey = 'vSgKUIIpRUeL8VAEl_WLt9wkrOlDDjNz';

  return $resource(dbUrl, {
    apiKey: apiKey
  }, {
    update: { method: 'PUT' }
  });
});
