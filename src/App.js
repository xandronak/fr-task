import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
      <div className="app">
        <Header />
        <Hero />
        <Offers />
        <Footer />
      </div>
  );
}

export default App;