'use strict';
/**
  * Модуль utilities
  *
  * содрежит полезные функции
  * @param window.utilities.randomIndex - возвращает случайный элемент массива
 */

(function () {
  //  поиск случайного элемента в массиве
  var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };
  window.utilities = {
    randomIndex: randomIndex
  };
})();
