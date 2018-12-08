'use strict';
(function () {
  var dragged;
  var setupDialogElement = document.querySelector('.setup');
  var startSetupCorrdsY;
  var startSetupCorrdsX = 629;
  var minSift = 10;

  var dialogHandler = setupDialogElement.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {

    evt.preventDefault();

    startSetupCorrdsY = setupDialogElement.style.top;
    startSetupCorrdsX = setupDialogElement.style.left;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    dragged = false;

    var onMouseMove = function (moveEvt) {

      moveEvt.preventDefault();
      dragged = true;

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

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          var endCoordsY = setupDialogElement.style.top;
          var endCoordsX = setupDialogElement.style.left;
          if ((Math.abs(parseFloat(startSetupCorrdsY) - parseFloat(endCoordsY)) > minSift)
            ||
            (Math.abs(parseFloat(startSetupCorrdsX) - parseFloat(endCoordsX)) > minSift)) {

            clickEvt.preventDefault();
          }

          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


})();
