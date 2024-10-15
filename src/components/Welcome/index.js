import {Component} from 'react'

import Subscribe from '../Subscribe'
import Subscribed from '../Subscribed'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onClickButton = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="loginApp-bg-container">
        <div className="login-card-container">
           <h1 className='heading'>Welcome</h1>
           <p className='paragraph'>Thank you! Happy Learning</p>
          {isSubscribe ? (
            <Subscribed subscribed={this.onClickButton} />
          ) : (
            <Subscribe subscribe={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Welcome