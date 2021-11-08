import React from 'react';
import {Link} from 'react-router-dom'
import style from 'styled-components';
 
const Container = style.div`
border: 1px solid black;
background: red;
color:white;
height:40px;
display: flex;
justify-content:center;
align-items:center;
font-size:40px;

`

const All = () => {
    const words = ['papa1','papa2','papa3']
  return (
    <Container>
      {words.map((item ,i) => {
        return(
           <div key={i}>
            <Link to={`/param/${i}`}>
            <p>{item}</p>
            </Link>
            
           </div>
        )
      })}
    </Container>
  )
}

export default All
