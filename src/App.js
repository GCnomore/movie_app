import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Trailer from './routes/Trailer';
import Detail from './routes/Detail';
import './routes/Home.css';

function App() {
  return (
    <HashRouter>
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' exact={true} component={About} />
      <Route path='/trailer' exact={true} component={Trailer} />
      <Route path='/movie-detail' exact={true} component={Detail} />
    </HashRouter>
  );
}

export default App;
