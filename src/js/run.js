(function () {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/)
    , locationPath = location.pathname.replace(pathRX, '');

  require({
    async: true,
    parseOnLoad: true,
    packages: [{
      name: 'widgets',
      location: locationPath + 'js/widgets'
    }, {
      name: 'app',
      location: locationPath + 'js',
      main: 'main'
    }]
  }, ['app']);

})();
