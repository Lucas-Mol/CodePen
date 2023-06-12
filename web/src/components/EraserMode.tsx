import { Eraser } from 'lucide-react'

export function EraserMode() {
  return (
    <div className="mt-auto py-3">
      <p className="block pb-2">Eraser</p>
      <div className="flex w-11 justify-center rounded-full bg-gray-50 py-[2px] text-center">
        <Eraser color="#1f1f23" />
      </div>
    </div>
  )
}
