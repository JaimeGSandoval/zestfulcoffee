import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MobileNavModal from './components/mobile-nav-modal/mobile-nav-modal';
import MobileHeader from './components/mobile-header/mobile-header';
import './sass/main.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <MobileNavModal showModal={showModal} setShowModal={setShowModal} />
      <MobileHeader setShowModal={setShowModal} />
      <Switch>
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route exact path="/about" render={() => <h1>About Page</h1>} />
        <Route exact path="/plan" render={() => <h1>Plan Page</h1>} />
      </Switch>
    </div>
  );
}

export default App;
