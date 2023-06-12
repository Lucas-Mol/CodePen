import { Trash } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onClearClick: MouseEventHandler<HTMLButtonElement>
}

export function ClearButton({ onClearClick }: Props) {
  return (
    <button
      className="flex justify-center rounded-full bg-red-800 py-[4px] text-center"
      id="clear"
      onClick={onClearClick}
    >
      <Trash color="#fef2f2" />
    </button>
  )
}
