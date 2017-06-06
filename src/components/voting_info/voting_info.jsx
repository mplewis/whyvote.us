import SingleElection from '../single_election/single_election.jsx'
import style from './voting_info.styl'
import { twoPartyVotesForState } from '../../fixtures/voting_data'

const CLOSE_ELECTION_MARGIN = 0.10  // percent

function electionStats (repVotes, demVotes) {
  const total = repVotes + demVotes
  const demPct = demVotes / total
  const repPct = repVotes / total
  const demWin = demVotes > repVotes
  const repWin = repVotes > demVotes
  const demWinMargin = demPct - repPct
  const close = Math.abs(demWinMargin) < CLOSE_ELECTION_MARGIN
  const data = { total, demPct, repPct, demWin, repWin, demWinMargin, close }
  return data
}

export default {
  name: 'VotingInfo',
  props: {
    state: { type: String, required: true }
  },
  methods: {
    processElections () {
      const raw = twoPartyVotesForState(this.state)
      const elections = []
      Object.entries(raw).forEach(([year, { r, d }]) =>
        elections.push({ year, stats: electionStats(r, d) })
      )
      elections.sort((a, b) => a.year - b.year)
      return elections
    },
    allResults (data) {
      return data.map(e =>
        <div class={[style.singleElection, 'col-xs-4', 'col-sm-2']}>
          <SingleElection year={e.year} stats={e.stats} />
        </div>
      )
    },
    closeCount (data) {
      return data.filter(e => e.stats.close).length
    },
    stateSwinginess (data) {
      const close = this.closeCount(data)
      let influence = <span><strong>not</strong> a swing state</span>
      if (close >= 4) {
        influence = <span>a <strong>swing state</strong></span>
      } else if (close >= 2) {
        influence = <span><strong>not quite</strong> a swing state</span>
      }
      return (
        <div>
        {this.state} is {influence}.
        </div>
      )
    },
    howManyClose (data) {
      return (
        `The margin of victory in ${this.state} has been close in ` +
        `${this.closeCount(data)} of ${data.length} recent presidential elections.`
      )
    }
  },
  render () {
    const data = this.processElections()
    return (
      <div>
        <div class={style.textInfo}>
          <h2>
            {this.stateSwinginess(data)}
          </h2>
          <p>
            {this.howManyClose(data)}
          </p>
        </div>
        <div class='row'>
          { this.allResults(data) }
        </div>
      </div>
    )
  }
}
