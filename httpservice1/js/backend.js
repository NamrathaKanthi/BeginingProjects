var app = angular.module('myHttp', []);
	console.log("hi");
	app.directive('myDirectiveService',function(){
	return{
		restrict :"E",
		scope : {
			data: '=',
			remove:'&remove'
		},
		template :"<button ng-click='remove(user)'>X</button>"
		
	}		
	});
	app.controller('myCtrlService', function($scope,myServiceHttp) {
		console.log("hi");
		$scope.callBack = function(data){
			$scope.Details = data.EmployeeList;
			console.log($scope.Details );
		}
		/*$scope.callBack2 = function(data){
			$scope.Mobile = data.EmployeeList;
			console.log($scope.Mobile);
		}*/
		myServiceHttp.getjson($scope.callBack);
		//myServiceHttp.getJson($scope.callBack2);
		$scope.game= function(user){
			$scope.somedata = user;
			console.log(user);
		}
		$scope.remove = function(user){
			console.log(user);
			var index = $scope.Details.indexOf(user);
			$scope.Details.splice(index,1);   
			
		}
	});
  
	app.controller('myCntrl',function($scope,myServiceHttp){
	  console.log("hi");
		$scope.callBack2 = function(data){
			$scope.Mobile = data.EmployeeList;
			console.log($scope.Mobile);
		}
		myServiceHttp.getJson($scope.callBack2);

		$scope.game= function(user){
			$scope.somedata = user;
			console.log(user);
		}
		$scope.remove = function(user){
			console.log(user);
			var index1 = $scope. Mobile.indexOf(user);
			$scope.Mobile.splice(index1,1);   
			
		}
	  
	});
  app.service('myServiceHttp',function($http) {
	this.getjson = function(callBack){
		return $http.get("js/doc.json").then(function mySucces(response) {
      console.log(response.data);
		callBack(response.data);
    }, function myError(response) {
      var myData = response.statusText;
      console.log("hi");
	});
	}
	
	this.getJson = function(callBack2) {
		return $http.get("js/document.json").then(function mySucces(response) {
			 callBack2(response.data);
			 console.log(response.data);
			},function myError(response){
			  var myData = response.statusText;
		  }); 
	   
	}
  });
  