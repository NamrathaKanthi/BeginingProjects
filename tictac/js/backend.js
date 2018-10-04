	$(document).ready(function() {
		console.log("hello");
		$(".maindiv").on("click",function() {
			var gettingid = this.id;
			console.log("hello");
			var player1 = $("#player1").hasClass("active");
			var player2 = $("#player2").hasClass("active");
			//console.log(player1);
			//console.log(player2);
			if(player1) {
				console.log(player1);
				//console.log("hello");
				$("#player1").removeClass("active");
				$("#player2").addClass("active");
				$("#"+gettingid).one("click");
				$("#"+gettingid).text("X");
					
			}
			
			if(player2) {
				console.log(player2);
				$("#player2").removeClass("active");
				$("#player1").addClass("active");
				$("#"+gettingid).one("click");
				$("#"+gettingid).text("O");
					
			}

	});
    });