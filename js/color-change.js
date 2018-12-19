'use strict';
(function () {
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
    colorChange(WIZARD_EYES, window.constants.EYES_COLORS, EYES_COLOR_INPUT);
    window.debounce(updateWizards);
  });


  WIZARD_COAT.addEventListener('click', function () {
    colorChange(WIZARD_COAT, window.constants.COAT_COLORS, COAT_COLOR_INPUT);
    window.debounce(updateWizards);
  });

  FIREBALLS.addEventListener('click', function () {
    colorChange(FIREBALLS, window.constants.FIREBALL_COLORS, FIREBALL_COLOR_INPUT);
  });

  var wizards = [];

  // функция для сравнения похожести волшебников
  var getRank = function (wizard) {
    var coatColor = COAT_COLOR_INPUT.value;
    var eyesColor = EYES_COLOR_INPUT.value;
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };


  // функция для обновления списка похожих волшебников
  var updateWizards = function () {
    var wizardItems = document.querySelectorAll('.setup-similar-item');
    wizardItems.forEach(function (item) {
      item.remove();
    });

    var someSimilarWizards = window.similarWizards.slice().
    sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }

      return rankDiff;
    });

    window.showSimilarWizards(someSimilarWizards);
  };
  window.updateWizards = updateWizards;
})();
