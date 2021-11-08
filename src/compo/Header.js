import React from 'react';
// import {useNavigate} from 'react-router-dom';
import Nav from './Nav'
import style from 'styled-components';
 
const Container = style.div`
width:100%;
border: 1px solid black;
background: blue;
color:white;
padding:10px;
display: flex;
justify-content:center;
align-items:center;
font-size:20px;
margin:10px;
`

const Header = () => {
    // const navigate = useNavigate()
  return (
    <Container>
       
     <Nav/>
    </Container>
  )
}

export default Header
