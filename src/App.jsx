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
  const greetings = ['Hello','नमस्ते ','നമസ്കാരം','வணக்கம்','Hola','Bonjour'];
  const [index,setIndex]= useState(0);
  const navigate = useNavigate();

  useEffect(()=> {
    if (index < greetings.length){

      const timer = setTimeout(()=>{setIndex(prev=>prev+1);},300);
      return () => clearTimeout(timer);
    }
    else{
      const redirectTimer = setTimeout(()=>{
        navigate('/home');
      },100);
      return () => clearTimeout(redirectTimer);

    }
  },[index,greetings.length]);

  return (
    <div className="space-grotesk" style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',height: '100vh', fontSize: '2rem', textAlign: 'center',color: '#F47216'}} >
        <div>
          <h1 className='fw-bold fs-1' style={{color:'#F47216'}}>{greetings[index]}</h1>
        </div>
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
