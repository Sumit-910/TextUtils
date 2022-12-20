import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("success","converted to upper case");
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("success","converted to lower case");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("success","text cleared");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success","text copied");
  };
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success","extra spaces removed");
  }
  return (
    <>
      <div className="container my-2" style={{color: props.mode === "dark"?"#fff":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text} style={{backgroundColor: props.mode === "dark"?"#1415194d":"white",color: props.mode === "dark"?"#fff":"black"}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <br />
      <div className="container" style={{color: props.mode === "dark"?"#fff":"black"}}>
        <p id="word" >
          Number of words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
          <br />
          Number of characters with spaces : {text.length}
          <br />
          Number of characters without spaces : {text.length - text.split(" ").length + 1}
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
