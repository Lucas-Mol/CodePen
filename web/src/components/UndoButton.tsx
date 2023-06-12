import { Undo } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onUndoClick: MouseEventHandler<HTMLButtonElement>
}

export function UndoButton({ onUndoClick }: Props) {
  return (
    <button
      className="flex justify-center rounded-full bg-blue-800 py-[4px] text-center"
      id="undo"
      onClick={onUndoClick}
    >
      <Undo color="#eff6ff" />
    </button>
  )
}
