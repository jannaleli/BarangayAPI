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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BarangayAttachmentModel', 'model/BarangayComplaintArray', 'model/BarangayComplaintModel', 'model/BarangayDocumentArray', 'model/BarangayDocumentModel', 'model/BarangayEventArray', 'model/BarangayEventModel', 'model/BarangayPermitArray', 'model/BarangayPermitModel', 'model/BarangayUserArray', 'model/BarangayUserModel', 'model/Empty', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BarangayAttachmentModel'), require('./model/BarangayComplaintArray'), require('./model/BarangayComplaintModel'), require('./model/BarangayDocumentArray'), require('./model/BarangayDocumentModel'), require('./model/BarangayEventArray'), require('./model/BarangayEventModel'), require('./model/BarangayPermitArray'), require('./model/BarangayPermitModel'), require('./model/BarangayUserArray'), require('./model/BarangayUserModel'), require('./model/Empty'), require('./api/DefaultApi'));
  }
}(function(ApiClient, BarangayAttachmentModel, BarangayComplaintArray, BarangayComplaintModel, BarangayDocumentArray, BarangayDocumentModel, BarangayEventArray, BarangayEventModel, BarangayPermitArray, BarangayPermitModel, BarangayUserArray, BarangayUserModel, Empty, DefaultApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BarangayApi = require('index'); // See note below*.
   * var xxxSvc = new BarangayApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BarangayApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new BarangayApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BarangayApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2019-07-14T05:55:41Z
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BarangayAttachmentModel model constructor.
     * @property {module:model/BarangayAttachmentModel}
     */
    BarangayAttachmentModel: BarangayAttachmentModel,
    /**
     * The BarangayComplaintArray model constructor.
     * @property {module:model/BarangayComplaintArray}
     */
    BarangayComplaintArray: BarangayComplaintArray,
    /**
     * The BarangayComplaintModel model constructor.
     * @property {module:model/BarangayComplaintModel}
     */
    BarangayComplaintModel: BarangayComplaintModel,
    /**
     * The BarangayDocumentArray model constructor.
     * @property {module:model/BarangayDocumentArray}
     */
    BarangayDocumentArray: BarangayDocumentArray,
    /**
     * The BarangayDocumentModel model constructor.
     * @property {module:model/BarangayDocumentModel}
     */
    BarangayDocumentModel: BarangayDocumentModel,
    /**
     * The BarangayEventArray model constructor.
     * @property {module:model/BarangayEventArray}
     */
    BarangayEventArray: BarangayEventArray,
    /**
     * The BarangayEventModel model constructor.
     * @property {module:model/BarangayEventModel}
     */
    BarangayEventModel: BarangayEventModel,
    /**
     * The BarangayPermitArray model constructor.
     * @property {module:model/BarangayPermitArray}
     */
    BarangayPermitArray: BarangayPermitArray,
    /**
     * The BarangayPermitModel model constructor.
     * @property {module:model/BarangayPermitModel}
     */
    BarangayPermitModel: BarangayPermitModel,
    /**
     * The BarangayUserArray model constructor.
     * @property {module:model/BarangayUserArray}
     */
    BarangayUserArray: BarangayUserArray,
    /**
     * The BarangayUserModel model constructor.
     * @property {module:model/BarangayUserModel}
     */
    BarangayUserModel: BarangayUserModel,
    /**
     * The Empty model constructor.
     * @property {module:model/Empty}
     */
    Empty: Empty,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
