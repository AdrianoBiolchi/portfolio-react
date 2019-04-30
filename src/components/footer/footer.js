// Importando o React
import React from "react";

// Importando os components necessários da lib react-materialize
import { Footer, Row, Navbar, NavLink } from 'react-materialize';

const Footter = () => (
  <div className="container">
    <Footer
  copyrights="&copy 2019 Copyright Text" 
  className="indigo darken-1"
>
<h5 className="white-text">
Footer Content
</h5>
<p className="grey-text text-lighten-4">
You can use rows and columns here to organize your footer content.
</p>
</Footer>
</div>
);

export default Footter;