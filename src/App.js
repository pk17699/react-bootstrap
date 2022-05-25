import './App.css';
import Banners from './Components/Banner/Banner';
import Cards from './Components/Card/Card';
import Footers from './Components/Footer/footer';
import Navbars from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbars />
      <Banners />
      <Cards />
      <Footers />
    </div>
  );
}

export default App;
