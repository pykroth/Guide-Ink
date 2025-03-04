import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Artboard from './Pages/Artboard/Artboard';
import Calendar from './Pages/Calendar/Calendar';
import Character from './Pages/Character/Character';
import Characterboard from './Pages/CharacterBoard/Characterboard';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Storyboard from './Pages/Storyboard/Storyboard';


function App() {


  return (
 <div className='App'>
<Router>
  <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Artboard' element={<Artboard />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/Character' element={<Characterboard />} />
          <Route path='/Character/:id' element={<Character />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Storyboard' element={<Storyboard />} />
  </Routes>
</Router>
 </div>
    
  )
}

export default App
