import $ from 'jquery'
import 'jquery.scrollto'
import 'jquery.easing'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import appTemplate from './app.pug'
import electionData from './data/election_data.json'

const data = {
  states: electionData
}

document.getElementById('app').innerHTML = appTemplate(data)

const statePicker = $('#state-picker')
const states = $('#states')

function onStateSelected () {
  states.show()
  const slug = statePicker.val()
  const target = '#state-' + slug
  $(window).scrollTo(target, 1500, {easing: 'easeOutQuart'})
}

statePicker.change(onStateSelected)
