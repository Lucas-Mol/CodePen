import { Pencil } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onPencilClick: MouseEventHandler<HTMLButtonElement>
}

export function PencilButton({ onPencilClick }: Props) {
  return (
    <div className="mt-auto py-3">
      <label className="block pb-2" htmlFor="pencil">
        Mode<label className="text-sm">(Eraser)</label>:
      </label>
      <button
        className="flex w-11 justify-center rounded-full bg-green-600 py-[2px] text-center"
        id="pencil"
        onClick={onPencilClick}
      >
        <Pencil color="#2c2c31" />
      </button>
    </div>
  )
}
