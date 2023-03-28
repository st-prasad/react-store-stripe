import React from 'react';
import { Col, Row } from "react-bootstrap";
import ProductCard from '../components/ProductCard';
import { productsArray } from '../ProductsData';

const Store = () => {

    const productItem = productsArray.map((item) => 
    <Col key={item.id}>
        {/* <h1>{item.title}</h1> */}
        <ProductCard item = {item} />
    </Col>
    );
  return (
    <>
        <h1 align="center" className='p-3'>welcome to the store!</h1>
        <Row xs={1} sm={2} md={3} className="g-4 align-items-center viewport-height">
        {/* <Row xs={1} md={1} className="g-4 align-items-center viewport-height"> */}
            {productItem}
        </Row>
    </>
  )
}

export default Store