import { Grid, Rect, Txt, makeScene2D } from '@motion-canvas/2d'
import {
  all,
  createRef,
  linear,
  sequence,
  waitFor,
} from '@motion-canvas/core'

export default function makeIntro(title: string) {
  return makeScene2D(function* (view) {
    view.fill('#222')
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

    const titleRect = createRef<Rect>()
    view.add(
      <Rect
        layout
        direction="column"
        position={[0, -85]}
        fill="blue"
        padding={[10, 20]}
        opacity={0}
        ref={titleRect}
      >
        <Txt fill="#bbb" fontSize={28}>
          IN THIS VIDEO
        </Txt>
        <Txt fill="#ddd" fontSize={64}>
          {title}
        </Txt>
      </Rect>
    )

    titleRect().filters.blur(40)

    yield* sequence(
      0.3,
      titleRect().opacity(1, 0.5),
      titleRect().filters.blur(0, 0.3, linear)
    )

    yield* waitFor(2)
  })

}