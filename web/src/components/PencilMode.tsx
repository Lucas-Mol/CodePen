import { Pencil } from 'lucide-react'

export function PencilMode() {
  return (
    <div className="mt-auto py-3">
      <p className="block pb-2">Pencil</p>
      <div className="flex w-11 justify-center rounded-full bg-purple-700 py-[2px] text-center">
        <Pencil color="#eff6ff" />
      </div>
    </div>
  )
}
