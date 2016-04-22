describe('Bookmarks edit', function () {
  var bookmark, updateSpy;
  beforeEach(module('bookmarks-edit', function ($provide) {
    bookmark = {
      name: 'mock',
      url: 'www.mock.com',
      tags: ['mock', 'me']
    };

    updateSpy = jasmine.createSpy();

    $provide.factory('restService', function ($q) {
      return {
        get: function () { return bookmark; },
        update: function () { updateSpy(); return { $promise: $q.resolve() }; }
      };
    });
  }));

  beforeEach(module('directives/bookmarks-edit/bookmarks-edit.html'));

  var element, scope, locationPathSpy;
  beforeEach(inject(function ($rootScope, $compile, $location) {
    locationPathSpy = jasmine.createSpy();
    $location.path = locationPathSpy;

    scope = $rootScope.$new();

    element = angular.element('<bookmarks-edit></bookmarks-edit>');
    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('should have an html representation', function () {
    expect(element.html()).toBeTruthy();
  });

  it('should send a GET request to load a specific bookmark', function () {
    expect(scope.bookmark).toEqual(bookmark);
  });

  it('should define an edit function on scope', function () {
    expect(scope.edit).toEqual(jasmine.any(Function));
  });

  it('should call edit on form submit', function () {
    var spy = jasmine.createSpy();
    scope.edit = spy;

    angular.element(
      element[0].querySelector('md-button[type=submit]')
    ).triggerHandler('click');

    expect(spy.calls.count()).toEqual(1);
  });

  it('should call restService.update on scope.edit', function () {
    scope.edit();
    expect(updateSpy).toHaveBeenCalledTimes(1);
  });

  it('should redirect to root on success in scope.edit', function () {
    scope.edit();
    scope.$digest();

    expect(locationPathSpy).toHaveBeenCalledWith('/');
  });
});
