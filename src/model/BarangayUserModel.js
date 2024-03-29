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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BarangayApi) {
      root.BarangayApi = {};
    }
    root.BarangayApi.BarangayUserModel = factory(root.BarangayApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BarangayUserModel model module.
   * @module model/BarangayUserModel
   * @version 2019-07-14T05:55:41Z
   */

  /**
   * Constructs a new <code>BarangayUserModel</code>.
   * @alias module:model/BarangayUserModel
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>BarangayUserModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BarangayUserModel} obj Optional instance to populate.
   * @return {module:model/BarangayUserModel} The populated <code>BarangayUserModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('birtdate')) {
        obj['birtdate'] = ApiClient.convertToType(data['birtdate'], 'String');
      }
      if (data.hasOwnProperty('createdate')) {
        obj['createdate'] = ApiClient.convertToType(data['createdate'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('mobilenumber')) {
        obj['mobilenumber'] = ApiClient.convertToType(data['mobilenumber'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('civil_status')) {
        obj['civil_status'] = ApiClient.convertToType(data['civil_status'], 'String');
      }
      if (data.hasOwnProperty('ctc_no')) {
        obj['ctc_no'] = ApiClient.convertToType(data['ctc_no'], 'String');
      }
      if (data.hasOwnProperty('tin_no')) {
        obj['tin_no'] = ApiClient.convertToType(data['tin_no'], 'String');
      }
      if (data.hasOwnProperty('place_of_birth')) {
        obj['place_of_birth'] = ApiClient.convertToType(data['place_of_birth'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('control_no')) {
        obj['control_no'] = ApiClient.convertToType(data['control_no'], 'String');
      }
      if (data.hasOwnProperty('contact_no')) {
        obj['contact_no'] = ApiClient.convertToType(data['contact_no'], 'String');
      }
      if (data.hasOwnProperty('profession')) {
        obj['profession'] = ApiClient.convertToType(data['profession'], 'String');
      }
      if (data.hasOwnProperty('gross_income')) {
        obj['gross_income'] = ApiClient.convertToType(data['gross_income'], 'String');
      }
      if (data.hasOwnProperty('attachment_id')) {
        obj['attachment_id'] = ApiClient.convertToType(data['attachment_id'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} birtdate
   */
  exports.prototype['birtdate'] = undefined;
  /**
   * @member {String} createdate
   */
  exports.prototype['createdate'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} mobilenumber
   */
  exports.prototype['mobilenumber'] = undefined;
  /**
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * @member {String} civil_status
   */
  exports.prototype['civil_status'] = undefined;
  /**
   * @member {String} ctc_no
   */
  exports.prototype['ctc_no'] = undefined;
  /**
   * @member {String} tin_no
   */
  exports.prototype['tin_no'] = undefined;
  /**
   * @member {String} place_of_birth
   */
  exports.prototype['place_of_birth'] = undefined;
  /**
   * @member {String} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {String} control_no
   */
  exports.prototype['control_no'] = undefined;
  /**
   * @member {String} contact_no
   */
  exports.prototype['contact_no'] = undefined;
  /**
   * @member {String} profession
   */
  exports.prototype['profession'] = undefined;
  /**
   * @member {String} gross_income
   */
  exports.prototype['gross_income'] = undefined;
  /**
   * @member {String} attachment_id
   */
  exports.prototype['attachment_id'] = undefined;
  /**
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;



  return exports;
}));


