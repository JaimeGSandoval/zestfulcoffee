import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home-page/Home';
import About from './pages/about-page/About';
import Plan from './pages/plan-page/Plan';
import Footer from './components/footer/Footer';
import './sass/main.scss';

const MobileNavModal = lazy(() =>
  import('./components/mobile-nav-modal/mobile-nav-modal')
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...</div>}>
        <MobileNavModal />
      </Suspense>
      <Header />

      <main className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/plan" component={Plan} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
