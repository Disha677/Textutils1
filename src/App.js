import './App.css';
// import Events from './components/Events';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
// import Events from './components/Events';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');   //whether dark mode is enabed or not
  // const [text, setText] = useState('Enable Light Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setText('Enable Light Mode');
      document.body.style.backgroundColor = 'grey;';
      showAlert("Dark Mode has been enabled", "sucess");
      document.title = "Textutils-Dark Mode"
    }
    else {
      setMode('light');
      // setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "sucess")
      document.title = "Textutils-Light Mode"
    }

  }
  return (
    <>
      {/* <Navbar title="Navbar" link="New Link"/> */}
      <Router>
      <Navbar title="Navbar" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>

        {/* <Events /> */}
        </Router>
      </>
  );
}



export default App;

