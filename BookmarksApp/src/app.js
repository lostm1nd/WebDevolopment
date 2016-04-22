angular.module('bookmarks', [
  'ngRoute',
  'ngResource',
  'ngMaterial',
  'bookmarks-home',
  'bookmarks-list',
  'tags-list',
  'bookmarks-create',
  'bookmarks-edit'
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
