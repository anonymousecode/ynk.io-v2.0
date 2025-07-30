import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Home from './components/home'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Works from './components/works'
import Connect from './components/connect'



function Start() {
  const greetings = ['hi','hello','namaste','namaskaram','vanakam'];
  const [index,setIndex]= useState(0);
  const [showLink,setShowLink]=useState(false);
  const navigate = useNavigate();

  useEffect(()=> {
    if (index < greetings.length){

      const timer = setTimeout(()=>{setIndex(prev=>prev+1);},500);
      return () => clearTimeout(timer);
    }
    else{
      const redirectTimer = setTimeout(()=>{
        navigate('/home');
      },0);
      return () => clearTimeout(redirectTimer);

    }
  },[index,greetings.length]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh', fontSize: '2rem' }}>
      {!showLink?(
        <div>{greetings[index]}</div>
      ):(
      <Link to="/home" className='link' style={{ fontSize: '2.5rem', fontWeight: 'bold', textDecoration: 'none' }}>yn_k</Link>)}
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
