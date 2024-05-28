const slider = document.querySelector('#slider');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('hidden');

	// Добавляем индексы
	slide.dataset.index = index;

	// Добавляем data атрибут active для первого / активного слайда
	sliderItems[0].setAttribute('data-active', '');

	// Клик по слайдам
	slide.addEventListener('click', function () {
        // скрываю текущий
		slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        let nextIndex;
        if (index + 1 === sliderItems.length) {
            nextIndex = 0;
        } else {
            nextIndex = index + 1;
        }
        //наход нового слайдка
        const nextSlide = slider.querySelector(`[data-index="${nextIndex}"]`);
        //показ нового слайда
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
	});
});

btnNext.onclick = function() {
    // 1. скрыть текущий
    const currentSlide = slider.querySelector('[data-active]');
    const currentIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // 2. показать новый
    let nextIndex;
    if (currentIndex + 1 === sliderItems.length) {
        nextIndex = 0;
    } else {
        nextIndex = currentIndex + 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
    

}