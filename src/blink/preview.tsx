import { Grid, Rect, Txt, Video, makeScene2D } from '@motion-canvas/2d'
import {
  Direction,
  createRef,
  slideTransition,
  waitUntil,
} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
  view.fill('#222')
  view.fontFamily('Helvetica Neue')

  view.add(
    <Grid
      width={'100%'}
      height={'100%'}
      stroke={'#666'}
    />
  )

  const video = createRef<Video>()
  yield view.add(
    <Video
      ref={video}
      src="/videos/blink-preview.mp4"
      scale={0.6}
      radius={12}
      stroke="#bbb"
      lineWidth={12}
      position={[0, -60]}
    />
  )

  yield* slideTransition(Direction.Right)
  video().play()

  const objective = createRef<Rect>()
  view.add(
    <Rect
      layout
      fill="#fefefe"
      radius={16}
      padding={[8, 16]}
      position={[0, 430]}
      opacity={0}
      ref={objective}
    >
      <Txt fill="#222" fontWeight={700} fontSize={32}>
        Our objective for the day
      </Txt>
    </Rect>
  )

  yield* objective().opacity(1, 0.5)

  yield* waitUntil('endpreview')
})
