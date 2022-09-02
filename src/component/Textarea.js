import { useState } from "react";
import React from "react";

export default function Textarea(props) {
  const handlerclick = () => {
    console.log("handlerclick");
    let upcase = txt.toUpperCase();
    settxt(upcase);
    props.showalert('converted to uppercase','success')
    
  };

  const handlerclickclear = () => {
    console.log("handlerclickclear");
   
    settxt(" ");
    props.showalert('cleared','success')
  };

  const handlerchange = (event) => {
    console.log("onchange is called");
    settxt(event.target.value)
  }
  const [txt, settxt] = useState("type something here");
  return (
    <>
    <div className="container my-4 " >
      <div className="form-floating" >
          <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':' #1a1818',color:props.mode==='light'?"black":'white'}} id="exampleFormControlTextarea1"  onChange={handlerchange}  value={txt}rows="40"></textarea>
        
      </div>
      </div>
      <div className="container my-4">
      <button className="btn btn-primary" onClick={handlerclick}>CONVERT UPPERCASE</button>
      <button type="button" className="btn btn-warning mx-3" onClick={handlerclickclear}>clear</button>
      </div>
      <div className="container">
        <h1 style={{color:props.mode==='light'?"black":'white'}} >Your text summary</h1>
        <p style={{color:props.mode==='light'?"black":'white'}}>{  txt.trim().split(" ").filter((element)=>element !=="").length  }Words and {txt.length} character</p>
      </div>
     
    </>
  );
}
