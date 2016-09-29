$(document).ready(function(){

	$("#my-image").on('click', function(event) {
      var $img = $("#my-image");
      $img.attr("src","images/jock.jpg");
	});
});

$('.carousel').carousel({
	interval: 10000
});

