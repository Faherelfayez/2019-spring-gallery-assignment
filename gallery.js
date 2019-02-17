//. the info below are the steps we need to take before writing the code for javascript 

//.document.ready.function (this means all the html is loaded on the document)



//. always define your variables IMPORTANT 

//. this is the javascript 

let slideShow = document.querySelectorAll('.slide'), 
	buttonPrevious = document.querySelector('.previous'),
	buttonNext = document.querySelector('.next'),
	current - 0; 

// Clear. all images 
function reset () {
	for(let i = 0; i < slideShow.length; i++){
		slideShow[i].style.display = 'none' ; 
	}
}


}
//initial slide 
function. startSlide(){
	reset(); 
	slideShow [0].style.display = 'block'
}
$(document).ready(function () {
	$('.slideShow img').on( {

		mouseover : function () {
			$(this). css({
				'cursor': 'pointer'
			});
		},
		mouseout: function () {
			$(this).css9{ 'cursor': default}
		}); 

	click: function () {
		var imagUrl = $(this).attr('src');
		$()
	}
	}); 
 


 }); 

//.selectt all the slides (grab them from html)(value of the variable will be an array which is the group of an image(pic and cpation and heading) that is getting pulled)

//. set the index slide (number) aka which slide we are starting with 

//. get the current slide which changes over time as you move through the slides  

//.STEPS 
//. 1. hide all slides except for the one we want to see (e.g. all but the first)
	//. a. 
	//. b. 
//. 2. move in the specified direction 
	//. a. 
	//. b. 
	//. c. return to the opposite  or resetting so the slideshow starts again 


//. INSTRUCTIONS 
//.hide all the slides 

//. show the first slide 


	
//. when the user clicks "next"
	//. hide. current slide  

	//. increment the slide index (take the current clide. and add one which wil take us to the next)
	SlideIndex++; 
		//. same as slideIndex + 1
//. conditional check of the SLideIndex (if greater than 4 ... )
		//.reset to 0. 

	//. set the currentSlide based on the newly incremented SlideIndex
			//.show next slide 

	//.go to. the start 

//. when the user clicks "previous"

	//.go to. the end 








