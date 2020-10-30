/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/advantages/advantages.js":
/*!************************************************!*\
  !*** ../views/blocks/advantages/advantages.js ***!
  \************************************************/
/*! exports provided: advantages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advantages", function() { return advantages; });

const advantages = () => {
  let showNumber = [];
  let offsetArray = $('.advantages__block');
  //Узнаем кол-во блоков  создаем массив со значением true
  for (let i = 0; i < offsetArray.length; i++) {
    showNumber[i] = true;
  }

  //Анимация счета цифр
  const swingNumber = (params) => {
    $(params).each(function () {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).attr('data-value'),
          },
          {
            duration: 1200,
            easing: 'swing',
            step: function (now) {
              $(this).text(
                Math.ceil(now)
                  .toString()
                  .replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
              );
            },
          }
        );
    });
  };

  $(window).on('scroll resize load', function () {
    let scroll = $(window).scrollTop() + window.innerHeight - 60;

    for (let i = 0; i < offsetArray.length; i++) {
      if (scroll > $(offsetArray[i]).offset().top && showNumber[i]) {
        swingNumber(
          '.advantages__block[data-advantages="' + `${i + 1}` + '"] strong'
        );
        showNumber[i] = false;
      }
    }
  });
};


/***/ }),

/***/ "../views/blocks/calculate/calculate.js":
/*!**********************************************!*\
  !*** ../views/blocks/calculate/calculate.js ***!
  \**********************************************/
/*! exports provided: calculate, liveMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculate", function() { return calculate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveMap", function() { return liveMap; });

const calculate = () => {
  $('.button-swap').on('click', function (){
    $(this).toggleClass('rotate');
  })
}

const liveMap = () => {
  let rfMap = $('.rf-map').children('svg').children('path');
  let length = rfMap.length;
  let random;
  let memory = [0, 0];
  const randomPoint = () => {
    for (let i = 0; i < 2; i++) {
      $(rfMap[memory[i]]).toggleClass('fill');
    }

    for (let i = 0; i < 2; i++) {
      memory[i] = random = Math.floor(Math.random() * length + 1);
      $(rfMap[random]).toggleClass('fill');
    }
  };
  setInterval(randomPoint, 3000);
};

/***/ }),

/***/ "../views/blocks/clients/clients.js":
/*!******************************************!*\
  !*** ../views/blocks/clients/clients.js ***!
  \******************************************/
/*! exports provided: clients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clients", function() { return clients; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");


const clients = () => {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);

  var clientsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.clients .swiper-container', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.clients .swiper-button-next',
      prevEl: '.clients .swiper-button-prev',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      // when window width is >= 1024px
      1024: {

        slidesPerView: 4,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
        centeredSlides: false,
      },
    },
  });
};


/***/ }),

/***/ "../views/blocks/navbar/navbar.js":
/*!****************************************!*\
  !*** ../views/blocks/navbar/navbar.js ***!
  \****************************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });

const navbar = () => {
  /* выбор меню */
  let windowWidth;
  $('.navbar__menu >li').on('click', '>button', function () {
    windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      $('.navbar__menu li').removeClass('show');
      $(this).parent('li').addClass('show');
      $('.navbar__menu .popup-submenu').slideUp();
      $('.navbar__menu .popup-menu li').removeClass('show');
    }
  });
  /* кнопка назад */
  $('.navbar__menu').on('click', '.back', function () {
    $('.navbar__menu li').removeClass('show');
    $('.navbar__menu .popup-submenu').slideUp();
    $('.navbar__menu .popup-menu li').removeClass('show');
  });
  /* подменю */
  $('.navbar__menu .popup-menu').on('click', 'button', function () {
    windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      $(this).siblings('.popup-submenu').slideToggle();
      $(this).parent('li').toggleClass('show');
    }
  });
  /* отмена слайда для большого экрана */
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;
    if (windowWidth >= 768) {
      $('.navbar__menu .popup-submenu').removeAttr('style');
      $('.navbar__menu .popup-menu li').removeClass('show');
    }
  });
};


/***/ }),

/***/ "../views/blocks/product-goods/product-goods.js":
/*!******************************************************!*\
  !*** ../views/blocks/product-goods/product-goods.js ***!
  \******************************************************/
