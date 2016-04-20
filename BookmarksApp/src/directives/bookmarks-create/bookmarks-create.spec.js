describe('Bookmarks create:', function() {
  beforeEach(module('bookmarks-create'));

  var element;
  beforeEach(inject(function ($compile, $rootScope) {
    element = angular.element('<bookmarks-create></bookmarks-create>');
    var scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should define a controller', function () {
    console.log(element.html());
    expect(element).toBeDefined();
  });
});
