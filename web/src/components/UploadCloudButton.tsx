import { UploadCloud } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onUploadClick: MouseEventHandler<HTMLButtonElement>
}

export function UploadCloudButton({ onUploadClick }: Props) {
  return (
    <button
      className="flex justify-center rounded-full bg-cyan-600 py-[4px] text-center"
      id="undo"
      onClick={onUploadClick}
    >
      <UploadCloud color="#eff6ff" />
    </button>
  )
}
