import style from './state_picker.styl'
import { states } from '../../fixtures/voting_data'

export default {
  name: 'StatePicker',
  props: {
    statePicked: { type: Function, required: true }
  },
  render () {
    return (
      <div class='row around-xs'>
        <div class='col-sm-6 col-xs-12'>
          <div class={style.statePicker}>
            <select onChange={this.statePicked}>
              <option selected disabled>Select your state:</option>
              { states.map(s => <option value={s}>{s}</option>) }
            </select>
          </div>
        </div>
      </div>

    )
  }
}
