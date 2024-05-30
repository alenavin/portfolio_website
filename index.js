const slider = document.querySelector('#slider');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('hidden');

	// Добавляем инде