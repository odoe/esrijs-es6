require([
  'esri/map',
  'widgets/MyWidget',
  'dojo/domReady!'
], function (
  Map,
  MyWidget
) {
  var map = new Map('map', {
    basemap: 'gray',
    center: [-120, 46],
    zoom: 7
  });
  var myWidget = new MyWidget({ map });
});
