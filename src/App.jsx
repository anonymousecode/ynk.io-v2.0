import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import Home from './components/home'
import Journey from './components/journey'
import Skills from './components/skills'
import Works from './components/works'
import Connect from './components/connect'



function Start() {
  return (
    <div>
        <Link to="/home" className='link'>yn_k</Link>
    </div>
  );
}

function App() {

  return (
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/journey" element={<Journey/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/connect" element={<Connect/>}/>
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
