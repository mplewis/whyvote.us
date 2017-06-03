import style from './single_election.styl'

const CLOSE_ELECTION_MARGIN = 0.10  // percent

function electionStats (repVotes, demVotes) {
  const total = repVotes + demVotes
  const demPct = demVotes / total
  const repPct = repVotes / total
  const demWin = demVotes > repVotes
  const repWin = repVotes > demVotes
  const demWinMargin = demPct - repPct
  const close = Math.abs(demWinMargin) > CLOSE_ELECTION_MARGIN
  const data = { total, demPct, repPct, demWin, repWin, demWinMargin, close }
  return data
}

export default {
  name: 'SingleElection',
  props: {
    year: { type: String, required: true },
    repVotes: { type: Number, required: true },
    demVotes: { type: Number, required: true }
  },
  render () {
    const stats = electionStats(this.repVotes, this.demVotes)

    const party = stats.demWin ? 'D' : 'R'
    const points = Math.abs(Math.round(stats.demWinMargin * 100))
    const margin = `${party} +${points}`

    return (
      <div class={[style.result, { [style.close]: stats.close }]}>
        <p class='year'>{this.year}</p>
        <p class={{
          [style.demWin]: stats.demWin,
          [style.repWin]: stats.repWin
        }}>
          {margin}
        </p>
      </div>
    )
  }
}
