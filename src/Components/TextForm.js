import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","Success")

  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success")
  };
  const handleClearText = ()=>{
    let newText = ''
    setText(newText)
    props.showAlert("All Text are Clered","Success")

  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed All Extra Spaaces","Success")

  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const capitalize=()=>{
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      const str2 = arr.join(" ");
      setText(str2)
      props.showAlert("Converted to Frist letter Capitized","Success")

  }}

  const [text, setText] = useState("Enter text here");

  const Copy=()=> {
   let copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text are copyed","Success")
  }
  return (
    <>
      <div className="container" style={{color:props.mode ==='dark'? 'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3 ">
          <textarea className="form-control" id="myInput" style={{backgroundColor:props.mode==='light'? 'white':'#3852b7',color:props.mode ==='dark'? 'white':'black'}}  value={text} rows={8} onChange={handleOnChange} defaultValue={""}/>
          <div className="d-flex justify-content-between my-2 ">
          <button className="btn btn-primary  " onClick={handleUpClick}>
            UpperCase
          </button>
          <button className="btn btn-primary " onClick={handleLowerCase}>
            LowerCase
          </button>
          <button className="btn btn-primary" onClick={capitalize}>
            capitalize first Letter
          </button>
          <button className="btn btn-primary" onClick={handleClearText}>
            clearText
          </button>
          <button className="btn btn-primary" onClick={Copy}>
            CopyText
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
          </div>
        </div>
      </div>

      <div className="container my-3 "style={{color:props.mode==='dark'? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length}</b> words and {text.length} characters </p>
        <p><b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!=0}).length}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter to someting in textbox abouv to previw here'}</p>
      </div>
    </>
  );
} 