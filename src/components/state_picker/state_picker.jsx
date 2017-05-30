import states from '../../fixtures/states.json'

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
          { states.map(s => <option value={s.toLowerCase()}>{s}</option>) }
        </select>
      </div>
    )
  }
}
