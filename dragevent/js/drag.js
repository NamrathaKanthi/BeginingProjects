var app=angular.module('dragApp',[]);
console.log("hello");
app.directive('draggable',function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes, ctlr) {
            element.attr("draggable", true);
 
            element.bind("dragstart", function(eventObject) {
                eventObject.dataTransfer.setData("text", attributes.itemid);
            });
        }
    };
});
app.directive('droptarget',function () {
 
    return {
        restrict: "A",
        link: function (scope, element, attributes, ctlr) {
            console.log("hello");
            element.bind("dragover", function(eventObject){
                
                 eventObject.dataTransfer.dropEffect ="move";
                 eventObject.preventDefault();
            });
 
            element.bind("drop", function(eventObject) {
                scope.moveToBox(parseInt(eventObject.dataTransfer.getData("text")));
                eventObject.preventDefault();
            });
        }
    };
});
app.controller('MainController',function ($scope) {
    $scope.dropped = [];
    console.log($scope.dropped);
    $scope.items = [
        {id: 1, name: "Microwave"}, 
        {id: 2, name: "Dishwasher"},
        {id: 3, name: "Phone"},
        {id: 4, name: "Punching Bag"}
    ];
 
    $scope.moveToBox = function(id) {
 
        for (var index = 0; index < $scope.items.length; index++) {
            var item = $scope.items[index]; 
            if (item.id == id) {
                $scope.dropped.push(item);
                $scope.items.splice(index, 1);
            }
        }
        $scope.$apply();
    };
 
    $scope.showItmesLeft = function () {
        alert($scope.items.length + " items left.");
    };
     
    $scope.showItmesDropped = function () {
        alert($scope.dropped.length + " items in drop-box.");
    };
});