'use strict';
(function () {
  var SETUP_OPEN = document.querySelector('.setup-open');
  var SETUP_CLOSE = document.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var userDialog = document.querySelector('.setup');

  //  функция для показа попапа
  var setupOpen = function () {
    var startCoords = {
      y: '80px',
      x: '50%'
    };
    userDialog.classList.remove('hidden');
    userDialog.style.left = startCoords.x;
    userDialog.style.top = startCoords.y;
    SETUP_CLOSE.addEventListener('click', setupClose);
    document.addEventListener('keydown', onSetupEscPress);
    if (document.querySelector('.setup-similar-item') === null) {
      document.setup();
    }
  };

  // функция для закрытия попапа
  var setupClose = function () {
    var errorMessage = document.querySelector('.error-message');
    userDialog.classList.add('hidden');
    if (errorMessage !== null) {
      errorMessage.remove();
    }
    document.removeEventListener('keydown', onSetupEscPress);
  };

  //  показываем попап
  SETUP_OPEN.addEventListener('click', setupOpen);
  SETUP_OPEN.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      setupOpen();
    }
  });

  // проверяем, в фокусе ли поле ввода имени
  var isUserNameInFocus = function () {
    return document.querySelector('input[name=username]:focus');
  };

  // закрываем попап с клавиатуры
  var onSetupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && !(isUserNameInFocus())) {
      setupClose();
    }
  };

  SETUP_CLOSE.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      setupClose();
    }
  });
  document.setupClose = setupClose;
})();

