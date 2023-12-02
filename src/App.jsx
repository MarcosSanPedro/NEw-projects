import { LoginPage } from './pages/LoginPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { Header } from './components/Header';
import { EventsPage } from './pages/EventsPage';

 
function App() {
  

  return (
    
    <Router>
     <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/SignupPage' element={<SignupPage/>} />
      <Route path='/MainPage' element={<Header/>}  />
      <Route path='/EventsPage' element={ <EventsPage/>}  /> 
     </Routes>
     </Router>
     
    
  )
}

export default App