import declare from 'dojo/_base/declare';
import _WidgetBase from 'dijit/_WidgetBase';
import Search from 'esri/dijit/Search';
/*
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
*/

// using ES6 class
// gets a bit wordy when compiled to ES5
class MyWidget extends _WidgetBase {
  postCreate() {
    let map = this.get('map');
    this.search = new Search({ map }, 'search');
    this.search.startup();
  }
}

export default MyWidget;
