import React, { useState } from 'react'
import { Button, Navbar } from 'react-bootstrap'
// import Popup from './Popup'

const NavbarComponent = () => {
  // const [BtnClicked, setBtnClicked] = useState(false)
  // const openPopup = () => (setBtnClicked(true))
  // const closePopup = () => (setBtnClicked(false))

  return (
    // BtnClicked ? <Popup onClick={closePopup} /> :
    <Navbar expand="sm">
        <Navbar.Brand href="/">WEBSTORE</Navbar.Brand>
        <Navbar.Collapse>
          {/* <Button onClick={openPopup}>items</Button> */}
        </Navbar.Collapse>
    </Navbar>
    
  )
}

export default NavbarComponent