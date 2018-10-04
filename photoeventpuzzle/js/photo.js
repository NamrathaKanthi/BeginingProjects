var app=angular.module('photoApp',[]);
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
app.controller('photoCtrl',function($scope,$location) {
	$scope.dropped = [];
    console.log($scope.dropped);
    $scope.items = [
        {id:1,image:"images/image_part_001.jpg"},
        {id:5,image:"images/image_part_005.jpg"},
        {id:3,image:"images/image_part_003.jpg"},
        {id:2,image:"images/image_part_002.jpg"},
        {id:6,image:"images/image_part_006.jpg"},
        {id:4,image:"images/image_part_004.jpg"}
        
    ];
    $scope.moveToBox = function(id) {
        for (var index = 0; index < $scope.items.length; index++) {
            var item = $scope.items[index]; 
            if (item.id == id) {
                if($scope.dropped.length == 0 && item.id == 1){
                    $scope.dropped.push(item);
                    $scope.items.splice(index, 1);
                }
                else{
                    if($scope.dropped[$scope.dropped.length -1].id == item.id -1){
                        $scope.dropped.push(item);
                        console.log($scope.dropped[$scope.dropped.length -1].id);
                        $scope.items.splice(index, 1);
                    }
                }
                
            }
        }
        if($scope.items == ""){
               alert("game complete");
            }
        console.log($scope.dropped);
        $scope.$apply();
    };
});