import React from 'react'
import {useParams} from 'react-router-dom'

const Param = () => {
    const param = useParams()
    const words = ['papa1','papa2','papa3']
    console.log(param,'params')
  return (
    <div>
      {words[param.id]}
    </div>
  )
}

export default Param
