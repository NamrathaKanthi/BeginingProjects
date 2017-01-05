
(function(){
 'use strict';
 angular
    .module('TaskApp')
    .directive('datetimez', function() {
        return {
            restrict: 'A',
            require : 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
              element.datetimepicker({
                dateFormat:'dd/MM/yyyy',
                language: 'us-eng'
              }).on('changeDate', function(e) {
                ngModelCtrl.$setViewValue(e.date);
                scope.$apply();
              });
            }
        };
    });

  });
