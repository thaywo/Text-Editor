import React, { useState } from 'react'
import './Texteditor.css'

const TextEditor = () => {

  const [input, setInput] = useState('')
 
  const [output, setOutput] = useState('')


const [bold, setBold] = useState('');
const fontToBold = () => {
  const result = document.getElementById('text-output').classList.toggle('bold');
  setBold(result)
}

const [italic, setItalic] = useState('');
const fontToItalic = () => {
  const result = document.getElementById('text-output').classList.toggle('italic');
  setItalic(result)
}

const [underline, setUnderline] = useState('')
const fontToUnderline = () => {
  const result = document.getElementById('text-output');
  if (result.classList.contains('underline')) {
    result.classList.remove('underline');
  }
  else{
    result.classList.add('underline');
  }
  setUnderline(result)
}

const [center, setCenter] = useState('')
const textToCenter = () => {
const result = document.getElementById('text-output').style.textAlign = 'center';
 setCenter(result)
 
}

const [left, setLeft] = useState('')
const textToLeft = () => {
const result = document.getElementById('text-output').style.textAlign = 'left';
 setCenter(result)
 
}

const [right, setRight] = useState('')
const textToRight = () => {
const result = document.getElementById('text-output').style.textAlign = 'right';
 setCenter(result)
 
}

  return (
   <>
        <h1 className="banner p-3 text-primary">TextEditor</h1>
        <div className="row">
          <div className="col">
            <button id="bold" type="button"  className="btn btn-light" onClick={fontToBold } >Bolb</button>
            <button id="italic" type="button"  className="btn btn-light" onClick={fontToItalic} >Italic</button>
            <button id="underline" type="button"  className="btn btn-light" onClick={fontToUnderline} >Underline</button>
            <button id="left-align" type="button"  className="align btn btn-light" onClick={textToLeft}><i className="fas fa-align-left"></i></button>
            <button id="center-align" type="button"  className="align btn btn-light" onClick={textToCenter}><i className="fas fa-align-center"></i></button>
            <button id="right-align" type="button"  className="align btn btn-light" onClick={textToRight}><i className="fas fa-align-right"></i></button>
          </div>
        </div>
        <hr />
        <div className="row editor">
          <div className="col">
            <div className="form-group">
              <label for="text-input">Your Document Text</label>
              <textarea className="form-control" id="text-input" rows="3" onChange={(event) => setInput(event.target.value)}>

              </textarea>
          </div>
          </div>
          <div className="col">
            <label for="text-input">Formatted Text</label>
              <div id="text-output" className="bg-light">
           {input} 
            </div>
          </div>
        </div>
    </>
  )
}

export default TextEditor