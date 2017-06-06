import faqBody from './faq.md'

export default {
  name: 'Faq',
  mounted () {
    this.$refs.faq.innerHTML = faqBody
  },
  render () {
    return (
      <div class='row around-xs'>
        <div class='col-sm-8 col-xs-12'>
          <div ref='faq' />
        </div>
      </div>
    )
  }
}
