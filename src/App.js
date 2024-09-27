import { useState } from 'react';
// import './App.css';
import Navbar from './Components/Navbar'
import Text from './Components/Text'
// import About from './Components/About'
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const [mode, setMode] = useState('light');

  // const removeClass = () =>
  // {
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  // }

  const toggle = (cls) => {
    // removeClass();
    // document.body.classList.add('bg-' +cls);
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = 'rgb(13 46 58)';
      document.body.style.backgroundColor = 'black';
      // document.body.style.color='white'
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color='black'
      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar tittle="Text Converter" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}></Route> */}
        {/* <Route exact path="/" element={ */}
        <>
        <div className="container my-3">
            <Text mode={mode} alert={showAlert} />
          </div>
        </>
        {/* }>  */}
        {/* </Route> */}
      {/* </Routes> */}
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;
