describe('Tags list', function () {
  beforeEach(module('tags-list'));
  beforeEach(module('directives/tags-list/tags-list.html'));

  var spies, element, scope;
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.tags = {
      mock: { name: 'mock', number: 3 }
    };

    spies = {
      setFilter: jasmine.createSpy()
    };

    element = angular.element('<div><tags-list tags="tags"></tags-list></div>');
    element.data('$bookmarksHomeController', spies);
    element = $compile(element)(scope);
    element = element.find('tags-list');

    scope.$digest();
  }));

  it('should have an html representation', function () {
    expect(element.html()).toBeTruthy();
  });

  it('should have tags passed to isolated scope', function () {
    expect(element.isolateScope().tags).toEqual(scope.tags);
  });

  it('should invoke setFilter on parent on filter button click', function () {
    var filterButton = element.find('md-button');

    filterButton.triggerHandler('click');
    expect(spies.setFilter).toHaveBeenCalledTimes(1);
  });
});
