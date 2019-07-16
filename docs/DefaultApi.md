# BarangayApi.DefaultApi

All URIs are relative to *https://mjdjlvb5x9.execute-api.ap-southeast-1.amazonaws.com/prod*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachmentAttachmentIdGet**](DefaultApi.md#attachmentAttachmentIdGet) | **GET** /attachment/{attachment_id} | 
[**attachmentPost**](DefaultApi.md#attachmentPost) | **POST** /attachment | 
[**complaintComplaintIdGet**](DefaultApi.md#complaintComplaintIdGet) | **GET** /complaint/{complaint_id} | 
[**complaintGet**](DefaultApi.md#complaintGet) | **GET** /complaint | 
[**complaintPost**](DefaultApi.md#complaintPost) | **POST** /complaint | 
[**documentGet**](DefaultApi.md#documentGet) | **GET** /document | 
[**documentPost**](DefaultApi.md#documentPost) | **POST** /document | 
[**documentUserIdGet**](DefaultApi.md#documentUserIdGet) | **GET** /document/{user_id} | 
[**eventGet**](DefaultApi.md#eventGet) | **GET** /event | 
[**eventPost**](DefaultApi.md#eventPost) | **POST** /event | 
[**permitGet**](DefaultApi.md#permitGet) | **GET** /permit | 
[**permitPost**](DefaultApi.md#permitPost) | **POST** /permit | 
[**permitUserIdGet**](DefaultApi.md#permitUserIdGet) | **GET** /permit/{user_id} | 
[**userGet**](DefaultApi.md#userGet) | **GET** /user | 
[**userPost**](DefaultApi.md#userPost) | **POST** /user | 
[**userUserIdGet**](DefaultApi.md#userUserIdGet) | **GET** /user/{user_id} | 


<a name="attachmentAttachmentIdGet"></a>
# **attachmentAttachmentIdGet**
> BarangayAttachmentModel attachmentAttachmentIdGet(attachmentId)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var attachmentId = "attachmentId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachmentAttachmentIdGet(attachmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentId** | **String**|  | 

### Return type

[**BarangayAttachmentModel**](BarangayAttachmentModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachmentPost"></a>
# **attachmentPost**
> attachmentPost(barangayAttachmentModel)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var barangayAttachmentModel = new BarangayApi.BarangayAttachmentModel(); // BarangayAttachmentModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.attachmentPost(barangayAttachmentModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barangayAttachmentModel** | [**BarangayAttachmentModel**](BarangayAttachmentModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="complaintComplaintIdGet"></a>
# **complaintComplaintIdGet**
> Empty complaintComplaintIdGet(complaintId)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var complaintId = "complaintId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.complaintComplaintIdGet(complaintId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **complaintId** | **String**|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="complaintGet"></a>
# **complaintGet**
> BarangayComplaintArray complaintGet()



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.complaintGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BarangayComplaintArray**](BarangayComplaintArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="complaintPost"></a>
# **complaintPost**
> complaintPost(barangayComplaintModel)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var barangayComplaintModel = new BarangayApi.BarangayComplaintModel(); // BarangayComplaintModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.complaintPost(barangayComplaintModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barangayComplaintModel** | [**BarangayComplaintModel**](BarangayComplaintModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="documentGet"></a>
# **documentGet**
> BarangayDocumentArray documentGet()



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.documentGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BarangayDocumentArray**](BarangayDocumentArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="documentPost"></a>
# **documentPost**
> documentPost(barangayDocumentModel)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var barangayDocumentModel = new BarangayApi.BarangayDocumentModel(); // BarangayDocumentModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.documentPost(barangayDocumentModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barangayDocumentModel** | [**BarangayDocumentModel**](BarangayDocumentModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="documentUserIdGet"></a>
# **documentUserIdGet**
> BarangayDocumentModel documentUserIdGet(userId)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.documentUserIdGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**BarangayDocumentModel**](BarangayDocumentModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventGet"></a>
# **eventGet**
> BarangayEventArray eventGet()



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BarangayEventArray**](BarangayEventArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventPost"></a>
# **eventPost**
> eventPost(barangayEventModel)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var barangayEventModel = new BarangayApi.BarangayEventModel(); // BarangayEventModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventPost(barangayEventModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barangayEventModel** | [**BarangayEventModel**](BarangayEventModel.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="permitGet"></a>
# **permitGet**
> BarangayPermitArray permitGet()



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permitGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BarangayPermitArray**](BarangayPermitArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permitPost"></a>
# **permitPost**
> Empty permitPost()



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permitPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permitUserIdGet"></a>
# **permitUserIdGet**
> BarangayPermitModel permitUserIdGet(userId)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.permitUserIdGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**BarangayPermitModel**](BarangayPermitModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> BarangayUserArray userGet()



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BarangayUserArray**](BarangayUserArray.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userPost"></a>
# **userPost**
> Empty userPost(barangayUserModel)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var barangayUserModel = new BarangayApi.BarangayUserModel(); // BarangayUserModel | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPost(barangayUserModel, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **barangayUserModel** | [**BarangayUserModel**](BarangayUserModel.md)|  | 

### Return type

[**Empty**](Empty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userUserIdGet"></a>
# **userUserIdGet**
> BarangayUserModel userUserIdGet(userId)



### Example
```javascript
var BarangayApi = require('barangay_api');

var apiInstance = new BarangayApi.DefaultApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userUserIdGet(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**BarangayUserModel**](BarangayUserModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

