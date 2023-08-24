import { Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import { Direction, slideTransition, waitUntil } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  view.fill('#222')

  view.add(
    <Rect layout direction="column">
      <Txt fill="#ccc" fontSize={24}>Up Next</Txt>
      <Txt fill="#fefefe">LED #1</Txt>
    </Rect>
  )

  yield* slideTransition(Direction.Right)

  yield* waitUntil('end')
})
