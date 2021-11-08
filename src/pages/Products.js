import React from 'react';
import {Link} from 'react-router-dom'
import style from 'styled-components';
 
const Container = style.div`
border: 1px solid black;
background: grey;
color:white;
display: flex;
justify-content:center;
flex-direction:column;
align-items:center;


`
const LinkContainer = style.div`


color:white;
display: flex;
font-size:30px;
padding:10px;

`

const Products = () => {
    const words = ['papa1','papa2','papa3','papa4']
  return (
    <Container>
      {words.map((item ,i) => {
        return(
           <LinkContainer key={i}>
            <Link 
            style={{border:'5px solid black',textDecoration: 'none',color:'white',margin:'10px',background: 'orange'}}
            to={`/param/${i}`}>
            <p>{item}</p>
            </Link>
            
           </LinkContainer>
        )
      })}
    </Container>
  )
}

export default Products
