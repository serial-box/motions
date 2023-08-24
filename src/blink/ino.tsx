import { Video, makeScene2D } from '@motion-canvas/2d'
import { Direction, createRef, slideTransition, waitUntil } from '@motion-canvas/core'

export default makeScene2D(function* (view) {
  view.fill('#222')

  const video = createRef<Video>()
  view.add(<Video ref={video} src="/videos/blink-ino.mp4" />)

  yield* slideTransition(Direction.Right)

  video().play()

  yield* waitUntil('endino')
})
