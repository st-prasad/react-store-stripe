import React from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";


const ProductCard = ({item}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>RS. {item.price}</Card.Text>
        <Button variant='primary'>add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard