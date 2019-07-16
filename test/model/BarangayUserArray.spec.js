/**
 * BarangayAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2019-07-14T05:55:41Z
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BarangayApi);
  }
}(this, function(expect, BarangayApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BarangayApi.BarangayUserArray();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BarangayUserArray', function() {
    it('should create an instance of BarangayUserArray', function() {
      // uncomment below and update the code to test BarangayUserArray
      //var instance = new BarangayApi.BarangayUserArray();
      //expect(instance).to.be.a(BarangayApi.BarangayUserArray);
    });

  });

}));