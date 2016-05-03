describe('Database service', function() {
  var databaseService, $httpBackend;

  beforeEach(module('custManagement'));
  beforeEach(inject(function ($injector) {
    databaseService = $injector.get('databaseService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should define an update function', function () {
    expect(databaseService.update).toEqual(jasmine.any(Function));
  });

  it('should send a PUT request on update', function () {
    $httpBackend.expect('PUT', /mlab/).respond({});
    databaseService.update();
    $httpBackend.flush();
  });

  it('should define a $remove function on the prototype', function () {
    expect(databaseService.prototype.$remove).toEqual(jasmine.any(Function));
  });

  it('should send a DELETE request with id when on $remove', function () {
    var customer = { _id: { $oid: '12asd3' } };

    $httpBackend.expect('DELETE', /12asd3/).respond({});
    databaseService.prototype.$remove.call(customer);
    $httpBackend.flush();
  });
});
