import '../../styles/popup.css'
// import
interface Props {
  setIntro: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Intro({ setIntro }: Props) {
  return (
    <div style={{ marginTop: '50px' }}>
      <h2>Welcome!</h2>
      <strong>
        <p>
          {`After coming to Lucas' mansion for dinner, you've trapped inside! The room has been locked and you'll need to ecape while racing the clock. 
      Hidden inside are puzzles and clues, look for a way out or face your demise!" `}
        </p>
      </strong>
      <button className="close" onClick={() => setIntro(false)}>
        x
      </button>
    </div>
  )
}
