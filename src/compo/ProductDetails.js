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
    const words = ['papa1','papa2','papa3','papa4']
    console.log(param,'params')
  return (
    <Container>
      {words[param.id]}
    </Container>
  )
}

export default Param
