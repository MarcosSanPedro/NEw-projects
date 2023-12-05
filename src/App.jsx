import { Hero } from './components/Hero';
import { Header } from './components/Header/Header';
import Navbar from './components/NavBarV1';

function App() {
  
  return (
    <div className='container'>
    <div> <Header /> </div>
    <div> <Navbar/></div>
    <div> <Hero /> </div>
    
    </div>
  );
}

export default App;
