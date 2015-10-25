angular.module('NoteWrangler').controller('NotesShowController', function (Notes, $scope, $routeParams) {
	$scope.note = Notes.get({ id: $routeParams.id });
});
