'use client'

import React, { useEffect, useState } from 'react'

interface Props {
  color: string
  weight: number
  canvasRef: React.MutableRefObject<HTMLCanvasElement> | null
  contextRef: React.MutableRefObject<CanvasRenderingContext2D> | null
  startCanva: Function
  setLines: React.Dispatch<
    React.SetStateAction<
      {
        points: {
          x: number
          y: number
        }[]
        color: string
        stroke: number
      }[]
    >
  >
}

export function Canva({
  color,
  weight,
  canvasRef,
  contextRef,
  startCanva,
  setLines,
}: Props) {
  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  useEffect(() => {
    startCanva()
  }, [])

  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const { offsetX, offsetY } = nativeEvent
    if (!contextRef!.current) return

    const x = offsetX + 16
    const y = offsetY
    contextRef!.current.beginPath()
    contextRef!.current.moveTo(x, y)
    setIsDrawing(true)
    setLines((prevLines) => [
      ...prevLines,
      { points: [{ x, y }], color: color!, stroke: weight },
    ])
  }

  const finishDrawing = () => {
    if (!contextRef!.current) return

    contextRef!.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing || !contextRef!.current) return

    const { offsetX, offsetY } = nativeEvent

    const x = offsetX + 16
    const y = offsetY
    contextRef!.current.strokeStyle = color
    contextRef!.current.lineWidth = weight
    contextRef!.current.lineTo(x, y)
    contextRef!.current.stroke()

    setLines((prevLines) => {
      const updatedLines = [...prevLines]
      const lastLine = updatedLines[updatedLines.length - 1]
      lastLine.points.push({ x, y })
      return updatedLines
    })
  }

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  )
}
