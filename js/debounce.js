'use strict';
(function () {
  /**
    * Модуль debounce
    *
    * Экспортирует в глобальную область функция для утранения дребезга
    * @param DEBOUNCE_INTERVAL - время в миллисекундах до выполнения переданной функции
   */

  var lastTimeout;
  window.debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, window.constants.DEBOUNCE_INTERVAL);
  };
})();
