var app=angular.module('myResume',[]);
console.log("123");
app.controller('myResumeCntrl',function($scope,$http){
	$http.get("js/document.json").then(function mySucces(response) {
      console.log(response);
      $scope.myData = response.data;
      console.log($scope.myData);
       console.log($scope.myData.careerobjective);
        console.log($scope.myData.EducationalQualification);
    }, function myError(response) {
      $scope.myData = response.statusText;
      console.log("hi");

  });

});
/*app.directive('firstpart',function(){
	return{
		restrict:"E",
		templateUrl:"html/firstpart.html"
	}
});*/