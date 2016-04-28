angular.module('custManagement').factory('databaseService', function ($resource) {
  var dbUrl = 'https://api.mlab.com/api/1/databases/customer_management_db/collections/:collection/:id';
  var apiKey = 'vSgKUIIpRUeL8VAEl_WLt9wkrOlDDjNz';

  var resource = $resource(dbUrl, {
    apiKey: apiKey
  }, {
    update: { method: 'PUT' }
  });

  resource.prototype.$remove = function (params, onSuccess, onError) {
    var id = {id: this._id.$oid};
    var merged = angular.extend({}, id, params);
    return resource.remove(merged, onSuccess, onError);
  };

  return resource;
});
