(function(){
	'use strict';
	angular
	.module('TaskApp')
	.directive('firstmodel',function(){
		return{
			restrict:"E",
			templateUrl:"html/firstmodal.html"
		};
	});
})();

(function(){
	'use strict';
	angular
	.module('TaskApp')
	.directive('secondmodel',function(){
		return{
			restrict:"E",
			templateUrl:"html/secondmodal.html"
		};
	});

})();