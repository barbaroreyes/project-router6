import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import style from 'styled-components';

const Container = style.div`
border:1px solid;
display: flex;
flex-direction: column;
width:100px;
heigth:100px;
`
const Param = (props) => {
    const navigate= useNavigate()
    const param = useParams()
    console.log(param,'params')
  return (
    <Container onClick={()=> {
      navigate('/cart'); 
      props.addTocart(props.words[param.id])
      }}>
      {props.words[param.id]}
    </Container>
  )
}

export default Param
