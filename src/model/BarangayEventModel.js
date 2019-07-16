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
    root.BarangayApi.BarangayEventModel = factory(root.BarangayApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BarangayEventModel model module.
   * @module model/BarangayEventModel
   * @version 2019-07-14T05:55:41Z
   */

  /**
   * Constructs a new <code>BarangayEventModel</code>.
   * @alias module:model/BarangayEventModel
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>BarangayEventModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BarangayEventModel} obj Optional instance to populate.
   * @return {module:model/BarangayEventModel} The populated <code>BarangayEventModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'String');
      }
      if (data.hasOwnProperty('attachment_id')) {
        obj['attachment_id'] = ApiClient.convertToType(data['attachment_id'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('event_desc')) {
        obj['event_desc'] = ApiClient.convertToType(data['event_desc'], 'String');
      }
      if (data.hasOwnProperty('event_title')) {
        obj['event_title'] = ApiClient.convertToType(data['event_title'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * @member {String} attachment_id
   */
  exports.prototype['attachment_id'] = undefined;
  /**
   * @member {String} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} event_desc
   */
  exports.prototype['event_desc'] = undefined;
  /**
   * @member {String} event_title
   */
  exports.prototype['event_title'] = undefined;
  /**
   * @member {String} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));

