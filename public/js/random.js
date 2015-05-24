(function(){
	"use strict";
	var list = ["do homework","watch a movie","play a game","go to gym","eat pizza","study","hang out","make money","dance","go to codeday","program"];

	$(document).ready(function() {
		//lucky function
		$('#random').click(function() {
	        var num = Math.floor(Math.random()*11);
			console.log(num);
			var text = list[num];
			$('#todo_text').val(text); 
		});
		
		//send the data and 
		$('#submit').click(function() {
			//get the email 
			var email = $('#email_text').val().toLowerCase(); 
			console.log($('#email_text').val().toLowerCase());
			//get the query
			var	query = $("#todo_text").val().toLowerCase();
			console.log($("#todo_text").val().toLowerCase());
			//open ajax
			var ajax = new XMLHttpRequest();
			ajax.open("POST","/api/query");
			ajax.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			ajax.send(JSON.stringify({email:email, query:query}));
			ajax.onload = function(){
				var data = JSON.parse(this.responseText);
				//we found a match
				if(data.match == 1){
					window.location.replace("/match");
				}else{
					window.location.replace("/no_match");
				}
			}
		});
	});

})();