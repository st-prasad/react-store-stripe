import React from "react";
import { Button, Modal } from "react-bootstrap";

const CartModal = ({ closePopup, cartArray }) => {
  // const renderCartArray = () => {
  //   return cartArray.map((item, index) => (
  //     <li key={index}>{item.title}</li>
  //   ));
  // };

  // const CartArrayTitle =
  //     cartArray.map((item) => (
  //     <li key={item.id}>{item.title}</li>
  //   ));

  const getTags = (property, Tag) =>
    cartArray.map((item) => (<Tag key={item.id}>{item[property]}</Tag>));

  const ArrayTitles = getTags("title", "li");
  const ArrayPrices = getTags("price", "li");

    // total price
    let totalPrice = 0;

    for (let i = 0; i < cartArray.length; i++) {
      totalPrice += cartArray[i].price;
    }

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
                ArrayTitles
              )}
            </ul>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
          {ArrayPrices}
          </ul>
        </Modal.Body>
        <Modal.Footer>
        {totalPrice}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
