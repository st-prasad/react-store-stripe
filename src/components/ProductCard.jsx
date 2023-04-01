import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// import { cartArray } from '../ProductsData';


const ProductCard = ({item}) => {
  const [cartArray, setCartArray] = useState();

  const handleClick = () => {
    const updatedArray = dataArray.filter(item => item.id !== "default");
    updatedArray.push(item)
    console.log(item);
    setCartArray(updatedArray)
  };

  // useEffect(() => {
  //   if (isButtonClicked) {
  //     console.log("This is the first time the button is clicked.");
  //   }
  // }, [isButtonClicked]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>RS. {item.price}</Card.Text>
        <Button variant='primary' onClick={handleClick}>add to cart</Button>
        {/* <Button variant='primary' onClick={handleClick}>add to cart|{isButtonClicked}</Button> */}
      </Card.Body>
    </Card>
  )
}

export default ProductCard