import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './App.css';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
