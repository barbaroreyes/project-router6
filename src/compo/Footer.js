import React from 'react'
import style from 'styled-components';

const Container = style.div`
border: 1px solid black;
background: black;
color:white;
height:40px;
display: flex;
justify-content:center;
align-items:center;
font-size:40px;
`
const Footer = () => {
  return (
    <Container>
      fotter
    </Container>
  )
}

export default Footer
