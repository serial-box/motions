import { makeProject } from '@motion-canvas/core'
import intro from './blink/intro?scene'
import preview from './blink/preview?scene'

export default makeProject({
  scenes: [intro, preview],
})
