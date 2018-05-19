import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Main from './components/Main';
import Auxil from './hoc/Auxil';
import Navigation from './components/Navigation';
import Documents from './components/Documents';


class App extends Component {
  render() {
    return (
      <Auxil>
        <BrowserRouter>
          <div>
            <Route path="/" component={Navigation} />
            <Route path="/documents" component={Documents} />
            <Route path="/home" component={Main} />

          </div>
        </BrowserRouter>
      </Auxil>
    );
  }
}

export default App;
