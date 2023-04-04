import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
   <div>
    <section className="header">
        <img src="./Leo.jpg"></img> 
        <h1>ARGUELLO CREATIONS</h1>  
    </section>
    <Navbar/>
   </div>
  );
}

export default Header;