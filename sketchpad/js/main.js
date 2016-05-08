var squareSize = 640/16;

$(document).ready(function(){
	initGrid();

	$(":button").click(function(){
		$('.square').remove();
		initGrid();
		console.log("clear!")
	});

	

	function initGrid() {
		for (var i = 0; i < 16*16; i++) {
			var square = $('<div class="square"></div>');
			square.appendTo('.container');
			square.css('height', squareSize);
			square.css('width', squareSize);
		}
		mouseTracker();
	}

	function mouseTracker() {
		$('.square').hover(function(){
			$(this).css('background', '#000000');
		});
	}
});