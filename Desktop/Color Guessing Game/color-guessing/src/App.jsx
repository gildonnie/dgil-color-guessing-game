import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import hexNumbers from './colors.json'

const ColorWrapper = styled.div`
  height: 200px;
  width: 200px;
`

function App() {
  const[ color1, setColor1 ] = useState([]);
  const [color2, setColor2 ] = useState([]);
  const [color3, setColor3 ] = useState([]);
  const [guess, setGuess] = useState('');
  const [correctColor, setCorrectColor] = useState();
  
  
  const hex = hexNumbers;
 
  useEffect(() => {
  const randomColorAnswer = () => {
    const randomHex = Math.floor(Math.random() * hex.length);
    setColor1(hex[randomHex].hex);

    const randomHex2 = Math.floor(Math.random() * hex.length);
    setColor2(hex[randomHex2].hex);

    const randomHex3 = Math.floor(Math.random() * hex.length);
    setColor3(hex[randomHex3].hex);
  }
  randomColorAnswer();

  }, [])



  useEffect(() => {
    const newHexNums = [color1, color2, color3]
    const randomColorAns = Math.floor(Math.random() * newHexNums.length)
    setCorrectColor(newHexNums[randomColorAns]);
  }, [color1, color2, color3])
  
  
  const checkClicked1 = () => {
      if (color1 === correctColor) {
        setGuess('Correct');
      } else {
        setGuess('Wrong')
      }
  }

  const checkClicked2 = () => {
      if (color2 === correctColor) {
        setGuess('Correct');
      }  else {
        setGuess('Wrong')
      }
  }

  const checkClicked3 = () => {
      if (color3 === correctColor) {
        setGuess('Correct');
      }  else {
        setGuess('Wrong')
      }
  }
  
  const restart = () => {
    window.location.reload(false);
  }
  
  console.log(correctColor);
  return (
    <>
      <div>
        <ColorWrapper style={{background: `${correctColor}`}}></ColorWrapper>
        <h1>{guess} </h1>
        <button onClick={checkClicked1}>{color1}</button>
        <button onClick={checkClicked2}>{color2}</button>
        <button onClick={checkClicked3}>{color3}</button>
      </div>
      <button onClick={restart}>Restart</button>
    </>
  );
}

export default App;
