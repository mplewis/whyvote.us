import style from './header.styl'

export default {
  name: 'Header',
  render () {
    return (
      <div class={[style.header, 'row']}>
        <div class='col-xs-12'>
          <h1>
            WhyVote.us
          </h1>
          <h2>
            How much does your vote really count?
          </h2>
        </div>
      </div>
    )
  }
}
