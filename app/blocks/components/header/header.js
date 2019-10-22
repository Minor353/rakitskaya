export default function reviews() {
	const headerPanel = document.querySelector('.header');
	const headerTriger = document.querySelector('body');
	const headerTrigerTop = headerTriger.getBoundingClientRect().top + window.pageYOffset;

	window.onscroll = function () {
		if (window.pageYOffset == 0) {
			headerPanel.classList.remove('header--active');
		} else if (window.pageYOffset > headerTrigerTop) {
			headerPanel.classList.add('header--active');
		}
	};
}
