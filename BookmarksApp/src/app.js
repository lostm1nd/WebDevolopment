angular.module('bookmarks', [
  'ngRoute',
  'ngResource',
  'bookmarks-create'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/create', {
      template: '<bookmarks-create></bookmarks-create>'
    })
    .when('/edit/:id', {
      template: '<bookmarks-edit></bookmarks-edit>'
    })
    .when('/', {
      template: '<bookmarks-home></bookmarks-home>'
    })
    .otherwise({
      redirectTo: '/'
    });
}])
.config(['$mdThemingProvider', function ($mdThemingProvider) {
  $mdThemingProvider.theme('lime').backgroundPalette('lime').dark();
}]);
