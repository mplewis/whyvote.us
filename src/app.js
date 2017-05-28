import Vue from 'vue'

import Layout from './components/layout/layout.jsx'

/* eslint-disable */
import '!style-loader!css-loader!purecss/build/pure.css'
/* eslint-enable */

const vue = new Vue({
  ...Layout
})

vue.$mount('#app')
