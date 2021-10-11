import React, { useRef, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
// import MobileNavModal from './components/mobile-nav-modal/mobile-nav-modal';
import Header from './components/header/header';
import Home from './components/home-page/Home';
import About from './components/about-page/About';
import Plan from './components/plan-page/Plan';
import Footer from './components/footer/Footer';
import './sass/main.scss';

// const Home = lazy(() => import('./components/home-page/Home'));
// const About = lazy(() => import('./components/about-page/About'));
// const Plan = lazy(() => import('./components/plan-page/Plan'));

const MobileNavModal = lazy(() =>
  import('./components/mobile-nav-modal/mobile-nav-modal')
);

function App() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.open();
  };

  return (
    <div className="App">
      <Suspense fallback={<div>...</div>}>
        <MobileNavModal ref={modalRef} />
      </Suspense>
      <Header openModal={openModal} />

      <main className="container">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/plan" render={() => <Plan />} />
          {/* <Suspense fallback={<p>Loading...</p>}>
          </Suspense> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
