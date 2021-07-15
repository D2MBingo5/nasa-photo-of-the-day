import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY, SPEC_DATE } from './constants/index'
import ReactPlayer from "react-player"

function App() {
  const [apod, setApod] = useState('')

  useEffect(() => {
    // api call
    console.log('in useEffect')
    axios.get(`${BASE_URL}?api_key=${API_KEY}${SPEC_DATE}`)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
        
      })
      .catch(err => console.log(err))
  }, [])

console.log(apod.date)

  return (
    <div className="App">
      <header className='App-header'>
        NASA Astronomy Picture of the Day!
      </header>
      <div>
        <p>{apod.date} - {apod.title}</p>
        <div className='App-insert'>
         <ReactPlayer url={apod.url} /> 
         <img src={apod.url} alt='NASA APOD'></img> {/* TEMPORARY SOLUTION */}
        </div> {/* Problem: This will only work on days where there is a video as the Picture of the Day. This can be made more dynamic by having a component in a separate file generate HTML depending on the content type (apod.media_type) */}
        <p>{apod.explanation}</p>
      </div>      
      <footer className='App-footer'>        
        <a className='App-link' href='https://apod.nasa.gov/apod/astropix.html'>Click here to go to the NASA website's APOD page!</a>
      </footer>
    </div>
  );
}

export default App;
