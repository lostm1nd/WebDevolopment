angular.module('NoteWrangler').config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/notes'
		})
		.when('/notes', {
			templateUrl: 'assets/templates/notes/index.html',
			controller: 'NotesIndexController'
		})
		.when('/notes/new', {
			templateUrl: 'assets/templates/notes/create.html',
			controller: 'NotesCreateController'
		})
		.when('/notes/:id', {
			templateUrl: 'assets/templates/notes/show.html',
			controller: 'NotesShowController'
		})
		.when('/notes/:id/edit', {
			templateUrl: 'assets/templates/notes/edit.html',
			controller: 'NotesEditController'
		});
});
