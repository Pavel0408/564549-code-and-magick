'use strict';
(function () {
  /**
    * Модуль debounce
    *
    * Экспортирует в глобальную область функция для утранения дребезга
   */

  var lastTimeout;
  window.debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, window.constants.DEBOUNCE_INTERVAL);
  };
})();
