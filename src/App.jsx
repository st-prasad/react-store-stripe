import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Cansel from "./pages/Cansel";
import Store from "./pages/Store";
import Success from "./pages/Success";

const App = () => {
  return (
    <Container>
      <NavbarComponent />
        <Link to={"/success"} >success</Link>
      <Routes>
        {/* base route/ default route */}
        <Route index element={<Store/>} />
        <Route path="success" element={<Success/>} />
        <Route path="cansel" element={<Cansel/>} />
        <Route />
      </Routes>
    </Container>
  );
};

export default App;
