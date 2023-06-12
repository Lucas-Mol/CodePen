import { Eraser } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onEraserClick: MouseEventHandler<HTMLButtonElement>
}

export function EraserButton({ onEraserClick }: Props) {
  return (
    <div className="mt-auto py-3">
      <label className="block pb-2" htmlFor="eraser">
        Mode<label className="text-sm">(Pencil)</label>:
      </label>
      <button
        className="flex w-11 justify-center rounded-full bg-gray-50 py-[2px] text-center"
        id="eraser"
        onClick={onEraserClick}
      >
        <Eraser color="#60a5fa" />
      </button>
    </div>
  )
}
