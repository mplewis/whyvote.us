import Header from '../header/header.jsx'
import StatePicker from '../state_picker/state_picker.jsx'
import style from './layout.styl'

export default {
  name: 'Layout',
  render () {
    return (
      <div class={style.content}>
        <Header />
        <StatePicker />
      </div>
    )
  }
}
