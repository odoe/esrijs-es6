import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import Search from 'esri/dijit/Search';

export default declare([_WidgetBase], {
  postCreate() {
    let map = this.get('map');
    this.search = new Search({ map }, 'search');
    this.search.startup();
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
    console.log(i);
  }
});
