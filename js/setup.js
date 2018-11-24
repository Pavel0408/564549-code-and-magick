'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

//  функция для показа попапа
var setup = document.querySelector('.setup');
var setupOpen = function () {
  setup.classList.remove('hidden');
};

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;

//  показываем попап
setupOpen();


var similarWizardsNames = wizardsNames.slice();
var similarWizardsSurnames = wizardsSurnames.slice();
var similarCoatColors = coatColors.slice();
var similarEyesColors = eyesColors.slice();
var similarWizards = [];

var randomIndex = function (arr) {
  var arrLength = arr.length;
  return (Math.floor(Math.random() * arrLength));
};

for (var i = 0; i < WIZARDS_QUANTITY; i++) {
  var nameIndex = randomIndex(similarWizardsNames);
  var surnameIndex = randomIndex(similarWizardsSurnames);
  var wizardsElement = {
    name: similarWizardsNames[nameIndex] + ' ' + similarWizardsSurnames[surnameIndex],
    coatColor: similarCoatColors[randomIndex(similarCoatColors)],
    eyesColor: similarEyesColors[randomIndex(similarEyesColors)]
  };
  similarWizardsNames.splice(nameIndex, 1);
  similarWizardsSurnames.splice(surnameIndex, 1);
  similarWizards.push(wizardsElement);
}
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < WIZARDS_QUANTITY; j++) {
  fragment.appendChild(renderWizard(similarWizards[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
