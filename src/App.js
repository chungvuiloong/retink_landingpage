import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Newsletter from './components/Newsletter';
import ServicesCardLayout from './components/ServicesCardLayout';
import Slogan from './components/Slogan';
import VideoBanner from './components/VideoBanner';
import Freelancer from './components/Freelancer';
import FeaturesCard from './components/FeaturesCard';

{/* <span class="i">i</span> */}

function App() {
  return (
    <>
      <Header/>
      <HeroBanner />
      <VideoBanner />
      <FeaturesCard />
      <Slogan />
      <ServicesCardLayout />
      <Freelancer />
      <Newsletter />
      <Footer />




    </>
  );
}

export default App;
