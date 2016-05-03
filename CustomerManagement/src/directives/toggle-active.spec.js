describe('Toggle-active directive', function () {
  var element, scope, locationPathSpy;

  beforeEach(module('custManagement'));
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    element = angular.element(
      '<ul toggle-active>' +
        '<li><a class="is-active">one</a></li>' +
        '<li><a>two</a></li>' +
      '</ul>'
    );
    element = $compile(element)(scope);

    scope.$digest();
  }));

  it('should toggle the active class when a link is pressed', function () {
    element.find('a').eq(1).triggerHandler('click');
    scope.$digest();

    expect(element.find('a').eq(0).hasClass('is-active')).toEqual(false);
    expect(element.find('a').eq(1).hasClass('is-active')).toEqual(true);
  });
});
