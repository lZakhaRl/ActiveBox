$(function() {



	 /* Fixed Header */ 
	let header = $("#header");
	let intro = $("#intro");
	let introh = intro.innerHeight(); 
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");


	checkScroll(scrollPos ,introh)

	$(window).on("scroll resize", function() {
		introh = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos ,introh)
	});

	function checkScroll(scrollPos ,introh) {
		if(scrollPos > introh) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		} 
	}

	

	/* Smooth scroll */
	$("[data-scroll]").on("click" ,function(event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		nav.removeClass('show')

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);

	});

	/*NavToggle*/
	nav = $("#nav");
	 navToggle = $("#navToggle");

	navToggle.on("click", function(event){
		event.preventDefault();
		nav.toggleClass("show");
			
		});


	/* Reviews <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>*/

	let slider  = $("#reviewsSlider");

	slider.slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});
});