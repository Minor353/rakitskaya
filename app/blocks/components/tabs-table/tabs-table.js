export default function reviews() {
	const tabsWrap = document.querySelector('.tabs-table');

	if (tabsWrap) {
		const tabsBtn = document.querySelectorAll('.tabs-table_tabs-item');
		const tabsContent = document.querySelectorAll('.tabs-table_content-item');

		tabsContent[0].classList.add('tabs-table_content-item--active');
		tabsBtn[0].classList.add('tabs-table_tabs-item--active');

		for (let i = 0; i < tabsBtn.length; i++) {
			tabsBtn[i].addEventListener('click', function () {
				for (let i = 0; i < tabsBtn.length; i++) {
					tabsContent[i].classList.remove('tabs-table_content-item--active');
					tabsBtn[i].classList.remove('tabs-table_tabs-item--active');
				};
				tabsBtn[i].classList.add('tabs-table_tabs-item--active');
				tabsContent[i].classList.add('tabs-table_content-item--active');
			});
		};
	};
}
