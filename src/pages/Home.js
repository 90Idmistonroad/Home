import React from 'react'
import house from '../assets/90idmistonroad-winter.jpg'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      greeting: 'Hello there',
      name: '',
      errorMsg: ''
    }

    this.inputChange = this.inputChange.bind(this)
    this.hello = "Hello World"
  }

  inputChange (event) {
    const name = event.target.value
    this.setState({
      name
    })
  }
  
  render () {
    return <div
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        >
        <img src={house} alt='90 Idmiston Road' height='400px' />
    </div>
  }
}
