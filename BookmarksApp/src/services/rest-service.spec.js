describe('Rest service', function() {
  var restService, $httpBackend;

  beforeEach(module('rest-service'));
  beforeEach(inject(function ($injector) {
    restService = $injector.get('restService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should define an update', function () {
    expect(restService.update).toBeDefined();
  });

  it('should send a PUT request on update', function () {
    $httpBackend.expectPUT().respond({});
    restService.update();
    $httpBackend.flush();
  });
});
