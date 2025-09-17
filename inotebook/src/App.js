import './App.css';
import {
  BrowserRouter as Router
  , Routes
  , Route
}
  from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/noteStates';
import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { useState } from 'react';


function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
 

  return (
    <>
      <NoteState>
        <Router>
          <Navbar /> 
          {alert && <Alert message={alert.msg} type={alert.type}/>}  
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home showAlert={showAlert} />} />
              <Route exact path='/About' element={<About />} />
              <Route exact path='/Login' element={<Login showAlert={showAlert} />} />
              <Route exact path='/Signup' element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
