import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import Home from './components/home'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
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
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/connect" element={<Connect/>}/>
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
