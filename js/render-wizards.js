'use strict';
(function () {
  var WIZARDS_QUANTITY = 4;
  var userDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();

  // функция для отрисовки похожих волшебников
  var showSimilarWizards = function (arrWizards) {

    // отрисовываем объект волшебника в HTML
    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
      return wizardElement;
    };

    //  добавляем похожих волшебников во фрагмент
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      fragment.appendChild(renderWizard(arrWizards[i]));
    }

    // добавляем волшебников на страницу
    similarListElement.appendChild(fragment);
  };
  window.showSimilarWizards = showSimilarWizards;
})();
