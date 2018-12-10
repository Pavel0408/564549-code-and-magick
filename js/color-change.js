'use strict';
var WIZARD_EYES = document.querySelector('.wizard-eyes');
var WIZARD_COAT = document.querySelector('.wizard-coat');
var FIREBALLS = document.querySelector('.setup-fireball-wrap');
var COAT_COLOR_INPUT = document.querySelector('input[name=coat-color]');
var FIREBALL_COLOR_INPUT = document.querySelector('input[name=fireball-color]');
var EYES_COLOR_INPUT = document.querySelector('input[name=eyes-color]');

// функция смены цветов мантии, глаз, фаерболов по клику;
var colorChange = function (elem, arr, input) {
  var randomColor = arr[window.utilities.randomIndex(arr)];
  elem.style.fill = randomColor;
  elem.style.background = randomColor;
  input.value = randomColor;
};


WIZARD_EYES.addEventListener('click', function () {
  colorChange(WIZARD_EYES, window.genralData.EYES_COLORS, EYES_COLOR_INPUT);
});

WIZARD_COAT.addEventListener('click', function () {
  colorChange(WIZARD_COAT, window.genralData.COAT_COLORS, COAT_COLOR_INPUT);
});

FIREBALLS.addEventListener('click', function () {
  colorChange(FIREBALLS, window.genralData.FIREBALL_COLORS, FIREBALL_COLOR_INPUT);
});
