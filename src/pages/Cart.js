import React from 'react'
import style from 'styled-components';

const Container = style.div`
border:5px solid black; 
margin:10px;
`
const ContainerItem = style.div`
border:1px solid black; 
margin:10px;
display:flex;
justify-content:center
flex-direction:column;
align-align:center;
`
const Cart = (props) => {
  console.log('props',props.cart)
  return (
    <Container>
     Tu Carrito
     <ContainerItem>
     {props.cart}
     </ContainerItem>
   
    </Container>
  )
}

export default Cart
