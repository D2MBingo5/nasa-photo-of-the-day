import React from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/index'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        NASA Astronomy Picture of the Day!
      </header>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <footer className='App-footer'>        
        <a className='App-link' href='https://apod.nasa.gov/apod/astropix.html'>Click here to go to the NASA website's APOD page!</a>
      </footer>
    </div>
  );
}

export default App;
