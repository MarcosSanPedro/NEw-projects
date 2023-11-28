import { LoginPage } from './pages/LoginPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { MainPage } from './pages/MainPage';

function App() {
  

  return (
    
    <Router>
     <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/SignupPage' element={<SignupPage/>} />
      <Route path='/MainPage' element={<MainPage/>} />
     </Routes>
     </Router>
     
    
  )
}

export default App