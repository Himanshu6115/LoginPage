import React from 'react';

import '../CSS/Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="#" activeClassName="active" className="navbar-item">HOME</a>
      <a href="#" className="navbar-item">ADD NEW RECORD</a>
      <a href="#" className="navbar-item">RECORDS</a>
      <a href="#" className="navbar-item">DELETE</a>
      <a href="#" className="navbar-item">E-MAIL</a>
      <a href="#" className="navbar-item">LOGOUT</a>
  </section>
  );

}

export default Navbar;