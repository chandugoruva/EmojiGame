import './index.css'

const EmojiCard = props => {
  const {each, countImages} = props
  const {emojiName, emojiUrl, id} = each
  const imageCount = () => {
    countImages(id)
  }
  return (
    <li className="li">
      <button type="button" className="button" onClick={imageCount}>
        <img src={emojiUrl} alt={emojiName} className="img" />
      </button>
    </li>
  )
}
export default EmojiCard
