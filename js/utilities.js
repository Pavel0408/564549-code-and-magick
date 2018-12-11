'use strict';
(function () {
  //  поиск случайного элемента в массиве
  var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };
  window.utilities = {
    randomIndex: randomIndex
  };
})();
