export default function reviews() {
	$('.prev-section_slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear'
	});
}
