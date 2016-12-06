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
app.directive('firstdiv',function(){
	return{
		restrict:"E",
		templateUrl:"html/firstdiv.html"
	}
});
app.directive('secondiv',function(){
	return{
		restrict:"E",
		templateUrl:"html/secondiv.html"
	}
});
app.directive('thirdiv',function(){
	return{
		restrict:"E",
		templateUrl:"html/thirdiv.html"
	}
});
app.directive('fourthdiv',function(){
	return{
		restrict:"E",
		templateUrl:"html/fourthdiv.html"
	}
});
app.directive('fifthdiv',function(){
	return{
		restrict:"E",
		templateUrl:"html/fifthdiv.html"
	}
});
app.directive('carsouel',function(){
	return{
		restrict:"E",
		templateUrl:"html/carsouel.html"
	}
});