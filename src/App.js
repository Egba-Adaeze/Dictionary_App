import React from 'react'
import ReactDOM from 'react-dom';
import {Routes, Route} from 'react-router-dom';
import DictionaryApp from '../src/Dictionary.jsx';
import "./App.css"

export default function 
() {
  return (
    <>
       <Routes>
          <Route path="/" element= {<DictionaryApp />} />
         
       </Routes>
    </>
  )
}
