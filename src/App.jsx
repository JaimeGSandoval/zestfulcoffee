import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MobileNavModal from './components/mobile-nav-modal/mobile-nav-modal';
import MobileHeader from './components/mobile-header/mobile-header';
import Home from './components/home-page/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import './sass/main.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <MobileNavModal showModal={showModal} setShowModal={setShowModal} />
      <MobileHeader setShowModal={setShowModal} />

      <main className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home showModal={setShowModal} />}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/plan" render={() => <h1>Plan Page</h1>} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
