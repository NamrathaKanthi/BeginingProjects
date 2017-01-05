(function() {
	'use strict';
	angular
	.module('TaskApp',['ui.router']);
})();

(function(){
 'use strict';
 angular
    .module('TaskApp')
    .controller('taskCtrl',['$scope','TaskService',function($scope,TaskService){

    	function init() {
    		$('#dateRangePicker')
        		.datepicker({
            	format: 'mm/dd/yyyy',  
        		})
			};
    	init();

    	TaskService.getjson('./jsons/c_frequecyType.json').then (function(data){
		$scope.frequencydetails = data;
		$scope.dropDownListData =[];
		$scope.frequencydetails.map(function(val,key){
			var splitedArray = val.path.split('\\');
			$scope.dropDownListData.push(splitedArray[splitedArray.length-1]);
		})
		console.log($scope.dropDownListData);
	});
    	TaskService.getjson('jsons/c_paymentType.json').then (function(data){
		$scope.paymentdetails = data;
		$scope.Paymentdetails = [];
		$scope.paymentdetails.map(function(val,key){
			var spiltArray = val.path.split('\\');
			$scope.Paymentdetails.push(spiltArray[spiltArray.length-1]);
		})
		
		console.log($scope.paymentdetails);
	});

    	   	TaskService.getjson('jsons/l_AccountingType.json').then (function(data){
		$scope.accountdetails = data.result;
		console.log($scope.accountdetails);
	});

    	   	 	TaskService.getjson('jsons/l_PaymentDueOn.json').then (function(data){
		$scope.paymentdueondetails = data.result;
		console.log($scope.paymentdueondetails);
	});
    	   	 	TaskService.getjson('jsons/l_PaymentTiming.json').then (function(data){
		$scope.paymentTimingdetails = data.result;
		console.log($scope.paymentTimingdetails);
	});
    	   	 	TaskService.getjson('jsons/l_ChargeAmountBasis.json').then (function(data){
		$scope.chargeAmountBasisdetails = data.result;
		console.log($scope.chargeAmountBasisdetails);
	});

    	   	 	TaskService.getjson('jsons/l_GrowthType.json').then (function(data){
		$scope.growthType = data.result;
		console.log($scope.growthType);
	});

    	   	 	TaskService.getjson('jsons/l_PaymentDueDay.json').then (function(data){
		$scope.paymentDueDay = data.result;
		console.log($scope.paymentDueDay);
	});
$scope.accountData=function(data){
	$scope.accountfeildtext=data;
}
$scope.paymentTimmingData=function(data){
	$scope.paymentfieldtext=data;
}
$scope.PaymentData=function(data){
			$scope.SearchText=data;
		}



		$scope.paymentDueData=function(data){
			$scope.paymentdueData=data;
		}

		$scope.PayamentDueOn=function(data){
			$scope.PaymentDueon=data;
		}


    }]);
})();
