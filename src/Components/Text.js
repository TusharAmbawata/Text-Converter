import React from 'react'
import { useState } from 'react';


export default function Text(props) {
    const toCaptial = () => {
        // console.log('clicked' + text);
        let newText = text.toUpperCase();
        settext(newText);
        props.alert("Converted to UpperCase", "success");
    }

    const toLower = () => {
        // console.log('clicked' + text);
        let newText = text.toLocaleLowerCase();
        settext(newText);
        props.alert("Converted to LowerCase", "success");
    }

    const toClear = () => {
        // console.log('clicked' + text);
        let newText = '';
        settext(newText);
        props.alert("Text Cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log('changed');
        settext(event.target.value);
    }

    const copy = () =>
    {
        let text = document.getElementById('box');
        navigator.clipboard.writeText(text.value);
        props.alert("Coppied to Clipboard", "success");
    }

    const removeSpace = () =>
    {
        let newText = text.split(/[ ]+/);
        settext(newText.join(' '));
        props.alert("Extra spaces removed", "success");
    }


    const [text, settext] = useState("");


    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='text-center'>Enter Your Text Below</h1>
            <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="box" rows="5" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            <div>
                <button style={{display:props.mode==='dark'?'none':'inline'}} disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={toCaptial}>Convert to Uppercase</button>
                <button style={{display:props.mode==='dark'?'inline':'none'}} disabled={text.length === 0} className="btn btn-danger my-3 mx-1" onClick={toCaptial}>Convert to Uppercase</button>
                <button style={{display:props.mode==='dark'?'none':'inline'}}  disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={toLower}>Convert to Lowercase</button>
                <button style={{display:props.mode==='dark'?'inline':'none'}}  disabled={text.length === 0} className="btn btn-danger my-3 mx-1" onClick={toLower}>Convert to Lowercase</button>
                <button style={{display:props.mode==='dark'?'none':'inline'}} disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={toClear}>Clear</button>
                <button style={{display:props.mode==='dark'?'inline':'none'}} disabled={text.length === 0} className="btn btn-danger my-3 mx-1" onClick={toClear}>Clear</button>
                <button style={{display:props.mode==='dark'?'none':'inline'}} disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={copy}>Copy</button>
                <button style={{display:props.mode==='dark'?'inline':'none'}} disabled={text.length === 0} className="btn btn-danger my-3 mx-1" onClick={copy}>Copy</button>
                <button style={{display:props.mode==='dark'?'none':'inline'}} disabled={text.length === 0} className="btn btn-primary my-3 mx-1" onClick={removeSpace}>Remove Extra Spaces</button>
                <button style={{display:props.mode==='dark'?'inline':'none'}} disabled={text.length === 0} className="btn btn-danger my-3 mx-1" onClick={removeSpace}>Remove Extra Spaces</button>
            </div>
        </div>

        <div className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
            <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes to read </p>
        </div>

        <div className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text:"No Text to Preview"}</p>
        </div>
        </>
    )
}
