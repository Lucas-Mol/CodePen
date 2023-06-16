import { X } from 'lucide-react'
import { MouseEventHandler, ReactNode } from 'react'

interface Props {
  children: ReactNode
  onCloseClick: MouseEventHandler<HTMLButtonElement>
}

export function Modal({ children, onCloseClick }: Props) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] h-full w-full bg-gray-800 opacity-80" />
      <div className="absolute left-[50%] top-[40%] z-[5000] min-w-[300px] max-w-xl -translate-x-[50%] -translate-y-[50%] rounded-lg bg-gray-700 leading-relaxed">
        <div className="flex h-4 items-center justify-end rounded-t-lg bg-gray-600 pr-1">
          <button
            onClick={onCloseClick}
            className="flex h-3 w-3 items-center justify-center rounded-lg bg-red-600 hover:bg-red-500"
          >
            <X
              size={10}
              strokeWidth={4}
              color="#28282d"
              className="opacity-0 hover:opacity-70"
            />
          </button>
        </div>
        <div className="px-4 py-3">{children}</div>
      </div>
    </>
  )
}
