import { twoPartyVotesForState } from '../../fixtures/voting_data'

export default {
  name: 'VotingInfo',
  props: {
    state: { type: String, required: true }
  },
  render () {
    return (
      <div>
        <h1>
          Voting info for {this.state}
        </h1>
        <pre>
          <code>
            { JSON.stringify(twoPartyVotesForState(this.state), null, 2) }
          </code>
        </pre>
      </div>
    )
  }
}
