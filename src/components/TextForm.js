import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        setText("");
    }   
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        console.log("I am a copy");
        var txt = document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    const [text, setText] = useState('');
    //text = "new text"; //Wrong way to change the state
    //setText("newText"); //Correct way to change the state
    return (
        <>
        <div className='container'>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="7" placeholder='Enter text here'></textarea>
            </div>
            <div className="btn-group">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-danger" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-warning" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-dark" onClick={handleCopy}>Copy Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h3>Your text Summary: </h3>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p>Average reading time <b>{text.split(" ").length*0.008}</b> minutes</p>
            <h2>Preview: </h2>
            <p>{text}</p>
        </div>
        </>
    )
}
