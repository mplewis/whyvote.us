import electionData from './data'
import {render, bind} from './ui'
import {layout} from './viewmodel'

const toRender = layout(electionData)
render(toRender)
bind()
