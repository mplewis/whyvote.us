import $ from 'jquery'
import 'jquery.scrollto'
import 'jquery.easing'
import 'imports?jQuery=jquery,$=jquery,this=>window!./vendor/chosen_v1.6.2/chosen.jquery.js'

import config from './config'
import appTemplate from './app.pug'

import 'bootstrap/dist/css/bootstrap.min.css'
import './vendor/chosen_v1.6.2/chosen.css'
import './app.css'

export function render (electionData) {
  const data = {
    states: electionData
  }
  document.getElementById('app').innerHTML = appTemplate(data)
}

export function bind () {
  const statePicker = $('#state-picker')
  const states = $('#states')

  statePicker.chosen()

  statePicker.change(() => {
    states.show()
    const slug = statePicker.val()
    const target = '#state-' + slug
    $(window).scrollTo(target,
      config.scroll.duration,
      {easing: config.scroll.easing})
  })
}