/*! exports provided: productGoods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productGoods", function() { return productGoods; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");


const productGoods = () => {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);

  var productGoods = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-goods .swiper-container', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.product-goods .swiper-button-next',
      prevEl: '.product-goods .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      // when window width is >= 540px
      540: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 30,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 0,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 0,
      },
    },
  });
};


/***/ }),

/***/ "../views/blocks/product-slider/product-slider.js":
/*!********************************************************!*\
  !*** ../views/blocks/product-slider/product-slider.js ***!
  \********************************************************/
/*! exports provided: productSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productSlider", function() { return productSlider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");



const productSlider = () => {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);

  var productsSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.products-slider .swiper-container', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 60,
    // centeredSlides: true,
    navigation: {
      nextEl: '.products-slider .swiper-button-next',
      prevEl: '.products-slider .swiper-button-prev',
    },
    pagination: {
      el: '.products-slider .swiper-pagination',
      clickable: true,
    },
  });
};


/***/ }),

/***/ "../views/blocks/product-table/product-table.js":
/*!******************************************************!*\
  !*** ../views/blocks/product-table/product-table.js ***!
  \******************************************************/
/*! exports provided: tableBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableBtn", function() { return tableBtn; });

const tableBtn = () => {
  $('.product-table').on('click', '.btn-select', function () {
    let table = $(this).attr('data-table');
    $(this).siblings('.btn-select').removeAttr('disabled');
    $(this).attr('disabled', 'disabled');
    $('.table-swap').removeClass('show');
    $('.table-swap[data-table=' + table + ']').addClass('show');
  });
};


/***/ }),

/***/ "../views/blocks/trust/trust.js":
/*!**************************************!*\
  !*** ../views/blocks/trust/trust.js ***!
  \**************************************/
/*! exports provided: trust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trust", function() { return trust; });

const trust = () => {
  $(window).on('resize load mouseenter', function () {
    $(
      '.trust__quality, .trust__quality .trust__hover-block, .trust__sell, .trust__sell .trust__hover-block'
    ).removeAttr('style');
    let qH = $('.trust__quality').outerHeight();
    let qHH = $('.trust__quality .trust__hover-block').outerHeight();
    let sH = $('.trust__sell').outerHeight();
    let sHH = $('.trust__sell .trust__hover-block').outerHeight();
    if (qH <= qHH) {
      $('.trust__quality').css('min-height', qHH);
    } else {
      $('.trust__quality .trust__hover-block').css('min-height', qH);
    }
    if (sH <= sHH) {
      $('.trust__sell').css('min-height', sHH);
    } else {
      $('.trust__sell .trust__hover-block').css('min-height', sH);
    }
  });
};


/***/ }),

/***/ "../views/components/scroll-up/scroll-up.js":
/*!**************************************************!*\
  !*** ../views/components/scroll-up/scroll-up.js ***!
  \**************************************************/
