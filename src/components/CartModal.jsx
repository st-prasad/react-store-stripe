import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CartModal = ({ closePopup, cartArray, handleRemoveAll, removeOne, handleAdd, emptyCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  // const renderCartArray = () => {
  //   return cartArray.map((item, index) => (
  //     <li key={index}>{item.title}</li>
  //   ));
  // };

  const CartArrayTitles =
      cartArray.map((item) => (
        <div key={item.id}>
        <li>{item.title} - {item.price}</li>
        <p>{item.quantity}</p>
        <p>total item price = ${item.quantity * item.price}</p>
        <Button variant="danger" size="sm" onClick={() => handleAdd(item)}> + </Button>
        <Button variant="danger" size="sm" onClick={() => removeOne(item)}> - </Button>
        <Button variant="danger" size="sm" onClick={() => handleRemoveAll(item)}>Remove</Button>
      </div>
    ));


  // * const getTags = (property, Tag) =>
  //   cartArray.map((item) => (<Tag key={item.id}>{item[property]}</Tag>));
  // const ArrayTitles = getTags("title", "li");

  let totalItems = 0;
    cartArray.forEach((item) => {
      totalItems += item.quantity;
    });

    useEffect(() => {
      let calculatedTotalPrice = 0;
  
      for (let i = 0; i < cartArray.length; i++) {
        calculatedTotalPrice += cartArray[i].quantity * cartArray[i].price;
      }
      setTotalPrice(calculatedTotalPrice);
    }, [cartArray]);

  return (
    <div>
      {/* <Modal show={true} onClick={closePopup}> */}
      <Modal show={true} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>
            <ul>
              {cartArray.length === 0 ? (
                <li>add items!</li>
              ) : (
                <>
                {CartArrayTitles}
                <Button variant="danger" size="sm" onClick={emptyCart}> empty the cart </Button>
                </>
              )}
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
          tot. items {totalItems}
          </h4>
        </Modal.Body>
        <Modal.Footer>
        <h1>
        Tot. Price {totalPrice}
        </h1>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
