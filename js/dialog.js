'use strict';
(function () {
  /**
    * Модуль dialog
    *
    *Делает подвижной форму настроек персонажа
   */

  var dragged = false;
  var setupDialogElement = document.querySelector('.setup');
  var startSetupCorrdsY = 80;
  var startSetupCorrdsX = 629;
  var MIN_SHIFT = 10;

  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {

    evt.preventDefault();

    startSetupCorrdsY = setupDialogElement.style.top;
    startSetupCorrdsX = setupDialogElement.style.left;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {

      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

      var endCoordsY = setupDialogElement.style.top;
      var endCoordsX = setupDialogElement.style.left;
      if ((Math.abs(parseFloat(startSetupCorrdsY) - parseFloat(endCoordsY)) > MIN_SHIFT)
        ||
        (Math.abs(parseFloat(startSetupCorrdsX) - parseFloat(endCoordsX)) > MIN_SHIFT)) {
        dragged = true;
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();

          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
      dragged = false;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
