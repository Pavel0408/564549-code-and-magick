'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var TITLE_GAP_X = 60;
var titleGapY = 20;
var HISTOGRAM_Y = 265;
var histogramX = CLOUD_X + 50;
var HISTOGRAM_HEIGHT = 150;
var YOUR_NAME = 'Вы';
var HISTROGRAM_GAP = 10;
var RECT_WIDTH = 40;
var HISTOGRAM_COLUMN_WDTH = 90;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBlue = function () {
  var addRandom = Math.floor(Math.random() * 255);
  return 'rgba(0,0,' + addRandom + ',1)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var makeTitle = function (text) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(text, CLOUD_X + TITLE_GAP_X, CLOUD_Y + titleGapY);
    titleGapY += titleGapY;
  };

  ctx.fillStyle = '#000';

  makeTitle('Ура вы победили!');
  makeTitle('Список рузультатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var rectHeigth = HISTOGRAM_HEIGHT * times[i] / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], histogramX, HISTOGRAM_Y);
    ctx.fillText(Math.round(times[i]), histogramX, HISTOGRAM_Y - rectHeigth - HISTROGRAM_GAP * 3);
    ctx.fillStyle = getRandomBlue();
    if (players[i] === YOUR_NAME) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(histogramX, HISTOGRAM_Y - HISTROGRAM_GAP * 2 - rectHeigth, RECT_WIDTH, rectHeigth);
    histogramX += HISTOGRAM_COLUMN_WDTH;
  }
  histogramX = CLOUD_X + 50;
  titleGapY = 20;
};

