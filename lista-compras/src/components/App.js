import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Lista from './Lista';
import Produtos from './Produtos';
import lista from '../img/lista.png';
import produtos from '../img/produtos.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>

        <div id="banner">
          Lista de Compras
        </div>

        <div id="conteiner">
          <Switch>
            <Route exact path="/" component={Lista} />
            <Route exact path="/produto" component={Produtos} />
          </Switch>
        </div>

        <div id="menu">

          <div id="barraBotoes">
            <div className="botaoMenu">
              <img src={lista} alt="Lista de compras" />
              <span>Lista</span>
            </div>

            <div className="botaoMenu">
              <img src={produtos} alt="Cadastrar novo produto" />
              <span>Produtos</span>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
