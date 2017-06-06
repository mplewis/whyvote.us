import Vue from 'vue'

/* eslint-disable */
import '!style-loader!css-loader!milligram/dist/milligram.css'
import '!style-loader!css-loader!flexboxgrid/css/flexboxgrid.css'
import '!style-loader!css-loader!stylus-loader!./global.styl'
/* eslint-enable */

import Layout from './components/layout/layout.jsx'

const vue = new Vue({
  ...Layout
})

vue.$mount('#app')
