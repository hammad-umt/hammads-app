import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
    message:message,
    type:type})
    setTimeout(()=>{
    setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Dark Mode Has Been Enabled','success');
    }
    else if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Has Been Enabled','success');
    }
    else if(mode==='#d63384')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('Dark Mode Has Been Enabled','success');
    }
  }
  const pinkMode=()=>{
    if(mode==='light')
    {
      setMode('#d63384');
      document.body.style.backgroundColor='#d63384';
      showAlert('Pink Mode Has Been Enabled','success');
    }
    else if(mode==='#d63384')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Has Been Enabled','success'); 
    }
    else if(mode==='dark')
    {
      setMode('#d63384');
      document.body.style.backgroundColor='#d63384';
      showAlert('Pink Mode Has Been Enabled','success')
    }
  }
  return (
    <>
    {/* <Navbar title='Hammads App' mode={mode} toggleMode={toggleMode} pinkMode={pinkMode}/>
    <Alert alert={alert}/>
    <TextForm mode={mode} showAlert={showAlert}/> */}
   <Router>
   <Navbar title='Hammads App' mode={mode} toggleMode={toggleMode} pinkMode={pinkMode}/>
    <Alert alert={alert}/>
    {/* <TextForm mode={mode} showAlert={showAlert}/> */}
    <Routes>
          <Route exact path="/hammads-app" element={ 
            <>
            <TextForm mode={mode} showAlert={showAlert}/>
            </>}>
            </Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route exact path="/" element={ 
            <>
            <Navbar title='Hammads App' mode={mode} toggleMode={toggleMode} pinkMode={pinkMode}/>
            <Alert alert={alert}/>
            <TextForm mode={mode} showAlert={showAlert}/>
            </>}>
          </Route>
          <Route exact path="/Home" element={ 
            <>
            <TextForm mode={mode} showAlert={showAlert}/>
            </>}>
          </Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
    </Router>
    </>
    
  );
}

export default App;
