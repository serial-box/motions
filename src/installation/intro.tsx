import { Grid, Rect, Txt, makeScene2D } from '@motion-canvas/2d'
import {
  all,
  createRef,
  easeInBounce,
  easeInCubic,
  easeInExpo,
  linear,
  sequence,
  waitFor,
  waitUntil,
} from '@motion-canvas/core'

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>()
  view.fontFamily('Helvetica Neue')

  view.add(
    <Grid
      ref={grid}
      width={'100%'}
      height={'100%'}
      stroke={'#666'}
      start={0.5}
      end={0.5}
    />
  )

  yield* all(grid().end(0, 1), grid().start(1, 1))

  const title = createRef<Rect>()
  view.add(
    <Rect
      layout
      direction="column"
      position={[0, -85]}
      fill="blue"
      padding={[10, 20]}
      opacity={0}
      ref={title}
    >
      <Txt fill="#bbb" fontSize={28}>
        IN THIS VIDEO
      </Txt>
      <Txt fill="#ddd" fontSize={64}>
        Software Installation
      </Txt>
    </Rect>
  )

  title().filters.blur(40)

  yield* sequence(
    0.3,
    title().opacity(1, 0.5),
    title().filters.blur(0, 0.3, linear)
  )

  yield* waitUntil('ready')
})
