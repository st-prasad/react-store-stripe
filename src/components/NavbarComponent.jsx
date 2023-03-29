import React, { useState } from 'react'
import { Button, Navbar } from 'react-bootstrap'
import Popup from './Popup'

const NavbarComponent = () => {
  const [BtnClicked, setBtnClicked] = useState(false)
  const handleClick = () => {setBtnClicked(true)}

  return (
    BtnClicked ? <Popup /> :
    <>
    <Navbar expand="sm">
        <Navbar.Brand href="/">WEBSTORE</Navbar.Brand>
        <Navbar.Collapse>
          <Button onClick={handleClick}>items</Button>
        </Navbar.Collapse>
    </Navbar>
    </>
    
  )
}

export default NavbarComponent