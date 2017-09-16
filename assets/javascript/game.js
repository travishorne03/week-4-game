var matchNum=0;

var wins=0;
var loses=0;

var gem1;
var gem2;
var gem3;
var gem4;

var yourScore=0;


    


$(document).ready(function(){


		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}


		/*RUNING THE ACTUAL FUNCTION*/

		function updateNum() {

			matchNum=getRandomInt(19,120);
			$("#randomNumId").html(matchNum);
			gem1=getRandomInt(1,12);
			gem2=getRandomInt(1,12);
			gem3=getRandomInt(1,12);
			gem4=getRandomInt(1,12);

		}


		updateNum();

		 function rocks(){
		 	$("#rock1").on("click", function(){
		 		yourScore += gem1;
		 		$("#endScore").html(yourScore);
		 	})
		 }

		function rocks(){
		 	$("#rock2").on("click", function(){
		 		yourScore += gem1;
		 		$("#endScore").html(yourScore);
		 	})
		 }
		function rocks(){
		 	$("#rock3").on("click", function(){
		 		yourScore += gem1;
		 		$("#endScore").html(yourScore);
		 	})
		 }

		 function rocks(){
		 	$("#rock3").on("click", function(){
		 		yourScore += gem1;
		 		$("#endScore").html(yourScore);
		 	})
		 }

});

 