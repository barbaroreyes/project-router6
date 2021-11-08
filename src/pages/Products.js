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

const Products = (props) => {
    
  return (
    <Container>
      {props.words.map((item ,i) => {
        
        return(
           <LinkContainer key={i} {...item}>
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
