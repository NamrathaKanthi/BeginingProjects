(function(){
	'use strict';
	angular
	.module('TaskApp')
	.factory('taskFactory',function(){
		var factory={};
	factory.storedetails = function(){
		factory.SearchText=$scope.SearchText;
		factory.accountfeildtext=$scope.accountfeildtext;
		factory.searchText=$scope.searchText;
		factory.date=$scope.date;
		factory.paymentfieldtext=$scope.paymentfieldtext;
		factory.PaymentDueon=$scope.PaymentDueon;
		factory.paymentdueData=$scope.paymentdueData;
		console.log(factory.SearchText);
		console.log(factory.accountfeildtext);
		console.log(factory.searchText);
		console.log(factory.date);
		console.log(factory.paymentfieldtext);
		console.log(factory.PaymentDueon);
		console.log(factory.paymentdueData);
	}
	return factory;
	});
})();