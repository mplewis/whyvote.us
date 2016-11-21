import $ from 'jquery'

import config from './config'
import appTemplate from './app.pug'

export function render (electionData) {
  const data = {
    states: electionData
  }
  document.getElementById('app').innerHTML = appTemplate(data)
}

export function bind () {
  const statePicker = $('#state-picker')
  const states = $('#states')

  statePicker.change(() => {
    states.show()
    const slug = statePicker.val()
    const target = '#state-' + slug
    $(window).scrollTo(target,
      config.scroll.duration,
      {easing: config.scroll.easing})
  })
}
