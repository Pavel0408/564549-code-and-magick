'use strict';
(function () {
/**
  * Модуль setup
  *
  * Содержит обработчики успешной загрузки и ошибок формы и похожих волшебников
  * @param window.setup - запускает загрузку похожих волшебников и обработку формы
 */

  var userDialog = document.querySelector('.setup');
  var similarWizards = [];
  var form = userDialog.querySelector('.setup-wizard-form');

  // обработчик успешной загрузки с сервера массива волшебников
  var sucsessHandler = function (wizards) {
    similarWizards = wizards.slice();
    window.similarWizards = similarWizards;
    window.showSimilarWizards(window.similarWizards);
    window.updateWizards();
  };

  // обработчик ошибки загрузки
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.classList.add('error-message');
    node.style.fontSize = '40px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // обработчик успешной загрузки формы
  var formSucsessHandler = function () {
    userDialog.classList.add('hidden');
  };

  var setup = function () {
    window.backend.load(sucsessHandler, errorHandler);
    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), formSucsessHandler, errorHandler);
      evt.preventDefault();
    });
  };
  window.setup = setup;
})();
