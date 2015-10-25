angular.module('NoteWrangler').controller('NotesIndexController', function (Notes, $scope) {
	$scope.notes = Notes.query();
});
