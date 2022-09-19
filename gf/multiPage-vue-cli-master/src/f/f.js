
import Vue from 'vue'
import App from './f.vue'

require('viewport-units-buggyfill').init();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  
  components: {App},
  template: '<App/>'
})
