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
    orderedElections () {
      const data = twoPartyVotesForState(this.state)
      const elections = []
      Object.entries(data).forEach(([year, { d, r }]) => elections.push({ year, d, r }))
      elections.sort((a, b) => a.year - b.year)
      return elections
    },
    allResults () {
      return this.orderedElections().map(e =>
        <SingleElection year={e.year} stats={electionStats(e.r, e.d)} />
      )
    }
  },
  render () {
    return (
      <div>
        <h1>
          Voting info for {this.state}
        </h1>
        <div class={style.results}>
          { this.allResults() }
        </div>
      </div>
    )
  }
}
