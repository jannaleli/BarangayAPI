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
    root.BarangayApi.BarangayPermitModel = factory(root.BarangayApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BarangayPermitModel model module.
   * @module model/BarangayPermitModel
   * @version 2019-07-14T05:55:41Z
   */

  /**
   * Constructs a new <code>BarangayPermitModel</code>.
   * @alias module:model/BarangayPermitModel
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>BarangayPermitModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BarangayPermitModel} obj Optional instance to populate.
   * @return {module:model/BarangayPermitModel} The populated <code>BarangayPermitModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('permit_id')) {
        obj['permit_id'] = ApiClient.convertToType(data['permit_id'], 'String');
      }
      if (data.hasOwnProperty('attachment_id')) {
        obj['attachment_id'] = ApiClient.convertToType(data['attachment_id'], 'String');
      }
      if (data.hasOwnProperty('business_activity')) {
        obj['business_activity'] = ApiClient.convertToType(data['business_activity'], 'String');
      }
      if (data.hasOwnProperty('business_name')) {
        obj['business_name'] = ApiClient.convertToType(data['business_name'], 'String');
      }
      if (data.hasOwnProperty('capitalization')) {
        obj['capitalization'] = ApiClient.convertToType(data['capitalization'], 'String');
      }
      if (data.hasOwnProperty('ctc_no')) {
        obj['ctc_no'] = ApiClient.convertToType(data['ctc_no'], 'String');
      }
      if (data.hasOwnProperty('date_approval')) {
        obj['date_approval'] = ApiClient.convertToType(data['date_approval'], 'String');
      }
      if (data.hasOwnProperty('expiration_date')) {
        obj['expiration_date'] = ApiClient.convertToType(data['expiration_date'], 'String');
      }
      if (data.hasOwnProperty('gross_sale')) {
        obj['gross_sale'] = ApiClient.convertToType(data['gross_sale'], 'String');
      }
      if (data.hasOwnProperty('lessor_barangay')) {
        obj['lessor_barangay'] = ApiClient.convertToType(data['lessor_barangay'], 'String');
      }
      if (data.hasOwnProperty('lessor_bldg_no')) {
        obj['lessor_bldg_no'] = ApiClient.convertToType(data['lessor_bldg_no'], 'String');
      }
      if (data.hasOwnProperty('lessor_city')) {
        obj['lessor_city'] = ApiClient.convertToType(data['lessor_city'], 'String');
      }
      if (data.hasOwnProperty('lessor_emailaddr')) {
        obj['lessor_emailaddr'] = ApiClient.convertToType(data['lessor_emailaddr'], 'String');
      }
      if (data.hasOwnProperty('lessor_province')) {
        obj['lessor_province'] = ApiClient.convertToType(data['lessor_province'], 'String');
      }
      if (data.hasOwnProperty('lessor_str')) {
        obj['lessor_str'] = ApiClient.convertToType(data['lessor_str'], 'String');
      }
      if (data.hasOwnProperty('lessor_subdv')) {
        obj['lessor_subdv'] = ApiClient.convertToType(data['lessor_subdv'], 'String');
      }
      if (data.hasOwnProperty('lessors_name')) {
        obj['lessors_name'] = ApiClient.convertToType(data['lessors_name'], 'String');
      }
      if (data.hasOwnProperty('monthly_rental')) {
        obj['monthly_rental'] = ApiClient.convertToType(data['monthly_rental'], 'String');
      }
      if (data.hasOwnProperty('no_units')) {
        obj['no_units'] = ApiClient.convertToType(data['no_units'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} permit_id
   */
  exports.prototype['permit_id'] = undefined;
  /**
   * @member {String} attachment_id
   */
  exports.prototype['attachment_id'] = undefined;
  /**
   * @member {String} business_activity
   */
  exports.prototype['business_activity'] = undefined;
  /**
   * @member {String} business_name
   */
  exports.prototype['business_name'] = undefined;
  /**
   * @member {String} capitalization
   */
  exports.prototype['capitalization'] = undefined;
  /**
   * @member {String} ctc_no
   */
  exports.prototype['ctc_no'] = undefined;
  /**
   * @member {String} date_approval
   */
  exports.prototype['date_approval'] = undefined;
  /**
   * @member {String} expiration_date
   */
  exports.prototype['expiration_date'] = undefined;
  /**
   * @member {String} gross_sale
   */
  exports.prototype['gross_sale'] = undefined;
  /**
   * @member {String} lessor_barangay
   */
  exports.prototype['lessor_barangay'] = undefined;
  /**
   * @member {String} lessor_bldg_no
   */
  exports.prototype['lessor_bldg_no'] = undefined;
  /**
   * @member {String} lessor_city
   */
  exports.prototype['lessor_city'] = undefined;
  /**
   * @member {String} lessor_emailaddr
   */
  exports.prototype['lessor_emailaddr'] = undefined;
  /**
   * @member {String} lessor_province
   */
  exports.prototype['lessor_province'] = undefined;
  /**
   * @member {String} lessor_str
   */
  exports.prototype['lessor_str'] = undefined;
  /**
   * @member {String} lessor_subdv
   */
  exports.prototype['lessor_subdv'] = undefined;
  /**
   * @member {String} lessors_name
   */
  exports.prototype['lessors_name'] = undefined;
  /**
   * @member {String} monthly_rental
   */
  exports.prototype['monthly_rental'] = undefined;
  /**
   * @member {String} no_units
   */
  exports.prototype['no_units'] = undefined;
  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));


