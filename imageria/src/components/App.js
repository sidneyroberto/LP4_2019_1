import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Pesquisa from './Pesquisa';
import VisualizacaoImagem from './VisualizacaoImagem';
import NaoEncontrado from './NaoEncontrado';

class App extends Component {

  render() {

    return (
      <div>

        <div id="banner">
          Imageria
        </div>

        <div id="conteudo" className="container">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={Pesquisa} />
              <Route exact path="/visualizacao" component={VisualizacaoImagem} />
              <Route component={NaoEncontrado} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;