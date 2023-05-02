import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CartModal from "./CartModal";

const ModalActivate = ({
  cartArray,
  handleRemoveItem,
  removeOne,
  handleAdd,
  emptyCart,
}) => {
  // const [BtnClicked, setBtnClicked] = useState(false)
  // const openPopup = () => (setBtnClicked(true))
  // const closePopup = () => (setBtnClicked(false))
  const [BtnClicked, setBtnClicked] = useState(false);
  const openPopup = () => setBtnClicked(true);
  const closePopup = () => setBtnClicked(false);

  // const updateTotalPrice = (newTotalPrice) => {
  //   setTotalPrice(newTotalPrice);
  // };
  const [itemsQuantity, setItemsQuantity] = useState(0); // state for the total price

  // const updateItemsQuantity = (newItemsQuantity) => {
  //   setItemsQuantity(newItemsQuantity); 
  // };

  useEffect(() => {
    let quantity = 0;
    cartArray.forEach((item) => {
      quantity += item.quantity;
    });
    setItemsQuantity(quantity);
  }, [cartArray]);

  return (
    <>
      {BtnClicked ? (
        <CartModal
          cartArray={cartArray}
          closePopup={closePopup}
          handleRemoveItem={handleRemoveItem}
          removeOne={removeOne}
          handleAdd={handleAdd}
          emptyCart={emptyCart}
          // updateItemsQuantity={updateItemsQuantity}
        />
      ) : (
        <>
        <Button onClick={openPopup}>view cart</Button>
        <h1>items in the cart - {itemsQuantity}</h1>
        </>
      )}
    </>
  );
};

export default ModalActivate;
