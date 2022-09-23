import './App.scss';
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';
function App() {
    const {user} = useContext(AuthContext);
  return (
    
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route  path="/register" element={!user ? <Register /> :  <Navigate to="/"/> } />
    <Route  path="/login" element={!user ? <Login /> :  <Navigate to="/"/> } />
    <Route exact path="/" element={ user ? <Home /> :  <Navigate to="/register"/> } />
    {user && (
          <>  
            <Route path="/movies" element={<Home type="movie"  />} />
            <Route path="/series" element={<Home type="serie"  />} />
            <Route path="/watch" element={<Watch  />} />
          </>
        )}
    </Routes>

  </BrowserRouter>
    </div>
  );
}

export default App;
