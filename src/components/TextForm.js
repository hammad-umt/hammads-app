import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText] = useState('Enter Text Here');
    const handleOnChange = (event) => {
        console.log('Handle on Change was clicked')
        setText(event.target.value);
    }
    const handleUpperClick = () =>{
        console.log('Upper Click was Clicked');
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase','success');
    }
    const handleLowerClick = () =>{
        console.log('Upper Click was Clicked');
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase','success');
    }
    const handleClear = () => {
        setText('');
        console.log('clear was clicked');
        props.showAlert('Text Cleared','success');
    }    
    return (
    <div className="mb-3 " style={{color:props.mode==='light'?'black':'white'}} >
    <h1 >Enter Text Here To Analyze</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label" ></label>
  <textarea className="form-control"value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}></textarea>
  <button onClick={handleUpperClick} class="btn btn-primary mx-1 my-1">Convert to UpperCase</button>
  <button onClick={handleLowerClick} class="btn btn-primary mx-1 my-1">Convert to LowerCase</button>
  <button onClick={handleClear} class="btn btn-warning mx-1 my-1">Clear</button>
     <h2>
        Summary
    </h2>
    <p>{text.split(/\s+/).filter((word) => word !== "").length} Words, {text.length} Characters</p> 
    <p>Minutes to Read : {text.length*0.08}</p>
    <h2>
        Preview
    </h2>
    <p>{text.length>0?text:'Enter Your Text to Preview it here'}</p>
</div>
    
  )
}
