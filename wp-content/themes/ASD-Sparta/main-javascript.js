
// Cover Slider

jQuery(document).ready(function($) {
	counter = 0;
	slide = $(".cover-slider img");
	images = ["https://staging.marcolapegna.com/wp-content/themes/ASD-Sparta/img/front-slider/gym-img.jpg",
			  "https://staging.marcolapegna.com/wp-content/themes/ASD-Sparta/img/front-slider/dumbells.jpg",
			  "https://staging.marcolapegna.com/wp-content/themes/ASD-Sparta/img/front-slider/martial-arts.jpg"
			  ];
  	indicators = $(".carousel-indicators > i");
	
	$(".carousel-next-icons > i:last").click(function () {
		counter++;
		if (counter == 3) counter = 0;
		slide.attr("src", images[counter]);
		indicators.css("opacity",".3");
		indicators.eq(counter).css("opacity", "1");
		clearInterval(slideshow);
		slideshow = setInterval(fadeSlide, 6000);
	});
	
	$(".carousel-next-icons > i:first").click(function () {
		counter--;
		if (counter == -1) counter = 2;
		slide.attr("src", images[counter]);
		indicators.css("opacity",".3");
		indicators.eq(counter).css("opacity", "1");
		clearInterval(slideshow);
		slideshow = setInterval(fadeSlide, 6000);
	});

	indicators.click(function () {
		indicator = $(this).index();
		slide.attr("src", images[indicator]);
		indicators.css("opacity",".3");
		indicators.eq(indicator).css("opacity", "1");
		counter = indicator;
		clearInterval(slideshow);
		slideshow = setInterval(fadeSlide, 6000);
	});

	function fadeSlide (){
		counter++;
		if (counter == 3) counter = 0;
		indicators.css("opacity",".3");
		indicators.eq(counter).css("opacity", "1");
		slide.fadeOut().attr("src", images[counter]).fadeIn(1000)
	}

	let slideshow = setInterval(fadeSlide, 6000);
});

//Pop-up navigation on mobile view

jQuery(document).ready(function($) {
	$(".navigation i").click(function() {
		icon = $(this).attr("class");
		logo = $(".branding");
		if(icon == "fa-solid fa-bars") {
			$(this).attr("class", "fa-solid fa-x");
			logo.hide();
			$("nav").toggleClass("visible");
		}
		else {
			$(this).attr("class", "fa-solid fa-bars");
			logo.show();
			$("nav").toggleClass("visible");
		}
	});

	$(window).resize(function() {
		icon = $(".navigation > i");
		if($(window).width() > 800) {
			$(".branding").show();
			icon.hide();
			icon.attr("class","fa-solid fa-bars");
			$("nav").removeClass("visible")
		}
		else if ($(window).width() < 800) {
			icon.show();
		};
	});
});

