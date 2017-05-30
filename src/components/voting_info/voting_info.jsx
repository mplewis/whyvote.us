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
      </div>
    )
  }
}
