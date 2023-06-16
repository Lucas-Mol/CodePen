'use client'
import { Canva } from '@/components/Canva'
import { CanvaSidebar } from '@/components/CanvaSidebar'
import { UploadModal } from '@/components/Modal/UploadModal'
import { useRef, useState } from 'react'

export default function Home() {
  const [uploadModal, setUploadModal] = useState<boolean>(false)

  const [color, setColor] = useState<string>('#eff6ff')
  const [weight, setWeight] = useState<number>(3)

  // eslint-disable-next-line no-unused-vars
  const [linesBackward, setLinesBackward] = useState<
    { points: { x: number; y: number }[]; color: string; stroke: number }[]
  >([])

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const startCanva = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d')
    if (!context) return

    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = color
    context.lineWidth = weight
    contextRef.current = context
  }

  const handleClear = () => {
    startCanva()
  }

  const handleUndo = () => {
    setLinesBackward((prevLines) => {
      const updatedLines = prevLines.slice(0, -1)

      const canvas = canvasRef.current
      if (!canvas) return updatedLines

      const context = canvas.getContext('2d')
      if (!context) return updatedLines

      context.clearRect(0, 0, canvas.width, canvas.height)
      updatedLines.forEach((line) => {
        context.strokeStyle = line.color
        context.lineWidth = line.stroke
        context.beginPath()

        line.points.forEach((point, index) => {
          if (index === 0) {
            context.moveTo(point.x, point.y)
          } else {
            context.lineTo(point.x, point.y)
          }
        })

        context.stroke()
      })

      return updatedLines
    })
  }

  const handleDownload = () => {
    const canvas = canvasRef.current!
    const context = canvas.getContext('2d')!

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i]
      const g = pixels[i + 1]
      const b = pixels[i + 2]
      const a = pixels[i + 3]

      if (r === 31 && g === 31 && b === 35 && a === 255) {
        pixels[i] = 0
        pixels[i + 1] = 0
        pixels[i + 2] = 0
        pixels[i + 3] = 0
      }
    }

    context.putImageData(imageData, 0, 0)

    const dataURL = canvas.toDataURL('image/png')

    const downloadLink = document.createElement('a')
    downloadLink.href = dataURL
    downloadLink.download = 'picture.png'

    downloadLink.click()
  }

  const handleUpload = () => {
    setUploadModal(!uploadModal)
  }

  return (
    <>
      <CanvaSidebar
        setColor={setColor}
        weight={weight}
        setWeight={setWeight}
        handleClear={handleClear}
        handleUndo={handleUndo}
        handleDownload={handleDownload}
        handleUpload={handleUpload}
      />
      <Canva
        color={color}
        weight={weight}
        canvasRef={canvasRef}
        contextRef={contextRef!}
        startCanva={startCanva}
        setLines={setLinesBackward}
      />

      {uploadModal && (
        <UploadModal onCloseClick={() => setUploadModal(false)} />
      )}
    </>
  )
}
