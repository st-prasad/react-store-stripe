import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CartModal from "./CartModal";

const ModalActivate = ({cartArray}) => {
  // const [BtnClicked, setBtnClicked] = useState(false)
  // const openPopup = () => (setBtnClicked(true))
  // const closePopup = () => (setBtnClicked(false))
  const [BtnClicked, setBtnClicked] = useState(false);
  const openPopup = () => setBtnClicked(true);
  const closePopup = () => setBtnClicked(false);

  return (
    <>
      {BtnClicked ? <CartModal cartArray={cartArray} closePopup={closePopup} /> :
      <Button onClick={openPopup}>view cart</Button>}
    </>
  );
};

export default ModalActivate;
