import { LoginPage } from './pages/LoginPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { Header } from './components/Header';
import { EventsPage } from './pages/EventsPage';

import { Hero } from './components/Hero';
import { Header } from './components/Header/Header';

function App() {
  
  return (
    
    { /* <Router>
     <Routes>
      <Route path='/' element={ <EventsPage/>} />
      <Route path='/SignupPage' element={<SignupPage/>} />
      <Route path='/MainPage' element={<Header/>}  />
      <Route path='/EventsPage' element={<LoginPage/> }  /> 
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
