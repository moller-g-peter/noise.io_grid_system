var allBoxes = 1600;

for (var i = 0; i < allBoxes; i++) {
	$('.outer_div').append('<div class="inner_div" data="1_' + i + '"></div>');
}


$('.inner_div').click(function(){
	// console.log('hellooo!');
	thisdata = $(this).attr('data');
    console.log(thisdata);
});


$('.inner_div').click(function(){
	$(this).toggleClass("marked");
});

$('.boxInMenuUp').click(function(){
	$(this).toggleClass("markedSlide");
});

// $('.boxInMenuUp').click(function(){
// $('.slideButton').toggleClass("markedSlide");
// });

// $("div").mouseup(function(){
//     $(this).after("<p style='color:green;'>Mouse button released.</p>");
// });

// $("div").mousedown(function(){
//     $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
// });