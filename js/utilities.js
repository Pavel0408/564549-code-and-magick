'use strict';
(function () {
  //  поиск случайного элемента в массиве
  var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };
  var utilities = {};
  utilities.randomIndex = randomIndex;
  window.utilities = utilities;
})();
