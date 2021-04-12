$(document).ready(function () {
	$('.slider__slick').slick({
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		centerMode: true,
		variableWidth: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 1,
			}
		}]
	});
});