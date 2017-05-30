const states = [
  'Colorado',
  'Minnesota',
  'Wisconsin'
]

export default {
  name: 'StatePicker',
  methods: {
    select () {
      const options = states.map(s => <option value={s.toLowerCase()}>{s}</option>)
      return (
        <select>{options}</select>
      )
    }
  },
  render () {
    return (
      <div>
        <p>
          Select your state:
        </p>
        { this.select() }
      </div>
    )
  }
}
