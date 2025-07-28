import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Portfolio from './components/portfolio.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Home() {
  return (
    <div>
        <Link to="/ynk" className='link'>yn_k</Link>
    </div>
  );
}

function App() {

  return (
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ynk" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
