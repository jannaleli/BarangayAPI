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
    instance = new BarangayApi.BarangayPermitModel();
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

  describe('BarangayPermitModel', function() {
    it('should create an instance of BarangayPermitModel', function() {
      // uncomment below and update the code to test BarangayPermitModel
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be.a(BarangayApi.BarangayPermitModel);
    });

    it('should have the property permitId (base name: "permit_id")', function() {
      // uncomment below and update the code to test the property permitId
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property attachmentId (base name: "attachment_id")', function() {
      // uncomment below and update the code to test the property attachmentId
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property businessActivity (base name: "business_activity")', function() {
      // uncomment below and update the code to test the property businessActivity
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property businessName (base name: "business_name")', function() {
      // uncomment below and update the code to test the property businessName
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property capitalization (base name: "capitalization")', function() {
      // uncomment below and update the code to test the property capitalization
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property ctcNo (base name: "ctc_no")', function() {
      // uncomment below and update the code to test the property ctcNo
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property dateApproval (base name: "date_approval")', function() {
      // uncomment below and update the code to test the property dateApproval
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expiration_date")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property grossSale (base name: "gross_sale")', function() {
      // uncomment below and update the code to test the property grossSale
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorBarangay (base name: "lessor_barangay")', function() {
      // uncomment below and update the code to test the property lessorBarangay
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorBldgNo (base name: "lessor_bldg_no")', function() {
      // uncomment below and update the code to test the property lessorBldgNo
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorCity (base name: "lessor_city")', function() {
      // uncomment below and update the code to test the property lessorCity
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorEmailaddr (base name: "lessor_emailaddr")', function() {
      // uncomment below and update the code to test the property lessorEmailaddr
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorProvince (base name: "lessor_province")', function() {
      // uncomment below and update the code to test the property lessorProvince
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorStr (base name: "lessor_str")', function() {
      // uncomment below and update the code to test the property lessorStr
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorSubdv (base name: "lessor_subdv")', function() {
      // uncomment below and update the code to test the property lessorSubdv
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property lessorsName (base name: "lessors_name")', function() {
      // uncomment below and update the code to test the property lessorsName
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property monthlyRental (base name: "monthly_rental")', function() {
      // uncomment below and update the code to test the property monthlyRental
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property noUnits (base name: "no_units")', function() {
      // uncomment below and update the code to test the property noUnits
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new BarangayApi.BarangayPermitModel();
      //expect(instance).to.be();
    });

  });

}));