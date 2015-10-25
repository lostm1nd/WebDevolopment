angular.module('NoteWrangler').factory('Notes', function ($resource) {
	return $resource('/notes/:id',
		{ id: '@id' },
		{ update: { method: 'PUT' } }
	);
});
