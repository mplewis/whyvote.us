import style from './layout.styl'

export default {
  name: 'Layout',
  render () {
    return (
      <div class={style.content}>
        <div class='pure-g'>
          <div class='pure-u-3'>
            <p>whyvote.us</p>
          </div>
          <div class='pure-u-3'>
            <p>The grid system works!</p>
          </div>
          <div class='pure-u-3'>
            <p>This is a three-column layout.</p>
          </div>
        </div>
      </div>
    )
  }
}
