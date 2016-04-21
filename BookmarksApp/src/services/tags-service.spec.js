describe('Tags service', function() {
  var bookmarks = [{
      id: 1,
      name: 'jQuery',
      url: 'http://jquery.com',
      tags: ['javascript', 'library']
    }, {
      id: 2,
      name: 'Underscore',
      url: 'http://underscore.org',
      tags: ['javascript', 'library']
    }, {
      id: 3,
      name: 'Backbone',
      url: 'http://backbonejs.org',
      tags: ['javascript', 'framework']
    }];

  var tagsService;

  beforeEach(module('tags-service'));
  beforeEach(inject(function ($injector) {
    tagsService = $injector.get('tagsService');
  }));

  it('should define an extract function', function () {
    expect(tagsService.extract).toEqual(jasmine.any(Function));
  });

  it('should group tags into an object with bookmark as key and object with number and name prop as value', function () {
    var grouped = tagsService.extract(bookmarks);

    expect(grouped).toEqual(jasmine.any(Object));

    expect(grouped.javascript.name).toEqual('javascript');
    expect(grouped.javascript.number).toEqual(3);

    expect(grouped.library.name).toEqual('library');
    expect(grouped.library.number).toEqual(2);

    expect(grouped.framework.name).toEqual('framework');
    expect(grouped.framework.number).toEqual(1);
  });
});
