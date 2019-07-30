import Vue from 'vue';
import App from './App.vue';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';
import * as VueGoogleMaps from "vue2-google-maps";

Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

Vue.use(VueFusionCharts, FusionCharts);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQFa8RFxz-JsGEBglYjvSQ2dEyWPy1av0",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>"
// });
