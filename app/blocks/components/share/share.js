export default function reviews() {
	$('.share_slider').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		fade: true,
		arrows: true,
		nextArrow: '<div class="share_slider-next"></div>',
		prevArrow: '<div class="share_slider-prev"></div>',
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: 'linear'
	});
}
