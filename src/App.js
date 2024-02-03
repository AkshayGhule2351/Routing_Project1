// import logo from './logo.svg';
import './App.css';
import About from './About';
import Career from './Career';
import Home from './Home';
import Information from './Information';
import Login from './Login';
import SignUp from './SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Routes, Route , Link  } from 'react-router-dom';
import Practice from './Practice';




function App(){
  return(
    <Router>
      <div className='App'>
        
        <ul className='App-header'>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/about' >About</Link>
          </li>

          <li>
            <Link to='/career' >Career</Link>
          </li>
       
          <li>
            <Link to='/information' >Information</Link>
          </li>
          <li>
            <Link to='/login' >Login</Link>
          </li>
          <li>
            <Link to='/signup' >SignUp</Link>
          </li>
          <li>
            <Link to='/practice' >Practice</Link>
          </li>
         

        </ul>
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route exact path="/about" element={<About/>} ></Route>
        <Route exact path="/career" element={<Career/>} ></Route>
        <Route exact  path="/information" element={<Information/>} ></Route>
        <Route  path="/login" element={<Login/>} ></Route>
        <Route  path="/signup" element={<SignUp/>} ></Route>
        <Route  path="/practice" element={<Practice/>} ></Route>
    
      </Routes>

      </div>
    </Router>
  );
}
export default App;