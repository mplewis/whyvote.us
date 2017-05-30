import { states } from '../../fixtures/voting_data'

export default {
  name: 'StatePicker',
  props: {
    statePicked: { type: Function, required: true }
  },
  render () {
    return (
      <div>
        <select onChange={this.statePicked}>
          <option selected disabled>Select your state:</option>
          { states.map(s => <option value={s}>{s}</option>) }
        </select>
      </div>
    )
  }
}
