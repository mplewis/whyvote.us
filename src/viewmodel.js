import {sprintf} from 'sprintf-js'

import messages from './messages'

const numberText = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'
]

// http://stackoverflow.com/a/4550514
function choice (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// http://stackoverflow.com/a/1026087
function title (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function process (history) {
  history.forEach(row => {
    row.win_margin = sprintf('%.1f%%', Math.abs(row.dem_win_margin) * 100)
    console.log(row)
  })
  return history
}

export function layout (electionData) {
  return electionData.map(state => {
    const data = {}

    const toCopy = ['name', 'slug', 'flipLikelihood']
    toCopy.forEach(key => {
      data[key] = state[key]
    })

    const fl = state.flipLikelihood
    const mfl = messages.flipLikelihood
    data.headline = choice(mfl[fl].headline)
    data.flavorText = choice(mfl[fl].flavorText)

    data.electionsClose = title(numberText[state.swinginess])
    data.havePlural = state.swinginess === 1 ? 'has' : 'have'
    data.electionsTotal = numberText[state.history.length]

    data.elections = process(state.history)

    return data
  })
}
