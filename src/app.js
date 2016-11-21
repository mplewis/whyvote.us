import $ from 'jquery'
import 'jquery.scrollto'
import 'jquery.easing'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import config from './config'
import appTemplate from './app.pug'
import electionData from './data/election_data.json'

const data = {
  states: process(electionData)
}

document.getElementById('app').innerHTML = appTemplate(data)

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

function isSwingy (margin) {
  return Math.abs(margin) <= config.isSwingyBelowPercent
}

function flipLikelihood (swinginess) {
  if (swinginess >= config.swinginess.high) return 'high'
  else if (swinginess >= config.swinginess.moderate) return 'moderate'
  else return 'low'
}

function swinginess (state) {
  return state.history
    .map((data) => data.dem_win_margin)
    .filter(isSwingy)
    .length
}

function process (electionData) {
  electionData.forEach(state => {
    state.swinginess = swinginess(state)
    state.history.forEach(year => {
      year.close = isSwingy(year.dem_win_margin)
    })
    state.flipLikelihood = flipLikelihood(state.swinginess)
  })
  return electionData
}
