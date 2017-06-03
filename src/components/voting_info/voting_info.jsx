import SingleElection from '../single_election/single_election.jsx'
import style from './voting_info.styl'
import { twoPartyVotesForState } from '../../fixtures/voting_data'

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
      return this.orderedElections().map(e => <SingleElection year={e.year} repVotes={e.r} demVotes={e.d} />)
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
