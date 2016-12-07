var app=angular.module('promisesApp',[]);
console.log("123");
app.controller('myPromisecontroller',function($scope,myPromiseService) {
	myPromiseService.getjson('js/document.json').then (function(data){
		$scope.details = data;
		console.log($scope.details);
	});
});
app.service('myPromiseService',function($http,$q){
	this.getjson=function(url){
		var info=$q.defer();
		$http.get(url).success(info.resolve)
		.error(info.reject);
		return info.promise;
			
	}
});


