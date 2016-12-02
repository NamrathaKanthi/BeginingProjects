var app = angular.module('lessApp',[]);
	console.log("hi");
app.controller('lesscntrl',function($scope,lessService){
	$scope.callBack = function(data){
		console.log(data);
		$scope.lessDetails = data.LessList;
		console.log($scope.lessDetails);
	}
	lessService.getLessJson($scope.callBack);
	$scope.btn = function(){

	}
});
app.service('lessService',function($http){
	this.getLessJson = function(callBack){
		return $http.get("js/docu.json").then(function Success(response){
			console.log(response);
			callBack(response.data);
			console.log(response.data);
		},function Error(response){
			var data = response.statusText;	
	});
	}
});
app.directive("myDirective",function(){
	return {
		restrict:'E',
		templateUrl :"html/directive.html "
	}

});