import React from 'react'
import {useNavigate} from 'react-router-dom';
import style from 'styled-components';
 
const Container = style.div`
width:50%;
border: 3px solid black;
background: blue;
color:white;
height:40px;
display: flex;
justify-content:space-around;
align-items:center;
font-size:20px;
padding:10px;
margin:10px;
`

const Nav = () => {
    const navigate = useNavigate()
  return (
    <Container>
     <div onClick={()=>navigate('/')}>Home</div>
     <div onClick={()=>navigate('/all')}>Products</div>
     {/* <div onClick={()=>navigate('/param/pepe/papo')}>Param</div> */}
    </Container>
  )
}

export default Nav
