'use strict';
(function () {
  var WIZARDS_QUANTITY = 4;

  var fragment = document.createDocumentFragment();
  var userDialog = document.querySelector('.setup');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // функция для отрисовки похожих волшебников
  var showSimilarWizards = function () {

    //  копируем массивы в функцию, чтобы не изменять исходные данные
    var similarWizardsNames = window.constants.WIZARDS_NAMES.slice();
    var similarWizardsSurnames = window.constants.WIZARDS_SURNAMES.slice();
    var similarCoatColors = window.constants.COAT_COLORS.slice();
    var similarEyesColors = window.constants.EYES_COLORS.slice();
    var similarWizards = [];

    // отрисовываем объект волшебника в HTML
    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
      return wizardElement;
    };

    //  формируем массив объектов похожих волшебников и добавляем их во фрагмент
    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      var nameIndex = window.utilities.randomIndex(similarWizardsNames);
      var surnameIndex = window.utilities.randomIndex(similarWizardsSurnames);
      var wizard = {
        name: similarWizardsNames[nameIndex] + ' ' + similarWizardsSurnames[surnameIndex],
        coatColor: similarCoatColors[window.utilities.randomIndex(similarCoatColors)],
        eyesColor: similarEyesColors[window.utilities.randomIndex(similarEyesColors)]
      };
      similarWizardsNames.splice(nameIndex, 1);
      similarWizardsSurnames.splice(surnameIndex, 1);
      similarWizards.push(wizard);
      fragment.appendChild(renderWizard(wizard));
    }

    // добавляем волшебников на страницу
    similarListElement.appendChild(fragment);

  };

  //  запускаем отрисовку похожих волшебников
  showSimilarWizards();
})();
