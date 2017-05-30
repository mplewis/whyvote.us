import style from './layout.styl'

export default {
  name: 'Layout',
  render () {
    return (
      <div class={style.content}>
        <div class='row'>
          <div class='column'>
            <p>whyvote.us</p>
          </div>
          <div class='column'>
            <p>The grid system works!</p>
          </div>
          <div class='column'>
            <p>This is a three-column layout.</p>
          </div>
        </div>
      </div>
    )
  }
}
