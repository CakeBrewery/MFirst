'use strict';

describe('Directive: compiole', function () {

  // load the directive's module
  beforeEach(module('clientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<compiole></compiole>');
    element = $compile(element)(scope);
    expect(element.text()).not.toBe(null);
  }));
});
