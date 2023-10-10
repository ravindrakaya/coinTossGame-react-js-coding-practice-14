// Write your code here
import {Component} from 'react'
import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, srcUrl: headImgUrl}

  onTossBtnClick = () => {
    const tossResults = Math.floor(Math.random() * 2)
    let tossImg = headImgUrl

    if (tossResults === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      tossImg = tailImgUrl
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
    this.setState({srcUrl: tossImg})
  }

  render() {
    const {headCount, tailCount, srcUrl} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="card-heading">Coin Toss Game</h1>
          <p className="card-para">Heads (or) Tails</p>
          <img src={srcUrl} alt="toss result" className="image" />
          <button
            type="button"
            className="button"
            onClick={this.onTossBtnClick}
          >
            Toss Coin
          </button>
          <div className="toss-result-container">
            <p className="toss-results">Total: {headCount + tailCount}</p>
            <p className="toss-results">Heads: {headCount}</p>
            <p className="toss-results">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
