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
    instance = new BarangayApi.BarangayAttachmentModel();
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

  describe('BarangayAttachmentModel', function() {
    it('should create an instance of BarangayAttachmentModel', function() {
      // uncomment below and update the code to test BarangayAttachmentModel
      //var instance = new BarangayApi.BarangayAttachmentModel();
      //expect(instance).to.be.a(BarangayApi.BarangayAttachmentModel);
    });

    it('should have the property attachmentId (base name: "attachment_id")', function() {
      // uncomment below and update the code to test the property attachmentId
      //var instance = new BarangayApi.BarangayAttachmentModel();
      //expect(instance).to.be();
    });

    it('should have the property attachmentSrc (base name: "attachment_src")', function() {
      // uncomment below and update the code to test the property attachmentSrc
      //var instance = new BarangayApi.BarangayAttachmentModel();
      //expect(instance).to.be();
    });

  });

}));
