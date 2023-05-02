import React, { useEffect, useState } from 'react';
import { Badge, Button, Card } from "react-bootstrap";
import placeholderImg from '../assets/placeholder.jpg';



const ProductCard = ({ProdArrItem, handleAdd, cartArray, handleRemoveItem }) => {

  const [isInCart, setIsInCart] = useState(false);


  useEffect(() => {
    const findItem = (cartArray.find((item) => item.id === ProdArrItem.id));
    (findItem) ? setIsInCart(true) : setIsInCart(false)
  }, [cartArray]);
  

  return (
    <Card>
      <Card.Img
        variant="top"
        src={ProdArrItem.imgSrc ? ProdArrItem.imgSrc : placeholderImg}
        alt="Product Image"
        className="p-3"
      />
      <Card.Body>
        <Card.Title>{ProdArrItem.title}</Card.Title>
        <Badge pill className="bg-primary">
            RS. {ProdArrItem.price}
          </Badge>
        {
          isInCart ? (
            <Button variant="outline-danger" className='ms-5' onClick={() => handleRemoveItem(ProdArrItem)}>
              Remove from cart
            </Button>
          ) : (
            <Button variant="outline-primary" className='ms-5' onClick={() => handleAdd(ProdArrItem)}>
              Add to cart
            </Button>
          )
        }

      </Card.Body>
      <style jsx>{`
        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Card>
  )
}

export default ProductCard