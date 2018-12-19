'use strict';
(function () {
  /**
    * Модуль constants
    *
    * Содержит константы
    * @param window.constants.COAT_COLORS - цвета мантий волшебников
    * @param window.constants.EYES_COLORS - цвета глаз волшебников
    * @param window.constants.FIREBALL_COLORS - цвета файерблов
    * @param window.constants.CLOUD_WIDTH - ширина облака
    * @param window.constants.CLOUD_HEIGHT - высота облака
    * @param window.constants.CLOUD_Y - вертикальная координата облака
    * @param window.constants.CLOUD_X - горизонтальная координата облака
    * @param window.constants.CLOUD_X - отступ тени облака
    * @param window.constants.TITLE_GAP_X - отступ заголовка
    * @param window.constants.HISTOGRAM_Y - вертикальная координата гистограммы
    * @param window.constants.HISTOGRAM_HEIGHT - высота гистограммы
    * @param window.constants.YOUR_NAME - имя в статистике
    * @param window.constants.HISTROGRAM_GAP - вертикальный отступ в гистограмме
    * @param window.constants.RECT_WIDTH - ширина прямоугольника
    * @param window.constants.HISTOGRAM_COLUMN_WDTH - ширина колонок гистограммы
    * @param window.constants.DEBOUNCE_INTERVAL - время в милисекундах до перерисовки похожих волшебников
    * @param window.WIZARDS_QUANTITY - количество отрисованных похожих волшебников
    * @param window.urls.load - адрес с которого загружаются похожие волшебники
    * @param window.urls.save - адрес отправки формы
   */


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

  window.constants = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    CLOUD_WIDTH: 420,
    CLOUD_HEIGHT: 270,
    CLOUD_X: 100,
    CLOUD_Y: 10,
    SHADOW_GAP: 10,
    TITLE_GAP_X: 60,
    HISTOGRAM_Y: 265,
    HISTOGRAM_HEIGHT: 150,
    YOUR_NAME: 'Вы',
    HISTROGRAM_GAP: 10,
    RECT_WIDTH: 40,
    HISTOGRAM_COLUMN_WDTH: 90,
    DEBOUNCE_INTERVAL: 500,
    WIZARDS_QUANTITY: 4,
    urls: {
      load: 'https://js.dump.academy/code-and-magick/data',
      save: 'https://js.dump.academy/code-and-magick'
    }
  };
})();
