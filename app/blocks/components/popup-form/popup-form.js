export default function reviews() {
	const popupForm = document.querySelector('.popup-form');
	const popupFormBtns = document.querySelectorAll('.js-form-popup');
	const popupFormCross = document.querySelector('.popup-form_content-cross');

	if (popupFormBtns[0]) {

		for (let i = 0; i < popupFormBtns.length; i++) {
			popupFormBtns[i].addEventListener('click', function (e) {
				e.preventDefault();
				popupForm.classList.add('popup-form--active');
			});
		};

		popupFormCross.addEventListener('click', function () {
			popupForm.classList.remove('popup-form--active');
		});

		/**Сабмит формы */
		$('#popupForm').on('submit', submitPopupForm);

		function submitPopupForm(e) {
			e.preventDefault();

			var form = $(e.target),
				data = form.serialize(),
				url = form.attr('action');

			var request = $.ajax({
				type: 'POST',
				url: url,
				data: data
			});

			function closePopup() {
				popupForm.classList.remove('popup-form--submit');
				popupForm.classList.remove('popup-form--active');
				document.getElementById('popupForm').reset();
			}

			request.done(function (msg) {
				popupForm.classList.add('popup-form--submit');
				setTimeout(closePopup, 2800);
			});

			request.fail(function (jqXHR, textStatus) {
				popupForm.classList.add('popup-form--submit');
				setTimeout(closePopup, 2800);
			})
		};

		/**Маска для номера телефона */
		function setCursorPosition(pos, e) {
			e.focus();
			if (e.setSelectionRange) e.setSelectionRange(pos, pos);
			else if (e.createTextRange) {
				var range = e.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select()
			}
		}

		function mask(e) {
			//console.log('mask',e);
			var matrix = this.placeholder, // .defaultValue
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			def.length >= val.length && (val = def);
			matrix = matrix.replace(/[_\d]/g, function (a) {
				return val.charAt(i++) || "_"
			});
			this.value = matrix;
			i = matrix.lastIndexOf(val.substr(-1));
			i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
			setCursorPosition(i, this)
		}
		window.addEventListener("DOMContentLoaded", function () {
			var input = document.querySelectorAll("#phone-input");
			for (let i = 0; i < input.length; i++) {
				input[i].addEventListener("input", mask, false);
				input[i].focus();
				setCursorPosition(3, input[i]);
			};
		});
		/***********************************/

	};
}
