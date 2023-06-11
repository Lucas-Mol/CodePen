'use client'
import { Trash, Eraser, Pencil, Undo, Download } from 'lucide-react'
import React, { ChangeEvent, useState } from 'react'

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

export function Sidebar({
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

  const onTrashClick = (event: React.MouseEvent) => {
    handleClear()
  }

  const onUndoClick = (event: React.MouseEvent) => {
    handleUndo()
  }

  const onDownloadClick = (event: React.MouseEvent) => {
    handleDownload()
  }

  const onEraserClick = (event: React.MouseEvent) => {
    setColor('#1f1f23ff')
    setWeight(12)
    setIsDrawingMode(false)
  }

  const onPencilClick = (event: React.MouseEvent) => {
    setColor(colorCache)
    setWeight(weightCache)
    setIsDrawingMode(true)
  }

  function eraserButton() {
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

  function pencilButton() {
    return (
      <div className="mt-auto py-3">
        <label className="block pb-2" htmlFor="pencil">
          Mode<label className="text-sm">(Eraser)</label>:
        </label>
        <button
          className="flex w-11 justify-center rounded-full bg-green-600 py-[2px] text-center"
          id="pencil"
          onClick={onPencilClick}
        >
          <Pencil color="#2c2c31" />
        </button>
      </div>
    )
  }

  return (
    <div className="absolute left-0 top-0 z-[1000] mt-[115px] h-[calc(100%-115px)] w-32 border-r-[1px] border-r-gray-100 border-opacity-20 p-1">
      <div className="m-0 flex h-full list-none flex-col items-start justify-center gap-3 p-1">
        <div className="mt-auto pl-3 pr-3">
          {isDrawingMode ? eraserButton() : pencilButton()}
          <div className="py-3">
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
          <div className="py-3">
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
        </div>
        <div className="mb-3 mt-auto flex w-full flex-col gap-y-2">
          <button
            className="flex justify-center rounded-full bg-orange-400 py-[4px] text-center"
            id="undo"
            onClick={onDownloadClick}
          >
            <Download color="#eff6ff" />
          </button>
          <button
            className="flex justify-center rounded-full bg-blue-400 py-[4px] text-center"
            id="undo"
            onClick={onUndoClick}
          >
            <Undo color="#eff6ff" />
          </button>
          <button
            className="flex justify-center rounded-full bg-red-600 py-[4px] text-center"
            id="clear"
            onClick={onTrashClick}
          >
            <Trash color="#fef2f2" />
          </button>
        </div>
      </div>
    </div>
  )
}
