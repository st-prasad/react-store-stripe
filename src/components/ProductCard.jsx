import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// import { cartArray } from '../ProductsData';


const ProductCard = ({ProdArrItem, handleAdd}) => {


  // useEffect(() => {
  //   if (isButtonClicked) {
  //     console.log("This is the first time the button is clicked.");
  //   }
  // }, [isButtonClicked]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{ProdArrItem.title}</Card.Title>
        <Card.Text>RS. {ProdArrItem.price}</Card.Text>
        <Button variant='primary' onClick={() => handleAdd(ProdArrItem)} >add to cart</Button>
        {/* <Button variant='primary' onClick={handleClick}>add to cart|{isButtonClicked}</Button> */}
      </Card.Body>
    </Card>
  )
}

export default ProductCard