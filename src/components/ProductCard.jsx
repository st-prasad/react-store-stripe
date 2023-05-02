import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";


const ProductCard = ({ProdArrItem, handleAdd, cartArray, handleRemoveItem }) => {

  const [isInCart, setIsInCart] = useState(false);


    useEffect(() => {
    const findItem = (cartArray.find((item) => item.id === ProdArrItem.id));
    (findItem) ? setIsInCart(true) : setIsInCart(false)
  }, [cartArray]);
  

  return (
    <Card>
      <Card.Body>
        <Card.Title>{ProdArrItem.title}</Card.Title>
        <Card.Text>RS. {ProdArrItem.price}</Card.Text>
        {
          isInCart ? (
            <Button variant="danger" onClick={() => handleRemoveItem(ProdArrItem)}>
              Remove from cart
            </Button>
          ) : (
            <Button variant="primary" onClick={() => handleAdd(ProdArrItem)}>
              Add to cart
            </Button>
          )
        }

      </Card.Body>
    </Card>
  )
}

export default ProductCard