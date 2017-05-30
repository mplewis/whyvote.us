import Header from '../header/header.jsx'
import StatePicker from '../state_picker/state_picker.jsx'
import VotingInfo from '../voting_info/voting_info.jsx'

import style from './layout.styl'
import states from '../../fixtures/states.json'

export default {
  name: 'Layout',
  data: () => ({
    selectedState: null
  }),
  methods: {
    onStatePicked (event) {
      this.selectedState = states[event.target.selectedIndex - 1]
    },
    votingInfo () {
      console.log('votingInfo')
      if (!this.selectedState) return null
      console.log('render')
      return <VotingInfo state={this.selectedState} />
    }
  },
  render () {
    return (
      <div class={style.content}>
        <Header />
        <StatePicker statePicked={this.onStatePicked} />
        { this.votingInfo() }
      </div>
    )
  }
}
