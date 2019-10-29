export default function reviews() {
	const burgerBtn = document.querySelector('.ham');
	const navList = document.querySelector('.nav--header .nav_list');

	burgerBtn.addEventListener('click', function () {
		navList.classList.toggle('nav_list--active');
	});
}
