describe('Bookmarks home', function () {
  var bookmarks;
  beforeEach(module('bookmarks-home', function ($provide) {
    bookmarks = [{
      _id: { $oid: 1 },
      name: 'mock',
      url: 'www.mock.com',
      tags: ['mock', 'me']
    }];

    $provide.factory('restService', function () {
      return {
        query: function (cb) { cb(bookmarks); return bookmarks; },
        remove: function () {}
      };
    });
  }));

  beforeEach(module('directives/bookmarks-home/bookmarks-home.html'));

  var element, scope;
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    element = angular.element('<bookmarks-home></bookmarks-home>');
    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('should have an html representation', function () {
    expect(element.html()).toBeTruthy();
  });

  it('should send a GET request to load all bookmarks', function () {
    expect(scope.bookmarks).toEqual(bookmarks);
  });

  it('should extract tags from bookmarks', function () {
    var expected = {
      mock: { name: 'mock', number: 1 },
      me: { name: 'me', number: 1 }
    };

    expect(scope.tags).toEqual(expected);
  });

  it('should define a setFilter function on controller', function () {
    expect(scope.BookmarksHomeCtrl.setFilter).toEqual(jasmine.any(Function));
  });

  it('should define a filter value on scope on setFilter', function () {
    var expected = 'test';

    scope.BookmarksHomeCtrl.setFilter(expected);

    expect(scope.filter).toEqual(expected);
  });

  it('should define a clearFilter function on controller', function () {
    expect(scope.BookmarksHomeCtrl.clearFilter).toEqual(jasmine.any(Function));
  });

  it('should set filter value on scope to undefined on clearFilter', function () {
    scope.BookmarksHomeCtrl.setFilter('some value');
    scope.BookmarksHomeCtrl.clearFilter();

    expect(scope.filter).toEqual(undefined);
  });

  it('should define a delete function on controller', function () {
    expect(scope.BookmarksHomeCtrl.delete).toEqual(jasmine.any(Function));
  });

  it('should delete bookmark and update tags on delete', function () {
    scope.BookmarksHomeCtrl.delete(bookmarks[0]);

    expect(scope.bookmarks).toEqual([]);
    expect(scope.tags).toEqual({});
  });
});
