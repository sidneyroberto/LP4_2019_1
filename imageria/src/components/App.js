import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import Pesquisa from './Pesquisa';
import VisualizacaoImagem from './VisualizacaoImagem';

class App extends Component {

  render() {

    return (
      <div>

        <div id="banner">
          Imageria
        </div>

        <div id="conteudo" className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/pesquisa" component={Pesquisa} />
              <Route path="/visualizacao" component={VisualizacaoImagem} />
              <Redirect from="**" to="/pesquisa" />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
