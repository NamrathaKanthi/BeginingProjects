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
		$urlRouterProvider.when("/first","/first/");
		$urlRouterProvider.when("/second","/second/");
		$urlRouterProvider.when("/third","/third/");
		$stateProvider
			.state('homepage',{
				url:'/',
				templateUrl:"html/homepage.html"
			})
			.state('first',{
				url:'/first',
				templateUrl:"html/first.html"
			})

			.state('first.direct',{
				url:'/',
				views:{
					"sidenavbar":{
						templateUrl:"html/sidenavbar.html"
					},
					"disney":{
						templateUrl:"html/disney.html"
					}
			}
			})
			.state('second',{
				url: '/second',
				templateUrl:"html/second.html"
			})
			.state('second.direct',{
				url:'/',
				views:{
					"sidenavbar":{
						templateUrl:"html/sidenavbar.html"
					},
					"Mickey":{
						templateUrl:"html/mickey.html"
					}
				}
			})
			.state('third',{
				url : '/third',
				templateUrl:"html/third.html"
			})
			.state('third.direct',{
				url:'/',
				views:{
					"sidenavbar":{
						templateUrl:"html/sidenavbar.html"
					},
					"Donald":{
						templateUrl:"html/donald.html"
					}
				}
			})
			.state('photos',{
				url: '/photos',
				templateUrl:"html/photos.html"
			});
	});
	/*app.directive('mydirective',function(){
		return {
		restrict :"E",
		templateUrl :"html/horizontalnavbar.html"
	}
	});*/
	/*app.directive('mySideNav',function(){
		return{
			restrict:"E",
			templateUrl:"html/sidenavbar.html"
		}
	});*/
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