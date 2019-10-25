export default function reviews() {
	$('.about-main_content-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<div class="about-main_slider-next"></div>',
		prevArrow: '<div class="about-main_slider-prev"></div>',
		fade: true,
		asNavFor: '.about-main_slider-list'
	});
	$('.about-main_slider-list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.about-main_content-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 1030,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
}
