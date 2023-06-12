import { UploadCloud } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface Props {
  onUploadButton: MouseEventHandler<HTMLButtonElement>
}

export function UploadCloudButton({ onUploadButton }: Props) {
  return (
    <button
      className="flex justify-center rounded-full bg-cyan-600 py-[4px] text-center"
      id="undo"
      onClick={onUploadButton}
    >
      <UploadCloud color="#eff6ff" />
    </button>
  )
}
