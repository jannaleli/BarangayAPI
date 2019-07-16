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
    define(['ApiClient', 'model/BarangayEventModel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BarangayEventModel'));
  } else {
    // Browser globals (root is window)
    if (!root.BarangayApi) {
      root.BarangayApi = {};
    }
    root.BarangayApi.BarangayEventArray = factory(root.BarangayApi.ApiClient, root.BarangayApi.BarangayEventModel);
  }
}(this, function(ApiClient, BarangayEventModel) {
  'use strict';




  /**
   * The BarangayEventArray model module.
   * @module model/BarangayEventArray
   * @version 2019-07-14T05:55:41Z
   */

  /**
   * Constructs a new <code>BarangayEventArray</code>.
   * @alias module:model/BarangayEventArray
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>BarangayEventArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BarangayEventArray} obj Optional instance to populate.
   * @return {module:model/BarangayEventArray} The populated <code>BarangayEventArray</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'BarangayEventModel');

    }
    return obj;
  }




  return exports;
}));

