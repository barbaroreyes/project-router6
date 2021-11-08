import React from 'react'
import {useParams} from 'react-router-dom'
import style from 'styled-components';

const Container = style.div`
border:1px solid;
display: flex;
flex-direction: column;
`
const Param = (props) => {
 
    const param = useParams()
    console.log(param,'params')
  return (
    <Container>
      {props.words[param.id]}
    </Container>
  )
}

export default Param
