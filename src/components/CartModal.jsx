import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CartModal = ({
  closePopup,
  cartArray,
  handleRemoveItem,
  removeOne,
  handleAdd,
  emptyCart,
  updateItemsQuantity,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  // const [itemsQuantity, setItemsQuantity] = useState(0);

  // const [totalPrice, setTotalPrice] = useState(0);
  // const renderCartArray = () => {
  //   return cartArray.map((item, index) => (
  //     <li key={index}>{item.title}</li>
  //   ));
  // };

  const checkOut = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({items: cartArray})
    }).then((res) => res.json()).then((res) => {
      if(res.url) {
        window.location.assign(res.url); // forward to stripe
      }
    });
    // emptyCart();
  }

  const CartArrayTitles = cartArray.map((item) => (
    <div key={item.id}>
      <li>
        {item.title} - {item.price}
      </li>
      <p>{item.quantity}</p>
      <p>total item price = ${item.quantity * item.price}</p>
      <Button variant="danger" size="sm" onClick={() => handleAdd(item)}>
        {" "}
        +{" "}
      </Button>
      <Button variant="danger" size="sm" onClick={() => removeOne(item)}>
        {" "}
        -{" "}
      </Button>
      <Button variant="danger" size="sm" onClick={() => handleRemoveItem(item)}>
        Remove
      </Button>
    </div>
  ));

  // const calculateTotalItems = () => {
  //   let itemsQuantity = 0;
  //   cartArray.forEach((item) => {
  //     itemsQuantity += item.quantity;
  //   });
  //   return itemsQuantity;
  // };

  // * const getTags = (property, Tag) =>
  //   cartArray.map((item) => (<Tag key={item.id}>{item[property]}</Tag>));
  // const ArrayTitles = getTags("title", "li");

  // useEffect(() => {
  //   let calculatedTotalPrice = 0;

  //   for (let i = 0; i < cartArray.length; i++) {
  //     calculatedTotalPrice += cartArray[i].quantity * cartArray[i].price;
  //   }
  //   setTotalPrice(calculatedTotalPrice);
  // }, [cartArray]);

  useEffect(() => {
    let newTotalPrice = 0;
    let newItemsQuantity = 0;

    cartArray.forEach((item) => {
      newTotalPrice += item.price * item.quantity;
      newItemsQuantity += item.quantity;
    });
    setTotalPrice(newTotalPrice);
    // setItemsQuantity(itemsQuantity);
    // updateItemsQuantity(itemsQuantity)
    setItemsQuantity(newItemsQuantity);
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
                  <Button variant="danger" size="sm" onClick={emptyCart}>
                    {" "}
                    empty the cart{" "}
                  </Button>
                </>
              )}
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>tot. items: {itemsQuantity}</h4>
        </Modal.Body>
        <Modal.Footer>
          {cartArray.length !== 0 && (
            <Button variant="primary" size="sm" onClick={checkOut} >
              purchase
            </Button>
          )}
          <h1>Tot. Price {totalPrice}</h1>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
