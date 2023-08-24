import { Node, Rect } from '@motion-canvas/2d'
import {
  DEFAULT,
  Reference,
  all,
  createRef,
  waitFor,
} from '@motion-canvas/core'

interface Options {
  view: Node
  item: Reference<Rect>
  message: Node
  wait?: number
}
export default function* pullUp({ view, item, message, wait = 2 }: Options) {
  item().lineWidth(8)

  yield* all(
    item().scale(0.8, 0.5),
    item().radius(16, 0.5),
    item().stroke('#eee', 0.5),
    item().position([0, -70], 0.5)
  )

  const messageRef = createRef<Node>()
  view.add(
    <Node ref={messageRef} opacity={0} position={[0, 430]}>
      {message}
    </Node>
  )

  yield* messageRef().opacity(1, 0.5)

  yield* waitFor(wait)

  yield* all(
    item().scale(1, 0.5),
    item().radius(0, 0.5),
    item().stroke(DEFAULT, 0.5),
    item().position([0, 0], 0.5),
    messageRef().position([0, 600], 0.5)
  )

  messageRef().remove()
}
