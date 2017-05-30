import Header from '../header/header.jsx'
import style from './layout.styl'

export default {
  name: 'Layout',
  render () {
    return (
      <div class={style.content}>
        <Header />
      </div>
    )
  }
}
