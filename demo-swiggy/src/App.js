import './App.css';
import Navigation from './Components/Navigation';
import Navdownlink from './Components/Navdownlink';
import ResturantDishes from './Components/ResturantDishes';
import ResturantPlaces from './Components/ResturantPlaces';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Navdownlink/>
      <ResturantDishes/>
      <ResturantPlaces/>
      <Footer/>
    </div>
  );
}

export default App;
