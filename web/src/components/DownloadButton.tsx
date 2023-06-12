import { Download } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onDownloadClick: MouseEventHandler<HTMLButtonElement>
}

export function DowndloadButton({ onDownloadClick }: Props) {
  return (
    <button
      className="flex justify-center rounded-full bg-orange-400 py-[4px] text-center"
      id="undo"
      onClick={onDownloadClick}
    >
      <Download color="#eff6ff" />
    </button>
  )
}
