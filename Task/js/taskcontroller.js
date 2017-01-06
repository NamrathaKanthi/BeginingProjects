(function() {
	'use strict';
	angular
	.module('TaskApp',['ngMessages']);
})();

(function(){
 'use strict';
 angular
    .module('TaskApp')
    .controller('taskCtrl',['$scope','TaskService','taskFactory',function($scope,TaskService,taskFactory){
       $scope.showtable1=false;
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

   	 	$scope.showingtable = function(){
		$scope.showtable1 = true;	
		}
		$scope.accountData=function(data){
			$scope.accountfeildtext=data;
		}
		//$scope.accountfeildtext='';
		$scope.frequency=function(data){
			$scope.searchText=data;
		}
		$scope.paymentTimmingData=function(data){
			$scope.paymentfieldtext=data;
		}
		$scope.PaymentData=function(data){
			$scope.SearchText=data;
			console.log($scope.SearchText);
				}
		$scope.paymentDueData=function(data){
			$scope.paymentdueData=data;
		}
		$scope.GrowthData=function(data){
			$scope.Growthdata=data;
		}
		$scope.PayamentDueOn=function(data){
			$scope.PaymentDueon=data;
		}

		$scope.chargeamountData=function(data){
			$scope.chargeamountbasis=data;
		}

		// $scope.modify = function(tableData){
		// 	// $scope.details = $scope.Firstmodal.angular.cop 
		// };
		
		// $scope.update = function(tableData){
		// 	$scope.modifyField = false;
		// 	$scope.viewField = false;
		// };

		// $scope.deletedata = function(user){
		// 	console.log(user);
		// 	var index = $rootScope.EmployeeList.indexOf(user);
		// 	$rootScope.EmployeeList.splice(index,1);   
			
		// }	
		//$scope.Firstmodal=[];
		$scope.show=function(){
			$scope.Firstmodal=taskFactory.updateInfo('info-1',{paymentinfo:$scope.SearchText,Accounttype:$scope.accountfeildtext,frequency:$scope.searchText,periodStartdate:$scope.date,paymenttiming:$scope.paymentfieldtext,paymentdueon:$scope.PaymentDueon,paymentdueday:$scope.paymentdueData});
			// $scope.isChecked = true;
   //  			return true
			// console.log("hello");
			$scope.open =true;
			$("#myModal").modal('hide');
		}

		$scope.close=function(){
			$scope.open=false;

		}
		$scope.Details = [];
		$scope.save=function(){
			// taskFactory.updateInfo('info-2',{growthtype:$scope.Growthdata,fixedgrowth:$scope.Fixedgrowthdata,numberofschedules:$scope.Numberofschedules,chargeamountbasis:$scope.chargeamountbasis,contractrentable:$scope.contractrentable,Amountperbasis:$scope.amountperbasis,paymentdueday:$scope.paymentdueData});
			// $scope.Details.push(taskFactory.getInfo('info-1'));
			// console.log($scope.Details);
			var flag = false;
			$scope.open=false;
			$("#myModal1").modal('hide');
			$("#myModal").modal('hide');

			for(var i=0;i<$scope.Details.length;i++){
				if($scope.SearchText == $scope.Details[i].paymentinfo){
					flag = true;
				}
			}
			if(flag){
				for(var i=0;i<$scope.Details.length;i++){
					if($scope.SearchText == $scope.Details[i].paymentinfo){
						$scope.Details[i].details.push($scope.SearchText);
					}
				}
			}else{
				$scope.newobject ={};
				$scope.newobject.paymentinfo = $scope.SearchText;
				$scope.newobject.details = [];
				$scope.newobject.details.push(taskFactory.getInfo('info-1'));
				$scope.Details.push($scope.newobject);
				console.log($scope.newobject);
				console.log($scope.Details);
			}



		}
		


    }]);
})();


