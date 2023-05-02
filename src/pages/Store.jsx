import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ModalActivate from "../components/ModalActivate";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../ProductsData";

const Store = () => {


// state for product cards
  const [cartArray, setCartArray] = useState([]);



  const handleAdd = (addItem) => {

    const updatedArray = [...cartArray];
    const itemInCart = updatedArray.find((item) => item.id === addItem.id);
  
    if (itemInCart) {
      // If the item is found in cartArray Update the quantity
      itemInCart.quantity += 1;
    } else {
      // Create a new item with all properties from the item
      // and add the quantity property initialized to 1
      updatedArray.push({ ...addItem, quantity: 1 });
    }
  
    setCartArray(updatedArray);
    alert("Cart updated successfully");
  };
  


  const handleRemoveItem= (rmvItem) => {

    const updatedArray = cartArray.filter((item) => (item.id !== rmvItem.id))
  setCartArray(updatedArray);
    alert("removed Item successfully");
  };

  const removeOne = (rmvItem) => {
    if (rmvItem.quantity===1) {
      handleRemoveItem(rmvItem)
    } else {
      const updatedArray = [...cartArray];
      const itemInCart = updatedArray.find((item) => item.id === rmvItem.id);
      itemInCart.quantity -= 1;
      setCartArray(updatedArray);
    }
  }

  const emptyCart = () => {
    setCartArray([]);
    alert("cart emptied");

  }


  const productItem = productsArray.map((ProdArrItem) => (
    <Col key={ProdArrItem.id}>
      {/* <h1>{item.title}</h1> */}
      <ProductCard ProdArrItem={ProdArrItem} handleAdd={handleAdd} cartArray={cartArray} handleRemoveItem={handleRemoveItem} />
    </Col>
  ));

  return (
    <>
      <h1 align="center" className="p-3">
        welcome to the store!
      </h1>
      <ModalActivate cartArray={cartArray} handleAdd={handleAdd} handleRemoveItem={handleRemoveItem} removeOne={removeOne} emptyCart={emptyCart} />
      <Row
        xs={1}
        sm={2}
        md={3}
        className="g-4 align-items-center viewport-height"
      >

        {productItem}
      </Row>
    </>
  );
};

export default Store;
