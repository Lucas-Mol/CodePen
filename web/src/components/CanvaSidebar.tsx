'use client'
import React, { ChangeEvent, useState } from 'react'
import { DowndloadButton } from './DownloadButton'
import { UndoButton } from './UndoButton'
import { ClearButton } from './ClearButton'
import { EraserMode } from './EraserMode'
import { PencilMode } from './PencilMode'
import { ToolSwitcher } from './ToolSwitcher'
import { UploadCloudButton } from './UploadCloudButton'
import Link from 'next/link'

interface Props {
  setColor: Function
  weight: number
  setWeight: Function
  handleClear: Function
  handleUndo: Function
  handleDownload: Function
}
let colorCache: string = 'black'
let weightCache: number = 3

export function CanvaSidebar({
  setColor,
  weight,
  setWeight,
  handleClear,
  handleUndo,
  handleDownload,
}: Props) {
  const [isDrawingMode, setIsDrawingMode] = useState<boolean>(true)

  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value
    colorCache = color
    setColor(color)
  }

  const onStrokeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const weight = parseInt(event.target.value)
    weightCache = weight
    setWeight(weight)
  }

  const onClearClick = (event: React.MouseEvent) => {
    handleClear()
  }

  const onUndoClick = (event: React.MouseEvent) => {
    handleUndo()
  }

  const onDownloadClick = (event: React.MouseEvent) => {
    handleDownload()
  }

  const onToolSwitchClick = (event: React.MouseEvent) => {
    isDrawingMode ? onEraserClick() : onPencilClick()
  }

  const onEraserClick = () => {
    setColor('#1f1f23ff')
    setWeight(12)
    setIsDrawingMode(false)
  }

  const onPencilClick = () => {
    setColor(colorCache)
    setWeight(weightCache)
    setIsDrawingMode(true)
  }

  return (
    <div className="absolute left-0 top-0 z-[1000] mt-[115px] h-[calc(100%-115px)] w-32 border-r-[1px] border-r-gray-100 border-opacity-20 p-1">
      <div className="m-0 flex h-full list-none flex-col items-start justify-center p-1">
        <div className="flex w-full flex-col gap-y-1 py-3 pl-2">
          <Link className="text-xl font-bold" href={'/'}>
            Canva
          </Link>
          <Link className="pl-3" href={'/projects'}>
            Projects
          </Link>
        </div>
        <div className="mt-auto flex w-full flex-col pl-2">
          {isDrawingMode ? <PencilMode /> : <EraserMode />}
          <div className="py-[5%]">
            <label className="block" htmlFor="color">
              Color:
            </label>
            <input
              onChange={onColorChange}
              type="color"
              id="color"
              className=" flex w-11 justify-center rounded-lg bg-gray-600 text-center"
            />
          </div>
          <div className="py-[5%]">
            <label className="block" htmlFor="weight">
              Stroke:
            </label>
            <input
              onChangeCapture={onStrokeChange}
              className="w-11 bg-gray-600 text-center"
              type="number"
              id="weight"
              min="2"
              max="200"
              defaultValue={weight}
            />
          </div>
          <div className="py-[5%]">
            <ToolSwitcher onToolSwitchClick={onToolSwitchClick} />
          </div>
        </div>
        <div className="mb-[2%] mt-auto flex w-full flex-col gap-y-2">
          <UploadCloudButton />

          <DowndloadButton onDownloadClick={onDownloadClick} />

          <UndoButton onUndoClick={onUndoClick} />

          <ClearButton onClearClick={onClearClick} />
        </div>
      </div>
    </div>
  )
}
