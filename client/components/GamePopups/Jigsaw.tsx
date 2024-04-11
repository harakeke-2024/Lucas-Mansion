import '../../styles/popup.css'
import '../../styles/jigsaw.css'

interface Props {
  setJigsaw: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Jigsaw({ setJigsaw }: Props) {
  return (
    <>
      <h1>Jigsaw</h1>
      <div className="board"></div>
      <div className="pieces"></div>
      <button className="closeButton" onClick={() => setJigsaw(false)}>
        x
      </button>
    </>
  )
}
