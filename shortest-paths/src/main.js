// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as filter from './filters'
import Path from './plugins'

require('./styles/index.less')

Vue.config.productionTip = false

Vue.filter('translate', filter.translate)
Vue.use(Path)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})