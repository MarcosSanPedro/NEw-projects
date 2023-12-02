import { LoginPage } from './pages/LoginPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { MainPage } from './pages/MainPage';
import { Header2 } from './components/Header2';
import { Events } from './components/Events';

import Chrismas from '../public/assets/Christmas-Events.jpg'

import { Hero } from './components/Hero';
import { Header } from './components/Header/Header';

function App() {
  
  return (
    
    { /* <Router>
     <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/SignupPage' element={<SignupPage/>} />
      <Route path='/MainPage' element={<Header2/>} />
      <Route path='/EventsPage' element={ <Events image={Chrismas} tittle='Hola' description='hi' badges={['hola', 'hi']} />} /> 
     </Routes>
     </Router>
  ) */ }

    <div className='container'>
    <div> <Header /> </div>
    <div> <Hero /> </div>
    </div>
  );
}

export default App;
