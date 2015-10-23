'use strict';

describe('Service: componentFactory', function () {

  // load the service's module
  beforeEach(module('clientApp'));

  // instantiate service
  var componentFactory;
  beforeEach(inject(function (_componentFactory_) {
    componentFactory = _componentFactory_;
  }));

  it('should do something', function () {
    expect(!!componentFactory).toBe(true);
  });

});
