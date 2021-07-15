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
    axios.get(`${BASE_URL}?api_key=${API_KEY}`) // For current day, remove ${SPEC_DATE} from the api call string
      .then(res => {
        console.log(res.data)
        setApod(res.data)
        
      })
      .catch(err => console.log(err))
  }, [])

// console.log(apod.media_type)

  return (
    <div className="App">
      <header className='App-header'>
        NASA Astronomy Picture of the Day!
      </header>
      <div className='content-container'>
        <p className='p-area'>{apod.date} - {apod.title}</p>
        <div>{
          (apod.media_type === 'video' ? <ReactPlayer url={apod.url} /> : <img src={apod.url} alt='NASA APOD'></img>)
        } {/* This div and ternary statement say that  if the APOD of the day 'media_type' is a video, render a ReactPlayer with the apod.url, if it's not a video, render an img. I don't forsee any media types besides videos and images, so this may work on any day. Time will tell */}
        </div>
        <p className='p-area'>{apod.explanation}</p>
      </div>      
      <footer className='App-footer'>        
        <a className='App-link' href='https://apod.nasa.gov/apod/astropix.html'>Click here to go to the NASA website's APOD page!</a>
      </footer>
    </div>
  );
}

export default App;
