import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/login';
import Navbar from './components/NavBar';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/movies/:id' element={<MovieDetails />}/>
         
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
  );
}

export default App;