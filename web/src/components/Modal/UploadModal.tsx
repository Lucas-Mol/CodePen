import { Modal } from './Modal'

interface Props {
  onCloseClick: Function
}

export function UploadModal({ onCloseClick }: Props) {
  const handleUpload = () => {}

  return (
    <Modal onCloseClick={onCloseClick}>
      <form className="flex flex-col gap-y-4 pt-2" onSubmit={handleUpload}>
        <input
          name="projectName"
          type="text"
          placeholder="Choose your project name"
          className="bg-gray-600"
        />

        <button
          type="submit"
          className="inline-block self-center rounded-full bg-cyan-600 px-5 py-3 uppercase leading-none text-black hover:bg-cyan-500"
        >
          Upload
        </button>
      </form>
    </Modal>
  )
}
