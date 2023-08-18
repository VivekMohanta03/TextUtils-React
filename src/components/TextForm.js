import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase", "success");
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Text Cleared", "success");
    }   
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        console.log("I am a copy");
        var txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copied to ClipBoard", "success");
    }
    const [text, setText] = useState('');
    //text = "new text"; //Wrong way to change the state
    //setText("newText"); //Correct way to change the state
    return (
        <>
        <div className='container' style={
                    {color: props.mode==='light'?'black':'white'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="7" placeholder='Enter text here' style={
                    {backgroundColor: props.mode==='light'?'white':'#2125', color: props.mode==='light'?'black':'white'}
                    }></textarea>
            </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={
                    {color: props.mode==='light'?'black':'white'}}>
            <h3>Your text Summary: </h3>
            <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters </p>
            <p>Average reading time <b>{text.split(" ").length*0.008}</b> minutes</p>
            <h2>Preview: </h2>
            <p>{text.length?text:"Enter text to preview"}</p>
        </div>
        </>
    )
}
