import { makeProject } from '@motion-canvas/core'

import intro from './installation/intro?scene'
import video from './installation/video?scene'
import outro from './installation/outro?scene'

import './global.css'

export default makeProject({
  scenes: [intro, video, outro],
})
