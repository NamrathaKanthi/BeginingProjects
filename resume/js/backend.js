var app=angular.module('myResume',["ui.router"]);
console.log("123");
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home',{
				url:'/home',
				templateUrl:"html/home.html"
			})
			.state('profile',{
				url:'/profile',
				templateUrl:"html/profile.html"
			})
			.state('education',{
				url: '/education',
				templateUrl:"html/education.html"
			})
			.state('skills',{
				url : '/skills',
				templateUrl:"html/skills.html"
			})
			.state('contact',{
				url: '/contact',
				templateUrl:"html/contact.html"
			});

});
app.controller('myResumeCntrl',function($scope,$http){
	console.log("896");
	$http.get("js/document.json").then(function mySucces(response) {
      console.log(response);
      $scope.myData = response.data;
      console.log($scope.myData);
    }, function myError(response) {
      $scope.myData = response.statusText;
      console.log("hi");
  });

});
app.directive('myDirectivePage',function(){
	return{
		restrict:"E",
		templateUrl:"html/directivepage.html"
	}
});
app.directive('myImageDirective',function(){
	return{
		restrict:"E",
		templateUrl:"html/directiveimage.html"
	}
});