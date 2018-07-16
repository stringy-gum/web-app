import Vue from 'vue'
import Counter from './include/counter.vue'
import store from './include/store'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})