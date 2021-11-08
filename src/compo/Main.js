import React from 'react'
import style from 'styled-components';
 
const Container = style.div`
border: 1px solid black;
background: grey;
color:white;
height:40px;
display: flex;
justify-content:center;
align-items:center;
font-size:40px;

`
const Main = () => {
  return (
    <Container>
      Main in Home
    </Container>
  )
}

export default Main
