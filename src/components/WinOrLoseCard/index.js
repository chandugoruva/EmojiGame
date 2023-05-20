import './index.css'

const WinOrLoose = props => {
  const {text, score1, url, playAgain} = props
  const restartGame = () => {
    playAgain()
  }
  const bestScore = score1 === 12 ? 'Best Score' : 'score'
  const ScoreDec = text === 'You Lose' ? score1 : score1
  return (
    <div className="msg">
      <div className="div-flex">
        <h1 className="win-heading">{text}</h1>
        <p className="score-paragraph">{bestScore}</p>
        <p className="score-text">{ScoreDec}/12</p>
        <button type="button" className="button1" onClick={restartGame}>
          Play Again
        </button>
      </div>
      <img src={url} alt="win or lose" className="img1" />
    </div>
  )
}
export default WinOrLoose
