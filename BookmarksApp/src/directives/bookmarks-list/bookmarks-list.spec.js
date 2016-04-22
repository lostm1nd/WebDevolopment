describe('Bookmarks list', function () {
  beforeEach(module('bookmarks-list'));
  beforeEach(module('directives/bookmarks-list/bookmarks-list.html'));

  var spies, element, scope;
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.filter = 'me';
    scope.bookmarks = [{
      _id: { $oid: 1 },
      name: 'mock',
      url: 'www.mock.com',
      tags: ['mock', 'me']
    }];

    spies = {
      delete: jasmine.createSpy(),
      clearFilter: jasmine.createSpy()
    };

    element = angular.element('<div><bookmarks-list bookmarks="bookmarks" filter="filter"></bookmarks-list></div>');
    element.data('$bookmarksHomeController', spies);
    element = $compile(element)(scope);
    element = element.find('bookmarks-list');

    scope.$digest();
  }));

  it('should have an html representation', function () {
    expect(element.html()).toBeTruthy();
  });

  it('should have bookmarks passed to isolated scope', function () {
    expect(element.isolateScope().bookmarks).toEqual(scope.bookmarks);
  });

  it('should have filter passed to isolated scope', function () {
    expect(element.isolateScope().filter).toEqual(scope.filter);
  });

  it('should invoke clearFilter on parent on clear button click', function () {
    var clearButton = angular.element(element[0].querySelector('.clear-filter'));

    clearButton.triggerHandler('click');
    expect(spies.clearFilter).toHaveBeenCalledTimes(1);
  });

  it('should invoke delete on parent on delete button click', function () {
    var clearButton = angular.element(element[0].querySelector('.delete-bookmark'));

    clearButton.triggerHandler('click');
    expect(spies.delete).toHaveBeenCalledTimes(1);
  });
});
