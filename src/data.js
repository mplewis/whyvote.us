import config from './config'
import electionData from './data/election_data.json'

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

const processed = process(electionData)

export default processed
