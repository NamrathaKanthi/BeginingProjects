var app=angular.module('myHtmlApp',["ngRoute"]);
console.log("hi");
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "html/first.html"
	})
	.when("/second",{
		templateUrl :"html/second.html"
	})
	.when("/third",{
		templateUrl : "html/third.html"
	});
});
app.controller('MyHtmlCntrl',function($scope,$location){
	console.log("hello");
	$scope.firstimage = function(){
		$location.url("/");
	}
	$scope.secondimage = function(){
		$location.url("/second");
	}
	$scope.thirdimage = function(){
		$location.url("/third");
	}
});