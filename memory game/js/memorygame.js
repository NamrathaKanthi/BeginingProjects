var app=angular.module('myGameApp',[]);
app.controller('myGameCtrl',['$scope',function($scope){
	console.log("hello");
	$scope.clickevent = function(){
		var id= angular.element(document.querySelector(".f1_card"));
		console.log(id);
		if(id.hasClass("f1_cardRotate"))
		{
			
			id.removeClass("f1_cardRotate");
		}
		else{
			
			id.addClass("f1_cardRotate");
		}
	}

	$scope.clickevent1 = function(){
		var id= angular.element(document.querySelector(".f2_card"));
		console.log(id);
		if(id.hasClass("f2_cardRotate"))
		{
			
			id.removeClass("f2_cardRotate");
		}
		else{
			
			id.addClass("f2_cardRotate");
		}
	}
	
}]);