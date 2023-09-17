import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
const showAlert= (message,type)=>{
  setAlert({
    message:message,
    type:type    
  })
  setTimeout(()=>{
    setAlert(null)
  },2000);
}
const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}

  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.getElementById("navbar").style.backgroundColor = '#244296';
      document.body.style.backgroundColor = '#244296';
      showAlert("Dark Mode Has Been Enabled","Success");
    }else{
        setMode('light');
        document.getElementById("navbar").style.backgroundColor = 'red';
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Has Been Enabled","Success");
        
    }
  }
               
  return (
  <>
  <Router>

    <Navbar title="TextUtils"  HomeText="About"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/> 
          </Route>
          <Route exact path="/">
    <TextForm showAlert={showAlert} heading="Enter aa text to analyze below" mode={mode}/>
          </Route>
        </Switch>
    </div>
  </Router>
  </>
  );
}

export default App;