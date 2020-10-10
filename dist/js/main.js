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

  $(window).on('scroll load resize', function () {
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
        scroll - 75 > footerOffset &&
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
  /*! Затенение фона*/
  $(window).on('scroll resize load', function () {
    let scroll = $(window).scrollTop();
    let windowWidth = window.innerWidth;
    let headHeight = $('.header__head').outerHeight() + 1;

    /*! появление фона при скролле хотя бы на чуть-чуть */
    if (scroll <= headHeight * 3 && windowWidth >= 768) {
      console.log(headHeight);
      $('.header__head').css('margin-top', -scroll / 3);
      /* $('.header').css(
        'background-color',
        'rgba(255,255,255,' + scroll / (headHeight * 3) + ')'
      ); */
      $('.header').removeClass('fixed');
      $('.header__navbar .logo').addClass('logo-hover');
    } else {
      $('.header__head').css('margin-top', -headHeight);
      // $('.header').css('background-color', 'rgba(255, 255, 255, 255)');
      $('.header').addClass('fixed');
      $('.header__navbar .logo').removeClass('logo-hover');
    }
  });

  //Плавный переход
  $('.navbar').on('click', 'a', function (e) {
    e.preventDefault();
    let headerTop = $('.header').outerHeight();
    let sc = $(this).attr('href');
    //Минус высота fixed - header
    let dn = $(sc).offset().top - headerTop;
    $('html, body').animate(
      { scrollTop: dn },
      {
        duration: 400,
        easing: 'swing',
      }
    );
  });

  /*!***** Мобилка ******/

  /*! Блок с контактами */
  $('.header').on('click', '.header__contacts-block-btn-burger', function () {
    let expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header__contacts-block').toggleClass('show');
  });

  /*! Блок с navbar */
  $('.header').on('click', '.header__navbar-btn-burger', function () {
    let expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header__navbar').toggleClass('show');
  });

  /*! Классы для стоп-анимации */
  let stopClasses = $('.header__contacts-block, .header__navbar');

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
/* harmony import */ var _blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/advantages/advantages */ "../views/blocks/advantages/advantages.js");
/* harmony import */ var _blocks_calculate_calculate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/calculate/calculate */ "../views/blocks/calculate/calculate.js");


global.$ = jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default.a;

/*!полифил для :focus-visible*/








// import modal from '@layouts/modal/modal';
jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_3__["header"])();
  Object(_blocks_advantages_advantages__WEBPACK_IMPORTED_MODULE_4__["advantages"])();
  Object(_blocks_calculate_calculate__WEBPACK_IMPORTED_MODULE_5__["calculate"])();
  Object(_blocks_calculate_calculate__WEBPACK_IMPORTED_MODULE_5__["liveMap"])();
  Object(_components_scroll_up_scroll_up__WEBPACK_IMPORTED_MODULE_2__["scrollUp"])();
});
/* 

//Blocks
import '@components/form/form';

import '@blocks/clients/clients';



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