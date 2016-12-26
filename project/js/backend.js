var app=angular.module('myApp',[]);
app.controller('appCtrl',function($scope,myPromiseService){
	$scope.showingtable = function(){
		$scope.showtable = true;	
	}

	myPromiseService.getjson('js/document.json').then (function(data){
		$scope.fruitdetails = data.FruitDetails;
		console.log($scope.fruitdetails);
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