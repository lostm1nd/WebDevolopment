describe('Bookmarks create', function () {
  beforeEach(module('bookmarks-create'));
  beforeEach(module('directives/bookmarks-create/bookmarks-create.html'));

  var element, scope, $httpBackend;
  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();

    element = angular.element('<bookmarks-create></bookmarks-create>');
    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('should have an html representation', function () {
    expect(element.html()).toBeTruthy();
  });

  it('should define a create function on scope', function () {
    expect(scope.create).toEqual(jasmine.any(Function));
  });

  it('should call create function on form submit', function () {
    var spy = jasmine.createSpy();
    scope.create = spy;

    angular.element(
      element[0].querySelector('md-button[type=submit]')
    ).triggerHandler('click');

    expect(spy.calls.count()).toEqual(1);
  });

  it('should send POST request with correct data on create', function () {
    var bookmark = { name: 'test', url: 'www.test.com', tags: 'test, me ,  now' };
    var expected = { name: 'test', url: 'www.test.com', tags: ['test', 'me', 'now'] };

    $httpBackend.expectPOST(function () {
      return true;
    }, expected).respond({});
    scope.create(bookmark);
    $httpBackend.flush();
  });
});
