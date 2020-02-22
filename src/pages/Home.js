import React from 'react';
import Image from'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import house from '../assets/90idmistonroad-winter.jpg'

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    console.log("[ControlledCarousel]: handleSelect:")
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel 
      controls={true} 
      activeIndex={index} 
      direction={direction} 
      onSelect={handleSelect}
      interval={null}
      >
      <Carousel.Item>
        <Image src={house} alt='90 Idmiston Road' fluid />
        <Carousel.Caption>
          <h3>90 Idmiston Road...</h3>
          <p>A snowy scene.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={house} alt='90 Idmiston Road' fluid />
        <Carousel.Caption>
          <h3>90 Idmiston Road</h3>
          <p>A snowy scene.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <Image src={house} alt='90 Idmiston Road' fluid />
        <Carousel.Caption>
          <h3>90 Idmiston Road</h3>
          <p>A snowy scene.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default class Home extends React.Component {
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
    return <ControlledCarousel />
  }
}
