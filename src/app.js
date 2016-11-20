import 'bootstrap/dist/css/bootstrap.min.css'

import appTemplate from './app.pug'
import states from './data/election_data.json'

const data = {
  states: states
}

document.getElementById('app').innerHTML = appTemplate(data)
