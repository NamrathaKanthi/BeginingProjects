var app=angular.module('WordGuess',[]);
app.controller('WordGuessCtrl',function($scope){
	var wordArray=['bootstrap','phython','angular','sass','opera','css'];
	$scope.enterletter = "";
	$scope.wrongword=[];
    
    $scope.inputvalue= function($event){
        var currentevent= $event.currentTarget;
        console.log(currentevent);
        var currenteventparent= angular.element(currentevent).parent().children();
        console.log(currenteventparent);
        var currenteventbutton= currenteventparent[1];
        console.log(currenteventbutton);
        $scope.active=angular.element(document.getElementsByClassName('guessButton')[0]).addClass('active');
        //console.log(x);
    }
    $scope.EnterKey = function($event){
    $scope.active = $event.which || $event.keyCode;
    if ($scope.active === 13) {
        //alert("hello");
    }
  };

	$scope.guess=function(enterletter){
		var indicesArray = [];
		for(var i=0;i<$scope.randomWord.length;i++){
			if(enterletter == $scope.randomWord[i]){
					indicesArray.push(i)
			console.log(indicesArray);
		 		}
			}
		//console.log(enterletter);
		if (indicesArray.length > 0) {
			console.log(indicesArray.length);
            for (var i=0;i<indicesArray.length;i++) {
                $scope.z[indicesArray[i]].value = enterletter; 
                //console.log($scope.z[indicesArray[i]].value);
            }
            var count = 0;
             for (var i = 0; i < $scope.z.length; i++) {
                    if ($scope.z[i].value !='') {
                        count = count + 1;
                    }
                    if (count == $scope.randomWord.length) {
                        //alert("YOU WON");
                        $('#myModal').modal('show');
                        $scope.wrongword=[];
                    }
                }
           $scope.enterletter="";
        } 
        else {
            $scope.wrongword.push($scope.enterletter);
            $scope.enterletter = "";
        }
    }

    

	$scope.getRandomWord=function(){
			$scope.randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
			console.log($scope.randomWord);
        	$scope.z = [];
        	for (var j = 0; j < $scope.randomWord.length; j++) {
            $scope.z.push({ 'name':$scope.randomWord[j], 'value': '' });
            console.log($scope.z);
        	}

            $scope.wrongword=[];
		 console.log($scope.z[0].value);
	};
});