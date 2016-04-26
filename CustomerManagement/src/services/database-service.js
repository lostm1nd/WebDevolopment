angular.module('custManagement').factory('databaseService', function ($resource) {
  var dbUrl = 'https://api.mlab.com/api/1/databases/customer_management_db/collections/customers/:id';
  var apiKey = 'vSgKUIIpRUeL8VAEl_WLt9wkrOlDDjNz';

  return $resource(dbUrl, {
    apiKey: apiKey
  }, {
    update: { method: 'PUT' }
  });
});