/*! exports provided: scrollUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollUp", function() { return scrollUp; });
'use sctrict';
const scrollUp = () => {
  var btn = $('.footer .scroll-up');

  $(window).on('scroll resize load', function () {
    var scroll = $(window).scrollTop() + window.innerHeight;
    var footerOffset = $('.footer').offset().top;
    var windowWidth = window.innerWidth;
    //появление кнопки при скролле вниз после половины экрана
    if ($(window).scrollTop() > window.innerHeight / 2) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }

    //Если скролл ниже высоты окна - то кнопка появится
    if (windowWidth >= 768 && $(window).scrollTop() > window.innerHeight) {
      // фиксация если скролл дошел до футера для больших экранов
      if (scroll > footerOffset) {
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    } else {
      // фиксация если скролл дошел до footer для маленьких экранов, высота кнопки + отступ кнопки и оступ от высоты   footer
      if (
        scroll - 35 > footerOffset &&
        $(window).scrollTop() > window.innerHeight
      ) {
        btn.addClass('absolute');
      } else {
        btn.removeClass('absolute');
      }
    }
  });

  //Сдвиг вверх
  btn.on('click', function () {
    $('html, body').animate(
      { scrollTop: 0 },
      {
        duration: 400,
        easing: 'swing',
      }
    );
  });
};


/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });

const header = () => {
  let windowWidth = window.innerWidth;
  /*! Затенение фона*/
  $(window).on('scroll resize load', function () {
    let scroll = $(window).scrollTop();
    let headHeight = $('.header__head').outerHeight() + 1;

    /*! появление фона при скролле хотя бы на чуть-чуть */
    if (scroll <= headHeight * 2) {
      $('.header__head').css('margin-top', -scroll / 2);
      $('.header__head').css('visibilty', 'visible');
      $('.header').removeClass('fixed');
    } else {
      $('.header__head').css('margin-top', -headHeight);
      $('.header__head').css('visibilty', 'hidden');
      $('.header').addClass('fixed');
    }
  });

  /*   // Плавный переход
  $('.navbar').on('click', 'a', function (e) {
    e.preventDefault();
    let headerTop = $('.header').outerHeight();
    let sc = $(this).attr('href');

    // Минус высота fixed - header
    let dn = $(sc).offset().top - headerTop;
    $('html, body').animate(
      { scrollTop: dn },
      {
        duration: 400,
        easing: 'swing',
      }
    );
  });
 */
  /*!***** Мобилка ******/

  /*! Бургер-меню подстройка высоты*/
  const burgerMenu = () => {
    let headerHeight = $('.header').outerHeight();
    let conctactsHeight = $('.header__contacts-block').outerHeight();
    let buttonsHeight = $('.header__buttons').outerHeight();
    let leftHeight = conctactsHeight + buttonsHeight;
    $('.header__buttons').css('top', headerHeight + conctactsHeight);
    $('.navbar__menu').css('bottom', -leftHeight);
    $('.header.open').find('.header__shadow').css('bottom', -leftHeight);
  };

  /*! Бургер-меню */
  $('.header').on('click', '.btn-burger', function () {
    let expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header').toggleClass('open');
    if ($(this).hasClass('open')) {
      burgerMenu();
    } else {
      $('.header__shadow').css('bottom', 0);
      $('.navbar__menu li').removeClass('show');
      $('.navbar__menu .popup-submenu').slideUp();
    }
  });
  $(window).on('resize scroll', function () {
    burgerMenu();
  });
  /*! Классы для стоп-анимации */
  let stopClasses = $(
    '.header__contacts-block, .header__navbar, .header__buttons button, .header__navbar *, .header__contacts-block a, .calculate__form >*, .header__shadow'
  );

  /*! Отмена анимации при ресайзе */
  $(window).on('resize', function () {
    let timer = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      stopClasses.addClass('transition-stop');
    }
    timer = setTimeout(() => {
      stopClasses.removeClass('transition-stop');
      timer = null;
    }, 50);
  });
};


/***/ }),

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });

