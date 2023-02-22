import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'


export default class Product extends Component {
  constructor(){
    super();
    this.state={ like:0}
    console.log(this.product);
  }
  handleClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        like: prevState.like + 1,
      };
    });}
  render() {
   
    const {product}=this.props;
    return (<>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../assets/images/${product.img}`)} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
         Price {product.price}
        </Card.Text>
        <Card.Text>
         Likes: {this.state.like}
        </Card.Text>
        <Card.Text>
         Quantity: {product.quantity}
        </Card.Text>
        <Card.Text>
         description: {product.description}
        </Card.Text>
        <Button onClick={() => {
            this.handleClick();
          }} variant="primary">Like</Button>
          <Button>
            Buy
          </Button>
      </Card.Body>
    </Card>

    </>
     
    )
  }
}
