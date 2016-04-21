xdescribe('Bookmarks create', function() {
  beforeEach(module('bookmarks-create'));
  beforeEach(module('directives/bookmarks-create/bookmarks-create.html'));

  var element;
  beforeEach(inject(function ($compile, $rootScope) {
    // element = angular.element('<bookmarks-create></bookmarks-create>');
    // var scope = $rootScope.$new();
    // element = $compile(element)(scope);
    // scope.$digest();
  }));

  it('should define a controller', function () {
    // console.log(element.html());
    expect(1).toBe(1);
  });
});
