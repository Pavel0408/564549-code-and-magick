'use strict';
(function () {

  //  функция отрисовки облака
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT);
  };

  //  ищем максимальный элемент в массиве
  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {

      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  //  случайный синий
  var getRandomBlue = function () {
    var addRandom = Math.floor(Math.random() * 255);
    return 'rgb(0,0,' + addRandom + ')';
  };

  window.renderStatistics = function (ctx, players, times) {
    var playersLength;
    var histogramX = window.constants.CLOUD_X + 50;
    var titleGapY = 20;
    var maxTime;
    var rectHeigth;

    //  рисуем облако
    renderCloud(ctx, window.constants.CLOUD_X + window.constants.SHADOW_GAP, window.constants.CLOUD_Y + window.constants.SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, '#fff');

    //  функция для вывода заголовка
    var makeTitle = function (text) {
      ctx.font = '16px PT Mono';
      ctx.fillStyle = '#000';
      ctx.fillText(text, window.constants.CLOUD_X + window.constants.TITLE_GAP_X, window.constants.CLOUD_Y + titleGapY);
      titleGapY += titleGapY;
    };

    //  выводми заголовки
    makeTitle('Ура вы победили!');
    makeTitle('Список рузультатов:');

    maxTime = getMaxElement(times);
    playersLength = players.length;

    //  рисуем гистограму
    for (var i = 0; i < playersLength; i++) {
      rectHeigth = window.constants. HISTOGRAM_HEIGHT * times[i] / maxTime;
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], histogramX, window.constants.HISTOGRAM_Y);
      ctx.fillText(Math.round(times[i]), histogramX, window.constants.HISTOGRAM_Y - rectHeigth - window.constants.HISTROGRAM_GAP * 3);

      ctx.fillStyle = players[i] === window.constants.YOUR_NAME ? 'rgba(255, 0, 0, 1)' : getRandomBlue();

      ctx.fillRect(histogramX, window.constants.HISTOGRAM_Y - window.constants.HISTROGRAM_GAP * 2 - rectHeigth, window.constants.RECT_WIDTH, rectHeigth);
      histogramX += window.constants.HISTOGRAM_COLUMN_WDTH;
    }
  };
})();
