//app intialization
(function(){
  'use strict';

  angular
    .module("myApp",[]);
 })();

//controller intialization
(function(){
  'use strict';

  angular
    .module("myApp")
    .controller('appCtrl',['$scope','dataService',function($scope,dataService){
        $scope.searching = function(){
          $scope.search = true;
        } 
        $scope.closeing = function(){
          $scope.search = false;
        }
      dataService.getjson('js/document.json').then (function(data){
		    $scope.fruitdetails = data.FruitDetails;
 		     console.log($scope.fruitdetails);
          });
    }]);
})();