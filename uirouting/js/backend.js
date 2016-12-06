var app=angular.module('myHtmlApp',["ui.router"]);
	console.log("hi");
	/*app.config(function($routeProvider){
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
	});*/
	app.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('homepage',{
				url:'/',
				templateUrl:"html/homepage.html"
			})
			.state('first',{
				url:'/first',
				templateUrl:"html/first.html"
			})
			.state('second',{
				url: '/second',
				templateUrl:"html/second.html"
			})
			.state('third',{
				url : '/third',
				templateUrl:"html/third.html"
			})
			.state('photos',{
				url: '/photos',
				templateUrl:"html/photos.html"
			});
	});
	app.directive('mydirective',function(){
		return {
		restrict :"E",
		templateUrl :"html/button.html"
	}
	});
	app.controller('MyHtmlCntrl',function($scope,$location){
		console.log("hello");
		$scope.firstimage1 = function(){
			$location.url("/first");
		}
		$scope.secondimage2 = function(){
			$location.url("/second");
		}
		$scope.thirdimage3 = function(){
			$location.url("/third");
		}
	});

	app.controller('myPhotosCntrl',function($scope,$location){
		console.log("123");
		$scope.firstimage = function(){
			$location.url("/first");
		}
		$scope.secondimage = function(){
			$location.url("/second");
		}
		$scope.thirdimage = function(){
			$location.url("/third");
		}
	});