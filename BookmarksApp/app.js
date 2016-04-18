angular.module('bookmarks', ['ngRoute'])
  .value('bookmarksDB', [
    {
      id: 1,
      name: 'jQuery',
      url: 'http://jquery.com',
      tags: ['javascript', 'library']
    },
    {
      id: 2,
      name: 'Underscore',
      url: 'http://underscore.org',
      tags: ['javascript', 'library']
    },
    {
      id: 3,
      name: 'Backbone',
      url: 'http://backbonejs.org',
      tags: ['javascript', 'framework']
    }
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
  }]);
