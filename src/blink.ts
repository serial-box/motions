import { makeProject } from '@motion-canvas/core'
import intro from './blink/intro?scene'
import preview from './blink/preview?scene'
import boardSetup from './blink/board-setup?scene'
import ino from './blink/ino?scene'
import outro from './blink/outro?scene'

export default makeProject({
  scenes: [intro, preview, boardSetup, ino, outro],
})
