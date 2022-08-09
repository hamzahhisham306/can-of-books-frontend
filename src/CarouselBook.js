import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class  UncontrolledExample extends React.Component {
    render(){
      let array=this.props.books;

  return (
    <Carousel>
    <Carousel.Item>
    <Carousel.Caption>
        <h3>{array[0].status}</h3>
        <p>{array[0].description}</p>
      </Carousel.Caption>
       <h1>{array[0].title}</h1>
    </Carousel.Item>
    <Carousel.Item>
    <h1>{array[1].title}</h1>
      <Carousel.Caption>
      <h3>{array[1].status}</h3>
        <p>{array[1].description}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <h1>{array[2].title}</h1>

      <Carousel.Caption>
      <h3>{array[2].status}</h3>
        <p>{array[2].description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}
}
export default UncontrolledExample;