import style from './single_election.styl'

export default {
  name: 'SingleElection',
  props: {
    year: { type: String, required: true },
    stats: { type: Object, required: true },
  },
  methods: {
    colorize () {
      return { [style.demWin]: this.stats.demWin, [style.repWin]: this.stats.repWin }
    }
  },
  render () {
    const party = this.stats.demWin ? 'D' : 'R'
    const points = Math.abs(Math.round(this.stats.demWinMargin * 100))
    const margin = `${party} +${points}`

    return (
      <div class={{ [style.result]: true, [style.close]: this.stats.close }}>
        <p class={style.year}>{this.year}</p>
        <div class={this.colorize(this.stats)}>
          <p class={style.margin}>{margin}</p>
        </div>
        {this.stats.close && <p>Close!</p>}
      </div>
    )
  }
}
