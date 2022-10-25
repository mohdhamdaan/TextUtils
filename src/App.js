/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';



// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#1c2f42'
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>


    {/* <Router> */}


      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">


        {/* <Routes>
          <Route exact path="/about" element = {<About/>}/>
            
          

          <Route exact path="/" element = {<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
          
        {/* </Routes> */} 

        <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
        
      </div>


    {/* // </Router> */}
    </>
  );
}

export default App;
