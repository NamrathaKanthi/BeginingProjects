var app = angular.module('plunker', []);
console.log("heloo");
app.controller('MainCtrl', function($scope) {
  $(".childiv").on("click",function() {
  var id=this.id;
  console.log(id);
  id = parseInt(id);
  $scope.myFunct = function(keyEvent) {
  	$(".childiv").removeClass('active');
	    if (keyEvent.which === 37){
	    	console.log(id);
	    	$("#"+id).addClass('active');
	    	console.log("left");
	    	id = id-1;
	    }
	    else if (keyEvent.which === 38){
	    	console.log(id);
	    	$("#"+id).addClass('active');
	    	console.log("up");
	    	id = id-4;
	    }
	    else if(keyEvent.which === 39){
	    	console.log(id);
	    	$("#"+id).addClass('active');
	    	console.log("right");
	    	id=id+1;
	    }
	    else if(keyEvent.which === 40){
	    	console.log(id);
	    	$("#"+id).addClass('active');
	    	console.log("bottom");
	    	id=id+4;
	    }
  };
});
});

