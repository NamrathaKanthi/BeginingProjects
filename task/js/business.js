var app=angular.module('myTask',[]);
app.controller('businessCtrl',function($scope,myBusinessService) {
	
	myBusinessService.getjson("js/business.json").then(function(data){
		console.log("hello");
		$scope.details=data;
	$scope.businessdetails=data.business;
	$scope.attributedetails=data.attributeTypes;
	for(var i=0;i<$scope.attributedetails.attribute;i++){
		console.log($scope.attributedetails.attribute);
	}
	$scope.tagdetails=data.tagTypes;
	console.log($scope.businessdetails);
	console.log($scope.attributedetails);
	console.log($scope.tagdetails);
	console.log($scope.details);
	});

});
app.service('myBusinessService',function($http,$q){
	this.getjson = function(url){
		var result = $q.defer();
		$http.get(url).success(result.resolve)
     	.error(result.reject);
		return result.promise;
}
});
