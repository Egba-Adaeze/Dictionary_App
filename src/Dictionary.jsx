import React, { useState } from 'react';
import axios from 'axios';
import { FcSpeaker } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";



// Setting up the initial states using react hook 'useState'
const DictionaryApp = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  
  // Function to fetch information on button
  // click, and set the data accordingly
  function getMeaning() {
    axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    ).then((response) => {
      setDefinition(response.data[0]);
    })};
  
// Function to play and listen the
  // phonetics of the searched word
  function playAudio() {
  let audio = new Audio(definition.phonetics[0].audio);
  audio.play();
  }
  return (
    <div className="App">
      <h1> Dictionary App</h1>
      <div className="searchBox">
 
         {/* Taking user input */}
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" background-color='black'/>
        </button>
      </div>
      {definition && (
        <div className="showResults">
          <h2>
            {definition.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
            >
              <FcSpeaker size="26px" background-color='black' />
            </button>
          </h2>
          <hr/>
          <h4>Definition:</h4>
 
           
 <p>{definition.meanings[0].definitions[0].definition}</p>
              <hr/>

          <h4>Parts of speech:</h4>
 
           
<p>{definition.meanings[0].partOfSpeech}</p>
 
              <hr/>
          
 
          <h4>Example:</h4>
 
           
<p>{definition.meanings[0].definitions[0].example}</p>
 
        </div>
      )}
    </div>
  );
}

export default DictionaryApp;
