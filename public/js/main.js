/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/swiper */ \"./src/js/module/swiper.js\");\n/* harmony import */ var _module_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/header */ \"./src/js/module/header.js\");\n/* harmony import */ var _module_burgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/burgerMenu */ \"./src/js/module/burgerMenu.js\");\n/* harmony import */ var _module_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/accordion */ \"./src/js/module/accordion.js\");\n/* harmony import */ var _module_sliderGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/sliderGallery */ \"./src/js/module/sliderGallery.js\");\n\n\n\n\n\n\n(0,_module_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_burgerMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_module_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_sliderGallery__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://CarePoint/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/accordion.js":
/*!************************************!*\
  !*** ./src/js/module/accordion.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    const accordion = document.querySelectorAll('.accordion');\r\n    if (accordion) {\r\n        document.querySelectorAll('.accordion-header').forEach(el => {\r\n            el.addEventListener('click', () => {\r\n                const content = el.nextElementSibling;\r\n                if (el.classList.contains('_active')) {\r\n                    el.classList.remove('_active');\r\n                    content.classList.remove('_active');\r\n                    document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);\r\n                } else {\r\n                    document.querySelectorAll('.accordion-header').forEach(el => el.classList.remove('_active'));\r\n                    document.querySelectorAll('.accordion-content').forEach(el => el.classList.remove('_active'));\r\n                    content.previousElementSibling.classList.add('_active');\r\n                    content.classList.add('_active');\r\n                    document.querySelectorAll('.accordion-content').forEach(el => el.style.maxHeight = null);\r\n                    content.style.maxHeight = content.scrollHeight + 'px';\r\n                }\r\n            })\r\n        })\r\n    }\r\n});\n\n//# sourceURL=webpack://CarePoint/./src/js/module/accordion.js?");

/***/ }),

/***/ "./src/js/module/burgerMenu.js":
/*!*************************************!*\
  !*** ./src/js/module/burgerMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    //бургер меню\r\n    const menuIcon = document.querySelector('.menu-icon');\r\n    const navbarList = document.querySelector('.navbar');\r\n    const body = document.querySelector('body');\r\n    if (menuIcon) {\r\n        menuIcon.addEventListener(\"click\", function (e) {\r\n            body.classList.toggle('_lock');\r\n            menuIcon.classList.toggle('_active');\r\n            navbarList.classList.toggle('_active');\r\n            document.querySelector('.patch').classList.toggle('_active');\r\n        })\r\n    }\r\n});\n\n//# sourceURL=webpack://CarePoint/./src/js/module/burgerMenu.js?");

/***/ }),

/***/ "./src/js/module/header.js":
/*!*********************************!*\
  !*** ./src/js/module/header.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    // Фиксайия хедера при скроле\r\n    const header = document.querySelector('header');\r\n    const headerBottom = document.querySelector('.header-bootom-wrapper');\r\n    const headerHeight = header.clientHeight;\r\n    const headerBottomHeight = headerBottom.clientHeight;\r\n\r\n    if (header) {\r\n        document.onscroll = () => {\r\n            let scroll = window.scrollY;\r\n            console.log(scroll);\r\n            if (scroll >= headerHeight) {\r\n                headerBottom.classList.add('fixed')\r\n            } else {\r\n                headerBottom.classList.remove('fixed')\r\n            }\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack://CarePoint/./src/js/module/header.js?");

/***/ }),

