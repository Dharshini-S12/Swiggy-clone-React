import './App.css';
import Navigation from './Components/Navigation';
import Navdownlink from './Components/Navdownlink';
import ResturantDishes from './Components/ResturantDishes';
import ResturantPlaces from './Components/ResturantPlaces';
import Footer from './Components/Footer';
import ResturantFoodcards from './Components/ResturantFoodcards';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <ResturantFoodcards/>
      <Navdownlink/>
      <ResturantDishes/>
      <ResturantPlaces/>
      <Footer/>
    </div>
  );
}

export default App;
