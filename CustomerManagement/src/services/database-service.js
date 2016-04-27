angular.module('custManagement').factory('databaseService', function ($resource) {
  var dbUrl = 'https://api.mlab.com/api/1/databases/customer_management_db/collections/customers/:id';
  var apiKey = 'vSgKUIIpRUeL8VAEl_WLt9wkrOlDDjNz';

  var resource = $resource(dbUrl, {
    apiKey: apiKey
  }, {
    update: { method: 'PUT' }
  });

  resource.prototype.$remove = function (onSuccess, onError) {
    return resource.remove({id: this._id.$oid}, onSuccess, onError);
  };

  return resource;
});
