import { Rect, Txt, Video, makeScene2D } from '@motion-canvas/2d'
import {
  Direction,
  all,
  chain,
  createRef,
  slideTransition,
  waitFor,
  waitUntil,
} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
  view.fill('#222')

  const video = createRef<Video>()
  yield view.add(<Video ref={video} src="/videos/installation.mp4" />)

  yield slideTransition(Direction.Right)

  video().play()

  yield* waitUntil('downloadmention')

  video().pause()

  video().radius(16).stroke('#999').lineWidth(8)
  yield* all(video().scale(0.8, 0.5), video().position([0, -50], 0.5))

  const downloadInfo = createRef<Rect>()
  view.add(
    <Rect
      fill="#ddd"
      layout
      position={[0, 450]}
      radius={12}
      padding={[8, 12]}
      alignItems="center"
      ref={downloadInfo}
      opacity={0}
    >
      <Txt fontSize={32} fill={'#111'} fontWeight={700}>
        You can find direct link to download VS Code in the description below.
      </Txt>
    </Rect>
  )

  yield* downloadInfo().opacity(1, 0.3)

  yield* waitFor(4)

  yield* chain(
    downloadInfo().opacity(0, 0.3),
    all(video().position([0, 0], 0.5), video().scale(1, 0.5), video().radius(0, 0.5))
  )

  yield* waitFor(0.3)
  video().play()

  yield* waitUntil('endvideo')
})
