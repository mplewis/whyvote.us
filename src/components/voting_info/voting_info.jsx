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
      return data.map(e => <SingleElection year={e.year} stats={e.stats} />)
    },
    howManyClose (data) {
      const closeCount = data.filter(e => e.stats.close).length
      return (
        `In ${closeCount} out of ${data.length} presidential elections, ` +
        `the margin of victory in ${this.state} has been close.`
      )
    }
  },
  render () {
    const data = this.processElections()
    return (
      <div>
        <h1>
          Voting info for {this.state}
        </h1>
        <p>
          {this.howManyClose(data)}
        </p>
        <div class={style.results}>
          { this.allResults(data) }
        </div>
      </div>
    )
  }
}
