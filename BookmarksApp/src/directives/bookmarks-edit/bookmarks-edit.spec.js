describe('Bookmarks edit', function () {
  var bookmark;
  beforeEach(module('bookmarks-edit', function ($provide) {
    bookmark = {
      name: 'mock',
      url: 'www.mock.com',
      tags: ['mock', 'me']
    };

    $provide.factory('restService', function ($q) {
      return {
        get: function () { return bookmark; },
        update: function () { return { $promise: $q.resolve() }; }
      };
    });
  }));

  beforeEach(module('directives/bookmarks-edit/bookmarks-edit.html'));

  var element, scope;
  beforeEach(inject(function ($rootScope, $compile) {
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

  it('should call update on scope.edit', function () {
    spyOn(scope, 'edit');
    scope.edit();
    expect(scope.edit).toHaveBeenCalledTimes(1);
  });
});
