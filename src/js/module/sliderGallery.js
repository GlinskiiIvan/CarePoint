export default () => {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');
    const cards = Array.from(document.querySelectorAll('.gallerySlider-card'));
    const cardsImg = Array.from(document.querySelectorAll('.gallerySlider-cardImg'));
    const nextBtn = document.querySelector('.slider__btn--right');
    const prevBtn = document.querySelector('.slider__btn--left');
    const closeBtn = document.querySelector('.slider__btn--close');

    if (slider) {
        let curentImgIndex;
        let curentImgNode;

        const openSlider = () => {
            body.classList.add('_lock');
            slider.classList.add('_active');
            header.classList.add('_hiden');
        }


        cards.forEach((card, index) => {
            card.addEventListener('click', (event) => {
                event.preventDefault();
                openSlider();
                curentImgIndex = index;
                curentImgNode = cardsImg[index].cloneNode();
                sliderContainer.append(curentImgNode);
            });
        });

        // Перелистывание слайдера
        const updateImg = (index) => {
            const newImg = cardsImg[index].cloneNode();
            curentImgNode.replaceWith(newImg);
            curentImgNode = newImg;
        }

        const nextSlide = () => {
            if (curentImgIndex < cards.length) {
                curentImgIndex++;
                updateImg(curentImgIndex);
            }
        }

        const prevSlide = () => {
            if (curentImgIndex > 0) {
                curentImgIndex--;
                updateImg(curentImgIndex);
            }
        }

        nextBtn.addEventListener('click', (event) => {
            event.preventDefault();
            nextSlide();
        });
        prevBtn.addEventListener('click', (event) => {
            event.preventDefault();
            prevSlide();
        });

        // Назначение обработчика событий касания
        let startX;
        let endX;

        const process_touchstart = (event) => {
            const touch = event.touches[0];
            startX = touch.clientX;
        };

        const process_touchmove = (event) => {
            const touch = event.touches[0];
            endX = touch.clientX;
        };

        const process_touchend = () => {
            const dif = endX - startX;
            dif > 0 ? prevSlide() : nextSlide();
        };

        sliderContainer.addEventListener('touchstart', process_touchstart, false);
        sliderContainer.addEventListener('touchmove', process_touchmove, false);
        sliderContainer.addEventListener('touchend', process_touchend, false);

        // Закрытие слайдера
        const closeSlider = () => {
            body.classList.remove('_lock');
            slider.classList.remove('_active');
            header.classList.remove('_hiden');
            curentImgNode.remove();
        }

        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            closeSlider();
        });

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.classList.contains('slider')) {
                closeSlider();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeSlider();
            }
        })
    }
}