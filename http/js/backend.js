var app = angular.module('myApp', []);
console.log("hi");
app.controller('myCtrl', function($scope, $http) {
	console.log("hi");
  $http.get("js/document.js").then(function mySucces(response) {
      console.log(response);
      $scope.myData = response.data.EmployeeList;
      console.log($scope.myData);
    }, function myError(response) {
      $scope.myData = response.statusText;
      console.log("hi");
  });
});