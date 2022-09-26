import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './components/user/Signin';
import Signup from './components/user/Signup';
import UserDashboard from './components/user/UserDashboard';
import Profile from './components/user/Profile';
import Home from './components/core/Home';
import Price from './components/mandi/Price';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='user/dashboard' element={<UserDashboard/>}/>
        <Route path='mandiprices' element={<Price/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
