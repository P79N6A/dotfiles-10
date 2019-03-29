function getAPIDataDomain(domain, params, timeout, successCallback, errorCallback){
	getAPIDataURL(api + domain + "/all", params, timeout, successCallback, errorCallback);
}

function getAPIDataURL(url, params, timeout, successCallback, errorCallback, requestType){
	var reqType = requestType ? requestType:"GET";
	$.ajax({
		url:url,
		data:params || null,
		dataType:"json",
		type:reqType,
		timeout:timeout,
		success:successCallback,
		error:errorCallback
	});
}