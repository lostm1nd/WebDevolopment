angular.module('custManagement', [
  'ngResource',
  'ngComponentRouter'
])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})
.value('$routerRootComponent', 'cmHome');
