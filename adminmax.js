$(function() {
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop : $(this.hash).offset().top
		}, 2000);
	});
	var backgroundImages = new Array();
	var currentImage = 0;
	backgroundImages[0] = 'images/adminmax.png'
	backgroundImages[1] = 'images/adminmax-2.png'
	backgroundImages[2] = 'images/adminmax-3.png'
	backgroundImages[3] = 'images/adminmax-1.png'
	
	$('#classic').css("background-position",($('body').width() / 2) - (695 / 2));
	$('#adminmax').css("background-position",($('body').width() / 2) - (695 / 2));
	$("#next").click(function(event) {
		if (++currentImage >= backgroundImages.length)
                currentImage = 0;
		$('#adminmax').animate({
			backgroundPosition : 1500,
			opacity : 0
		}, 1000, 'linear', function() {
			$('#adminmax').css({
				"background-position" : "-1000px",
				"background-image" : "url('" + backgroundImages[currentImage]  + "')",
			}).animate({
				opacity : 1,
				backgroundPosition : ($('body').width() / 2) - (695 / 2),
				opacity : 1
			}, 800, 'linear')

		});
	});
	$("#previous").click(function(event) {
		if (--currentImage < 0)
                currentImage = 0;
		$('#adminmax').animate({
			backgroundPosition : -1500,
			opacity : 0
		}, 1000, 'linear', function() {
			$('#adminmax').css({
				"background-position" : "1000px",
				"background-image" : "url('" + backgroundImages[currentImage]  + "')",
			}).animate({
				opacity : 1,
				backgroundPosition : ($('body').width() / 2) - (695 / 2),
				opacity : 1
			}, 800, 'linear')

		});
	});

});
