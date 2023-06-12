import { RefreshCcw } from 'lucide-react'
import React, { MouseEventHandler } from 'react'

interface Props {
  onToolSwitchClick: MouseEventHandler<HTMLButtonElement>
}

export function ToolSwitcher({ onToolSwitchClick }: Props) {
  return (
    <>
      <label className="block pb-2" htmlFor="tool-switcher">
        Tool
      </label>
      <button
        className="flex w-11 justify-center rounded-full bg-green-800 py-[2px] text-center"
        id="tool-switcher"
        onClick={onToolSwitchClick}
      >
        <RefreshCcw color="#eff6ff" />
      </button>
    </>
  )
}
