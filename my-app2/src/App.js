
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter,Route, Routes } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1250)
  }
  const ChangeTheme = (Theme) => {
    if (mode !== 'light') {
      document.body.style.backgroundColor = Theme;
      showAlert(`Theme is changed to ${Theme}`, 'success');
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title='Text Utility' mode={mode} toggleMode={toggleMode} changeTheme={ChangeTheme}/>
        <Alert alert={alert}/>
        <div className="container">
       < TextForm showAlert={showAlert} heading='Convert ,Format Your Text' mode={mode}/>
        {/* <Routes> */}
        {/* <Route path="/" element={<TextForm showAlert={showAlert} heading='Convert ,Format Your Text' mode={mode} />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
