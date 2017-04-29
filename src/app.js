import Vue from 'vue'

/* eslint-disable */
import '!style-loader!css-loader!purecss/build/pure.css'
/* eslint-enable */

const Component = {
  name: 'Component',
  render () {
    return (
      <div>
        <h1>Vue is working!</h1>
        <p>I'm a new component.</p>
      </div>
    )
  }
}

const app = new Vue({
  ...Component
})

app.$mount('#app')
