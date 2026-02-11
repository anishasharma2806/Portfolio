import { useEffect } from "react"

export default function VideoModal({ src, onClose }) {

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [onClose])

  if (!src) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <video
          src={src}
          controls
          autoPlay
          className="modal-video"
        />
      </div>
    </div>
  )
}
