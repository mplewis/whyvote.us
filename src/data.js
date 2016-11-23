import config from './config'
import electionData from './data/election_data.json'

function addMargins (states) {
  states.forEach(state => {
    state.history.forEach(row => {
      row.dem_pct = row.dem_votes / row.total_votes
      row.rep_pct = row.rep_votes / row.total_votes
      row.dem_win = row.dem_votes > row.rep_votes
      row.dem_win_margin = row.dem_pct - row.rep_pct
    })
    state.history.sort((a, b) => parseInt(a.year) - parseInt(b.year))
  })
  return states
}

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
  addMargins(electionData).forEach(state => {
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
