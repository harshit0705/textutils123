
import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import About from './component/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from "react-router-dom";

function App() {
  const[alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
        typ: type
    })
  }


  let [mode,newmode]=useState('light');
  const toogle=()=>{
    console.log('heloo');
    
    if(mode==='dark'){
      newmode('light')
      document.body.style.backgroundColor='white';
      
      
    }
    else{
      newmode('dark')
      
      document.body.style.backgroundColor='grey';
      showalert('darkmode is on','success');
      
    }
  }
  setTimeout(() => {
    setalert(null);
  }, 2000);


  return (
  <>
 <Router>
  <Navbar title="TextUtils"  mode={mode} toogle={toogle}/>
  
  <Alert  alert={alert}/>
  
  

         
         <Routes>
         <Route   path="/" element={ <div className="container">
          <Textarea  mode={mode} showalert={showalert}/> </div>}> </Route>
          <Route exact path="/about" element={<About />}> </Route>
         
         
         
           
         
          </Routes>
        
  
   </Router>
  </>
  );
}

export default App;
