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

      dataService.getjson('js/document.json').then (function(data){
		$scope.fruitdetails = data.FruitDetails;
 		console.log($scope.fruitdetails);

          })
    }]);
})();