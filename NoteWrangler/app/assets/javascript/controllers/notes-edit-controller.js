angular.module('NoteWrangler').controller('NotesEditController', function (Notes, $scope, $routeParams) {
	$scope.note = Notes.get({ id: $routeParams.id });

	$scope.saveNote = function (note) {
		note.$update();
	};
});
