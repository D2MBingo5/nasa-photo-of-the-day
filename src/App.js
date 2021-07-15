import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY, SPEC_DATE } from './constants/index'
import ReactPlayer from "react-player"
import styled from "styled-components"
// import theme from './theme'

function App() {
  const [apod, setApod] = useState('')

  useEffect(() => {
    // api call
    console.log('in useEffect')
    axios.get(`${BASE_URL}?api_key=${API_KEY}`) // For a specific date, add ${SPEC_DATE} to this api call string and change the SPEC_DATE const in constants/index.js. For current day, remove ${SPEC_DATE} 
      .then(res => {
        console.log(res.data)
        setApod(res.data)
        
      })
      .catch(err => console.log(err))
  }, [])

// Styling
  const StyledDiv = styled.div`
    text-align: center;
    background-color: ${props => props.theme.primaryColor};
  `
  const StyledHeader = styled.header`
    background-color: ${props => props.theme.secondaryColor};
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => props.theme.white};
  `
  const StyledFooter = styled.footer`
  background-color: ${props => props.theme.secondaryColor};
  max-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.white};
  padding: 2vh;
  `
  const StyledLink = styled.a`
  color: ${props => props.theme.linkColor};
  `
  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  const StyledP = styled.p`
    border-radius: 8px;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
    width: 90%;
    padding: 1%;
  `

// console.log(apod.media_type)

  return (
    <StyledDiv>
      <StyledHeader>
        NASA Astronomy Picture of the Day!
      </StyledHeader>
      <ContentContainer>
        <StyledP>{apod.date} - {apod.title}</StyledP>
        <div>{
          (apod.media_type === 'video' ? <ReactPlayer url={apod.url} /> : <img src={apod.url} alt='NASA APOD'></img>)
        } {/* This div and ternary statement say that  if the APOD of the day 'media_type' is a video, render a ReactPlayer with the apod.url, if it's not a video, render an img. I don't forsee any media types besides videos and images, so this may work on any day. Time will tell */}
        </div>
        <StyledP>{apod.explanation}</StyledP>
      </ContentContainer>      
      <StyledFooter>        
        <StyledLink href='https://apod.nasa.gov/apod/astropix.html' target="_blank"
      rel="noopener noreferrer">Click here to go to the NASA website's APOD page!</StyledLink>
      </StyledFooter>
    </StyledDiv>
  );
}

export default App;
