import faqBody from './faq.md'

export default {
  name: 'Faq',
  mounted () {
    this.$refs.faq.innerHTML = faqBody
  },
  render () {
    return <div ref='faq' />
  }
}
