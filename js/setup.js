'use strict';
var WIZARDS_QUANTITY = 4;
var WIZARD_EYES = document.querySelector('.wizard-eyes');
var WIZARD_COAT = document.querySelector('.wizard-coat');
var FIREBALLS = document.querySelector('.setup-fireball-wrap');
var COAT_COLOR_INPUT = document.querySelector('input[name=coat-color]');
var FIREBALL_COLOR_INPUT = document.querySelector('input[name=fireball-color]');
var EYES_COLOR_INPUT = document.querySelector('input[name=eyes-color]');

//  массивы с моковыми даннми для отрисовки волшебников
var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var fragment = document.createDocumentFragment();
var userDialog = document.querySelector('.setup');


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

// функция для отрисовки похожих волшебников
var showSimilarWizards = function () {

  //  копируем массивы в функцию, чтобы не изменять исходные данные
  var similarWizardsNames = WIZARDS_NAMES.slice();
  var similarWizardsSurnames = WIZARDS_SURNAMES.slice();
  var similarCoatColors = COAT_COLORS.slice();
  var similarEyesColors = EYES_COLORS.slice();
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

// функция смены цветов мантии, глаз, фаерболов по клику;
var colorChange = function (elem, arr, input) {
  var randomColor = arr[window.utilities.randomIndex(arr)];
  elem.style.fill = randomColor;
  elem.style.background = randomColor;
  input.value = randomColor;
};


WIZARD_EYES.addEventListener('click', function () {
  colorChange(WIZARD_EYES, EYES_COLORS, EYES_COLOR_INPUT);
});

WIZARD_COAT.addEventListener('click', function () {
  colorChange(WIZARD_COAT, COAT_COLORS, COAT_COLOR_INPUT);
});

FIREBALLS.addEventListener('click', function () {
  colorChange(FIREBALLS, FIREBALL_COLORS, FIREBALL_COLOR_INPUT);
});


//  запускаем отрисовку похожих волшебников
showSimilarWizards();
