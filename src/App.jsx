<<<<<<< HEAD

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
=======
import { LoginPage } from './pages/LoginPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { MainPage } from './pages/MainPage';
import { Header2 } from './components/Header2';
import { Events } from './components/Events';

import Chrismas from '../public/assets/Christmas-Events.jpg'

import { Hero } from './components/Hero';
import { Header } from './components/Header/Header';
>>>>>>> 4620c9a58f367237505840fbb594455ca33dafec

function App() {
  return (
<<<<<<< HEAD
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
=======
    
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
>>>>>>> 4620c9a58f367237505840fbb594455ca33dafec
  );
}

export default App;