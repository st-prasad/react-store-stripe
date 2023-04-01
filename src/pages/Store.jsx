import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ModalActivate from "../components/ModalActivate";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../ProductsData";

const Store = () => {


// state for product cards
  const [cartArray, setCartArray] = useState([]);

  const handleClick = (arrayItem) => {
    // const updatedArray = dataArray.filter(item => item.id !== "default");
    // updatedArray.push(item)
    const updatedArray = [...cartArray, arrayItem];
  setCartArray(updatedArray);
    console.log(updatedArray);
  };

  // product cards render

  const productItem = productsArray.map((item) => (
    <Col key={item.id}>
      {/* <h1>{item.title}</h1> */}
      <ProductCard item={item} handleClick={handleClick} />
    </Col>
  ));

  return (
    <>
      <h1 align="center" className="p-3">
        welcome to the store!
      </h1>
      <ModalActivate cartArray={cartArray} />
      <Row
        xs={1}
        sm={2}
        md={3}
        className="g-4 align-items-center viewport-height"
      >
        {/* <Row xs={1} md={1} className="g-4 align-items-center viewport-height"> */}
        {productItem}
      </Row>
    </>
  );
};

export default Store;
