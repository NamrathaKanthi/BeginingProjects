var app = angular.module("myApp",[]);
app.controller('myCntrl',function($scope){
	$scope.namesobjct = {name:"namratha",age:"20"};
	$scope.firstname = "latha";
	console.log($scope.namesobjct);

});
app.directive('myDirective',function(){
	return{
		restrict :"E",
		transclude:"true",
		scope:{
			names:"=name"
		},
		link:function(scope){
			//scope.firstname = "nagalatha";
			//scope.namesobjct = {name:"nagalatha"};
			//console.log(scope.names);
			scope.names.name = "nagalatha";
			console.log(scope.names);
			//console.log(scope.firstname);
		},
		templateUrl :"html/directivesample.html "
	}
});