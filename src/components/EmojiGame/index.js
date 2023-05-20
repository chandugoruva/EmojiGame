/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

 const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoose from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    count: 0,
    score: 0,
    triggeredEmoji: [],
    isAvailable: false,
    imageId: '',
    topAmount: 0,
    highestScore: 0,
  }

  playAgain = () => {
    const {isAvailable, topAmount, score, highestScore} = this.state

    if (topAmount < highestScore) {
      this.setState({topAmount: score})
    }

    if (score === 12) {
      this.setState({triggeredEmoji: [], score: 0})
    } else {
      this.setState({triggeredEmoji: [], isAvailable: !isAvailable, score: 0})
    }
  }

  countImages = id => {
    const {triggeredEmoji, isAvailable, score} = this.state
    const reEnteredEmoji = triggeredEmoji.includes(id)
    if (reEnteredEmoji === true) {
      this.setState({isAvailable: !isAvailable, highestScore: score})
    } else {
      this.setState(prevState => ({
        triggeredEmoji: [...triggeredEmoji, id],
        score: prevState.score + 1,
        imageId: id,
      }))
    }
  }

  render() {
    const {triggeredEmoji, imageId, score, count, topAmount} = this.state
    console.log(triggeredEmoji)
    console.log(score)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const imagesList = shuffledEmojisList()

    const {isAvailable} = this.state
    console.log(isAvailable)

    let findWinOrLoose
    const chandu = (text, score1, url) => (
      <WinOrLoose
        text={text}
        score1={score1}
        url={url}
        playAgain={this.playAgain}
      />
    )
    if (isAvailable === true) {
      findWinOrLoose = chandu(
        'You Lose',
        score,
        'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
      )
    }
    if (score === 12) {
      findWinOrLoose = chandu(
        'You Won',
        score,
        'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
      )
    }

    let finalOutput
    if (isAvailable === true || score === 12) {
      finalOutput = findWinOrLoose
    } else {
      finalOutput = imagesList.map(each => (
        <EmojiCard each={each} key={each.id} countImages={this.countImages} />
      ))
    }
    const hideText = isAvailable || score === 12 ? 'hi' : ''
    console.log(hideText)
    return (
      <div className="EmojiGame">
        <div className="nav-bar">
          <div className="logo-flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1 className="logo-heading">Emoji Game</h1>
          </div>
          <div className="logo-flex">
            <p className={`navbar-paragraph ${hideText}`}>Score: {score}</p>
            <p className={`navbar-paragraph ${hideText}`}>
              Top Score: {topAmount}
            </p>
          </div>
        </div>
        <div>
          <ul className="ul">{finalOutput}</ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
