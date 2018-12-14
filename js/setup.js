'use strict';
(function () {
  var WIZARDS_QUANTITY = 4;
  var fragment = document.createDocumentFragment();
  var userDialog = document.querySelector('.setup');
  var similarWizards = [];
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var form = userDialog.querySelector('.setup-wizard-form');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var sucsessHandler = function (wizards) {
    similarWizards = wizards.slice();
    window.similarWizards = similarWizards;
    showSimilarWizards();
  };

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


  // функция для отрисовки похожих волшебников
  var showSimilarWizards = function () {

    // отрисовываем объект волшебника в HTML
    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
      return wizardElement;
    };

    //  добавляем похожих волшебников во фрагмент
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }

    // добавляем волшебников на страницу
    similarListElement.appendChild(fragment);
  };

  var formSucsessHandler = function () {
    userDialog.classList.add('hidden');
  };

  var setup = function () {

    window.backend.load(window.constants.urls.load, sucsessHandler, errorHandler);
    form.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(form), formSucsessHandler, errorHandler);
      evt.preventDefault();
    });
  };
  window.setup = setup;
})();
