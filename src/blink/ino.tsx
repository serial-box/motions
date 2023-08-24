import { Rect, Txt, Video, makeScene2D } from '@motion-canvas/2d'
import {
  Direction,
  createRef,
  slideTransition,
  waitUntil,
} from '@motion-canvas/core'
import pullUp from '../library/pull-up-messasge'

export default makeScene2D(function* (view) {
  view.fill('#222')
  view.fontFamily('Helvetica Neue')

  const video = createRef<Video>()
  view.add(<Video ref={video} src="/videos/blink-ino.mp4" />)

  yield* slideTransition(Direction.Right)

  video().play()

  yield* waitUntil('endino')

  yield* pullUp({
    view,
    item: video,
    message: (
      <Rect layout fill="#fefefe" radius={24} padding={[8, 16]}>
        <Txt fontWeight={700} fontSize={32}>
          Congratulations! You built your first project.
        </Txt>
      </Rect>
    ),
  })
})