/***/ "./src/js/module/sliderGallery.js":
/*!****************************************!*\
  !*** ./src/js/module/sliderGallery.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    const body = document.querySelector('body');\r\n    const header = document.querySelector('header');\r\n    const slider = document.querySelector('.slider');\r\n    const sliderContainer = document.querySelector('.slider__container');\r\n    const cards = Array.from(document.querySelectorAll('.gallerySlider-card'));\r\n    const cardsImg = Array.from(document.querySelectorAll('.gallerySlider-cardImg'));\r\n    const nextBtn = document.querySelector('.slider__btn--right');\r\n    const prevBtn = document.querySelector('.slider__btn--left');\r\n    const closeBtn = document.querySelector('.slider__btn--close');\r\n\r\n    if (slider) {\r\n        let curentImgIndex;\r\n        let curentImgNode;\r\n\r\n        const openSlider = () => {\r\n            body.classList.add('_lock');\r\n            slider.classList.add('_active');\r\n            header.classList.add('_hiden');\r\n        }\r\n\r\n\r\n        cards.forEach((card, index) => {\r\n            card.addEventListener('click', (event) => {\r\n                event.preventDefault();\r\n                openSlider();\r\n                curentImgIndex = index;\r\n                curentImgNode = cardsImg[index].cloneNode();\r\n                sliderContainer.append(curentImgNode);\r\n            });\r\n        });\r\n\r\n        // Перелистывание слайдера\r\n        const updateImg = (index) => {\r\n            const newImg = cardsImg[index].cloneNode();\r\n            curentImgNode.replaceWith(newImg);\r\n            curentImgNode = newImg;\r\n        }\r\n\r\n        const nextSlide = () => {\r\n            if (curentImgIndex < cards.length) {\r\n                curentImgIndex++;\r\n                updateImg(curentImgIndex);\r\n            }\r\n        }\r\n\r\n        const prevSlide = () => {\r\n            if (curentImgIndex > 0) {\r\n                curentImgIndex--;\r\n                updateImg(curentImgIndex);\r\n            }\r\n        }\r\n\r\n        nextBtn.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            nextSlide();\r\n        });\r\n        prevBtn.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            prevSlide();\r\n        });\r\n\r\n        // Назначение обработчика событий касания\r\n        let startX;\r\n        let endX;\r\n\r\n        const process_touchstart = (event) => {\r\n            const touch = event.touches[0];\r\n            startX = touch.clientX;\r\n        };\r\n\r\n        const process_touchmove = (event) => {\r\n            const touch = event.touches[0];\r\n            endX = touch.clientX;\r\n        };\r\n\r\n        const process_touchend = () => {\r\n            const dif = endX - startX;\r\n            dif > 0 ? prevSlide() : nextSlide();\r\n        };\r\n\r\n        sliderContainer.addEventListener('touchstart', process_touchstart, false);\r\n        sliderContainer.addEventListener('touchmove', process_touchmove, false);\r\n        sliderContainer.addEventListener('touchend', process_touchend, false);\r\n\r\n        // Закрытие слайдера\r\n        const closeSlider = () => {\r\n            body.classList.remove('_lock');\r\n            slider.classList.remove('_active');\r\n            header.classList.remove('_hiden');\r\n            curentImgNode.remove();\r\n        }\r\n\r\n        closeBtn.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            closeSlider();\r\n        });\r\n\r\n        slider.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            if (event.target.classList.contains('slider')) {\r\n                closeSlider();\r\n            }\r\n        });\r\n\r\n        document.addEventListener('keydown', (event) => {\r\n            if (event.key === 'Escape') {\r\n                closeSlider();\r\n            }\r\n        })\r\n    }\r\n});\n\n//# sourceURL=webpack://CarePoint/./src/js/module/sliderGallery.js?");

/***/ }),

/***/ "./src/js/module/swiper.js":
/*!*********************************!*\
  !*** ./src/js/module/swiper.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n    const swiperEl = document.querySelector('.swiper');\r\n    if (swiperEl) {\r\n        const swiper = new Swiper(swiperEl, {\r\n            // Optional parameters\r\n            loop: true,\r\n            spaceBetween: 10,\r\n            // If we need pagination\r\n            pagination: {\r\n                el: '.swiper-pagination',\r\n                clickable: true,\r\n                dynamicBullets: true\r\n            },\r\n            navigation: {\r\n                nextEl: '.swiper-button-next',\r\n                prevEl: '.swiper-button-prev',\r\n            },\r\n            breakpoints: {\r\n                // when window width is >= 320px\r\n                1024: {\r\n                    slidesPerView: 4,\r\n                },\r\n                768: {\r\n                    spaceBetween: 30,\r\n                    slidesPerView: 3,\r\n\r\n                },\r\n                425: {\r\n                    spaceBetween: 10,\r\n                    slidesPerView: 2,\r\n                },\r\n            }\r\n        });\r\n    }\r\n});\n\n//# sourceURL=webpack://CarePoint/./src/js/module/swiper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;