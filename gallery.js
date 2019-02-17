//. the info below are the steps we need to take before writing the code for javascript 

//.document.ready.function (this means all the html is loaded on the document)
$(document).ready(function () {
$('.next').on('click' , function()
	var currentImg = $('.active');
	var nextImg = currentImg.next();

	if(nextImg.length) {
		currentImg.removeClass('active').css('z-index' , -10)
		nextImg.addClass('active').css('z-index' , 10);
	}

		});


$('.previous').on('click' , function()
	var currentImg = $('.active');
	var nextImg = currentImg.next();

	if(nextImg.length) {
		currentImg.removeClass('active').css('z-index' , -5)
		previousImg.addClass('active').css('z-index' , 5);
	}

		});


	});

