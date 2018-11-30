'use strict';
var WIZARDS_QUANTITY = 4;
var SETUP_OPEN = document.querySelector('.setup-open');
var SETUP_CLOSE = document.querySelector('.setup-close');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
//  массивы с моковыми даннми для отрисовки волшебников
var wizardsNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardsSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fragment = document.createDocumentFragment();
var userDialog = document.querySelector('.setup');


var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

//  функция для показа попапа
var setupOpen = function () {
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
  SETUP_CLOSE.addEventListener('click', setupClose);
  document.addEventListener('keydown', onSetupEscPress);
};

// функция для закрытия попапа
var setupClose = function () {
  userDialog.classList.add('hidden');
  userDialog.querySelector('.setup-similar').classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);

};

var onSetupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    setupClose();
  }
};

//  показываем попап
SETUP_OPEN.addEventListener('click', setupOpen);
SETUP_OPEN.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupOpen();
  }
});

SETUP_CLOSE.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setupClose();
  }
});

// функция для отрисовки похожих волшебников
var showSimilarWizards = function () {

  //  копируем массивы в функцию, чтобы не изменять исходные данные
  var similarWizardsNames = wizardsNames.slice();
  var similarWizardsSurnames = wizardsSurnames.slice();
  var similarCoatColors = coatColors.slice();
  var similarEyesColors = eyesColors.slice();
  var similarWizards = [];

  //  поиск случайного элемента в массиве
  var randomIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

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
    var nameIndex = randomIndex(similarWizardsNames);
    var surnameIndex = randomIndex(similarWizardsSurnames);
    var wizard = {
      name: similarWizardsNames[nameIndex] + ' ' + similarWizardsSurnames[surnameIndex],
      coatColor: similarCoatColors[randomIndex(similarCoatColors)],
      eyesColor: similarEyesColors[randomIndex(similarEyesColors)]
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
