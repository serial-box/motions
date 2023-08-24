import { Rect, Txt, Video, makeScene2D } from '@motion-canvas/2d'
import {
  all,
  createRef,
  fadeTransition,
  waitFor,
  waitUntil,
} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
  view.fill('#222')

  const video = createRef<Video>()
  view.add(<Video ref={video} src="/videos/blink-board-setup.mp4" />)

  yield* fadeTransition()
  video().play()

  yield* waitUntil('endsetup')

  yield* all(
    video().scale(0.7, 0.5),
    video().position([0, -70], 0.5),
    video().radius(24, 0.5),
    video().stroke('#eee', 0.5),
    video().lineWidth(12, 0.5)
  )

  const upNext = createRef<Rect>()
  view.add(
    <Rect
      layout
      fill="#fefefe"
      radius={12}
      padding={[8, 16]}
      position={[0, 400]}
      opacity={0}
      ref={upNext}
    >
      <Txt fill="#222" fontSize={32} fontWeight={700}>
        Up next: Let's write some code
      </Txt>
    </Rect>
  )

  yield* upNext().opacity(1, 0.5)

  yield* waitFor(2)
})
