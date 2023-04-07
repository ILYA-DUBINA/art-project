import Vue from 'vue'
import App from './App.vue';
import 'img-comparison-slider';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/img-comparison-slider/];

new Vue({
  render: h => h(App)
}).$mount('#app')
