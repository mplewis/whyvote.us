import 'jquery.scrollto'
import 'jquery.easing'

import electionData from './data'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import {render, bind} from './ui'
import {layout} from './viewmodel'

const toRender = layout(electionData)
console.log(toRender[0])
render(toRender)
bind()
