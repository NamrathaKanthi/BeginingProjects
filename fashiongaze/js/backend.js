var app = angular.module('myApp',[]);
app.controller('myCntrl',function($scope){
	console.log("ugobglyhi");
	$scope.searched = true;
	
	$scope.searching = function(){
		$scope.searched = false;
		$scope.search = true;
		
	}
	$scope.closeing = function(){
		$scope.searched = true;
		$scope.search = false;
	}

});