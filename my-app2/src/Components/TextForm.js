import React, {useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowerclick=()=>{
        let newText=Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handlesentenceclick=()=>{
        let firstText=Text[0].toUpperCase();
        let OtherpartofText =Text.slice(1);
        let concatText=firstText.concat(OtherpartofText);
        setText(concatText);
    }
    const handleClearclick=()=>{
        let newText=" "
        setText(newText);
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const [Text,setText]=useState("enter text");
    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleonchange} id="mybox" rows="3" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2"onClick={handleupclick}>Uppercase</button>
            <button className="btn btn-primary mx-2"onClick={handleLowerclick}>Lowercase</button>
            <button className="btn btn-primary mx-2"onClick={handleClearclick}>Clear</button>
            <button className="btn btn-primary mx-2"onClick={handlesentenceclick}>Sentencecase</button>
        </div>
    )
}
