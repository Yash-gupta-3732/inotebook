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


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message={"Beware You Are Deleting Your Notes"}/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/About' element={<About />} />
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/Signup' element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
