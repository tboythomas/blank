(function(){
	"use strict";
	var list = ["do homework","watch a movie","play a game","go to gym","eat pizza","study","hang out","make money","dance","go to codeday","programming"];

	$(document).ready(function() {
		$('#random').click(function() {
			box();
		});
	});

	function box(){
		var num = Math.floor(Math.random()*11);
		console.log(num);
		var text = list[num];
		$('#todo_text').val(text); 
	}
})();