const modal = () => {
  //функция close
  const modalClose = () => {
    $('body, .header, .modal').css('padding-right', 0);
    $('.header').css('right', 0);
    $('.modal').removeClass('show');
    $('html').removeClass('fixed');
    focusUnlock();

    $('.modal__content').find(':focus').trigger('blur');

    //Переход на предыдущий фокус
    $('.modal__content').one('transitionend', function () {
      $(tabMemory).trigger('focus');
    });

    //Включить запись фокус
    modalIsOpen = false;
  };

  //Focus-lock
  const focusLock = () => {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '-1');
    });
    focusModalElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  };

  //Focus-unlock
  const focusUnlock = () => {
    focusElements.prevObject.each(function () {
      $(this).attr('tabindex', '0');
    });
  };

  //focusable элементы
  let focusElements = $('a[href], button, input, textarea, select').has(
    'focus'
  );

  //focusable элементы в modal
  let focusModalElements = $('.modal__content')
    .find('a[href], button, input, textarea, select')
    .has('focus');

  // Инициализация переменных, 1-ый элемент по умолчанию и  модалка не открыта
  let tabMemory = focusElements.prevObject.first();
  let modalIsOpen = false;

  //При фокусе запоминаем предыдущый элемент, т.к. модалка открывается текущей кнопкой
  $('a[href], button, input, textarea, select').on('focusin', function () {
    if (!modalIsOpen) {
      tabMemory = $(this);
    }
  });

  //открытие модального окна
  $('button[data-modal]').on('click', function () {
    let modalName = $(this).attr('data-modal');
    let body = $('body').width();
    let scrollWidth = window.innerWidth - body;
    let headerTop = $('.header').outerHeight();

    //Отменяем запоминание текущего фокуса
    modalIsOpen = true;

    //Удаление всех tabindex
    focusLock();

    //Показ модалки
    $('.modal[data-modal="' + modalName + '"]')
      .addClass('show')
      .css('top', headerTop);
    if (modalName == 'zoom') {
      let altImg = $(this).find('img').attr('alt');
      let srcImg = $(this).find('img').attr('src');
      console.log(altImg, srcImg);
      $('.modal[data-modal="zoom"]').find('img')
        .attr('alt', altImg)
        .attr('src', srcImg);
        $('.modal[data-modal="zoom"]').find('.modal__title').text(altImg);
    }
    //При смене ширины окна, она будет под header
    $(window).on('resize', function () {
      headerTop = $('.header').outerHeight();
      $('.modal[data-modal="' + modalName + '"]').css('top', headerTop);
    });

    //Автофокус на ближайщий возможный tabindex
    $('.modal__content').one('transitionend', function () {
      $(this).find('[tabindex]:first').trigger('focus');
    });

    //Фиксируем страницу
    $('html').addClass('fixed');
    if (scrollWidth > 0) {
      $('body, .modal').css('padding-right', scrollWidth);
      $('.header').css('right', scrollWidth);
    }
  });

  //Отмена по кнопке "Закрыть" и по фону
  $('.modal__btn button, .modal-overlay').on('click', function () {
    modalClose();
  });

  //Отмена по Esc
  $(document).on('keydown', function (e) {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 27) {
      modalClose();
    }
  });
};


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery.min */ "../../node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/scroll-up/scroll-up */ "../views/components/scroll-up/scroll-up.js");
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _blocks_navbar_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/navbar/navbar */ "../views/blocks/navbar/navbar.js");
/* harmony import */ var _blocks_clients_clients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/clients/clients */ "../views/blocks/clients/clients.js");
/* harmony import */ var _blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blocks/advantages/advantages */ "../views/blocks/advantages/advantages.js");
/* harmony import */ var _blocks_calculate_calculate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/calculate/calculate */ "../views/blocks/calculate/calculate.js");
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");
/* harmony import */ var _blocks_trust_trust__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/trust/trust */ "../views/blocks/trust/trust.js");
/* harmony import */ var _blocks_product_slider_product_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/product-slider/product-slider */ "../views/blocks/product-slider/product-slider.js");
/* harmony import */ var _blocks_product_table_product_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/product-table/product-table */ "../views/blocks/product-table/product-table.js");
/* harmony import */ var _blocks_product_goods_product_goods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blocks/product-goods/product-goods */ "../views/blocks/product-goods/product-goods.js");


global.$ = jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default.a;

/*!полифил для :focus-visible*/














Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_3__["header"])();
Object(_blocks_navbar_navbar__WEBPACK_IMPORTED_MODULE_4__["navbar"])();
Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_8__["modal"])();
Object(_blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_6__["advantages"])();
Object(_blocks_calculate_calculate__WEBPACK_IMPORTED_MODULE_7__["calculate"])();
Object(_blocks_calculate_calculate__WEBPACK_IMPORTED_MODULE_7__["liveMap"])();
Object(_blocks_clients_clients__WEBPACK_IMPORTED_MODULE_5__["clients"])();
Object(_blocks_trust_trust__WEBPACK_IMPORTED_MODULE_9__["trust"])();
Object(_components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_2__["scrollUp"])();
Object(_blocks_product_slider_product_slider__WEBPACK_IMPORTED_MODULE_10__["productSlider"])();
Object(_blocks_product_table_product_table__WEBPACK_IMPORTED_MODULE_11__["tableBtn"])();
Object(_blocks_product_goods_product_goods__WEBPACK_IMPORTED_MODULE_12__["productGoods"])();
/* 

//Blocks

//полифил для IE, input-mask
import 'core-js/stable/array/for-each';
import 'core-js/stable/array/includes';
import 'core-js/stable/dom-collections/for-each';
// полифилы для IE svg
import 'svg4everybody';
$(() => {
  $('svg').attr('focusable', 'false');
}); */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map