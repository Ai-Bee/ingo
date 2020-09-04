// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Highcharts from "highcharts";
import VueHighcharts from 'vue-highcharts';
import loadExporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";
import loadOfflineExporting from "highcharts/modules/offline-exporting";
import loadSolidGauge from "highcharts/modules/solid-gauge";

loadExporting(Highcharts);
loadOfflineExporting(Highcharts);
loadSolidGauge(Highcharts);
ExportData(Highcharts);

Vue.prototype.$axios = axios;

Vue.use(VueHighcharts, { Highcharts: Highcharts });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
