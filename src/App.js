// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'
// Importando o component Footer
import Footter from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
       <Footter />
      </div>
    );
  }
}

export default App;